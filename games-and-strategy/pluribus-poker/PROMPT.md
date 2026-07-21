# 🛠️ How to recreate: Pluribus — superhuman six-player poker

*This file is a practical starting point for reproducing or exploring the result — code, data, models, and (where one exists) the actual prompt or method. It is not official documentation; always defer to the primary sources.*

Facebook/CMU did **not** release Pluribus's code (citing risk to online poker economies), but the methods are fully described: a self-play blueprint strategy computed with Monte Carlo counterfactual regret minimization (**MCCFR**), plus a novel real-time **limited-lookahead search**. Open research libraries (OpenSpiel, and various CFR implementations) let you reproduce the algorithms on smaller poker variants.

## Primary sources & code
- [Science paper](https://www.science.org/doi/10.1126/science.aay2400)
- [CMU](https://www.cs.cmu.edu/news/2019/carnegie-mellon-and-facebook-ai-beats-professionals-six-player-poker)

---
*Back to **[README.md](./README.md)** · **[CONTEXT.md](./CONTEXT.md)**.*
