# 📚 Context: the Navier–Stokes blowup claim

## The problem
The incompressible Navier–Stokes equations describe how the velocity field of a viscous fluid evolves. Engineers solve them numerically every day; what nobody has been able to prove is whether, in three dimensions, a perfectly smooth starting flow always stays smooth, or whether it can concentrate so violently that the velocity becomes infinite at some point in finite time (a **singularity**, or **blowup**). The Clay Mathematics Institute made this one of its seven Millennium Prize Problems in 2000. Fefferman's official statement offers four ways to win: prove global smoothness (**A** on ℝ³, **B** on the periodic torus 𝕋³) or prove breakdown (**C** on ℝ³, **D** on 𝕋³). Crucially, the breakdown statements allow a **smooth external force** to be applied to the fluid.

The other Millennium problems are, as of September 2026, exactly where they were: only the Poincaré conjecture (Perelman, 2003) has ever been resolved.

## The mathematical lineage
This did not come out of nowhere. **Diego Córdoba** (ICMAT, Madrid) and **Luis Martínez-Zoroa** (CUNEF) spent several years building forced-blowup constructions for simpler fluid models, first with rough forcing. Charles Fefferman called them "the heroes of the story", and Buckmaster wrote that Martínez-Zoroa "deserves a Fields Medal" for it.

**Tristan Buckmaster** (NYU) and **Levent Alpöge** (Anthropic; also the mathematician behind the [Jacobian conjecture counterexample](../jacobian-conjecture-counterexample/)) took that programme and, with heavy use of Claude, Codex and GPT-5.6 Sol, pushed it to smooth forcing and up the ladder of models: incompressible porous media (with Matei Coiculescu), 2D Boussinesq, and finally 3D **Euler** (the inviscid case) on **August 15, 2026**, Lean-verified on **August 22**. They say they also have a blowup result for hypo-dissipative Navier–Stokes whose Lean check had not finished. Their preprints and Lean code went public on **September 7**. Buckmaster is blunt about their quality: the first model-generated proof was "the most horrendous I have ever read", and he describes the Euler write-up as "AI slop" that they had hoped to spend weeks rewriting before being pressured into releasing.

Tao's assessment of that work is the most useful calibration available: heavily AI-assisted, with the AI doing more refinement than conceptual discovery, and the key ideas traceable to Córdoba and Martínez-Zoroa.

## What OpenAI claims
A forced finite-time blowup for the full 3D Navier–Stokes equations, on both ℝ³ and 𝕋³, from smooth finite-energy data at rest, i.e. statements **C and D**. Produced by an unreleased internal model running as roughly 10,000 agents between September 1 and 5, formalized in Lean, published September 8 with a 166-page manuscript. OpenAI is not claiming the prize.

## Honest caveats
- **Forced, not unforced.** The Clay statement technically allows forcing in C and D, and OpenAI's write-up says the result resolves those statements. But the community's real question is whether Navier–Stokes breaks down *on its own*. Tao listed both forced and unforced Navier–Stokes blowup as open on September 7; the forced one is what OpenAI claims to have closed. The unforced problem is untouched.
- **Not independently verified.** As of September 10, 2026, no outside mathematician has publicly vouched for the OpenAI proof, and the Clay Institute lists the problem as unsolved. Its president, Martin Bridson, promised a "deliberately unhurried" and "absolutely rigorous" review.
- **What Lean does and does not buy you.** A passing `lake build` proves the *formal statement* in the repository. Whether that statement faithfully encodes "finite-time blowup for 3D Navier–Stokes with smooth forcing and smooth finite-energy initial data" is a human judgement, and the fluids community has only just started reading. The repository ships "comparator challenge" files so an outside checker can confirm the shipped proofs discharge the stated theorems.
- **Days old.** Nothing here is peer reviewed. Expect corrections, re-statements, and possibly a retraction of some sub-claim before the picture is settled.
- **Provenance.** Buckmaster's statement and OpenAI's response disagree on how independent the OpenAI effort was. Both agree the OpenAI run began in the first days of September, after rumours of the Buckmaster–Alpöge result were circulating; OpenAI says its agents never saw their work and used different proofs, while conceding it "cannot rule out" that de-identified usage data influenced its models. Buckmaster explicitly says he is "not accusing anyone of anything" and has not seen OpenAI's proof.
- **Significance versus insight.** Tao's wider worry: an autonomous system closing a famous problem can "strip-mine" it, producing a certificate without the understanding that makes such problems valuable, and turning a research programme into "a viral social media post advertising some benchmark progress". Singularities in an idealized continuum model also say nothing directly about real fluids, which are made of molecules.

## What to watch
Whether outside fluid dynamicists accept the Lean statement as the right one; whether the unforced case falls next (Buckmaster and Alpöge think their hypo-dissipative result is "suggestive of a path to unforced Euler"); and what the Clay Institute eventually says.

## Sources
- [OpenAI announcement](https://openai.com/index/navier-stokes-solution/)
- [Lean certificates (GitHub)](https://github.com/openai/NavierStokesAndEuler)
- [Terence Tao's post on the Buckmaster–Alpöge results](https://terrytao.wordpress.com/2026/09/07/finite-time-blowup-with-smooth-forcing-term-for-the-incompressible-porous-medium-boussinesq-and-incompressible-euler-equations/)
- [Tristan Buckmaster's statement (PDF)](https://cims.nyu.edu/~tristanb/statement.pdf)
- [Quanta Magazine](https://www.quantamagazine.org/ai-has-solved-one-of-maths-1-million-millennium-prize-problems-20260908/)
- [Scientific American](https://www.scientificamerican.com/article/openai-claims-blockbuster-math-breakthrough-amid-swirl-of-controversy/)
- [Fortune](https://fortune.com/2026/09/08/openai-says-it-cracked-navier-stokes-math-grand-challenge-buckmaster-accusation-cheating-intimidation-tao-lament/)
- [Simon Willison's notes on the announcement and the data-use question](https://simonwillison.net/2026/Sep/8/on-navier-stokes/)
- [Clay Mathematics Institute problem page](https://www.claymath.org/millennium/navier-stokes-equation/)

---
*Back to **[README.md](./README.md)** · **[PROMPT.md](./PROMPT.md)**.*
