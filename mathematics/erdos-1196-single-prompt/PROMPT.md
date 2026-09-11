# 🤖 Explore this with AI: Erdős problem 1196

Paste the prompt below into your favorite AI assistant (Claude, ChatGPT, Gemini, or a local model). If your assistant can browse the web, tell it to read the sources first. The point is a clear, honest, grounded explanation of what happened and why it mattered.

> One prompt to GPT-5.4 Pro, a 1966 conjecture on primitive sets, and a Markov chain the field had walked past since 1935.

---

```text
You are a sharp, honest math and AI explainer. Walk me through a specific, real AI achievement so that I actually understand it, not just the headline.

Topic: On April 13, 2026, Liam Price, a 23-year-old with no advanced mathematical training, gave Erdős problem 1196 to GPT-5.4 Pro in a single prompt and received a proof that for any primitive set A (no element divides another), the sum over a > x of 1/(a log a) is at most 1 + O(1/log x). This settled a 1966 conjecture of Erdős, Sárközy and Szemerédi and beat the best human bound (Lichtman's e^γ π/4 ≈ 1.399). On May 1, Alexeev, Barreto, Li, Lichtman, Price, Shah, Tang and Terence Tao posted "Primitive sets and von Mangoldt chains: Erdős Problem #1196 and beyond" (arXiv 2605.00301), which develops the model's method and also proves problem 1217, gives a short new proof of the Erdős primitive set conjecture (problem 164), and resolves a revised Banks–Martin conjecture.

Please cover, in plain language a curious non-expert can follow:
1. What a primitive set is, what the Erdős sum Σ 1/(a log a) measures, why Erdős proved it converges in 1935, and why the set of products of exactly k primes shows the constant 1 in problem 1196 is sharp.
2. The method: what it means to bound a sum over an antichain by exhibiting a measure on chains (chain/antichain duality in the divisibility poset), what the "Mertens chain" is and why it loses a log factor, and what changes when the transition weights are the von Mangoldt function Λ (the "von Mangoldt chain"). Explain the "jumping over" issue with prime powers.
3. The human story: Price's prompt, Kevin Barreto, the forum on erdosproblems.com, Lichtman's sifting of what he called "quite poor" raw output, the Lean formalization recorded on April 16, and Tao's three-way distinction between proof generation, verification, and digestion.
4. Why Tao said the humans who had looked at the problem "collectively made a slight wrong turn at move one," and what that says about where language models help.
5. The honest caveats: the paper is a work in progress with only two of six main theorems formalized at posting; it is not peer reviewed; the "60-year-old problem" framing overstates its notoriety; the single-prompt story omits weeks of expert work.
6. What this episode changes about how the Erdős problems community handles AI claims, compared with problem 728 in January 2026 and with OpenAI's withdrawn October 2025 claims.

Ground your answer in these primary sources (read them if you can, and cite them as you go):
- The paper: https://arxiv.org/abs/2605.00301
- Tao's blog post: https://terrytao.wordpress.com/2026/05/03/primitive-sets-and-von-mangoldt-chains-erdos-problem-1196-and-beyond/
- The problem page: https://www.erdosproblems.com/1196
- Scientific American's reporting: https://www.scientificamerican.com/article/amateur-armed-with-chatgpt-vibe-maths-a-60-year-old-problem/
- Tao's tracking wiki: https://github.com/teorth/erdosproblems/wiki/AI-contributions-to-Erd%C5%91s-problems

Be concrete, use real numbers where they matter, and if you are unsure about a detail, say so instead of guessing.
```

## Bonus: have the agent compute the Erdős sums

The theorem is about an asymptotic bound, but the objects are concrete and the extremal examples are computable:

```
Write a Python script that, for k = 1, 2, 3, 4, 5, enumerates integers up to N = 10^7 with exactly k prime factors
counted with multiplicity (a primitive set, since all elements have the same Ω), computes the partial Erdős sum
Σ 1/(a log a) over that set, and prints it. Then do the same for the primes (k = 1) and compare to the known limit
about 1.6366. Explain why the k-almost-prime sums approach 1 as k grows (so the constant 1 in Erdős problem 1196
cannot be improved), and why truncating at N makes every printed value an underestimate.
Then explain, in words, what the GPT-5.4 Pro argument in https://arxiv.org/abs/2605.00301 adds that this
numerical evidence cannot: an upper bound of 1 + O(1/log x) that holds for every primitive set of large integers.
```

---

## Sources
- [*Primitive sets and von Mangoldt chains: Erdős Problem #1196 and beyond* (arXiv 2605.00301)](https://arxiv.org/abs/2605.00301)
- [Tao's blog post, May 3, 2026](https://terrytao.wordpress.com/2026/05/03/primitive-sets-and-von-mangoldt-chains-erdos-problem-1196-and-beyond/)
- [Erdős problem 1196](https://www.erdosproblems.com/1196)
- [Scientific American, April 24, 2026](https://www.scientificamerican.com/article/amateur-armed-with-chatgpt-vibe-maths-a-60-year-old-problem/)
- [AI contributions to Erdős problems (Tao's wiki)](https://github.com/teorth/erdosproblems/wiki/AI-contributions-to-Erd%C5%91s-problems)

---
*Back to **[README.md](./README.md)** · **[CONTEXT.md](./CONTEXT.md)**.*
