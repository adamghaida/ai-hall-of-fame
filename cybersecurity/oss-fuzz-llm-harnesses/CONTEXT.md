# 📚 Context: LLM-generated fuzz targets in OSS-Fuzz

**The problem fuzzing has.** Coverage-guided fuzzing is the most productive automated bug-finding technique of the last decade, and OSS-Fuzz is its largest deployment: over 1,000 open-source projects, more than 10,000 vulnerabilities found and fixed since 2016, all free to maintainers. But a fuzzer can only mutate inputs to code it is pointed at, and pointing it requires a fuzz target, a short function that takes bytes and calls the library. Writing good targets is like writing unit tests: project-specific, tedious, and never finished. Google's own estimate in 2023 was that OSS-Fuzz reached only about 30% of the average project's code, and that adding targets was the one step in the workflow that had not been automated. The Heartbleed bug in OpenSSL is the canonical example of what sits in the other 70%: trivially fuzzable, if anyone had written the harness.

**The 2023 experiment.** Google's Open Source Security Team wired an LLM into OSS-Fuzz's existing Fuzz Introspector tool, which identifies under-covered, high-value functions. The framework built a prompt with project context, had the model write a target, compiled it, fed compilation errors back for another attempt, then ran the result and measured coverage. Early outputs did not compile at all. After prompt iteration, sample projects gained 1.5% to 31% coverage, tinyxml2 went from 38% to 69% line coverage with no human involvement, and in OpenSSL a generated target rediscovered CVE-2022-3602 in previously unfuzzed code. The team's comparison was that reproducing the tinyxml2 result by hand would take a day per project, or years across OSS-Fuzz.

**OSS-Fuzz-Gen.** Open-sourced in January 2024 under Apache-2.0, the framework supports multiple model providers and scores generated targets on compilability, runtime crashes, coverage, and coverage gain relative to human-written targets. By then it was producing working targets for 160 C/C++ projects, with a long tail where nothing worked.

**The 2024 results.** Two changes drove the November 2024 numbers. First, better context: automatically indexing each project to give the model function definitions, types, cross-references, and existing unit tests, so it hallucinated less. Second, more of the workflow: after compile-fixing, the model now ran the target briefly to catch semantic mistakes (the post's example is a SQLite target that failed because it opened a blob on a table it had not created), then ran it longer and triaged crashes. That took the pipeline to 272 projects with coverage gains, 370,000+ new lines covered, and 26 new vulnerabilities in projects that had been fuzzed for hundreds of thousands of hours.

**CVE-2024-9143.** The OpenSSL bug is in the low-level GF(2^m) elliptic-curve arithmetic: when an application passes explicit, untrusted parameters for the field polynomial, the code can read or write out of bounds. Google reported it on September 16, 2024; OpenSSL fixed it on October 16 and credited "Google OSS-Fuzz-Gen," with the fix written by Viktor Dukhovni. The advisory rates it Low: standard protocols use named curves or X9.62 encodings that cannot represent the problematic inputs, so an application would have to be doing something unusual to be affected. NVD's CVSS 3.1 score is 4.3. What makes it notable is not impact but age and location: about two decades in one of the most-fuzzed libraries on earth, in code no human harness had reached.

**Where it sits.** This work is the practical, infrastructure-side counterpart to the agent approach Google's Project Zero and DeepMind took with [Big Sleep](../big-sleep-vulnerability-discovery/), announced three weeks earlier. Big Sleep has a model reason about code to find a bug directly; OSS-Fuzz-Gen has a model write the harness and lets a fuzzer do the finding. Later results, from Sean Heelan's raw-model kernel find to Anthropic's scaffolding-free reports, are closer to the former. The fuzz-target approach is the one that was running in production, across a thousand projects, first.

## Why it's in the Hall of Fame
A production deployment, not an experiment: an open-source framework that measurably extended the reach of the world's largest fuzzing service and produced a real CVE in OpenSSL in code that decades of human harness-writing had not covered. The claim is modest and the evidence is public.

## Honest caveats
- **The headline bug is low severity.** OpenSSL rated CVE-2024-9143 Low and NVD scored it 4.3. It requires an application to pass untrusted explicit curve parameters through low-level APIs, which normal TLS usage does not do. "Twenty-year-old OpenSSL vulnerability" is accurate and also easy to over-read.
- **The model did not find the bugs.** The fuzzer did. The model's contribution is writing harnesses that reach new code. That is genuinely useful and also a narrower claim than most AI-security headlines.
- **Severity of the other 25 is not itemized.** The blog names OpenSSL and cJSON and gives a count of 26. No per-bug severity, CVE list, or project list was published in the post; the OSS-Fuzz-Gen repository lists some affected projects and a running total of 30.
- **"Two decades" is Google's estimate.** The blog says the bug had "likely" been present for that long. The advisory does not date it.
- **Coverage is not correctness.** Google's own point about the cJSON bug cuts both ways: a function with a harness still had a bug, which means the 370,000 newly covered lines are not now bug-free either. Coverage numbers measure reach, not assurance.
- **Long tail of failure.** In January 2024 there were many projects for which no working target could be generated. The 2024 post reports progress to 272 projects but does not report how many still yield nothing.
- **Costs are not published.** Model usage, compute for the compile-run-fix loops, and the human triage time on the 26 findings are not reported.
- **Vendor-published.** Google is reporting on its own tool. The independent artifacts are the OpenSSL advisory, the NVD record, and the open-source code.

## Sources
- [Google Security Blog — Leveling up fuzzing: finding more vulnerabilities with AI (November 20, 2024)](https://security.googleblog.com/2024/11/leveling-up-fuzzing-finding-more.html)
- [Google Security Blog — AI-powered fuzzing: breaking the bug hunting barrier (August 16, 2023)](https://security.googleblog.com/2023/08/ai-powered-fuzzing-breaking-bug-hunting.html)
- [OpenSSL security advisory, October 16, 2024 (CVE-2024-9143)](https://openssl-library.org/news/secadv/20241016.txt)
- [NVD — CVE-2024-9143 (JSON API record)](https://services.nvd.nist.gov/rest/json/cves/2.0?cveId=CVE-2024-9143)
- [OSS-Fuzz-Gen on GitHub](https://github.com/google/oss-fuzz-gen)

---
*Back to **[README.md](./README.md)** · **[PROMPT.md](./PROMPT.md)**.*
