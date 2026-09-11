# 🤖 Explore this with AI: AXOL1TL in the CMS Level-1 Trigger

Paste the prompt below into your favorite AI assistant (Claude, ChatGPT, Gemini, or a local model). If your assistant can browse the web, tell it to read the sources first. The point is a clear, honest, grounded explanation of what happened and why it mattered.

> Since the 2024 LHC run, a quantised variational autoencoder running in the FPGA firmware of the CMS Level-1 Global Trigger has scored every proton-proton bunch crossing, 40 million times per second, and kept the most anomalous ones for analysis.

---

```text
You are a sharp, honest particle-physics and machine-learning explainer. Walk me through a specific, real AI deployment so that I actually understand it, not just the headline.

Topic: AXOL1TL (Anomaly eXtraction Online Level-1 Trigger aLgorithm), an unsupervised variational-autoencoder anomaly-detection trigger running in the production CMS Level-1 Global Trigger at the LHC since 2024, documented in CMS conference proceedings (arXiv:2411.19506, arXiv:2312.10009) and a CMS detector-performance note covering 2024 and 2025.

Please cover, in plain language a curious non-expert can follow:
1. What the CMS Level-1 trigger is: 40 MHz of bunch crossings, a fixed decision budget of about 4 microseconds, output around 100 kHz, and why anything it discards is gone forever. Why a hand-written trigger menu can only find what someone already expected.
2. How AXOL1TL works: a variational autoencoder trained unsupervised on Zero Bias data; inputs of up to 10 jets, 4 electrons/photons, 4 muons and missing transverse energy as (pT, eta, phi) hardware integers; only the encoder deployed; the anomaly score as the sum of squared latent means over an 8-dimensional latent space; five rate thresholds; compilation with hls4ml to Xilinx Virtex-7 FPGAs with a latency of about 50 ns.
3. The timeline: validation in the Global Trigger test crate during Run 3 in 2023, commissioning into the live trigger in 2024 (June 2024 per the ICHEP proceedings), and a 2025 update with a larger rate budget and a self-supervised feature-extraction stage. Mention the complementary CICADA algorithm briefly.
4. What the studies show: a 46% efficiency gain over the rest of the L1 menu at 1 kHz for an exotic Higgs decay to four b-quarks in simulation, selection that is largely orthogonal to the standard menu, and a preference for high-multiplicity topologies such as SUEPs.
5. Why it matters: first unsupervised ML selection in the production trigger of an LHC experiment; a new data stream chosen for strangeness rather than hypothesis; the engineering of nanosecond inference in a system that must not halt data-taking.
6. The honest caveats:
   - No discovery has been made in the AXOL1TL stream as of the cited sources.
   - Efficiency figures are from simulated signals.
   - "Anomalous" means unlike Zero Bias, which includes rare Standard Model processes and detector effects.
   - The rate budget is a small fraction of the L1 bandwidth.
   - The primary record is a collaboration note plus proceedings, not a refereed journal paper.
7. What I should read or explore next to go deeper.

Ground your answer in these sources (read them if you can, and cite them as you go):
- CMS detector-performance note (CDS): https://cds.cern.ch/record/2942560
- ICHEP 2024 proceedings: https://arxiv.org/abs/2411.19506
- 2023 test-crate paper: https://arxiv.org/abs/2312.10009
- Fast ML for Science 2025 talk: https://indico.cern.ch/event/1496673/contributions/6637931/
- ACAT 2025 poster: https://repository.cern/records/ck69a-51g13
- APS 2026 abstract: https://meetings-archive.aps.org/smt/2026/apr-h89/4/

Be concrete, use the collaboration's own numbers, and if you are unsure about a detail, say so instead of guessing.
```

## Bonus: have the agent check the engineering claims

The checkable objects are the latency and architecture numbers in the proceedings and the open-source hls4ml toolchain the firmware was built with. Have a capable assistant audit them rather than repeat them.

```
Open https://arxiv.org/abs/2411.19506 and https://arxiv.org/abs/2312.10009 and do three things.

1. Extract the network architecture (layer sizes, latent dimension, quantisation) and the reported FPGA resource usage and latency. Check whether a ~50 ns inference latency is consistent with the stated clock and pipeline depth of the Global Trigger board, and explain how that fits inside the roughly 4 microsecond Level-1 budget.

2. Explain why the deployed model computes the anomaly score from the latent means only (no decoder), and what that choice costs or gains relative to a reconstruction-error score.

3. List every performance number in the proceedings and label each one as "simulation" or "collision data". Then state, in one paragraph, exactly what has and has not been demonstrated on real data as of these sources.
```

---

## Sources
- [CMS detector performance note: "Anomaly detection with AXOL1TL at the CMS Level-1 Trigger in 2024 and 2025" (CERN Document Server)](https://cds.cern.ch/record/2942560)
- [ICHEP 2024 proceedings: "Real-time Anomaly Detection at the L1 Trigger of CMS Experiment" (arXiv:2411.19506)](https://arxiv.org/abs/2411.19506)
- ["Testing a Neural Network for Anomaly Detection in the CMS Global Trigger Test Crate during Run 3" (arXiv:2312.10009)](https://arxiv.org/abs/2312.10009)
- [Fast Machine Learning for Science 2025 talk: "Real-Time Anomaly Detection in the CMS Level-1 Trigger with AXOL1TL" (3 September 2025)](https://indico.cern.ch/event/1496673/contributions/6637931/)
- [ACAT 2025 poster: "Real-Time Unsupervised Anomaly Detection in the CMS Level-1 Trigger" (CERN repository)](https://repository.cern/records/ck69a-51g13)
- [APS Global Physics Summit 2026 abstract: "Anomaly Detection in the CMS Level 1 Trigger"](https://meetings-archive.aps.org/smt/2026/apr-h89/4/)

---
*Back to **[README.md](./README.md)** · **[CONTEXT.md](./CONTEXT.md)**.*
