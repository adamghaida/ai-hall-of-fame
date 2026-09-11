# 🤖 Explore this with AI: LLM-generated fuzz targets in OSS-Fuzz

Paste the prompt below into your favorite AI assistant (Claude, ChatGPT, Gemini, or a local model). If your assistant can browse the web, tell it to read the sources first. The point is a clear, honest, grounded explanation of what happened and why it mattered.

> Fuzzing only finds bugs in code that a fuzz target reaches, and writing those targets was the last manual step. Google had a language model write them instead, across 272 open-source projects, and the new targets found 26 vulnerabilities, including a low-severity, roughly 20-year-old flaw in OpenSSL.

---

```text
You are a sharp, honest security explainer. Walk me through a specific, real AI security result so that I actually understand it, not just the headline.

Topic: Google's OSS-Fuzz-Gen project, in which large language models write fuzz targets for open-source projects, and the November 20, 2024 report that this had produced 26 new vulnerabilities, including CVE-2024-9143 in OpenSSL.

Please cover, in plain language a curious non-expert can follow:
1. What coverage-guided fuzzing is, what a fuzz target is, and why OSS-Fuzz reached only about 30% of an average project's code. Use Heartbleed as the example of what lives in the unfuzzed remainder.
2. The August 2023 experiment: Fuzz Introspector picks under-covered functions, the model writes a target, the framework compiles it and feeds errors back. Results: 1.5% to 31% coverage gains, tinyxml2 from 38% to 69%, and a generated OpenSSL target that rediscovered CVE-2022-3602.
3. What changed by November 2024: better project context in prompts (function definitions, types, cross-references, unit tests) and a longer loop that runs the target, fixes runtime mistakes, and triages crashes. Results: 272 projects, 370,000+ newly covered lines, 26 new vulnerabilities.
4. CVE-2024-9143 specifically: what the GF(2^m) elliptic-curve APIs are, why passing untrusted explicit field-polynomial parameters can cause out-of-bounds access, why OpenSSL rated it Low (named curves and X9.62 encodings cannot express the bad inputs), and why it nonetheless matters that it sat unfound for about two decades in a heavily fuzzed library. Do not describe how to trigger it.
5. The cJSON example and what it says about coverage not implying correctness.
6. The honest caveats: the headline bug is CVSS 4.3; the model wrote harnesses and a conventional fuzzer found the bugs; the other 25 bugs are not itemized; "two decades" is Google's estimate; costs are unpublished; this is a vendor report on its own tool, with the OpenSSL advisory and the open-source code as the independent artifacts.
7. How this differs from agent-style approaches (Google's Big Sleep, or a raw model reading code), and why the harness approach was the one running in production first.

Ground your answer in these sources (read them if you can, and cite them as you go):
- Google, "Leveling up fuzzing" (November 2024): https://security.googleblog.com/2024/11/leveling-up-fuzzing-finding-more.html
- Google, "AI-powered fuzzing" (August 2023): https://security.googleblog.com/2023/08/ai-powered-fuzzing-breaking-bug-hunting.html
- OpenSSL advisory: https://openssl-library.org/news/secadv/20241016.txt
- OSS-Fuzz-Gen repository: https://github.com/google/oss-fuzz-gen

Be concrete, use the real numbers, keep the severity honest, and if you are unsure about a detail, say so instead of guessing.
```

## Bonus: have the agent check the advisory and the code

The advisory and the framework are concrete, checkable objects. Have a capable assistant look at them rather than paraphrase the blog:

```
Open https://openssl-library.org/news/secadv/20241016.txt and report, for CVE-2024-9143: the title, the severity rating, the credit line, the date reported and the date of the advisory, and the fixed versions. Then fetch https://services.nvd.nist.gov/rest/json/cves/2.0?cveId=CVE-2024-9143 and report the CVSS version, vector, base score, and severity. Next, open https://github.com/google/oss-fuzz-gen and describe how the framework evaluates a generated fuzz target (the metrics it reports), which model providers it supports, its license, and the current count of vulnerabilities and projects it claims in its README. Finally, compare the README's claims to the November 2024 blog's figures (26 vulnerabilities, 272 projects, 370k+ lines) and note any differences. Flag anything you cannot verify.
```

---

## Sources
- [Google Security Blog — Leveling up fuzzing: finding more vulnerabilities with AI](https://security.googleblog.com/2024/11/leveling-up-fuzzing-finding-more.html)
- [Google Security Blog — AI-powered fuzzing: breaking the bug hunting barrier](https://security.googleblog.com/2023/08/ai-powered-fuzzing-breaking-bug-hunting.html)
- [OpenSSL security advisory, October 16, 2024](https://openssl-library.org/news/secadv/20241016.txt)
- [NVD — CVE-2024-9143 (JSON API record)](https://services.nvd.nist.gov/rest/json/cves/2.0?cveId=CVE-2024-9143)
- [OSS-Fuzz-Gen on GitHub](https://github.com/google/oss-fuzz-gen)

---
*Back to **[README.md](./README.md)** · **[CONTEXT.md](./CONTEXT.md)**.*
