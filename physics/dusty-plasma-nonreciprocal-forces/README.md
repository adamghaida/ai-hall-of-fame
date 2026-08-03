# A neural network measures the non-reciprocal forces in a dusty plasma and challenges the standard theory

**Field:** ⚛️ Physics  ·  **When:** July 2025 · PNAS

> Emory physicists built a physics-structured neural network, trained it on 3D particle tracks from a real dusty-plasma experiment, recovered the *effective* non-reciprocal forces between dust grains to R² > 0.99, and found significant discrepancies with two standard theoretical assumptions.

## What happened
A **dusty plasma** is a gas of ions and electrons with micron-scale dust grains suspended in it, common in planetary rings, comet tails and semiconductor fabrication chambers. The grains charge up and push on each other through the surrounding plasma. Because ions streaming past a grain leave a positively charged "wake" below it, the force grain *i* exerts on grain *j* is not equal and opposite to the force *j* exerts on *i*. The interaction is **non-reciprocal**. The paper is careful to call these the ***effective*** forces between the particles — "the effective forces between particles can be nonconservative and nonreciprocal" — because the grain pair is an open subsystem: the momentum that appears to go missing is carried off by the streaming ions and their wakes, so no conservation law and no fundamental symmetry is violated. That asymmetry is also what makes the interaction hard to measure directly.

In **[Physics-tailored machine learning reveals unexpected physics in dusty plasmas](https://www.pnas.org/doi/10.1073/pnas.2505725122)** (PNAS, published online July 31, 2025; vol. 122, no. 31, e2505725122), **Wentao Yu, Eslam Abdelaleem, Ilya Nemenman and Justin C. Burton** of Emory University did it indirectly. They levitated 9 to 18 polymer microspheres in an argon RF plasma sheath, tracked them in 3D with scanning laser tomography at 200 Hz across five experiments at different pressures and powers, and fit the trajectories with a model made of **three separate small neural networks**: one for the drag coefficient, one for the environmental trapping force, and one for the pairwise interaction. The physics was built into the architecture rather than learned: horizontal translational symmetry enforced, vertical symmetry deliberately broken to match the sheath, and each particle given a learned "descriptor" so grains of different size could be treated as non-identical.

The learned force law reproduced the measured dynamics with **R² greater than 0.99**, and the team checked it by inferring each particle's mass two independent ways (from the drag term and from the interaction term) and getting consistent answers. With a force law that accurate, they could then read off physical parameters the experiment does not measure directly, and two of them disagreed with standard theory:

- **Charge does not scale with radius the way orbital-motion-limited theory says.** Theory gives charge proportional to particle radius, i.e. *q* ∝ *m*^(1/3). The measured exponent ranged from **0.30 to 0.80** and rose monotonically with gas pressure.
- **The screening length is not a property of the plasma alone.** It is conventionally treated as a single constant set by the plasma environment. The fit required it to differ between particle *pairs*, varying by nearly a factor of three, and to **increase with the average size of the interacting particles**, consistent with the wake around a larger grain being larger.

Experimental data and the training code are public at [github.com/wyu54/many-body-force-infer](https://github.com/wyu54/many-body-force-infer). A preprint has been on arXiv since October 2023, revised through April 2025.

## Why it matters
Most machine learning in physics either predicts the next state of a system or fits a known functional form to data. This is one of the few cases where a model trained on **real experimental data**, not simulation with a known ground truth, produced a quantitative correction to accepted theory in a physical system. Because the network's structure mirrors the physics, its outputs are interpretable quantities (a charge, a screening length, a drag coefficient) rather than an opaque prediction. Burton's framing: "Our AI method is not a black box."

The honest limits are worth stating plainly. This is **one laboratory system**, not a general law-discovery machine, and the paper does not claim otherwise. The humans supplied most of the insight: physicists chose the three-term decomposition, the symmetries, the non-reciprocal parameterization and the descriptor scheme, and Nemenman describes more than a year of weekly back-and-forth to get the architecture right. And "unexpected physics" here means a **refined and corrected description of interactions that were already known**, not new fundamental physics. The size dependence of the screening length in particular had been reported before — the paper notes that "An increase of λ with particle size has been reported in experiments examining the linearized vibrational motion of dust particles" — and what is new is a precise measurement of it.

## Sources — the record of the discovery
- [PNAS paper: "Physics-tailored machine learning reveals unexpected physics in dusty plasmas" (DOI 10.1073/pnas.2505725122)](https://www.pnas.org/doi/10.1073/pnas.2505725122)
- [Full text (PubMed Central, PMC12337317)](https://pmc.ncbi.nlm.nih.gov/articles/PMC12337317/)
- [Preprint (arXiv:2310.05273)](https://arxiv.org/abs/2310.05273)
- [Data and code (GitHub)](https://github.com/wyu54/many-body-force-infer)
- [Emory University news release](https://news.emory.edu/features/2025/07/ai-reveals-unexpected-new-physics-dusty-plasma)
- [EurekAlert release](https://www.eurekalert.org/news-releases/1093401)

---
*In this folder: **[PROMPT.md](./PROMPT.md)** (a prompt to explore it with AI) · **[CONTEXT.md](./CONTEXT.md)** (background & caveats). Part of the [AI Hall of Fame](../../README.md) → [⚛️ Physics](../).*
