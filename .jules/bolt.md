## 2024-05-18 - [Python Module Level Optimization]
**Learning:** Instantiating dictionaries and running `sorted()` dynamically inside heavily called string-parsing functions is a major bottleneck in Python. Regex can also add noticeable overhead compared to standard string `replace()` operations for simple substitutions.
**Action:** When extracting data in a tight loop, look for dictionary instantiations and sorts that can be lifted to module-level constants. Replace regexes with `.replace()` chaining if it matches the use-case (e.g., removing commas and spaces from numbers).

## 2024-06-25 - [YAML Parsing Optimization]
**Learning:** PyYAML's default pure-Python `SafeLoader` (`yaml.safe_load()`) can be a significant performance bottleneck when parsing many YAML files, as seen in `scripts/check.py`.
**Action:** When parsing many YAML files, use `yaml.load(text, Loader=SafeLoader)` where `SafeLoader` is imported as `try: from yaml import CSafeLoader as SafeLoader except ImportError: from yaml import SafeLoader`. This gracefully falls back to the pure-Python loader if `libyaml` bindings are unavailable while providing massive speedups (~3x-4x) when they are. Combine with a file cache to avoid re-parsing during multiple validation passes.
