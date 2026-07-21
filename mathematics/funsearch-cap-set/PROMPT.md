# 🛠️ How to recreate: FunSearch — a genuinely new answer to a long-open math problem

*This file is a practical starting point for reproducing or exploring the result — code, data, models, and (where one exists) the actual prompt or method. It is not official documentation; always defer to the primary sources.*

Open-sourced: **github.com/google-deepmind/funsearch**. The recipe: write a `solve` skeleton program plus an `evaluate` scoring function for your problem; FunSearch repeatedly asks an LLM to mutate the best-scoring programs, runs them, and keeps improvements in an island-based evolutionary pool. Provide the problem-specific evaluator and a base LLM (the paper used a Codey/PaLM-class model; open models work) and let it evolve for many iterations.

## Primary sources & code
- [DeepMind blog](https://deepmind.google/discover/blog/funsearch-making-new-discoveries-in-mathematical-sciences-using-large-language-models/)
- [Nature paper](https://www.nature.com/articles/s41586-023-06924-6)
- [MIT Tech Review](https://www.technologyreview.com/2023/12/14/1085318/google-deepmind-large-language-model-solve-unsolvable-math-problem-cap-set/)

---
*Back to **[README.md](./README.md)** · **[CONTEXT.md](./CONTEXT.md)**.*
