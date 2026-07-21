# 🛠️ How to recreate: Symbolic transformers find Lyapunov functions

*This file is a practical starting point for reproducing or exploring the result — code, data, models, and (where one exists) the actual prompt or method. It is not official documentation; always defer to the primary sources.*

The key trick is data generation: rather than trying to *solve* systems (hard), the authors generate `(system, Lyapunov function)` pairs *backwards* — start from a known Lyapunov function and derive systems it certifies — then train a transformer to invert the map. Reproduce by (1) generating such synthetic pairs, (2) training a seq2seq transformer on them, (3) at inference, sampling candidate functions and *verifying* each with a symbolic/SOS check. Details and datasets are in the paper.

## Primary sources & code
- [arXiv paper](https://arxiv.org/abs/2410.08304)

---
*Back to **[README.md](./README.md)** · **[CONTEXT.md](./CONTEXT.md)**.*
