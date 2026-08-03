# 🤖 Explore this with AI: AnomalyMatch and the 1,339 oddities in Hubble's archive

Paste the prompt below into your favorite AI assistant (Claude, ChatGPT, Gemini, or a local model). If your assistant can browse the web, tell it to read the sources first. The point is a clear, honest, grounded explanation of what happened and why it mattered.

> Two ESA researchers pointed a semi-supervised classifier at 99.6 million Hubble cutouts, searched the whole archive in about two and a half days, and flagged 1,339 objects - 1,176 unique anomalies once ~10% false positives were classified out, 811 of them with no prior mention in the literature.

---

```text
You are a sharp, honest astronomy and machine-learning explainer. Walk me through a specific, real AI-assisted result so that I actually understand it, not just the headline.

Topic: David O'Ryan and Pablo Gomez (European Space Agency) used a tool called AnomalyMatch to search 99.6 million image cutouts from the entire Hubble Legacy Archive, published in Astronomy & Astrophysics (A&A 704, A227) on 16 December 2025, with ESA and NASA press releases on 27 January 2026.

Please cover, in plain language a curious non-expert can follow:
1. What the Hubble Legacy Archive is, what an "image cutout" is here, and why nobody had systematically searched all of it for anomalies before.
2. How AnomalyMatch actually works: anomaly detection framed as binary classification, the semi-supervised FixMatch algorithm with an EfficientNet backbone, starting from only three labelled anomalies plus 128 labelled nominal images, and the active-learning loop where a human corrects the top-ranked candidates between rounds. Explain why semi-supervised learning is the natural fit when labels are scarce and the positive class is vanishingly rare.
3. What was actually found: 1,339 unique objects after the authors visually inspected the top 5,000 ranked candidates, of which 1,176 survived classification as genuine anomalies (~10% were nominal false positives, counted within the 1,339, not removed before it); 811 with no associated published work found via a 3-arcsecond cone search in SIMBAD and ESASky; the headline categories of 86 new candidate gravitational lenses, 18 jellyfish galaxies, and 417 mergers or interacting galaxies; and the 43 objects the authors could not classify.
4. What each of those object types is and why an astronomer cares (jellyfish galaxies, gravitational lenses, clumpy star-forming galaxies, edge-on protoplanetary disks).
5. The honest caveats. Be rigorous here:
   - "Anomalous-looking" is not the same as "scientifically new". These are candidates.
   - The paper itself says the lens candidates "require either follow-up observations or modelling" and were not confirmed.
   - "No reference found in SIMBAD/ESASky" is a weaker claim than "a new class of object"; it can mean nobody has written about that specific source, not that it is unusual physics.
   - Roughly 10% of the 1,339 were nominal images, artifacts, or dense star fields. These false positives are counted *within* the 1,339, not removed beforehand: Table 1 puts 163 of them in the "Nominal Galaxy" class, and the released catalogue holds 1,176 unique anomalies. Archival anomaly detection surfaces instrument and processing defects too.
   - Known selection effects: the search used ACS/WFC F814W data, greyscale JPEG cutouts (the authors flag loss of low-surface-brightness detail), and source "shredding" in the Hubble Source Catalogue duplicated large extended objects.
   - The archive footprint is not a survey; Hubble pointed where astronomers asked it to, so the sample is not statistically representative of the sky.
6. Why this matters for Euclid, the Vera C. Rubin Observatory, and the Nancy Grace Roman Space Telescope, where the data volumes rule out exhaustive human inspection.

Ground your answer in these sources (read them if you can, and cite them as you go):
- Peer-reviewed paper (A&A 704, A227, 2025): https://www.aanda.org/articles/aa/full_html/2025/12/aa55512-25/aa55512-25.html
- DOI: https://doi.org/10.1051/0004-6361/202555512
- Preprint: https://arxiv.org/abs/2505.03508
- AnomalyMatch method paper: https://arxiv.org/abs/2505.03509
- ESA/Hubble release: https://esahubble.org/news/heic2603/
- NASA Science writeup: https://science.nasa.gov/missions/hubble/ai-unlocks-hundreds-of-cosmic-anomalies-in-hubble-archive/

Be concrete, use the papers' own numbers, clearly separate confirmed results from candidates awaiting follow-up, and if you are unsure about a detail, say so instead of guessing.
```

## Bonus: have the agent check the numbers and the code

The result is a concrete, checkable object: a published candidate catalogue and an open-source tool. Have a capable assistant test the claim rather than repeat it.

```
Open https://www.aanda.org/articles/aa/full_html/2025/12/aa55512-25/aa55512-25.html and do three things.

1. Reconcile the numbers. The abstract reports 86 new candidate gravitational lenses, 18 jellyfish galaxies, and 417 mergers. The body reports larger totals for each category. Work out exactly which number is the total found and which is the previously-unreferenced subset, and check that the per-category counts are consistent with the 1,339 unique anomalies and the 811 unreferenced objects. Flag any arithmetic that does not add up. Note in particular that the lens count is inconsistent even within the published paper: the A&A abstract says 86 new candidate lenses (matching Table 1's 140 found minus 54 already referenced), while the "Our contributions" list in the introduction says 138 - which is also what the current arXiv v3 abstract still reports. This is a live discrepancy, not a superseded draft.

2. Audit the novelty claim. The authors used a 3-arcsecond cone search in SIMBAD and ESASky to decide an object was "unreferenced". Assess how strong that test is: what would it miss, what would it falsely flag as new, and what would you need to do to upgrade "unreferenced" to "genuinely new object"?

3. Read https://github.com/esa/AnomalyMatch and summarize what the code actually does at the level of the training loop: how FixMatch's weak/strong augmentation and pseudo-labelling are set up, how the active-learning round is fed back in, and what the class-imbalance handling looks like.
```

---

## Sources
- [Peer-reviewed paper (A&A 704, A227, 2025)](https://www.aanda.org/articles/aa/full_html/2025/12/aa55512-25/aa55512-25.html)
- [DOI: 10.1051/0004-6361/202555512](https://doi.org/10.1051/0004-6361/202555512)
- [Preprint (arXiv:2505.03508)](https://arxiv.org/abs/2505.03508)
- [AnomalyMatch method paper (arXiv:2505.03509)](https://arxiv.org/abs/2505.03509)
- [ESA/Hubble release heic2603](https://esahubble.org/news/heic2603/)
- [NASA Science writeup](https://science.nasa.gov/missions/hubble/ai-unlocks-hundreds-of-cosmic-anomalies-in-hubble-archive/)
- [AnomalyMatch source code (ESA, GitHub)](https://github.com/esa/AnomalyMatch)
- [Candidate catalogue at CDS/VizieR: J/A+A/704/A227](https://cdsarc.cds.unistra.fr/viz-bin/cat/J/A+A/704/A227)
- [Catalogue and cutout images on Zenodo (DOI: 10.5281/zenodo.15298641)](https://doi.org/10.5281/zenodo.15298641)

---
*Back to **[README.md](./README.md)** · **[CONTEXT.md](./CONTEXT.md)**.*
