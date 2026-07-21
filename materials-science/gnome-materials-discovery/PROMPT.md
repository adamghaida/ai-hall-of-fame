# 🛠️ How to recreate: GNoME — 2.2 million new crystals, 380,000 of them stable

*This file is a practical starting point for reproducing or exploring the result — code, data, models, and (where one exists) the actual prompt or method. It is not official documentation; always defer to the primary sources.*

Open-sourced: **github.com/google-deepmind/materials_discovery**, and the predicted structures are browsable in the **Materials Project**. GNoME uses graph neural networks to predict formation energy, embedded in an active-learning loop: propose candidate compositions/structures, predict stability, validate the best with DFT, and feed results back to improve the model.

## Primary sources & code
- [DeepMind blog](https://deepmind.google/discover/blog/millions-of-new-materials-discovered-with-deep-learning/)
- [Nature paper](https://www.nature.com/articles/s41586-023-06735-9)
- [Berkeley Lab](https://newscenter.lbl.gov/2023/11/29/google-deepmind-new-compounds-materials-project/)

---
*Back to **[README.md](./README.md)** · **[CONTEXT.md](./CONTEXT.md)**.*
