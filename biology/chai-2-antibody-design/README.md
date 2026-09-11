# Chai-2 — de novo antibodies at a 16% hit rate, twenty designs per target

**Field:** 🧬 Biology  ·  **When:** July 2025 · bioRxiv preprint

> A generative model was pointed at 52 proteins with no known antibody in the Protein Data Bank, allowed at most 20 designs each, and got a binder for half of them on the first try. The whole campaign fits in a 24-well plate, and none of it has been peer-reviewed.

## What happened
On **July 6, 2025**, **Chai Discovery** posted the preprint *"Zero-shot antibody design in a 24-well plate"* ([bioRxiv 10.1101/2025.07.05.663018](https://www.biorxiv.org/content/10.1101/2025.07.05.663018v1); Jacques Boitreaud, Jack Dent, Danny Geisz, Matthew McPartlon, Joshua Meier, Zhuoran Qiao, Alex Rogozhnikov, Nathan Rollins, Paul Wollenhaupt, Kevin Wu and the Chai Discovery Team). It describes **Chai-2**, a multimodal generative model for protein design, and its results on de novo antibody generation.

The experimental setup is the interesting part, because it was designed to be small:

- **52 antigens** with **no known antibodies in the Protein Data Bank**, drawn from vendor catalogs and filtered to exclude anything with 70% or greater sequence identity to an entry in SAbDab, the structural antibody database.
- **Up to 20 designs per target**, expressed as single-chain variable fragments (scFvs) or heavy-chain-only VHHs, produced in a cell-free system and measured by **bio-layer interferometry**.
- **One round.** No iteration, no affinity maturation, no second plate.

The reported outcome: an average hit rate of **15.5% across all designed antibodies** (20.0% for VHHs, 13.7% for scFvs), which the authors describe as **over 100-fold better than prior computational methods**, and **at least one binder for 50% of targets (26 of 52)**. A "hit" is defined concretely, as a binding-positive curve more than 0.1 nm above background and more than 300% of background.

Supporting results in the same preprint:

- **Miniprotein design at a 68% wet-lab success rate**, with picomolar dissociation constants against IL-7Rα, PD-L1, PDGFR-β and Insulin R, and low-nanomolar affinity against **TNFα**, a target that [DeepMind's AlphaProteo](https://deepmind.google/blog/alphaproteo-generates-novel-proteins-for-biology-and-health-research/) reported failing on entirely.
- **Epitope-specific design**: prompted at two distinct epitopes on CCL2, Chai-2 returned 20% and 25% hit rates respectively.
- **Cross-reactive design**: given human and cynomolgus versions of a target, it produced a lead with K<sub>D</sub> of 77 nM (human) and 121 nM (cyno).
- **Novelty**: designs sit at least 10 Å RMSD from the most similar known antibody structure, with CDR edit distances above 10 from the closest example.
- **Specificity**: in an off-target panel, 1 of 23 designs (4%) bound anything above background.

## Why it matters
Antibody discovery has run on animal immunization and library screening for four decades. Both work by sampling enormous numbers of candidates and finding the rare one that binds. The number that matters in this preprint is not 16%, it is **20**: the count of molecules synthesized per target. If a model can propose twenty candidates and roughly one in six sticks, the economics change from a screening campaign to an ordinary experiment, and the bottleneck moves from finding binders to characterizing them.

The claim also extends de novo design from miniproteins into **antibodies**, which are harder. A miniprotein binder can be any shape the model likes; an antibody has to work within a fixed immunoglobulin scaffold and place its contacts on six flexible CDR loops. Prior de novo antibody design worked at hit rates low enough to require high-throughput screening, which defeats the purpose.

**The honest limits.** This is **a preprint, not peer-reviewed**, and as of September 2026 no journal version has appeared. The **benchmark was designed, run, and reported by the company** whose model is being evaluated: targets were chosen in-house, the wet-lab work was in-house, and there was **no blinded external evaluation**. **Chai-2 is proprietary.** Chai Discovery's public code release covers Chai-1, its structure-prediction model; Chai-2's weights are not published, so nobody outside can reproduce or falsify the hit rate. The designs were tested as scFvs and VHHs, and the authors note that biophysical behavior can change when the same variable domains are reformatted as Fabs or full-length antibodies. **Binding is not a drug**: thermal stability, aggregation propensity and viscosity are named by the authors as unfinished business, and developability and immunogenicity assessments were **in silico**. And "50% of targets" is the flip side of the headline: half the targets produced nothing.

## Sources — the record of the discovery
- [Preprint: "Zero-shot antibody design in a 24-well plate"](https://www.biorxiv.org/content/10.1101/2025.07.05.663018v1) (bioRxiv, July 6, 2025, DOI 10.1101/2025.07.05.663018 — **not peer-reviewed**)
- [Full text of the preprint, with the per-target results and off-target panel](https://www.biorxiv.org/content/10.1101/2025.07.05.663018v1.full)
- [DeepMind's AlphaProteo, the de novo binder result this is implicitly measured against](https://deepmind.google/blog/alphaproteo-generates-novel-proteins-for-biology-and-health-research/)
- [RFdiffusion, the generative protein design lineage this sits in](../rfdiffusion-protein-design/)

---
*In this folder: **[PROMPT.md](./PROMPT.md)** (a prompt to explore it with AI) · **[CONTEXT.md](./CONTEXT.md)** (background & caveats). Part of the [AI Hall of Fame](../../README.md) → [🧬 Biology](../).*
