# BTSbot: the first supernova discovered, confirmed and announced with no human in the loop

**Field:** 🔭 Astronomy  ·  **When:** October 2023 · The Astrophysical Journal (2024 and 2025)

> In October 2023 a neural network watching the Zwicky Transient Facility's alert stream spotted SN 2023tyk, requested a spectrum from a robotic telescope, had it classified as a Type Ia supernova and reported it to the community without a person touching any step; by 2025 the same system had sent more than 1,200 automated follow-up requests and caught a supernova 18.5 Mpc away with a spectrum just 17 hours after first light.

## What happened
The Zwicky Transient Facility (ZTF) at Palomar scans the northern sky every few nights and produces a continuous stream of alerts. Its Bright Transient Survey (BTS) aims to spectroscopically classify every extragalactic transient brighter than 18.5 mag, which until 2023 meant human "scanners" inspecting candidates daily and requesting spectra by hand, roughly 2,200 hours of inspection over six years according to Northwestern's release.

**BTSbot**, built by **Nabeel Rehemtulla** and **Adam Miller** at Northwestern University with ZTF collaborators, is a multi-modal convolutional neural network trained on about 1.4 million historical ZTF images that scores each alert on whether it is a real bright extragalactic transient. It was integrated into ZTF's Fritz marshal so that, above a score threshold, it automatically requests a spectrum from the **SED Machine** (SEDM), a robotic spectrograph on Palomar's 60-inch telescope, whose output is classified by another algorithm, SNIascore. On **3 October 2023** ZTF first detected the source; on **5 October** BTSbot flagged it and triggered SEDM; on **7 October** the classification of **SN 2023tyk** as a Type Ia supernova was posted publicly, the first time, in Miller's words, that "a series of robots and AI algorithms has observed, then identified, then communicated with another telescope to finally confirm the discovery of a supernova". The system paper (*ApJ* 972, 7, 2024; arXiv:2401.15167) reports that BTSbot recovered every bright transient in its test set, matched human scanners, acted about an hour faster, and in live October 2023 operation selected 296 sources of which 93% were real extragalactic transients.

A follow-on program, **BTSbot-nearby**, filters ZTF alerts for BTSbot-scored transients coincident with galaxies closer than 60 Mpc and fires target-of-opportunity requests immediately. Its showcase is **SN 2024jlf** (*ApJ* 985, 241, published **29 May 2025**; arXiv:2501.18686), a Type IIP supernova at 18.45 ± 3.7 Mpc: the trigger went out about **7 minutes** after the ZTF detection, roughly 2.5 hours before any human scanner looked at it, and the first spectrum was taken **0.7 days (about 17 hours) after first light**. That spectrum caught short-lived "flash ionisation" lines of hydrogen, helium and carbon that faded within 1.3 to 1.8 days, a window human-triggered follow-up (typically a day or more of latency) usually misses. The 2025 paper states that since its October 2023 deployment BTSbot has sent more than **1,200 automated spectroscopic follow-up requests**.

## Why it matters
Transient astronomy is a race against time, and the slowest step was always a person deciding what to observe. BTSbot closed the loop from detection to spectrum to public classification entirely by machine, on a production survey, and kept it running for years rather than as a demo. The scientific payoff is concrete: early spectra hours after explosion probe the star's final mass loss, a regime almost unexplored because nobody could react fast enough. The lineage runs from machine ranking of survey data, as in [Kepler-90i](../kepler-90i-exoplanet/) and [AnomalyMatch](../anomalymatch-hubble-archive/), to machine action: here the model does not hand a list to a human, it points a telescope.

The honest framing: the automation removes humans from the decision, not from the science. Classification still depends on SEDM getting a usable spectrum, the pipeline needs two detections before it will trigger, and the model cannot by itself reject asteroids or satellites.

## Sources — the record of the discovery
- [ApJ paper (2025): "The BTSbot-nearby Discovery of SN 2024jlf: Rapid, Autonomous Follow-up Probes Interaction in an 18.5 Mpc Type IIP Supernova", ApJ 985, 241](https://iopscience.iop.org/article/10.3847/1538-4357/adcf1e)
- [Preprint of the SN 2024jlf paper (arXiv:2501.18686)](https://arxiv.org/abs/2501.18686)
- [System paper: "The Zwicky Transient Facility Bright Transient Survey. III. BTSbot: Automated Identification and Follow-up of Bright Transients with Deep Learning", ApJ 972, 7 (2024) (arXiv:2401.15167)](https://arxiv.org/abs/2401.15167)
- [Northwestern news: "First supernova detected, confirmed, classified and shared by AI" (13 October 2023)](https://news.northwestern.edu/stories/2023/10/first-supernova-detected-confirmed-classified-and-shared-by-ai/)
- [BTSbot source code and pre-trained models (GitHub, MIT licence)](https://github.com/nabeelre/BTSbot)

---
*In this folder: **[PROMPT.md](./PROMPT.md)** (a prompt to explore it with AI) · **[CONTEXT.md](./CONTEXT.md)** (background & caveats). Part of the [AI Hall of Fame](../../README.md) → [🔭 Astronomy](../).*
