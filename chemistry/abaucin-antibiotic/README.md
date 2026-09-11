# Abaucin — a deep-learning hit aimed at one of the hardest superbugs

**Field:** 🧪 Chemistry  ·  **When:** May 2023 · Nature Chemical Biology

> A neural network trained on 7,500 molecules picked out a compound that kills *Acinetobacter baumannii* and almost nothing else.

## What happened
On 25 May 2023, *Nature Chemical Biology* published "Deep learning-guided discovery of an antibiotic targeting *Acinetobacter baumannii*" by Gary Liu, Denise B. Catacutan, Khushi Rathod and colleagues at McMaster University and MIT, with James J. Collins and Jonathan M. Stokes as senior authors.

*A. baumannii* is a Gram-negative hospital pathogen that the World Health Organization ranks among its highest-priority targets for new drugs. It survives on dry surfaces for long periods and carries resistance to most available antibiotics, and its outer membrane makes it unusually good at keeping drugs out.

The team screened roughly **7,500 molecules** for growth inhibition of *A. baumannii* in the lab, then trained a neural network on the results. The trained model was pointed at a separate chemical library and, per MIT's account of the work, ranked **6,680 compounds in under two hours**. The researchers tested **240** of the top-ranked molecules experimentally and found **nine** antibacterials among them.

One of the nine became **abaucin**. It has **narrow-spectrum activity restricted to *A. baumannii***, which is unusual and deliberate: most antibiotics hit a wide range of bacteria. Follow-up work showed that abaucin **perturbs lipoprotein trafficking through a mechanism involving LolE**, and that it **could control an *A. baumannii* infection in a mouse wound model**. The molecule was not built from scratch; it had previously been explored as a candidate diabetes drug, and the contribution of the model was recognizing what it could do.

## Why it matters
The [halicin result](../halicin-antibiotic/) from 2020 showed that a model trained only on "does this kill bacteria" could surface a structurally novel broad-spectrum candidate. Abaucin is the harder follow-up question: can the same approach be aimed at **one specific pathogen**, one of the Gram-negative species that has defeated conventional screening?

Narrowness is the point rather than a limitation. A drug that spares the gut microbiome causes less collateral damage and gives resistance fewer places to spread. Selectivity that tight is difficult to design for directly, and here it fell out of a model trained on a single species' growth inhibition.

Abaucin is a lead compound, not a medicine. It has not been through human trials, and most compounds at this stage never reach one. What the paper demonstrates is a working discovery pipeline: a few thousand wet-lab measurements, a model, a short ranked list, and a hit with a real mechanism and a real animal result at the end of it. See [CONTEXT.md](./CONTEXT.md) for the caveats.

## Sources — the record of the discovery
- [Nature Chemical Biology paper (Liu et al., 25 May 2023)](https://www.nature.com/articles/s41589-023-01349-8) · [DOI 10.1038/s41589-023-01349-8](https://doi.org/10.1038/s41589-023-01349-8)
- [PubMed record (PMID 37231267)](https://pubmed.ncbi.nlm.nih.gov/37231267/)
- [MIT News: using AI, scientists find a drug that could combat drug-resistant infections](https://news.mit.edu/2023/using-ai-scientists-combat-drug-resistant-infections-0525)
- [McMaster University news release](https://news.mcmaster.ca/artificial-intelligence-new-antibiotic-drug-resistant-pathogen-acinetobacter-baumannii/)
- [MIT Jameel Clinic project page](https://jclinic.mit.edu/research-project/deep-learning-guided-discovery-of-an-antibiotic-targeting-acinetobacter-baumannii/)

---
*In this folder: **[PROMPT.md](./PROMPT.md)** (a prompt to explore it with AI) · **[CONTEXT.md](./CONTEXT.md)** (background & caveats). Part of the [AI Hall of Fame](../../README.md) → [🧪 Chemistry](../).*
