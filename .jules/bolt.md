## 2024-05-18 - [Python Module Level Optimization]
**Learning:** Instantiating dictionaries and running `sorted()` dynamically inside heavily called string-parsing functions is a major bottleneck in Python. Regex can also add noticeable overhead compared to standard string `replace()` operations for simple substitutions.
**Action:** When extracting data in a tight loop, look for dictionary instantiations and sorts that can be lifted to module-level constants. Replace regexes with `.replace()` chaining if it matches the use-case (e.g., removing commas and spaces from numbers).

## 2024-05-18 - [Python YAML Parsing Optimization]
**Learning:** Python's default `yaml.safe_load` is notoriously slow because it uses a pure Python parser. If `pyyaml` is installed with its C extensions (via libyaml), using `CSafeLoader` gives a ~10x performance boost, which is critical for scripts that parse many YAML files on startup or during lint checks.
**Action:** Always attempt to import and use `CSafeLoader` as a fallback from `pyyaml`. Also, cache parsed output if the same file is checked multiple times, saving significant I/O and parsing overhead.
