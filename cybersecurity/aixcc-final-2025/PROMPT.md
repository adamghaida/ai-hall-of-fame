# 🤖 Explore this with AI: DARPA's AI Cyber Challenge final

Paste the prompt below into your favorite AI assistant (Claude, ChatGPT, Gemini, or a local model). If your assistant can browse the web, tell it to read the sources first. The point is a clear, honest, grounded explanation of what happened and why it mattered.

> Seven autonomous systems analyzed 54 million lines of real open-source code, found 54 of 63 injected vulnerabilities plus 18 nobody had planted, and patched most of them at an average of 45 minutes and about $152 per task. All seven were then open-sourced.

---

```text
You are a sharp, honest security explainer. Walk me through a specific, real AI security result so that I actually understand it, not just the headline.

Topic: The final of DARPA's AI Cyber Challenge (AIxCC), scored at DEF CON 33 and announced on August 8, 2025, in which seven autonomous Cyber Reasoning Systems found and patched vulnerabilities in real open-source code with no human intervention.

Please cover, in plain language a curious non-expert can follow:
1. What a Cyber Reasoning System is, how AIxCC descends from DARPA's 2016 Cyber Grand Challenge, and what changed by putting language models into the loop on real projects with real build systems.
2. How the final was designed: synthetic vulnerabilities injected into real projects for ground truth, a fixed cloud budget, no human intervention, and developer-centric scoring that rewarded tested patches over bare crash reports. Explain what a proof-of-vulnerability is.
3. The results: 54 of 63 synthetic bugs found and 43 patched; 18 real, previously unknown bugs (6 in C, 12 in Java) with 11 patched; 54 million lines analyzed; 45 minutes average to patch; about $152 per task. Winners: Team Atlanta's Atlantis ($4M), Trail of Bits' Buttercup ($3M), Theori's RoboDuck ($1.5M).
4. How the top three systems differ architecturally: Atlantis (LLMs plus symbolic execution, directed fuzzing, static analysis), Buttercup (fuzzing augmented with static analysis and multi-agent patching, non-reasoning models only), RoboDuck (LLM-first proofs of vulnerability without fuzzing, heavy filtering of static-analysis candidates).
5. The honest caveats. Be rigorous:
   - Most of the scored bugs were planted; the 18 real ones are the smaller number and modest against 54 million lines.
   - Patches were scored by tests, not by maintainer review.
   - DARPA has not released full telemetry; team-level numbers are self-reported.
   - The USENIX Security 2026 SoK site gives different counts (47 challenge-project vulnerabilities, 25+ zero-days) than DARPA's announcement.
   - These are large-team engineering pipelines, not single-model results, running on credits donated by Anthropic, Google, and OpenAI.
6. Why the open-source requirement matters, and what a defender could actually do today with the released systems.

Ground your answer in these sources (read them if you can, and cite them as you go):
- DARPA's results announcement: https://www.darpa.mil/news/2025/aixcc-results
- ATLANTIS technical report: https://arxiv.org/abs/2509.14589
- Trail of Bits on Buttercup: https://blog.trailofbits.com/2025/08/09/trail-of-bits-buttercup-wins-2nd-place-in-aixcc-challenge/
- Theori on RoboDuck: https://theori.io/blog/aixcc-and-roboduck-63447
- SoK companion site: https://occia.github.io/aixcc-sok-webpage/

Be concrete, use the real numbers, distinguish DARPA's figures from team self-reports, and if you are unsure about a detail, say so instead of guessing.
```

## Bonus: have the agent look at the actual systems

The finalists' code is public. Have a capable assistant read it rather than the press release:

```
Open https://github.com/Team-Atlanta/aixcc-afc-atlantis and https://github.com/trailofbits/buttercup. For each, report the license, identify the main pipeline stages (bug finding, candidate filtering, proof-of-vulnerability generation, patch generation, patch validation), and say which stages use a language model and which use conventional tools (fuzzers, static analyzers, symbolic execution). Then compare that to Theori's description of RoboDuck at https://theori.io/blog/aixcc-and-roboduck-63447. Finally, check https://www.darpa.mil/news/2025/aixcc-results for the headline numbers (63 synthetic, 54 found, 43 patched; 18 real, 11 patched; 54M lines; 45 min; $152) and note whether any of the team repositories or blogs give per-team figures that can be reconciled with DARPA's totals. Flag anything you cannot verify.
```

---

## Sources
- [DARPA — AI Cyber Challenge marks pivotal inflection point for cyber defense](https://www.darpa.mil/news/2025/aixcc-results)
- [ATLANTIS technical report (arXiv 2509.14589)](https://arxiv.org/abs/2509.14589)
- [Trail of Bits — Buttercup wins 2nd place in AIxCC](https://blog.trailofbits.com/2025/08/09/trail-of-bits-buttercup-wins-2nd-place-in-aixcc-challenge/)
- [Theori — AI Cyber Challenge and Theori's RoboDuck](https://theori.io/blog/aixcc-and-roboduck-63447)
- [Team Atlanta — Atlantis source (GitHub)](https://github.com/Team-Atlanta/aixcc-afc-atlantis) · [Trail of Bits — Buttercup source (GitHub)](https://github.com/trailofbits/buttercup)
- [SoK: DARPA's AI Cyber Challenge companion site](https://occia.github.io/aixcc-sok-webpage/)

---
*Back to **[README.md](./README.md)** · **[CONTEXT.md](./CONTEXT.md)**.*
