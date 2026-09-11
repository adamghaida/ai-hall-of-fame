# OpenCRISPR-1 — the first AI-generated gene editor to edit the human genome

**Field:** 🧬 Biology  ·  **When:** July 2025 · Nature (announced April 2024)

> A protein language model trained on a million CRISPR operons wrote a gene editor from scratch. It sits 403 mutations away from Cas9, edits human cells at least as well as Cas9 does, cuts off-target editing by about 95%, and was released for anyone to use.

## What happened
**Profluent Bio** announced **OpenCRISPR-1** on **April 22, 2024**, calling it the first precision gene editing of the human genome performed with a molecule designed from scratch by AI ([Profluent announcement](https://www.profluent.bio/media/editing-the-human-genome-with-ai)). The peer-reviewed version, *"Design of highly functional genome editors by modelling CRISPR–Cas sequences"* by **Jeffrey A. Ruffolo**, **Stephen Nayfach**, **Joseph Gallagher** and colleagues with senior author **Ali Madani**, appeared in **Nature** on **July 30, 2025** (DOI [10.1038/s41586-025-09298-z](https://www.nature.com/articles/s41586-025-09298-z), Nature 645, 518–525).

The pipeline:

- The team mined **26.2 terabases** of assembled genomes and metagenomes into the **CRISPR-Cas Atlas**, **1,246,088 CRISPR–Cas operons**, and trained protein language models on it.
- The models generated synthetic Cas proteins spanning **4.8× the number of protein clusters across CRISPR–Cas families found in nature**, along with matched single-guide RNAs, because a designed effector needs a guide it can actually load.
- **209** generated Cas9-like proteins were screened in human cells; **48** went on to detailed characterization.

The lead design, **OpenCRISPR-1**, is **403 mutations from SpCas9** and **182 mutations from the nearest natural protein** in the Atlas. In human cells the Nature paper reports **median indel rates of 56.4% for OpenCRISPR-1 versus 47.1% for SpCas9**, with a **95% reduction in editing at known SpCas9 off-target sites**. (Profluent's April 2024 announcement, describing the earlier preprint, gave the comparable figures as **55.7% versus 48.3%** on-target and **0.32% versus 6.1%** off-target.) Fused to an adenosine deaminase, OpenCRISPR-1 also works as a **base editor**, reaching **35–60%** adenine-to-guanine editing. Immunologically it **lacks previously identified immunodominant and subdominant SpCas9 T-cell epitopes**, and antibody-binding assays against serum from **40 healthy donors** showed lower reactivity than SpCas9 for the generated proteins at one or more dilutions.

Profluent **released OpenCRISPR-1**, the protein sequence plus a compatible AI-generated guide RNA, on [GitHub](https://github.com/Profluent-AI/OpenCRISPR), free for research and commercial use under a license agreement that requires ethical use.

## Why it matters
Gene editing has been a *discovery* discipline: find a nuclease in a microbe, then spend years engineering around the fact that it evolved for a bacterium rather than for a human cell. OpenCRISPR-1 is the first working demonstration that you can skip the microbe. The model was not asked to tweak SpCas9; it generated sequences from a learned distribution over CRISPR proteins, and the winner is 403 mutations away from the reference and 182 from anything in the training database. That it then edits human DNA at all is the result; that it does so with **higher on-target and far lower off-target activity**, plus a reduced immune-epitope profile, is what makes it more than a curiosity. Immunogenicity is a genuine obstacle to Cas9-based therapies, and this one was improved as a side effect of designing away from the natural sequence.

The open release matters separately. Most frontier AI-designed biology stays behind a company wall. This one was published with the sequence attached.

This entry is distinct from [SynTnpBs](../ai-designed-genome-editors/), which came later and took a different route: **constrained redesign** of a natural TnpB scaffold using an inverse-folding model, holding the nucleic-acid-contacting residues fixed. OpenCRISPR-1 is **generative sequence design** from a language model over the CRISPR universe. Both are "AI-designed editors"; they are not the same claim.

**The honest limits.** The editing was in **cultured human cells**, not an organism or a patient; no clinical trial of OpenCRISPR-1 has been reported. "95% fewer off-target edits" is measured at **known SpCas9 off-target sites**, which is the fair comparison but not the same as unbiased genome-wide off-target profiling. The published on-target numbers (56.4% vs 47.1%) differ slightly from the ones in the 2024 announcement (55.7% vs 48.3%), so cite whichever source you are quoting. The work was performed and reported by the company that owns the platform, and while the sequence is public, the **models and the training pipeline are not**. And "open" here means a license agreement, not a public-domain dedication.

## Sources — the record of the discovery
- [Nature paper: "Design of highly functional genome editors by modelling CRISPR–Cas sequences"](https://www.nature.com/articles/s41586-025-09298-z) (DOI 10.1038/s41586-025-09298-z, July 30, 2025)
- [Open-access full text on PubMed Central](https://pmc.ncbi.nlm.nih.gov/articles/PMC12422970/)
- [Profluent: "Editing the human genome with AI"](https://www.profluent.bio/media/editing-the-human-genome-with-ai) (April 22, 2024)
- [OpenCRISPR release on GitHub, with the sequence and license terms](https://github.com/Profluent-AI/OpenCRISPR)
- [Preprint: "Design of highly functional genome editors by modeling the universe of CRISPR-Cas sequences"](https://www.biorxiv.org/content/10.1101/2024.04.22.590591) (bioRxiv, April 2024; superseded by the Nature paper)

---
*In this folder: **[PROMPT.md](./PROMPT.md)** (a prompt to explore it with AI) · **[CONTEXT.md](./CONTEXT.md)** (background & caveats). Part of the [AI Hall of Fame](../../README.md) → [🧬 Biology](../).*
