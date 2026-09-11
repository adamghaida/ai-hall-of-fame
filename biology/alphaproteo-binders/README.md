# AlphaProteo — protein binders designed on demand, in one round

**Field:** 🧬 Biology  ·  **When:** September 2024 · Google DeepMind technical report

> A generative model designed protein binders for seven targets with 3- to 300-fold better binding affinity than the best previous methods, hitting an 88% wet-lab success rate on one of them. On an eighth target it produced nothing that worked, and the team published that too.

## What happened
On **September 5, 2024**, **Google DeepMind** announced **AlphaProteo**, a family of machine learning models that design *binders*: small proteins that stick to a chosen target protein. The accompanying technical report, *"De novo design of high-affinity protein binders with AlphaProteo"* ([arXiv:2409.08022](https://arxiv.org/abs/2409.08022), Zambaldi, La, Chu, Patani, Danson and colleagues), reports the experimental results. The models were trained on structures from the **Protein Data Bank** plus **more than 100 million predicted structures from AlphaFold**.

The headline claim from the abstract is **3- to 300-fold better binding affinities and higher experimental success rates than the best existing methods on seven target proteins**, from a **single round of medium-throughput screening with no further optimization**.

The per-target numbers in the report's results table:

| Target | In vitro success rate | Best measured K<sub>D</sub> | Designs tested |
|---|---|---|---|
| BHRF1 (viral) | 88% | 8.5 nM | 94 |
| VEGF-A | 33% | 0.48 nM | 94 |
| IL-7Rα | 25% | 0.082 nM | 94 |
| PD-L1 | 15% | 0.18 nM | 159 |
| IL-17A | 14% | 8.4 nM | 63 |
| SARS-CoV-2 RBD | 12% | 26 nM | 172 |
| TrkA | 9% | 0.96 nM | 131 |

DeepMind states that AlphaProteo produced **the first AI-designed binder to VEGF-A**, a growth factor implicated in cancer and in diabetic complications, and that its **SARS-CoV-2 RBD binders blocked viral infection** in cell assays. Wet-lab work involved collaborators at the **Francis Crick Institute** (Peter Cherepanov, Katie Bentley, David L. V. Bauer).

The negative result is stated plainly: AlphaProteo **failed to produce any working binder against an eighth target, TNFα**, which the team had picked precisely because their own in-silico screening predicted success rates "very close to 0". The report attributes the failure to a flat, highly polar binding site that sits at the interface between two subunits of a homotrimer.

## Why it matters
Binder design has been the practical bottleneck in computational protein engineering. Earlier pipelines could produce binders, but usually at low hit rates and modest affinity, requiring several rounds of experimental optimization to reach something useful. AlphaProteo's claim is about **throughput and immediacy**: dozens of designs, one screening round, nanomolar-to-picomolar affinity, and no affinity maturation. That is the difference between a research project and a reagent you can order.

It also sits at a specific point in the arc this collection tracks. [RFdiffusion](../rfdiffusion-protein-design/) showed that generative models can invent folds; [AlphaFold](../../chemistry/alphafold-protein-structure/) supplied the structural substrate those models learn from. AlphaProteo is the narrower, more commercial question: can you point a model at an arbitrary disease-relevant protein and get a usable gripper back the same month.

**The honest limits.** This is a **technical report on arXiv, not a peer-reviewed paper**, and the wet-lab validation was run by the team making the claim. The reported success rates are **in vitro binding**, not function, not efficacy, and not safety. No therapeutic use is claimed. Every design started from **an experimental crystal structure of the target**, so targets without a solved structure or with no single well-defined conformation are out of scope, a limitation the report states itself. The TNFα failure shows the method is not target-agnostic. And DeepMind did **not release model weights or code**; the system was shared through a phased access approach developed with external biosecurity advisers, including the Nuclear Threat Initiative's AI Bio Forum, so the results are not independently reproducible from the outside.

## Sources — the record of the discovery
- [Google DeepMind: AlphaProteo generates novel proteins for biology and health research](https://deepmind.google/blog/alphaproteo-generates-novel-proteins-for-biology-and-health-research/) (September 5, 2024)
- [Technical report: "De novo design of high-affinity protein binders with AlphaProteo"](https://arxiv.org/abs/2409.08022) (arXiv:2409.08022)
- [Full text of the technical report, including the per-target results table](https://arxiv.org/html/2409.08022v1)
- [RFdiffusion, the prior generative-design baseline this work is measured against](../rfdiffusion-protein-design/)

---
*In this folder: **[PROMPT.md](./PROMPT.md)** (a prompt to explore it with AI) · **[CONTEXT.md](./CONTEXT.md)** (background & caveats). Part of the [AI Hall of Fame](../../README.md) → [🧬 Biology](../).*
