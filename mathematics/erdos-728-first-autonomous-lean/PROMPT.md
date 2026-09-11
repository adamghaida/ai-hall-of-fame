# 🤖 Explore this with AI: Erdős problem 728

Paste the prompt below into your favorite AI assistant (Claude, ChatGPT, Gemini, or a local model). If your assistant can browse the web, tell it to read the sources first. The point is a clear, honest, grounded explanation of what happened and why it mattered.

> The first Erdős problem solved by an AI with no prior solution in the literature: GPT-5.2 Pro wrote the argument, Aristotle wrote the Lean proof, and humans only checked that the theorem said what Erdős meant.

---

```text
You are a sharp, honest math and AI explainer. Walk me through a specific, real AI achievement so that I actually understand it, not just the headline.

Topic: In January 2026, Erdős problem 728 (Erdős, Graham, Ruzsa, Straus, 1975) became the first problem on erdosproblems.com to be resolved autonomously by AI: GPT-5.2 Pro (OpenAI), prompted by Liam Price and Kevin Barreto, produced the argument on January 4, and Aristotle (Harmonic) turned it into a Lean proof that was posted on January 6. Nat Sothanaphan's arXiv writeup (2601.07421) records the theorem: for any 0 < C1 < C2 and 0 < ε < 1/2, there are infinitely many (a, b, n) with εn ≤ a, b ≤ (1−ε)n such that a! b! divides n! (a+b−n)! and C1 log n < a+b−n < C2 log n.

Please cover, in plain language a curious non-expert can follow:
1. The problem: why a! b! | n! forces a + b ≤ n + O(log n) (Erdős 1968), why allowing (a+b−n)! on the right changes things, and why the question as literally stated was ambiguous (trivial solutions with huge a and b).
2. The proof idea: Kummer's theorem (p-adic valuation of a binomial coefficient = number of carries in base p), the reduction to C(N,k) dividing C(N,a), and the "carry-rich but spike-free" choice of integers. Explain why primes above 2k are easy and primes below 2k are the real work.
3. The pipeline: how Barreto and Price got GPT-5.2 to attempt an open problem (prompting it as a competition problem with web search disabled), how Aristotle autoformalized the LaTeX, the January 4 to 6 repair after Tao and Barreto noticed a wasted k! factor, and why the Lean certificate is what made the claim credible.
4. What happened next in the same week: problems 729 and 401 solved by adapting the argument; problem 397 solved but found to be a 2012 China TST problem; Carl Pomerance's reply that his 2015 Monthly paper's method gives similar results, and his follow-up note.
5. The honest caveats: the ambiguity of the statement; the closeness to Pomerance's earlier work; that this was deliberately a "low-hanging fruit" search; Tao's warning that only a small fraction of open Erdős problems are this accessible; that the writeup is a forum participant's preprint and not peer reviewed.
6. Why it still matters: contrast it with OpenAI's withdrawn October 2025 claim that GPT-5 had solved ten Erdős problems, and with Barreto's own retracted Christmas Day claim on problem 333.

Ground your answer in these primary sources (read them if you can, and cite them as you go):
- Sothanaphan's writeup: https://arxiv.org/abs/2601.07421
- The Lean proof: https://github.com/plby/lean-proofs/blob/main/src/v4.24.0/ErdosProblems/Erdos728b.lean
- The problem page and forum: https://www.erdosproblems.com/728
- Barreto's first-person account: https://www.erdosproblems.com/forum/thread/blog:2
- Tao's tracking wiki: https://github.com/teorth/erdosproblems/wiki/AI-contributions-to-Erd%C5%91s-problems

Be concrete, use real numbers where they matter, and if you are unsure about a detail, say so instead of guessing.
```

## Bonus: have the agent check the Lean proof

The artifact here is a formal proof, so a coding agent can inspect it directly:

```
Clone https://github.com/plby/lean-proofs and open src/v4.24.0/ErdosProblems/Erdos728b.lean.

1. Find the final theorem (the writeup's lemma table says the main statement is erdos_728_fc, built from lemma_good_m_exists_any_c). Print its exact Lean statement and translate it into ordinary mathematics. Does it match Theorem 1 of https://arxiv.org/abs/2601.07421 (any 0 < C1 < C2, any 0 < ε < 1/2, infinitely many triples with εn ≤ a, b ≤ (1−ε)n, a! b! | n! (a+b−n)!, and C1 log n < a+b−n < C2 log n)? Note any difference between the formal and informal statements.
2. Grep the file for `sorry` and for `axiom`. Report what you find and explain why a zero count matters.
3. If you have a Lean toolchain, install elan, check out the toolchain the repo pins (v4.24.0), and build the file. If the build is too heavy for your environment, say so rather than claiming success.
4. Then do a sanity check the Lean proof does not need: write a short Python script that, for n up to a few thousand, searches for triples with b = n/2, a close to n/2, a! b! | n! (a+b−n)!, and reports the largest gap a+b−n found, compared against log n.
```

---

## Sources
- [Sothanaphan, *Resolution of Erdős Problem #728: a writeup of Aristotle's Lean proof* (arXiv 2601.07421)](https://arxiv.org/abs/2601.07421)
- [Erdos728b.lean (plby/lean-proofs)](https://github.com/plby/lean-proofs/blob/main/src/v4.24.0/ErdosProblems/Erdos728b.lean)
- [Erdős problem 728](https://www.erdosproblems.com/728)
- [Barreto's blog post](https://www.erdosproblems.com/forum/thread/blog:2)
- [AI contributions to Erdős problems (Tao's wiki)](https://github.com/teorth/erdosproblems/wiki/AI-contributions-to-Erd%C5%91s-problems)

---
*Back to **[README.md](./README.md)** · **[CONTEXT.md](./CONTEXT.md)**.*
