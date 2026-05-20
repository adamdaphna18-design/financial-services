## 2024-05-18 - [Python Module Level Optimization]
**Learning:** Instantiating dictionaries and running `sorted()` dynamically inside heavily called string-parsing functions is a major bottleneck in Python. Regex can also add noticeable overhead compared to standard string `replace()` operations for simple substitutions.
**Action:** When extracting data in a tight loop, look for dictionary instantiations and sorts that can be lifted to module-level constants. Replace regexes with `.replace()` chaining if it matches the use-case (e.g., removing commas and spaces from numbers).

## 2024-05-20 - [YAML parsing optimizations]
**Learning:** `yaml.safe_load` uses the pure Python parser by default which can be a severe bottleneck when linting/parsing large numbers of files. Attempting to use `yaml.CSafeLoader` significantly improves parsing speed since it is backed by libyaml in C.
**Action:** When a Python script heavily utilizes `pyyaml` for loading files, always attempt to import and use `yaml.CSafeLoader` with a fallback to `yaml.SafeLoader` if it fails. Also, cache the loaded output if the same file is checked multiple times to save both parsing time and I/O.
