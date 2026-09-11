# 🤖 Explore this with AI: AlphaProof Nexus

Paste the prompt below into your favorite AI assistant (Claude, ChatGPT, Gemini, or a local model). If your assistant can browse the web, tell it to read the sources first. The point is a clear, honest, grounded explanation of what happened and why it mattered.

> A Lean-checked proof-search agent, 353 open Erdős problems, nine solved, every proof public and compilable, and the number that matters is the denominator.

---

```text
You are a sharp, honest math and AI explainer. Walk me through a specific, real AI achievement so that I actually understand it, not just the headline.

Topic: In May 2026 Google DeepMind published "Advancing Mathematics Research with AI-Driven Formal Proof Search" (arXiv 2605.22763), describing AlphaProof Nexus, an agent framework in which Gemini 3.1 Pro subagents edit a Lean file until the compiler accepts a sorry-free proof. Run on all 353 Erdős problems formalized in DeepMind's Formal Conjectures repository, it solved 9 (problems 12(i), 12(ii), 125, 138, 152, a variant of 26, 741(i), 741(ii), 846) at a few hundred dollars each, and proved 44 of 492 autoformalized OEIS conjectures. All proofs are in the public repository google-deepmind/alphaproof-nexus-results.

Please cover, in plain language a curious non-expert can follow:
1. How the agent works: proof sketches with sorry, EVOLVE-BLOCK and EVOLVE-VALUE markers, the "Ralph loop" of LLM edits and compiler feedback, and what the full-featured agent adds (an evolutionary population of sketches with Elo ratings, and the original AlphaProof as a tool).
2. Why a Lean proof is different from a natural-language proof from a chatbot, and what it does and does not guarantee (correctness of the formal statement versus fidelity to what Erdős meant).
3. The ablation result: the basic agent solved all nine problems too, weaker models solved none, standalone AlphaProof solved none. What does that say about where the capability lives?
4. The two amended statements: for problems 125 and 741(i) the agent first proved a "natural density" reading, Thomas Bloom pointed out Erdős meant upper or lower density, and the statements were fixed. Explain why this cuts both ways.
5. How Terence Tao's tracking wiki classifies the nine (some full, some partial, some variants, problems 152 and 846 matched to prior literature), and why the community's 1 to 2 percent success-rate estimate matters more than the headline.
6. The honest caveats: not peer reviewed; company experts validated statement fidelity; OEIS statements were autoformalized by Gemini; cost figures exclude TPU time for AlphaProof and all human effort.
7. What a skeptical mathematician would check first in the repository.

Ground your answer in these primary sources (read them if you can, and cite them as you go):
- The paper: https://arxiv.org/abs/2605.22763
- The Lean proofs and attempted-problem list: https://github.com/google-deepmind/alphaproof-nexus-results
- Tao's tracking wiki: https://github.com/teorth/erdosproblems/wiki/AI-contributions-to-Erd%C5%91s-problems
- Quanta's August 2026 overview: https://www.quantamagazine.org/why-the-legendary-erdos-problems-are-falling-to-ai-20260803/

Be concrete, use real numbers where they matter, and if you are unsure about a detail, say so instead of guessing.
```

## Bonus: have the agent build the proofs

The deliverable is a Lean project, so a coding agent can check it rather than take the paper's word:

```
Clone https://github.com/google-deepmind/alphaproof-nexus-results and do the following:

1. List the files in APNOutputs/ErdosProblems/. There should be nine: erdos_12.parts.i, erdos_12.parts.ii, erdos_125.variants.positive_lower_density, erdos_138.variants.difference, erdos_152, erdos_26.variants.tenenbaum, erdos_741.parts.i, erdos_741.parts.ii, erdos_846. Note which file names carry "variants" or "parts" and explain what that signals about how the problem was formalized.
2. Count the lines in erdos_problems_attempted.txt (the paper says 353 problems were attempted; the file has 352 entries) and report the discrepancy honestly.
3. Open erdos_125.variants.positive_lower_density.lean, print the target theorem, and compare it with the informal statement of Erdős problem 125 at https://www.erdosproblems.com/125. Say whether "positive lower density" matches what the problem page says Erdős asked.
4. Grep every .lean file under APNOutputs/ErdosProblems for `sorry` and `axiom`. Report the counts.
5. If you have a Lean toolchain: install elan, use the toolchain pinned in lean-toolchain, run `lake exe cache get` and then `lake build`. Report success or failure. If the build is too heavy for your machine, say so rather than claiming it passed.
```

---

## Sources
- [*Advancing Mathematics Research with AI-Driven Formal Proof Search* (arXiv 2605.22763)](https://arxiv.org/abs/2605.22763)
- [google-deepmind/alphaproof-nexus-results (GitHub)](https://github.com/google-deepmind/alphaproof-nexus-results)
- [AI contributions to Erdős problems (Tao's wiki)](https://github.com/teorth/erdosproblems/wiki/AI-contributions-to-Erd%C5%91s-problems)
- [Quanta Magazine, August 3, 2026](https://www.quantamagazine.org/why-the-legendary-erdos-problems-are-falling-to-ai-20260803/)

---
*Back to **[README.md](./README.md)** · **[CONTEXT.md](./CONTEXT.md)**.*
