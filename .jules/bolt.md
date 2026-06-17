## 2024-05-18 - [Python Module Level Optimization]
**Learning:** Instantiating dictionaries and running `sorted()` dynamically inside heavily called string-parsing functions is a major bottleneck in Python. Regex can also add noticeable overhead compared to standard string `replace()` operations for simple substitutions.
**Action:** When extracting data in a tight loop, look for dictionary instantiations and sorts that can be lifted to module-level constants. Replace regexes with `.replace()` chaining if it matches the use-case (e.g., removing commas and spaces from numbers).

## 2024-05-18 - [YAML Parsing Optimization]
**Learning:** PyYAML's default `safe_load` uses a pure-Python parser which is extremely slow when parsing many YAML files, such as when evaluating schemas and manifests in `scripts/check.py`.
**Action:** When working with PyYAML in tight loops or large file batches, always use `yaml.load(f, Loader=getattr(yaml, 'CSafeLoader', yaml.SafeLoader))` to fallback to the libyaml C-bindings if available. Also cache parsed outputs to avoid redundant I/O and parsing overhead for repeated lookups.
