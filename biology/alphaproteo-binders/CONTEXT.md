# 📚 Context: AlphaProteo — protein binders designed on demand

**The problem.** A *binder* is a protein that grips another protein tightly and specifically. Binders are the workhorses of biology: antibodies are binders, most biologic drugs are binders, and a large fraction of laboratory reagents are binders. Historically you got one by immunizing an animal, by phage display, or by a long campaign of directed evolution. Computational design promised to skip all of that, and for two decades mostly did not deliver: designs failed to express, failed to fold, or bound micromolar when you needed nanomolar.

**What changed before AlphaProteo.** Two things. [AlphaFold](../../chemistry/alphafold-protein-structure/) made accurate structures cheap, which both supplied training data and gave designers a fast in-silico filter. [RFdiffusion](../rfdiffusion-protein-design/) showed that a diffusion model could generate protein backbones conditioned on a target, pushing binder-design success rates from roughly one in ten thousand to a few percent. AlphaProteo is the next increment on the same axis: same problem, better numbers, and a deliberate attempt to remove the optimization rounds that follow the first screen.

**The method, roughly.** AlphaProteo is described as a family of models trained on the Protein Data Bank plus over 100 million AlphaFold-predicted structures. Given a target structure and a specified binding site, it generates candidate binder sequences and structures; a separate filtering step scores them before anything reaches a bench. The report's framing is that a single round of **medium-throughput screening** — dozens to a couple of hundred designs — is enough, which is the operational claim that distinguishes it from prior work.

**The people.** The Protein Design and Wet Lab teams at **Google DeepMind**, with **Vinicius Zambaldi**, **David La**, **Alexander E. Chu**, **Harshnira Patani** and **Amy E. Danson** as leading authors among a roughly 30-person list. Experimental collaborators at the **Francis Crick Institute**: **Peter Cherepanov**, **Katie Bentley** and **David L. V. Bauer**.

## Why it's in the Hall of Fame
Because of the table, and because of the eighth row that is missing from it. Seven targets, each with a stated design count, a stated success rate, and a stated affinity, including a first binder to VEGF-A and binders to the SARS-CoV-2 receptor-binding domain that blocked infection in cells. Then an eighth target, TNFα, chosen as a hard case, where the method produced nothing. Publishing the failure alongside the successes, with a structural explanation for it, is what makes the seven credible.

## Honest caveats
- **Not peer-reviewed.** The white paper is a **technical report on arXiv** (arXiv:2409.08022), submitted September 2024. It has not gone through journal review, and the experiments were run and reported by the group making the claim.
- **Binding is not function, and neither is therapy.** Success here means a measured dissociation constant in vitro. Only the SARS-CoV-2 binders were shown to do something biological (block infection in cell assays). Nothing has been through animal efficacy, toxicology, immunogenicity, or manufacturing.
- **Structure required.** Every design took an experimental crystal structure of the target as input. The report names this as a limitation and lists targets lacking experimental structures, or with no single well-defined conformation, as future work.
- **The 88% is one target, not the system's success rate.** BHRF1 is the best case. Across the seven, success rates range from **9% (TrkA) to 88% (BHRF1)**, and four of seven are at 15% or below. Quoting 88% as "AlphaProteo's hit rate" would be wrong.
- **TNFα failed outright.** The team designed and tested binders and got no hits. This matters: TNFα is a major drug target, and the failure mode (flat, polar, inter-subunit epitope) is common.
- **The "3- to 300-fold" is a comparison, not an absolute.** It is measured against what the authors consider the best existing methods on the same targets. Independent groups have not rerun the comparison.
- **No weights, no code, no independent replication.** DeepMind described a phased sharing approach shaped by external biosecurity advisers, including the **Nuclear Threat Initiative's AI Bio Forum**. That is a reasonable position for a binder-design model, but it means the results rest on the report rather than on anyone else reproducing them.
- **Dual-use is the reason for the caution.** A system that reliably designs high-affinity binders to arbitrary human proteins is also a system for designing things that interfere with human proteins. The restricted release is an acknowledgement of that, not a marketing decision.

## Sources
- [Google DeepMind announcement](https://deepmind.google/blog/alphaproteo-generates-novel-proteins-for-biology-and-health-research/) (September 5, 2024)
- [Technical report on arXiv: "De novo design of high-affinity protein binders with AlphaProteo"](https://arxiv.org/abs/2409.08022)
- [Full text with the per-target success-rate and affinity table](https://arxiv.org/html/2409.08022v1)

---
*Back to **[README.md](./README.md)** · **[PROMPT.md](./PROMPT.md)**.*
