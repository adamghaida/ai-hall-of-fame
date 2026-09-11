# DARPA's AI Cyber Challenge final: seven autonomous systems found 54 of 63 planted bugs and 18 real ones, then patched most of them

**Field:** 🛡️ Cybersecurity  ·  **When:** August 2025

> Over two years, DARPA ran a competition to see whether fully automated systems could find and fix security bugs in real open-source code without a human in the loop. At the final, seven systems analyzed 54 million lines of code, found 54 of 63 injected vulnerabilities plus 18 nobody had planted, and generated patches for most of them at an average of 45 minutes and about $152 per task. All seven were then open-sourced.

## What happened
The **AI Cyber Challenge (AIxCC)** was announced by DARPA in 2023 and run with **ARPA-H**, the health-research agency, on the premise that critical infrastructure runs on open-source software nobody has the capacity to audit. Teams built **Cyber Reasoning Systems (CRSs)**: software that, given a code repository and a build, must autonomously discover vulnerabilities, prove them with a triggering input, and produce a patch that fixes the bug without breaking the tests. Humans could not intervene once a round started. Anthropic, Google, and OpenAI each contributed $350,000 in model credits ($50,000 per team), Microsoft contributed Azure credits, and the Linux Foundation's OpenSSF advised on the challenge projects.

The final was scored at **DEF CON 33** in Las Vegas and the results were announced on **August 8, 2025**:

| Place | Team | System | Prize |
|---|---|---|---|
| 1st | Team Atlanta (Georgia Tech, Samsung Research, KAIST, POSTECH) | Atlantis | $4M |
| 2nd | Trail of Bits | Buttercup | $3M |
| 3rd | Theori | RoboDuck | $1.5M |

The other finalists were all_you_need_is_a_fuzzing_brain, Shellphish (Artiphishell), 42-beyond-bug (BugBuster), and Lacrosse.

Across the final, the seven systems analyzed **54 million lines of code**. They found **54 of the 63 synthetic vulnerabilities** organizers had injected into real projects and patched **43** of them. They also found **18 real, previously unknown vulnerabilities** (6 in C codebases, 12 in Java) and produced patches for **11**. The average time from task start to patch submission was **45 minutes**, at an average cost of about **$152 per task**. Per DARPA's condition of entry, every finalist system was released under an OSI-approved open-source license: four on the day, the rest within weeks. Atlantis (MIT license), Buttercup (AGPL-3.0), and RoboDuck are all on GitHub, and Team Atlanta published a 46-author technical report describing how Atlantis combines language models with symbolic execution, directed fuzzing, and static analysis.

The teams' own accounts add texture. Trail of Bits reported Buttercup found 28 vulnerabilities and landed 19 patches across 48 challenges spanning 23 open-source repositories, covering 20 distinct CWE categories, using only non-reasoning models to keep costs down, and submitted both one-line fixes and the competition's largest patch at over 300 lines. Theori said RoboDuck found 34 vulnerabilities and was unusual in generating proofs of vulnerability with a language-model-first pipeline rather than fuzzing or symbolic execution, and that filtering static-analysis candidates with false-positive rates around 99.9% was where much of the engineering went.

## Why it matters
Most AI vulnerability results are a vendor reporting its own model's findings. AIxCC is the opposite: a government-run, adversarially designed benchmark with injected ground truth, a fixed cloud budget, no human intervention, scoring that rewarded working patches over crash reports, and a requirement that everything be open-sourced. The 18 real bugs are the smaller number, but they are the ones that would not exist without the competition, and the patch rate is the part no prior automated system had demonstrated at this scale. As DARPA director Stephen Winchell put it, finding vulnerabilities with current methods "is slow, expensive, and depends on a limited workforce." [Google's Big Sleep](../big-sleep-vulnerability-discovery/) entry cites these results as the corroborating data point for AI-driven discovery; this entry is the record of them.

## Sources — the record of the discovery
- [DARPA — AI Cyber Challenge marks pivotal inflection point for cyber defense (August 8, 2025)](https://www.darpa.mil/news/2025/aixcc-results)
- [ATLANTIS: AI-driven Threat Localization, Analysis, and Triage Intelligence System (arXiv, September 2025)](https://arxiv.org/abs/2509.14589)
- [Trail of Bits — Buttercup wins 2nd place in AIxCC (August 9, 2025)](https://blog.trailofbits.com/2025/08/09/trail-of-bits-buttercup-wins-2nd-place-in-aixcc-challenge/)
- [Theori — AI Cyber Challenge and Theori's RoboDuck (August 8, 2025)](https://theori.io/blog/aixcc-and-roboduck-63447)
- [Team Atlanta — Atlantis source (GitHub, MIT)](https://github.com/Team-Atlanta/aixcc-afc-atlantis) · [Trail of Bits — Buttercup source (GitHub, AGPL-3.0)](https://github.com/trailofbits/buttercup)
- [SoK: DARPA's AI Cyber Challenge (USENIX Security 2026) companion site](https://occia.github.io/aixcc-sok-webpage/)

---
*In this folder: **[PROMPT.md](./PROMPT.md)** (a prompt to explore it with AI) · **[CONTEXT.md](./CONTEXT.md)** (background & caveats). Part of the [AI Hall of Fame](../../README.md) → [🛡️ Cybersecurity](../).*
