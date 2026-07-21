# 🛠️ How to recreate: Halicin — a new antibiotic found by deep learning

*This file is a practical starting point for reproducing or exploring the result — code, data, models, and (where one exists) the actual prompt or method. It is not official documentation; always defer to the primary sources.*

The molecular-property model (a message-passing graph neural network, **Chemprop**) is open: **github.com/chemprop/chemprop**. Recipe: train Chemprop on a labeled set of molecules (active/inactive against *E. coli*), then score a large library (the team used the Drug Repurposing Hub and ZINC15), and experimentally test the top structurally-novel hits. The pipeline is a template for AI-driven virtual screening broadly.

## Primary sources & code
- [Broad Institute](https://www.broadinstitute.org/news/researchers-use-ai-identify-new-class-antibiotic-candidates)
- [Cell paper](https://www.cell.com/cell/fulltext/S0092-8674(20)30102-1)

---
*Back to **[README.md](./README.md)** · **[CONTEXT.md](./CONTEXT.md)**.*
