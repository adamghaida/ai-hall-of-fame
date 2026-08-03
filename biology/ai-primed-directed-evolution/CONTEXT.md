# 📚 Context: AI-redesigned starting points for laboratory evolution

**The bottleneck this addresses.** Directed evolution won Frances Arnold a share of the 2018 Nobel Prize in Chemistry, and the basic loop has not changed: mutate a protein, select the variants that do more of what you want, repeat. David Liu's lab automated the loop with **PACE**, phage-assisted continuous evolution, which links the protein's desired function to the reproduction of a bacteriophage and can run many generations a day with little human intervention.

What has always constrained the loop is where it starts. Mutations that add new function are frequently destabilizing, so a protein under evolutionary pressure is spending a budget it cannot see. Run out, and it stops folding. Practitioners have known this for years; the usual workaround is to stabilize a scaffold by hand, which is slow and requires knowing which residues to touch.

**Why inverse folding is the right tool here.** [ProteinMPNN](https://www.science.org/doi/10.1126/science.add2187), from David Baker's lab, solves the inverse folding problem: given a backbone structure, propose sequences that fold into it. That is a narrower question than "design me an enzyme that does X", and models are correspondingly more reliable at it. The insight in this paper is to point the model at the part of the problem where it is trustworthy, stability and foldability, and leave the functional search to the laboratory. The redesigns diverged roughly 16% from the natural sequence while preserving the fold, which is a far more aggressive rewrite than the handful of substitutions typical of earlier stabilization work.

**The proteins involved.** The scaffolds are the catalytic light-chain domains of botulinum neurotoxins E, F and X. Stripped of the machinery that makes the intact toxin dangerous, these domains are prized in protein engineering for something specific: they cut other proteins at exceptionally precise recognition sequences and persist inside cells far longer than most proteins. Liu's lab had already shown in [Science in 2021](https://doi.org/10.1126/science.abf5972) that PACE can reprogram them to recognize entirely new targets, with selectivity shifts of hundreds to millions of fold. That earlier work is the foundation this one builds on, and it is where the phrase "editing the proteome" comes from: a complement to genome editing that acts on proteins already made rather than on the genes encoding them.

**The target.** Human ataxin-2 (the paper works on residues 1181 to 1201) is implicated in neurodegenerative disease including ALS, which is why it was chosen as something worth being able to cut selectively.

## Why it's in the Hall of Fame
Because the transferable claim is a **method**, not a molecule. Most AI-and-proteins entries in this collection are about a model producing a finished design. This one changes where a decades-old experimental workflow begins, and any lab already doing directed evolution can apply it without treating a model as an oracle. The controlled comparison is what makes it credible: the same evolution campaign, run from a natural starting point and an AI-redesigned one, with the redesigned lineage adapting faster and finishing better.

## Honest caveats
- **One enzyme family.** Three related botulinum protease domains is not a survey. The authors themselves identify generalization to unrelated enzyme families as the thing future work has to establish before this is a scalable framework, and until that happens the result is a strong proof of concept rather than a proven general principle.
- **The AI did not evolve anything.** It produced a more mutation-tolerant starting material. PACE performed the functional search. Coverage that frames this as "AI designed a better enzyme" gets the division of labour backwards, and the significance of the result does not need that exaggeration.
- **The 79-fold figure is reported slightly differently across sources.** News-Medical describes it as greater specificity for ataxin-2 relative to the best wild-type-evolved enzyme; Phys.org describes it as being better at cutting ataxin-2, and Singularity Hub likewise as efficiency at cutting the target. All three agree on the number and the comparison baseline. This entry describes it as better performance on the ataxin-2 target rather than picking one interpretation, and `PROMPT.md` includes a prompt for resolving it against the paper itself.
- **Assay results are not therapeutics.** Selective cutting of a target in the laboratory leaves delivery to the right tissue, immune recognition of a bacterial protein, durability, and off-target cleavage across a whole proteome entirely unaddressed. Nothing here is near a clinic.
- **The paper is paywalled.** The quantitative figures in this entry come from the Broad Institute release and from reputable secondary coverage of the paper rather than from the full text, and the abstract could not be retrieved directly because Nature redirects automated requests to an authentication page. The publication date and author list given here were confirmed against the publisher's Crossref record.

## Sources
- [Nature paper: "AI-redesigned starting points and outcomes enhance protein evolution" (DOI 10.1038/s41586-026-10820-0)](https://www.nature.com/articles/s41586-026-10820-0)
- [Broad Institute: Combining AI with laboratory evolution yields improved proteins](https://www.broadinstitute.org/news/combining-ai-laboratory-evolution-yields-improved-proteins)
- [Phys.org coverage](https://phys.org/news/2026-07-combining-ai-protein-laboratory-evolution.html)
- [News-Medical summary](https://www.news-medical.net/news/20260724/AI-redesign-helps-enzymes-evolve-beyond-natural-limits.aspx)
- [ProteinMPNN (Science, 2022)](https://www.science.org/doi/10.1126/science.add2187)
- [The 2021 reprogrammed-protease work this builds on: Blum et al., *Science* (2021)](https://doi.org/10.1126/science.abf5972)
- [Plain-language coverage of that 2021 work](https://www.genengnews.com/news/evolved-proteases-selectively-cleave-target-sequences-unlock-potential-of-proteome-editing/)
- [Singularity Hub coverage](https://singularityhub.com/2026/07/28/why-scientists-redesigned-the-botox-enzyme-with-ai/)

---
*Back to **[README.md](./README.md)** · **[PROMPT.md](./PROMPT.md)**.*
