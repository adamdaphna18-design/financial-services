## 2024-05-18 - [Python Module Level Optimization]
**Learning:** Instantiating dictionaries and running `sorted()` dynamically inside heavily called string-parsing functions is a major bottleneck in Python. Regex can also add noticeable overhead compared to standard string `replace()` operations for simple substitutions.
**Action:** When extracting data in a tight loop, look for dictionary instantiations and sorts that can be lifted to module-level constants. Replace regexes with `.replace()` chaining if it matches the use-case (e.g., removing commas and spaces from numbers).
## 2024-05-25 - [YAML Parsing Optimization]
**Learning:** Pure python YAML parsing is notoriously slow. In scripts reading many YAML files, falling back to C-based loaders and caching repeated file reads provides significant speedups.
**Action:** Always attempt to import `yaml.CSafeLoader` when heavy YAML processing is required, keeping `yaml.SafeLoader` as a fallback.
