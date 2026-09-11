# 📚 Context: the Virtual Lab and agentic science

**The gap this targets.** Interdisciplinary research is bottlenecked by access to people. A computational biologist who needs immunology advice, machine learning engineering and structural modelling has to find three collaborators and coordinate them. Large language models had been used to answer bounded scientific questions; the Virtual Lab's premise is that a *team* of them, with defined roles and a meeting structure, can carry an open-ended project from problem statement to testable output.

**How the structure works.** The human researcher writes the **Principal Investigator** agent and the **Scientific Critic** agent, specifying title, expertise, goal and role for each. The PI then selects the rest of the team; for this project an **Immunologist**, a **Machine Learning Specialist** and a **Computational Biologist**. Two meeting formats drive the work: **team meetings**, where all agents discuss an agenda and the PI synthesizes, and **individual meetings**, where one agent works on a specific task with critic feedback. The released code runs meetings with five iterations and three rounds each, on **gpt-4o-2024-08-06** (with gpt-4o-mini for lighter calls). The phases the agents worked through are named in the repository: team selection, project specification, tools selection, implementation agent selection, then ESM, AlphaFold, Rosetta, then workflow design.

**What the agents decided.** Given the goal of improving nanobody binding to the newest SARS-CoV-2 variants, the team chose to **modify existing nanobodies rather than design new ones**, selected the three tools, wrote and iteratively improved the code for each, and defined a weighted ranking function over the three scores:

```
WS = 0.2 × (ESM log-likelihood ratio)
   + 0.5 × (AlphaFold-Multimer interface pLDDT)
   − 0.3 × (Rosetta binding energy dG)
```

Four rounds of mutate-and-score produced the candidate set.

**The molecules.** Four published anti-SARS-CoV-2 nanobodies were the starting points: **Ty1** (alpaca-derived, *Nature Communications* 2020), **H11-D4** (*Nature Structural & Molecular Biology* 2020), **Nb21** (*Science* 2020) and **VHH-72** (*Cell* 2020). Twenty-three mutants of each, 92 in total, each with **one to four mutations**. Testing was **ELISA** against spike RBD from Wuhan, JN.1, KP.3, KP2.3 and BA.2, with BSA as negative control; the raw plate readings for all 96 wells (92 designs plus 4 wild types) are in the repository.

**Nanobodies, briefly.** A nanobody is the single variable domain of a camelid heavy-chain-only antibody: roughly a tenth the mass of a conventional antibody, stable, cheap to express, and able to reach epitopes a full antibody cannot. They were a significant tool during the COVID-19 pandemic, which is why four good published anti-spike nanobodies existed to start from.

**The people.** **Kyle Swanson** (Stanford CS), **Wesley Wu** and **John E. Pak** (Chan Zuckerberg Biohub SF, who ran the wet lab), **Nash L. Bulaong**, and senior author **James Zou** (Stanford Biomedical Data Science).

## Why it's in the Hall of Fame
Not for the nanobodies, which are modest. For the demonstration that a structured team of language model agents can take an open-ended research goal, select and implement a multi-tool computational pipeline, and produce candidates that survive contact with a real assay, with a human supplying direction rather than implementation. And for publishing the transcripts: you can read the agents' reasoning and check whether the pipeline design was sensible or lucky.

## Honest caveats
- **"Designs new nanobodies" oversells it.** The 92 molecules are **point mutants of four existing published nanobodies**, carrying **one to four substitutions** each. This is computational affinity maturation, not de novo design. Anyone comparing this to de novo binder design work is comparing different things.
- **The tools are off the shelf.** ESM, AlphaFold-Multimer and Rosetta are what a competent computational biologist would have chosen. The agents' contribution is selecting, implementing, combining and weighting them, which is real work, but it is not a new method.
- **Two hits out of 92.** The headline result is two nanobodies with improved binding to JN.1 or KP.3 while retaining ancestral-spike binding. That is a genuine result and a small one.
- **ELISA binding only.** No live-virus neutralization, no pseudovirus assay reported as the headline, no animal work, no therapeutic claim. Binding to a recombinant RBD in a plate is several steps removed from neutralizing an infection.
- **The weighted scoring function is arbitrary in the way human-chosen functions are arbitrary.** Weights of 0.2, 0.5 and −0.3 across three incommensurable scores came out of agent discussion. The paper does not establish that these weights are better than alternatives, and the ablation notebooks in the repository exist precisely because this is a fair question.
- **Human involvement is real and easy to understate.** The human wrote the PI and Critic agent specifications, set agendas, gave feedback between meetings, and ran the wet lab. "AI agents did the research" is not accurate; "AI agents did the design work under human direction" is.
- **Knowledge cutoff.** The authors flag that LLM knowledge cutoffs constrain what the agents know, which matters for a project about *recent* viral variants.
- **One project, one domain.** The Virtual Lab was demonstrated on a single problem. Whether the structure generalizes to research areas with less well-trodden tooling is untested.
- **The repository has moved on from the paper.** The public implementation now defaults to a newer model than the `gpt-4o-2024-08-06` used for the published work. Reproducing the paper means pinning the model, not just running the notebooks.

## Sources
- [Nature: "The Virtual Lab of AI agents designs new SARS-CoV-2 nanobodies"](https://www.nature.com/articles/s41586-025-09442-9) (July 29, 2025)
- [zou-group/virtual-lab on GitHub: code, agent transcripts, sequences, raw ELISA data](https://github.com/zou-group/virtual-lab)
- [The nanobody design subproject and its workflow](https://github.com/zou-group/virtual-lab/blob/main/nanobody_design/README.md)
- [bioRxiv preprint, November 12, 2024](https://www.biorxiv.org/content/10.1101/2024.11.11.623004v1)

---
*Back to **[README.md](./README.md)** · **[PROMPT.md](./PROMPT.md)**.*
