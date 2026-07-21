# 🛠️ How to recreate: AlphaChip — AI that lays out the chips it runs on

*This file is a practical starting point for reproducing or exploring the result — code, data, models, and (where one exists) the actual prompt or method. It is not official documentation; always defer to the primary sources.*

Open-sourced: **github.com/google-research/circuit_training**, which reproduces the Nature methodology on open netlists (e.g. Ariane RISC-V). The pipeline pretrains a GNN policy across many chip blocks, then fine-tunes on a target block, optimizing a reward combining wirelength, congestion, and density. A pre-trained checkpoint is provided.

## Primary sources & code
- [DeepMind blog](https://deepmind.google/discover/blog/how-alphachip-transformed-computer-chip-design/)
- [Nature paper](https://www.nature.com/articles/s41586-021-04657-y)

---
*Back to **[README.md](./README.md)** · **[CONTEXT.md](./CONTEXT.md)**.*
