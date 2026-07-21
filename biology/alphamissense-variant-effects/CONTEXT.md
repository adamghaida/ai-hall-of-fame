# 📚 Context: AlphaMissense — classifying 71 million genetic mutations

A deliberate design choice: AlphaMissense was *not* trained directly on clinical databases like ClinVar (which carry human curation bias); instead it learns from protein structure and evolutionary constraint, then is validated against known variants. Predictions are decision-support, not diagnoses — clinical use requires human interpretation.

## Why it's in the Hall of Fame
Interpreting variants of unknown significance is a central bottleneck in diagnosing rare genetic disease; a proteome-wide, calibrated catalogue is a major resource for clinicians and researchers.

## Sources
- [Science paper](https://www.science.org/doi/10.1126/science.adg7492)
- [DeepMind blog](https://deepmind.google/discover/blog/a-catalogue-of-genetic-mutations-to-help-pinpoint-the-cause-of-diseases/)

---
*Back to **[README.md](./README.md)** · **[PROMPT.md](./PROMPT.md)**.*
