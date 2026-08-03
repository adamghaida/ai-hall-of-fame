# Ten open problems closed at once, each with a Lean 4 certificate (OpenAI "Astra")

**Field:** 🧮 Mathematics  ·  **When:** August 2026

> A 249-page manuscript, ten previously-open results in mathematics and theoretical computer science, and a machine-checked Lean 4 proof for every single one, published together under an open licence.

## What happened
On **August 1, 2026**, OpenAI published *Ten Advances in Mathematics and Theoretical Computer Science*, a 249-page manuscript reporting ten new results produced by an unreleased internal model the company named **Astra**. What sets the release apart from the usual "AI solved a math problem" announcement is what shipped alongside it: a public GitHub repository, [`openai/ten-proofs`](https://github.com/openai/ten-proofs), containing a **Lean 4 formalization of every result**, Apache-2.0 licensed.

The ten results, as listed by the repository and the manuscript abstract:

1. **High-dimensional sphere packing** — the exact asymptotic strength of the Cohn–Elkies linear program is determined, giving the first improvement to the general high-dimensional sphere-packing exponent since 1978 (the Kabatianskii–Levenshtein exponent 0.59905… improves to 0.6044…).
2. **Binary and spherical codes** — classical upper bounds improved by exponential factors at every minimum distance.
3. **Non-sofic groups** — an explicit construction of a non-sofic group. Soficity was introduced by Gromov in 1999 and named by Weiss, who asked whether a non-sofic group exists; the manuscript proves the unit group of the binary Leavitt algebra is not sofic.
4. **Connes's rigidity conjecture** — disproved, by constructing infinitely many pairwise non-isomorphic property-(T) groups sharing the same group von Neumann algebra.
5. **Arithmetic circuit complexity** — for the permanent, division-free circuits require Ω(n² log log n) gates and formulas require Ω(n⁴ / log n) leaves.
6. **Quantum parallel repetition** — exponential parallel repetition for every finite two-player entangled game.
7. **Closest vector problem** — n^(1/400)-factor hardness of approximation for Euclidean CVP, via a direct reduction from 3SAT.
8. **Ehrhart's volume conjecture** — the sharp bound (n+1)ⁿ/n! in every dimension.
9. **Multicolor Ramsey numbers** — a superexponential lower bound proving R_k(3) = k^Θ(k), resolving **Erdős problem 183**.
10. **Compactness and degeneracy** — counterexamples to the Erdős–Simonovits compactness conjecture and an Erdős degeneracy conjecture, resolving **Erdős problems 146 and 180**.

The repository's own `formalization.yaml` records `sorry_count: 0` for the project and for each of the twelve named main declarations, with no axioms beyond Lean's standard three (`propext`, `Classical.choice`, `Quot.sound`). It also ships `ComparatorChallenges/`, a set of standalone Lean files that restate each headline theorem with the proof left as `sorry`, so an outside party can check that the shipped proofs really discharge those statements using the [Comparator](https://github.com/leanprover/comparator) independent checker. OpenAI reported the division of labour plainly: the mathematical arguments came from the model, human researchers wrote them up into manuscripts, and the model then produced the Lean formalizations. Reported token cost was roughly **$2,000 at GPT-5.6 Sol API rates** — though sources disagree on whether that is the total across all ten problems or the figure for each one, and either way it prices inference tokens only (see **[CONTEXT.md](./CONTEXT.md)**).

## Why it matters
Most AI-math announcements ask you to trust a PDF. This one attaches a proof object a skeptic can run themselves: `lake build All` either succeeds or it does not. That collapses one entire category of doubt (did the model hallucinate a step?) into a reproducible command, and it is the reason Thomas Bloom, who maintains erdosproblems.com and was the sharpest critic of OpenAI's botched October 2025 Erdős claims, called these results "big news."

It does **not** collapse the other category. A Lean build proves the *Lean statement*, and mathematicians still have to confirm that statement faithfully encodes the conjecture everyone thought was open. None of the ten results has been peer reviewed; the repository's own metadata marks its review status as `agent-reviewed`. See **[CONTEXT.md](./CONTEXT.md)** for the full set of caveats.

## Sources — the record of the discovery
- [Lean 4 certificates for all ten results (GitHub, Apache-2.0)](https://github.com/openai/ten-proofs)
- [*Ten Advances in Mathematics and Theoretical Computer Science* — the 249-page manuscript (PDF)](https://cdn.openai.com/pdf/ten-proofs-oai.pdf)
- [Reasoning walkthroughs (PDF)](https://cdn.openai.com/pdf/reasoning-walkthroughs.pdf)
- [OpenAI announcement](https://openai.com/index/ten-advances-in-mathematics/)
- [Simon Willison's writeup](https://simonwillison.net/2026/Aug/1/ten-advances-in-mathematics/)
- [SiliconANGLE coverage](https://siliconangle.com/2026/08/02/openais-astra-solves-10-long-open-math-problems-publishes-proofs/)
- [The Next Web coverage](https://thenextweb.com/news/openai-astra-model-ten-math-proofs-non-sofic-groups)

---
*In this folder: **[PROMPT.md](./PROMPT.md)** (a prompt to explore it with AI) · **[CONTEXT.md](./CONTEXT.md)** (background & caveats). Part of the [AI Hall of Fame](../../README.md) → [🧮 Mathematics](../).*
