# 📚 Context: the Jacobian conjecture counterexample

## The conjecture
The **Jacobian conjecture** (Keller, 1939) says: if `F: Cⁿ → Cⁿ` is a polynomial map whose Jacobian determinant is a **nonzero constant**, then `F` is a bijection (and its inverse is also polynomial). The "nonzero constant Jacobian" condition makes `F` a local isomorphism everywhere; the conjecture asks whether that forces it to be *globally* invertible. It is trivial for n = 1, and it has a notorious reputation: over the decades many published "proofs" turned out to be flawed, and it was considered one of the deep open problems of algebraic geometry (it appears on Smale's list for the 21st century).

## What the counterexample changes
The Alpöge / Claude Fable 5 map settles it in the **negative for n ≥ 3**: a concrete degree-7 map on C³ with constant Jacobian −2 that is generically three-to-one. So "constant nonzero Jacobian" does **not** imply bijectivity in general. The **two-variable case (n = 2)** — historically the most studied — **remains open** as of July 2026.

## Why it belongs in the Hall of Fame
It is a genuine, first-of-its-kind mathematical discovery made with an AI collaborator: the counterexample is a *new object* that did not exist in any training data, and it overturns an 87-year-old belief. It is also unusually clean — verifiable on a napkin — which is why the community could check the arithmetic within hours.

## Honest caveats
- **Freshness / peer review.** This is *days old* (announced July 19–20, 2026). The arithmetic has been independently verified by multiple mathematicians and the change is reflected on Wikipedia, but it has **not yet completed formal journal peer review**. Read it as "very likely correct and widely accepted, pending the usual process."
- **Scope.** It disproves n ≥ 3 only; n = 2 is untouched.
- **Insight vs. object.** Some mathematicians argue an explicit counterexample, while decisive, offers limited *structural* understanding of *why* the conjecture fails — Columbia's Andrew Blumberg was quoted (via Mashable) to the effect that "this counterexample basically tells us nothing." That's a statement about mathematical insight, not about validity.
- **Role of the AI.** How much of the credit is "search" versus "insight" depends on details of the discovery loop that aren't fully public. Either way, a human mathematician (Alpöge) framed the problem, and the object is human-verifiable — the model was a powerful collaborator, not an unattended oracle.

## A note for this repository
The first version of this repo's README used the Jacobian conjecture as an example of something *AI had not done* — which was true when written and false a few weeks later. That flip is itself the lesson: this collection has to track reality, and reality here moves fast.

## Sources
- [Secret Blogging Seminar](https://sbseminar.wordpress.com/2026/07/20/the-new-counterexample-to-the-jacobian-conjecture/)
- [Wikipedia — Jacobian conjecture](https://en.wikipedia.org/wiki/Jacobian_conjecture)
- [Hacker News discussion](https://news.ycombinator.com/item?id=48973869)

---
*Back to **[README.md](./README.md)** · **[PROMPT.md](./PROMPT.md)**.*
