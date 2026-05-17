## 2024-05-18 - [Python Module Level Optimization]
**Learning:** Instantiating dictionaries and running `sorted()` dynamically inside heavily called string-parsing functions is a major bottleneck in Python. Regex can also add noticeable overhead compared to standard string `replace()` operations for simple substitutions.
**Action:** When extracting data in a tight loop, look for dictionary instantiations and sorts that can be lifted to module-level constants. Replace regexes with `.replace()` chaining if it matches the use-case (e.g., removing commas and spaces from numbers).
## 2024-05-18 - [YAML Parsing Optimization]
**Learning:** In Python scripts that parse YAML heavily, use `yaml.CSafeLoader` (with a fallback to `yaml.SafeLoader`) instead of the default pure-Python parser. Also, cache parsed outputs to avoid redundant file I/O and parsing overhead.
**Action:** When implementing YAML parsing across multiple files or repeatedly, explicitly specify `Loader=yaml.CSafeLoader` to gain significant performance improvements. Caching results indexed by filepath prevents double work, particularly when validation functions re-read the same YAML files.
