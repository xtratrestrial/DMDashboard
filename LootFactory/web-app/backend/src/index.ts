import express from 'express';
import cors from 'cors';
import path from 'path';
import fs from 'fs';

// Types for D&D treasure system
interface MagicItem {
    name: string;
    rarity: 'common' | 'uncommon' | 'rare' | 'very-rare' | 'legendary';
    category?: string;
    table_source?: string;  // For DMG 2024 items
    source?: string;        // For additional source book items
    roll_range?: string;
    description?: string;
    properties?: string;
    type?: string;          // For additional source book items
    attunement?: string;    // For additional source book items
    pricing?: {
        base_price: number;
        currency: string;
    };
}

interface TreasureTable {
    name: string;
    rarity: string;
    roll_ranges: Array<{
        range: string;
        item: string;
        type: 'magic_item' | 'spell_scroll' | 'mundane_treasure';
    }>;
}

interface TreasureGenerationRequest {
    challenge_rating?: number;
    generation_type: 'individual' | 'hoard';
    source_books?: string[];
    include_mundane?: boolean;
    include_magic?: boolean;
    item_filters?: {
        categories?: string[];
        rarities?: string[];
        min_value?: number;
        max_value?: number;
    };
}

interface GeneratedTreasure {
    coins?: {
        cp: number;
        sp: number;
        ep: number;
        gp: number;
        pp: number;
    };
    gems?: Array<{
        name: string;
        value: number;
        quantity: number;
    }>;
    art_objects?: Array<{
        name: string;
        value: number;
        quantity: number;
    }>;
    magic_items?: Array<{
        name: string;
        rarity: string;
        description?: string | undefined;
        value?: number | undefined;
        source: string;
    }>;
    total_value: number;
    generation_method: string;
}

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Data loading
let magicItemsData: MagicItem[] = [];
let treasureTablesData: any = {};

// Load magic items data
function loadMagicItems() {
    try {
        // Load DMG 2024 items
        const dmgPath = path.join(__dirname, '../../../data/official/dmg_2024_items.json');
        const dmgRawData = fs.readFileSync(dmgPath, 'utf8');
        const dmgItems = JSON.parse(dmgRawData);
        
        // Filter out DMG items without proper rarity (table references)
        const filteredDmgItems = dmgItems.filter((item: any) => {
            if (!item.rarity || item.name.includes('Table')) {
                return false;
            }
            // Add source standardization for DMG items
            item.source = 'DMG 2024';
            return true;
        });
        
        // Load additional source books
        const multiSourcePath = path.join(__dirname, '../../../data/official/multi_source_analysis.json');
        let additionalItems: any[] = [];
        
        try {
            const multiSourceData = fs.readFileSync(multiSourcePath, 'utf8');
            const multiSourceJson = JSON.parse(multiSourceData);
            additionalItems = multiSourceJson.items || [];
            console.log(`✅ Loaded ${additionalItems.length} items from additional sources`);
        } catch (error) {
            console.log('⚠️ Additional sources not found, using DMG 2024 only');
        }
        
        // Combine all items
        magicItemsData = [...filteredDmgItems, ...additionalItems];
        
        console.log(`✅ Total magic items loaded: ${magicItemsData.length}`);
        console.log(`   📜 DMG 2024: ${filteredDmgItems.length} items`);
        console.log(`   🌟 Additional Sources: ${additionalItems.length} items`);
        
    } catch (error) {
        console.error('❌ Error loading magic items:', error);
    }
}

// Load treasure tables
function loadTreasureTables() {
    try {
        const dataPath = path.join(__dirname, '../../../data/official/dmg_2024_tables.json');
        const rawData = fs.readFileSync(dataPath, 'utf8');
        treasureTablesData = JSON.parse(rawData);
        console.log('✅ Loaded treasure tables');
    } catch (error) {
        console.error('❌ Error loading treasure tables:', error);
    }
}

// Utility functions for D&D dice rolling
function rollD100(): number {
    return Math.floor(Math.random() * 100) + 1;
}

function rollDice(sides: number, count: number = 1): number {
    let total = 0;
    for (let i = 0; i < count; i++) {
        total += Math.floor(Math.random() * sides) + 1;
    }
    return total;
}

