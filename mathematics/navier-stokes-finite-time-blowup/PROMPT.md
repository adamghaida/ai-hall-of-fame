# 🤖 Explore this with AI: the Navier–Stokes blowup claim

Paste the prompt below into your favorite AI assistant (Claude, ChatGPT, Gemini, or a local model). If your assistant can browse the web, tell it to read the sources first. The point is a clear, honest, grounded explanation of what happened and why it mattered.

> OpenAI says an internal model proved that a smooth fluid at rest can blow up in finite time under a smooth external force, and shipped a Lean certificate. Mathematicians got there first on the Euler equations. Nobody outside OpenAI has verified the Navier–Stokes proof yet.

---

```text
You are a sharp, honest science explainer. Walk me through a specific, real AI achievement so that I actually understand it, not just the headline.

Topic: OpenAI's September 2026 claim of finite-time blowup for the forced 3D Navier–Stokes equations (Clay Millennium Prize statements C and D), and the Buckmaster–Alpöge Euler blowup results that preceded it.

Please cover, in plain language a curious non-expert can follow:
1. What the Navier–Stokes Millennium problem actually asks, and why the four statements (A, B, C, D) differ. Explain what "forcing" means and why it matters so much here.
2. What OpenAI claims to have proved, how (roughly 10,000 agents, 88 hours, a Lean formalization), and what Buckmaster and Alpöge proved before that on Euler, building on Córdoba and Martínez-Zoroa.
3. Why it would matter if it holds: what a Lean certificate does and does not guarantee, and why the unforced problem is still open.
4. The honest caveats: no independent verification yet, the Clay Institute's position, the credit dispute described in Buckmaster's statement and OpenAI's reply, and Terence Tao's concerns about insight versus trophies.
5. What I should read or explore next to go deeper.

Ground your answer in these primary sources (read them if you can, and cite them as you go):
- OpenAI announcement and write-up: https://openai.com/index/navier-stokes-solution/
- Lean certificates (GitHub): https://github.com/openai/NavierStokesAndEuler
- Terence Tao on the Buckmaster–Alpöge results: https://terrytao.wordpress.com/2026/09/07/finite-time-blowup-with-smooth-forcing-term-for-the-incompressible-porous-medium-boussinesq-and-incompressible-euler-equations/
- Tristan Buckmaster's statement: https://cims.nyu.edu/~tristanb/statement.pdf
- Quanta Magazine: https://www.quantamagazine.org/ai-has-solved-one-of-maths-1-million-millennium-prize-problems-20260908/
- Clay Mathematics Institute problem statement: https://www.claymath.org/millennium/navier-stokes-equation/

Be concrete, use real numbers where they matter, and if you are unsure about a detail, say so instead of guessing. Do not say the Millennium problem is "solved" without stating which of the four statements is addressed and that forcing is involved.
```

## Bonus: check the certificate, not the press release

The proof object is public. Ask a code-capable agent (or do it yourself) to build it:

```
Clone https://github.com/openai/NavierStokesAndEuler and, following its README, run `lake build`.
Then open the top-level theorem for the Navier–Stokes result and, in plain language, tell me:
  (a) exactly what statement is being proved: which domain (R^3 or T^3), what regularity the
      initial data and forcing term are assumed to have, and what "blowup" means formally;
  (b) whether the forcing term is nonzero (i.e. whether this is the forced problem);
  (c) which axioms the proof depends on (`#print axioms` on the main theorem);
  (d) whether the ComparatorChallenges files restate the same theorem with `sorry`, so an
      independent checker can confirm the shipped proof discharges it.
Report the build result verbatim. Do not summarize the mathematics as "Navier–Stokes solved".
```

A successful build tells you the formal statement is proved. It does not tell you the formal statement is the one the Clay Institute wrote, and that is the part still under human review.

---

## Sources
- [OpenAI — "On the Navier–Stokes Millennium Prize Problem"](https://openai.com/index/navier-stokes-solution/)
- [Lean 4 certificates (GitHub)](https://github.com/openai/NavierStokesAndEuler)
- [Terence Tao's post](https://terrytao.wordpress.com/2026/09/07/finite-time-blowup-with-smooth-forcing-term-for-the-incompressible-porous-medium-boussinesq-and-incompressible-euler-equations/)
- [Tristan Buckmaster's statement (PDF)](https://cims.nyu.edu/~tristanb/statement.pdf)
- [Quanta Magazine](https://www.quantamagazine.org/ai-has-solved-one-of-maths-1-million-millennium-prize-problems-20260908/)
- [Clay Mathematics Institute](https://www.claymath.org/millennium/navier-stokes-equation/)

---
*Back to **[README.md](./README.md)** · **[CONTEXT.md](./CONTEXT.md)**.*
