# 🤖 Explore this with AI: A counterexample to the Jacobian conjecture (with Claude Fable 5)

Paste the prompt below into your favorite AI assistant (Claude, ChatGPT, Gemini, or a local model). If your assistant can browse the web, tell it to read the sources first. The point is a clear, honest, grounded explanation of what happened and why it mattered.

> An 87-year-old conjecture in algebraic geometry — disproven in dimension ≥ 3 by an explicit, AI-found counterexample you can check by hand.

---

```text
You are a sharp, honest science explainer. Walk me through a specific, real AI achievement so that I actually understand it, not just the headline.

Topic: A counterexample to the Jacobian conjecture (with Claude Fable 5)

Please cover, in plain language a curious non-expert can follow:
1. What actually happened, and why this was hard or unsolved before.
2. How the AI approach worked. Explain the core idea rather than the buzzwords, and where it fits in the wider machine-learning landscape.
3. Why it mattered. What changed in the field, and what became possible next?
4. The honest caveats. What did it NOT do? Any disputes, corrections, hype, or limitations I should know about?
5. What I should read or explore next to go deeper.

Ground your answer in these primary sources (read them if you can, and cite them as you go):
- Secret Blogging Seminar — "The new counterexample to the Jacobian conjecture" (research-mathematician analysis, incl. the exact map): https://sbseminar.wordpress.com/2026/07/20/the-new-counterexample-to-the-jacobian-conjecture/
- Wikipedia — Jacobian conjecture (now documents the 2026 counterexample): https://en.wikipedia.org/wiki/Jacobian_conjecture
- Hacker News discussion: https://news.ycombinator.com/item?id=48973869

Be concrete, use real numbers where they matter, and if you are unsure about a detail, say so instead of guessing.
```

## Bonus: have the agent verify it, not just explain it

Because this one is a concrete object, ask a code-capable assistant to check the counterexample itself:

```
Using SymPy, define the map F: C^3 -> C^3 with
  a = (1 + x*y)**3 * z + y**2 * (1 + x*y) * (4 + 3*x*y)
  b = y + 3*x*(1 + x*y)**2 * z + 3*x*y**2 * (4 + 3*x*y)
  c = 2*x - 3*x**2*y - x**3*z
Compute the Jacobian determinant and confirm it is the constant -2 (a nonzero constant),
then explain why a nonzero constant Jacobian was supposed to force invertibility,
and why this map is nonetheless not invertible (it is generically three-to-one).
```
Running it prints `-2`, which is exactly the point: the hypothesis of the Jacobian conjecture holds, but the conclusion fails.

---

## Sources
- [Secret Blogging Seminar — "The new counterexample to the Jacobian conjecture" (research-mathematician analysis, incl. the exact map)](https://sbseminar.wordpress.com/2026/07/20/the-new-counterexample-to-the-jacobian-conjecture/)
- [Wikipedia — Jacobian conjecture (now documents the 2026 counterexample)](https://en.wikipedia.org/wiki/Jacobian_conjecture)
- [Hacker News discussion](https://news.ycombinator.com/item?id=48973869)

---
*Back to **[README.md](./README.md)** · **[CONTEXT.md](./CONTEXT.md)**.*
