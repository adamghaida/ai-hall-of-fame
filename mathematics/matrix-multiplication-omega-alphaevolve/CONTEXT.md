# 📚 Context: ω < 2.371177

## What ω is and how it is bounded
The trivial algorithm multiplies n × n matrices in n³ operations. Strassen (1969) showed 7 multiplications suffice for 2 × 2 blocks, giving n^2.81; Bini et al. (1979) introduced approximate (border-rank) algorithms; Schönhage (1981), Strassen (1986) and then Coppersmith and Winograd (1990) built the laser method, which takes a fixed small tensor (the Coppersmith–Winograd tensor), raises it to a high power, and "zeroes out" pieces so that the remainder looks like many independent matrix multiplications. Stothers (2010), Vassilevska Williams (2012), Le Gall (2014) and Alman and Vassilevska Williams (2024) pushed this further by analyzing higher powers of the tensor. The 2023 breakthrough of Duan, Wu and Zhou introduced **asymmetric hashing** and **combination loss analysis**, recovering losses the classical laser method threw away, and giving 2.371866; Vassilevska Williams, Xu, Xu and Zhou (2024) got 2.371552; Alman, Duan, Vassilevska Williams, Xu, Xu and Zhou (2025) got 2.371339. The bound is what you get by optimizing a large set of parameters (split distributions, retained exponents, node masses) subject to constraints; Alman et al. (2025) proved that any feasible point gives a valid upper bound on ω, which is what makes a numerical search a proof.

## What is new in this note
The paper calls itself "this note" and is a short technical report. Its contribution is entirely on the optimization side: (1) restructuring the problem so that recursion level ℓ* = 4 is tractable (25k to about 7M parameters); (2) replacing SNOPT-style sequential quadratic programming with a JAX gradient method, with Sinkhorn–Knopp for the doubly-stochastic constraints and implicit differentiation through it; (3) handing the resulting program to AlphaEvolve to mutate. Each AlphaEvolve candidate is a full optimizer run of about five GPU-hours, so the evolution loop is expensive, and the authors found the "evolving constructions" mode, in which each generation resumes from its parent's best point, essential. The work was motivated by conversations at the Simons Institute's Complexity and Linear Algebra program in Fall 2025.

## People
The equal-contribution DeepMind group (Dupont, Eisenberger, Kozlovskii, Mehrabian, Ruiz, See) and Matej Balog overlap with the author list of the 2025 AlphaEvolve paper. Renfei Zhou, Josh Alman and Virginia Vassilevska Williams are the complexity theorists whose 2024 and 2025 papers set the previous records, which means the people best placed to check the certificate are co-authors.

## Why it's in the Hall of Fame
It is the first AI contribution to the ω record sequence, and it was made inside a rigorous, certifiable framework rather than as an unverified claim. The exact-rational verification step means the bound does not rest on floating-point trust. The paper's own comparison, that the step is "comparable in magnitude to most improvements in the last 40 years since ω < 2.376 was attained by Coppersmith and Winograd," is a fair description of both how small and how normal this step is.

## Honest caveats
- **A tiny step, and purely asymptotic.** 2.371339 to 2.371177 changes nothing about any matrix multiplication anyone runs; the laser-method algorithms are galactic. Ken Ashe's writeup puts it plainly: "Your transformer training job is not going to speed up because the exponent moved."
- **AlphaEvolve's share is less than half of a small number.** The gradient optimizer alone gave about 0.97 × 10⁻⁴; AlphaEvolve added about 0.65 × 10⁻⁴ on top. The reformulation to ℓ* = 4 and the JAX optimizer are human engineering.
- **Not peer reviewed, and the verification artifacts were not yet public at posting.** The paper says the authors "are preparing a repository" with the verification code and discovered solution. As of this entry's writing (September 2026) no such repository could be located; until it appears, the exact-rational certificate is described but not independently checkable.
- **Same framework, same limits.** The authors themselves say further modest gains may come this way but "achieving larger improvements to ω likely requires new mathematical ideas." The conjecture that ω = 2 is untouched, and the known barriers to the laser method are untouched.
- **Author overlap.** Verification by the community is partly verification by the previous record holders, who are co-authors. That is normal in this subfield, but it is not independent review.

## Sources
- [*Improving the matrix multiplication exponent with modern optimization and AlphaEvolve* (arXiv 2608.16884)](https://arxiv.org/abs/2608.16884)
- [Alman et al., *More asymmetry yields faster matrix multiplication* (SODA 2025)](https://epubs.siam.org/doi/pdf/10.1137/1.9781611978322.63)
- [Vassilevska Williams, Xu, Xu, Zhou, *New bounds for matrix multiplication: from alpha to omega* (SODA 2024)](https://epubs.siam.org/doi/pdf/10.1137/1.9781611977912.134)
- [Ken Ashe, August 18, 2026](https://kenashe.ai/blog/2026-08-18-alphaevolve-nudges-the-matrix-multiplication-exponent-lower)

Related entries: [AlphaTensor](../alphatensor-matrix-multiplication/) · [AlphaEvolve](../alphaevolve-algorithm-discovery/) · [FunSearch and the cap set problem](../funsearch-cap-set/)

---
*Back to **[README.md](./README.md)** · **[PROMPT.md](./PROMPT.md)**.*
