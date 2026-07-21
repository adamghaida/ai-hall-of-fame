# 🛠️ How to recreate: AlphaZero — mastering Go, chess, and shogi from scratch

*This file is a practical starting point for reproducing or exploring the result — code, data, models, and (where one exists) the actual prompt or method. It is not official documentation; always defer to the primary sources.*

The pseudocode was published, and open reimplementations abound: **Leela Chess Zero** (lczero.org), **KataGo**, and DeepMind's **OpenSpiel** framework (github.com/google-deepmind/open_spiel). The loop: a single network predicts move priors and position value, MCTS uses it to pick moves, self-play games become training data, repeat. You can train a small AlphaZero on a laptop for simple games.

## Primary sources & code
- [DeepMind — AlphaZero](https://deepmind.google/discover/blog/alphazero-shedding-new-light-on-chess-shogi-and-go/)
- [Science paper](https://www.science.org/doi/10.1126/science.aar6404)

---
*Back to **[README.md](./README.md)** · **[CONTEXT.md](./CONTEXT.md)**.*
