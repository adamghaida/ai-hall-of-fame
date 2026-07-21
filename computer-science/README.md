# 💻 Computer Science

AI rewriting the fundamental algorithms that run on billions of devices.

---

### AlphaDev — faster sorting, now shipping in the C++ standard library

- **What happened:** AlphaDev used reinforcement learning to search at the level of raw **assembly instructions** and discovered sorting routines faster than the best human-written ones, using clever "swap" and "copy" moves that cut the number of operations. Google submitted the algorithms upstream and, after independent review, they were merged into the **LLVM libc++ standard library**.
- **When:** June 2023 (*Nature*).
- **Why it's a big deal:** The **first change to those C++ sorting algorithms in over a decade** — and the first update authored by an AI. Sorting runs trillions of times a day worldwide, so the speedup compounds across essentially all computing.
- **Sources:** [DeepMind blog](https://deepmind.google/discover/blog/alphadev-discovers-faster-sorting-algorithms/) · [Nature paper](https://www.nature.com/articles/s41586-023-06004-9)

### AlphaTensor — discovering faster matrix-multiplication algorithms

- **What happened:** AlphaTensor found provably correct matrix-multiplication algorithms that beat the state of the art, including hardware-specific versions that ran 10–20% faster on real GPUs and TPUs. (Full write-up in [Mathematics](../mathematics/).)
- **When:** October 2022 (*Nature*).
- **Why it's a big deal:** Matrix multiplication is the workhorse of graphics, simulation, and machine learning itself — faster algorithms speed up nearly everything.
- **Sources:** [DeepMind blog](https://deepmind.google/discover/blog/discovering-novel-algorithms-with-alphatensor/) · [Nature paper](https://www.nature.com/articles/s41586-022-05172-4)

### AlphaEvolve — an AI agent that optimizes real production code

- **What happened:** AlphaEvolve evolved improvements to real algorithms and even recovered a slice of Google's data-center compute by improving scheduling heuristics, alongside its mathematical discoveries. (Full write-up in [Mathematics](../mathematics/).)
- **When:** May 2025.
- **Sources:** [DeepMind blog](https://deepmind.google/discover/blog/alphaevolve-a-gemini-powered-coding-agent-for-designing-advanced-algorithms/)

---

> **See also:** [Games & Strategy](../games-and-strategy/) — the AlphaZero self-play lineage that made all of the above possible.
