# NeuralGCM — a hybrid AI-and-physics climate model

**Field:** 🌍 Climate & Earth Science  ·  **When:** July 2024 · Nature

> Bolt a neural network onto a physics solver and get fast, accurate weather plus decades-long climate runs.

## What happened
Google's **NeuralGCM** couples a traditional fluid-dynamics solver for the large-scale atmosphere with neural networks that learn small-scale physics (clouds, precipitation, radiation). It matched leading physics models on 2-15 day forecasts, produced skillful ensembles, generated realistic tropical-cyclone tracks, and reproduced 40 years of temperature trends, while running orders of magnitude cheaper.

## Why it matters
Pure machine-learning forecasters like GraphCast are brilliant but do not respect physics over long climate runs; pure-physics models are accurate but expensive. NeuralGCM is a leading hybrid aiming for the strengths of both.

## Sources — the record of the discovery
- [Nature paper](https://www.nature.com/articles/s41586-024-07744-y)
- [Google Research](https://research.google/blog/neuralgcm-harnesses-ai-to-better-simulate-long-range-global-precipitation/)
- [Code (GitHub)](https://github.com/google-research/neuralgcm)

---
*In this folder: **[PROMPT.md](./PROMPT.md)** (a prompt to explore it with AI) · **[CONTEXT.md](./CONTEXT.md)** (background & caveats). Part of the [AI Hall of Fame](../../README.md) → [🌍 Climate & Earth Science](../).*
