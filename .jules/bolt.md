## 2024-05-18 - [Python Module Level Optimization]
**Learning:** Instantiating dictionaries and running `sorted()` dynamically inside heavily called string-parsing functions is a major bottleneck in Python. Regex can also add noticeable overhead compared to standard string `replace()` operations for simple substitutions.
**Action:** When extracting data in a tight loop, look for dictionary instantiations and sorts that can be lifted to module-level constants. Replace regexes with `.replace()` chaining if it matches the use-case (e.g., removing commas and spaces from numbers).

## 2024-05-24 - [YAML Parsing Optimization]
**Learning:** Pure Python YAML parsing (`yaml.SafeLoader`) is significantly slower than the C-based `yaml.CSafeLoader`. Parsing the same YAML file multiple times across different phases of a validation script creates a noticeable I/O and CPU bottleneck.
**Action:** When working with Python scripts that heavily parse YAML, use `yaml.CSafeLoader` (falling back to `yaml.SafeLoader` for compatibility) and cache the parsed output in a module-level dictionary to avoid redundant I/O during validation phases.
