# The Virtual Lab — a team of AI agents that designed real SARS-CoV-2 nanobodies

**Field:** 🧬 Biology  ·  **When:** July 2025 · Nature

> An LLM principal investigator convened a team of LLM specialists, argued out a research plan across a series of meetings, wrote the code for a three-tool design pipeline, and produced 92 nanobody candidates. Two of them bound the JN.1 and KP.3 variants better than the nanobodies they were derived from.

## What happened
*"The Virtual Lab of AI agents designs new SARS-CoV-2 nanobodies"* by **Kyle Swanson**, **Wesley Wu**, **Nash L. Bulaong**, **John E. Pak** and **James Zou** was published in **Nature** on **July 29, 2025** (DOI [10.1038/s41586-025-09442-9](https://www.nature.com/articles/s41586-025-09442-9), Nature 646, issue 8085). The authors are at **Stanford University** (Computer Science, Biomedical Data Science) and the **Chan Zuckerberg Biohub San Francisco**.

The **Virtual Lab** is a structure, not a model. A human researcher defines a **Principal Investigator agent** and a **Scientific Critic agent**, and the PI then assembles a team of specialist agents. For this project the team was an **Immunologist**, a **Machine Learning Specialist** and a **Computational Biologist**. Work proceeds through **team meetings**, where the agents debate an agenda together, and **individual meetings**, where the human or the PI works with one agent at a time. The human's role is high-level feedback and agenda-setting, not writing the pipeline. The released implementation runs the agents on OpenAI's **gpt-4o-2024-08-06**, with five iterations and three rounds per meeting.

What the agent team produced was a **computational nanobody design pipeline** combining three existing tools:

- **ESM**, a protein language model, scoring candidate mutations by log-likelihood ratio, independent of the antigen.
- **AlphaFold-Multimer**, predicting the structure of each mutant nanobody in complex with the KP.3 spike receptor-binding domain, with **interface pLDDT** used as a binding-confidence metric.
- **Rosetta**, computing binding energy from the AlphaFold-Multimer structure after relaxation.

The agents combined these into an explicit ranking function, `WS = 0.2 × (ESM LLR) + 0.5 × (AF ipLDDT) − 0.3 × (Rosetta dG)`, and used it to select designs over four rounds of iterative mutation.

The output was **92 mutant nanobodies**, 23 each derived from four known anti-SARS-CoV-2 nanobodies, **Ty1, H11-D4, Nb21 and VHH-72**, each carrying **one to four mutations** relative to its parent. All 92, plus the four wild types, were tested by **ELISA** against the spike RBD of **Wuhan, JN.1, KP.3, KP2.3 and BA.2**, with BSA as a negative control. The paper reports a range of functional nanobodies, and in particular **two that bind the recent JN.1 or KP.3 variants better than their parents while keeping strong binding to the ancestral spike**, which the authors identify as candidates worth pursuing.

The code, the agent transcripts, the designed sequences and the **raw ELISA plate data** are public at [zou-group/virtual-lab](https://github.com/zou-group/virtual-lab) under an MIT license.

## Why it matters
Most "AI for science" results are a model applied to a task a human chose, framed, and scripted. The Virtual Lab's claim is one level up: the agents **chose the tools, wrote the pipeline that combines them, and set the scoring function**, and the resulting designs worked well enough in a real assay to produce candidates. The human contribution was direction and judgement rather than implementation.

It is also unusually auditable. The full meeting transcripts are in the repository, so you can read what the Immunologist agent argued, where the Scientific Critic pushed back, and how the weights in the scoring function were arrived at. That is a rarer thing than the result itself: an agentic science claim you can inspect step by step rather than take on trust.

**The honest limits.** The strongest one is in the word "designs". These are **point mutants**, one to four substitutions on four **existing, published nanobodies**, not de novo designs; the Virtual Lab optimized known binders rather than inventing new ones, which is a much weaker claim than the de novo work in [RFdiffusion](../rfdiffusion-protein-design/)'s lineage. The pipeline's three components (ESM, AlphaFold-Multimer, Rosetta) are **standard tools a competent computational biologist would have reached for**; the agents' contribution is assembly and tuning, not new method. The success criterion is **two nanobodies out of 92**, measured by **ELISA binding**, not by neutralization of live virus, not in animals, and not against infection. Nothing here is a therapeutic. And the agents ran on a model with a fixed knowledge cutoff, which the authors flag as a limitation, along with the continued need for human oversight.

## Sources — the record of the discovery
- [Nature: "The Virtual Lab of AI agents designs new SARS-CoV-2 nanobodies"](https://www.nature.com/articles/s41586-025-09442-9) (DOI 10.1038/s41586-025-09442-9, July 29, 2025, Nature 646)
- [Code, agent transcripts, designed sequences and raw ELISA data](https://github.com/zou-group/virtual-lab) (MIT license)
- [The nanobody design project, including the workflow the agents produced](https://github.com/zou-group/virtual-lab/blob/main/nanobody_design/README.md)
- [Preprint: "The Virtual Lab: AI Agents Design New SARS-CoV-2 Nanobodies with Experimental Validation"](https://www.biorxiv.org/content/10.1101/2024.11.11.623004v1) (bioRxiv, November 12, 2024 — superseded by the Nature paper)

---
*In this folder: **[PROMPT.md](./PROMPT.md)** (a prompt to explore it with AI) · **[CONTEXT.md](./CONTEXT.md)** (background & caveats). Part of the [AI Hall of Fame](../../README.md) → [🧬 Biology](../).*
