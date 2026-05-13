## 2024-05-13 - [Caching Yaml files]
**Learning:** `yaml.safe_load` on python scripts checking identical yaml files can be slow.
**Action:** Parsing all yaml files and storing them in dictionary and looking up dictionary is more performant than performing yaml parse again and again on same set of files.
