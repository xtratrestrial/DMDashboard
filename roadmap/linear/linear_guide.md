# Linear MCP Integration Guide for DMDashboard

## Progress Summary (July 2025)

### ✅ Linear Account & Team Setup
- Linear account created
- DMDashboard team created
- "DMDashboard Ecosystem" project created

### ✅ D&D-Specific Label Group
- "DMD" label group created in Linear
- D&D tool/module labels added: `dashboard`, `dice-calculator`, `dnd-mechanics`, `lootfactory`, `name-generator`
- General labels (e.g. `bug`, `feature`, `documentation`, `phase-1`, etc.) left ungrouped for future projects

### ⏳ Sub-Projects & Additional Labels
- Sub-projects for each tool (e.g. LootFactory, Name Generator, etc.) can be created as needed
- Additional D&D-specific or general labels can be added at any time

### ⏳ Linear MCP Integration (Cursor)
- To be set up on each development machine:
  1. Install Linear MCP server:  
     `npm install -g @modelcontextprotocol/server-linear`
  2. Get your Linear API key from Linear settings
  3. Add MCP config to Cursor on each machine:
     ```json
     {
       "mcpServers": {
         "linear": {
           "command": "npx",
           "args": ["@modelcontextprotocol/server-linear"],
           "env": {
             "LINEAR_API_KEY": "your-linear-api-key"
           }
         }
       }
     }
     ```
  4. Test by creating an issue from Cursor

### ⏳ GitHub ↔ Linear Sync
- Set up Linear’s GitHub integration to sync issues between Linear and GitHub
- Import existing GitHub issues into Linear
- Organize imported issues using your new label group and projects

---

## Next Steps

1. **Finish label and sub-project setup in Linear (if needed)**
2. **Set up Linear MCP on each dev machine**
3. **Configure and test GitHub ↔ Linear sync**
4. **Continue all issue/project management in Linear**

---

## Notes

- DMD-specific labels are grouped for clarity; general labels remain available for all projects.
- All Linear MCP and integration steps must be repeated on each machine you use Cursor on.
- Linear will be your primary source of truth for issues; GitHub will mirror for code/PR integration.

---

## Resources

- [Linear Documentation](https://linear.app/docs)
- [Linear API Documentation](https://developers.linear.app)
- [MCP Protocol Documentation](https://modelcontextprotocol.io)
- [D&D 5e SRD Reference](https://dnd.wizards.com/resources/systems-reference-document)