## 2024-05-18 - [Python Module Level Optimization]
**Learning:** Instantiating dictionaries and running `sorted()` dynamically inside heavily called string-parsing functions is a major bottleneck in Python. Regex can also add noticeable overhead compared to standard string `replace()` operations for simple substitutions.
**Action:** When extracting data in a tight loop, look for dictionary instantiations and sorts that can be lifted to module-level constants. Replace regexes with `.replace()` chaining if it matches the use-case (e.g., removing commas and spaces from numbers).

## 2024-05-18 - Caching and CSafeLoader for YAML parsing
**Learning:** In Python scripts that parse YAML heavily (like `scripts/check.py`), the default pure-Python `yaml.safe_load` is a significant bottleneck.
**Action:** Use `yaml.CSafeLoader` (with fallback to `yaml.SafeLoader`) for a huge parsing speedup (~6-10x), and cache parsed outputs to avoid redundant file I/O on multiple passes.
