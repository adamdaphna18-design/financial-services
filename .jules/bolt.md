## 2024-05-18 - [Python Module Level Optimization]
**Learning:** Instantiating dictionaries and running `sorted()` dynamically inside heavily called string-parsing functions is a major bottleneck in Python. Regex can also add noticeable overhead compared to standard string `replace()` operations for simple substitutions.
**Action:** When extracting data in a tight loop, look for dictionary instantiations and sorts that can be lifted to module-level constants. Replace regexes with `.replace()` chaining if it matches the use-case (e.g., removing commas and spaces from numbers).

## 2024-06-03 - PyYAML C Extension Optimization
**Learning:** `yaml.safe_load()` in pure Python is a significant bottleneck when parsing many small YAML configuration files across the codebase. `scripts/check.py` parsed identical files multiple times, and the default pure-Python parser is slow.
**Action:** When a Python script heavily parses YAML files, use `yaml.CSafeLoader` (with a fallback to `yaml.SafeLoader` for system compatibility) to leverage the underlying C library, and cache parsed structures to avoid redundant disk I/O and parsing overhead.
