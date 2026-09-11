# NG1 and DN1 — antibiotics designed from scratch by generative AI

**Field:** 🧪 Chemistry  ·  **When:** August 2025 · Cell

> Generative models invented more than 36 million molecules that had never existed, and two of the 24 actually made in the lab cleared drug-resistant gonorrhoea and MRSA infections in mice.

## What happened
On **August 14, 2025**, James Collins's group at MIT published "A generative deep learning approach to de novo antibiotic design" in *Cell* (Krishnan, Anahtar, Valeri et al.; Cell 188(21):5962–5979.e22, DOI [10.1016/j.cell.2025.07.033](https://doi.org/10.1016/j.cell.2025.07.033)).

Earlier AI antibiotic work, including [halicin](../halicin-antibiotic/) and abaucin from the same lineage, *screened* existing chemical libraries: the model's job was to rank molecules someone had already made. This paper asked the models to **design molecules that did not exist**. The team used genetic algorithms (CReM, "chemically reasonable mutations") and fragment-based variational autoencoders, in two modes:

- a **fragment-based** mode, computationally screening more than 10⁷ chemical fragments against *Neisseria gonorrhoeae* or *Staphylococcus aureus* and then growing the promising ones;
- an **unconstrained** mode, generating whole compounds with no starting fragment.

In total the pipeline produced **more than 36 million candidate compounds**. Filtering for predicted activity, predicted non-toxicity to human cells, dissimilarity from known antibiotics, and synthesizability (including retrosynthetic modelling and a medicinal-chemistry review) narrowed that to a shortlist. **24 compounds were actually synthesized and tested; seven showed selective antibacterial activity.**

Two became leads:

- **NG1**, from the fragment-based track, is narrow-spectrum against *N. gonorrhoeae*. It killed multidrug-resistant isolates, including strains resistant to first-line therapy, while sparing commensal species, and it reduced bacterial burden in a **mouse vaginal infection model**. Its target is **LptA**, a protein in outer-membrane lipopolysaccharide transport that no approved antibiotic hits.
- **DN1**, from the unconstrained track, disrupts bacterial membranes and **cleared a methicillin-resistant *S. aureus* (MRSA) skin infection in mice**.

## Why it matters
This is the difference between search and design. Screening is bounded by what chemists have already bothered to make; generative design is bounded only by what can be synthesized. Getting from 36 million hypothetical structures down to 24 real flasks, and from there to two compounds that work in animals against two WHO priority pathogens with mechanisms nobody was using, is the first well-documented end-to-end demonstration that the generative half of the pipeline survives contact with a wet lab.

It is also honest about the failure rate, which is the useful part: 24 synthesized, seven active, two leads. Most of what the models proposed was not worth making, and knowing the shape of that funnel is what makes the result usable by other groups.

Both compounds are **preclinical**. No human has taken either. The nonprofit Phare Bio is working on analogues with better drug-like properties, and independent chemists have flagged that many AI-proposed structures remain impractical to synthesize and that pinning down a mechanism of action is slow and expensive. See [CONTEXT.md](./CONTEXT.md).

## Sources — the record of the discovery
- [Cell paper: "A generative deep learning approach to de novo antibiotic design" (Krishnan et al., 14 August 2025)](https://www.cell.com/cell/abstract/S0092-8674(25)00855-4) · [DOI 10.1016/j.cell.2025.07.033](https://doi.org/10.1016/j.cell.2025.07.033)
- [MIT News announcement (14 August 2025)](https://news.mit.edu/2025/using-generative-ai-researchers-design-compounds-kill-drug-resistant-bacteria-0814)
- [Chemistry World: "Antibiotics designed with the help of AI attack bacteria in entirely new ways"](https://www.chemistryworld.com/news/antibiotics-designed-with-the-help-of-ai-attack-bacteria-in-entirely-new-ways/4022039.article)
- [Technology Networks: AI-designed antibiotics show promise against drug-resistant bacteria](https://www.technologynetworks.com/drug-discovery/news/ai-designed-antibiotics-show-promise-against-drug-resistant-bacteria-403510)

---
*In this folder: **[PROMPT.md](./PROMPT.md)** (a prompt to explore it with AI) · **[CONTEXT.md](./CONTEXT.md)** (background & caveats). Part of the [AI Hall of Fame](../../README.md) → [🧪 Chemistry](../).*