function parseDiceNotation(notation: string): number {
    // Parse dice notation like "2d4+2", "1d10", etc.
    const match = notation.match(/(\d+)d(\d+)(?:\+(\d+))?/);
    if (!match || !match[1] || !match[2]) return 0;
    
    const count = parseInt(match[1]);
    const sides = parseInt(match[2]);
    const modifier = match[3] ? parseInt(match[3]) : 0;
    
    return rollDice(sides, count) + modifier;
}

// Challenge Rating to Treasure Tier mapping (official D&D methodology)
function getTreasureTier(challengeRating: number): number {
    if (challengeRating <= 4) return 1;    // Tier 1: CR 0-4
    if (challengeRating <= 10) return 2;   // Tier 2: CR 5-10  
    if (challengeRating <= 16) return 3;   // Tier 3: CR 11-16
    return 4;                              // Tier 4: CR 17-20
}

// Rarity weighting based on Challenge Rating (official methodology)
function getRarityWeights(challengeRating: number): Record<string, number> {
    const tier = getTreasureTier(challengeRating);
    
    switch (tier) {
        case 1: return { common: 0.70, uncommon: 0.25, rare: 0.05, 'very-rare': 0.00, legendary: 0.00 };
        case 2: return { common: 0.40, uncommon: 0.45, rare: 0.15, 'very-rare': 0.00, legendary: 0.00 };
        case 3: return { common: 0.15, uncommon: 0.40, rare: 0.35, 'very-rare': 0.10, legendary: 0.00 };
        case 4: return { common: 0.05, uncommon: 0.25, rare: 0.40, 'very-rare': 0.25, legendary: 0.05 };
        default: return { common: 0.70, uncommon: 0.25, rare: 0.05, 'very-rare': 0.00, legendary: 0.00 };
    }
}

// Generate mundane treasure (coins, gems, art objects)
function generateMundaneTreasure(challengeRating: number, isHoard: boolean): Partial<GeneratedTreasure> {
    const tier = getTreasureTier(challengeRating);
    let coins = { cp: 0, sp: 0, ep: 0, gp: 0, pp: 0 };
    let total_value = 0;

    if (isHoard) {
        // Treasure Hoard generation (more wealth)
        switch (tier) {
            case 1:
                coins.cp = rollDice(6, 6) * 100;
                coins.sp = rollDice(6, 3) * 100;
                coins.gp = rollDice(6, 2) * 10;
                break;
            case 2:
                coins.cp = rollDice(6, 2) * 100;
                coins.sp = rollDice(6, 2) * 1000;
                coins.gp = rollDice(6, 6) * 100;
                coins.pp = rollDice(6, 3) * 10;
                break;
            case 3:
                coins.gp = rollDice(6, 4) * 1000;
                coins.pp = rollDice(6, 5) * 100;
                break;
            case 4:
                coins.gp = rollDice(6, 12) * 1000;
                coins.pp = rollDice(6, 8) * 1000;
                break;
        }
    } else {
        // Individual treasure generation (modest amounts)
        switch (tier) {
            case 1:
                coins.cp = rollDice(6, 5);
                coins.sp = rollDice(6, 4);
                coins.gp = rollDice(6, 3);
                break;
            case 2:
                coins.sp = rollDice(6, 4) * 10;
                coins.gp = rollDice(6, 2) * 10;
                coins.pp = rollDice(6, 3);
                break;
            case 3:
                coins.gp = rollDice(6, 2) * 100;
                coins.pp = rollDice(6, 2) * 10;
                break;
            case 4:
                coins.gp = rollDice(6, 2) * 1000;
                coins.pp = rollDice(6, 2) * 100;
                break;
        }
    }

    // Generate gems and art objects
    const gems = generateGems(challengeRating, isHoard);
    const art_objects = generateArtObjects(challengeRating, isHoard);

    // Calculate total value in gold pieces
    total_value = coins.cp * 0.01 + coins.sp * 0.1 + coins.ep * 0.5 + coins.gp + coins.pp * 10;
    
    // Add gem values
    total_value += gems.reduce((sum, gem) => sum + (gem.value * gem.quantity), 0);
    
    // Add art object values
    total_value += art_objects.reduce((sum, art) => sum + (art.value * art.quantity), 0);

    return { coins, gems, art_objects, total_value };
}

