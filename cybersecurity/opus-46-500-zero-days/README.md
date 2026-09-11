# Claude Opus 4.6 found 500+ validated high-severity zero-days with no custom scaffolding

**Field:** 🛡️ Cybersecurity  ·  **When:** February 2026

> Anthropic's Frontier Red Team gave a general-purpose model a virtual machine with ordinary tools, pointed it at well-fuzzed open-source projects, and reported more than 500 previously unknown high-severity vulnerabilities, each validated before disclosure. No CVE list was published, and the count rests on Anthropic's own triage.

## What happened
On **February 5, 2026**, the day Claude Opus 4.6 was released, Anthropic's Frontier Red Team published a report saying the model had found and validated **over 500 high-severity zero-day vulnerabilities** in production open-source software. The projects named include **GhostScript** (the PostScript and PDF interpreter), **OpenSC** (smart card tooling), and **CGIF** (a GIF encoding library), some of them codebases that had been under continuous fuzzing for years.

The method is the notable part. There was **no task-specific scaffolding**: Claude ran inside a virtual machine with standard utilities and off-the-shelf vulnerability analysis tools, without custom harnesses or specialized prompting, to measure what the model could do "out of the box." Nicholas Carlini, who led the work, later described the setup as roughly a ten-line shell script and a Docker container. The team deliberately focused on **memory-corruption bugs**, because a crash under Address Sanitizer is cheap to confirm, and built the process around reducing false positives: every candidate was reproduced with sanitizers and crash monitoring, Claude was used to critique and de-duplicate its own findings, and human security researchers then validated each bug and initially wrote the patches themselves, bringing in outside researchers as the volume grew. Anthropic said initial patches had landed with maintainers and that disclosure was ongoing.

The report's authors are Nicholas Carlini, Keane Lucas, Evyatar Ben Asher, Newton Cheng, Hasnain Lakhani, David Forsythe, and Kyla Guru. Alongside the results, Anthropic introduced cyber-specific detection probes on its platform that can intervene in real time on traffic that looks like offensive use.

Two months later the same team's assessment of the next model, Claude Mythos Preview, used Opus 4.6 as the baseline: on OSS-Fuzz targets, Opus 4.6 produced 150 to 175 tier-1 and about 100 tier-2 crashes with a single tier-3 result, and its attempts at working exploits for Firefox JavaScript-engine bugs succeeded twice in several hundred runs.

## Why it matters
Earlier results in this collection came from purpose-built systems: [Google's Big Sleep](../big-sleep-vulnerability-discovery/) gave a model a code browser, debugger, and sandbox, and DARPA's AIxCC finalists were engineering efforts measured in person-years. This report's claim is that a commercially available model with a shell finds real bugs in well-tested software at a rate of hundreds, and that the bottleneck has moved from finding vulnerabilities to validating and patching them. Anthropic's own framing was that the traditional 90-day disclosure window may not survive this rate of discovery, a point outside analysts made more sharply: discovery was never the constraint, and faster finding just lengthens the queue in front of triage and patch deployment.

## Sources — the record of the discovery
- [Anthropic Frontier Red Team — LLM-discovered zero-days (February 5, 2026)](https://www.anthropic.com/research/zero-days)
- [Security Cryptography Whatever — "AI Finds Vulns You Can't" with Nicholas Carlini (March 25, 2026)](https://securitycryptographywhatever.com/2026/03/25/ai-bug-finding/)
- [Anthropic — Claude Mythos Preview assessment, with Opus 4.6 baseline numbers (April 7, 2026)](https://www.anthropic.com/research/mythos-preview)
- [Futurum — Claude found 500 zero-days. Who patches them before attackers arrive? (February 24, 2026)](https://futurumgroup.com/insights/claude-found-500-zero-days-who-patches-them-before-attackers-arrive/)
- [Hacker News discussion](https://news.ycombinator.com/item?id=46902909)

---
*In this folder: **[PROMPT.md](./PROMPT.md)** (a prompt to explore it with AI) · **[CONTEXT.md](./CONTEXT.md)** (background & caveats). Part of the [AI Hall of Fame](../../README.md) → [🛡️ Cybersecurity](../).*
