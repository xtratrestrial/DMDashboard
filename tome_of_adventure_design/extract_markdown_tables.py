#!/usr/bin/env python3
"""
Extract tables from Tome of Adventure Design and convert to markdown format.
"""

import re
import os

def is_table_header(line):
    """Check if a line is a table header."""
    return re.match(r'^Table \d+-\d+[A-Z]?:', line.strip()) is not None

def is_table_continuation(line):
    """Check if a line is a table continuation header."""
    return re.match(r'^Table \d+-\d+[A-Z]?:.*continued', line.strip()) is not None

def is_chapter_header(line):
    """Check if a line is a chapter header."""
    return re.match(r'^CHAPTER \w+:', line.strip()) is not None

def sanitize_filename(name):
    """Convert table name to a valid filename."""
    name = re.sub(r'[^\w\d-]+', '_', name)
    name = re.sub(r'_+', '_', name)
    return name.strip('_')

def extract_table_content(lines, start_idx):
    """Extract all content for a table starting at start_idx."""
    table_lines = []
    i = start_idx
    
    # Collect all lines until next table header or chapter
    while i < len(lines):
        line = lines[i].strip()
        
        # Stop if we hit another table header or chapter
        if (is_table_header(line) or is_chapter_header(line)) and i > start_idx:
            break
            
        table_lines.append(lines[i].rstrip())
        i += 1
    
    return table_lines

def parse_table_structure(table_lines):
    """Parse table lines into columns and rows."""
    # Find the header section (lines with column names)
    header_lines = []
    data_start_idx = 0
    
    for i, line in enumerate(table_lines):
        line = line.strip()
        if not line:
            continue
            
        # Look for numbered rows (01, 02, etc.) - this marks the start of data
        if re.match(r'^\d{2}\s', line):
            data_start_idx = i
            break
            
        # Collect header lines
        if not is_table_header(line) and not is_table_continuation(line):
            header_lines.append(line)
    
    if not header_lines:
        return None, None
    
    # Parse the multi-line header into columns
    # The headers are typically structured like:
    # Structure's    Structure    Feature     Feature
    # Description    (1d100)      (first      (second
    # (1d100)                      word)      word)
    
    # For now, let's use a simpler approach and look for the pattern
    columns = []
    
    # Look for the pattern of 4 columns with (1d100) indicators
    header_text = ' '.join(header_lines)
    if '(1d100)' in header_text:
        # Try to extract 4 column names
        parts = header_text.split()
        if len(parts) >= 8:  # Should have at least 8 parts for 4 columns
            # This is a simplified approach - in practice, we'd need more sophisticated parsing
            columns = [
                "Structure's Description (1d100)",
                "Structure (1d100)", 
                "Feature (first word) (1d100)",
                "Feature (second word) (1d100)"
            ]
    
    if not columns:
        # Fallback: create generic column names
        columns = [f"Column {i+1}" for i in range(4)]
    
    # Parse data rows
    rows = []
    for line in table_lines[data_start_idx:]:
        line = line.strip()
        if not line:
            continue
            
        # Stop if we hit another table header
        if is_table_header(line):
            break
            
        # Look for numbered entries (01, 02, etc.)
        if re.match(r'^\d{2}\s', line):
            # Split on multiple spaces to get columns
            parts = re.split(r'\s{2,}', line)
            if len(parts) >= 4:
                # Take the first 4 parts as our columns
                row_data = parts[:4]
                rows.append(row_data)
    
    return columns, rows

def create_markdown_table(table_name, table_lines):
    """Convert table lines to markdown format."""
    columns, rows = parse_table_structure(table_lines)
    
    if not columns or not rows:
        # If we can't parse as a table, return as code block
        return f"# {table_name}\n\n```\n" + "\n".join(table_lines) + "\n```\n"
    
    # Build markdown table
    md = f"# {table_name}\n\n"
    md += "| " + " | ".join(columns) + " |\n"
    md += "| " + " | ".join(["---"] * len(columns)) + " |\n"
    
    for row in rows:
        md += "| " + " | ".join(row) + " |\n"
    
    return md

def extract_tables_from_file(input_file, output_dir):
    """Extract all tables from the input file and save as markdown files."""
    os.makedirs(output_dir, exist_ok=True)
    
    with open(input_file, 'r', encoding='utf-8') as f:
        lines = f.readlines()
    
    # Group tables by their base name (without "continued")
    logical_tables = {}
    
    for i, line in enumerate(lines):
        line = line.rstrip()
        
        # Check if this is a table header
        if is_table_header(line) or is_table_continuation(line):
            # Get the base table name (without "continued")
            base_name = re.sub(r' continued.*', '', line.strip())
            
            # Extract all content for this table
            table_content = extract_table_content(lines, i)
            
            # Add to logical tables
            if base_name not in logical_tables:
                logical_tables[base_name] = []
            logical_tables[base_name].extend(table_content)
    
    # Write each logical table as a markdown file
    for table_name, table_lines in logical_tables.items():
        # Remove duplicate lines
        seen = set()
        deduped_lines = []
        for l in table_lines:
            if l.strip() in seen:
                continue
            seen.add(l.strip())
            deduped_lines.append(l)
        
        # Create filename from table name
        filename = sanitize_filename(table_name)[:80] + ".md"
        filepath = os.path.join(output_dir, filename)
        
        # Create markdown content
        md_content = create_markdown_table(table_name, deduped_lines)
        
        # Write to file
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(md_content)
        
        # Print info for debugging
        columns, rows = parse_table_structure(deduped_lines)
        print(f"Wrote {filename}: {len(rows) if rows else 0} rows")
    
    return len(logical_tables)

def main():
    input_file = "tome-of-adventure-scraped.txt"
    output_dir = "tables"
    
    print(f"Extracting tables from {input_file}...")
    
    num_tables = extract_tables_from_file(input_file, output_dir)
    
    print(f"Extraction complete!")
    print(f"Tables extracted: {num_tables}")
    print(f"Output directory: {output_dir}")

if __name__ == "__main__":
    main() 