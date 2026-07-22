# 📚 Context: NeuralGCM — a hybrid AI-and-physics climate model

Because the whole model is differentiable, the physics solver and the learned parameterizations are trained together, so the neural parts learn to correct exactly where coarse physics fails. Caveats: it is still coarser than the most expensive cloud-resolving models, and learned components can drift outside their training regime. It complements the pure-ML GraphCast and GenCast entries in this field.

## Why it's in the Hall of Fame
Pure machine-learning forecasters like GraphCast are brilliant but do not respect physics over long climate runs; pure-physics models are accurate but expensive. NeuralGCM is a leading hybrid aiming for the strengths of both.

## Sources
- [Nature paper](https://www.nature.com/articles/s41586-024-07744-y)
- [Google Research](https://research.google/blog/neuralgcm-harnesses-ai-to-better-simulate-long-range-global-precipitation/)
- [Code (GitHub)](https://github.com/google-research/neuralgcm)

---
*Back to **[README.md](./README.md)** · **[PROMPT.md](./PROMPT.md)**.*
