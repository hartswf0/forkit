import json
import os
import glob

# Pattern to find all thick data files
files = glob.glob('/Users/gaia/FORKIT/fork-paradox-cascade-thick*.json')
files.sort()

all_scenarios = []

# Special handling for the main "Petrov" file which has a different structure
petrov_file = '/Users/gaia/FORKIT/fork-paradox-cascade-thick.json'
if petrov_file in files:
    with open(petrov_file, 'r') as f:
        data = json.load(f)
        # Wrap it to look like the others or just mark it
        scenario = data.get('thick_cascade', {})
        scenario['source'] = 'fork_paradox_cascade_thick'
        scenario['description'] = data.get('methodology', {}).get('description', '')
        all_scenarios.append(scenario)
    files.remove(petrov_file)

# Process the batch files
for file_path in files:
    try:
        with open(file_path, 'r') as f:
            data = json.load(f)
            if 'scenarios' in data:
                all_scenarios.extend(data['scenarios'])
            elif 'thick_cascade' in data: # In case any others follow the single format
                all_scenarios.append(data['thick_cascade'])
    except Exception as e:
        print(f"Error reading {file_path}: {e}")

# Output as a JS variable assignment
print("const ALL_THICK_DATA = " + json.dumps(all_scenarios, indent=2) + ";")
