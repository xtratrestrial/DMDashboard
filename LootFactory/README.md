# Loot Factory

A comprehensive tool for generating and managing magical loot tables for tabletop RPGs, specifically designed around the D&D 5e 2024 Magic Item Tables.

## Project Description

Loot Factory is designed to help Dungeon Masters and game developers create, customize, and generate magical loot for their campaigns. The project includes the complete DMG 2024 Magic Item Tables and provides tools to:

- Generate random loot based on challenge rating and party level
- Create custom loot tables with weighted probabilities  
- Export loot lists in various formats
- Manage treasure hoards and individual item distributions
- Track and balance magic item distribution across campaigns

## Features

- **Complete DMG 2024 Magic Item Tables**: All official magic item tables from the 2024 D&D Dungeon Master's Guide
- **Smart Loot Generation**: Generate appropriate loot based on encounter difficulty and party progression
- **Custom Table Creation**: Build your own magic item tables with custom weights and restrictions
- **Multiple Export Formats**: Export generated loot in JSON, CSV, or formatted text
- **Campaign Integration**: Tools for tracking distributed items and maintaining game balance

## Installation

```bash
# Clone the repository
git clone <repository-url>
cd "Loot Factory"

# Create virtual environment (recommended)
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate

# Install dependencies
pip install -r requirements.txt
```

## Usage

### Basic Loot Generation

```python
from loot_factory import LootGenerator

# Initialize the generator
generator = LootGenerator()

# Generate loot for a CR 5 encounter
loot = generator.generate_loot(challenge_rating=5, party_level=3)
print(loot)
```

### Custom Table Creation

```python
# Create a custom magic item table
custom_table = generator.create_custom_table(
    items=["Potion of Healing", "Magic Sword +1", "Cloak of Protection"],
    weights=[50, 30, 20]
)
```

## File Structure

```
Loot Factory/
├── README.md                    # This file
├── .gitignore                   # Git ignore patterns
├── DMG 2024 Magic Item Tables   # Official D&D magic item tables
├── requirements.txt             # Python dependencies
├── src/                         # Source code
│   ├── loot_factory/           # Main package
│   ├── parsers/                # Table parsing utilities
│   └── generators/             # Loot generation logic
├── data/                       # Data files and custom tables
├── tests/                      # Unit tests
└── examples/                   # Usage examples
```

## Data Sources

- **DMG 2024 Magic Item Tables**: Official Dungeons & Dragons 2024 Magic Item Tables
- **Rarity Classifications**: Based on D&D 5e item rarity system
- **Challenge Rating Guidelines**: Aligned with D&D 5e encounter building rules

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Make your changes following the coding guidelines
4. Add tests for new functionality
5. Commit your changes (`git commit -m 'feat: add amazing feature'`)
6. Push to the branch (`git push origin feature/amazing-feature`)
7. Open a Pull Request

## Development Guidelines

- Follow PEP 8 style guidelines for Python code
- Include type hints for all functions
- Write comprehensive docstrings
- Add unit tests for new features
- Use meaningful commit messages following conventional commit format

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Wizards of the Coast for the D&D 5e magic item system
- The D&D community for inspiration and feedback
- Contributors and testers who help improve the project

## Roadmap

- [ ] Parse and structure the DMG 2024 Magic Item Tables
- [ ] Implement basic loot generation algorithms  
- [ ] Add custom table creation tools
- [ ] Create export functionality
- [ ] Build web interface for easy access
- [ ] Add campaign tracking features
- [ ] Integrate with popular VTT platforms

## Support

For questions, bug reports, or feature requests, please open an issue on GitHub or contact the maintainers. 