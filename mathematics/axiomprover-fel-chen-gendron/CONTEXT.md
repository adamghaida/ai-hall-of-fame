# 📚 Context: AxiomProver's first two research results

## The two problems
**Numerical semigroups** are subsets of the non-negative integers closed under addition with finite complement (the "gaps"). Their semigroup rings k[S] have Hilbert series whose numerators encode the degrees of syzygies in a graded free resolution, and Fel had studied alternating power sums of those degrees, conjecturing that suitably normalized versions K_p(S) are given by a universal formula in the gap power sums and a family of symmetric polynomials T_n. The proof AxiomProver found substitutes z = e^t, turning the ordinary generating function into an exponential one, and then compares coefficients on both sides. The paper isolates the universal identities for T_n needed along the way and notes that two further conjectures about the T_n, unrelated to semigroups, remain.

**k-differentials** are sections of the k-th power of the canonical bundle of a Riemann surface. Chen and Gendron's 2022 classification of connected components of their strata needed a spin-parity computation in genus zero and one, which reduced to a congruence for a counting function N_k(n) that they stated as Conjecture A.10 and assumed. The 2026 paper observes that ⌊(k+1)/4⌋ mod 2 is periodic mod 8 and that the parity condition can be rewritten with Jacobi symbols (2/d), after which elementary number theory finishes it. Theorems 1.3 and 1.4 of the paper, the geometric consequences, are human-proved and not formalized.

## How the system was used
For Fel's conjecture the repository documents a fully autonomous run: three input files (statement, one-line task, Lean version) and two output files (formal statement and proof), with Axiom's AXLE Lean engine confirming that `solution.lean` proves the statement in `problem.lean`. For the parity conjecture the paper describes a "discovery phase" in which the bare conjecture was given with no hints, followed by a request to verify the resulting Lemma 2.5 in Lean. Both repositories ship a `comparator.json` so the proofs can be re-checked against the stated problem with the Lean community's independent Comparator tool, the same audit path OpenAI later used for its [Astra release](../astra-ten-proofs/).

## People
Axiom Math's CEO is Carina Hong; Ken Ono, a number theorist, is described by the company as its founding mathematician and is an author on both papers. Evan Chen, Kenny Lau and Jujian Zhang are the mathematical contributors listed as repository maintainers; the Fel paper distinguishes "mathematical contributor," "engineering contributor" and "principal investigator" roles among its 20 authors, and the parity paper lists an 18-person engineering team with Letong Hong and Shubho Sengupta as principal investigators. Dawei Chen is the geometer who posed the problem; Quentin Gendron is his co-author on the 2022 paper. Leonid Fel and Tewodros Amdeberhan are thanked for discussions.

## Why it's in the Hall of Fame
Autoformalization plus proof in one autonomous pass, on a statement no human had proved, with the artifacts published: that combination was new in February 2026, a month after the Erdős problem 728 pipeline (which used a language model for the mathematics and a separate prover, Aristotle, for Lean) and three months before DeepMind's AlphaProof Nexus sweep (which starts from a human-written Lean statement). The Chen–Gendron result also has a clear "unblocked a human project" story, which many AI-mathematics results lack.

## Honest caveats
- **Small results.** Fel's conjecture is a generating-function identity whose proof is a coefficient extraction; the parity conjecture reduces to an elementary Jacobi-symbol identity. Neither would be a notable paper without the AI angle, and both papers say so implicitly by describing themselves as test cases.
- **Peer review is partial.** Both arXiv listings were revised in mid-2026 to address referee reports, which indicates journal submission, but as of Crypto Briefing's May 26, 2026 report "no peer-reviewed journal publications have been confirmed," and this entry could not confirm publication either. The Lean proofs are what is independently checkable.
- **What is formalized is narrower than the headline.** For the parity paper only the combinatorial identity (Lemma 2.5) is in Lean; the geometric theorems are not, and the authors stress this. A Lean certificate also does not check that `problem.lean` faithfully states the conjecture, which is why the paper prints and explains the formal statement for readers to compare.
- **Axiom's third February result was already known.** The company's companion paper on dead ends in square-free digit walks (arXiv 2602.05095, posted February 4) was found after posting to duplicate a 1947 theorem of L. Mirsky; the authors acknowledge this will prevent journal submission. That episode is a reminder that "no human had proved it" needs a literature search, not just a Lean build.
- **Company claims exceed the papers.** Axiom's own announcements framed Fel's conjecture as "the first time an AI system has settled an unsolved research problem in theory-building math," and press coverage (eWeek's "a math problem no human could crack") went further. The papers themselves are careful; the marketing is not, and some commentators have been openly skeptical of the company.
- **Human role.** In the Fel case the run was autonomous and the paper was written by humans afterward; in the parity case the conjecture selection, the decision to formalize only the identity, and all the geometry were human. AxiomProver is described in both papers as "currently under development," and its architecture is not published.

## Sources
- [*Fel's Conjecture on Syzygies of Numerical Semigroups* (arXiv 2602.03716)](https://arxiv.org/abs/2602.03716)
- [AxiomMath/fel-polynomial (GitHub)](https://github.com/AxiomMath/fel-polynomial)
- [*Parity of k-differentials in genus zero and one* (arXiv 2602.03722)](https://arxiv.org/abs/2602.03722)
- [AxiomMath/parity-differential (GitHub)](https://github.com/AxiomMath/parity-differential)
- [*Dead ends in square-free digit walks* (arXiv 2602.05095), the result later matched to Mirsky 1947](https://arxiv.org/abs/2602.05095)
- [eWeek, February 9, 2026](https://www.eweek.com/news/axiomprover-solves-open-math-conjecture/)
- [Crypto Briefing, May 26, 2026](https://cryptobriefing.com/axiom-math-ai-proofs-peer-reviewed/)
- [wal.sh research note on AxiomProver](https://wal.sh/research/axiomprover-2026/)
- [Comparator, the independent Lean proof checker](https://github.com/leanprover/comparator)

Related entries: [Astra's ten proofs](../astra-ten-proofs/) · [six Erdős problems solved with GPT-5.6](../erdos-problems-gpt-5.6/) · [AlphaProof & AlphaGeometry 2](../alphaproof-alphageometry-imo-2024/)

---
*Back to **[README.md](./README.md)** · **[PROMPT.md](./PROMPT.md)**.*
