# AlphaGenome — reading a million bases of DNA at base-pair resolution

**Field:** 🧬 Biology  ·  **When:** January 2026 · Nature

> One model takes up to a megabase of DNA, predicts thousands of functional genomic tracks at single-base resolution, and matches or beats the best specialist models on 25 of 26 variant-effect benchmarks.

## What happened
On **January 28, 2026**, Google DeepMind published **AlphaGenome** in *Nature* under the title "Advancing regulatory variant effect prediction with AlphaGenome" (27 authors, led by Žiga Avsec as first-listed and corresponding author — ten of the 27 are marked as contributing equally — with Demis Hassabis and Pushmeet Kohli as senior authors).

AlphaGenome is a single sequence-to-function model. In the paper's own words, it "takes as input 1 Mb of DNA sequence and predicts thousands of functional genomic tracks up to single-base-pair resolution" (Avsec et al., *Nature*, 2026). The modalities, all handled at once, are gene expression, transcription initiation, chromatin accessibility, histone modifications, transcription factor binding, chromatin contact maps, splice site usage, and splice junction coordinates and strength. Earlier models had to trade input length against output resolution, which is why they tended to specialize in one modality; AlphaGenome's contribution is doing long context and fine resolution together.

Trained on human and mouse genomes, it **matched or outperformed the strongest available external models on 25 of 26 variant-effect-prediction evaluations**, and outperformed them on **22 of 24 genome-track prediction evaluations**. The baselines are the field's specialists, each on its own turf: Borzoi and Enformer for expression, SpliceAI for splicing, ChromBPNet for accessibility, ProCapNet for transcription initiation, and Orca for chromatin contact. As a case study, the paper shows that scoring a variant across all modalities simultaneously recapitulates the known mechanism of clinically relevant non-coding variants near the **TAL1** oncogene.

There are two dates worth keeping apart. AlphaGenome was first **previewed on June 25, 2025** as a preprint plus a free, non-commercial research API. The January 2026 *Nature* paper is the peer-reviewed version, and it came with a release: research code under **Apache 2.0** on GitHub, and **model weights on Kaggle and Hugging Face under non-commercial model terms**. That is open weights for academics and non-profits, not an unrestricted open-source release.

## Why it matters
AlphaMissense (also in this collection) covered the ~2% of the genome that codes for protein. Most disease-associated variants found by genome-wide association studies sit in the other 98%, in regulatory DNA where the effect of a single base change is far harder to reason about. AlphaGenome is a serious attempt at that region: one model, many readouts, at the resolution where single-nucleotide changes actually live.

The honest limits are worth stating in the same breath. Winning benchmarks is not clinical utility, and DeepMind says the predictions are for research and have not been validated for clinical use. A predicted regulatory effect is a hypothesis that still needs an experiment. The model outputs molecular tracks, not mechanism or phenotype. It was trained on human and mouse data, and it will be better on well-characterized cell types and tissues than on rare ones. And the non-commercial licence means access is real but conditional. See **[CONTEXT.md](./CONTEXT.md)** for the full caveat list, including what independent experts said on publication day.

## Sources — the record of the discovery
- [Nature paper: "Advancing regulatory variant effect prediction with AlphaGenome"](https://www.nature.com/articles/s41586-025-10014-0) (DOI 10.1038/s41586-025-10014-0)
- [Free full text (PubMed Central)](https://pmc.ncbi.nlm.nih.gov/articles/PMC12851941/)
- [Google DeepMind announcement](https://deepmind.google/blog/alphagenome-ai-for-better-understanding-the-genome/)
- [Research code (GitHub, Apache 2.0)](https://github.com/google-deepmind/alphagenome_research)
- [Model weights (Hugging Face, non-commercial terms)](https://huggingface.co/google/alphagenome-all-folds)
- [Model weights (Kaggle, non-commercial terms)](https://www.kaggle.com/models/google/alphagenome)
- [Expert reaction round-up (Science Media Centre)](https://www.sciencemediacentre.org/expert-reaction-to-paper-on-google-deepminds-alphagenome/)

---
*In this folder: **[PROMPT.md](./PROMPT.md)** (a prompt to explore it with AI) · **[CONTEXT.md](./CONTEXT.md)** (background & caveats). Part of the [AI Hall of Fame](../../README.md) → [🧬 Biology](../).*
