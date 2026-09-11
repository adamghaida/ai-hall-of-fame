# DreamerV3 collects Minecraft diamonds from scratch

**Field:** ♟️ Games & Strategy  ·  **When:** April 2025 · Nature

> One reinforcement-learning algorithm, with one fixed set of hyperparameters, outperformed specialized methods across more than 150 tasks in eight domains and became the first to collect diamonds in Minecraft with no human data and no curriculum.

## What happened
**DreamerV3**, by Danijar Hafner, Jurgis Pasukonis, Jimmy Ba and Timothy Lillicrap, was published in *Nature* (vol. 640, pp. 647–653, 2 April 2025) after a January 2023 preprint. It is a **world-model** agent: it learns a compact model of its environment from experience, then improves its behaviour by "imagining" future trajectories inside that model rather than by trial and error in the real environment alone.

The headline claim is generality. With **fixed hyperparameters across every domain**, the same configuration was run on more than **150 tasks** spanning the 57 Atari games, Atari100k (26 games), ProcGen (16), DMLab (30), the DeepMind Control Suite (20), BSuite (468 configurations), Crafter and Minecraft, covering visual and low-dimensional inputs, continuous and discrete actions, and dense and sparse rewards. The paper reports that it outperforms specialized methods such as MuZero, Rainbow and DrQ-v2 that were tuned for their individual domains.

The flagship result is Minecraft. Collecting a diamond requires a long chain of sub-goals (wood, then a crafting table, then pickaxes of increasing quality, then mining deep) in a procedurally generated open world with sparse rewards. DreamerV3 is, per the paper, **the first algorithm to collect diamonds in Minecraft from scratch**, without human demonstrations, hand-designed curricula, or task-specific tricks; all of the trained agents found diamonds within 100 million environment steps, and the project page reports first diamonds at around 30 million steps, roughly 17 days of in-game time. Models range from 12 million to 400 million parameters, larger ones learn more from less data, and each agent trains on a single Nvidia A100 GPU.

## Why it matters
Reinforcement learning has a reputation for needing expert tuning per task, which limits its use on new problems where tuning is expensive or impossible. DreamerV3 is the strongest evidence to date that a single, robustly designed algorithm can work "out of the box" across very different domains, with predictable gains from scale. The Minecraft diamond task had been a standing challenge for the field since the MineRL competition, previously reached only with human video or demonstrations; doing it with none makes it a clean milestone for exploration and long-horizon learning. It also puts world models, the idea behind DeepMind's MuZero, on a much broader footing.

## Sources — the record of the discovery
- [Hafner et al., "Mastering diverse control tasks through world models," Nature 640, 647–653 (2025)](https://www.nature.com/articles/s41586-025-08744-2)
- [DreamerV3 project page (Danijar Hafner)](https://danijar.com/project/dreamerv3/)
- [Preprint, arXiv:2301.04104 (10 January 2023)](https://arxiv.org/abs/2301.04104)

---
*In this folder: **[PROMPT.md](./PROMPT.md)** (a prompt to explore it with AI) · **[CONTEXT.md](./CONTEXT.md)** (background & caveats). Part of the [AI Hall of Fame](../../README.md) → [♟️ Games & Strategy](../).*
