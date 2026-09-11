# Erdős problem 1196 solved from a single GPT-5.4 Pro prompt, then digested into a paper with Terence Tao

**Field:** 🧮 Mathematics  ·  **When:** April 2026

> A 1966 conjecture of Erdős, Sárközy and Szemerédi on primitive sets, one that experts had actually worked on, fell to one prompt typed by a 23-year-old with no advanced training; the method it used had been sitting unnoticed since Erdős's 1935 paper.

## What happened
A set of integers is **primitive** if no element divides another. **Erdős problem 1196** asks: if A is a primitive set all of whose elements are at least x, is the Erdős sum Σ 1/(a log a) over a in A at most **1 + o(1)** as x → ∞? The bound would be sharp, since the set of products of k primes nearly attains it. The conjecture dates from a 1966 paper of Erdős, Sárközy and Szemerédi. Unlike many problems on the list, this one had a real literature: Jared Duker Lichtman, who proved the Erdős primitive set conjecture in 2022, had pushed the bound down to e^γ·π/4 + o(1) ≈ 1.399.

On **April 13, 2026**, **Liam Price**, a 23-year-old ChatGPT Pro subscriber with, in Scientific American's description, no advanced mathematics training, entered the problem into **GPT-5.4 Pro** "on an idle Monday afternoon." He told the magazine: "I didn't know what the problem was, I was just doing Erdős problems as I do sometimes." The single response contained a proof that for any primitive set A, the sum over a > x of 1/(a log a) is at most **1 + O(1/log x)**, which is stronger than the conjecture. Price shared it with **Kevin Barreto**, his collaborator from the January problem 728 episode, and it went to the erdosproblems.com forum, where Lichtman and Tao examined it. Tao's tracking wiki records the solution on April 13; a Lean formalization by the system Gauss followed on April 16, and erdosproblems.com now lists the problem as **PROVED (LEAN)**, credited to "GPT-5.4 Pro (prompted by Price)."

The key idea was a **Markov chain on the divisibility poset** with transition weights given by the **von Mangoldt function** Λ, which Tao calls the "downwards von Mangoldt chain." Previous arguments had implicitly used what the authors call the Mertens chain, which loses a logarithmic factor; the von Mangoldt weighting, which sometimes multiplies or divides by a prime power rather than a prime, avoids that loss. On **May 1, 2026**, Boris Alexeev, Barreto, Yanyang Li, Lichtman, Price, Jibran Iqbal Shah, Quanyu Tang and **Terence Tao** posted a 35-page paper, *Primitive sets and von Mangoldt chains: Erdős Problem #1196 and beyond*, whose abstract says the method was "suggested from output of GPT-5.4 Pro" and "seems to have been overlooked by the prior literature since Erdős's seminal 1935 paper." Beyond 1196 it proves the companion 1966 conjecture on divisibility chains (**problem 1217**), gives a short new proof of the Erdős primitive set conjecture (**problem 164**), and resolves a revised form of the Banks–Martin conjecture.

## Why it matters
Problem 728 in January had been a problem nobody had studied. This one had been studied, and by the right people: Tao told Scientific American, "This one is a bit different because people did look at it, and the humans that looked at it just collectively made a slight wrong turn at move one." Lichtman, whose own bound it beat, called the raw output "actually quite poor" but sifted it into what a Hacker News commenter quoted him as calling a "Book proof." It is the clearest case so far of a language model contributing a *method*, not just a solution, and of that method then being carried by human experts well beyond the original question. Tao's blog post frames the episode as a split between proof generation and verification, which "were extremely rapid due to modern AI tools," and proof digestion, which "remains a slower process that requires expert human attention." See **[CONTEXT.md](./CONTEXT.md)** for what the single prompt did and did not accomplish.

## Sources — the record of the discovery
- [Alexeev, Barreto, Li, Lichtman, Price, Shah, Tang, Tao, *Primitive sets and von Mangoldt chains: Erdős Problem #1196 and beyond* (arXiv 2605.00301, May 1, 2026)](https://arxiv.org/abs/2605.00301)
- [Terence Tao, blog post on the paper, May 3, 2026](https://terrytao.wordpress.com/2026/05/03/primitive-sets-and-von-mangoldt-chains-erdos-problem-1196-and-beyond/)
- [Erdős problem 1196 on erdosproblems.com](https://www.erdosproblems.com/1196)
- [Scientific American, "Amateur armed with ChatGPT 'vibe maths' a 60-year-old problem" (April 24, 2026)](https://www.scientificamerican.com/article/amateur-armed-with-chatgpt-vibe-maths-a-60-year-old-problem/)
- [AI contributions to Erdős problems (Tao's wiki, frozen June 30, 2026)](https://github.com/teorth/erdosproblems/wiki/AI-contributions-to-Erd%C5%91s-problems)
- [Hacker News discussion](https://news.ycombinator.com/item?id=47774494)

---
*In this folder: **[PROMPT.md](./PROMPT.md)** (a prompt to explore it with AI) · **[CONTEXT.md](./CONTEXT.md)** (background & caveats). Part of the [AI Hall of Fame](../../README.md) → [🧮 Mathematics](../).*
