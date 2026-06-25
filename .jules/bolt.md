## 2024-05-18 - [Python Module Level Optimization]
**Learning:** Instantiating dictionaries and running `sorted()` dynamically inside heavily called string-parsing functions is a major bottleneck in Python. Regex can also add noticeable overhead compared to standard string `replace()` operations for simple substitutions.
**Action:** When extracting data in a tight loop, look for dictionary instantiations and sorts that can be lifted to module-level constants. Replace regexes with `.replace()` chaining if it matches the use-case (e.g., removing commas and spaces from numbers).
## 2026-06-25 - [CSafeLoader performance impact]
**Learning:** Using PyYAML's `CSafeLoader` combined with parsed results caching can speed up script execution by several magnitudes compared to standard `yaml.safe_load`, especially when running repeatedly in checks.
**Action:** Use `CSafeLoader` with fallback to `SafeLoader` when parsing large numbers of YAMLs or parsing repeatedly. Cache file parse results if they are read multiple times.
