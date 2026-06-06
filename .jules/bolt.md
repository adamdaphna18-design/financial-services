## 2024-05-18 - [Python Module Level Optimization]
**Learning:** Instantiating dictionaries and running `sorted()` dynamically inside heavily called string-parsing functions is a major bottleneck in Python. Regex can also add noticeable overhead compared to standard string `replace()` operations for simple substitutions.
**Action:** When extracting data in a tight loop, look for dictionary instantiations and sorts that can be lifted to module-level constants. Replace regexes with `.replace()` chaining if it matches the use-case (e.g., removing commas and spaces from numbers).

## 2024-05-18 - [YAML Parsing Optimization]
**Learning:** Pure python `yaml.safe_load` is extremely slow when parsing numerous configuration files. Reading the exact same files twice across validation steps adds redundant IO overhead.
**Action:** Use `CSafeLoader` when heavy YAML parsing is needed. Implement caching dicts to memoize previously parsed files when looping over paths multiple times.
