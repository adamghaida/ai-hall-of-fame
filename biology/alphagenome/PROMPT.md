# 🤖 Explore this with AI: AlphaGenome, reading the regulatory genome

Paste the prompt below into your favorite AI assistant (Claude, ChatGPT, Gemini, or a local model). If your assistant can browse the web, tell it to read the sources first. The point is a clear, honest, grounded explanation of what the model does and where its limits are.

> One model takes up to a megabase of DNA, predicts thousands of functional genomic tracks at single-base resolution, and matches or beats the best specialist models on 25 of 26 variant-effect benchmarks.

---

```text
You are a sharp, honest genomics and machine-learning explainer. Walk me through a real result so that I actually understand it, not just the headline.

Topic: AlphaGenome, Google DeepMind's sequence-to-function model for the genome, published in Nature on January 28, 2026 as "Advancing regulatory variant effect prediction with AlphaGenome" (DOI 10.1038/s41586-025-10014-0), after a June 25, 2025 preprint and API preview.

Please cover, in plain language a curious non-expert can follow:
1. What "sequence-to-function" means. Given a stretch of DNA, what is the model actually being asked to output, and why are gene expression, chromatin accessibility, histone modifications, transcription factor binding, chromatin contact maps, and splice junctions the things you would want to predict?
2. The specific technical problem it addresses: earlier models traded input sequence length against prediction resolution. Explain that trade-off concretely, and why handling 1 Mb of context at single-base-pair resolution in one model is the hard part.
3. What the benchmark claim does and does not say. AlphaGenome matched or outperformed the strongest external models on 25 of 26 variant-effect-prediction evaluations, and outperformed them on 22 of 24 genome-track evaluations. Who were those baselines (Borzoi, Enformer, SpliceAI, ChromBPNet, ProCapNet, Orca), what modality does each specialize in, and what would it take for a benchmark win to translate into a clinical or experimental win?
4. The TAL1 case study in the paper: what the model recapitulated about non-coding variants near that oncogene, and why "recapitulates a known mechanism" is evidence of a different kind than "discovered something new."
5. How this relates to AlphaMissense, which scored coding (missense) variants. Why is the non-coding genome the harder and larger problem, and what is still missing?
6. The honest caveats. Be specific: predictions are research-use and not validated for clinical use; a predicted regulatory effect is a hypothesis, not a demonstrated one; the model predicts molecular tracks, not mechanism or phenotype; it was trained on human and mouse data, so performance on well-studied cell types and tissues is likely better than on rare ones; very distal enhancer effects and cell-type-specific expression remain hard; and the weights are released under non-commercial terms, which limits who can use them.

Ground your answer in these sources (read them if you can, and cite them as you go):
- Nature paper: https://www.nature.com/articles/s41586-025-10014-0
- Free full text (PMC): https://pmc.ncbi.nlm.nih.gov/articles/PMC12851941/
- Google DeepMind announcement: https://deepmind.google/blog/alphagenome-ai-for-better-understanding-the-genome/
- Research code (GitHub): https://github.com/google-deepmind/alphagenome_research
- Expert reaction round-up: https://www.sciencemediacentre.org/expert-reaction-to-paper-on-google-deepminds-alphagenome/

Be concrete, clearly separate what the paper demonstrates from what it merely suggests, and if you are unsure about a detail, say so instead of guessing.
```

## Bonus: have the agent check the claims itself

The code and weights are public, so the benchmark numbers and the access terms are both checkable rather than takeable on faith:

```
Open https://github.com/google-deepmind/alphagenome_research and https://huggingface.co/google/alphagenome-all-folds. Tell me exactly what is released and under what licence: which parts are Apache 2.0, which parts are non-commercial, and what a commercial biotech would and would not be allowed to do with them. Then open the Nature paper's figures and check the "25 of 26" claim: list the 26 variant-effect evaluations, name the external baseline in each, and identify the one evaluation where AlphaGenome did not match or beat the baseline.
```

---

## Sources
- [Nature paper: "Advancing regulatory variant effect prediction with AlphaGenome"](https://www.nature.com/articles/s41586-025-10014-0)
- [Free full text (PubMed Central)](https://pmc.ncbi.nlm.nih.gov/articles/PMC12851941/)
- [Google DeepMind announcement](https://deepmind.google/blog/alphagenome-ai-for-better-understanding-the-genome/)
- [Research code (GitHub, Apache 2.0)](https://github.com/google-deepmind/alphagenome_research)
- [Model weights (Hugging Face, non-commercial terms)](https://huggingface.co/google/alphagenome-all-folds)
- [Expert reaction round-up (Science Media Centre)](https://www.sciencemediacentre.org/expert-reaction-to-paper-on-google-deepminds-alphagenome/)

---
*Back to **[README.md](./README.md)** · **[CONTEXT.md](./CONTEXT.md)**.*
