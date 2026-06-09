## 2024-05-18 - [Python Module Level Optimization]
**Learning:** Instantiating dictionaries and running `sorted()` dynamically inside heavily called string-parsing functions is a major bottleneck in Python. Regex can also add noticeable overhead compared to standard string `replace()` operations for simple substitutions.
**Action:** When extracting data in a tight loop, look for dictionary instantiations and sorts that can be lifted to module-level constants. Replace regexes with `.replace()` chaining if it matches the use-case (e.g., removing commas and spaces from numbers).
## 2024-05-19 - [Fast YAML Parser]
**Learning:** `yaml.safe_load` uses the pure Python parser by default and can be a significant performance bottleneck when parsing multiple or large YAML files. C-based extensions like `CSafeLoader` significantly outperform it. Additionally, parsing files once and holding references in an in-memory cache is significantly faster than performing repeated redundant parsing and I/O.
**Action:** In Python scripts with high-volume YAML parsing, attempt to import `CSafeLoader` and fallback to `SafeLoader`. Cache repeatedly parsed files.
