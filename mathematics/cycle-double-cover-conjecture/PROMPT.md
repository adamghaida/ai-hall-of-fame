# 🤖 Explore this with AI: the claimed proof of the Cycle Double Cover Conjecture

Paste the prompt below into your favorite AI assistant (Claude, ChatGPT, Gemini, or a local model). If your assistant can browse the web, tell it to read the sources first. The point is a clear, honest, grounded explanation of what happened and why it mattered.

> OpenAI published a three-page proof of a graph-theory conjecture open since the 1970s, attributed entirely to a model running 64 subagents for under an hour. It is a proof *claim*: credible, machine-checked in Lean, expounded by two senior graph theorists, and still not peer reviewed.

---

```text
You are a sharp, honest math and AI explainer. Walk me through a specific, real AI result so that I actually understand it, not just the headline.

Topic: On July 10, 2026, OpenAI published a three-page proof of the Cycle Double Cover Conjecture, along with the prompt that produced it. OpenAI attributes the mathematics entirely to GPT-5.6 Sol Ultra, which ran up to 64 concurrent subagents and finished in just under an hour.

Please cover, in plain language a curious non-expert can follow:
1. What the cycle double cover conjecture actually says. Define bridgeless graph, cycle, and "covers every edge exactly twice", and give a small worked example (a planar graph, where face boundaries make the answer obvious). Explain why the general case was considered hard, and which special cases were already known.
2. The shape of the published argument: reduce to cubic graphs, use the Jaeger-Kilpatrick 8-flow theorem to get a nowhere-zero flow valued in the group F_2^3, turn that flow into a two-element subset of the group at each edge so that each group element shows up zero or two times at every vertex, and then show the compatibility conditions form a solvable linear system over F_2. Explain in what sense this is "elementary" and why several commentators said it could have been found in the 1980s.
3. What the released prompt did, and why it is arguably as interesting as the proof: precise definitions, an explicit list of what would NOT count as a solution, a mandate for a diverse portfolio of independent approaches across up to 64 agents, deliberate suppression of premature convergence, adversarial checking agents, a ban on searching the web for a solution to this specific conjecture, and an instruction to keep going for at least eight hours before giving up.
4. The verification picture as of August 2026, stated precisely and without inflation:
   - No journal peer review, and no formal declaration by the community that the conjecture is settled.
   - A sorry-free Lean formalization published by OpenAI at github.com/openai/cdc-lean, whose endpoint theorem kernel-checks with only the three standard classical axioms. Explain what a sorry-free Lean proof does and does not guarantee, especially the risk that the formal statement subtly differs from the intended conjecture.
   - Two independent expository write-ups by senior graph theorists, Jim Geelen and Sang-il Oum, neither of whom reports a gap.
   - Thomas Bloom's assessment: a very nice, short, elementary proof, but with missing citations, notably to a 1983 paper by Bermond, Jackson and Jaeger.
5. Why the missing-citation criticism matters beyond politeness: it makes it hard to tell how much of the result is genuinely new versus recombined from the existing literature.
6. What a skeptical graph theorist would still want before calling this settled, and what the strongest counterarguments to the skeptic are.

Ground your answer in these sources (read them if you can, and cite them as you go):
- OpenAI's proof PDF: https://cdn.openai.com/pdf/04d1d1e4-bc75-476a-97cf-49055cd98d31/cdc_proof.pdf
- OpenAI's prompt PDF: https://cdn.openai.com/pdf/04d1d1e4-bc75-476a-97cf-49055cd98d31/cdc_prompt.pdf
- Lean formalization: https://github.com/openai/cdc-lean
- Jim Geelen's exposition: https://arxiv.org/abs/2607.15399
- Sang-il Oum's exposition: https://arxiv.org/abs/2607.16356
- Reporting with Thomas Bloom's assessment: https://the-decoder.com/openais-gpt-5-6-sol-ultra-reportedly-solves-a-50-year-old-math-problem-in-under-an-hour/

Be concrete, clearly separate confirmed facts from unverified claims, and if you are unsure about a detail, say so instead of guessing. Do not describe the conjecture as "solved" without the caveats.
```

