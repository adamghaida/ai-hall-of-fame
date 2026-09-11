# 📚 Context: de novo serine hydrolases and the preorganization problem

**Why enzyme design was the holdout.** By 2024 computational protein design could produce proteins that fold as intended, bind chosen targets at nanomolar affinity, fluoresce, and assemble into nanomaterials. Catalysis stayed stubborn. Designed enzymes worked, but typically at rates thousands to millions of times below their natural counterparts, and the gap did not close by making the models better at structure prediction. The reason is that catalysis is not a property of a shape; it is a property of a *sequence of shapes*. An enzyme has to stabilize the transition state, not the ground state, and for a multistep mechanism it has to do that several times in a row without the active site drifting apart in between. A design method that scores one static structure is optimizing the wrong thing.

**The serine hydrolase mechanism.** These enzymes (proteases, lipases, esterases) use a **catalytic triad**: an aspartate orients a histidine, which deprotonates a serine, which attacks the substrate carbonyl. A **tetrahedral intermediate** forms, its negative charge stabilized by an **oxyanion hole** made of backbone amides; it collapses to a covalent **acyl-enzyme**; water then attacks and the cycle resolves. Four or more distinct states, each needing its own precise geometry, in the same site. It is the canonical hard case, which is why the team chose it.

**PLACER, and what it actually does.** The second half of the method is a network that generates **conformational ensembles** of the active site with its ligand, rather than a single predicted pose. That lets the designers ask, for each candidate and at each step in the reaction, whether the catalytic residues are held in the productive arrangement or wander. Designs are then selected for **compatibility across the reaction coordinate**. In the August 2024 preprint this tool was called **ChemNet**; in the published version it is **PLACER**. The same underlying idea, applied to retroaldolases and to metal-dependent hydrolases, produced large improvements in those systems too, which the Baker Lab notes in its writeup.

**The pipeline, as released.** The public repository documents it end to end: sample catalytic residue geometries, use RFdiffusion to expand motif complexity, refine, design sequences with **LigandMPNN** plus FastRelax, validate structurally with **AlphaFold2**, place the substrate, run **PLACER**, analyze. Every component except PLACER is a tool that already existed; the novelty is what the ensemble step is used *for*.

**The people.** Co-lead authors **Anna Lauko** (PhD student at the time, now graduated), **Samuel J. Pellock** (acting instructor) and **Kiera H. Sumida** (PhD trainee), with **Ivan Anishchenko, David Juergens, Woody Ahern, Jihun Jeung, Alex Shida, Andrew Hunt, Indrek Kalvet, Christoffer Norn, Ian R. Humphreys, Cooper Jamieson, Rohith Krishna, Yakov Kipnis, Alex Kang, Evans Brackenbrough, Asim K. Bera, Banumathi Sankaran**, **K. N. Houk** (UCLA, computational chemistry) and **David Baker**, who shared the 2024 Nobel Prize in Chemistry for computational protein design. Funding included the NIH, the Defense Threat Reduction Agency, HHMI, the Washington Research Foundation, Open Philanthropy, The Audacious Project, Microsoft and Schmidt Futures.

## Why it's in the Hall of Fame
Three things land together, which is rare. The catalytic efficiency is genuinely high for a designed enzyme. The crystal structures confirm that the designs are what the models said they were, to under 1 Å. And the successful catalysts occupy **five folds that natural serine hydrolases do not use**, so the result cannot be explained as recovering a known scaffold. Added to that, the code is public and the structures are in the PDB, so the claim is checkable rather than merely reported.

## Honest caveats
- **Still short of nature.** k<sub>cat</sub>/K<sub>m</sub> up to 2.2 × 10⁵ M⁻¹s⁻¹ is a large advance over previous designed esterases and a long way below what highly evolved natural hydrolases achieve. This is progress on a gap, not the closing of it.
- **Ester hydrolysis, not amide hydrolysis.** The same catalytic machinery in natural proteases cleaves peptide bonds, which is much harder. The paper demonstrates ester chemistry.
- **Not one-shot.** Over 300 designs were tested experimentally, and the Baker Lab describes **iterative rounds of design and screening** before the best catalysts emerged. The hit rate for a working multistep enzyme from a single generation remains low.
- **The preprint and the paper report different numbers.** August 2024: up to **3.8 × 10³ M⁻¹s⁻¹**. Published version: up to **2.2 × 10⁵ M⁻¹s⁻¹**. That is roughly a sixtyfold difference across about six months of further work. Coverage written from the preprint is not wrong, it is out of date, and the two should not be mixed.
- **The tool changed names.** **ChemNet** in the preprint, **PLACER** in the paper. Literature searches for one will miss the other.
- **Five folds "distinct from natural serine hydrolases" is a structural claim, not a novelty-of-fold-space claim.** The designs do not use the scaffolds natural serine hydrolases use. That is not the same as saying the folds are unprecedented in all of protein space.
- **No application yet.** Kiera Sumida is quoted as applying the methods to plastic degradation, which is an intention rather than a result. Nothing here has been deployed industrially.
- **Verification depends on what was deposited.** Six PDB entries are linked to the paper (9DED, 9DEE, 9DEF, 9DEG, 9DEH, 9MRB). That is enough to check the structural claims for the solved designs and not enough to audit the full set of 300-plus tested proteins.

## Sources
- [Science: "Computational design of serine hydrolases"](https://www.science.org/doi/10.1126/science.adu2454) (DOI 10.1126/science.adu2454, first release February 13, 2025)
- [Paper PDF hosted by the Baker Lab](https://www.bakerlab.org/wp-content/uploads/2025/02/science.adu2454.pdf)
- [Baker Lab: "Generating new enzymes with complex active sites"](https://www.bakerlab.org/2025/02/13/ai-enzymes-with-complex-active-sites/)
- [Design pipeline and code](https://github.com/laukoag/serine-hydrolase-design)
- [bioRxiv preprint, August 30, 2024](https://www.biorxiv.org/content/10.1101/2024.08.29.610411v1)
- [PDB entry 9DED, one of the deposited designed hydrolase structures](https://www.rcsb.org/structure/9DED)

---
*Back to **[README.md](./README.md)** · **[PROMPT.md](./PROMPT.md)**.*
