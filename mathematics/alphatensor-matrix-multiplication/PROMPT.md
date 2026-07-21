# 🛠️ How to recreate: AlphaTensor — beating a 50-year-old matrix-multiplication record

*This file is a practical starting point for reproducing or exploring the result — code, data, models, and (where one exists) the actual prompt or method. It is not official documentation; always defer to the primary sources.*

Open-sourced: **github.com/google-deepmind/alphatensor** (includes the discovered algorithms and factorizations you can verify directly). The method extends AlphaZero: represent a multiplication algorithm as a low-rank decomposition of the matrix-multiplication tensor, and reward the agent for reaching the zero tensor in as few rank-1 steps (multiplications) as possible. You can independently check any discovered factorization with a few lines of NumPy.

## Primary sources & code
- [DeepMind blog](https://deepmind.google/discover/blog/discovering-novel-algorithms-with-alphatensor/)
- [Nature paper](https://www.nature.com/articles/s41586-022-05172-4)

---
*Back to **[README.md](./README.md)** · **[CONTEXT.md](./CONTEXT.md)**.*
