# AXOL1TL: an autoencoder decides in nanoseconds which LHC collisions CMS keeps

**Field:** ⚛️ Physics  ·  **When:** June 2024 · CMS Level-1 Trigger, LHC Run 3

> Since the 2024 LHC run, a quantised variational autoencoder running in the FPGA firmware of the CMS Level-1 Global Trigger has scored every proton-proton bunch crossing, 40 million times per second, and kept the most anomalous ones for analysis, the first unsupervised machine-learning selection running in the production trigger of a major collider experiment.

## What happened
The LHC collides proton bunches in CMS at **40 MHz**. The detector cannot record that; the **Level-1 (L1) trigger**, a system of custom electronics, must decide for each crossing within a fixed budget of about **4 µs** whether to keep or discard it, reducing the rate to roughly **100 kHz**. Historically those decisions are rule-based: keep events with a high-energy muon, a big jet, large missing energy, and so on. Any new physics that does not look like a pre-written rule is thrown away before anyone sees it.

**AXOL1TL** (Anomaly eXtraction Online Level-1 Trigger aLgorithm) replaces one slice of that decision with an unsupervised model. It is a small **variational autoencoder** trained on unbiased "Zero Bias" collision data so that it learns what an ordinary event looks like. Its inputs are the L1-reconstructed 3-momenta (pT, η, φ) of up to 10 jets, 4 electrons/photons, 4 muons and the missing transverse energy, as raw hardware integers. At run time only the encoder runs: the anomaly score is the sum of squared means of the 8-dimensional latent vector, and events above a threshold are kept. Five operating points (very tight to very loose) trade rate for sensitivity. The model was translated to firmware with **hls4ml** and runs on the **Xilinx Virtex-7** FPGAs of the Global Trigger board with an inference latency of about **50 ns**, comfortably inside the L1 budget.

After testing in the Global Trigger "test crate" (a parallel copy of the trigger that sees the same data but does not control readout) during Run 3 in 2023, AXOL1TL was commissioned into the live Level-1 system in 2024; the ICHEP 2024 proceedings describe commissioning during June 2024 data-taking. In 2025 CMS deployed an updated model with an increased rate budget and a new self-supervised feature-extraction stage. The CMS collaboration's detector-performance note covers its operation in 2024 and 2025. In simulation studies reported in the proceedings, AXOL1TL running at 1 kHz gave a **46% efficiency gain** over the rest of the L1 menu for an exotic Higgs decay to four b-quarks, and the events it selects are largely orthogonal to those picked by the standard menu, skewing towards higher-multiplicity final states.

## Why it matters
Trigger decisions are irreversible: whatever the L1 discards is gone. Putting an unsupervised model in that path means CMS now records a stream of collisions chosen because they are unusual rather than because they match a hypothesis, which is the first time this has been done in the production trigger of an LHC experiment. It is also a hard engineering result: a neural network quantised and compiled to run in about 50 ns on an FPGA, in a system where a firmware fault can stop data-taking, and kept running across two years of operation.

The honest framing: as of the sources here, no new physics has been found in the AXOL1TL stream. It is a new way of collecting data, and the physics analyses of that data are still to come.

## Sources — the record of the discovery
- [CMS detector performance note: "Anomaly detection with AXOL1TL at the CMS Level-1 Trigger in 2024 and 2025" (CERN Document Server)](https://cds.cern.ch/record/2942560)
- [ICHEP 2024 proceedings: "Real-time Anomaly Detection at the L1 Trigger of CMS Experiment" (arXiv:2411.19506)](https://arxiv.org/abs/2411.19506)
- ["Testing a Neural Network for Anomaly Detection in the CMS Global Trigger Test Crate during Run 3" (arXiv:2312.10009)](https://arxiv.org/abs/2312.10009)
- [Fast Machine Learning for Science 2025 talk: "Real-Time Anomaly Detection in the CMS Level-1 Trigger with AXOL1TL" (3 September 2025)](https://indico.cern.ch/event/1496673/contributions/6637931/)
- [ACAT 2025 poster: "Real-Time Unsupervised Anomaly Detection in the CMS Level-1 Trigger" (CERN repository)](https://repository.cern/records/ck69a-51g13)
- [APS Global Physics Summit 2026 abstract: "Anomaly Detection in the CMS Level 1 Trigger"](https://meetings-archive.aps.org/smt/2026/apr-h89/4/)

---
*In this folder: **[PROMPT.md](./PROMPT.md)** (a prompt to explore it with AI) · **[CONTEXT.md](./CONTEXT.md)** (background & caveats). Part of the [AI Hall of Fame](../../README.md) → [⚛️ Physics](../).*
