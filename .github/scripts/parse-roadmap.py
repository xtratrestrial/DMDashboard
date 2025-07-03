#!/usr/bin/env python3
"""
Parse ROADMAP.md and extract project items for GitHub Project management.
"""

import re
import json
import os
from pathlib import Path
from typing import Dict, List, Any

class RoadmapParser:
    def __init__(self, roadmap_path: str = "ROADMAP.md"):
        self.roadmap_path = roadmap_path
        self.phases = []
        self.current_phase = None
        self.features = []
        
    def parse(self) -> Dict[str, Any]:
        """Parse the roadmap and return structured data."""
        with open(self.roadmap_path, 'r', encoding='utf-8') as f:
            content = f.read()
            
        # Extract phases and features
        self._extract_phases(content)
        self._extract_features(content)
        
        return {
            'phases': self.phases,
            'features': self.features,
            'metrics': self._extract_metrics(content),
            'architecture': self._extract_architecture(content)
        }
    
    def _extract_phases(self, content: str):
        """Extract development phases from the roadmap."""
        phase_pattern = r'### \*\*(Phase \d+: .+?)\*\* \((.+?)\)\n\*(.*?)\*'
        phases = re.findall(phase_pattern, content)
        
        for phase_match in phases:
            phase_name = phase_match[0]
            timeline = phase_match[1]
            description = phase_match[2]
            
            self.phases.append({
                'name': phase_name,
                'timeline': timeline,
                'description': description,
                'status': 'planned',
                'features': []
            })
    
    def _extract_features(self, content: str):
        """Extract individual features/tasks from the roadmap."""
        # Match checkbox items with context
        feature_pattern = r'- \[ \] (.+?)(?=\n|$)'
        features = re.findall(feature_pattern, content)
        
        # Get context for each feature (which phase/section it belongs to)
        lines = content.split('\n')
        current_phase = None
        current_section = None
        
        for i, line in enumerate(lines):
            # Track current phase
            if line.startswith('### **Phase'):
                current_phase = line.strip('### **').split('**')[0]
            
            # Track current section
            elif line.startswith('#### '):
                current_section = line.strip('#### ').strip('**')
            
            # Process feature items
            elif line.strip().startswith('- [ ]'):
                feature_title = line.strip()[5:].strip()
                
                # Estimate effort based on feature type
                effort = self._estimate_effort(feature_title, current_section)
                priority = self._determine_priority(current_phase, current_section)
                
                self.features.append({
                    'title': feature_title,
                    'phase': current_phase,
                    'section': current_section,
                    'status': 'todo',
                    'effort': effort,
                    'priority': priority,
                    'labels': self._generate_labels(current_phase, current_section, feature_title)
                })
    
    def _estimate_effort(self, title: str, section: str) -> str:
        """Estimate effort for a feature based on keywords."""
        title_lower = title.lower()
        
        # High effort indicators
        if any(word in title_lower for word in ['integration', 'database', 'architecture', 'ai-powered']):
            return 'large'
        
        # Medium effort indicators  
        elif any(word in title_lower for word in ['generator', 'calculator', 'tracking', 'management']):
            return 'medium'
        
        # Small effort indicators
        elif any(word in title_lower for word in ['fix', 'add', 'update', 'documentation']):
            return 'small'
        
        # Default based on section
        if 'Critical Fixes' in section or 'Documentation' in section:
            return 'small'
        elif 'Testing' in section:
            return 'medium'
        else:
            return 'medium'
    
    def _determine_priority(self, phase: str, section: str) -> str:
        """Determine priority based on phase and section."""
        if 'Phase 1' in phase and 'Critical' in section:
            return 'critical'
        elif 'Phase 1' in phase:
            return 'high'
        elif 'Phase 2' in phase:
            return 'medium'
        else:
            return 'low'
    
    def _generate_labels(self, phase: str, section: str, title: str) -> List[str]:
        """Generate appropriate GitHub labels for the feature."""
        labels = []
        
        # Phase labels
        if phase:
            phase_num = re.search(r'Phase (\d+)', phase)
            if phase_num:
                labels.append(f'phase-{phase_num.group(1)}')
        
        # Type labels based on section
        if 'Testing' in section:
            labels.append('testing')
        elif 'Documentation' in section:
            labels.append('documentation')
        elif 'Critical' in section:
            labels.append('bug')
        elif 'Generator' in section:
            labels.append('feature')
        elif 'Integration' in section:
            labels.append('integration')
        
        # Component labels based on title
        title_lower = title.lower()
        if 'lootfactory' in title_lower:
            labels.append('lootfactory')
        elif 'dashboard' in title_lower:
            labels.append('dashboard')
        elif 'api' in title_lower:
            labels.append('backend')
        elif 'frontend' in title_lower or 'ui' in title_lower:
            labels.append('frontend')
        
        return labels
    
    def _extract_metrics(self, content: str) -> Dict[str, Any]:
        """Extract success metrics from roadmap."""
        metrics_section = re.search(r'## 🎯 Success Metrics\n(.*?)(?=\n##|\Z)', content, re.DOTALL)
        if not metrics_section:
            return {}
        
        return {
            'user_engagement': ['Monthly active DMs', 'Session length', 'Cross-tool navigation', 'User retention'],
            'technical_health': ['99.9% uptime', '<2s load times', '<500ms API', '<0.1% error rate'],
            'content_quality': ['DMG 2024 accuracy', 'User satisfaction', 'Bug resolution', 'Feature requests']
        }
    
    def _extract_architecture(self, content: str) -> Dict[str, Any]:
        """Extract architecture information."""
        arch_section = re.search(r'## 🔧 Technical Architecture Evolution\n(.*?)(?=\n##|\Z)', content, re.DOTALL)
        if not arch_section:
            return {}
        
        return {
            'current': {
                'frontend': 'React + TypeScript + Vite',
                'backend': 'Node.js + Express',
                'data': 'JSON files + in-memory processing',
                'deployment': 'Docker containers',
                'styling': 'CSS with unified color system'
            },
            'planned_improvements': [
                'Database migration (PostgreSQL or MongoDB)',
                'Redis caching for improved performance',
                'GraphQL API for better data fetching',
                'User authentication and session management'
            ]
        }

def main():
    """Main function to parse roadmap and output structured data."""
    parser = RoadmapParser()
    data = parser.parse()
    
    # Create output directory
    output_dir = Path('.github/project-data')
    output_dir.mkdir(exist_ok=True)
    
    # Write parsed data to files
    with open(output_dir / 'roadmap-data.json', 'w') as f:
        json.dump(data, f, indent=2)
    
    with open(output_dir / 'features.json', 'w') as f:
        json.dump(data['features'], f, indent=2)
    
    with open(output_dir / 'phases.json', 'w') as f:
        json.dump(data['phases'], f, indent=2)
    
    print(f"✅ Parsed {len(data['features'])} features across {len(data['phases'])} phases")
    print(f"📊 Data written to {output_dir}")
    
    # Set output for GitHub Actions
    if os.getenv('GITHUB_ACTIONS'):
        with open(os.environ['GITHUB_OUTPUT'], 'a') as f:
            f.write(f"feature_count={len(data['features'])}\n")
            f.write(f"phase_count={len(data['phases'])}\n")

if __name__ == '__main__':
    main() 