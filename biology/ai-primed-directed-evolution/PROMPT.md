# 🤖 Explore this with AI: AI-redesigned starting points make laboratory evolution work better

Paste the prompt below into your favorite AI assistant (Claude, ChatGPT, Gemini, or a local model). If your assistant can browse the web, tell it to read the sources first. The point is a clear, honest, grounded explanation of what happened and why it mattered.

> Redesigning an enzyme with a neural network before evolving it, so it has stability to spare, produced a better end product than evolving the natural enzyme ever did.

---

```text
You are a sharp, honest science explainer. Walk me through a specific, real result in protein engineering so that I actually understand it, not just the headline.

Topic: "AI-redesigned starting points and outcomes enhance protein evolution", Krasnow et al., David Liu's lab at the Broad Institute, published in Nature on July 22, 2026.

Please cover, in plain language a curious non-expert can follow:
1. What directed evolution is, what PACE (phage-assisted continuous evolution) adds to it, and why the choice of starting protein matters so much. In particular, explain the stability-versus-mutation tradeoff: why accumulating useful mutations tends to destabilize a protein, and why that puts a ceiling on how far evolution can go.
2. What ProteinMPNN actually does. It is an "inverse folding" model: given a 3D structure, it proposes amino acid sequences that should fold into it. Explain why that is a different and easier task than designing a new function, and why using AI for stability rather than function is the clever part of this result.
3. What the experiment showed. The redesigned enzymes were already better before any evolution (78% of 74 BoNT/E designs stayed active, top variants at 1.7-2.8x wild-type catalytic efficiency, 24-fold better expression, melting points up to 59.5 C, about 16% sequence divergence from the natural protein). Then, after evolving both toward cutting human ataxin-2, the AI-primed lineage ended up 79-fold better than the best lineage evolved from the natural enzyme.
4. Why researchers care about programmable proteases at all, and what "proteome editing" means as a complement to genome editing.
5. The honest caveats. This is one enzyme family, and the authors flag generalization to unrelated families as the open question. A protease that works in an assay is far from a therapy: delivery, immune recognition, and off-target cutting are unaddressed. And critically, the AI did not evolve anything. It produced a sturdier starting material, and laboratory evolution still did the functional search.

Ground your answer in these sources (read them if you can, and cite them as you go):
- Nature paper: https://www.nature.com/articles/s41586-026-10820-0
- Broad Institute writeup: https://www.broadinstitute.org/news/combining-ai-laboratory-evolution-yields-improved-proteins
- Phys.org coverage: https://phys.org/news/2026-07-combining-ai-protein-laboratory-evolution.html
- News-Medical summary: https://www.news-medical.net/news/20260724/AI-redesign-helps-enzymes-evolve-beyond-natural-limits.aspx

Be concrete, use real numbers where they matter, clearly separate what the paper demonstrated from what it merely suggests, and if you are unsure about a detail, say so instead of guessing.
```

## Bonus: pin down the number

The most-quoted figure in coverage of this paper is the 79-fold improvement, and sources describe it slightly differently (some as greater specificity for ataxin-2, some as better cutting of it). Have a capable assistant resolve it:

```
Read the Nature paper "AI-redesigned starting points and outcomes enhance protein evolution" (DOI 10.1038/s41586-026-10820-0) and tell me exactly what the 79-fold figure measures: is it catalytic activity on ataxin-2, selectivity against off-target substrates, or something else? What is the comparison baseline, and in what assay? Then tell me how many enzyme families the paper actually tested this approach on, and quote what the authors say about whether it should generalize.
```

---

## Sources
- [Nature paper (DOI 10.1038/s41586-026-10820-0)](https://www.nature.com/articles/s41586-026-10820-0)
- [Broad Institute writeup](https://www.broadinstitute.org/news/combining-ai-laboratory-evolution-yields-improved-proteins)
- [Phys.org coverage](https://phys.org/news/2026-07-combining-ai-protein-laboratory-evolution.html)
- [News-Medical summary](https://www.news-medical.net/news/20260724/AI-redesign-helps-enzymes-evolve-beyond-natural-limits.aspx)

---
*Back to **[README.md](./README.md)** · **[CONTEXT.md](./CONTEXT.md)**.*
