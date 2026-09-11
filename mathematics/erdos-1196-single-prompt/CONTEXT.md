# 📚 Context: Erdős problem 1196 and the von Mangoldt chain

## The problem and its history
Erdős proved in 1935 that Σ 1/(a log a) converges for every primitive set A, and conjectured (proved by Lichtman in 2022, problem 164 on the list) that the primes maximize it, with value about 1.6366. Problem 1196, from Erdős, Sárközy and Szemerédi (1966), is the "large elements" version: if every element of A is at least x, the sum should be at most 1 + o(1), because the natural extremal examples (products of exactly k primes, which live above 2^k) have sums tending to 1. Lichtman had the best partial result, e^γ π/4 + o(1) ≈ 1.399. The problem page on erdosproblems.com also records Lichtman's 2020 lower bound and the Gorodetsky, Lichtman and Wong (2024) asymptotic for the k-almost-prime sets.

## What the model found
The solution bounds the Erdős sum by exhibiting a probability measure on chains in the divisibility poset (an existential dual to the universal statement, via chain and antichain duality). The natural chain to walk downwards from n, step by step removing a prime factor with probability proportional to 1/p or similar, is what the paper calls the **Mertens chain**, and it is biased toward small primes in a way that costs a log factor. The **von Mangoldt chain** instead removes a prime power q with weight Λ(q)/log n, which "manages to neatly avoid" those losses (Tao). Its one drawback is that it can "jump over" a primitive set by removing a prime power rather than a single prime, which forces ad hoc modifications in several applications. Tao's post also records a small side result the team liked: a probabilistic proof, via gamma random variables, that the Dirichlet eta function is non-decreasing in the relevant region, which is what the chain's sub-invariance estimates need.

## People
- **Liam Price**, 23, prompted GPT-5.4 Pro; no formal mathematical training beyond a basic background, according to Barreto's and Scientific American's accounts. He and Barreto had been testing GPT-5.2 on Erdős problems since December 2025 and were behind the problem 728 solution.
- **Kevin Barreto**, Cambridge undergraduate, Price's collaborator.
- **Jared Duker Lichtman** (Stanford), the expert on primitive sets, whose 2023 bound the AI proof superseded and who did much of the initial sifting.
- **Terence Tao** (UCLA), who led the digestion into a coherent paper.
- **Nat Sothanaphan**, who on April 16 obtained a version stronger than the literature with GPT-5.4 Thinking, and whose work on the forum is recorded on the wiki separately.
- **Boris Alexeev, Yanyang Li, Jibran Iqbal Shah, Quanyu Tang**, co-authors; **Gauss** (a formalization system) produced the Lean proof of the GPT-5.4 Pro argument on April 16 per the wiki.

## Why it's in the Hall of Fame
Tao's notable-cases page lists 1196 for having "obtained solution to a problem that human experts have already spent substantial effort on," with the final outcome a "novel technique resolving this problem, 1217, 164, and two other conjectures," which also inspired a solution to problem 858. The combination of an expert-studied problem, a one-shot solution, a method the field had missed, and a Fields Medalist co-authoring the writeup within three weeks makes it one of the two or three most-cited AI mathematics episodes of 2026.

## Honest caveats
- **"Single prompt" is accurate but incomplete.** The one-shot response existed, but Lichtman told Scientific American "the raw output of ChatGPT's proof was actually quite poor. So it required an expert to kind of sift through." The published theorems, their generalizations, and the exposition are the product of eight humans over several weeks. The 80-minute run time sometimes quoted for the model's response comes from a Hacker News commenter, not from the paper or the forum, and is not verified here.
- **The paper is explicitly a work in progress.** Tao's post says an early version was released "due to the public interest in this problem," that only two of the six main theorems were formalized in Lean at posting, and that the authors plan more formalization before submitting for publication. Not peer reviewed.
- **What is Lean-verified.** erdosproblems.com marks 1196 as PROVED (LEAN), and the wiki records a Gauss formalization of the GPT-5.4 Pro argument for 1196 specifically. That certificate covers the original problem, not the wider paper.
- **The "60-year-old problem" framing overstates its notoriety.** It was a well-known open problem within the small primitive-sets community, with a handful of partial results, not a famous conjecture in the sense of the unit distance problem. Tao's wiki disclaimers warn against reading "N years old" as "N years of failed attempts."
- **Credit and conflicts.** Hacker News commenters noted that Lichtman is involved with an AI startup; whether or not that matters, the mathematics is checkable and the Lean proof exists. Price and Barreto have also had a retracted claim (problem 333, December 2025), which is why the forum's verification process before celebration is part of the story.

## Sources
- [*Primitive sets and von Mangoldt chains* (arXiv 2605.00301)](https://arxiv.org/abs/2605.00301)
- [Tao's blog post, May 3, 2026](https://terrytao.wordpress.com/2026/05/03/primitive-sets-and-von-mangoldt-chains-erdos-problem-1196-and-beyond/)
- [Erdős problem 1196](https://www.erdosproblems.com/1196)
- [Scientific American, April 24, 2026](https://www.scientificamerican.com/article/amateur-armed-with-chatgpt-vibe-maths-a-60-year-old-problem/)
- [AI contributions to Erdős problems (Tao's wiki)](https://github.com/teorth/erdosproblems/wiki/AI-contributions-to-Erd%C5%91s-problems) · [Notable cases page](https://github.com/teorth/erdosproblems/wiki/Notable-cases-of-AI-contributions-to-Erd%C5%91s-problems)
- [Hacker News discussion](https://news.ycombinator.com/item?id=47774494)
- [Barreto's blog post on the 728 episode and the Price collaboration](https://www.erdosproblems.com/forum/thread/blog:2)

Related entries: [six Erdős problems solved with GPT-5.6](../erdos-problems-gpt-5.6/) · [Astra's ten proofs](../astra-ten-proofs/)

---
*Back to **[README.md](./README.md)** · **[PROMPT.md](./PROMPT.md)**.*
