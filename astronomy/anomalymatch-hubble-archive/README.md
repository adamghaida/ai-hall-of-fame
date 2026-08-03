# AnomalyMatch: an AI sweep of the Hubble archive surfaces 1,339 odd objects

**Field:** 🔭 Astronomy  ·  **When:** December 2025

> Two ESA researchers pointed a semi-supervised classifier at 99.6 million Hubble cutouts, searched the whole archive in about two and a half days, and flagged 1,339 objects - 1,176 unique anomalies once ~10% false positives were classified out, 811 of them with no prior mention in the literature.

## What happened
David O'Ryan and Pablo Gómez of the European Space Agency ran **AnomalyMatch**, an anomaly-detection tool they and colleagues built, across **99.6 million image cutouts** covering the entire **Hubble Legacy Archive**. The authors describe it as "the first comprehensive systematic anomaly search of the entire HLA." The published paper appeared in *Astronomy & Astrophysics* on **16 December 2025**; ESA and NASA issued press releases on **27 January 2026**.

AnomalyMatch treats "anomaly" as a binary classification problem and combines the semi-supervised **FixMatch** algorithm (EfficientNet backbone, trained here from just three labelled anomalies plus 128 labelled nominal images and a pool of ~99.6 million unlabelled cutouts) with **active learning**, where a human reviews the top-ranked candidates each round and corrects the model's mistakes. Training took under four hours on a GPU and the full-archive inference pass took **two to three days** on ESA Datalabs.

The two authors then **visually inspected the 5,000 highest-ranked candidates** by hand. After removing duplicates, that left **1,339 unique objects**, which the authors then classified by eye. Cross-checking each one against SIMBAD and ESASky with a 3-arcsecond cone search, **811 had no associated published work** at the time of writing. The paper's headline results are **86 new candidate gravitational lenses, 18 jellyfish galaxies, and 417 mergers or interacting galaxies**, alongside clumpy star-forming galaxies, edge-on protoplanetary disks, lensed quasars, and **43 objects the authors could not classify at all** and released to the community as-is.

Roughly 10% of those 1,339 turned out to be nominal images, artifacts, or dense star fields rather than real anomalies - the contamination rate the authors quote. Note the scoping: these false positives are counted *inside* the 1,339 rather than filtered out before it. Table 1 assigns 163 of the 1,339 to the "Nominal Galaxy" class, and the released catalogue accordingly holds 1,176 unique anomalies.

## Why it matters
The Hubble archive is 35 years deep and has been picked over by astronomers for decades, so finding several hundred undocumented oddities in it is a concrete demonstration that archival data is far from exhausted. The more transferable point is the method: a model bootstrapped from a handful of labelled examples, kept honest by a human in an active-learning loop, can rank 100 million images in days rather than the years a manual or citizen-science pass would take. That is the regime the next generation of surveys lands in, with Euclid, Rubin, and Roman producing data volumes no human inspection campaign can cover. The same tool has since been applied to JWST NIRCam data, and the code is open source.

The honest framing: this produced a **candidate list**, not confirmations. "Looks anomalous" is not the same as "scientifically new," and the authors say so plainly about their lens candidates.

## Sources — the record of the discovery
- [Peer-reviewed paper: "Identifying astrophysical anomalies in 99.6 million source cutouts from the Hubble legacy archive using AnomalyMatch", A&A 704, A227 (2025)](https://www.aanda.org/articles/aa/full_html/2025/12/aa55512-25/aa55512-25.html)
- [DOI: 10.1051/0004-6361/202555512](https://doi.org/10.1051/0004-6361/202555512)
- [Preprint (arXiv:2505.03508)](https://arxiv.org/abs/2505.03508)
- [Method paper: "AnomalyMatch: Discovering Rare Objects of Interest with Semi-supervised and Active Learning" (arXiv:2505.03509)](https://arxiv.org/abs/2505.03509)
- [ESA/Hubble release heic2603 (27 January 2026)](https://esahubble.org/news/heic2603/)
- [ESA: "1400 quirky objects found in Hubble's archive"](https://www.esa.int/Science_Exploration/Space_Science/1400_quirky_objects_found_in_Hubble_s_archive)
- [NASA Science: "AI Unlocks Hundreds of Cosmic Anomalies in Hubble Archive"](https://science.nasa.gov/missions/hubble/ai-unlocks-hundreds-of-cosmic-anomalies-in-hubble-archive/)
- [AnomalyMatch source code (ESA, GitHub)](https://github.com/esa/AnomalyMatch)
- [Candidate catalogue at CDS/VizieR: J/A+A/704/A227](https://cdsarc.cds.unistra.fr/viz-bin/cat/J/A+A/704/A227)
- [Catalogue and cutout images on Zenodo (DOI: 10.5281/zenodo.15298641)](https://doi.org/10.5281/zenodo.15298641)

---
*In this folder: **[PROMPT.md](./PROMPT.md)** (a prompt to explore it with AI) · **[CONTEXT.md](./CONTEXT.md)** (background & caveats). Part of the [AI Hall of Fame](../../README.md) → [🔭 Astronomy](../).*
