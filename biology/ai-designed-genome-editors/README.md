# SynTnpBs — AI-designed compact genome editors that beat the natural enzyme

**Field:** 🧬 Biology  ·  **When:** July 2026 · Science

> An inverse-folding model redesigned a miniature CRISPR-like nuclease. Hundreds of the synthetic versions worked, some edited human cells better than the enzyme evolution produced, and cryo-EM caught them in the act.

## What happened
On **July 16, 2026**, a team at the **Innovative Genomics Institute** and **UC Berkeley** published *"Structure and evolution-guided design of minimal RNA-guided nucleases"* in **Science** (DOI [10.1126/science.aed6123](https://www.science.org/doi/10.1126/science.aed6123)). The paper's first two authors, **Petr Skopintsev** and **Isabel Esain-Garcia**, with **Evan DeTurk** and colleagues and senior author **Jennifer Doudna**, set out to redesign **TnpB**, a very small transposon-encoded nuclease that is the evolutionary ancestor of CRISPR-Cas12. TnpB's appeal is size: compact editors fit into delivery vehicles that larger Cas proteins do not.

The method was not "ask a language model for a protein." The team ran **ESM Inverse Folding (ESM-IF1)**, which takes a 3D structure and proposes amino acid sequences that should fold into it, and then constrained the output with **evolution-informed residue rules** so that positions known to contact the guide RNA or the target DNA were held fixed while the rest of the protein was allowed to drift. The resulting synthetic variants are called **SynTnpBs**.

Reported results, from the paper's abstract and from press coverage of it:

- A high-throughput **bacterial screen of 1,980 designed protein-part combinations** found **466 with detectable activity**, and about **8% of those (of the active variants) outperformed the natural reference enzyme** (numbers as reported by the [Innovative Genomics Institute](https://innovativegenomics.org/news/ai-designed-functional-genome-editors/), the lab's own writeup, and by [Phys.org](https://phys.org/news/2026-07-aidesigned-geneediting-enzymes-crispr-toolbox.html)).
- Active SynTnpBs worked in **bacterial, plant, and human cells** (the paper's own summary), including **HEK293T** human cells and **Arabidopsis protoplasts** ([CRISPR Medicine News](https://crisprmedicinenews.com/news/ai-redesigns-minimal-crispr-nucleases/)).
- In human cells, two variants edited a test target at **46% and 50% versus 28% for the wild-type enzyme**, with **close to fourfold** higher editing at some targets ([Innovative Genomics Institute](https://innovativegenomics.org/news/ai-designed-functional-genome-editors/); the same figures appear in Phys.org).
- The designs are genuinely divergent rather than cosmetic: the DNA-interacting and RNA-interacting lobes came in around **83% and 72% sequence identity** to their natural counterparts ([Innovative Genomics Institute](https://innovativegenomics.org/news/ai-designed-functional-genome-editors/); the same figures appear independently in [GEN](https://www.genengnews.com/topics/genome-editing/ai-designed-synthetic-crispr-like-nucleases-show-activity-in-cells/) and Phys.org). Earlier AI-designed nuclease work had typically stayed above 99% identity to natural sequences.
- **Cryo-electron microscopy** of the most divergent variant revealed new stabilizing contacts across the RNA-DNA interface in multiple conformational states. The AAAS release describes these as **the first experimentally determined structures of AI-designed RNA-guided nucleases**.

## Why it matters
Generative protein design has a credibility problem: it is easy to produce sequences that score well computationally and fail in a cell. This result closes the loop. The designs were screened at scale in living bacteria, carried over into human and plant cells, beat the natural enzyme on efficiency at some targets, and then had their mechanism confirmed structurally rather than inferred. It also pushes past the timid regime of earlier AI enzyme work, where "designed" often meant a handful of substitutions: here roughly a fifth to a quarter of the business end of the protein is machine-written, and it still folds and cuts.

Practically, a compact editor that can be tuned on demand is useful precisely where CRISPR is hardest to deliver. And the pipeline generalizes beyond this one protein.

**The honest limits.** These are **research-stage tools with no therapeutic use**. The method is **constrained redesign of a natural scaffold**, not de novo invention: the fold, the guide RNA, and the catalytic and nucleic-acid-contacting residues all came from nature, and the model filled in around them. This is a different and more modest claim than [RFdiffusion](../rfdiffusion-protein-design/) generating novel folds from scratch. Editing efficiency in cultured cells and protoplasts is a long way from safety, delivery, and durable editing in an organism, let alone a clinic — and **no comprehensive off-target profiling of these variants has been published**. Several of the specific numbers above come from secondary coverage of a paywalled paper, and are flagged as such.

## Sources — the record of the discovery
- [Science paper: "Structure and evolution-guided design of minimal RNA-guided nucleases"](https://www.science.org/doi/10.1126/science.aed6123) (DOI 10.1126/science.aed6123, July 16, 2026)
- [Innovative Genomics Institute writeup](https://innovativegenomics.org/news/ai-designed-functional-genome-editors/)
- [EurekAlert / AAAS press release](https://www.eurekalert.org/news-releases/1135710)
- [Phys.org: AI-designed gene-editing enzymes expand the CRISPR toolbox](https://phys.org/news/2026-07-aidesigned-geneediting-enzymes-crispr-toolbox.html)
- [CRISPR Medicine News: AI redesigns minimal CRISPR nucleases](https://crisprmedicinenews.com/news/ai-redesigns-minimal-crispr-nucleases/)
- [C&EN: AI-designed nucleases build on nature's design](https://cen.acs.org/biological-chemistry/gene-editing/ai-nuclease-design-crispr/104/web/2026/07)
- [GEN: AI-designed synthetic CRISPR-like nucleases show activity in cells](https://www.genengnews.com/topics/genome-editing/ai-designed-synthetic-crispr-like-nucleases-show-activity-in-cells/)

---
*In this folder: **[PROMPT.md](./PROMPT.md)** (a prompt to explore it with AI) · **[CONTEXT.md](./CONTEXT.md)** (background & caveats). Part of the [AI Hall of Fame](../../README.md) → [🧬 Biology](../).*
