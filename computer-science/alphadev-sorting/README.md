# AlphaDev — faster sorting, now shipping in the C++ standard library

**Field:** 💻 Computer Science  ·  **When:** June 2023 · Nature

> An AI-discovered algorithm merged into code that runs trillions of times a day.

## What happened
**AlphaDev** used reinforcement learning to search at the level of raw **assembly instructions** and found sorting routines faster than the best human-written ones, using new 'swap' and 'copy' moves. Google submitted them upstream and, after review, they were merged into the **LLVM libc++ standard library**.

## Why it matters
It was the first change to those C++ sorting algorithms in over a decade — and the first authored by an AI. Sorting runs everywhere, so the speedup compounds across essentially all computing.

## Sources — the record of the discovery
- [DeepMind blog](https://deepmind.google/discover/blog/alphadev-discovers-faster-sorting-algorithms/)
- [Nature paper](https://www.nature.com/articles/s41586-023-06004-9)

---
*In this folder: **[PROMPT.md](./PROMPT.md)** (how to recreate it) · **[CONTEXT.md](./CONTEXT.md)** (background & caveats). Part of the [AI Hall of Fame](../../README.md) → [💻 Computer Science](../).*
