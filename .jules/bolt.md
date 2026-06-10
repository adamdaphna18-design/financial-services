## 2024-05-18 - [Python Module Level Optimization]
**Learning:** Instantiating dictionaries and running `sorted()` dynamically inside heavily called string-parsing functions is a major bottleneck in Python. Regex can also add noticeable overhead compared to standard string `replace()` operations for simple substitutions.
**Action:** When extracting data in a tight loop, look for dictionary instantiations and sorts that can be lifted to module-level constants. Replace regexes with `.replace()` chaining if it matches the use-case (e.g., removing commas and spaces from numbers).
## 2026-05-18 - [YAML Loader Optimization & Memory Cache]
**Learning:**  uses a pure python implementation which acts as a heavy bottleneck for large directories containing plenty of yaml files. Additionally, redundantly parsing yaml files instead of utilizing a dictionary structure acts as a bottleneck.
**Action:** When extracting data in a tight loop from yaml files, utilize  to invoke C library for optimization and cache yaml representations.
## 2026-05-18 - [YAML Loader Optimization & Memory Cache]
**Learning:** yaml.safe_load uses a pure python implementation which acts as a heavy bottleneck for large directories containing plenty of yaml files. Additionally, redundantly parsing yaml files instead of utilizing a dictionary structure acts as a bottleneck.
**Action:** When extracting data in a tight loop from yaml files, utilize CSafeLoader to invoke C library for optimization and cache yaml representations.
