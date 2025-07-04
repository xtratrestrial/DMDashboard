# Fantasy Name Generator

A sophisticated AI-powered fantasy name generator that creates culturally authentic, pronounceable names for D&D campaigns, fantasy writing, and world-building.

## 🚀 Quick Start

### For Backend API Integration
```bash
# The API version is in core/enhanced_name_generator_api.py
# This is what your DMDashboard backend uses
python3 core/enhanced_name_generator_api.py --list-cultures
python3 core/enhanced_name_generator_api.py --generate --culture elvish --count 5
```

### For Interactive Use
```bash
# Run the interactive generator
python3 core/enhanced_name_generator.py
```

## 📁 Project Structure

```
name-generator/
├── 📚 core/                           # Production files
│   ├── enhanced_name_generator_api.py  # API version for backend
│   ├── enhanced_name_generator.py      # Interactive generator
│   ├── enhanced_name_database.json     # 1,295 authentic names
│   └── requirements.txt                # Dependencies
│
├── 🔧 data_processing/                 # One-time data processing scripts
│   ├── parse_dnd_names.py             # D&D Appendix B parser
│   ├── parse_image_names.py           # D&D table image parser
│   ├── parse_kismet_names.py          # Kismet Compendium parser
│   └── fantasy_name_scraper.py        # Literature name scraper
│
├── 🧪 testing/                         # Validation and testing
│   ├── quality_test.py                # Quality validation tests
│   ├── test_enhanced_generator.py     # Performance tests
│   └── final_demo.py                  # Production demo
│
├── 📊 examples/                        # Usage examples and analysis
│   ├── example_usage.py               # Database usage examples
│   ├── show_database_usage.py         # Technical deep-dive
│   └── name_analyzer.py               # Pattern analysis tool
│
├── 📖 documentation/                   # Project documentation
│   ├── README.md                      # Detailed documentation
│   ├── PROJECT_COMPLETION.md          # Project summary
│   ├── LATEST_IMPROVEMENTS.md         # Recent changes
│   └── plan.md                        # Development roadmap
│
└── 🗃️ legacy_data/                     # Old data files (for reference)
    ├── enhanced_scraped_data.json     # Old scraped patterns
    ├── name_samples.json              # Literature analysis
    ├── name_generator_data.json       # Old generation data
    ├── scraped_data.json              # Empty file
    ├── simple_name_scraper.py         # Basic scraper
    ├── scraper.py                     # Original scraper
    └── enhanced_scraper.py            # Multi-source scraper
```

## 🎯 Features

- **1,295 Authentic Names**: Curated from D&D sources, literature, and fantasy compendiums
- **13 Fantasy Cultures**: Elvish, Dwarvish, Human, Dragonborn, Halfling, Tiefling, Half-Orc, and more
- **AI-Powered Generation**: Uses Markov chains and cultural linguistics
- **Quality Control**: 100% pronounceability validation
- **API Ready**: Command-line interface for backend integration

## 🌍 Available Cultures

- Elvish (flowing, ethereal sounds)
- Dwarvish (strong consonants, Nordic influences)
- Human (familiar, diverse patterns)
- Dragonborn (harsh, draconic sounds)
- Halfling (pastoral, comfortable sounds)
- Tiefling (exotic, infernal influences)
- Half-Orc (harsh consonants, tribal sounds)
- And more...

## 🔧 Installation

```bash
# Install dependencies
pip install -r core/requirements.txt

# Test the generator
python3 core/enhanced_name_generator.py
```

## 📚 Documentation

- **Main Documentation**: `documentation/README.md`
- **Project Completion**: `documentation/PROJECT_COMPLETION.md`
- **Latest Improvements**: `documentation/LATEST_IMPROVEMENTS.md`

## 🧪 Testing

```bash
# Run quality tests
python3 testing/quality_test.py

# Run performance tests
python3 testing/test_enhanced_generator.py

# See production demo
python3 testing/final_demo.py
```

## 🎮 Usage Examples

### Generate 5 Elvish Names
```bash
python3 core/enhanced_name_generator_api.py --generate --culture elvish --count 5
```

### List Available Cultures
```bash
python3 core/enhanced_name_generator_api.py --list-cultures
```

### Get Statistics
```bash
python3 core/enhanced_name_generator_api.py --stats
```

## 🏗️ Integration with DMDashboard

This name generator is integrated into the DMDashboard backend as a Python service. The backend calls the API version to generate names for the React frontend.

**Backend Integration**: `LootFactory/web-app/backend/name-generator/`
**Frontend Module**: `frontend/src/modules/nameGenerator/` 