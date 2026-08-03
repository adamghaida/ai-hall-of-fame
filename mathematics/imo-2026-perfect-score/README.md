# IMO 2026: the first perfect 42/42 AI scores

**Field:** 🧮 Mathematics  ·  **When:** July 2026

> Two years after silver and one after gold, AI systems reported flawless papers at the International Mathematical Olympiad. Only seven of 666 human contestants did the same.

## What happened
The 67th International Mathematical Olympiad ran in **Shanghai from July 10 to 21, 2026**, with **666 contestants from 117 countries**. The gold cutoff was 29 points and exactly **7 contestants earned a perfect 42/42**.

In the days after the closing ceremony, two Chinese companies announced that their AI systems had also scored **42/42** on the same six problems: **Huawei's "Celia"** and **Xiaohongshu/RedNote's "dots-note-3.0"** — the South China Morning Post's headline called RedNote's the "world's first", while AFP reported both. According to Xiaohongshu, the labs received the problems only after human contestants had sat the exam, had to submit within a fixed time limit, worked with no human intervention ("any form of human intervention was strictly prohibited"), and sent their solutions to IMO organisers for grading. dots-note-3.0 is described as still in beta and the lightest model in RedNote's dots3 family, and the company said it would open-source it.

Separately and independently, **Deedy Das** of Menlo Ventures ran the same six problems through his own harness and published the full audit trails. His results table records **42/42 for Claude Fable 5, GPT-5.6 Sol (xhigh) and Kimi K3**, with other frontier models between 13/42 and 37/42. Das's own post on X additionally credited a model from Axiom Math with 42/42 in that test, a claim AFP's wire story relayed. **These were not graded by the IMO**: Das's repository states plainly that the graders were Claude-based agents and that the scores should be treated as "strong but not authoritative."

The previous state of the art was **35/42** by Google DeepMind and OpenAI at [IMO 2025](../gemini-deep-think-imo-2025/), and **28/42** by DeepMind at [IMO 2024](../alphaproof-alphageometry-imo-2024/).

## Why it matters
A perfect IMO paper requires six complete, rigorous, human-readable proofs with no gaps or unhandled cases, produced under a clock. Going from 28 to 35 to 42 in three years closes out the competition-mathematics benchmark that the field had been using as its headline reasoning test since 2024, and it does so at a level only about 1% of the world's strongest teenage mathematicians reached in the same room.

The caveat is the interesting part. The IMO's own news page carries no statement about AI participation or AI grading in 2026, no formal AI track appears to have existed, and neither Google DeepMind nor OpenAI published a 2026 IMO result of their own. Every 42/42 currently on the board rests either on a company's account of how its own submission was graded or on an independent test that says outright it is not authoritative. See [CONTEXT.md](./CONTEXT.md) for the provenance breakdown.

## Sources — the record of the discovery
- [IMO 2026 official results page (imo-official.org)](https://www.imo-official.org/editions/2026/)
- [IMO official news index (no AI-participation statement as of August 2026)](https://www.imo-official.org/news/)
- [South China Morning Post on RedNote's dots-note-3.0](https://www.scmp.com/tech/article/3361482/worlds-first-ai-model-earn-perfect-score-maths-olympiad-comes-chinas-rednote)
- [AFP wire story, via TechXplore](https://techxplore.com/news/2026-07-ai-humans-score-math-contest.html)
- [Deedy Das's independent evaluation and audit trails (GitHub)](https://github.com/deedy/imo-2026)

---
*In this folder: **[PROMPT.md](./PROMPT.md)** (a prompt to explore it with AI) · **[CONTEXT.md](./CONTEXT.md)** (background & caveats). Part of the [AI Hall of Fame](../../README.md) → [🧮 Mathematics](../).*
