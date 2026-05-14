
## 2026-05-13 - Pre-compile Regexes in extract_numbers.py
**Learning:** Repeatedly calling `re.compile()` within a frequently-called function (or one that processes many lines) introduces unnecessary CPU overhead. Although Python caches some regexes, it is best practice to pre-compile them at the module level.
**Action:** Always move regex compilations to the module level as constants (e.g., `PATTERN = re.compile(...)`) to avoid initialization overhead during execution.
