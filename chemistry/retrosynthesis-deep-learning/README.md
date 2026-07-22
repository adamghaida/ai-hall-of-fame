# Planning chemical syntheses with deep neural networks

**Field:** 🧪 Chemistry  ·  **When:** March 2018 · Nature

> AI planned multi-step routes to build target molecules twice as often, and 30x faster, than decades-old rule-based software.

## What happened
Segler, Preuss, and Waller combined **Monte Carlo tree search** with three neural networks trained on essentially all published organic reactions (a system called 3N-MCTS). It plans **retrosynthesis** (working backward from a target molecule to buyable starting materials), solving nearly twice as many molecules 30x faster than traditional search. In a double-blind test, chemists often could not tell its routes from literature ones.

## Why it matters
Retrosynthesis is core to drug and materials chemistry and had resisted automation since the 1960s. This turned it into a tractable learned-search problem and set the template for today's AI synthesis planners.

## Sources — the record of the discovery
- [Nature paper](https://www.nature.com/articles/nature25978)
- [PubMed](https://pubmed.ncbi.nlm.nih.gov/29595767/)

---
*In this folder: **[PROMPT.md](./PROMPT.md)** (a prompt to explore it with AI) · **[CONTEXT.md](./CONTEXT.md)** (background & caveats). Part of the [AI Hall of Fame](../../README.md) → [🧪 Chemistry](../).*
