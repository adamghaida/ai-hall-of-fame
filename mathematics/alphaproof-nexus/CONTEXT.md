# 📚 Context: AlphaProof Nexus and formal proof search on open problems

## What the system is
AlphaProof Nexus is not a new model. It is an agent framework around frontier LLMs and the Lean compiler. The input is a "proof sketch": a Lean file with the target theorem, its definitions and imports, and the proof replaced by `sorry`, annotated with `EVOLVE-BLOCK` markers (where the agent may add lemmas and proof steps) and `EVOLVE-VALUE` markers (expressions the agent may change, e.g. an answer to be determined). A run ends when the file compiles with no `sorry`. The paper compares four agents: (A) a basic set of independent Gemini 3.1 Pro subagents with compiler feedback; (B) basic plus AlphaProof as a tool; (C) basic plus an evolutionary population database with Elo ratings; (D) the full agent with both. Agent (D) was the instrument for the open-problem sweep, chosen for its competition-benchmark performance; the ablation then showed (A) solved all nine Erdős problems as well.

## The nine Erdős problems
From the paper's Table 1 and the repository file names: 12(i) and 12(ii), 125 (variant with positive lower density), 138 (a "difference" variant), 152, 26 (a "Tenenbaum" variant; the paper marks 26 with a dagger as "a more general variant of a question posed by Erdős, but was not posed by Erdős himself"), 741(i) and 741(ii), and 846. The paper's own account of two of them is instructive: for 125 and 741(i), the agent first proved versions using "natural density," which "served as a diagnostic for the correct interpretation of Erdős' original phrasing"; after Thomas Bloom observed that Erdős likely meant upper (or lower) density, the formal statements were amended and the agent solved the corrected versions.

## How Tao's wiki classifies them (data as of June 30, 2026)
The wiki does not treat all nine as full new solutions. Its rows for the "DeepMind prover agent" record:
- **125**: full solution (Lean), March 30, 2026, after an earlier "solution to variant problem" in February.
- **741**: full solution (Lean) on April 16, after a partial result on March 31; an OpenAI internal model independently solved the second part the same day.
- **152**: full solution (Lean) on April 3, but filed under "AI alongside literature" with a partial match to Erdős, Sárközy and Sós (1994), found the same day.
- **846**: full solution (Lean) on February 21 to 25, with an OpenAI internal model solving it independently; literature match to Reiher, Rödl and Sales (2024), marked as partial and not similar.
- **26**: filed under "AI building on literature": a solution to a stronger problem, with a full prior result by Ruzsa recorded.
- **12**: partial result (Lean), with Erdős and Sárközy (1970) as partial literature.
- **138**: partial result (Lean), April 10.
So by the wiki's accounting, some of the nine are full solutions, some are partial results or solutions of variants, and two were matched to existing literature after the fact. The dates also show the solves accumulated between February and April 2026, before the paper's May release.

## People
The paper lists 21 authors, 19 at Google DeepMind plus Gergely Bérczi (Aarhus) and Codrut Grosu (Google), with Pushmeet Kohli and Swarat Chaudhuri as corresponding authors. Thomas Bloom (erdosproblems.com) is credited for the density observation. Terence Tao's wiki is cited by the paper as its tracking source.

## Why it's in the Hall of Fame
Most AI-mathematics announcements are single results. This one is a benchmark-style sweep with a published denominator, published failures, machine-checked outputs, cost figures, and an ablation that undermines the authors' own most complex design. It is the reference point against which "AI solved N Erdős problems" claims can now be calibrated, and its methodology (test lemmas against misformalization, agent-detected ambiguities) is as much the contribution as the nine solves.

## Honest caveats
- **The success rate is low and the successes are elementary.** 9 of 353 is about 2.5 percent, and Tao's wiki disclaimers warn that raw counts across methodologies are "comparing apples to oranges" because Erdős problems span orders of magnitude in difficulty. The paper's own failure analysis says the agent struggles on problems requiring substantial new theory.
- **Two statements were amended after the agent proved the "wrong" version.** For 125 and 741(i) the density interpretation was changed after the fact. The paper frames this as a feature (detecting misformalizations), which is fair, but it also means the "353 formal statements" were not all faithful to Erdős's intent when the sweep began, and the published statement-fidelity check is by the team's own experts.
- **Two later matched to literature; some are partial or variants.** Per the wiki (above), 152 and 846 have literature matches, 26 is a variant not posed by Erdős, and 12 and 138 are recorded as partial results. The headline "9 open Erdős problems" is the paper's framing; the community's tally is more nuanced.
- **Not peer reviewed.** An arXiv preprint (v2 June 8, 2026) with a company's own experts validating statements. The Lean files are the checkable part; anyone can run `lake build`.
- **OEIS count depends on autoformalization by Gemini.** The 492 conjectures were formalized by a model; 44 proofs survived a manual review of formalization correctness. The paper does not say how many of the 492 formalizations were wrong, only that test lemmas were required as a guard.
- **Cost figures are inference only** and exclude AlphaProof's TPU cost in the configurations that used it (the paper says so), plus all development and human review time.

## Sources
- [*Advancing Mathematics Research with AI-Driven Formal Proof Search* (arXiv 2605.22763)](https://arxiv.org/abs/2605.22763)
- [google-deepmind/alphaproof-nexus-results (GitHub)](https://github.com/google-deepmind/alphaproof-nexus-results)
- [AI contributions to Erdős problems (Tao's wiki)](https://github.com/teorth/erdosproblems/wiki/AI-contributions-to-Erd%C5%91s-problems) · [Disclaimers page](https://github.com/teorth/erdosproblems/wiki/Disclaimers-and-caveats)
- [The Decoder, May 25, 2026](https://the-decoder.com/google-deepminds-alphaproof-nexus-solves-decades-old-math-problems-for-a-few-hundred-dollars/)
- [Quanta Magazine, August 3, 2026](https://www.quantamagazine.org/why-the-legendary-erdos-problems-are-falling-to-ai-20260803/)

Related entries: [AlphaProof & AlphaGeometry 2 at IMO 2024](../alphaproof-alphageometry-imo-2024/) · [AlphaEvolve](../alphaevolve-algorithm-discovery/) · [six Erdős problems solved with GPT-5.6](../erdos-problems-gpt-5.6/) · [Astra's ten proofs](../astra-ten-proofs/)

---
*Back to **[README.md](./README.md)** · **[PROMPT.md](./PROMPT.md)**.*
