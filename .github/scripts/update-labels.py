#!/usr/bin/env python3
"""
Create and update GitHub repository labels for project management.
"""

import json
import os
import requests
from typing import List, Dict

class GitHubLabelManager:
    def __init__(self):
        self.token = os.environ.get('GITHUB_TOKEN')
        self.repo_owner = os.environ.get('GITHUB_REPOSITORY', '').split('/')[0] if os.environ.get('GITHUB_REPOSITORY') else 'xtratrestrial'
        self.repo_name = os.environ.get('GITHUB_REPOSITORY', '').split('/')[1] if os.environ.get('GITHUB_REPOSITORY') else 'DMDashboard'
        
        self.api_url = f'https://api.github.com/repos/{self.repo_owner}/{self.repo_name}/labels'
        self.headers = {
            'Authorization': f'Bearer {self.token}',
            'Accept': 'application/vnd.github+json',
            'X-GitHub-Api-Version': '2022-11-28'
        }
        
        # Define required labels
        self.required_labels = self.get_required_labels()
    
    def get_required_labels(self) -> List[Dict]:
        """Define all labels needed for the project."""
        return [
            # Phase labels
            {'name': 'phase-1', 'color': 'FF0000', 'description': 'Phase 1: Foundation Strengthening'},
            {'name': 'phase-2', 'color': 'FF8800', 'description': 'Phase 2: Tool Expansion'},
            {'name': 'phase-3', 'color': 'FFDD00', 'description': 'Phase 3: Advanced Features'},
            {'name': 'phase-4', 'color': '00BB00', 'description': 'Phase 4: Campaign Integration'},
            {'name': 'phase-5', 'color': '0088FF', 'description': 'Phase 5: External Integrations'},
            
            # Priority labels
            {'name': 'priority-critical', 'color': 'FF0000', 'description': 'Critical priority - needs immediate attention'},
            {'name': 'priority-high', 'color': 'FF8800', 'description': 'High priority'},
            {'name': 'priority-medium', 'color': 'FFDD00', 'description': 'Medium priority'},
            {'name': 'priority-low', 'color': 'CCCCCC', 'description': 'Low priority'},
            
            # Effort labels
            {'name': 'effort-small', 'color': '00BB00', 'description': 'Small effort (1-3 days)'},
            {'name': 'effort-medium', 'color': 'FFDD00', 'description': 'Medium effort (1-2 weeks)'},
            {'name': 'effort-large', 'color': 'FF0000', 'description': 'Large effort (2-4 weeks)'},
            
            # Component labels
            {'name': 'lootfactory', 'color': '8B4513', 'description': 'LootFactory tool component'},
            {'name': 'dashboard', 'color': '4169E1', 'description': 'DM Dashboard component'},
            {'name': 'backend', 'color': '32CD32', 'description': 'Backend/API changes'},
            {'name': 'frontend', 'color': 'FF69B4', 'description': 'Frontend/UI changes'},
            {'name': 'shared', 'color': '9370DB', 'description': 'Shared components/utilities'},
            
            # Type labels
            {'name': 'feature', 'color': '0052CC', 'description': 'New feature development'},
            {'name': 'enhancement', 'color': '7057FF', 'description': 'Enhancement to existing feature'},
            {'name': 'bug', 'color': 'FF0000', 'description': 'Bug fix'},
            {'name': 'documentation', 'color': '008672', 'description': 'Documentation improvements'},
            {'name': 'testing', 'color': 'FBCA04', 'description': 'Testing related'},
            {'name': 'integration', 'color': '0E8A16', 'description': 'Integration with external services'},
            {'name': 'performance', 'color': 'FF6600', 'description': 'Performance improvements'},
            {'name': 'security', 'color': 'CC0000', 'description': 'Security related'},
            
            # Status labels
            {'name': 'status-blocked', 'color': 'FF0000', 'description': 'Blocked by dependencies'},
            {'name': 'status-in-progress', 'color': 'FFDD00', 'description': 'Currently being worked on'},
            {'name': 'status-review', 'color': '0088FF', 'description': 'Ready for review'},
            {'name': 'status-testing', 'color': '9370DB', 'description': 'In testing phase'},
            
            # Special labels
            {'name': 'roadmap-sync', 'color': '000000', 'description': 'Auto-generated from roadmap'},
            {'name': 'good-first-issue', 'color': '7057FF', 'description': 'Good for newcomers'},
            {'name': 'help-wanted', 'color': '008672', 'description': 'Extra attention is needed'},
            {'name': 'dependencies', 'color': '0366D6', 'description': 'Pull requests that update a dependency file'},
            {'name': 'breaking-change', 'color': 'FF0000', 'description': 'Breaking change - major version bump needed'},
        ]
    
    def get_existing_labels(self) -> List[Dict]:
        """Get all existing labels from the repository."""
        response = requests.get(self.api_url, headers=self.headers)
        
        if response.status_code == 200:
            return response.json()
        else:
            print(f"❌ Failed to get existing labels: {response.status_code}")
            print(response.text)
            return []
    
    def create_label(self, label: Dict) -> bool:
        """Create a new label."""
        response = requests.post(
            self.api_url,
            json=label,
            headers=self.headers
        )
        
        if response.status_code == 201:
            print(f"✅ Created label: {label['name']}")
            return True
        elif response.status_code == 422:
            # Label already exists
            print(f"📝 Label exists: {label['name']}")
            return True
        else:
            print(f"❌ Failed to create label {label['name']}: {response.status_code}")
            print(response.text)
            return False
    
    def update_label(self, label_name: str, label_data: Dict) -> bool:
        """Update an existing label."""
        response = requests.patch(
            f"{self.api_url}/{label_name}",
            json=label_data,
            headers=self.headers
        )
        
        if response.status_code == 200:
            print(f"✅ Updated label: {label_name}")
            return True
        else:
            print(f"❌ Failed to update label {label_name}: {response.status_code}")
            print(response.text)
            return False
    
    def delete_label(self, label_name: str) -> bool:
        """Delete a label."""
        response = requests.delete(
            f"{self.api_url}/{label_name}",
            headers=self.headers
        )
        
        if response.status_code == 204:
            print(f"🗑️ Deleted label: {label_name}")
            return True
        else:
            print(f"❌ Failed to delete label {label_name}: {response.status_code}")
            return False
    
    def sync_labels(self):
        """Synchronize repository labels with required labels."""
        existing_labels = self.get_existing_labels()
        existing_label_names = {label['name'] for label in existing_labels}
        required_label_names = {label['name'] for label in self.required_labels}
        
        # Create/update required labels
        for required_label in self.required_labels:
            if required_label['name'] in existing_label_names:
                # Check if update is needed
                existing_label = next(
                    (l for l in existing_labels if l['name'] == required_label['name']), 
                    None
                )
                
                if existing_label and (
                    existing_label['color'] != required_label['color'] or
                    existing_label.get('description', '') != required_label.get('description', '')
                ):
                    self.update_label(required_label['name'], required_label)
            else:
                self.create_label(required_label)
        
        # Optionally remove labels that are no longer needed
        # (Commented out to avoid accidentally deleting important labels)
        """
        labels_to_remove = existing_label_names - required_label_names
        for label_name in labels_to_remove:
            if not label_name.startswith('phase-') and not label_name.startswith('priority-'):
                continue  # Only remove our managed labels
            self.delete_label(label_name)
        """
        
        print(f"✅ Label sync completed")

def main():
    """Main function to sync labels."""
    print("🏷️ Starting label sync...")
    
    manager = GitHubLabelManager()
    manager.sync_labels()
    
    print("✅ Label sync completed!")

if __name__ == '__main__':
    main() 