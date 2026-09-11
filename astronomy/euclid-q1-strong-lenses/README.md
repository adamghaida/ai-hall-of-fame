# Euclid's strong-lensing discovery engine: 497 gravitational lenses from 0.45% of the survey

**Field:** 🔭 Astronomy  ·  **When:** March 2025 · Euclid Quick Data Release 1 (arXiv, Euclid Collaboration)

> In the first 63 square degrees of Euclid data, a deep-learning sweep followed by Space Warps volunteers and expert vetting produced 497 galaxy-galaxy strong lens candidates, 250 of them grade A and 243 of those never published before, roughly doubling the number of known lens candidates with space-based imaging.

## What happened
ESA's Euclid telescope released its first "quick" dataset (Q1) on **19 March 2025**: 63 square degrees of deep-field imaging, about 0.45% of the area the mission will eventually cover. Strong gravitational lenses, where a foreground galaxy bends the light of a background galaxy into arcs and rings, are rare (of order one per few thousand galaxies) and were previously found by hand or by single classifiers on ground-based images. The Euclid Collaboration's **Strong Lensing Discovery Engine** paper (lead author **M. Walmsley**, arXiv:2503.15324, posted the same day) describes a four-stage pipeline built to find them at scale.

First, an **ensemble of deep-learning models** scanned the Q1 galaxies; the best performer was **Zoobot**, a general-purpose galaxy-morphology model pre-trained on Galaxy Zoo classifications rather than a lens-specific network. Second, the machine-ranked candidates went to **Space Warps**, a citizen-science project, where more than **1,000 volunteers** made over **800,000 classifications** of the images. Third, strong-lensing experts vetted the survivors and assigned grades. Fourth, each system was individually modelled. The result is a catalogue of **497** galaxy-galaxy strong lens candidates, **250 graded A** (highest confidence), of which **243 were previously unpublished**; only 7 grade-A systems were already known. The sample includes rare configurations Euclid's resolution makes visible: four double-source-plane lenses, edge-on lenses, complete Einstein rings and quadruply imaged sources, and, for the first time in large numbers from space, lenses with Einstein radii below one arcsecond.

The authors state that the same search, run unchanged on Euclid's first full data release, would yield about **7,000** grade A or B candidates by late 2026, and that the complete survey should produce more than **100,000**, compared with a few hundred confirmed lenses known before Euclid.

## Why it matters
Strong lenses are tools: they weigh dark-matter halos, magnify galaxies too faint to see otherwise, and, with time delays or double source planes, constrain the expansion of the Universe. The bottleneck was always finding them. This pipeline shows that a generalist vision model, a large volunteer pool and a small number of experts can process a space-telescope survey fast enough to keep pace with it, and it doubled the space-based lens candidate count from a sliver of the survey. It is a working template for Euclid's later releases and for Rubin and Roman, and a companion to the archive sweep in [AnomalyMatch](../anomalymatch-hubble-archive/): both use machine ranking plus human review, but here the human stage is thousands of citizen scientists rather than two researchers.

The honest framing: these are candidates graded by eye, not spectroscopically confirmed lenses, and the paper itself says "all numbers are approximate due to the subjective nature of grading and the varying details of each search approach."

## Sources — the record of the discovery
- [Euclid Collaboration, Walmsley et al.: "Euclid Quick Data Release (Q1): The Strong Lensing Discovery Engine A – System overview and lens catalogue" (arXiv:2503.15324)](https://arxiv.org/abs/2503.15324)
- [ESA: "Euclid opens data treasure trove, offers glimpse of deep fields" (19 March 2025)](https://www.esa.int/Science_Exploration/Space_Science/Euclid/Euclid_opens_data_treasure_trove_offers_glimpse_of_deep_fields)
- [Space Warps blog: "Space Warps helps to find 497 spectacular lenses in Euclid data" (19 March 2025)](https://blog.spacewarps.org/2025/03/19/space-warps-helps-to-find-497-spectacular-lenses-in-euclid-data/)

---
*In this folder: **[PROMPT.md](./PROMPT.md)** (a prompt to explore it with AI) · **[CONTEXT.md](./CONTEXT.md)** (background & caveats). Part of the [AI Hall of Fame](../../README.md) → [🔭 Astronomy](../).*
