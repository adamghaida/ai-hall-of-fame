# AxiomProver proves Fel's conjecture and the Chen–Gendron parity conjecture, formalized in Lean

**Field:** 🧮 Mathematics  ·  **When:** February 2026

> A startup's prover was handed a natural-language conjecture and a one-line task file, and returned a Lean statement and a machine-checked proof; a second run found the number-theoretic reformulation that two algebraic geometers had been missing.

## What happened
On **February 3, 2026**, Axiom Math, a Palo Alto company, posted two papers on arXiv describing research-level conjectures settled by its system **AxiomProver**, both with proofs formalized in **Lean 4.26.0** against Mathlib and published in public repositories.

**Fel's conjecture on syzygies of numerical semigroups.** For a numerical semigroup S = ⟨d₁, …, d_m⟩, the Hilbert numerator of its semigroup ring determines "normalized alternating syzygy power sums" K_p(S). Leonid Fel had conjectured a closed formula for every K_p(S) in terms of the gap power sums G_r(S) = Σ_{g ∉ S} gʳ and a family of universal symmetric polynomials T_n evaluated at the generator power sums. The 20-author paper (Evan Chen, Chris Cummins, Dejan Grubisic, Leopold Haller, Letong Hong, Andranik Kurghinyan, Kenny Lau, Hugh Leather, Seewoo Lee, Aram Markosyan, **Ken Ono**, Manooshree Patel, Gaurang Pendharkar, Vedant Rathi, Alex Schneidman, Volker Seeker, Shubho Sengupta, Ishan Sinha, Jimmy Xin, Jujian Zhang) proves it "via exponential generating functions and coefficient extraction." The inputs to the system were a LaTeX file with the natural-language statement, a `task.md` containing the single line "1. State and prove Fel's conjecture in Lean.", and a file pinning the Lean version. The outputs were `problem.lean` (the formal statement, 8 KB) and `solution.lean` (the proof, 133 KB), checked by Axiom's own Lean engine and packaged so that an outside party can re-check them with the independent Comparator tool. The paper says "the human authors wrote this paper (without the use of AI) for human readers."

**Chen–Gendron Conjecture A.10.** In a 2022 *Documenta Mathematica* paper on connected components of strata of k-differentials, Dawei Chen and Quentin Gendron determined the spin parity of k-differentials in genus zero and one only conditionally, on a number-theoretic hypothesis they could not prove: for odd k ≥ 3 and n with gcd(n, k) = gcd(n+1, k) = 1, a certain count N_k(n) satisfies N_k(n) ≡ ⌊(k+1)/4⌋ (mod 2). Chen brought the conjecture to Ken Ono at the 2026 Joint Mathematics Meetings. Given "only the conjecture statement, with no references to Chen–Gendron, geometric context, or method hints (like Jacobi symbols)," AxiomProver "returned the Jacobi-symbol reformulation and a reduction to the explicit floor-sum in Lemma 2.5," which the paper calls "the key elusive step that had not been noticed earlier." The system then formalized that combinatorial identity in Lean. The five-author paper (Dawei Chen, Evan Chen, Kenny Lau, Ono, Zhang) states plainly that "it is this combinatorial identity, and not the geometric results on k-differentials, that was formalized." With the hypothesis proved, the spin parity in genus zero and one is now determined unconditionally.

## Why it matters
These are, as far as the record shows, the first research-level conjectures settled end to end by a system that takes a natural-language statement in, produces its own formal statement, and returns a Lean proof, with the artifacts published for independent checking. The Chen–Gendron case is the more interesting of the two mathematically: the missing idea was a change of viewpoint (Jacobi symbols) rather than a computation, it unblocked a geometric classification that two specialists had left conditional since 2022, and the human-facing paper was subsequently revised in response to a referee. Both papers are explicit that they are "a case study and test case for AxiomProver, an AI tool currently under development."

Both results are modest in scope, the company's broader claims have drawn skepticism, and one of Axiom's other February results turned out to be a 1947 theorem. See **[CONTEXT.md](./CONTEXT.md)**.

## Sources — the record of the discovery
- [Chen et al., *Fel's Conjecture on Syzygies of Numerical Semigroups* (arXiv 2602.03716, February 3, 2026)](https://arxiv.org/abs/2602.03716)
- [Lean artifacts for Fel's conjecture: AxiomMath/fel-polynomial (GitHub)](https://github.com/AxiomMath/fel-polynomial)
- [D. Chen, E. Chen, Lau, Ono, Zhang, *Parity of k-differentials in genus zero and one* (arXiv 2602.03722, February 3, 2026)](https://arxiv.org/abs/2602.03722)
- [Lean artifacts for the parity identity: AxiomMath/parity-differential (GitHub)](https://github.com/AxiomMath/parity-differential)
- [eWeek, "Axiom.AI Just Solved a Math Problem No Human Could Crack" (February 9, 2026)](https://www.eweek.com/news/axiomprover-solves-open-math-conjecture/)
- [Crypto Briefing on the peer-review status of Axiom's claims (May 26, 2026)](https://cryptobriefing.com/axiom-math-ai-proofs-peer-reviewed/)

---
*In this folder: **[PROMPT.md](./PROMPT.md)** (a prompt to explore it with AI, including how to check the Lean proofs) · **[CONTEXT.md](./CONTEXT.md)** (background & caveats). Part of the [AI Hall of Fame](../../README.md) → [🧮 Mathematics](../).*
