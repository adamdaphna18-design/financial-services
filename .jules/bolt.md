## 2024-05-18 - [Python Module Level Optimization]
**Learning:** Instantiating dictionaries and running `sorted()` dynamically inside heavily called string-parsing functions is a major bottleneck in Python. Regex can also add noticeable overhead compared to standard string `replace()` operations for simple substitutions.
**Action:** When extracting data in a tight loop, look for dictionary instantiations and sorts that can be lifted to module-level constants. Replace regexes with `.replace()` chaining if it matches the use-case (e.g., removing commas and spaces from numbers).

## 2024-06-05 - [YAML Parser Optimization & Caching]
**Learning:** `scripts/check.py` heavily parses `.yaml` files multiple times during execution (once for validation, once for reference resolution). Using pure-Python `yaml.safe_load` results in slower execution.
**Action:** Always prefer `yaml.CSafeLoader` over `yaml.SafeLoader` if `libyaml` is available on the system. Implement memory caching for parsed files to prevent redundant I/O and CPU overhead.
