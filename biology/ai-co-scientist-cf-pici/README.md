# AI co-scientist reaches a decade-long phage discovery in days

**Field:** 🧬 Biology  ·  **When:** September 2025 · Cell (preprint February 2025)

> A lab had spent years working out how a class of bacterial genetic parasites jumps between species, and had not published the answer. Asked the same question cold, Google's AI co-scientist returned that answer as its top-ranked hypothesis, in days.

## What happened
Two companion papers appeared in **Cell** on **September 9, 2025** (volume 188, issue 23).

The biology paper, *"Chimeric infective particles expand species boundaries in phage-inducible chromosomal island mobilization"* (He, Patkowski, Wang, Miguel-Romero, Aylett, Fillol-Salom, Costa, Penadés; DOI [10.1016/j.cell.2025.08.019](https://www.cell.com/cell/fulltext/S0092-8674(25)00974-2)), resolves a long-standing puzzle. **Capsid-forming phage-inducible chromosomal islands (cf-PICIs)** are genetic elements that parasitize bacteriophages, which are themselves parasites of bacteria. Unlike other such satellites, cf-PICIs build their own capsids and package their own DNA; what they lack is a tail. The answer the lab arrived at experimentally is that cf-PICIs **hijack tails from unrelated phages**, forming chimeric infective particles that can deliver their cargo into bacterial species the parent phage could not reach. Since that cargo can include antibiotic resistance genes, this is a previously unrecognized route for resistance to cross species boundaries.

The AI paper, *"AI mirrors experimental science to uncover a mechanism of gene transfer crucial to bacterial evolution"* (Penadés, Gottweis, He, Patkowski and colleagues at **Imperial College London** and **Google**; DOI [10.1016/j.cell.2025.08.018](https://www.cell.com/cell/fulltext/S0092-8674(25)00973-0), Cell 188, 6654–6665.e2), reports what happened when the same question was put to Google's **AI co-scientist**. As the abstract puts it, the team posed a question that had taken years to resolve experimentally **but remained unpublished**, so there was no answer in the literature for a model to find. The co-scientist's **top-ranked hypothesis matched the experimentally confirmed mechanism**: cf-PICIs hijack diverse phage tails to expand their host range. The paper also assesses the five highest-ranked hypotheses, reporting that some opened new research directions in the authors' own labs, and benchmarks the co-scientist against other LLMs.

**AI co-scientist** itself was introduced by Google on [February 19, 2025](https://research.google/blog/accelerating-scientific-breakthroughs-with-an-ai-co-scientist/): a multi-agent system built on **Gemini 2.0**, in which Generation, Reflection, Ranking, Evolution, Proximity and Meta-review agents work under a Supervisor, using self-play debates and ranking tournaments with **Elo ratings** to score hypotheses against each other. The cf-PICI case was one of three validations in that announcement, alongside drug repurposing for acute myeloid leukemia and epigenetic targets for liver fibrosis. The preprint of the cf-PICI evaluation went up the same day ([bioRxiv 10.1101/2025.02.19.639094](https://www.biorxiv.org/content/10.1101/2025.02.19.639094v1)).

On timing, **Imperial College London** reports that the AI reached its hypothesis in *a matter of days*, against years of experimental work by the human team ([Imperial](https://www.imperial.ac.uk/news/articles/medicine/infectious-disease/2025/microbial-piracy-uncovers-new-way-to-fight-drug-resistant-infections/)).

## Why it matters
Hypothesis generation is the part of science that is hardest to evaluate. Any model can produce plausible-sounding ideas; the question is whether they are *right*, and finding out normally takes years. This experiment gets around that by running the clock backwards: take a mechanism that has already been established in the lab but never published, and ask the system to propose it cold.

That design matters more than the result. It is a rare instance of an AI hypothesis claim with a genuine control on data leakage, since the answer existed nowhere in the training corpus. The alternative, judging AI-generated hypotheses by whether experts find them interesting, measures plausibility rather than truth.

The underlying biology is also substantial on its own terms. Horizontal gene transfer is the engine of antibiotic resistance spread, and a mechanism that lets a genetic element borrow a tail to reach new host species is a new route for it.

**The honest limits.** This is **retrospective, and it is a hypothesis, not an experiment**. The AI proposed a mechanism; the humans had already proved it, over years, with cryo-EM and genetics. The co-scientist ran no experiment, generated no data, and could not have known it was right. The evaluation was also **not blind or independent**: it was conducted and published by the scientists who already knew the answer, together with the **Google team that built the system**, who are co-authors. Prompt wording, the scoring of the five top hypotheses, and the choice of which question to ask were all in the hands of people holding the answer key, which is exactly the situation where unconscious bias is hardest to exclude. The system also had access to the group's **prior published work on cf-PICIs**, so it was not reasoning from nothing, only from a literature that did not contain the conclusion. And **one question is one data point**. Google's own announcement lists limitations it wants addressed, including better literature review, factuality checking, and larger-scale expert evaluation across many research goals.

## Sources — the record of the discovery
- [Cell: "AI mirrors experimental science to uncover a mechanism of gene transfer crucial to bacterial evolution"](https://www.cell.com/cell/fulltext/S0092-8674(25)00973-0) (DOI 10.1016/j.cell.2025.08.018, online September 9, 2025; Cell 188, 6654–6665.e2)
- [Cell: "Chimeric infective particles expand species boundaries in phage-inducible chromosomal island mobilization"](https://www.cell.com/cell/fulltext/S0092-8674(25)00974-2) (DOI 10.1016/j.cell.2025.08.019, the experimental companion paper)
- [Imperial College London: "Microbial piracy uncovers new way to fight drug-resistant infections"](https://www.imperial.ac.uk/news/articles/medicine/infectious-disease/2025/microbial-piracy-uncovers-new-way-to-fight-drug-resistant-infections/) (September 9, 2025)
- [Google Research: "Accelerating scientific breakthroughs with an AI co-scientist"](https://research.google/blog/accelerating-scientific-breakthroughs-with-an-ai-co-scientist/) (February 19, 2025)
- [bioRxiv preprint of the AI evaluation](https://www.biorxiv.org/content/10.1101/2025.02.19.639094v1) (February 19, 2025 — superseded by the Cell paper)

---
*In this folder: **[PROMPT.md](./PROMPT.md)** (a prompt to explore it with AI) · **[CONTEXT.md](./CONTEXT.md)** (background & caveats). Part of the [AI Hall of Fame](../../README.md) → [🧬 Biology](../).*
