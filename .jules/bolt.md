## 2024-05-18 - [Python Module Level Optimization]
**Learning:** Instantiating dictionaries and running `sorted()` dynamically inside heavily called string-parsing functions is a major bottleneck in Python. Regex can also add noticeable overhead compared to standard string `replace()` operations for simple substitutions.
**Action:** When extracting data in a tight loop, look for dictionary instantiations and sorts that can be lifted to module-level constants. Replace regexes with `.replace()` chaining if it matches the use-case (e.g., removing commas and spaces from numbers).

## 2024-05-30 - [Optimize YAML Parsing with CSafeLoader and Caching]
**Learning:** Python's `yaml.safe_load` is pure-Python and very slow compared to the C-based `CSafeLoader`. Repeatedly loading the same YAML files for multiple passes of validation adds significant I/O and parsing overhead.
**Action:** When working with Python scripts that parse many YAML files, always try to import `yaml.CSafeLoader` and fall back to `yaml.SafeLoader`. Additionally, cache the parsed structures (`dict`) in memory to avoid redundant parsing in multi-pass validation scripts.
