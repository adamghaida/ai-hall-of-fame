# A counterexample to the Jacobian conjecture (with Claude Fable 5)

**Field:** 🧮 Mathematics  ·  **When:** July 2026

> An 87-year-old conjecture in algebraic geometry — disproven in dimension ≥ 3 by an explicit, AI-found counterexample you can check by hand.

## What happened
Mathematician **Levent Alpöge**, working with Anthropic's **Claude Fable 5**, produced an explicit polynomial map **C³ → C³** whose **Jacobian determinant is the constant −2** (nonzero) yet which is **not invertible** (it is generically three-to-one). That directly contradicts the **Jacobian conjecture**, which claims any polynomial self-map of Cⁿ with nonzero constant Jacobian must be a bijection.

The conjecture was posed by Ott-Heinrich Keller in **1939** and appears on Stephen Smale's list of problems for the 21st century. The result was announced on X on **July 19–20, 2026**. It disproves the conjecture for **n ≥ 3**; the famous **two-variable (n = 2) case remains open**.

The counterexample (degree 7), verbatim from the write-ups:

```
a = (1 + xy)³·z + y²·(1 + xy)·(4 + 3xy)
b = y + 3x·(1 + xy)²·z + 3x·y²·(4 + 3xy)
c = 2x − 3x²y − x³·z
```

## Why it matters
It is arguably the **hardest long-standing mathematical conjecture disproven with AI assistance** — and, unlike a 100-page proof, the result is a single explicit formula anyone can verify by hand or with a computer algebra system. It is also a striking example of an AI producing a genuinely *novel mathematical object*: no counterexample existed before, so there was nothing to memorize.

## Sources — the record of the discovery
- [Secret Blogging Seminar — "The new counterexample to the Jacobian conjecture" (research-mathematician analysis, incl. the exact map)](https://sbseminar.wordpress.com/2026/07/20/the-new-counterexample-to-the-jacobian-conjecture/)
- [Wikipedia — Jacobian conjecture (now documents the 2026 counterexample)](https://en.wikipedia.org/wiki/Jacobian_conjecture)
- [Hacker News discussion](https://news.ycombinator.com/item?id=48973869)

---
*In this folder: **[PROMPT.md](./PROMPT.md)** (a prompt to explore it with AI — includes a verification script that was actually run) · **[CONTEXT.md](./CONTEXT.md)** (background & caveats). Part of the [AI Hall of Fame](../../README.md) → [🧮 Mathematics](../).*
