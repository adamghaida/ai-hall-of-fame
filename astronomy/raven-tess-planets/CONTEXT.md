# 📚 Context: RAVEN and the uniform TESS planet search

**The people.** The search paper is led by **Marina Lafarga Magro** (postdoctoral researcher, University of Warwick), with **David J. Armstrong** (associate professor, Warwick), **Kaiming Cui**, **Andreas Hadjigeorghiou**, Vedad Kunovac, Lauren Doyle, E. M. Bryant, Rodrigo F. Díaz, Luis Agustín Nieto and A. Osborn. It is *MNRAS* volume 548, issue 3, article stag512, published 25 March 2026 (arXiv:2603.22597, v1 23 March 2026, v2 24 April 2026). The pipeline paper, "RAVEN: RAnking and Validation of ExoplaNets", is led by Hadjigeorghiou (arXiv:2509.17645, submitted 22 September 2025). A demographics paper by Cui and colleagues (MNRAS, DOI 10.1093/mnras/stag022) uses the resulting sample. Warwick issued a press release on 25 March 2026.

**The problem.** TESS observes almost the whole sky in 27-day sectors and delivers light curves for millions of stars through its full-frame images. Finding transits in those is the easy part; a box-least-squares search returns millions of signals, most of them noise, eclipsing binaries, blended background stars or instrumental artefacts. Deciding which are planets has traditionally combined automated triage with human vetting and then, for confirmation, expensive follow-up observations or per-target statistical validation. That process is slow, and because the human steps are hard to model, the resulting catalogue's completeness is hard to quantify, which limits demographic studies.

**How RAVEN works.** RAVEN takes a candidate signal and computes the probability that it is a planet versus each of eight astrophysical false-positive scenarios (for example eclipsing binaries on the target, on a blended neighbour, or at twice the period). Machine-learning classifiers (gradient-boosted decision trees via XGBoost, Gaussian-process classifiers, and self-organising maps summarising transit shape) are trained on realistic simulated light curves for each scenario. Their outputs are combined with scenario-specific priors, which depend on the star's position and properties, into a Bayesian posterior. A candidate is "vetted" at posterior planet probability of at least 0.9 and "validated" at 0.99 if its radius is also below 8 Earth radii. On 1,361 previously classified TESS objects the pipeline reached 91% accuracy and 97% precision at the 0.9 threshold. The team offers it as a cloud application.

**The search.** The input was a magnitude-limited sample of 2.26 million main-sequence stars with good Gaia characterisation, using TESS-SPOC full-frame-image light curves from sectors 1 to 55 (the first four years). Periods of 0.5 to 16 days and radii up to 16 Earth radii were searched. The funnel: 5,664,552 BLS detections; 14,815 after the false-positive classifiers; 2,170 in the final vetted sample (over 1,000 new), after a manual pass removing candidates with correlated noise, low signal-to-noise or transits near data gaps; 118 newly validated planets, 31 of them newly detected. The paper also lists 207 high-probability candidates above 8 Earth radii that are deliberately not validated, 4 new single-transit candidates, and 8 systems with additional candidates.

**Lineage.** Machine-learned ranking of transit candidates goes back to Kepler-era work, including the neural network that found [Kepler-90i](../kepler-90i-exoplanet/) in 2017. Statistical validation has usually been applied one target at a time. RAVEN's step is to run ranking and validation uniformly over millions of stars, in the same spirit as the archive-scale sweep in [AnomalyMatch](../anomalymatch-hubble-archive/), but with the aim of a catalogue whose selection function is known.

## Why it's in the Hall of Fame
It is a documented, peer-reviewed result with concrete numbers: 118 newly validated planets, 31 new detections and a vetted sample of 2,170 candidates from a single uniform machine-learning pass over 2.26 million stars, plus a demographic measurement that the uniformity made possible. It demonstrates that the validation step, not only the detection step, can be automated at survey scale.

## Honest caveats
- **Statistical validation is not confirmation.** A "validated" planet has posterior probability above 0.99 under RAVEN's models and priors. No masses were measured. If the simulations or priors miss a false-positive mode, the probability is overstated.
- **Probabilities have scatter.** Rerunning candidates with refined ephemerides removed 77 of them, and the authors quote scatter in estimated probabilities "of order of a per cent or more". Objects near the 0.99 line can cross it either way.
- **Large planets excluded by design.** Candidates larger than 8 Earth radii (207 of them at high probability) are not validated because planets, brown dwarfs and low-mass eclipsing binaries are degenerate in a light curve.
- **Restricted parameter space.** Periods of 0.5 to 16 days only, on main-sequence stars with good Gaia data, using FFI cadence; longer-period and single-sector signals have different false-positive behaviour and were left out.
- **A manual step remains.** The final vetted sample was inspected by eye to remove correlated-noise, low-S/N and data-gap cases, so the pipeline is not entirely human-free.
- **Numbers in circulation differ.** The press release headlines "118 newly validated planets" and "31 newly detected"; the paper's tables also count previously validated planets recovered by the pipeline, so totals quoted elsewhere can be larger. Use the abstract's numbers: 118 newly validated, including 31 newly detected, and over 2,000 vetted candidates including roughly 1,000 new.

## Sources
- [MNRAS paper: "Automatic search for transiting planets in TESS–SPOC FFIs with RAVEN", MNRAS 548, stag512 (2026)](https://academic.oup.com/mnras/article/548/3/stag512/8664081)
- [DOI: 10.1093/mnras/stag512](https://doi.org/10.1093/mnras/stag512)
- [Preprint (arXiv:2603.22597)](https://arxiv.org/abs/2603.22597)
- [Pipeline paper: "RAVEN: RAnking and Validation of ExoplaNets" (arXiv:2509.17645)](https://arxiv.org/abs/2509.17645)
- [University of Warwick press release (25 March 2026)](https://warwick.ac.uk/news/pressreleases/ai-approach-uncovers-dozens-of-hidden-planets/)
- [Supplementary material on Zenodo](https://zenodo.org/records/19661443)

---
*Back to **[README.md](./README.md)** · **[PROMPT.md](./PROMPT.md)**.*
