# Nemotron-3-Ultra-CC outscores the top human at IOI 2026

**Field:** 💻 Computer Science  ·  **When:** August 2026

> Run live on the IOI 2026 problem set under contest time and submission limits, NVIDIA's 550-billion-parameter Nemotron-3-Ultra-CC scored 535.4 of 600. The best of the 375 human contestants scored 498.27. The run was not an official entry and was not supervised by the IOI.

## What happened
The International Olympiad in Informatics is the top programming competition for secondary-school students. **IOI 2026** was held in **Tashkent, Uzbekistan, from August 9 to 16, 2026**, with **375 contestants from 92 countries** and six problems worth 100 points each; the gold-medal cutoff was **361.12**. The top human score was **498.27**, by Xu Qiwen of China.

A team at NVIDIA (Aleksander Ficek, Sean Narenthiran, Mehrzad Samadi, Somshubra Majumdar, Boris Ginsburg) ran its **Nemotron-3-Ultra-CC** model on the same six problems. The paper reports that the system was run before the problems were publicly released, under the same time, internet-access, and submission constraints as the human contestants: up to 50 submissions per problem, at most one per minute. It scored **535.4 of 600**, **37.1 points above the top human**. The authors describe this, to their knowledge, as the first AI system to outscore the highest-scoring human contestant on an IOI problem set. They are also explicit that the system was not an official contestant, that the run was not supervised by the IOI, and that the score is reported as an unofficial, unsupervised benchmark that does not appear in the official rankings.

Two things produced the score. The first is **post-training**: a sparse mixture-of-experts model with 550 billion total and 55 billion active parameters, fine-tuned on **22,000 curated competitive-programming problems**. The second is a test-time loop the authors call **GenCorrect**: five rounds in which the model generates up to 200 candidate programs per problem, ten diverse representatives are selected by clustering and score-blind heuristics and submitted, and the next round is conditioned on the accumulated per-subtask score vector and on reference solutions; the final round expands generation to 1,000 candidates. On the smaller Nemotron-3-Nano-CC (30B total, 3B active), the same recipe took the IOI 2025 score from a baseline of 130 to 291 after post-training and to 468 with GenCorrect, above that year's gold cutoff of 438.3; Ultra-CC scored 502 on IOI 2025.

## Why it matters
AI systems reached IOI gold-medal level in 2025 (OpenAI reported sixth place that year). Gold is a threshold; the top scorer is a person. This is the first reported case of a system scoring above the best human on a live IOI set, on a model whose weights NVIDIA says it plans to release along with runnable inference and evaluation recipes, which would make it the first such result that outsiders could rerun. Until that release happens and until someone outside NVIDIA reproduces the number, the result is a self-reported, unsupervised benchmark, and the paper itself frames it as a system-level comparison under the same time and submission limits, not an equal-resource comparison with a student at a single workstation. See **[CONTEXT.md](./CONTEXT.md)**.

## Sources — the record of the discovery
- [Post-Training Language Models for Gold-Medal Performance in Coding Competitions (arXiv:2609.02849)](https://arxiv.org/abs/2609.02849)
- [Official IOI 2026 statistics (contestants, medal cutoffs, maximum score)](https://stats.ioinformatics.org/olympiads/2026)
- [UZA: International Olympiad in Informatics concludes in Tashkent (top scorer and score)](https://uza.uz/en/posts/international-olympiad-in-informatics-concludes-in-tashkent_895644)
- [AI Weekly coverage, noting the scores are self-reported](https://aiweekly.co/editors-blog/found-first-nvidia-550b-model-scores-535-4-at-ioi-2026-claimed-first-ai-to-beat)

---
*In this folder: **[PROMPT.md](./PROMPT.md)** (a prompt to explore it with AI) · **[CONTEXT.md](./CONTEXT.md)** (background & caveats). Part of the [AI Hall of Fame](../../README.md) → [💻 Computer Science](../).*
