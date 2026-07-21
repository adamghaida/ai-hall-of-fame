# 🛠️ How to recreate: Coscientist — a GPT-4 agent that designs and runs its own experiments

*This file is a practical starting point for reproducing or exploring the result — code, data, models, and (where one exists) the actual prompt or method. It is not official documentation; always defer to the primary sources.*

The architecture is described in the paper: a 'Planner' LLM that calls modules (Google search, a docs-reader for hardware APIs, a Python executor, and an automation module that writes protocols for Emerald Cloud Lab / Opentrons robots). To recreate a software-only version, wire an LLM to (a) a literature search tool, (b) a code sandbox, and (c) an **Opentrons** liquid-handler API, and prompt it with a chemistry objective. You need lab hardware for the physical step.

## Primary sources & code
- [Nature paper](https://www.nature.com/articles/s41586-023-06792-0)
- [CMU Engineering](https://engineering.cmu.edu/news-events/news/2023/12/20-ai-coscientist.html)

---
*Back to **[README.md](./README.md)** · **[CONTEXT.md](./CONTEXT.md)**.*
