# A claimed proof of the Cycle Double Cover Conjecture, produced by GPT-5.6 Sol Ultra

**Field:** 🧮 Mathematics  ·  **When:** July 2026

> OpenAI published a three-page proof of a graph-theory conjecture open since the 1970s, attributed entirely to a model running 64 subagents for under an hour. It is a proof *claim*: credible, machine-checked in Lean, expounded by two senior graph theorists, and still not peer reviewed.

## What happened
On **July 10, 2026**, OpenAI researcher Ethan Knight posted that **GPT-5.6 Sol Ultra**, made generally available the previous day, had "produced a proof of the 50-year-old Cycle Double Cover Conjecture using 64 subagents in just under one hour." OpenAI published two PDFs alongside the post: the [proof](https://cdn.openai.com/pdf/04d1d1e4-bc75-476a-97cf-49055cd98d31/cdc_proof.pdf) and the [exact prompt](https://cdn.openai.com/pdf/04d1d1e4-bc75-476a-97cf-49055cd98d31/cdc_prompt.pdf) that produced it.

The **cycle double cover conjecture** asks whether every finite bridgeless graph has a multiset of cycles in which every edge appears exactly twice. The proof PDF credits the conjecture to Tutte, Itai and Rodeh, Szekeres (1973), and Seymour (1979); it had resisted proof for decades and was known only for special classes such as planar graphs, 3-edge-colourable cubic graphs, and graphs with no Petersen subdivision.

The argument is **three pages long and elementary**. It reduces to loopless cubic graphs, applies the Jaeger-Kilpatrick 8-flow theorem to get a nowhere-zero flow valued in Γ = F₂³, converts that flow into an assignment of a two-element subset of Γ to each edge such that each group element appears zero or two times at every vertex, and shows the resulting compatibility system is solvable by an F₂ duality argument. The paper's author line is simply "OPENAI", with a statement of AI use saying the proof is entirely due to GPT-5.6 Sol Ultra, with the writeup done in Codex using GPT-5.6 Sol.

The released prompt is as much of the story as the proof. It defines the objects precisely, spells out what would *not* count (special cases, partial covers, reductions to other conjectures, computational verification up to a size bound), tells the model to run up to 64 concurrent agents across deliberately diverse approach families, keeps agents independent so they do not all collapse onto the same attractive reduction, runs adversarial agents against every candidate, forbids searching the web for a solution to the conjecture itself, and instructs the model to spend at least eight hours before considering giving up.

**Status.** This is a claim, not a settled theorem. It has not been peer reviewed or published in a journal. What has happened since is nonetheless substantial: OpenAI published a **sorry-free Lean formalization** ([openai/cdc-lean](https://github.com/openai/cdc-lean)) whose endpoint theorem `CDCLean.cycleDoubleCover_of_bridgeless` kernel-checks against pinned Lean and Mathlib versions using only the three standard classical axioms; **Jim Geelen** (Waterloo) and **Sang-il Oum** (IBS Discrete Mathematics Group) each posted independent expository write-ups of the argument within a week; and a follow-up research paper already builds on the linear system the proof introduces. No published gap or refutation has surfaced as of early August 2026.

## Why it matters
If the proof holds, this is an AI system closing a named, decades-old conjecture from the standard lists of open problems in graph theory, in an hour, from a single prompt, with the mathematics attributed to the model rather than to a human collaborator using it as an assistant. That is a different category from AI-assisted results where a mathematician supplies the key idea.

Two things temper it, and both are load-bearing. First, **nobody has certified this as accepted mathematics.** Peer review has not happened. The strongest evidence is the Lean formalization, which is real but was produced by OpenAI itself, so someone still has to confirm the formal statement means what the conjecture means. The cycle double cover conjecture has a long history of claimed proofs that later collapsed, and caution is the correct default. Second, Thomas Bloom of the University of Manchester, who called it "a very nice proof" that is "short, elementary, and could have been discovered in the 1980s," also criticized the write-up for omitting citations, in particular to a 1983 paper by Bermond, Jackson and Jaeger whose ideas he says underlie the core reduction. That is a recurring failure mode of AI-generated mathematics: recombining known machinery without attribution, which makes it harder to tell genuine novelty from retrieval.

The honest summary is that this is the most checkable AI proof claim on a famous open problem to date, and it is still a claim.

## Sources
- [A proof of the cycle double cover conjecture (OpenAI, PDF)](https://cdn.openai.com/pdf/04d1d1e4-bc75-476a-97cf-49055cd98d31/cdc_proof.pdf)
- [The full prompt used (OpenAI, PDF)](https://cdn.openai.com/pdf/04d1d1e4-bc75-476a-97cf-49055cd98d31/cdc_prompt.pdf)
- [Ethan Knight's announcement (X, July 10, 2026)](https://x.com/__eknight__/status/2075643450196971805)
- [openai/cdc-lean, the Lean formalization](https://github.com/openai/cdc-lean)
- [Jim Geelen, "OpenAI's proof of the Cycle Double Cover Theorem" (arXiv:2607.15399)](https://arxiv.org/abs/2607.15399)
- [Sang-il Oum, "A proof of the cycle double cover conjecture by OpenAI: An exposition" (arXiv:2607.16356)](https://arxiv.org/abs/2607.16356)
- [The Decoder's report, including Thomas Bloom's assessment](https://the-decoder.com/openais-gpt-5-6-sol-ultra-reportedly-solves-a-50-year-old-math-problem-in-under-an-hour/)
- [Hacker News discussion (538 points)](https://news.ycombinator.com/item?id=48863490)

---
*In this folder: **[PROMPT.md](./PROMPT.md)** (a prompt to explore it with AI) · **[CONTEXT.md](./CONTEXT.md)** (background & caveats). Part of the [AI Hall of Fame](../../README.md) → [🧮 Mathematics](../).*
