## 2024-05-18 - [Python Module Level Optimization]
**Learning:** Instantiating dictionaries and running `sorted()` dynamically inside heavily called string-parsing functions is a major bottleneck in Python. Regex can also add noticeable overhead compared to standard string `replace()` operations for simple substitutions.
**Action:** When extracting data in a tight loop, look for dictionary instantiations and sorts that can be lifted to module-level constants. Replace regexes with `.replace()` chaining if it matches the use-case (e.g., removing commas and spaces from numbers).
## 2023-11-20 - [Redundant parsing and slow PyYAML]
**Learning:** `scripts/check.py` parsed YAML files twice via `yaml.safe_load(f)` (pure-Python execution is very slow). Once to check if the file was valid YAML, and again to resolve internal file references.
**Action:** Use PyYAML's C-based `CSafeLoader` when available for a substantial speedup, and cache parsed YAML dicts by their pathlib Path when scripts need to read them repeatedly to reduce disk I/O and CPU time.
