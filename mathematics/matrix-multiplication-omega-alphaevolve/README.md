# The matrix multiplication exponent drops to ω < 2.371177, with AlphaEvolve as the final refinement

**Field:** 🧮 Mathematics  ·  **When:** August 2026

> The most-watched constant in algorithms moved by 0.000162, an improvement the authors say is comparable to most steps in the 40 years since Coppersmith and Winograd, and the last of it came from an AI agent rewriting the optimizer.

## What happened
The **matrix multiplication exponent ω** is the smallest number such that two n × n matrices can be multiplied in n^(ω + o(1)) arithmetic operations. Strassen showed ω < 2.81 in 1969; Coppersmith and Winograd reached 2.376 in 1990; and every improvement since has come from the **laser method** and, most recently, its refinement called **combination loss analysis** (Duan, Wu and Zhou, 2023), which requires solving a large non-convex optimization problem as part of a computer-assisted proof. The record before this paper was **ω < 2.371339**, from Alman, Duan, Vassilevska Williams, Xu, Xu and Zhou (SODA 2025).

On **August 17, 2026**, a ten-author team posted *Improving the matrix multiplication exponent with modern optimization and AlphaEvolve*: six Google DeepMind researchers (Emilien Dupont, Marvin Eisenberger, Borislav Kozlovskii, Abbas Mehrabian, Francisco J. R. Ruiz and Abigail See, equal contribution) with Renfei Zhou (CMU), **Josh Alman** (Columbia), **Virginia Vassilevska Williams** (MIT) and Matej Balog (DeepMind). Alman, Vassilevska Williams and Zhou are authors of the previous record. The new bound is **ω < 2.371177**, an improvement of about 1.62 × 10⁻⁴, and it came in three steps:

1. **A reformulation** of the optimization problem so it can be solved at maximum recursion level ℓ* = 4 rather than the previous ℓ* = 3, which raises the number of optimizable parameters from roughly **25,000 to about 7 million**. The complexity grows doubly exponentially in ℓ*, which is why the earlier sequential-quadratic-programming approach stopped at 3.
2. **A gradient-based optimizer** in JAX, with Sinkhorn–Knopp projections, implicit differentiation, Adam, and a tensorized representation that parallelizes over up to ten axes on a GPU. This alone improved the record by about 0.97 × 10⁻⁴.
3. **AlphaEvolve**, DeepMind's LLM-driven code-evolution agent, was then "let ... modify the optimization program, which is then executed (taking approximately 5 hours on a single GPU) to output a bound on omega. AlphaEvolve then evolves the code to minimize omega." Using its "evolving constructions" mode, where each generation starts from the parent's best solution, this took the total improvement from 0.97 × 10⁻⁴ to 1.62 × 10⁻⁴.

The bound is certified separately: the floating-point solution is rounded to rationals so that the maximum-entropy certificates remain valid, every derived quantity is recomputed in exact rational arithmetic, and each logarithm is replaced by a rational bound rounded in the safe direction, "so the certified bounds are free from numerical errors." The paper says a repository with the verification code and the discovered solution is being prepared.

## Why it matters
ω is the benchmark quantity of algebraic complexity theory, and the sequence of record bounds (2.371866 in 2023, 2.371552 in 2024, 2.371339 in 2025, now 2.371177) is one of the most closely tracked in theoretical computer science. This is the first time an AI system has contributed to that sequence, and it did so in the way AI has been most reliably useful in mathematics: not by inventing the laser method, but by finding a better optimizer inside a proof framework that humans designed and can certify. It continues the line that runs from [AlphaTensor](../alphatensor-matrix-multiplication/) (faster explicit small-matrix algorithms, 2022) through [AlphaEvolve](../alphaevolve-algorithm-discovery/) (a 48-multiplication 4 × 4 algorithm, 2025) to a change in the asymptotic exponent itself.

It is a small numerical step, it does not speed up any real computation, and the authors write that larger improvements "likely require new mathematical ideas." See **[CONTEXT.md](./CONTEXT.md)**.

## Sources — the record of the discovery
- [Dupont, Eisenberger, Kozlovskii, Mehrabian, Ruiz, See, Zhou, Alman, Vassilevska Williams, Balog, *Improving the matrix multiplication exponent with modern optimization and AlphaEvolve* (arXiv 2608.16884, August 17, 2026)](https://arxiv.org/abs/2608.16884)
- [Alman, Duan, Vassilevska Williams, Xu, Xu, Zhou, *More asymmetry yields faster matrix multiplication* (SODA 2025), the previous record](https://epubs.siam.org/doi/pdf/10.1137/1.9781611978322.63)
- [Ken Ashe, "AlphaEvolve nudges the matrix multiplication exponent lower" (August 18, 2026)](https://kenashe.ai/blog/2026-08-18-alphaevolve-nudges-the-matrix-multiplication-exponent-lower)

---
*In this folder: **[PROMPT.md](./PROMPT.md)** (a prompt to explore it with AI) · **[CONTEXT.md](./CONTEXT.md)** (background & caveats). Part of the [AI Hall of Fame](../../README.md) → [🧮 Mathematics](../).*
