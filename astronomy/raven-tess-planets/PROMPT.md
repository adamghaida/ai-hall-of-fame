# 🤖 Explore this with AI: RAVEN and the 118 newly validated TESS planets

Paste the prompt below into your favorite AI assistant (Claude, ChatGPT, Gemini, or a local model). If your assistant can browse the web, tell it to read the sources first. The point is a clear, honest, grounded explanation of what happened and why it mattered.

> A Warwick-led team ran an automated search-and-validation pipeline over TESS full-frame images of 2.26 million main-sequence stars, went from 5.7 million raw transit signals to 2,170 vetted candidates, and statistically validated 118 planets, 31 of them detected for the first time.

---

```text
You are a sharp, honest astronomy and machine-learning explainer. Walk me through a specific, real AI-assisted result so that I actually understand it, not just the headline.

Topic: Marina Lafarga Magro, David Armstrong and colleagues (University of Warwick) used the RAVEN pipeline to search and statistically validate transiting-planet candidates across 2.26 million TESS stars. Published in MNRAS 548, stag512, on 25 March 2026 (arXiv:2603.22597); pipeline described in Hadjigeorghiou et al., arXiv:2509.17645.

Please cover, in plain language a curious non-expert can follow:
1. What TESS full-frame images are, what a transit signal looks like, and why most of the 5,664,552 box-least-squares detections in this search are not planets (eclipsing binaries, blends, systematics).
2. How RAVEN works: machine-learning classifiers (XGBoost, Gaussian-process classifiers, self-organising maps for transit shape) trained on simulated planets and eight false-positive scenarios; scenario priors; a Bayesian posterior planet probability; "vetted" at 0.9 and "validated" at 0.99 with radius under 8 Earth radii. Explain why statistical validation is different from confirmation by mass measurement.
3. The funnel and the results: 2.26 million stars, sectors 1 to 55, periods 0.5 to 16 days, 14,815 candidates after classification, 2,170 vetted (over 1,000 new), 118 newly validated planets including 31 newly detected, 207 unvalidated large candidates, 4 single-transit candidates, 8 multi-candidate systems.
4. Why uniformity matters: how a pipeline with a measurable selection function enables the companion demographics result (about 9 to 10% of Sun-like stars with a close-in planet, about 0.08% in the Neptunian desert), and how this compares with the Kepler-90i neural-network search of 2017.
5. The honest caveats:
   - Validation is a model-dependent probability, not a mass.
   - 77 candidates dropped on rerun with refined ephemerides; probability scatter of order a per cent or more.
   - Planets above 8 Earth radii excluded because of the planet/brown-dwarf/eclipsing-binary degeneracy.
   - Restricted period range and stellar sample; a manual inspection step remains.
   - Be careful with the numbers: 118 newly validated (31 newly detected), over 2,000 vetted; larger totals elsewhere include previously known planets.
6. What I should read or explore next to go deeper.

Ground your answer in these sources (read them if you can, and cite them as you go):
- MNRAS paper: https://academic.oup.com/mnras/article/548/3/stag512/8664081
- Preprint: https://arxiv.org/abs/2603.22597
- Pipeline paper: https://arxiv.org/abs/2509.17645
- Warwick press release: https://warwick.ac.uk/news/pressreleases/ai-approach-uncovers-dozens-of-hidden-planets/
- Supplementary material: https://zenodo.org/records/19661443

Be concrete, use the paper's own numbers, clearly separate validated planets from candidates, and if you are unsure about a detail, say so instead of guessing.
```

## Bonus: have the agent check the catalogue

The result is a concrete, checkable object: a published candidate table with probabilities. Have a capable assistant test the claim rather than repeat it.

```
Open https://arxiv.org/abs/2603.22597 and the supplementary material at https://zenodo.org/records/19661443, and do three things.

1. Reconstruct the funnel from the paper's tables: 5,664,552 BLS detections, 14,815 after classification, 2,170 vetted, 118 newly validated (31 newly detected). Check that the numbers in the tables are consistent with the abstract, and identify exactly which subset each headline number refers to (new vs previously known, validated vs vetted).

2. From the candidate table, count how many objects have planet probability between 0.99 and 0.995. Given the authors' statement that probabilities scatter at the level of a per cent or more, estimate how many "validated" planets sit close enough to the threshold that a rerun could move them, and compare with the 77 candidates that were dropped on rerun.

3. Pick five newly validated planets and cross-match them against the NASA Exoplanet Archive or the TESS TOI list. Report whether each had been previously flagged as a candidate, and whether any has since received a mass measurement or been contested.
```

---

## Sources
- [MNRAS paper: "Automatic search for transiting planets in TESS–SPOC FFIs with RAVEN", MNRAS 548, stag512 (2026)](https://academic.oup.com/mnras/article/548/3/stag512/8664081)
- [DOI: 10.1093/mnras/stag512](https://doi.org/10.1093/mnras/stag512)
- [Preprint (arXiv:2603.22597)](https://arxiv.org/abs/2603.22597)
- [Pipeline paper: "RAVEN: RAnking and Validation of ExoplaNets" (arXiv:2509.17645)](https://arxiv.org/abs/2509.17645)
- [University of Warwick press release (25 March 2026)](https://warwick.ac.uk/news/pressreleases/ai-approach-uncovers-dozens-of-hidden-planets/)
- [Supplementary material on Zenodo](https://zenodo.org/records/19661443)

---
*Back to **[README.md](./README.md)** · **[CONTEXT.md](./CONTEXT.md)**.*
