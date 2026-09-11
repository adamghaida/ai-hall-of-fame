# Erdős problem 728: the first Erdős problem resolved autonomously by AI, with a Lean proof

**Field:** 🧮 Mathematics  ·  **When:** January 2026

> A 1975 question of Erdős, Graham, Ruzsa and Straus about factorial divisibility, answered by GPT-5.2 Pro and formalized in Lean by Harmonic's Aristotle with no human writing any of the mathematics, and recognized by the Erdős problems community as the first autonomous AI solution of a problem on the list.

## What happened
**Erdős problem 728** asks, in the wording on erdosproblems.com: for small C > 0 and ε > 0, are there infinitely many integers a, b, n with a, b ≥ εn such that **a! b! divides n! (a+b−n)!** and **a + b > n + C log n**? Erdős had shown in 1968 that a! b! | n! forces a + b ≤ n + O(log n), so the question is whether the extra factor (a+b−n)! lets the gap reach logarithmic size. The problem comes from a 1975 paper of Erdős, Graham, Ruzsa and Straus on the prime factors of the middle binomial coefficient.

In late December 2025, **Kevin Barreto**, a Cambridge undergraduate, and **Liam Price**, a 23-year-old with no advanced mathematical training, started feeding open number-theory problems from the list to **GPT-5.2**. On **January 4, 2026** Price's GPT-5.2 Pro session returned a proof for problem 728. Barreto passed it to his own GPT-5.2 Pro instance to be written up in LaTeX, then to **Aristotle**, Harmonic's Lean-based prover, which produced a formal proof. After Terence Tao and Barreto noticed the argument was wasting a k! factor and that the intended reading has C arbitrarily large, the model repaired its own proof and Aristotle re-formalized it; the corrected Lean proof was posted on **January 6**. The final theorem, as recorded in Nat Sothanaphan's arXiv writeup: for any 0 < C₁ < C₂ and 0 < ε < 1/2, there are infinitely many (a, b, n) with εn ≤ a, b ≤ (1−ε)n such that a! b! | n! (a+b−n)! and C₁ log n < a + b − n < C₂ log n. The proof reduces to a divisibility of binomial coefficients and uses Kummer's carry-counting theorem in base p, choosing integers that are "carry-rich but spike-free."

Within the same week the argument was adapted, again by GPT-5.2 Pro with Aristotle formalizing, to solve **problem 729 (January 10)** and **problem 401 (January 11)**. A separate GPT-5.2 Pro plus Aristotle solution of **problem 397** was posted on January 10, but a literature search found it matched a 2012 China Team Selection Test problem. Tao's tracking wiki lists 728 as the first "Full solution (Lean)" in its "AI standalone" section, and erdosproblems.com marks it **PROVED (LEAN)**, adding that the solution "appears to answer the question in the spirit it was intended."

## Why it matters
Before January 2026, every claimed AI solution of an Erdős problem had either turned out to exist in the literature (including OpenAI's withdrawn October 2025 claims and Barreto's own Christmas Day claim on problem 333, retracted within hours) or had involved substantial human mathematics. Problem 728 was the first where the argument came from a language model, the verification came from a formal prover, and no prior solution was found. The Lean certificate is what made the claim credible quickly: a 108 KB proof file that anyone with a Lean toolchain can check.

The community was careful about what it did and did not show. Carl Pomerance, whose 2015 Monthly paper used the same carry-counting strategy, wrote up a note showing his method gives similar results; Tao observed that the problem, as posed, was ambiguous and that this class of problems is among the easiest on the list. See **[CONTEXT.md](./CONTEXT.md)**.

## Sources — the record of the discovery
- [Nat Sothanaphan, *Resolution of Erdős Problem #728: a writeup of Aristotle's Lean proof* (arXiv 2601.07421, January 12, 2026)](https://arxiv.org/abs/2601.07421)
- [The Lean proof (Erdos728b.lean, in Boris Alexeev's lean-proofs repository)](https://github.com/plby/lean-proofs/blob/main/src/v4.24.0/ErdosProblems/Erdos728b.lean)
- [Erdős problem 728 on erdosproblems.com](https://www.erdosproblems.com/728)
- [Kevin Barreto, "Problem 728 and the use of AI on Erdős problems" (erdosproblems.com blog, January 26, 2026)](https://www.erdosproblems.com/forum/thread/blog:2)
- [AI contributions to Erdős problems (Tao's wiki, frozen June 30, 2026)](https://github.com/teorth/erdosproblems/wiki/AI-contributions-to-Erd%C5%91s-problems)
- [The Decoder on Tao's reaction, January 16, 2026](https://the-decoder.com/terence-tao-says-gpt-5-2-pro-cracked-an-erdos-problem-but-warns-the-win-says-more-about-speed-than-difficulty/)
- [Quanta Magazine, "Why the Legendary Erdős Problems Are Falling to AI" (August 3, 2026)](https://www.quantamagazine.org/why-the-legendary-erdos-problems-are-falling-to-ai-20260803/)

---
*In this folder: **[PROMPT.md](./PROMPT.md)** (a prompt to explore it with AI, including how to check the Lean proof) · **[CONTEXT.md](./CONTEXT.md)** (background & caveats). Part of the [AI Hall of Fame](../../README.md) → [🧮 Mathematics](../).*
