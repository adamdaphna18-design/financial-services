## 2024-05-18 - [Python Module Level Optimization]
**Learning:** Instantiating dictionaries and running `sorted()` dynamically inside heavily called string-parsing functions is a major bottleneck in Python. Regex can also add noticeable overhead compared to standard string `replace()` operations for simple substitutions.
**Action:** When extracting data in a tight loop, look for dictionary instantiations and sorts that can be lifted to module-level constants. Replace regexes with `.replace()` chaining if it matches the use-case (e.g., removing commas and spaces from numbers).
## 2026-06-18 - [YAML Parsing Optimization]
**Learning:** In Python scripts that parse YAML heavily (like `scripts/check.py`), using `yaml.CSafeLoader` instead of the default pure-Python `yaml.SafeLoader` leads to significant performance gains (over 60% speedup).
**Action:** When working with heavy YAML parsing, always prefer `CSafeLoader` with a fallback to `SafeLoader`.
