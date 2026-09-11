# Evo — genome language models that wrote working bacteriophages

**Field:** 🧬 Biology  ·  **When:** August 2026 · Science (preprint September 2025)

> A DNA language model was asked to write entire viral genomes from scratch. Of 285 synthesized designs, 16 booted up into infectious bacteriophages, several outcompeted the natural virus they were modeled on, and a cocktail of them cleared bacteria that had already evolved resistance.

## What happened
A team at **Stanford University** and the **Arc Institute** led by first author **Samuel H. King** with senior author **Brian L. Hie** used the **Evo 1** and **Evo 2** genome language models to generate complete bacteriophage genomes. The work first appeared as a bioRxiv preprint on **September 17, 2025** ([DOI 10.1101/2025.09.12.675911](https://www.biorxiv.org/content/10.1101/2025.09.12.675911v1)) and was published in **Science** on **August 6, 2026** as *"Generative design of bacteriophages with genome language models"* ([DOI 10.1126/science.aec2657](https://www.science.org/doi/10.1126/science.aec2657)).

The design template was **ΦX174**, a small lytic phage that infects *E. coli* and has been a laboratory model system for decades. The models were fine-tuned on roughly **15,000 viral genomes from the Microviridae family** ([Phys.org](https://phys.org/news/2026-08-sixteen-ai-viruses-route-drug.html)), then asked to emit whole genomes rather than single genes.

What the experiments found, in the preprint's own words:

- **302 genomes were generated; 285 were successfully synthesized and assembled** — "the remaining failed due to high-complexity DNA synthesis" ([preprint full text](https://www.biorxiv.org/content/10.1101/2025.09.12.675911v1.full)).
- **16 of those 285 produced viable phages.** The screen measured bacterial growth inhibition: the team "observed 16 generated phage transformations that inhibited growth of *E. coli* C."
- The designs were genuinely novel rather than copies. Compared against Microviridae sequences in the training data, they "contained between 67 and 392 novel mutations, with nucleotide sequence identities between 93.0% and 98.8%."
- **Multiple generated phages beat ΦX174** in head-to-head growth competitions and in lysis kinetics.
- **Cryo-electron microscopy** showed that one generated phage "utilizes an evolutionarily distant DNA packaging protein within its capsid" — the model had swapped in a component from elsewhere in the family and it still assembled.
- A **cocktail of the generated phages overcame ΦX174 resistance in three *E. coli* strains**: it "was able to successfully inhibit growth of strain CR1 after a single passage, CR2 after two passages, and CR3 after five passages. In contrast, ΦX174 alone could not inhibit growth of any resistant strains."

## Why it matters
Generative biology had, until this point, designed **parts**: a protein ([RFdiffusion](../rfdiffusion-protein-design/)), an enzyme active site, a redesigned nuclease ([SynTnpBs](../ai-designed-genome-editors/)). This is the first demonstration that a model can write a **whole functional genome** — a coordinated set of genes, overlapping reading frames, and packaging signals that has to work as one system inside a living cell. The bar is unforgiving: a genome either yields infectious particles or it does not.

The phage-therapy angle is the practical one. Bacteria evolve resistance to phages the same way they evolve resistance to antibiotics, and the standard countermeasure is to go hunting in sewage for a new phage. A model that can generate hundreds of plausible variants of a known phage turns that search into a design problem. The three-strain resistance experiment is a small but direct demonstration of that loop.

It is also the clearest case yet of a dual-use result in generative biology. Science ran an accompanying commentary by **Inglesby and Hanke** that framed the governance question bluntly: as quoted by [AAAS](https://www.eurekalert.org/news-releases/1138470), "The question is no longer whether generative viral genome design will exist. It is whether society can build oversight that allows its benefits to unfold while preventing it from enabling serious harm." The paper's own authors write that "groups conducting future whole-genome design work should consult both safety and security professionals throughout the project lifecycle."

**The honest limits.** The success rate is low: **16 viable phages out of 285 synthesized designs is about 5.6%**, and commenting experts made the point directly — Dr. Simon Jackson of Waikato University noted that "only around 5% of the designs worked," and Jordi García Ojalvo of Pompeu Fabra University called the "efficiency of the process… low" ([Science Media Centre](https://www.sciencemediacentre.org/expert-reaction-to-generative-design-of-bacteriophages-with-genome-language-models/)). The designs stay within **93.0%–98.8% nucleotide identity** to training sequences, so this is generation within a known family, not invention of a new kind of virus. ΦX174 is one of the smallest genomes in biology, and scaling to larger phages, let alone bacteria, is unproven. And these are *E. coli* phages in flasks: nothing here has been tested as a therapy. On biosafety, the authors state that "in this and previous work, we have deliberately withheld all viruses with eukaryotic hosts, including those pathogenic to humans, from the models' training data."

## Sources — the record of the discovery
- [Science paper: "Generative design of bacteriophages with genome language models"](https://www.science.org/doi/10.1126/science.aec2657) (DOI 10.1126/science.aec2657, August 6, 2026)
- [bioRxiv preprint (September 17, 2025)](https://www.biorxiv.org/content/10.1101/2025.09.12.675911v1) and its [full text](https://www.biorxiv.org/content/10.1101/2025.09.12.675911v1.full)
- [EurekAlert / AAAS press release: AI system designs functional bacteriophages from scratch](https://www.eurekalert.org/news-releases/1138470)
- [Science Media Centre: expert reaction to the paper](https://www.sciencemediacentre.org/expert-reaction-to-generative-design-of-bacteriophages-with-genome-language-models/)
- [Phys.org: Sixteen AI-designed viruses offer a new route against drug-resistant bacteria](https://phys.org/news/2026-08-sixteen-ai-viruses-route-drug.html)
- [Arc Institute: Evo 2](https://arcinstitute.org/news/evo2) — the underlying model, published in [Nature](https://www.nature.com/articles/s41586-026-10176-5) (March 2026)
- Code: [evo-design/evo](https://github.com/evo-design/evo/) (Evo 1) and [arcinstitute/evo2](https://github.com/arcinstitute/evo2) (Evo 2)

---
*In this folder: **[PROMPT.md](./PROMPT.md)** (a prompt to explore it with AI) · **[CONTEXT.md](./CONTEXT.md)** (background & caveats). Part of the [AI Hall of Fame](../../README.md) → [🧬 Biology](../).*
