## 2024-05-18 - [Python Module Level Optimization]
**Learning:** Instantiating dictionaries and running `sorted()` dynamically inside heavily called string-parsing functions is a major bottleneck in Python. Regex can also add noticeable overhead compared to standard string `replace()` operations for simple substitutions.
**Action:** When extracting data in a tight loop, look for dictionary instantiations and sorts that can be lifted to module-level constants. Replace regexes with `.replace()` chaining if it matches the use-case (e.g., removing commas and spaces from numbers).
## 2026-06-13 - [Python yaml.CSafeLoader Performance Optimization]
**Learning:** In Python scripts that heavily parse YAML files, using pure-Python `yaml.SafeLoader` (the default of `yaml.safe_load`) is significantly slower than using `yaml.CSafeLoader` which is backed by libyaml in C. Caching parsed files is also important when they are parsed multiple times across validations.
**Action:** Replace `yaml.safe_load(f)` with `yaml.load(f, Loader=yaml.CSafeLoader)` (falling back to `SafeLoader`) to drastically reduce YAML parsing overhead, and cache outputs for files read multiple times.
