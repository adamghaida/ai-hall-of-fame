# 🤖 Explore this with AI: AxiomProver's first two conjectures

Paste the prompt below into your favorite AI assistant (Claude, ChatGPT, Gemini, or a local model). If your assistant can browse the web, tell it to read the sources first. The point is a clear, honest, grounded explanation of what happened and why it mattered.

> A natural-language conjecture in, a Lean statement and proof out: Fel's syzygy formula and the number-theoretic hypothesis behind Chen and Gendron's k-differential classification, both settled by AxiomProver in February 2026.

---

```text
You are a sharp, honest math and AI explainer. Walk me through a specific, real AI achievement so that I actually understand it, not just the headline.

Topic: On February 3, 2026, Axiom Math posted two arXiv papers on results obtained by its system AxiomProver and formalized in Lean 4.26.0. (1) "Fel's Conjecture on Syzygies of Numerical Semigroups" (arXiv 2602.03716): a closed formula for normalized alternating syzygy power sums K_p(S) of a numerical semigroup in terms of gap power sums and universal symmetric polynomials T_n, proved by exponential generating functions; the system was given a LaTeX statement and a task file reading "State and prove Fel's conjecture in Lean" and returned problem.lean and solution.lean. (2) "Parity of k-differentials in genus zero and one" (arXiv 2602.03722): Chen and Gendron's Conjecture A.10 (for odd k ≥ 3 and gcd(n,k) = gcd(n+1,k) = 1, N_k(n) ≡ ⌊(k+1)/4⌋ mod 2), which the system reformulated via Jacobi symbols and reduced to a combinatorial identity it then formalized.

Please cover, in plain language a curious non-expert can follow:
1. What a numerical semigroup, its gaps, and the Hilbert numerator of its semigroup ring are, and what Fel's formula says. Why does substituting z = e^t (exponential generating functions) make coefficient comparison work?
2. What a k-differential is, why spin parity matters for classifying connected components of strata, and why Chen and Gendron had to leave a number-theoretic hypothesis unproved in 2022. Explain the Jacobi-symbol reformulation and why it was the "elusive step."
3. What "autoformalize and prove" means here, and how it differs from the January 2026 Erdős problem 728 pipeline (GPT-5.2 Pro for mathematics, Aristotle for Lean) and from DeepMind's AlphaProof Nexus (which starts from a human-written Lean statement).
4. What the Lean artifacts do and do not establish: solution.lean proves problem.lean, but who checks that problem.lean says what Fel conjectured? Explain the Comparator tool and why both repositories ship a comparator.json.
5. The honest caveats: both results are small; only the combinatorial identity, not the geometry, was formalized in the parity paper; peer review is in progress but unconfirmed; Axiom's third February paper (square-free digit walks) turned out to reproduce a 1947 theorem of Mirsky; the company's marketing outran the papers; the system's architecture is unpublished.
6. What would make a skeptic take AxiomProver seriously, and what would not.

Ground your answer in these primary sources (read them if you can, and cite them as you go):
- Fel's conjecture paper: https://arxiv.org/abs/2602.03716
- Its Lean artifacts: https://github.com/AxiomMath/fel-polynomial
- Parity paper: https://arxiv.org/abs/2602.03722
- Its Lean artifacts: https://github.com/AxiomMath/parity-differential
- The retracted-in-spirit third paper: https://arxiv.org/abs/2602.05095

Be concrete, use real numbers where they matter, and if you are unsure about a detail, say so instead of guessing.
```

## Bonus: have the agent check the Lean proofs

Both results ship as Lean projects, so a coding agent can audit them:

```
Clone https://github.com/AxiomMath/parity-differential (the smaller of the two; solution.lean is under 8 KB).

1. Read ParityDifferential/problem.lean and print the formal statement. Compare it line by line with Lemma 2.5 and Conjecture 1.1 in https://arxiv.org/abs/2602.03722. Is the formal statement the combinatorial identity (as the paper says) or the geometric theorem? Say which.
2. Grep both problem.lean and solution.lean for `sorry`, `axiom`, and `native_decide`. Report counts and explain why each matters.
3. If you have a Lean toolchain: install elan, select Lean 4.26.0 as the repository pins, run `lake exe cache get` and `lake build`, then follow the README to run `lake env comparator comparator.json`. Report whether Comparator confirms that solution.lean discharges exactly the statement in problem.lean. If the build is too heavy, say so honestly.
4. Then sanity-check the mathematics numerically: write a Python script that, for odd k in {3, 5, 7, 9, 11} and n up to 200 with gcd(n, k) = gcd(n+1, k) = 1, computes the Jacobi symbols (2/d) that appear in the paper's reformulation and confirms the claimed parity congruence in a handful of cases. Note that this checks instances, not the theorem.
5. Repeat step 1 for https://github.com/AxiomMath/fel-polynomial (solution.lean is about 133 KB) and report how the formal statement encodes K_p(S), G_r(S) and the T_n polynomials.
```

---

## Sources
- [*Fel's Conjecture on Syzygies of Numerical Semigroups* (arXiv 2602.03716)](https://arxiv.org/abs/2602.03716)
- [AxiomMath/fel-polynomial (GitHub)](https://github.com/AxiomMath/fel-polynomial)
- [*Parity of k-differentials in genus zero and one* (arXiv 2602.03722)](https://arxiv.org/abs/2602.03722)
- [AxiomMath/parity-differential (GitHub)](https://github.com/AxiomMath/parity-differential)
- [Comparator, the independent Lean proof checker](https://github.com/leanprover/comparator)

---
*Back to **[README.md](./README.md)** · **[CONTEXT.md](./CONTEXT.md)**.*
