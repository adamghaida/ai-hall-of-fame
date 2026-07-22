# 📚 Context: MatterGen — generating new materials to order

MatterGen diffuses over a crystal representation (elements, fractional coordinates, lattice) and is trained on 600,000+ known materials, then fine-tuned with property labels so you can condition generation on what you actually want. Caveats: a generated structure being predicted stable (via DFT) is not the same as being synthesizable, and experimental validation so far is limited. It is the generative counterpart to the GNoME and A-Lab entries in this field.

## Why it's in the Hall of Fame
It flips materials discovery from **screening** (search a fixed list) to **generation** (design on demand), which pairs naturally with screening engines like GNoME and autonomous synthesis labs.

## Sources
- [Nature paper](https://www.nature.com/articles/s41586-025-08628-5)
- [Microsoft Research](https://www.microsoft.com/en-us/research/blog/mattergen-a-new-paradigm-of-materials-design-with-generative-ai/)
- [Code (GitHub)](https://github.com/microsoft/mattergen)

---
*Back to **[README.md](./README.md)** · **[PROMPT.md](./PROMPT.md)**.*
