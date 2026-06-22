## 2024-05-19 - YAML Parsing Optimization
**Learning:** In scripts parsing many YAML files redundantly, `yaml.CSafeLoader` offers a massive speedup over standard `yaml.safe_load`. Additionally, the repository's `check.py` validates manifests by parsing them twice (once to ensure validity, again to resolve cross-file references).
**Action:** Use `CSafeLoader` (with `SafeLoader` fallback for compatibility) and cache parsed configurations when running multi-pass validation scripts.
