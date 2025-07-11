const fs = require('fs');
const path = require('path');
const https = require('https');

// Configuration
const GITHUB_TOKEN = process.env.GITHUB_TOKEN || 'YOUR_GITHUB_TOKEN_HERE';
const REPO_OWNER = 'xtratrestrial';
const REPO_NAME = 'DMDashboard';
const MASTER_PLAN_PATH = 'roadmap/MASTER_PLAN.md';

// GitHub API helper using built-in https module
function makeGitHubRequest(url, method, data) {
  return new Promise((resolve, reject) => {
    const postData = data ? JSON.stringify(data) : null;
    
    const options = {
      hostname: 'api.github.com',
      path: url.replace('https://api.github.com', ''),
      method: method,
      headers: {
        'Authorization': `token ${GITHUB_TOKEN}`,
        'Accept': 'application/vnd.github.v3+json',
        'User-Agent': 'DMDashboard-Import-Script'
      }
    };

    if (postData) {
      options.headers['Content-Type'] = 'application/json';
      options.headers['Content-Length'] = Buffer.byteLength(postData);
    }

    const req = https.request(options, (res) => {
      let body = '';
      res.on('data', (chunk) => {
        body += chunk;
      });
      res.on('end', () => {
        if (res.statusCode >= 200 && res.statusCode < 300) {
          try {
            resolve(JSON.parse(body));
          } catch (e) {
            resolve(body);
          }
        } else {
          reject(new Error(`GitHub API error: ${res.statusCode} - ${body}`));
        }
      });
    });

    req.on('error', (err) => {
      reject(err);
    });

    if (postData) {
      req.write(postData);
    }
    req.end();
  });
}

async function createGitHubIssue(title, body, labels = []) {
  const url = `/repos/${REPO_OWNER}/${REPO_NAME}/issues`;
  
  try {
    const issue = await makeGitHubRequest(url, 'POST', {
      title,
      body,
      labels
    });
    
    console.log(`✅ Created issue: ${issue.title} (#${issue.number})`);
    return issue;
  } catch (error) {
    throw new Error(`Failed to create issue: ${error.message}`);
  }
}

// Parse MASTER_PLAN.md
function parseMasterPlan() {
  const content = fs.readFileSync(MASTER_PLAN_PATH, 'utf8');
  const lines = content.split('\n');
  
  const issues = [];
  let currentPhase = '';
  let currentSection = '';
  
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();
    
    // Detect phase headers
    if (line.includes('Phase 1:') || line.includes('Phase 2:') || 
        line.includes('Phase 3:') || line.includes('Phase 4:')) {
      currentPhase = line.match(/Phase (\d+)/)?.[1] || '';
      continue;
    }
    
    // Detect section headers
    if (line.startsWith('#### ') && (line.includes('Critical Fixes') || 
        line.includes('Testing & Quality') || line.includes('Legal Compliance') ||
        line.includes('External Integrations') || line.includes('Generation Tools') ||
        line.includes('Advanced Campaign Management'))) {
      currentSection = line.replace('#### ', '').trim();
      continue;
    }
    
    // Find checkbox items
    if (line.startsWith('- [ ]')) {
      const description = line.replace('- [ ]', '').trim();
      
      // Skip empty descriptions
      if (!description) continue;
      
      // Extract tool name from context
      let tool = 'general';
      if (description.toLowerCase().includes('lootfactory')) tool = 'lootfactory';
      if (description.toLowerCase().includes('dashboard')) tool = 'dashboard';
      if (description.toLowerCase().includes('name generator')) tool = 'name-generator';
      if (description.toLowerCase().includes('maps')) tool = 'maps';
      if (description.toLowerCase().includes('foundry')) tool = 'foundry';
      if (description.toLowerCase().includes('dice')) tool = 'dice-calculator';
      if (description.toLowerCase().includes('settlement')) tool = 'settlement-generator';
      if (description.toLowerCase().includes('dungeon')) tool = 'dungeon-generator';
      if (description.toLowerCase().includes('merchant')) tool = 'merchant-generator';
      if (description.toLowerCase().includes('chase')) tool = 'chase-manager';
      if (description.toLowerCase().includes('wealth')) tool = 'wealth-tracker';
      if (description.toLowerCase().includes('renown')) tool = 'renown-tracker';
      if (description.toLowerCase().includes('player dashboard')) tool = 'player-dashboard';
      
      // Determine priority
      let priority = 'medium';
      if (description.toLowerCase().includes('critical') || description.toLowerCase().includes('blocking')) {
        priority = 'critical';
      } else if (description.toLowerCase().includes('high priority') || description.toLowerCase().includes('high')) {
        priority = 'high';
      } else if (description.toLowerCase().includes('low priority') || description.toLowerCase().includes('low')) {
        priority = 'low';
      }
      
      // Create issue title
      let title = description;
      if (title.length > 100) {
        title = title.substring(0, 97) + '...';
      }
      
      // Create issue body
      const body = createIssueBody(description, currentPhase, currentSection, tool, priority);
      
      // Create labels
      const labels = [
        `phase-${currentPhase}`,
        priority,
        tool,
        'imported-from-master-plan'
      ];
      
      issues.push({
        title,
        body,
        labels,
        phase: currentPhase,
        priority,
        tool
      });
    }
  }
  
  return issues;
}

// Create issue body with template
function createIssueBody(description, phase, section, tool, priority) {
  return `**Purpose**: ${description}

**Phase**: ${phase}
**Section**: ${section}
**Tool**: ${tool}
**Priority**: ${priority}

**Acceptance Criteria**:
- [ ] ${description}

**Dependencies**: 
[To be determined]

**Technical Notes**:
[Add technical considerations here]

---
*Imported from MASTER_PLAN.md*`;
}

// Main execution
async function main() {
  try {
    console.log('📋 Parsing MASTER_PLAN.md...');
    const issues = parseMasterPlan();
    
    console.log(`Found ${issues.length} issues to create`);
    
    // Create issues in batches to avoid rate limiting
    let createdCount = 0;
    for (let i = 0; i < issues.length; i++) {
      const issue = issues[i];
      
      try {
        await createGitHubIssue(issue.title, issue.body, issue.labels);
        createdCount++;
        
        // Rate limiting: wait 1 second between requests
        if (i < issues.length - 1) {
          await new Promise(resolve => setTimeout(resolve, 1000));
        }
      } catch (error) {
        console.error(`❌ Failed to create issue "${issue.title}": ${error.message}`);
      }
    }
    
    console.log(`\n🎉 Import complete! Created ${createdCount} issues out of ${issues.length} total.`);
    
  } catch (error) {
    console.error('❌ Script failed:', error.message);
    process.exit(1);
  }
}

// Check if token is provided
if (!process.env.GITHUB_TOKEN) {
  console.error('❌ Error: GITHUB_TOKEN environment variable is required');
  console.log('Please set your GitHub token:');
  console.log('export GITHUB_TOKEN=your_token_here');
  console.log('Or run: GITHUB_TOKEN=your_token_here node scripts/import-to-github.js');
  process.exit(1);
}

// Run the script
main(); 