// DMG 2024 Pricing Calculator
class DMG2024PricingCalculator {
    private static readonly BASE_PRICES: Record<string, number> = {
        'common': 100,
        'uncommon': 500,
        'rare': 5000,
        'very-rare': 50000,
        'legendary': 200000
    };

    private static readonly SPELL_SCROLL_PRICES: Record<number, number> = {
        0: 25,     // Cantrip
        1: 75,     // 1st level
        2: 150,    // 2nd level
        3: 300,    // 3rd level
        4: 500,    // 4th level
        5: 1000,   // 5th level
        6: 1500,   // 6th level
        7: 2500,   // 7th level
        8: 3000,   // 8th level
        9: 2750    // 9th level
    };

    static calculateItemPrice(item: MagicItem): number {
        // Check if item has pre-set pricing
        if (item.pricing?.base_price) {
            return item.pricing.base_price;
        }

        // Handle spell scrolls
        if (item.name.toLowerCase().includes('scroll') && item.name.toLowerCase().includes('spell')) {
            // Try to extract spell level from description or name
            const spellLevel = this.extractSpellLevel(item.name, item.description);
            if (spellLevel !== null) {
                return this.SPELL_SCROLL_PRICES[spellLevel] || this.BASE_PRICES[item.rarity] || 100;
            }
        }

        // Check for consumables (potions, oils, etc.)
        const isConsumable = item.name.toLowerCase().includes('potion') || 
                           item.name.toLowerCase().includes('oil') ||
                           item.name.toLowerCase().includes('elixir') ||
                           item.name.toLowerCase().includes('philter');
        
        const basePrice = this.BASE_PRICES[item.rarity] || 100;
        
        // Consumables are typically half price
        return isConsumable ? Math.floor(basePrice / 2) : basePrice;
    }

    private static extractSpellLevel(name: string, description?: string): number | null {
        // Look for spell level indicators in name or description
        const text = `${name} ${description || ''}`.toLowerCase();
        
        // Check for explicit level mentions
        for (let level = 0; level <= 9; level++) {
            if (text.includes(`${level}th level`) || 
                text.includes(`${level}st level`) || 
                text.includes(`${level}nd level`) || 
                text.includes(`${level}rd level`) ||
                (level === 0 && text.includes('cantrip'))) {
                return level;
            }
        }
        
        return null;
    }
}

// Generate gems based on challenge rating
function generateGems(challengeRating: number, isHoard: boolean): Array<{name: string, value: number, quantity: number}> {
    const tier = getTreasureTier(challengeRating);
    const gems: Array<{name: string, value: number, quantity: number}> = [];
    
    // Gem generation based on CR (only for hoards in higher tiers)
    if (!isHoard || tier < 2) return gems;
    
    const gemTables = {
        50: ['Azurite', 'Banded agate', 'Blue quartz', 'Eye agate', 'Hematite', 'Lapis lazuli', 'Malachite', 'Moss agate', 'Obsidian', 'Rhodochrosite', 'Tiger eye', 'Turquoise'],
        100: ['Bloodstone', 'Carnelian', 'Chalcedony', 'Chrysoprase', 'Citrine', 'Jasper', 'Moonstone', 'Onyx', 'Quartz', 'Sardonyx', 'Star rose quartz', 'Zircon'],
        500: ['Alexandrite', 'Aquamarine', 'Black pearl', 'Blue spinel', 'Peridot', 'Topaz'],
        1000: ['Black opal', 'Blue sapphire', 'Emerald', 'Fire opal', 'Opal', 'Star ruby', 'Star sapphire', 'Yellow sapphire'],
        5000: ['Black sapphire', 'Diamond', 'Jacinth', 'Ruby']
    };
    
    let totalQuantity = 0;
    let gemValue = 50;
    
    // Determine gem generation based on tier
    switch (tier) {
        case 2:
            if (rollD100() <= 25) {
                totalQuantity = rollDice(6, 2);
                gemValue = rollD100() <= 50 ? 50 : 100;
            }
            break;
        case 3:
            if (rollD100() <= 50) {
                totalQuantity = rollDice(4, 3);
                gemValue = rollD100() <= 25 ? 500 : 1000;
            }
            break;
        case 4:
            if (rollD100() <= 70) {
                totalQuantity = rollDice(8, 3);
                gemValue = rollD100() <= 50 ? 1000 : 5000;
            }
            break;
    }
    
    if (totalQuantity > 0) {
        const availableGems = gemTables[gemValue as keyof typeof gemTables];
        // Consolidate into fewer types with higher quantities
        const numGemTypes = Math.max(1, Math.ceil(totalQuantity / 3));
        const selectedGems = availableGems.sort(() => 0.5 - Math.random()).slice(0, numGemTypes);
        
        let remainingQuantity = totalQuantity;
        selectedGems.forEach((gemName, index) => {
            const isLast = index === selectedGems.length - 1;
            const quantity = isLast ? remainingQuantity : Math.max(1, Math.floor(remainingQuantity / (selectedGems.length - index)));
            gems.push({
                name: gemName,
                value: gemValue,
                quantity: quantity
            });
            remainingQuantity -= quantity;
        });
    }
    
    return gems;
}

