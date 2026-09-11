# Erdős's unit distance conjecture disproved by an OpenAI model (Erdős problem 90)

**Field:** 🧮 Mathematics  ·  **When:** May 2026

> An 80-year-old conjecture in combinatorial geometry, one of Erdős's favourites, fell to an autonomous proof by an internal OpenAI model, and Timothy Gowers wrote that had a human submitted it to the Annals of Mathematics he would have recommended acceptance "without any hesitation."

## What happened
The **planar unit distance problem** asks: among **n** points in the plane, how many pairs can be at distance exactly 1? Erdős posed it in **1946** and conjectured that a rescaled square grid, which gives about **n^(1+C/log log n)** unit pairs, was essentially optimal, so that the true count is **n^(1+o(1))**. It is **problem 90** on erdosproblems.com, where Erdős's own prize of $500 is recorded, and the 2005 Brass, Moser and Pach book calls it "possibly the best known (and simplest to explain) problem in combinatorial geometry." The best upper bound, **O(n^(4/3))** from Spencer, Szemerédi and Trotter (1984), had not moved in over forty years, and recent work on generic norms was read as evidence that the conjecture was true.

On **May 20, 2026**, OpenAI published an 18-page manuscript, *Planar Point Sets with Many Unit Distances*, whose main theorem is:

> There exists an absolute constant δ > 0 and infinitely many positive integers n for which ν(n) ≥ n^(1+δ).

That is a polynomial improvement over the grid, so the conjecture is **false**. The construction replaces the Gaussian integers behind Erdős's grid with number fields of unbounded degree: an infinite unramified pro-3 tower of totally real fields (existence via Golod–Shafarevich theory, in the Hajir–Maire style), chosen so that a fixed set of rational primes splits completely; adjoining *i* gives high-dimensional lattices with many elements of absolute value 1 under every complex embedding, which are then projected to one complex coordinate.

The manuscript's **Statement on AI Use** says the problem "was solved in a completely automated fashion": the internal model received an AI-written statement of the problem, its output went to an AI grading pipeline, and only afterwards did human researchers examine it. The prompt and the model's verbatim final response are printed in the paper. OpenAI's announcement says the proof came from "a new general-purpose reasoning model, rather than from a system trained specifically for mathematics."

The same day, nine external mathematicians (Noga Alon, Thomas Bloom, W. T. Gowers, Daniel Litt, Will Sawin, Arul Shankar, Jacob Tsimerman, Victor Wang and Melanie Matchett Wood) posted *Remarks on the disproof of the unit distance conjecture*, a "short, digested, human-verified version" of the argument. Their simplified version gives an exponent of only about **1 + 6.24 × 10⁻³⁸**. Also on May 20, **Will Sawin** posted *An explicit lower bound for the unit distance problem*, sharpening every step to reach **more than n^1.014 unit pairs** for arbitrarily large n. Sawin's paper names the OpenAI team as Lijie Chen, running the internal model, with Mark Sellke and Mehtaab Sawhney verifying correctness. As of this writing erdosproblems.com lists problem 90 as **DISPROVED (LEAN)**, with a Lean formalization recorded on Terence Tao's tracking wiki as completed by Aleph Prover between May 28 and June 12.

## Why it matters
This is the first time an AI system autonomously settled a famous open problem that a whole subfield had worked on, and it did so with an unexpected import: deep algebraic number theory applied to an elementary Euclidean question. Gowers's assessment in the companion paper is unusually direct: "if a human had written the paper and submitted it to the Annals of Mathematics and I had been asked for a quick opinion, I would have recommended acceptance without any hesitation. No previous AI-generated proof has come close to that." Bloom, who maintains erdosproblems.com, wrote that the result shows "there is a lot more that number theoretic constructions have to say about these sorts of questions than we suspected."

The result is a disproof by construction, not an upper bound. The gap between n^1.014 and the O(n^(4/3)) upper bound remains open, and the new sets are astronomically large. See **[CONTEXT.md](./CONTEXT.md)** for the caveats, including Anthropic's independent Claude Mythos proof six days later.

## Sources — the record of the discovery
- [*Planar Point Sets with Many Unit Distances*, OpenAI, 18 pp. (PDF, includes the prompt and the model's verbatim output)](https://cdn.openai.com/pdf/74c24085-19b0-4534-9c90-465b8e29ad73/unit-distance-proof.pdf)
- [OpenAI announcement, May 20, 2026](https://openai.com/index/model-disproves-discrete-geometry-conjecture/)
- [Alon, Bloom, Gowers, Litt, Sawin, Shankar, Tsimerman, Wang, Matchett Wood, *Remarks on the disproof of the unit distance conjecture* (arXiv 2605.20695)](https://arxiv.org/abs/2605.20695)
- [Will Sawin, *An explicit lower bound for the unit distance problem* (arXiv 2605.20579)](https://arxiv.org/abs/2605.20579)
- [Erdős problem 90 on erdosproblems.com](https://www.erdosproblems.com/90)
- [Thomas Bloom, "Sum-product, unit distances, and number fields" (erdosproblems.com blog, May 31, 2026)](https://www.erdosproblems.com/forum/thread/blog:6)
- [Melissa Lee, The Conversation, May 26, 2026](https://theconversation.com/an-ai-solution-to-an-80-year-old-problem-has-shocked-mathematicians-283686)

---
*In this folder: **[PROMPT.md](./PROMPT.md)** (a prompt to explore it with AI) · **[CONTEXT.md](./CONTEXT.md)** (background & caveats). Part of the [AI Hall of Fame](../../README.md) → [🧮 Mathematics](../).*
