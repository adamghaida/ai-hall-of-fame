# 📚 Context: AlphaGenome

**The problem.** Roughly 98% of the human genome does not code for protein, and most variants that genome-wide association studies link to disease sit in that non-coding fraction. Their effects are regulatory: they change when, where, and how much a gene is transcribed, or how its RNA is spliced. That makes them much harder to interpret than a missense change in a protein, where you can at least reason about the substituted amino acid. Sequence-to-function models attack this by learning to predict measured functional genomics data (RNA-seq, ATAC-seq and DNase-seq, ChIP-seq, Hi-C, and so on) directly from DNA sequence, then reading off a variant's effect as the difference between the prediction for the reference sequence and the prediction for the altered one.

**The technical trade-off it targets.** Before AlphaGenome, models had to choose. Long input context lets you see distal enhancers that act from hundreds of kilobases away, but it usually forced coarse output bins. Fine, base-level output captures things like splice sites, but usually meant a short input window. That trade-off is why the field fragmented into specialists: Enformer and Borzoi for expression, SpliceAI for splicing, ChromBPNet for accessibility, ProCapNet for transcription initiation, Orca for chromatin contact. AlphaGenome's claim is that one model can take 1 Mb of input and still emit single-base-pair-resolution predictions across all of those modalities at once.

**The result.** Trained on human and mouse genomes, AlphaGenome matched or outperformed the strongest available external models on 25 of 26 variant-effect-prediction evaluations, and outperformed them on 22 of 24 genome-track prediction evaluations. Because it scores a variant across every modality simultaneously, the paper is able to show a joint mechanistic picture for clinically relevant non-coding variants near the *TAL1* oncogene, matching what is already known about how those variants act.

**The two dates.** AlphaGenome was previewed on June 25, 2025 alongside a preprint and a free, non-commercial research API. The peer-reviewed *Nature* paper landed on January 28, 2026 (received May 16, 2025; accepted December 4, 2025), and on the same day DeepMind released research code on GitHub under Apache 2.0 plus model weights on Kaggle and Hugging Face under non-commercial model terms. Reporting at the time of the code release put usage at nearly 3,000 scientists across 160 countries and roughly a million API requests a day over the preview's first seven months.

**The people.** The paper carries 27 authors from Google DeepMind, with Demis Hassabis and Pushmeet Kohli as senior authors. Ten authors — Žiga Avsec, Natasha Latysheva, Jun Cheng, Guido Novati, Kyle R. Taylor, Tom Ward, Clare Bycroft, Lauren Nicolaisen, Eirini Arvaniti and Joshua Pan — are marked as contributing equally; Avsec is first-listed and, with Kohli, a corresponding author. Avsec was also first author on Enformer, one of the models AlphaGenome is benchmarked against, so this is in part the same line of work superseding itself.

## Why it's in the Hall of Fame
It is the natural successor to **[AlphaMissense](../alphamissense-variant-effects/)**, which scored all 71 million possible missense variants in the coding genome. AlphaGenome extends the same ambition into the far larger and murkier non-coding genome, and it does so with a unified architecture rather than a specialist per assay, in the same lineage as **[AlphaFold3](../alphafold3/)** generalizing from single proteins to complexes. Code and weights are public enough for the field to check the claims, which is not something every headline model can say.

## Honest caveats
- **Benchmark wins are not clinical utility.** DeepMind states the predictions are for research and have not been designed or validated for direct clinical use. In the Science Media Centre round-up published with the paper, Dr Xianghua Li of King's College London made the same point bluntly: "For important medical tasks, current AI models are still not reliable enough for patient care."
- **A predicted regulatory effect is not a demonstrated one.** The model outputs a change in predicted molecular signal. Confirming that a variant actually alters gene regulation in a living cell still takes an experiment (a reporter assay, a CRISPR perturbation, a patient cohort). This entry claims a strong prediction tool, not established biology.
- **It does not explain mechanism.** Predicting that accessibility drops and expression falls is not the same as saying which transcription factor lost its site and why. The *TAL1* case study is a reconstruction of a mechanism already worked out experimentally, which is good evidence of fidelity and weak evidence of discovery.
- **Coverage is uneven.** Training data is human and mouse only, and functional genomics data is far richer for common, easily cultured cell types than for rare ones. The paper itself flags that cell-type-specific expression deviations remain hard, that very distal enhancer effects are underestimated, and that intermediate splicing efficiencies need further work. Expect worse performance the further you get from well-studied tissue.
- **The data ceiling is real.** Prof Ben Lehner of the Wellcome Sanger Institute, in the same round-up, noted that "AlphaGenome is far from perfect and there is still a lot of work to do." The model can only be as good as the measured tracks it was trained to reproduce, and those datasets carry their own biases.
- **Access is conditional.** The code is Apache 2.0, but the weights and the API are non-commercial. Universities and non-profits can use them; a company cannot, without separate terms. "Open weights" is doing narrower work here than it usually does.
- **Independent reproduction is still accumulating.** Prof Aldo Faisal of Imperial College London advised treating the results "as promising rather than final until" more groups reproduce the findings. The release of code and weights makes that possible, which is the point of noting it.

## Sources
- [Nature paper: "Advancing regulatory variant effect prediction with AlphaGenome"](https://www.nature.com/articles/s41586-025-10014-0) (DOI 10.1038/s41586-025-10014-0)
- [Free full text (PubMed Central)](https://pmc.ncbi.nlm.nih.gov/articles/PMC12851941/)
- [Google DeepMind announcement](https://deepmind.google/blog/alphagenome-ai-for-better-understanding-the-genome/)
- [Research code (GitHub, Apache 2.0)](https://github.com/google-deepmind/alphagenome_research)
- [Model weights (Hugging Face, non-commercial terms)](https://huggingface.co/google/alphagenome-all-folds)
- [Model weights (Kaggle, non-commercial terms)](https://www.kaggle.com/models/google/alphagenome)
- [Expert reaction round-up (Science Media Centre)](https://www.sciencemediacentre.org/expert-reaction-to-paper-on-google-deepminds-alphagenome/)
- [STAT: DeepMind releases AlphaGenome source code](https://www.statnews.com/2026/01/28/deepmind-opens-alphagenome-source-code/)

---
*Back to **[README.md](./README.md)** · **[PROMPT.md](./PROMPT.md)**.*