## Bonus: have the agent check the proof

The proof is three pages of elementary algebra, which makes it an unusually good target for an assistant to actually audit rather than summarize. Try this:

```
Read https://cdn.openai.com/pdf/04d1d1e4-bc75-476a-97cf-49055cd98d31/cdc_proof.pdf line by line and audit it as a referee, not as a summarizer.

For each step, state the claim, then either justify it or flag it:
1. The reduction to loopless cubic multigraphs (cited to Jaeger). Does anything break for disconnected graphs, cut vertices, parallel edges, or 2-cycles? Does the reduction ever introduce a bridge?
2. Lemma 2.1: given each edge a two-element subset P_e of Gamma = F_2^3 such that at every vertex each group element appears zero or two times, the sets M_s = {e : s in P_e} are disjoint unions of cycles and their components form a cycle double cover. Check the exact-two multiplicity claim carefully, including edges whose two occurrences land in the same M_s or in components of the same M_s.
3. The local construction at each vertex (equations 2 and 3) and the claim that each vector occurs in exactly zero or two of the three local sets.
4. Lemma 2.2, the solvability of t_u + t_v + eps_e f(e) = d_e over all edges, and the duality argument that reduces it to conditions (5) and (6). Verify the parity argument at the end, where each edge with eta_e nonzero is counted twice.

Then do three independent cross-checks:
- Compare against Jim Geelen's write-up (https://arxiv.org/abs/2607.15399) and Sang-il Oum's exposition (https://arxiv.org/abs/2607.16356). Oum states he modified two parts: he made the choice of two values at each edge symmetric, and he replaced the dual-vector-space argument with the fact that a matrix's column space is the orthogonal complement of its left null space. Do those modifications repair anything, or are they purely presentational?
- Write and run a small program that, for the Petersen graph and a handful of random bridgeless cubic graphs, follows the construction explicitly: find a nowhere-zero F_2^3 flow, build the sets P_e, extract the M_s, and assert that every edge is covered exactly twice. Report any graph where it fails.
- Clone https://github.com/openai/cdc-lean and check the endpoint theorem `CDCLean.cycleDoubleCover_of_bridgeless` in `CDCLean/Main.lean`. Read the Lean definitions of "cycle", "bridgeless", and "cycle double cover" and say explicitly whether the formal statement matches the classical conjecture, or whether any definition is weaker than intended. Then run the repo's own audit (`lake env lean CDCLean/Audit.lean`) and confirm only `propext`, `Classical.choice`, and `Quot.sound` appear.

Finish with a verdict: no gaps found, gaps found (list them precisely), or unable to determine (say what you would need).
```

---

## Sources
- [A proof of the cycle double cover conjecture (OpenAI, PDF)](https://cdn.openai.com/pdf/04d1d1e4-bc75-476a-97cf-49055cd98d31/cdc_proof.pdf)
- [The full prompt used (OpenAI, PDF)](https://cdn.openai.com/pdf/04d1d1e4-bc75-476a-97cf-49055cd98d31/cdc_prompt.pdf)
- [openai/cdc-lean, the Lean formalization](https://github.com/openai/cdc-lean)
- [Jim Geelen, "OpenAI's proof of the Cycle Double Cover Theorem" (arXiv:2607.15399)](https://arxiv.org/abs/2607.15399)
- [Sang-il Oum, "A proof of the cycle double cover conjecture by OpenAI: An exposition" (arXiv:2607.16356)](https://arxiv.org/abs/2607.16356)
- [The Decoder's report, including Thomas Bloom's assessment](https://the-decoder.com/openais-gpt-5-6-sol-ultra-reportedly-solves-a-50-year-old-math-problem-in-under-an-hour/)

---
*Back to **[README.md](./README.md)** · **[CONTEXT.md](./CONTEXT.md)**.*
