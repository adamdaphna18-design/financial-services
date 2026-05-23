## 2024-05-18 - [Python Module Level Optimization]
**Learning:** Instantiating dictionaries and running `sorted()` dynamically inside heavily called string-parsing functions is a major bottleneck in Python. Regex can also add noticeable overhead compared to standard string `replace()` operations for simple substitutions.
**Action:** When extracting data in a tight loop, look for dictionary instantiations and sorts that can be lifted to module-level constants. Replace regexes with `.replace()` chaining if it matches the use-case (e.g., removing commas and spaces from numbers).
## 2024-05-23 - [Python YAML Parsing Optimization]
**Learning:** Pure Python `yaml.safe_load` is extremely slow when processing many files. Additionally, the test suites might read the same YAML file multiple times.
**Action:** When working on python scripts validating multiple yaml files, use `yaml.CSafeLoader` over `yaml.SafeLoader` and implement a simple in-memory cache to store parsed ASTs using the file path as the key to prevent redundant reads.
