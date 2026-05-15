## 2024-05-18 - [Python Module Level Optimization]
**Learning:** Instantiating dictionaries and running `sorted()` dynamically inside heavily called string-parsing functions is a major bottleneck in Python. Regex can also add noticeable overhead compared to standard string `replace()` operations for simple substitutions.
**Action:** When extracting data in a tight loop, look for dictionary instantiations and sorts that can be lifted to module-level constants. Replace regexes with `.replace()` chaining if it matches the use-case (e.g., removing commas and spaces from numbers).

## 2024-05-20 - [Pre-compile regex in loop]
**Learning:** Re-compiling regular expressions (or relying on internal cache lookup) inside a loop adds overhead, especially when processing many files.
**Action:** Move regular expression compilation outside of loops to a module-level constant to improve performance and code clarity.
