#!/usr/bin/env python3
"""
Comprehensive quality test for the enhanced name generator
Tests for user requirements and overall name quality
"""

from enhanced_name_generator import EnhancedNameGenerator
import re
from collections import defaultdict

def analyze_name_quality(name):
    """Analyze a single name for quality issues"""
    issues = []
    
    # User-specified rules
    if 'ooo' in name.lower():
        issues.append("3 consecutive o's")
    
    if len(name) < 4:
        issues.append("Less than 4 characters")
    
    # Check for 3+ consecutive identical characters
    for i in range(len(name) - 2):
        if name[i].lower() == name[i+1].lower() == name[i+2].lower():
            issues.append(f"3 consecutive '{name[i]}'")
    
    # Check vowel/consonant balance
    vowel_count = len(re.findall(r'[aeiouAEIOU]', name))
    consonant_count = len(re.findall(r'[bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ]', name))
    
    if vowel_count == 0:
        issues.append("No vowels")
    if consonant_count == 0:
        issues.append("No consonants")
    
    # Check for excessive consecutive vowels/consonants
    if re.search(r'[aeiou]{4,}', name.lower()):
        issues.append("4+ consecutive vowels")
    if re.search(r'[bcdfghjklmnpqrstvwxyz]{5,}', name.lower()):
        issues.append("5+ consecutive consonants")
    
    return issues

def test_generation_quality(generator, cultures, samples_per_culture=20):
    """Test generation quality across multiple cultures"""
    results = {}
    all_issues = defaultdict(int)
    
    for culture in cultures:
        print(f"🧪 Testing {culture} names...")
        names = generator.generate_name(culture=culture, count=samples_per_culture)
        
        culture_issues = defaultdict(int)
        valid_names = []
        problematic_names = []
        
        for name in names:
            issues = analyze_name_quality(name)
            
            if issues:
                problematic_names.append((name, issues))
                for issue in issues:
                    culture_issues[issue] += 1
                    all_issues[issue] += 1
            else:
                valid_names.append(name)
        
        results[culture] = {
            'total': len(names),
            'valid': len(valid_names),
            'problematic': len(problematic_names),
            'issues': dict(culture_issues),
            'sample_valid': valid_names[:8],
            'sample_problematic': problematic_names[:5]
        }
    
    return results, dict(all_issues)

def main():
    """Main testing function"""
    print("🔍 COMPREHENSIVE QUALITY TEST")
    print("=" * 50)
    
    generator = EnhancedNameGenerator()
    
    if not generator.names_by_culture:
        print("❌ No database found!")
        return
    
    print(f"📚 Database loaded: {sum(len(names) for names in generator.names_by_culture.values())} names")
    print(f"🌍 Testing {len(generator.names_by_culture)} cultures")
    print()
    
    # Test main cultures
    test_cultures = ['dwarf', 'elf', 'halfling', 'halforc', 'human']
    
    results, overall_issues = test_generation_quality(generator, test_cultures, 30)
    
    print("\n📊 QUALITY TEST RESULTS:")
    print("=" * 30)
    
    total_names = 0
    total_valid = 0
    
    for culture, data in results.items():
        total_names += data['total']
        total_valid += data['valid']
        
        quality_score = (data['valid'] / data['total']) * 100
        print(f"\n🏰 {culture.upper()}:")
        print(f"   Quality Score: {quality_score:.1f}% ({data['valid']}/{data['total']})")
        
        if data['issues']:
            print(f"   Issues found: {data['issues']}")
        
        if data['sample_valid']:
            print(f"   ✅ Good examples: {', '.join(data['sample_valid'])}")
        
        if data['sample_problematic']:
            print(f"   ❌ Problematic: {[f'{name} ({issues})' for name, issues in data['sample_problematic']]}")
    
    overall_quality = (total_valid / total_names) * 100
    print(f"\n🎯 OVERALL QUALITY: {overall_quality:.1f}%")
    print(f"📈 {total_valid}/{total_names} names passed all quality checks")
    
    if overall_issues:
        print(f"\n⚠️  ISSUES FOUND:")
        for issue, count in sorted(overall_issues.items(), key=lambda x: x[1], reverse=True):
            print(f"   {issue}: {count} occurrences")
    
    print(f"\n💡 RECOMMENDATIONS:")
    
    if 'Less than 4 characters' in overall_issues:
        short_count = overall_issues['Less than 4 characters']
        percentage = (short_count / total_names) * 100
        print(f"   - Very short names still being generated ({short_count} names, {percentage:.1f}%)")
    
    if any('consecutive' in issue for issue in overall_issues):
        print(f"   - Consecutive character rules are working correctly")
    
    if overall_quality >= 95:
        print(f"   ✅ Excellent quality! Generator meets all requirements.")
    elif overall_quality >= 85:
        print(f"   ✅ Good quality with minor improvements needed.")
    else:
        print(f"   ⚠️  Quality needs improvement.")
    
    print(f"\n🚀 Quality test complete!")

if __name__ == "__main__":
    main() 