# Designed antitoxins — AI proteins that neutralize snake venom toxins in mice

**Field:** 🧬 Biology  ·  **When:** January 2025 · Nature

> Snakebite kills over 100,000 people a year and is treated with antibodies harvested from immunized horses. Designed miniproteins, generated computationally and screened only lightly, bound the deadliest class of cobra toxins at nanomolar affinity and kept mice alive through lethal doses.

## What happened
*"De novo designed proteins neutralize lethal snake venom toxins"* by **Susana Vázquez Torres** and **Melisa Benard Valle** with colleagues, senior authors **Timothy P. Jenkins** (Technical University of Denmark) and **David Baker** (University of Washington), was published in **Nature** on **January 15, 2025** (DOI [10.1038/s41586-024-08393-x](https://www.nature.com/articles/s41586-024-08393-x), Nature 639, 225–231).

The target is a specific and nasty problem. **Three-finger toxins (3FTx)** are the components of elapid venom (cobras, mambas) that cause paralysis, by blocking nicotinic acetylcholine receptors, and tissue destruction. They are small, they are poorly immunogenic, and conventional antivenom, which is polyclonal antibody harvested from the plasma of immunized animals, works badly against them while being expensive and prone to adverse reactions.

The team used deep learning design, **RFdiffusion** for backbone generation with **ProteinMPNN** for sequence design and **AlphaFold2** for in-silico validation, to create miniproteins against three 3FTx subfamilies. From limited experimental screening they obtained (values as reported in the preprint version of this work):

| Designed binder | Target | K<sub>D</sub> | Melting temperature |
|---|---|---|---|
| SHRT | short-chain α-neurotoxin (ScNtx) | 0.9 nM | 78 °C |
| LNG | long-chain α-neurotoxin (α-cobratoxin) | 1.9 nM | above 95 °C |
| CYTX | cytotoxin (*Naja pallida*) | 271 nM | 61 °C |

**Crystal structures** confirmed the designs were what the models predicted: three structures are deposited in the Protein Data Bank, **9BK5** (LNG complex, 2.68 Å), **9BK6** (CYTX B10 complex, 2.0 Å) and **9BK7** (SHRT, 2.58 Å), with the paper reporting near-atomic agreement with the computational models.

**In mice**, against 3 × LD50 toxin challenges: pre-incubated binder and toxin at a 1:10 ratio gave **100% survival** for both SHRT against ScNtx and LNG against α-cobratoxin. Administered as a rescue **15 minutes after** the toxin, SHRT gave 100% survival at both 1:10 and 1:5 ratios and LNG gave 100% and 80%; **30 minutes after**, SHRT still gave 100% and LNG 60%. Survivors showed no limb or respiratory paralysis at 24 hours. Summarized across doses, toxins and designs, the labs describe **80–100% survival** ([DTU](https://www.dtu.dk/english/newsarchive/2025/01/ai-designed-proteins-neutralise-snake-toxins), [Phys.org](https://phys.org/news/2025-01-ai-proteins-neutralize-toxins-snake.html)).

## Why it matters
Most AI protein design results are demonstrations against convenient targets. This one goes after a **neglected tropical disease** where the existing treatment is a 19th-century technology: antibodies from the blood of immunized horses or sheep, which require a cold chain, cause serum sickness, and work poorly against exactly the toxins that do the most damage.

The designed antitoxins are attractive for reasons that have little to do with novelty. They are **small**, so they may penetrate tissue faster than an antibody. They are **extremely thermostable**, up to and past 95 °C, which matters enormously for a drug that has to reach rural clinics without refrigeration. And they are **recombinantly producible**, which means fermentation rather than snake farms and horse paddocks. As Timothy Jenkins put it, the small size means they are expected to penetrate tissue better and potentially neutralize toxins faster than current antibodies.

Methodologically it is a clean demonstration of the [RFdiffusion](../rfdiffusion-protein-design/) pipeline working end to end on a real disease target: design, minimal screening, nanomolar affinity, crystallographic confirmation, animal protection.

**The honest limits.** These proteins **do not neutralize snake venom**. They neutralize three-finger toxins. Real venom is a complex mixture that varies by species and even by individual snake, containing enzymes and other toxin families these binders do not touch, and the researchers say explicitly that conventional antivenom will remain the cornerstone of snakebite treatment for the foreseeable future, with designed antitoxins most likely arriving first as **supplements** to existing products. The protection experiments are in **mice**, with the toxin either pre-mixed with the binder or given by injection minutes later under laboratory conditions, which is a long way from a human bitten in a field hours from a clinic. There are **no human trials**. The affinity and stability values quoted above are drawn from the openly available preprint version; the peer-reviewed Nature paper states the results qualitatively in its abstract as high affinity, remarkable thermal stability and near-atomic agreement with the models.

## Sources — the record of the discovery
- [Nature: "De novo designed proteins neutralize lethal snake venom toxins"](https://www.nature.com/articles/s41586-024-08393-x) (DOI 10.1038/s41586-024-08393-x, January 15, 2025, Nature 639, 225–231)
- [Open preprint version with the full affinity, stability, structure and mouse-survival tables](https://pmc.ncbi.nlm.nih.gov/articles/PMC11118692/) (May 2024 — **preprint, superseded by the Nature paper**)
- [Baker Lab: "Neutralizing deadly snake toxins"](https://www.bakerlab.org/2025/01/15/neutralizing-deadly-snake-toxins/) (January 15, 2025)
- [Technical University of Denmark: "AI-designed proteins neutralise snake toxins"](https://www.dtu.dk/english/newsarchive/2025/01/ai-designed-proteins-neutralise-snake-toxins)
- [Phys.org coverage](https://phys.org/news/2025-01-ai-proteins-neutralize-toxins-snake.html)
- [PDB entry 9BK5, the LNG binder in complex with its toxin](https://www.rcsb.org/structure/9BK5)

---
*In this folder: **[PROMPT.md](./PROMPT.md)** (a prompt to explore it with AI) · **[CONTEXT.md](./CONTEXT.md)** (background & caveats). Part of the [AI Hall of Fame](../../README.md) → [🧬 Biology](../).*
