# 📚 Context: Nemotron-3-Ultra-CC at IOI 2026

**The contest.** The IOI is an individual competition for secondary-school students, two contest days with three problems each, every problem worth 100 points split across subtasks. Partial credit is normal and the top scores are rarely near 600. IOI 2026 in Tashkent was the first held in Central Asia; the official statistics page lists 375 contestants from 92 member countries, 31 gold medals (cutoff 361.12), 62 silver (303.28), 94 bronze (228.80), and 43 honourable mentions. The top scorer, Xu Qiwen of China, finished on 498.27. (The Uzbek national news agency's report gives 386 participants from 97 countries; the official statistics page's figures are used here.)

**The models.** NVIDIA's "CC" (coding-competition) models are post-trained variants of its open Nemotron 3 family. Two were built: Nemotron-3-Nano-CC (30B total parameters, 3B active) and Nemotron-3-Ultra-CC (550B total, 55B active), both sparse mixture-of-experts models. Post-training used 22,000 curated competitive-programming problems with supervised fine-tuning and reinforcement learning; the paper says the Ultra model received SFT using GLM-5.2 teacher data without code-specific RL, and was served with NVFP4 quantization. The authors say they cannot release the full training corpus because of third-party redistribution restrictions, but plan to release the competition Ultra-CC checkpoint together with inference and evaluation recipes.

**GenCorrect.** The test-time procedure is the part of the paper most responsible for the headline number, and the numbers on the smaller model make that clear: Nano-CC went from 130 (baseline) to 291 (post-trained) to 468 (post-trained plus GenCorrect) on IOI 2025. GenCorrect runs five rounds per problem. In each round the model generates up to 200 candidate programs; ten diverse representatives are chosen by clustering and score-blind heuristics; those ten are submitted; and the next round is conditioned on the accumulated per-subtask score vector and on reference solutions. The final round generates 1,000 candidates. The 50-submission and one-per-minute limits are the IOI's own rules, and the paper says the run respected them.

**How the IOI 2026 run was conducted.** The paper's description is precise on both what was matched and what was not. Matched: the problems were run before public release, under the same time, internet-access, and submission constraints as contestants. Not matched: the system was not an official contestant, the run was not supervised by the IOI, the score is not in the official rankings, and the compute used is far beyond a contestant's workstation. The authors call the result "an unofficial, unsupervised benchmark" and "a system-level comparison under the same time and submission limits, rather than an equal-resource comparison with human contestants."

**Lineage.** OpenAI reported a gold-medal-level score and sixth place at IOI 2025; NVIDIA's earlier Nemotron-Cascade models reached gold level in March 2026 according to AI Weekly. Competitive programming is the field where AI-versus-human comparisons have been running longest; see [AlphaCode](../alphacode-competitive-programming/) (2022) for the first step, and the ICPC World Finals 2025 (where OpenAI and Google DeepMind systems finished above every human team) for the most recent one before this.

## Why it's in the Hall of Fame
Passing the gold cutoff means outscoring roughly the top twelfth of the field. Outscoring the single best contestant on a live set, by 37 points on a 600-point scale, is a different claim, and this is the first time it has been made for the IOI. The paper is unusually candid about the run's status, and the promised weight release would make it the first top-of-the-IOI result an outsider could attempt to reproduce.

## Honest caveats

- **Self-reported and unsupervised.** The 535.4 was measured by NVIDIA, on NVIDIA's infrastructure, with no IOI oversight. Nobody outside the company has reproduced it. Until the checkpoint and evaluation recipe ship, the claim rests on the paper.
- **Not an official contestant.** The system does not appear in the IOI 2026 rankings and won no medal. "Outscored the top human" is a comparison of a benchmark number with the official scoreboard.
- **Not an equal-resource comparison.** A contestant has one machine and their own head for five hours per day. GenCorrect generates up to 200 candidate programs per round for five rounds, with 1,000 in the final round, on a 550-billion-parameter model. The paper says so plainly.
- **Test-time scaffolding does much of the work.** On the Nano model, GenCorrect added 177 points on top of post-training. The headline number is a property of model plus loop, not of the model alone.
- **Training data overlap is unaddressed here.** The paper reports the run was made before the problems were public, which rules out direct contamination for IOI 2026. Whether similar problems exist in the 22,000-problem training set or in the base model's pretraining corpus is not something outsiders can check, and the full corpus will not be released.
- **arXiv preprint.** Version 1 appeared on September 2, 2026 and version 2 on September 4; it has not been peer reviewed.
- **Participant counts differ between sources.** The official statistics page says 375 contestants from 92 countries; the Uzbek news agency says 386 from 97. The difference does not affect the scores.

## Sources
- [arXiv:2609.02849](https://arxiv.org/abs/2609.02849) · [HTML version](https://arxiv.org/html/2609.02849)
- [Official IOI 2026 statistics](https://stats.ioinformatics.org/olympiads/2026)
- [UZA report on IOI 2026](https://uza.uz/en/posts/international-olympiad-in-informatics-concludes-in-tashkent_895644)
- [AI Weekly coverage](https://aiweekly.co/editors-blog/found-first-nvidia-550b-model-scores-535-4-at-ioi-2026-claimed-first-ai-to-beat)

Related entries: [AlphaCode](../alphacode-competitive-programming/) · [IMO 2026 perfect scores](../../mathematics/imo-2026-perfect-score/)

---
*Back to **[README.md](./README.md)** · **[PROMPT.md](./PROMPT.md)**.*
