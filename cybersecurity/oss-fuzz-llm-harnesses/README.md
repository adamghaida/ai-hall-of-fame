# Google's OSS-Fuzz let an LLM write the fuzz targets, and found 26 bugs including a 20-year-old OpenSSL flaw

**Field:** 🛡️ Cybersecurity  ·  **When:** November 2024

> Fuzzing only finds bugs in code that a fuzz target reaches, and writing those targets was the last manual step. Google had a language model write them instead, across 272 open-source projects, and the new targets turned up 26 vulnerabilities that hundreds of thousands of hours of prior fuzzing had missed. One of them was CVE-2024-9143 in OpenSSL, likely present for about two decades. Its severity is low.

## What happened
**OSS-Fuzz** is Google's free continuous-fuzzing service for open-source software, running since 2016 and, by 2023, fuzzing over 1,000 projects and credited with more than 10,000 fixed vulnerabilities. Its known weakness is coverage: the service reached only about 30% of an average project's code, because a fuzzer only exercises what a **fuzz target** (a small harness function that feeds random input to an API) tells it to, and writing those targets is manual, project-specific work that usually falls to volunteer maintainers.

In **August 2023**, Google's Open Source Security Team (Dongge Liu, Jonathan Metzman, and Oliver Chang) reported an experiment: have an LLM write new fuzz targets, compile them, and fix its own compilation errors in a loop. Sample projects gained between 1.5% and 31% coverage; tinyxml2 went from 38% to 69% line coverage with no human intervention, and an LLM-written OpenSSL target rediscovered CVE-2022-3602 in code that previously had no fuzzing coverage. In **January 2024** the framework was open-sourced as **OSS-Fuzz-Gen**, then producing useful targets for 160 C/C++ projects.

On **November 20, 2024**, the team reported what happened once the pipeline was extended to emulate more of a developer's workflow: drafting a target, fixing compile errors, running it briefly and repairing runtime mistakes, then running it longer and triaging crashes. The results:

- New coverage in **272** C/C++ projects on OSS-Fuzz (up from 160), adding over **370,000 lines** of newly covered code. The largest single-project gain was from 77 lines to 5,434.
- **26 new vulnerabilities** in projects that already had "hundreds of thousands of hours of fuzzing" behind them.
- The headline: **CVE-2024-9143** in **OpenSSL**, reported September 16, 2024 and fixed October 16. Google's assessment was that it had "likely been present for two decades and wouldn't have been discoverable with existing fuzz targets written by humans." OpenSSL's advisory, which credits "Google OSS-Fuzz-Gen," describes an out-of-bounds memory access when the low-level GF(2^m) elliptic-curve APIs are given untrusted explicit field-polynomial parameters, rates it **Low**, and notes that standard protocols use named curves or encodings that cannot express the problematic inputs. Fixes shipped in OpenSSL 3.3.3, 3.2.4, 3.1.8, 3.0.16, and the premium-support 1.1.1 and 1.0.2 branches. NVD records a CVSS 3.1 base score of **4.3**.
- A bug in **cJSON** found in a function that already had a human-written fuzz target, which Google offers as evidence that line coverage does not mean a function is bug-free: different targets exercise different states.

By the time of this entry's writing, the OSS-Fuzz-Gen repository's own tally had grown to 30 vulnerabilities and a maximum per-project coverage improvement of 29% over existing human-written targets.

## Why it matters
This is the least glamorous AI security result in this collection and one of the most reproducible. The model did not find the bugs; a conventional fuzzer did. What the model did was the tedious part nobody was doing: write harnesses for code that had never been reached, at a scale (hundreds of projects) that a team of humans could not match, and the bugs followed from coverage. Google's own blog frames it as adding "another real-world example" to the [Big Sleep SQLite find](../big-sleep-vulnerability-discovery/) of a month earlier, and the two together are the start of the record of AI-found bugs in software that matters. The framework is open source under Apache-2.0, so anyone running OSS-Fuzz-style infrastructure can use it.

## Sources — the record of the discovery
- [Google Security Blog — Leveling up fuzzing: finding more vulnerabilities with AI (November 20, 2024)](https://security.googleblog.com/2024/11/leveling-up-fuzzing-finding-more.html)
- [Google Security Blog — AI-powered fuzzing: breaking the bug hunting barrier (August 16, 2023)](https://security.googleblog.com/2023/08/ai-powered-fuzzing-breaking-bug-hunting.html)
- [OpenSSL security advisory, October 16, 2024 (CVE-2024-9143)](https://openssl-library.org/news/secadv/20241016.txt)
- [NVD — CVE-2024-9143 (JSON API record)](https://services.nvd.nist.gov/rest/json/cves/2.0?cveId=CVE-2024-9143)
- [OSS-Fuzz-Gen on GitHub](https://github.com/google/oss-fuzz-gen)

---
*In this folder: **[PROMPT.md](./PROMPT.md)** (a prompt to explore it with AI) · **[CONTEXT.md](./CONTEXT.md)** (background & caveats). Part of the [AI Hall of Fame](../../README.md) → [🛡️ Cybersecurity](../).*
