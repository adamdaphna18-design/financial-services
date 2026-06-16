## 2024-05-18 - [Python Module Level Optimization]
**Learning:** Instantiating dictionaries and running `sorted()` dynamically inside heavily called string-parsing functions is a major bottleneck in Python. Regex can also add noticeable overhead compared to standard string `replace()` operations for simple substitutions.
**Action:** When extracting data in a tight loop, look for dictionary instantiations and sorts that can be lifted to module-level constants. Replace regexes with `.replace()` chaining if it matches the use-case (e.g., removing commas and spaces from numbers).

## 2024-05-18 - [YAML Parsing Optimization]
**Learning:** Pure Python `yaml.safe_load` is slow, and reading/parsing the same files repeatedly (e.g., once for syntax checking, again for reference resolution) is a huge performance bottleneck in Python CLI tools.
**Action:** Always prefer `yaml.CSafeLoader` when available, falling back to `yaml.SafeLoader`. Additionally, cache the output of parsed files in memory (e.g. dict mapping Path -> dict) to avoid doing the same expensive IO and deserialization work multiple times.
