## 2024-05-18 - [Python Module Level Optimization]
**Learning:** Instantiating dictionaries and running `sorted()` dynamically inside heavily called string-parsing functions is a major bottleneck in Python. Regex can also add noticeable overhead compared to standard string `replace()` operations for simple substitutions.
**Action:** When extracting data in a tight loop, look for dictionary instantiations and sorts that can be lifted to module-level constants. Replace regexes with `.replace()` chaining if it matches the use-case (e.g., removing commas and spaces from numbers).

## $(date +%Y-%m-%d) - [YAML Parsing Optimization]
**Learning:** `yaml.safe_load` uses the pure-Python parser in PyYAML which can be remarkably slow for numerous/large files. Additionally, `scripts/check.py` was parsing the same YAML files multiple times (once for parse check, once for reference resolution).
**Action:** Always attempt to import `CSafeLoader` from `yaml` for a significant speedup. Cache the results of parsed YAML files in memory if they need to be accessed multiple times in the same script.