// Generate art objects based on challenge rating  
function generateArtObjects(challengeRating: number, isHoard: boolean): Array<{name: string, value: number, quantity: number}> {
    const tier = getTreasureTier(challengeRating);
    const artObjects: Array<{name: string, value: number, quantity: number}> = [];
    
    // Art object generation based on CR (only for hoards in higher tiers)
    if (!isHoard || tier < 2) return artObjects;
    
    const artTables = {
        25: ['Silver ewer', 'Carved bone statuette', 'Small gold bracelet', 'Cloth-of-gold vestments', 'Black velvet mask stitched with silver thread', 'Copper chalice with silver filigree', 'Pair of engraved bone dice', 'Small mirror set in a painted wooden frame', 'Embroidered silk handkerchief', 'Gold locket with a painted portrait inside'],
        250: ['Gold ring set with bloodstones', 'Carved ivory statuette', 'Large gold bracelet', 'Silver necklace with a gemstone pendant', 'Bronze crown', 'Silk robe with gold embroidery', 'Large well-made tapestry', 'Brass mug with jade inlay', 'Box of turquoise animal figurines', 'Gold bird cage with electrum filigree'],
        750: ['Jeweled gold crown', 'Jeweled platinum ring', 'Small jade statuette', 'Gold and silver anklet', 'Masterwork gold necklace', 'Silver chalice set with moonstones', 'Silver-plated steelware longbow with ivory carvings', 'Carved harp of exotic wood with ivory inlay and zircon gems', 'Small gold idol', 'Gold dragon comb set with red garnets as eyes'],
        2500: ['Jeweled gold circlet', 'Eyepatch with a mock eye set in blue sapphire and moonstone', 'A necklace string of small pink pearls', 'Gold music box', 'Gold circlet set with four aquamarines', 'Eye patch with a mock eye of sapphire and moonstone', 'A gold chain mail shirt made for a halfling', 'An obsidian statuette with gold engravings and inlay', 'Painted gold war mask', 'Fine gold chain set with a fire opal'],
        7500: ['Jeweled platinum crown', 'Jeweled electrum ring', 'Gold and ruby ring', 'Gold cup set with emeralds', 'Gold jewelry box with platinum filigree', 'Painted gold child\'s sarcophagus', 'Jade game board with solid gold playing pieces', 'Bejeweled ivory drinking horn with gold filigree']
    };
    
    let totalQuantity = 0;
    let artValue = 25;
    
    // Determine art object generation based on tier
    switch (tier) {
        case 2:
            if (rollD100() <= 25) {
                totalQuantity = rollDice(4, 2);
                artValue = rollD100() <= 50 ? 25 : 250;
            }
            break;
        case 3:
            if (rollD100() <= 50) {
                totalQuantity = rollDice(4, 2);
                artValue = rollD100() <= 25 ? 250 : 750;
            }
            break;
        case 4:
            if (rollD100() <= 70) {
                totalQuantity = rollDice(4, 2);
                const roll = rollD100();
                if (roll <= 20) artValue = 250;
                else if (roll <= 50) artValue = 750;
                else if (roll <= 80) artValue = 2500;
                else artValue = 7500;
            }
            break;
    }
    
    if (totalQuantity > 0) {
        const availableArt = artTables[artValue as keyof typeof artTables];
        // Consolidate into fewer types with higher quantities
        const numArtTypes = Math.max(1, Math.ceil(totalQuantity / 2));
        const selectedArt = availableArt.sort(() => 0.5 - Math.random()).slice(0, numArtTypes);
        
        let remainingQuantity = totalQuantity;
        selectedArt.forEach((artName, index) => {
            const isLast = index === selectedArt.length - 1;
            const quantity = isLast ? remainingQuantity : Math.max(1, Math.floor(remainingQuantity / (selectedArt.length - index)));
            artObjects.push({
                name: artName,
                value: artValue,
                quantity: quantity
            });
            remainingQuantity -= quantity;
        });
    }
    
    return artObjects;
}

