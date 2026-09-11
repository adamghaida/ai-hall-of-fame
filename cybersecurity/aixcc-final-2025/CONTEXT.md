# 📚 Context: DARPA's AI Cyber Challenge

**The lineage.** DARPA had done this once before. The 2016 **Cyber Grand Challenge** pitted automated systems against each other on a purpose-built operating system. AIxCC was the same idea moved onto real code: real open-source projects, real build systems, real test suites, and language models available as a component. It was announced in 2023, ran a semifinal in 2024 that selected seven finalists, and concluded at DEF CON 33 in August 2025. ARPA-H co-funded it on the argument that hospitals and medical devices run the same open-source stack as everyone else.

**How the final worked.** Each team's Cyber Reasoning System ran unattended in a fixed Azure cloud budget. Organizers took real open-source projects (the SoK companion site names curl and Wireshark among them, with projects ranging from about 15,000 to 4.9 million source lines) and injected synthetic vulnerabilities with known answers, so that detection and patching could be scored against ground truth. Scoring was, in the organizers' phrase, developer-centric: a patch that passed tests scored highest, a bare proof-of-vulnerability lowest, early submissions earned more, and an accuracy multiplier penalized noise. Along the way the systems also found bugs nobody had planted, which is where the 18 real vulnerabilities came from.

**What the systems are.** The finalists were not single models but pipelines. Atlantis, from a 46-author team across Georgia Tech, Samsung Research, KAIST, and POSTECH, combines language models with symbolic execution, directed fuzzing, and static analysis, and its authors describe the hard problems as scaling across C and Java, keeping precision high while keeping coverage broad, and producing patches that are semantically correct rather than merely test-passing. Buttercup, from Trail of Bits, augments fuzzing with static analysis and a multi-agent patcher, and deliberately used only non-reasoning models. RoboDuck, from Theori, went the other way: a language-model-first pipeline that generates proofs of vulnerability without fuzzing or symbolic execution, with heavy filtering of static-analysis candidates that Theori says arrive with false-positive rates around 99.9%, and agent-based analysis costing roughly $0.50 per report.

**The numbers, from two sources.** DARPA's announcement: 54 of 63 synthetic vulnerabilities found, 43 patched; 18 real vulnerabilities found (6 in C, 12 in Java), 11 patched; 54 million lines analyzed; 45-minute average to patch; about $152 per task. The USENIX Security 2026 SoK paper's companion site counts 47 challenge-project vulnerabilities across the final's phases and "25+" zero-days discovered during the competition, and notes that raw competition data and the organizers' analysis framework had not yet been released. The two accountings do not obviously reconcile and this entry uses DARPA's headline figures while flagging the gap.

**Open source.** DARPA required finalists to release their systems under OSI-approved licenses. Atlantis is on GitHub under MIT, Buttercup under AGPL-3.0, and Theori published RoboDuck's competition archive. This is the part of AIxCC with the longest half-life: it is the only set of complete, competition-tested automated vulnerability-and-patch pipelines in the public domain.

## Why it's in the Hall of Fame
It is the most rigorous public measurement of autonomous vulnerability discovery and repair to date: injected ground truth, no human intervention, a fixed budget, independent scoring, and open-sourced systems. The result is a concrete number for what the state of the art could do in mid-2025, on real code, with the receipts published.

## Honest caveats
- **Most of the score was on planted bugs.** 63 synthetic vulnerabilities were designed to be found. The systems missed 9 of them and failed to patch 20 of the 54 they found. The 18 real bugs are the more meaningful number and it is modest against 54 million lines of code.
- **Patches were scored by tests, not by review.** A patch that makes the tests pass and closes the proof-of-vulnerability is not necessarily the patch a maintainer would accept. Whether any of the 11 real-bug patches were merged upstream as written is not stated in the primary sources.
- **The competition telemetry is unreleased.** Trail of Bits noted that DARPA had not published full telemetry, which limits outside analysis of how each system actually performed; the SoK companion site says raw data was still pending. Per-team and per-bug figures come from the teams themselves.
- **The two public accountings differ.** DARPA says 63 synthetic and 18 real; the SoK site says 47 challenge-project vulnerabilities and 25+ zero-days. Until the data is released, treat the exact counts as approximate.
- **Cost figures are narrow.** $152 per task and 45 minutes per patch are averages under a fixed cloud budget with donated model credits; they describe the competition's economics, not what a deployment would cost, and Theori's account makes clear that supporting infrastructure was most of the engineering.
- **Not model results.** Nothing here shows what a single language model can do. The systems were multi-year engineering efforts by large teams; the models were one component among fuzzers, symbolic executors, and static analyzers.
- **Sponsored by the model vendors.** Anthropic, Google, and OpenAI supplied the credits the systems ran on. That is disclosed and does not affect the scoring, but it is context.

## Sources
- [DARPA — AI Cyber Challenge marks pivotal inflection point for cyber defense (August 8, 2025)](https://www.darpa.mil/news/2025/aixcc-results)
- [ATLANTIS technical report (arXiv 2509.14589)](https://arxiv.org/abs/2509.14589)
- [Trail of Bits — Buttercup wins 2nd place in AIxCC](https://blog.trailofbits.com/2025/08/09/trail-of-bits-buttercup-wins-2nd-place-in-aixcc-challenge/)
- [Theori — AI Cyber Challenge and Theori's RoboDuck](https://theori.io/blog/aixcc-and-roboduck-63447)
- [Team Atlanta — Atlantis source (GitHub)](https://github.com/Team-Atlanta/aixcc-afc-atlantis)
- [Trail of Bits — Buttercup source (GitHub)](https://github.com/trailofbits/buttercup)
- [SoK: DARPA's AI Cyber Challenge (USENIX Security 2026) companion site](https://occia.github.io/aixcc-sok-webpage/)

---
*Back to **[README.md](./README.md)** · **[PROMPT.md](./PROMPT.md)**.*
