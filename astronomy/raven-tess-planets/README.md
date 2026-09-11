# RAVEN: a machine-learning pipeline validates 118 new TESS planets from 2.2 million stars

**Field:** 🔭 Astronomy  ·  **When:** March 2026 · Monthly Notices of the Royal Astronomical Society

> A Warwick-led team ran an automated search-and-validation pipeline over TESS full-frame images of 2.26 million main-sequence stars, went from 5.7 million raw transit signals to 2,170 vetted candidates, and statistically validated 118 planets, 31 of them detected for the first time, without a human deciding each case.

## What happened
NASA's TESS has photographed most of the sky since 2018, but turning its light curves into a planet catalogue has depended on a mixture of automated detection and human vetting that is slow and, for population statistics, hard to characterise. **Marina Lafarga Magro**, **David Armstrong**, **Kaiming Cui**, **Andreas Hadjigeorghiou** and colleagues at the University of Warwick built **RAVEN** (RAnking and Validation of ExoplaNets) to do the whole chain uniformly, and published the results in *MNRAS* (volume 548, issue 3, article stag512) on **25 March 2026**, with a preprint at arXiv:2603.22597.

The sample is a magnitude-limited set of **2.26 million** main-sequence stars characterised by Gaia and observed in TESS full-frame images during the mission's first four years (sectors 1 to 55). A box-least-squares search produced **5,664,552** initial signals. RAVEN's machine-learning classifiers, trained on realistic simulations of planets and **eight astrophysical false-positive scenarios** (gradient-boosted trees, Gaussian-process classifiers and self-organising maps for transit shape), combined with scenario priors in a Bayesian framework, cut that to **14,815**, and then to a vetted sample of **2,170** candidates with planet probability of at least 0.9, more than 1,000 of them new. Candidates with probability of at least 0.99 and radius below 8 Earth radii are counted as statistically validated: **118 newly validated planets, including 31 newly detected** in this work. The search covered orbital periods of 0.5 to 16 days and radii up to 16 Earth radii.

The pipeline itself is described in a companion paper (Hadjigeorghiou et al., arXiv:2509.17645); on a test set of 1,361 pre-classified TESS objects it reached 91% accuracy overall and 97% precision at the 0.9 threshold. A second companion paper uses the uniform sample to measure that roughly 9 to 10% of Sun-like stars host a close-in planet and about 0.08% host one in the "Neptunian desert".

## Why it matters
Exoplanet catalogues assembled by hand have selection biases nobody can fully write down, which limits what they can say about how common planets are. Because RAVEN applies the same detection, classification and validation to every star, its completeness and false-positive rate can be measured, which is what makes the demographics paper possible. It also scales: 2.26 million stars in one uniform pass, versus the per-target follow-up that validation normally requires. The lineage runs back to the neural-network search that found [Kepler-90i](../kepler-90i-exoplanet/) in 2017; the difference here is that the machine also performs the statistical validation step, not just the ranking.

The honest framing: "validated" means a planet probability above 0.99 under the pipeline's models, not a mass measurement. The authors report that rerunning with refined ephemerides removed 77 candidates and that probability estimates scatter at the level of a per cent or more, and they exclude everything larger than 8 Earth radii from validation because of the degeneracy between giant planets, brown dwarfs and low-mass eclipsing binaries.

## Sources — the record of the discovery
- [MNRAS paper: "Automatic search for transiting planets in TESS–SPOC FFIs with RAVEN: over 100 newly validated planets and over 2000 vetted candidates", MNRAS 548, stag512 (2026)](https://academic.oup.com/mnras/article/548/3/stag512/8664081)
- [DOI: 10.1093/mnras/stag512](https://doi.org/10.1093/mnras/stag512)
- [Preprint (arXiv:2603.22597)](https://arxiv.org/abs/2603.22597)
- [Pipeline paper: "RAVEN: RAnking and Validation of ExoplaNets" (arXiv:2509.17645)](https://arxiv.org/abs/2509.17645)
- [University of Warwick press release: "AI approach uncovers dozens of hidden planets" (25 March 2026)](https://warwick.ac.uk/news/pressreleases/ai-approach-uncovers-dozens-of-hidden-planets/)
- [Supplementary material on Zenodo](https://zenodo.org/records/19661443)

---
*In this folder: **[PROMPT.md](./PROMPT.md)** (a prompt to explore it with AI) · **[CONTEXT.md](./CONTEXT.md)** (background & caveats). Part of the [AI Hall of Fame](../../README.md) → [🔭 Astronomy](../).*
