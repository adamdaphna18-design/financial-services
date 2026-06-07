## 2024-05-18 - [Python Module Level Optimization]
**Learning:** Instantiating dictionaries and running `sorted()` dynamically inside heavily called string-parsing functions is a major bottleneck in Python. Regex can also add noticeable overhead compared to standard string `replace()` operations for simple substitutions.
**Action:** When extracting data in a tight loop, look for dictionary instantiations and sorts that can be lifted to module-level constants. Replace regexes with `.replace()` chaining if it matches the use-case (e.g., removing commas and spaces from numbers).
## 2025-02-12 - [Python PyYAML Parser Speed]
**Learning:** `yaml.safe_load()` in PyYAML uses the pure-Python parser by default, which is very slow for large or many YAML files. When parsing many YAML files, reading the file from disk multiple times adds significant overhead.
**Action:** Use `yaml.load(f, Loader=yaml.CSafeLoader)` with a fallback to `yaml.SafeLoader` for a massive speedup. Cache parsed YAMLs in memory if they need to be accessed multiple times during the script execution (e.g. for syntax checking vs cross-referencing).
