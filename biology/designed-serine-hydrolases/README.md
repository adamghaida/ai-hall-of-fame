# De novo serine hydrolases — enzymes with real active sites, built from a description

**Field:** 🧬 Biology  ·  **When:** February 2025 · Science

> Designing a protein that folds is now routine. Designing one that *catalyzes a multistep reaction* is not. The Baker lab generated serine hydrolases from nothing but a sketch of the active site, reaching catalytic efficiencies up to 2.2 × 10⁵ M⁻¹s⁻¹, in five folds that do not exist in nature, with crystal structures matching the designs to under 1 Å.

## What happened
*"Computational design of serine hydrolases"* by **Anna Lauko**, **Samuel J. Pellock** and **Kiera H. Sumida** with colleagues and senior author **David Baker** was released by **Science** on **February 13, 2025** and appeared in the issue of **April 18, 2025** (DOI [10.1126/science.adu2454](https://www.science.org/doi/10.1126/science.adu2454), Science 388, eadu2454).

Serine hydrolases are the textbook case of a **multistep enzyme**. They use a **catalytic triad** (serine, histidine, aspartate) and an **oxyanion hole** to cleave ester and amide bonds through a covalent intermediate: the serine attacks, a tetrahedral intermediate forms and collapses, an acyl-enzyme forms, then water resolves it. The active site has to hold sub-ångström geometry not in one state but in *every* state along that path. That is why de novo design had produced binders, fluorescent proteins and simple catalysts, but nothing that ran a real multistep mechanism well.

The approach combined two pieces:

- **RFdiffusion**, generating protein backbones around catalytic sites of increasing complexity and varying geometry, starting from **minimal active site descriptions** rather than from any natural enzyme.
- **PLACER**, an ensemble-generation network that predicts the conformational ensemble of the site and lets the designers score **active-site preorganization at each step in the reaction**, not just in the ground state. Selecting for structural compatibility *across the reaction coordinate* is the paper's central methodological idea. (In the 2024 preprint this component was called **ChemNet**.)

The design pipeline released with the paper runs: CA-RFdiffusion → refinement → sequence design with **LigandMPNN** and FastRelax → validation with **AlphaFold2** → substrate placement → **PLACER** → analysis.

The results:

- **Catalytic efficiencies (k<sub>cat</sub>/K<sub>m</sub>) up to 2.2 × 10⁵ M⁻¹s⁻¹**, far above prior computationally designed esterases.
- **Crystal structures closely matching the design models, Cα RMSD under 1 Å.** Six structures from the work are deposited in the Protein Data Bank: **9DED, 9DEE, 9DEF, 9DEG, 9DEH** and **9MRB**.
- **Five different folds, distinct from those of natural serine hydrolases.** These are not remodeled lipases; they are new architectures doing the same chemistry.
- **Over 300 computer-generated proteins were tested in the lab**, with a subset reacting with activity-based chemical probes, confirming that an activated catalytic serine had actually been installed ([Baker Lab](https://www.bakerlab.org/2025/02/13/ai-enzymes-with-complex-active-sites/)).

## Why it matters
Enzyme design has been the long-standing embarrassment of computational protein design. The field could make proteins that fold, that bind, that glow, that self-assemble, and yet designed catalysts routinely landed thousands to millions of times below natural enzymes, because catalysis depends on geometry that has to survive several distinct chemical states. The contribution here is not just a faster enzyme; it is the **selection criterion**. By scoring designs on whether the active site stays organized at *every* step of the mechanism, the method targets the actual failure mode rather than the one that is easy to compute.

That the winners occupy **five folds unlike any natural serine hydrolase** is the part that says this is design rather than imitation. Natural enzymes have converged on a small number of scaffolds for this chemistry; the model found others. And because the whole thing starts from a **minimal description of an active site**, the route generalizes: state the chemistry you want, generate scaffolds that can hold it through the mechanism.

This sits directly downstream of [RFdiffusion](../rfdiffusion-protein-design/), which supplied the backbone generator, and alongside [AlphaFold](../../chemistry/alphafold-protein-structure/), used here as the in-silico filter before anything reached a bench.

**The honest limits.** The best designs remain **well short of highly evolved natural serine hydrolases**: 2.2 × 10⁵ M⁻¹s⁻¹ is an excellent designed enzyme, not a competitive natural one. The chemistry demonstrated is **ester hydrolysis**, not the harder amide or peptide bond cleavage that the same catalytic machinery performs in proteases. Over 300 designs were tested to get there, through **iterative rounds of design and screening**, so this is not one-shot design. And the numbers moved a great deal between versions: the August 2024 preprint reported efficiencies up to **3.8 × 10³ M⁻¹s⁻¹**, roughly sixty times lower than the published figure, which reflects continued optimization between preprint and paper rather than a discrepancy, but is worth knowing when citing older coverage.

## Sources — the record of the discovery
- [Science: "Computational design of serine hydrolases"](https://www.science.org/doi/10.1126/science.adu2454) (DOI 10.1126/science.adu2454; first release February 13, 2025; Science 388, eadu2454, April 18, 2025)
- [PDF of the paper hosted by the Baker Lab](https://www.bakerlab.org/wp-content/uploads/2025/02/science.adu2454.pdf)
- [Baker Lab: "Generating new enzymes with complex active sites"](https://www.bakerlab.org/2025/02/13/ai-enzymes-with-complex-active-sites/) (February 13, 2025)
- [Design pipeline and code on GitHub](https://github.com/laukoag/serine-hydrolase-design)
- [bioRxiv preprint, August 2024, with the earlier 3.8 × 10³ figure](https://www.biorxiv.org/content/10.1101/2024.08.29.610411v1)

---
*In this folder: **[PROMPT.md](./PROMPT.md)** (a prompt to explore it with AI) · **[CONTEXT.md](./CONTEXT.md)** (background & caveats). Part of the [AI Hall of Fame](../../README.md) → [🧬 Biology](../).*
