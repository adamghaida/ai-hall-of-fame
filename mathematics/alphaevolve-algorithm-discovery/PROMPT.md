# 🛠️ How to recreate: AlphaEvolve — breaking Strassen again, and improving ~50 open problems

*This file is a practical starting point for reproducing or exploring the result — code, data, models, and (where one exists) the actual prompt or method. It is not official documentation; always defer to the primary sources.*

AlphaEvolve itself is not open, but the pattern is reproducible and generalizes FunSearch: maintain a population of candidate programs, use a strong LLM to propose diffs to the best ones, score each with an automated evaluator, and keep improvements. Open-source echoes ('OpenEvolve' and similar) reimplement the loop. The winning 48-multiplication scheme is public and independently verifiable (see the community verification repo: github.com/PhialsBasement/AlphaEvolve-MatrixMul-Verification).

## Primary sources & code
- [DeepMind blog](https://deepmind.google/discover/blog/alphaevolve-a-gemini-powered-coding-agent-for-designing-advanced-algorithms/)
- [IEEE Spectrum](https://spectrum.ieee.org/deepmind-alphaevolve)

---
*Back to **[README.md](./README.md)** · **[CONTEXT.md](./CONTEXT.md)**.*
