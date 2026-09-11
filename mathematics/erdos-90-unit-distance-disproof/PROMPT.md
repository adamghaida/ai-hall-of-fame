# 🤖 Explore this with AI: the unit distance disproof

Paste the prompt below into your favorite AI assistant (Claude, ChatGPT, Gemini, or a local model). If your assistant can browse the web, tell it to read the sources first. The point is a clear, honest, grounded explanation of what happened and why it mattered.

> Erdős's 1946 conjecture that n points in the plane can have at most n^(1+o(1)) unit-distance pairs, disproved by an OpenAI model using infinite class field towers, then made explicit (n^1.014) by Will Sawin the same day.

---

```text
You are a sharp, honest math and AI explainer. Walk me through a specific, real AI achievement so that I actually understand it, not just the headline.

Topic: On May 20, 2026, OpenAI published "Planar Point Sets with Many Unit Distances", an 18-page manuscript in which an unnamed internal reasoning model disproved Erdős's 1946 unit distance conjecture (Erdős problem 90). The theorem: there is an absolute δ > 0 such that, for infinitely many n, some n-point planar set has at least n^(1+δ) pairs at distance exactly 1. Nine external mathematicians published a verified digest the same day, and Will Sawin posted an explicit version with exponent 1.014.

Please cover, in plain language a curious non-expert can follow:
1. The problem: what ν(n) is, why the rescaled square grid gives n^(1+C/log log n), why Erdős believed that was optimal, and why the O(n^(4/3)) upper bound of Spencer, Szemerédi and Trotter (1984) never moved.
2. The construction: how Erdős's Gaussian-integer trick generalizes to number fields of growing degree, what an unramified pro-3 class field tower is, why Golod–Shafarevich theory is needed to make the tower infinite, why one needs a fixed set of primes to split completely, and why bounded root discriminant (class numbers at most exponential in the degree) is the crucial quantitative point.
3. What "autonomous" meant here: an AI-written prompt, an AI grading pipeline, then human verification. Explain what the paper's "Statement on AI Use" does and does not tell us (no model name, no attempt count, no compute figures).
4. The explicit exponents: why the digest by Alon, Bloom, Gowers, Litt, Sawin, Shankar, Tsimerman, Wang and Matchett Wood only gets about 1 + 6 × 10⁻³⁸, how Sawin gets to 1.014, and why even that is a statement about infinitely many n rather than all n.
5. The honest caveats: a company PDF not yet peer reviewed; improvements that only kick in for astronomically large point sets; the truth still open between n^1.014 and n^(4/3); and Anthropic's Claude Mythos producing an independent (reportedly simpler but weaker) proof on May 26.
6. Why Timothy Gowers wrote he would have recommended acceptance at the Annals of Mathematics "without any hesitation," and what a skeptical specialist would still want to check.

Ground your answer in these primary sources (read them if you can, and cite them as you go):
- The OpenAI manuscript, including the prompt and the model's verbatim output: https://cdn.openai.com/pdf/74c24085-19b0-4534-9c90-465b8e29ad73/unit-distance-proof.pdf
- OpenAI's announcement: https://openai.com/index/model-disproves-discrete-geometry-conjecture/
- Remarks on the disproof of the unit distance conjecture (nine-author companion paper): https://arxiv.org/abs/2605.20695
- Sawin, An explicit lower bound for the unit distance problem: https://arxiv.org/abs/2605.20579
- Erdős problem 90 on erdosproblems.com: https://www.erdosproblems.com/90
- Thomas Bloom's expository blog post: https://www.erdosproblems.com/forum/thread/blog:6

Be concrete, use real numbers where they matter, clearly separate verified facts from the company's framing, and if you are unsure about a detail, say so instead of guessing.
```

## Bonus: have the agent check the arithmetic behind the grid bound

The disproof itself needs infinite class field towers and is not something you can verify in a script. But the baseline it beats, Erdős's square-grid construction, is checkable, and seeing it makes the n^(1+c/log log n) exponent concrete:

```
Write a short Python script that, for a given N, takes the integer grid points (a, b) with 0 <= a, b < N,
computes r2(m) = the number of ways to write m as a sum of two squares (ordered, with signs),
finds the m <= 2 N^2 maximizing r2(m) (a product of many distinct primes that are 1 mod 4 works well),
and then counts the number of pairs of grid points at squared distance exactly m.
Report the count as a function of n = N^2 for N = 50, 100, 200 and compare the growth to n^(1 + c/log log n).
Then explain in words why no choice of m can push this grid construction to n^(1+δ) for a fixed δ > 0,
and what the OpenAI construction changes (replacing the Gaussian integers by number fields of unbounded degree).
```

---

## Sources
- [*Planar Point Sets with Many Unit Distances*, OpenAI (PDF)](https://cdn.openai.com/pdf/74c24085-19b0-4534-9c90-465b8e29ad73/unit-distance-proof.pdf)
- [OpenAI announcement, May 20, 2026](https://openai.com/index/model-disproves-discrete-geometry-conjecture/)
- [*Remarks on the disproof of the unit distance conjecture* (arXiv 2605.20695)](https://arxiv.org/abs/2605.20695)
- [Sawin, *An explicit lower bound for the unit distance problem* (arXiv 2605.20579)](https://arxiv.org/abs/2605.20579)
- [Erdős problem 90](https://www.erdosproblems.com/90)
- [Bloom's blog post, May 31, 2026](https://www.erdosproblems.com/forum/thread/blog:6)

---
*Back to **[README.md](./README.md)** · **[CONTEXT.md](./CONTEXT.md)**.*