// Generate magic items based on official D&D tables
function generateMagicItems(challengeRating: number, quantity: number = 1, sourceBooks?: string[]): MagicItem[] {
    const weights = getRarityWeights(challengeRating);
    const items: MagicItem[] = [];

    // Filter items by source books if specified
    let filteredItems = magicItemsData;
    if (sourceBooks && sourceBooks.length > 0) {
        filteredItems = magicItemsData.filter(item => {
            // Map source books to actual source names
            const sourceMapping: Record<string, string[]> = {
                'dmg-2024': ['DMG 2024', 'Magic_Items Table'],
                'xanathar': ["Xanathar's Guide to Everything"],
                'tasha': ["Tasha's Cauldron of Everything"],
                'fizban': ["Fizban's Treasury of Dragons"],
                'eberron': ["Eberron: Rising from the Last War"],
                'spelljammer': ["Spelljammer"],
                'planescape': ["Planescape"]
            };
            
            return sourceBooks.some(book => {
                const mappedSources = sourceMapping[book] || [book];
                return mappedSources.some(sourceName => {
                    // Check both 'source' and 'table_source' fields
                    const itemSource = item.source || item.table_source || '';
                    return itemSource.includes(sourceName) ||
                           itemSource.toLowerCase().includes(sourceName.toLowerCase());
                });
            });
        });
    }

    for (let i = 0; i < quantity; i++) {
        // Use weighted random selection for rarity
        const random = Math.random();
        let cumulativeWeight = 0;
        let selectedRarity = 'common';

        for (const [rarity, weight] of Object.entries(weights)) {
            cumulativeWeight += weight;
            if (random <= cumulativeWeight) {
                selectedRarity = rarity;
                break;
            }
        }

        // Find items of the selected rarity from filtered items
        const availableItems = filteredItems.filter(item => item.rarity === selectedRarity);
        if (availableItems.length > 0) {
            const randomIndex = Math.floor(Math.random() * availableItems.length);
            const randomItem = availableItems[randomIndex];
            if (randomItem) {
                items.push(randomItem);
            }
        }
    }

    return items;
}

// Main treasure generation function following official D&D methodology
function generateTreasure(request: TreasureGenerationRequest): GeneratedTreasure {
    const { 
        challenge_rating = 1, 
        generation_type = 'individual',
        source_books,
        include_mundane = true,
        include_magic = true 
    } = request;

    let result: GeneratedTreasure = {
        total_value: 0,
        generation_method: `${generation_type} treasure for CR ${challenge_rating}`
    };

    // Generate mundane treasure if requested
    if (include_mundane) {
        const mundane = generateMundaneTreasure(challenge_rating, generation_type === 'hoard');
        result = { ...result, ...mundane };
    }

    // Generate magic items if requested
    if (include_magic) {
        const tier = getTreasureTier(challenge_rating);
        let magicItemQuantity = 1;
        
        // More items for higher tiers and hoards
        if (generation_type === 'hoard') {
            magicItemQuantity = Math.max(1, Math.floor(tier / 2) + rollDice(3) - 1);
        }

        const magicItems = generateMagicItems(challenge_rating, magicItemQuantity, source_books);
        result.magic_items = magicItems.map(item => {
            const calculatedValue = DMG2024PricingCalculator.calculateItemPrice(item);
            return {
                name: item.name,
                rarity: item.rarity,
                description: item.description || undefined,
                value: calculatedValue,
                source: item.source || item.table_source || 'Unknown Source'
            };
        });

        // Add magic item values to total
        if (result.magic_items) {
            const magicValue = result.magic_items.reduce((sum, item) => sum + (item.value || 0), 0);
            result.total_value = (result.total_value || 0) + magicValue;
        }
    }

    return result;
}

