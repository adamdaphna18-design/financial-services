## 2024-05-18 - [Python Module Level Optimization]
**Learning:** Instantiating dictionaries and running `sorted()` dynamically inside heavily called string-parsing functions is a major bottleneck in Python. Regex can also add noticeable overhead compared to standard string `replace()` operations for simple substitutions.
**Action:** When extracting data in a tight loop, look for dictionary instantiations and sorts that can be lifted to module-level constants. Replace regexes with `.replace()` chaining if it matches the use-case (e.g., removing commas and spaces from numbers).

## 2024-05-19 - [Heavy YAML Parsing Optimization]
**Learning:** Using `yaml.safe_load()` repeatedly in Python scripts is a major performance bottleneck, as it uses the pure-Python YAML parser. Furthermore, parsing the same file multiple times unnecessarily multiplies this overhead.
**Action:** When performing heavy YAML parsing in Python (like in `scripts/check.py`), use `yaml.CSafeLoader` (with a fallback to `yaml.SafeLoader` if unavailable) instead of `yaml.safe_load()`. Also, cache the parsed dictionaries to avoid redundant disk I/O and parsing time. This reduces parsing overhead significantly.
