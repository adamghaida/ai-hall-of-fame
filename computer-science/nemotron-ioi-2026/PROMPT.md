# 🤖 Explore this with AI: Nemotron-3-Ultra-CC at IOI 2026

Paste the prompt below into your favorite AI assistant (Claude, ChatGPT, Gemini, or a local model). If your assistant can browse the web, tell it to read the sources first. The point is a clear, honest, grounded explanation of what happened and why it mattered.

> NVIDIA's 550B-parameter Nemotron-3-Ultra-CC scored 535.4 of 600 on the live IOI 2026 problem set; the best of 375 human contestants scored 498.27. Unofficial, unsupervised, and self-reported.

---

```text
You are a sharp, honest science explainer. Walk me through a specific, real AI achievement so that I actually understand it, not just the headline.

Topic: In September 2026, NVIDIA researchers reported (arXiv:2609.02849) that Nemotron-3-Ultra-CC, a 550B-parameter mixture-of-experts model (55B active) post-trained on 22,000 competitive-programming problems and run with a test-time loop called GenCorrect, scored 535.4 of 600 on the IOI 2026 problem set. The run was made before the problems were public, under the contest's time and submission limits (50 submissions per problem, one per minute), but was not an official entry and was not supervised by the IOI. The top human contestant scored 498.27; the gold cutoff was 361.12.

Please cover, in plain language a curious non-expert can follow:
1. What the IOI is, how scoring with subtasks works, and why beating the single top contestant is a stronger claim than reaching the gold-medal cutoff.
2. How GenCorrect works: five rounds, up to 200 candidates per round, ten diverse submissions chosen by clustering and score-blind heuristics, conditioning on the accumulated per-subtask score vector and reference solutions, 1,000 candidates in the final round. Why does feedback from the judge help so much? Use the paper's own ablation on the smaller Nano-CC model (130 baseline, 291 after post-training, 468 with GenCorrect on IOI 2025).
3. What "same time and submission constraints" does and does not mean when one side is a student at a workstation and the other is a 550B-parameter model generating hundreds of programs per round. The authors call it a system-level comparison rather than an equal-resource one; explain what that distinction hides and reveals.
4. The provenance of the numbers: which are self-reported by NVIDIA, which come from the official IOI statistics, and what has and has not been independently reproduced.
5. Honest caveats: unofficial and unsupervised run, no independent reproduction, arXiv preprint not peer reviewed, training corpus not released, and the promised checkpoint release not yet verified.
6. How this fits with earlier AI results in competitive programming (AlphaCode 2022, AI gold at IOI 2025, the ICPC World Finals 2025) and what I should read next.

Ground your answer in these sources (read them if you can, and cite them as you go):
- The paper: https://arxiv.org/abs/2609.02849
- Official IOI 2026 statistics: https://stats.ioinformatics.org/olympiads/2026
- UZA report naming the top scorer: https://uza.uz/en/posts/international-olympiad-in-informatics-concludes-in-tashkent_895644

Be concrete, use real numbers where they matter, clearly separate self-reported claims from official data, and if you are unsure about a detail, say so instead of guessing.
```

## Bonus: have the agent check the numbers against the official record

The model checkpoint had not been released at the time of writing, so the run itself cannot be reproduced yet. What can be checked is the human side of the comparison. Point a coding agent at the official statistics:

```
1. Fetch https://stats.ioinformatics.org/olympiads/2026 and extract: the number of contestants and countries, the maximum possible score, and the gold, silver and bronze cutoffs.
2. Confirm the gold cutoff matches the 361.12 quoted in arXiv:2609.02849, and that the maximum possible score is 600.
3. Fetch the IOI 2026 individual results from the same site and confirm the top score is 498.27. Compute how far 535.4 is above it in points and as a percentage of 600.
4. Check whether NVIDIA has published the Nemotron-3-Ultra-CC competition checkpoint and evaluation recipe promised in the paper. If it has, report the link; if not, say so. Do not claim a release you cannot find.
```

---

## Sources
- [arXiv:2609.02849](https://arxiv.org/abs/2609.02849)
- [Official IOI 2026 statistics](https://stats.ioinformatics.org/olympiads/2026)
- [UZA report on IOI 2026](https://uza.uz/en/posts/international-olympiad-in-informatics-concludes-in-tashkent_895644)
- [AI Weekly coverage](https://aiweekly.co/editors-blog/found-first-nvidia-550b-model-scores-535-4-at-ioi-2026-claimed-first-ai-to-beat)

---
*Back to **[README.md](./README.md)** · **[CONTEXT.md](./CONTEXT.md)**.*
