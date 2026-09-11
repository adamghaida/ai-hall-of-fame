# MuZero: planning with a model it learned itself

**Field:** ♟️ Games & Strategy  ·  **When:** December 2020 · Nature

> Never told the rules, MuZero learned its own model of what matters for planning and matched AlphaZero at Go, chess and shogi while setting a new state of the art across 57 Atari games.

## What happened
DeepMind's **MuZero** (Schrittwieser et al., *Nature* 588, 604–609, published 23 December 2020; preprint November 2019) removed the last piece of hand-supplied knowledge from the [AlphaZero](../alphazero-self-play/) recipe. AlphaZero plans by searching ahead with a perfect simulator of the game, which means it must be given the rules. MuZero is given only observations, actions and rewards, and **learns a model** to plan with.

The trick is what the model predicts. It does not try to reconstruct the board or the screen. Given a hidden state and a proposed action, it predicts the three quantities that planning actually needs: the **reward** for that action, the **value** of the resulting position, and the **policy** (which action to take next). The search tree is built by applying this learned model iteratively inside the network's own hidden state, and the model is trained end to end so that those predictions match what the real environment eventually delivers.

Results, per the paper and DeepMind's announcement:
- **Go, chess, shogi:** matched AlphaZero's superhuman performance without any knowledge of the game rules.
- **Atari:** a new state of the art across all **57 games** of the standard benchmark, a domain where model-based planning had historically underperformed model-free methods. A variant, MuZero Reanalyze, used the learned model to re-plan past episodes 90% of the time to improve data efficiency.
- In Go, giving MuZero more search time per move, from 0.1 to 50 seconds, raised its strength by **more than 1,000 Elo**, and in Ms. Pac-Man it still played well with only 6 or 7 simulations per move, fewer than the number of available actions.

## Why it matters
Every earlier planning system in this collection, from Deep Blue through AlphaZero, needed a perfect simulator of its world. Real problems rarely come with one. MuZero showed that an agent can learn a compact, purpose-built model of its environment, one that only represents what is useful for choosing actions, and plan with it as effectively as if it had the true rules. It closed the gap between model-based and model-free reinforcement learning on Atari and pointed the way toward planning in domains where the dynamics are unknown, from video compression to robotics.

## Sources — the record of the discovery
- [Schrittwieser et al., "Mastering Atari, Go, chess and shogi by planning with a learned model," Nature 588, 604–609 (2020)](https://www.nature.com/articles/s41586-020-03051-4)
- [DeepMind blog: "MuZero: Mastering Go, chess, shogi and Atari without rules" (23 December 2020)](https://deepmind.google/discover/blog/muzero-mastering-go-chess-shogi-and-atari-without-rules/)
- [Preprint, arXiv:1911.08265 (19 November 2019)](https://arxiv.org/abs/1911.08265)

---
*In this folder: **[PROMPT.md](./PROMPT.md)** (a prompt to explore it with AI) · **[CONTEXT.md](./CONTEXT.md)** (background & caveats). Part of the [AI Hall of Fame](../../README.md) → [♟️ Games & Strategy](../).*
