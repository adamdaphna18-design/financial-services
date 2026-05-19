## 2024-05-18 - [Python Module Level Optimization]
**Learning:** Instantiating dictionaries and running `sorted()` dynamically inside heavily called string-parsing functions is a major bottleneck in Python. Regex can also add noticeable overhead compared to standard string `replace()` operations for simple substitutions.
**Action:** When extracting data in a tight loop, look for dictionary instantiations and sorts that can be lifted to module-level constants. Replace regexes with `.replace()` chaining if it matches the use-case (e.g., removing commas and spaces from numbers).

## 2025-02-25 - Python YAML parsing speed
**Learning:** Python's built-in `yaml.safe_load()` uses a pure-python parser which is quite slow. Using `yaml.CSafeLoader` gives a ~3x performance boost. The `CSafeLoader` should be used where possible, with a fallback to `SafeLoader` when the C bindings are missing. Parsing repetitive files should also be cached.
**Action:** Replace `yaml.safe_load` with `yaml.load(text, Loader=CSafeLoader)` (with fallback) everywhere YAML is parsed in Python scripts, and cache results where appropriate, to improve script execution times significantly.