// API Routes

// Health check
app.get('/health', (req, res) => {
    res.json({ 
        status: 'healthy', 
        timestamp: new Date().toISOString(),
        data_loaded: {
            magic_items: magicItemsData.length,
            treasure_tables: Object.keys(treasureTablesData).length
        }
    });
});

// Get available magic items (with filtering)
app.get('/api/items', (req, res) => {
    try {
        let items = magicItemsData;
        
        // Apply filters
        const { rarity, category, source, search } = req.query;
        
        if (rarity) {
            items = items.filter(item => item.rarity === rarity);
        }
        
        if (category) {
            items = items.filter(item => item.category === category);
        }
        
        if (source) {
            items = items.filter(item => {
                const itemSource = item.source || item.table_source || '';
                return itemSource.includes(source as string);
            });
        }
        
        if (search) {
            const searchTerm = (search as string).toLowerCase();
            items = items.filter(item => 
                item.name.toLowerCase().includes(searchTerm) ||
                (item.description && item.description.toLowerCase().includes(searchTerm))
            );
        }

        res.json({
            items,
            total: items.length,
            filters_applied: { rarity, category, source, search }
        });
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch items' });
    }
});

// Generate treasure (main endpoint)
app.post('/api/generate', (req, res) => {
    try {
        const request: TreasureGenerationRequest = req.body;
        const treasure = generateTreasure(request);
        
        res.json({
            success: true,
            treasure,
            generation_timestamp: new Date().toISOString()
        });
    } catch (error) {
        console.error('Generation error:', error);
        res.status(500).json({ 
            success: false,
            error: 'Failed to generate treasure' 
        });
    }
});

// Get treasure generation statistics
app.get('/api/stats', (req, res) => {
    try {
        const stats = {
            total_magic_items: magicItemsData.length,
            rarity_distribution: magicItemsData.reduce((acc, item) => {
                acc[item.rarity] = (acc[item.rarity] || 0) + 1;
                return acc;
            }, {} as Record<string, number>),
            categories: [...new Set(magicItemsData.map(item => item.category))],
            sources: [...new Set(magicItemsData.map(item => item.source || item.table_source || 'Unknown'))]
        };
        
        res.json(stats);
    } catch (error) {
        res.status(500).json({ error: 'Failed to get statistics' });
    }
});

// Challenge Rating to treasure recommendations
app.get('/api/cr/:cr/recommendations', (req, res) => {
    try {
        const cr = parseInt(req.params.cr);
        const tier = getTreasureTier(cr);
        const weights = getRarityWeights(cr);
        
        res.json({
            challenge_rating: cr,
            tier,
            rarity_weights: weights,
            recommended_generation: cr >= 5 ? 'hoard' : 'individual',
            typical_magic_items: cr >= 5 ? `${Math.floor(tier / 2) + 1}-${tier + 1}` : '1'
        });
    } catch (error) {
        res.status(500).json({ error: 'Invalid challenge rating' });
    }
});

// Initialize data and start server
async function startServer() {
    console.log('🎲 Starting Loot Factory API Server...');
    
    // Load data
    loadMagicItems();
    loadTreasureTables();
    
    app.listen(PORT, () => {
        console.log(`✅ Server running on http://localhost:${PORT}`);
        console.log(`📊 Loaded ${magicItemsData.length} magic items`);
        console.log('🎯 Ready for treasure generation!');
    });
}

startServer().catch(console.error);

export default app; 