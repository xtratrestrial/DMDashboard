# 🎯 DMDashboard Project Management

This document explains how the automated GitHub project management system works for the DMDashboard ecosystem.

## 🚀 Quick Start

### Automatic Setup (Recommended)
The project management system automatically syncs when you:
1. Push changes to `ROADMAP.md`
2. The daily scheduled sync runs (9 AM UTC)
3. You manually trigger the workflow in GitHub Actions

### Manual Setup
If you want to set up the project immediately:

```bash
# Install Python dependencies
pip install requests python-frontmatter pyyaml

# Set your GitHub token (get from https://github.com/settings/tokens)
export GITHUB_TOKEN=your_token_here

# Run the setup script
python .github/scripts/setup-project.py
```

## 📋 How It Works

### 1. Roadmap Parsing
The system automatically parses `ROADMAP.md` and extracts:
- **Development phases** with timelines and descriptions
- **Individual features** with automatic effort estimation
- **Priority levels** based on phase and section
- **Component labels** based on feature content

### 2. GitHub Integration
For each feature in the roadmap, the system:
- ✅ Creates GitHub issues with detailed descriptions
- 🏷️ Applies appropriate labels (phase, priority, effort, component)
- 📊 Adds issues to the GitHub Project board
- 🔄 Updates existing issues when roadmap changes

### 3. Project Board Organization
The GitHub Project includes custom fields:
- **Phase**: Which development phase (1-5)
- **Priority**: Critical, High, Medium, Low
- **Effort**: Small (1-3 days), Medium (1-2 weeks), Large (2-4 weeks)
- **Status**: Automatically managed by GitHub (Todo, In Progress, Done)

## 🏗️ Project Structure

```
.github/
├── workflows/
│   └── project-sync.yml          # Main automation workflow
├── scripts/
│   ├── parse-roadmap.py          # Parses ROADMAP.md into structured data
│   ├── sync-to-project.py        # Syncs data to GitHub Projects
│   ├── update-labels.py          # Manages repository labels
│   └── setup-project.py          # Manual setup script
├── ISSUE_TEMPLATE/
│   ├── bug_report.yml            # Bug report template
│   └── feature_request.yml       # Feature request template
└── project-data/                 # Generated data files (auto-created)
    ├── roadmap-data.json         # Full parsed roadmap
    ├── features.json             # Individual features
    └── phases.json               # Development phases
```

## 🎯 Project Labels

The system automatically creates and manages these labels:

### Phase Labels
- `phase-1` - Phase 1: Foundation Strengthening
- `phase-2` - Phase 2: Tool Expansion
- `phase-3` - Phase 3: Advanced Features
- `phase-4` - Phase 4: Campaign Integration
- `phase-5` - Phase 5: External Integrations

### Priority Labels
- `priority-critical` - Critical priority - needs immediate attention
- `priority-high` - High priority
- `priority-medium` - Medium priority
- `priority-low` - Low priority

### Component Labels
- `lootfactory` - LootFactory tool component
- `dashboard` - DM Dashboard component
- `backend` - Backend/API changes
- `frontend` - Frontend/UI changes
- `shared` - Shared components/utilities

### Type Labels
- `feature` - New feature development
- `enhancement` - Enhancement to existing feature
- `bug` - Bug fix
- `documentation` - Documentation improvements
- `testing` - Testing related

## 🔄 Workflow Triggers

The project sync runs automatically when:

### Push Triggers
- Changes to `ROADMAP.md` on main or development branch
- Changes to `.github/project-config/**` files

### Scheduled Triggers
- Daily at 9 AM UTC to sync project status
- Checks for completed issues and updates roadmap status

### Manual Triggers
- Use "Run workflow" button in GitHub Actions
- Set `force_sync: true` for complete project recreation

## 📝 Managing Issues

### Issue Creation
Issues are automatically created from roadmap items with:
- Descriptive titles from the roadmap
- Phase, section, effort, and priority metadata
- Acceptance criteria templates
- Links back to the roadmap

### Issue Updates
- Existing issues are updated when roadmap changes
- New features are added as issues automatically
- Completed issues can be marked done to update roadmap

### Manual Issues
You can create issues manually using the templates:
- 🐛 **Bug Report**: For reporting bugs and issues
- 🎯 **Feature Request**: For suggesting new features

## 🎨 Customization

### Adding New Labels
Edit `.github/scripts/update-labels.py` to add new labels:

```python
{'name': 'your-label', 'color': 'FF0000', 'description': 'Your description'}
```

### Modifying Effort Estimation
Update the `_estimate_effort()` method in `.github/scripts/parse-roadmap.py`:

```python
def _estimate_effort(self, title: str, section: str) -> str:
    # Add your custom logic here
    if 'your-keyword' in title.lower():
        return 'large'
    # ... existing logic
```

### Custom Project Fields
Modify `.github/scripts/sync-to-project.py` in the `setup_project_fields()` method to add new fields.

## 🔧 Troubleshooting

### Common Issues

#### GitHub Token Permissions
Ensure your GitHub token has these scopes:
- `repo` - Full repository access
- `project` - Project read/write access
- `write:org` - Organization project access (if applicable)

#### Workflow Failures
Check GitHub Actions logs for specific error messages:
1. Go to your repository → Actions tab
2. Click on failed workflow run
3. Expand failed step to see error details

#### Missing Issues
If issues aren't being created:
1. Check that `ROADMAP.md` has properly formatted checkbox items: `- [ ] Feature name`
2. Verify the roadmap parser is finding your features
3. Check GitHub API rate limits

#### Project Not Found
If the project doesn't exist:
1. Run the setup script manually
2. Check GitHub token permissions
3. Verify the project number in the workflow file

### Debug Mode
To debug the parsing, run locally:

```bash
python .github/scripts/parse-roadmap.py
# Check the generated JSON files in .github/project-data/
```

## 📊 Metrics and Reporting

The system tracks:
- **Feature completion rates** by phase
- **Issue lifecycle times** (creation to completion)
- **Roadmap accuracy** (estimated vs actual completion)
- **Development velocity** (features completed per week)

## 🤝 Contributing

### Adding Features to the Automation
1. Update the roadmap parser for new data extraction
2. Modify the sync script for new GitHub API calls
3. Update labels and templates as needed
4. Test with a small roadmap change first

### Workflow Improvements
- The automation scripts are in `.github/scripts/`
- Each script is self-contained and can be run independently
- Follow the existing error handling and logging patterns

## 🔗 Related Links

- [GitHub Projects Documentation](https://docs.github.com/en/issues/planning-and-tracking-with-projects)
- [GitHub Actions Documentation](https://docs.github.com/en/actions)
- [GitHub GraphQL API](https://docs.github.com/en/graphql)
- [DMDashboard Roadmap](./ROADMAP.md)

---

*This project management system automatically syncs your roadmap with GitHub Projects, making it easy to track progress and manage development across the entire DMDashboard ecosystem.* 