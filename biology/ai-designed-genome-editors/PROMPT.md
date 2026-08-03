# 🤖 Explore this with AI: SynTnpBs, AI-designed compact genome editors

Paste the prompt below into your favorite AI assistant (Claude, ChatGPT, Gemini, or a local model). If your assistant can browse the web, tell it to read the sources first. The point is a clear, honest, grounded explanation of what happened and why it mattered.

> An inverse-folding model redesigned a miniature CRISPR-like nuclease. Hundreds of the synthetic versions worked, some edited human cells better than the enzyme evolution produced, and cryo-EM caught them in the act.

---

```text
You are a careful, hype-free molecular biology explainer. Walk me through a specific, real AI-in-biology result so that I actually understand what was and was not achieved.

Topic: "Structure and evolution-guided design of minimal RNA-guided nucleases", Skopintsev, Esain-Garcia, DeTurk et al. with Jennifer Doudna, published in Science on July 16, 2026 (DOI 10.1126/science.aed6123). The designed enzymes are called SynTnpBs.

Please cover, in plain language a curious non-expert can follow:
1. What TnpB is: a compact transposon-encoded, RNA-guided nuclease that is an evolutionary ancestor of CRISPR-Cas12. Why its small size matters for delivery into cells, and why people want a better version of it.
2. What "inverse folding" means and how ESM-IF1 differs from a structure predictor like AlphaFold. It goes from a 3D shape to candidate sequences, not the other way round.
3. What the "evolution-informed residue constraints" actually did: which positions were frozen (the ones contacting the guide RNA and the target DNA, plus the catalytic core) and which the model was free to rewrite. Explain why that distinction is the whole ballgame for judging how "AI-designed" these proteins are.
4. The experimental funnel and the numbers: a high-throughput bacterial screen of 1,980 designed protein-part combinations, 466 with detectable activity, roughly 8% of those beating the natural reference; then testing in HEK293T human cells and Arabidopsis protoplasts; two variants reaching 46% and 50% editing versus 28% for wild type, and close to fourfold improvement at some human targets. Note that these specific figures come from press coverage (Phys.org, CRISPR Medicine News) of a paywalled paper, not from the abstract.
5. Why the sequence divergence matters: DNA- and RNA-interacting lobes at roughly 83% and 72% identity to natural counterparts, versus prior AI-designed nucleases that stayed above 99% identity. What does it tell us that a protein can be rewritten that far and still work?
6. The cryo-EM part: what the structures of the most divergent variant showed about new stabilizing contacts at the RNA-DNA interface, and why the AAAS release calls them the first experimentally determined structures of AI-designed RNA-guided nucleases. Be precise about how narrow or broad that "first" is.
7. The honest caveats, stated plainly:
   - This is research-stage. There is no therapeutic use and no clinical trial.
   - It is constrained redesign of a natural scaffold, not de novo invention of a new enzyme. Contrast it with RFdiffusion-style de novo protein design.
   - Editing efficiency in cultured cells and plant protoplasts says little about delivery, off-target effects, or durable editing in a whole organism.
   - Screening in bacteria selects for what bacteria can express, which is its own bias.
8. What an independent lab would need to do to confirm this, and what the obvious next experiments are.

Ground your answer in these sources (read them if you can, and cite them as you go):
- Science paper: https://www.science.org/doi/10.1126/science.aed6123
- Innovative Genomics Institute writeup: https://innovativegenomics.org/news/ai-designed-functional-genome-editors/
- AAAS press release: https://www.eurekalert.org/news-releases/1135710
- Phys.org: https://phys.org/news/2026-07-aidesigned-geneediting-enzymes-crispr-toolbox.html
- CRISPR Medicine News: https://crisprmedicinenews.com/news/ai-redesigns-minimal-crispr-nucleases/
- C&EN: https://cen.acs.org/biological-chemistry/gene-editing/ai-nuclease-design-crispr/104/web/2026/07

Be concrete, clearly separate what the paper claims from what press coverage adds, and if you are unsure about a detail, say so instead of guessing.
```

## Bonus: have the agent stress-test the "AI-designed" claim

The interesting argument here is about how much credit the model deserves. Make an assistant argue it out:

```
Read the Science abstract at https://www.science.org/doi/10.1126/science.aed6123 and the IGI writeup at https://innovativegenomics.org/news/ai-designed-functional-genome-editors/.

Then build the strongest case on each side of this question: are SynTnpBs "AI-designed enzymes" or "AI-assisted mutants of a natural enzyme"? Use concrete evidence: which residues were constrained, what fraction of the sequence changed, whether the fold or the guide RNA changed at all, and how the hit rate (466 active out of 1,980 designs) compares to directed evolution or deep mutational scanning campaigns on the same protein family. Finish by saying which framing you find more accurate and why.
```

---

## Sources
- [Science paper: "Structure and evolution-guided design of minimal RNA-guided nucleases"](https://www.science.org/doi/10.1126/science.aed6123)
- [Innovative Genomics Institute writeup](https://innovativegenomics.org/news/ai-designed-functional-genome-editors/)
- [EurekAlert / AAAS press release](https://www.eurekalert.org/news-releases/1135710)
- [Phys.org coverage](https://phys.org/news/2026-07-aidesigned-geneediting-enzymes-crispr-toolbox.html)
- [CRISPR Medicine News coverage](https://crisprmedicinenews.com/news/ai-redesigns-minimal-crispr-nucleases/)
- [C&EN coverage](https://cen.acs.org/biological-chemistry/gene-editing/ai-nuclease-design-crispr/104/web/2026/07)

---
*Back to **[README.md](./README.md)** · **[CONTEXT.md](./CONTEXT.md)**.*
