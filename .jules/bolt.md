## 2024-05-18 - [Python Module Level Optimization]
**Learning:** Instantiating dictionaries and running `sorted()` dynamically inside heavily called string-parsing functions is a major bottleneck in Python. Regex can also add noticeable overhead compared to standard string `replace()` operations for simple substitutions.
**Action:** When extracting data in a tight loop, look for dictionary instantiations and sorts that can be lifted to module-level constants. Replace regexes with `.replace()` chaining if it matches the use-case (e.g., removing commas and spaces from numbers).

## 2024-05-18 - [YAML Parsing Optimization]
**Learning:** Using `yaml.safe_load()` repeatedly on the same files inside loops (like the reference resolution loop in `scripts/check.py`) introduces a significant performance bottleneck due to pure-Python parsing overhead and redundant I/O.
**Action:** When validating or parsing many YAML files, use `yaml.CSafeLoader` (via a try/except fallback to `yaml.SafeLoader`) to leverage C-based parsing speed. Furthermore, cache the parsed dictionaries in a dictionary (e.g., `_yaml_cache`) during the initial discovery pass to avoid re-reading and re-parsing files during subsequent validation steps.
