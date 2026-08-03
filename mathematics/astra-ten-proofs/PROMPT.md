# 🤖 Explore this with AI: ten open problems, ten Lean certificates

Paste the prompt below into your favorite AI assistant (Claude, ChatGPT, Gemini, or a local model). If your assistant can browse the web, tell it to read the sources first. The point is a clear, honest, grounded explanation of what happened and why it mattered.

> A 249-page manuscript, ten previously-open results in mathematics and theoretical computer science, and a machine-checked Lean 4 proof for every single one.

---

```text
You are a sharp, honest math and AI explainer. Walk me through a specific, real AI-assisted result so that I actually understand it, not just the headline.

Topic: On August 1, 2026, OpenAI published "Ten Advances in Mathematics and Theoretical Computer Science", a 249-page manuscript reporting ten new results produced by an unreleased internal model family called Astra, with a Lean 4 formalization of every result published in the openai/ten-proofs GitHub repository.

Please cover, in plain language a curious non-expert can follow:

1. What the ten results actually are, and pick the three you think are most significant. Explain in particular:
   - the non-sofic group construction (what soficity means, why Gromov's 1999 notion and Weiss's question mattered, and what an explicit non-sofic group settles),
   - the disproof of Connes's rigidity conjecture,
   - the sphere-packing bound, which the manuscript says is the first improvement to the general high-dimensional packing exponent since 1978.
2. What a "Lean 4 certificate" is, and precisely what it does and does not prove. Explain the difference between "the Lean build succeeds" and "the theorem the mathematical community cared about is now proved". Cover the four fidelity gaps: statement fidelity, definition fidelity, reduction fidelity (is the informal reasoning between formal endpoints complete?), and novelty.
3. Why a zero `sorry` count matters, what Lean's three standard axioms (propext, Classical.choice, Quot.sound) are, and what the repository's ComparatorChallenges directory is for.
4. Who did what: OpenAI's own framing is that the mathematical arguments came from the model, human researchers wrote them up into manuscripts, and the model then produced the Lean formalizations. Discuss how that division of labor should affect how we describe the achievement.
5. The honest caveats: none of the ten results has been peer reviewed; the repository's own formalization.yaml marks review status as "agent-reviewed"; OpenAI did not disclose how many problems were attempted without success, nor the prompts or the search system; Astra is not publicly available, so nobody outside OpenAI can reproduce the search; and the reported cost figure covers inference tokens only.
6. The surrounding context: the June 2026 Leiden Declaration on AI and Mathematics (endorsed by the International Mathematical Union), which warns about bypassing peer review, and OpenAI's earlier October 2025 Erdos-problems episode, where claims were withdrawn after Thomas Bloom pointed out the model had surfaced existing literature rather than proving anything new.
7. What a skeptical specialist would check first, and in what order.

Ground your answer in these sources (read them if you can, and cite them as you go):
- Lean certificates (GitHub): https://github.com/openai/ten-proofs
- The 249-page manuscript (PDF): https://cdn.openai.com/pdf/ten-proofs-oai.pdf
- Reasoning walkthroughs (PDF): https://cdn.openai.com/pdf/reasoning-walkthroughs.pdf
- OpenAI announcement: https://openai.com/index/ten-advances-in-mathematics/
- Simon Willison's writeup: https://simonwillison.net/2026/Aug/1/ten-advances-in-mathematics/
- Leiden Declaration: https://leidendeclaration.ai/

Be concrete, clearly separate confirmed facts from unverified claims, and if you are unsure about a detail, say so instead of guessing.
```

## Bonus: have the agent check a Lean proof

Unlike most entries here, the artifact is a concrete, runnable object. Point a coding agent at it:

```
Clone https://github.com/openai/ten-proofs and inspect it. Do the following and report back:

1. Read formalization.yaml. List the named main-result declarations, their files, their reported sorry_count, and the axioms they depend on.
2. Verify the reported claims yourself with grep: are there any occurrences of `sorry` in the top-level .lean files (SpherePacking.lean, MetricCodes.lean, NonSoficGroup.lean, ConnesRigidity.lean, Permanent.lean, QuantumParallelRepetition.lean, GapCVP.lean, EhrhartVolumeInequality.lean, MulticolorTriangleRamsey.lean, CompactnessAndDegeneracy.lean)? Note that the ComparatorChallenges/ directory deliberately does contain `sorry` — explain why that is expected rather than a problem.
3. Open ComparatorChallenges/I_MulticolorTriangleRamsey.lean and read the formal statement of `erdos_183`. Then read the corresponding informal statement in Chapter 9 of https://cdn.openai.com/pdf/ten-proofs-oai.pdf. Do the definitions of the multicolor triangle Ramsey number match? Is the formal statement as strong as the informal one, weaker, or incomparable? This is the formalization-fidelity question and it is the crux of the whole release.
4. If you have a Lean toolchain, install elan, run `lake exe cache get` and `lake build MulticolorTriangleRamsey`, and report whether the build succeeds. Note the build is large; say so honestly if you cannot complete it rather than claiming success.
5. Do the same fidelity check for one more result of your choice, and tell me which of the ten you would trust least without specialist review.
```

---

## Sources
- [Lean 4 certificates for all ten results (GitHub, Apache-2.0)](https://github.com/openai/ten-proofs)
- [*Ten Advances in Mathematics and Theoretical Computer Science* (PDF)](https://cdn.openai.com/pdf/ten-proofs-oai.pdf)
- [OpenAI announcement](https://openai.com/index/ten-advances-in-mathematics/)
- [Simon Willison's writeup](https://simonwillison.net/2026/Aug/1/ten-advances-in-mathematics/)
- [Comparator, the independent Lean proof checker](https://github.com/leanprover/comparator)

---
*Back to **[README.md](./README.md)** · **[CONTEXT.md](./CONTEXT.md)**.*
