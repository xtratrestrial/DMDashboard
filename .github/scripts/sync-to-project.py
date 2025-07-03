#!/usr/bin/env python3
"""
Sync parsed roadmap data to GitHub Projects using GitHub API v4 (GraphQL).
"""

import json
import os
import requests
from pathlib import Path
from typing import Dict, List, Any, Optional

class GitHubProjectSync:
    def __init__(self):
        self.token = os.environ.get('GITHUB_TOKEN')
        self.repo_owner = os.environ.get('GITHUB_REPOSITORY', '').split('/')[0] if os.environ.get('GITHUB_REPOSITORY') else 'xtratrestrial'
        self.repo_name = os.environ.get('GITHUB_REPOSITORY', '').split('/')[1] if os.environ.get('GITHUB_REPOSITORY') else 'DMDashboard'
        self.project_number = int(os.environ.get('PROJECT_NUMBER', '1'))
        
        self.graphql_url = 'https://api.github.com/graphql'
        self.rest_url = 'https://api.github.com/repos'
        
        self.headers = {
            'Authorization': f'Bearer {self.token}',
            'Accept': 'application/vnd.github+json',
            'X-GitHub-Api-Version': '2022-11-28'
        }
        
        # Load parsed data
        self.load_parsed_data()
    
    def load_parsed_data(self):
        """Load the parsed roadmap data."""
        data_dir = Path('.github/project-data')
        
        with open(data_dir / 'features.json') as f:
            self.features = json.load(f)
        
        with open(data_dir / 'phases.json') as f:
            self.phases = json.load(f)
        
        with open(data_dir / 'roadmap-data.json') as f:
            self.roadmap_data = json.load(f)
    
    def graphql_query(self, query: str, variables: Dict = None) -> Dict:
        """Execute a GraphQL query."""
        payload = {'query': query}
        if variables:
            payload['variables'] = variables
        
        response = requests.post(
            self.graphql_url,
            json=payload,
            headers=self.headers
        )
        
        if response.status_code != 200:
            print(f"❌ GraphQL Error: {response.status_code}")
            print(response.text)
            return {}
        
        result = response.json()
        if 'errors' in result:
            print(f"❌ GraphQL Errors: {result['errors']}")
            return {}
        
        return result.get('data', {})
    
    def get_project_info(self) -> Optional[Dict]:
        """Get project information including ID."""
        query = """
        query($owner: String!, $number: Int!) {
          user(login: $owner) {
            projectV2(number: $number) {
              id
              title
              url
              fields(first: 50) {
                nodes {
                  ... on ProjectV2Field {
                    id
                    name
                    dataType
                  }
                  ... on ProjectV2SingleSelectField {
                    id
                    name
                    dataType
                    options {
                      id
                      name
                    }
                  }
                }
              }
            }
          }
        }
        """
        
        variables = {
            'owner': self.repo_owner,
            'number': self.project_number
        }
        
        result = self.graphql_query(query, variables)
        
        if result and 'user' in result and result['user']:
            return result['user']['projectV2']
        
        return None
    
    def create_project_if_not_exists(self) -> str:
        """Create GitHub project if it doesn't exist."""
        project_info = self.get_project_info()
        
        if project_info:
            print(f"✅ Project exists: {project_info['title']}")
            return project_info['id']
        
        # Create new project
        mutation = """
        mutation($ownerId: ID!, $title: String!, $repositoryId: ID!) {
          createProjectV2(input: {
            ownerId: $ownerId,
            title: $title,
            repositoryId: $repositoryId
          }) {
            projectV2 {
              id
              url
            }
          }
        }
        """
        
        # Get owner and repository IDs first
        owner_query = """
        query($login: String!) {
          user(login: $login) {
            id
          }
        }
        """
        
        repo_query = """
        query($owner: String!, $name: String!) {
          repository(owner: $owner, name: $name) {
            id
          }
        }
        """
        
        owner_result = self.graphql_query(owner_query, {'login': self.repo_owner})
        repo_result = self.graphql_query(repo_query, {'owner': self.repo_owner, 'name': self.repo_name})
        
        if not owner_result or not repo_result:
            print("❌ Failed to get owner or repository info")
            return None
        
        variables = {
            'ownerId': owner_result['user']['id'],
            'title': '🎲 DMDashboard Development Roadmap',
            'repositoryId': repo_result['repository']['id']
        }
        
        result = self.graphql_query(mutation, variables)
        
        if result and 'createProjectV2' in result:
            project_id = result['createProjectV2']['projectV2']['id']
            print(f"✅ Created new project: {project_id}")
            
            # Set up project fields
            self.setup_project_fields(project_id)
            
            return project_id
        
        print("❌ Failed to create project")
        return None
    
    def setup_project_fields(self, project_id: str):
        """Set up custom fields for the project."""
        # Create Phase field (single select)
        phase_mutation = """
        mutation($projectId: ID!, $name: String!, $dataType: ProjectV2CustomFieldType!, $options: [ProjectV2SingleSelectFieldOptionInput!]!) {
          createProjectV2Field(input: {
            projectId: $projectId,
            name: $name,
            dataType: $dataType,
            singleSelectOptions: $options
          }) {
            projectV2Field {
              ... on ProjectV2SingleSelectField {
                id
                name
              }
            }
          }
        }
        """
        
        phase_options = [
            {'name': 'Phase 1: Foundation', 'color': 'RED'},
            {'name': 'Phase 2: Tool Expansion', 'color': 'ORANGE'},
            {'name': 'Phase 3: Advanced Features', 'color': 'YELLOW'},
            {'name': 'Phase 4: Campaign Integration', 'color': 'GREEN'},
            {'name': 'Phase 5: External Integrations', 'color': 'BLUE'}
        ]
        
        self.graphql_query(phase_mutation, {
            'projectId': project_id,
            'name': 'Phase',
            'dataType': 'SINGLE_SELECT',
            'options': phase_options
        })
        
        # Create Effort field (single select)
        effort_options = [
            {'name': 'Small (1-3 days)', 'color': 'GREEN'},
            {'name': 'Medium (1-2 weeks)', 'color': 'YELLOW'},
            {'name': 'Large (2-4 weeks)', 'color': 'RED'}
        ]
        
        self.graphql_query(phase_mutation, {
            'projectId': project_id,
            'name': 'Effort',
            'dataType': 'SINGLE_SELECT',
            'options': effort_options
        })
        
        # Create Priority field (single select)
        priority_options = [
            {'name': 'Critical', 'color': 'RED'},
            {'name': 'High', 'color': 'ORANGE'},
            {'name': 'Medium', 'color': 'YELLOW'},
            {'name': 'Low', 'color': 'GRAY'}
        ]
        
        self.graphql_query(phase_mutation, {
            'projectId': project_id,
            'name': 'Priority',
            'dataType': 'SINGLE_SELECT',
            'options': priority_options
        })
        
        print("✅ Set up project fields")
    
    def create_or_update_issues(self) -> List[str]:
        """Create GitHub issues for each feature."""
        issue_ids = []
        
        for feature in self.features:
            # Check if issue already exists
            existing_issue = self.find_existing_issue(feature['title'])
            
            if existing_issue:
                print(f"📝 Issue exists: {feature['title']}")
                issue_ids.append(existing_issue['node_id'])
                continue
            
            # Create new issue
            issue_data = {
                'title': feature['title'],
                'body': self.generate_issue_body(feature),
                'labels': feature['labels']
            }
            
            response = requests.post(
                f"{self.rest_url}/{self.repo_owner}/{self.repo_name}/issues",
                json=issue_data,
                headers=self.headers
            )
            
            if response.status_code == 201:
                issue = response.json()
                issue_ids.append(issue['node_id'])
                print(f"✅ Created issue: {feature['title']}")
            else:
                print(f"❌ Failed to create issue: {feature['title']}")
                print(response.text)
        
        return issue_ids
    
    def find_existing_issue(self, title: str) -> Optional[Dict]:
        """Find existing issue by title."""
        # Search for issues with similar title
        search_query = f'repo:{self.repo_owner}/{self.repo_name} is:issue "{title}" in:title'
        
        response = requests.get(
            'https://api.github.com/search/issues',
            params={'q': search_query},
            headers=self.headers
        )
        
        if response.status_code == 200:
            results = response.json()
            if results['total_count'] > 0:
                return results['items'][0]
        
        return None
    
    def generate_issue_body(self, feature: Dict) -> str:
        """Generate issue body from feature data."""
        body = f"""## 📋 Feature Description

**Phase:** {feature['phase']}
**Section:** {feature['section']}
**Effort:** {feature['effort']}
**Priority:** {feature['priority']}

## 🎯 Implementation Details

{feature['title']}

## ✅ Acceptance Criteria

- [ ] Feature implemented according to specification
- [ ] Tests added and passing
- [ ] Documentation updated
- [ ] Code review completed

## 🔗 Related Items

This issue is part of the DMDashboard roadmap: [ROADMAP.md](../blob/main/ROADMAP.md)

---
*Auto-generated from roadmap sync*
"""
        return body
    
    def add_issues_to_project(self, project_id: str, issue_ids: List[str]):
        """Add issues to the project board."""
        for issue_id in issue_ids:
            mutation = """
            mutation($projectId: ID!, $contentId: ID!) {
              addProjectV2ItemByContentId(input: {
                projectId: $projectId,
                contentId: $contentId
              }) {
                item {
                  id
                }
              }
            }
            """
            
            variables = {
                'projectId': project_id,
                'contentId': issue_id
            }
            
            result = self.graphql_query(mutation, variables)
            
            if result and 'addProjectV2ItemByContentId' in result:
                print(f"✅ Added issue to project")
            else:
                print(f"❌ Failed to add issue to project")

def main():
    """Main synchronization function."""
    print("🚀 Starting GitHub Project sync...")
    
    syncer = GitHubProjectSync()
    
    # Create or get project
    project_id = syncer.create_project_if_not_exists()
    
    if not project_id:
        print("❌ Could not create or access project")
        return
    
    # Create issues for features
    issue_ids = syncer.create_or_update_issues()
    
    # Add issues to project
    syncer.add_issues_to_project(project_id, issue_ids)
    
    print(f"✅ Sync completed! Created/updated {len(issue_ids)} issues")

if __name__ == '__main__':
    main() 