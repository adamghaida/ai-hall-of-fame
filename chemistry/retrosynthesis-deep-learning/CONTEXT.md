# 📚 Context: Planning chemical syntheses with deep neural networks

The design mirrors AlphaGo: a policy network proposes promising disconnections, a filter network prunes implausible ones, and MCTS searches the tree of possible routes, with an in-scope network scoring reactions. Caveats: it learns from published (mostly successful) reactions, so it predicts plausibility rather than yields or safety, and route quality depends on the reaction corpus. It seeded open tools like AiZynthFinder and ASKCOS, and is a precursor to agentic chemistry systems like Coscientist.

## Why it's in the Hall of Fame
Retrosynthesis is core to drug and materials chemistry and had resisted automation since the 1960s. This turned it into a tractable learned-search problem and set the template for today's AI synthesis planners.

## Sources
- [Nature paper](https://www.nature.com/articles/nature25978)
- [PubMed](https://pubmed.ncbi.nlm.nih.gov/29595767/)

---
*Back to **[README.md](./README.md)** · **[PROMPT.md](./PROMPT.md)**.*
