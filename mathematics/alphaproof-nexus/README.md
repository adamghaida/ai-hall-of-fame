# AlphaProof Nexus: 9 of 353 open Erdős problems and 44 of 492 OEIS conjectures, every proof in Lean

**Field:** 🧮 Mathematics  ·  **When:** May 2026

> Google DeepMind ran a Lean-checked proof-search agent over every formalized open Erdős problem it could find, solved nine, published every proof as compilable Lean code, and reported the cost per solved problem in dollars.

## What happened
On **May 21, 2026**, a 21-author Google DeepMind team led by George Tsoukalas, Anton Kovsharov, Sergey Shirobokov and Swarat Chaudhuri posted *Advancing Mathematics Research with AI-Driven Formal Proof Search*, describing **AlphaProof Nexus**, a framework in which language-model subagents edit a Lean file containing a target theorem with `sorry` in place of the proof, and the Lean compiler checks every edit. The basic agent is a set of independent "Ralph loops" running **Gemini 3.1 Pro** with a search-and-replace tool and compiler feedback. The full-featured agent adds an evolutionary population of proof sketches rated by Gemini 3.0 Flash and sampled with P-UCB, plus the original **AlphaProof** reinforcement-learning prover as a callable tool.

The headline evaluation: the full agent was run on all **353** Erdős problems then formalized in DeepMind's open-source Formal Conjectures repository, with a cap of 3000 episodes each, and **solved 9**, "including two questions that had been open for 56 years," at "a few hundred dollars" of inference per solved problem. The nine, as listed in the paper's Table 1 and the results repository, are problems **12(i), 12(ii), 125, 138, 152, 26 (a variant), 741(i), 741(ii) and 846**. After each solve, "experts on our team validated that the Lean statement faithfully captured the original conjecture." Separately the agent proved **44 of 492** open conjectures autoformalized by Gemini from the **OEIS**, after a manual review confirmed those 44 were correctly formalized and previously unproven; to guard against misformalization, the agent first had to prove "test lemmas" checking the first few terms of each sequence. The paper also reports an open question on Hilbert functions in algebraic geometry resolved, an improved convergence bound in convex optimization via a new parameter schedule, and a 1996 graph-theory conjecture from the Graffiti conjecturing program proved.

In a post-hoc ablation, the basic agent, with no AlphaProof and no evolution, solved all nine Erdős problems too, "though at a higher cost on the harder problems." Runs with weaker models (Gemini 3.0 Flash, Gemini 3.1 Flash-Lite) solved none, and standalone AlphaProof with about 64 TPU-hours per problem solved none. All Lean proofs and selected prose proofs are public in [`google-deepmind/alphaproof-nexus-results`](https://github.com/google-deepmind/alphaproof-nexus-results), buildable with `lake build`, together with the list of all 352 attempted problem statements so the failures are visible.

## Why it matters
It is the first large-scale, systematic measurement of what formal proof search can do on research-level open problems, with the denominator published. Nine out of 353 (about 2.5 percent) is a small number, and the authors present it as one: the remaining problems failed, the successes are elementary, and Terence Tao's public estimate that AI's real success rate on Erdős problems sits around one to two percent matches it. What is new is the verification story. Every solved problem ships as a Lean file, the attempted list is public, misformalizations the agent found in the literature are reported, and the agent's own proofs of "wrong" readings of problems 125 and 741(i) were used to detect that the informal statements were ambiguous. The finding that a simple LLM-plus-compiler loop matched the elaborate agent points, in the authors' words, to "an ongoing shift from specialized trained systems toward simple agentic loops as LLMs become more capable."

Several of the nine have since been matched to prior literature or reclassified as partial on Tao's wiki. See **[CONTEXT.md](./CONTEXT.md)**.

## Sources — the record of the discovery
- [Tsoukalas, Kovsharov, Shirobokov et al., *Advancing Mathematics Research with AI-Driven Formal Proof Search* (arXiv 2605.22763, v1 May 21, v2 June 8, 2026)](https://arxiv.org/abs/2605.22763)
- [Lean proofs and prose proofs: google-deepmind/alphaproof-nexus-results (GitHub)](https://github.com/google-deepmind/alphaproof-nexus-results)
- [AI contributions to Erdős problems (Tao's wiki, frozen June 30, 2026)](https://github.com/teorth/erdosproblems/wiki/AI-contributions-to-Erd%C5%91s-problems)
- [The Decoder coverage, May 25, 2026](https://the-decoder.com/google-deepminds-alphaproof-nexus-solves-decades-old-math-problems-for-a-few-hundred-dollars/)
- [Quanta Magazine, "Why the Legendary Erdős Problems Are Falling to AI" (August 3, 2026)](https://www.quantamagazine.org/why-the-legendary-erdos-problems-are-falling-to-ai-20260803/)

---
*In this folder: **[PROMPT.md](./PROMPT.md)** (a prompt to explore it with AI, including how to build the Lean proofs) · **[CONTEXT.md](./CONTEXT.md)** (background & caveats). Part of the [AI Hall of Fame](../../README.md) → [🧮 Mathematics](../).*
