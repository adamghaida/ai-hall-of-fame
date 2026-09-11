# Deep Loop Shaping: a reinforcement-learned controller quiets LIGO's noisiest feedback loop

**Field:** ⚛️ Physics  ·  **When:** September 2025 · Science

> On the real LIGO Livingston detector, a controller trained by reinforcement learning with frequency-domain rewards cut the control noise from the observatory's most unstable mirror-stabilisation loop by more than 30x across the 10 to 30 Hz band, and up to 100x in sub-bands, the frequencies where mergers of intermediate-mass black holes would appear.

## What happened
LIGO measures gravitational waves as changes of about 10^-19 m in the separation of 40 kg mirrors suspended 4 km apart. Those mirrors have to be actively held in place against seismic motion, but the feedback controllers that do the holding inject their own noise back into the measurement. At low frequencies (tens of hertz), that "controller-induced" noise is a major obstacle to sensitivity, and it is exactly the band where the heaviest black-hole mergers ring.

Google DeepMind, Caltech's LIGO Laboratory and the Gran Sasso Science Institute developed **Deep Loop Shaping**, a reinforcement-learning method whose reward is expressed in the frequency domain: the agent is rewarded for suppressing mirror motion where it must, and penalised for injecting noise into the gravitational-wave observation band. The paper, "Improving cosmological reach of a gravitational wave observatory using Deep Loop Shaping" (**Science 389, 1012 to 1015, published 4 September 2025**; first authors **Jonas Buchli** and **Brendan Tracey**), reports that a learned controller installed on the **LIGO Livingston Observatory** reduced control noise in the **10 to 30 Hz band by more than 30x**, and by **up to 100x in sub-bands**, relative to the existing controller, in the loop the authors describe as the detector's most unstable and difficult to control.

The hardware test ran for about an hour on the live detector. The authors and the blog framing describe it as a proof of concept; extending the method across all of LIGO's mirror-control loops is stated as the next step.

## Why it matters
Better low-frequency sensitivity is not an incremental gain. The abstract lists what it would unlock: mergers of intermediate-mass black holes (hundreds of solar masses), measurement of binary black-hole orbital eccentricity, and earlier warning of binary neutron-star mergers for multi-messenger astronomy. Control noise was the specific obstacle at those frequencies, and this is the first demonstration on an operating gravitational-wave detector that a learned controller can remove it rather than just trade it off against stability. Classical loop shaping is a decades-old discipline; the contribution is to make its objective (a target noise spectrum) directly optimisable by reinforcement learning, then show the result transfers from simulation to a 40 kg mirror on a working instrument.

The honest framing: one loop, one hour, one detector. Nothing in the paper claims that LIGO's routine observing runs now use this controller, and the sensitivity gain in the full detector depends on applying it across many loops.

## Sources — the record of the discovery
- [Science paper: "Improving cosmological reach of a gravitational wave observatory using Deep Loop Shaping", Science 389, 1012–1015 (2025)](https://www.science.org/doi/10.1126/science.adw1291)
- [Preprint (arXiv:2509.14016)](https://arxiv.org/abs/2509.14016)
- [Google DeepMind blog: "Using AI to perceive the universe in greater depth" (4 September 2025)](https://deepmind.google/discover/blog/using-ai-to-perceive-the-universe-in-greater-depth/)
- [Phys.org: "New algorithm hushes unwanted noise in LIGO, may lead to more black hole discoveries" (4 September 2025)](https://phys.org/news/2025-09-algorithm-hushes-unwanted-noise-ligo.html)

---
*In this folder: **[PROMPT.md](./PROMPT.md)** (a prompt to explore it with AI) · **[CONTEXT.md](./CONTEXT.md)** (background & caveats). Part of the [AI Hall of Fame](../../README.md) → [⚛️ Physics](../).*
