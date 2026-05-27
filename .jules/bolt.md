## 2024-05-18 - [Python Module Level Optimization]
**Learning:** Instantiating dictionaries and running `sorted()` dynamically inside heavily called string-parsing functions is a major bottleneck in Python. Regex can also add noticeable overhead compared to standard string `replace()` operations for simple substitutions.
**Action:** When extracting data in a tight loop, look for dictionary instantiations and sorts that can be lifted to module-level constants. Replace regexes with `.replace()` chaining if it matches the use-case (e.g., removing commas and spaces from numbers).

## 2024-05-18 - [Python YAML Parsing Optimization]
**Learning:** In python scripts like `scripts/check.py` that parse a large number of YAML files iteratively, the default `yaml.safe_load()` (which uses pure Python) can be a significant bottleneck. Furthermore, doing file IO and parsing twice for identical files (once for schema check, once for reference resolution) results in wasted cyclic overhead.
**Action:** Prefer importing `yaml.CSafeLoader` for a massive C-level speedup, with fallback to `yaml.SafeLoader`, and wrap `yaml.load(f, Loader=SafeLoader)`. Always cache parsed dictionaries globally to skip redundant I/O and parse operations in multi-pass validation scripts.
