# 🛠️ How to recreate: AlphaGo & 'Move 37'

*This file is a practical starting point for reproducing or exploring the result — code, data, models, and (where one exists) the actual prompt or method. It is not official documentation; always defer to the primary sources.*

AlphaGo's exact system isn't open, but the ideas are: policy + value networks guiding **Monte Carlo Tree Search**, trained first on human games then by self-play. Strong open implementations — **Leela Zero**, **KataGo** (github.com/lightvector/KataGo), and DeepMind's **OpenSpiel** — let you run superhuman Go on a home GPU.

## Primary sources & code
- [DeepMind — AlphaGo](https://deepmind.google/research/breakthroughs/alphago/)
- [Nature paper](https://www.nature.com/articles/nature16961)

---
*Back to **[README.md](./README.md)** · **[CONTEXT.md](./CONTEXT.md)**.*
