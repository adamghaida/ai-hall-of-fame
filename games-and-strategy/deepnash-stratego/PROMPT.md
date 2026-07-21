# 🛠️ How to recreate: DeepNash — expert Stratego without any search

*This file is a practical starting point for reproducing or exploring the result — code, data, models, and (where one exists) the actual prompt or method. It is not official documentation; always defer to the primary sources.*

No official code was released, but the method ('Regularized Nash Dynamics', R-NaD) is fully specified in the paper and has open reimplementations; the **OpenSpiel** framework includes Stratego-like environments and R-NaD-style algorithms to study. The key is optimizing toward an approximate Nash equilibrium directly rather than searching a tree.

## Primary sources & code
- [DeepMind blog](https://deepmind.google/discover/blog/mastering-stratego-the-classic-game-of-imperfect-information/)
- [Science paper](https://www.science.org/doi/10.1126/science.add4679)

---
*Back to **[README.md](./README.md)** · **[CONTEXT.md](./CONTEXT.md)**.*
