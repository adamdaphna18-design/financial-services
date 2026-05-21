## 2024-05-18 - [Python Module Level Optimization]
**Learning:** Instantiating dictionaries and running `sorted()` dynamically inside heavily called string-parsing functions is a major bottleneck in Python. Regex can also add noticeable overhead compared to standard string `replace()` operations for simple substitutions.
**Action:** When extracting data in a tight loop, look for dictionary instantiations and sorts that can be lifted to module-level constants. Replace regexes with `.replace()` chaining if it matches the use-case (e.g., removing commas and spaces from numbers).

## 2024-05-18 - [YAML Parsing Optimization]
**Learning:** `yaml.safe_load()` in pure Python can be a major bottleneck for scripts processing many YAML files.
**Action:** In Python scripts that parse YAML heavily, use `yaml.CSafeLoader` (with a fallback to `yaml.SafeLoader` if C implementation is missing) instead of `yaml.safe_load()`.

## 2024-05-18 - [Regex Compilation Optimization]
**Learning:** Calling `re.findall()` with string patterns inside loops forces Python to continually re-compile (or fetch from the small internal cache) the regex, adding overhead in tight or large loops.
**Action:** Always pre-compile regex patterns using `re.compile()` outside loops and use the compiled object's methods.
