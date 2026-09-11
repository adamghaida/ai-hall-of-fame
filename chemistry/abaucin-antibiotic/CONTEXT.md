# 📚 Context: Abaucin — a deep-learning hit aimed at one of the hardest superbugs

**The lineage.** This is the same research line as [halicin](../halicin-antibiotic/): Jonathan Stokes, who was a postdoc in James Collins's MIT lab for the 2020 *Cell* paper and ran his own lab at McMaster by 2023, with Regina Barzilay and Tommi Jaakkola's group at MIT CSAIL on the machine-learning side. Halicin came out of a model trained on *E. coli* growth inhibition and screened across more than 100 million molecules; abaucin came out of a much smaller, much more targeted exercise.

**Why *Acinetobacter baumannii* is the target.** It is a Gram-negative pathogen associated with hospital-acquired infections, including ventilator-associated pneumonia and wound infections, and carbapenem-resistant strains sit at the top of the World Health Organization's priority list for new antibiotics. Gram-negative bacteria are hard to drug because of their double membrane and efflux pumps, which is a large part of why the conventional discovery pipeline has produced so little against them.

**How the pipeline actually worked.** The team ran a real wet-lab screen first, testing about 7,500 molecules against *A. baumannii* and recording which inhibited growth. That dataset trained a neural network. The model then ranked a separate library, and only the top of that ranking went back into the lab: 240 compounds tested, nine antibacterials found. The interesting economics are in those numbers. The model did not replace experiments, it decided which few hundred experiments were worth running.

**The molecule.** Abaucin was not a novel scaffold invented by the model. It had previously been investigated as a potential diabetes drug, and its antibacterial activity was what the screen surfaced. Mechanistic follow-up traced its action to lipoprotein trafficking via LolE, which matters because a named target makes the result checkable and gives medicinal chemists something to optimize against.

**The people.** Gary Liu, Denise B. Catacutan and Khushi Rathod are listed as contributing equally as first authors; Kyle Swanson and Wengong Jin worked on the modelling side at MIT; Tommi Jaakkola and Regina Barzilay are co-authors; James J. Collins (MIT, Broad, Wyss) and Jonathan M. Stokes (McMaster) are the senior authors.

## Why it's in the Hall of Fame
Because it answers the obvious objection to the halicin result. Finding one broad-spectrum molecule in a hundred million could be luck. Training a model on a few thousand measurements against a specific, notoriously undruggable pathogen, and getting back a selective compound with an identified mechanism and an in vivo result, is a method rather than an anecdote.

## Honest caveats
- **Abaucin is a lead, not a drug.** No human trials. It has not been shown to be safe or effective in people, and the attrition rate between a mouse wound model and an approved antibiotic is brutal. As of this entry's writing we are not aware of clinical-stage results.
- **The animal evidence is narrow.** One mouse wound model. That is meaningful but it is not systemic infection, not pneumonia, and not a resistance-emergence study over time.
- **The model did not invent the molecule.** Abaucin came from an existing compound library and had a prior life as a diabetes drug candidate. The machine learning contribution is prioritization, not de novo design. For generative design of antibacterials from scratch, that is a separate and later line of work.
- **Narrow spectrum cuts both ways.** Sparing the microbiome is a genuine advantage, but a drug that only treats *A. baumannii* needs fast, reliable diagnosis of *A. baumannii* before it can be prescribed, and it has a smaller commercial market. Both are real obstacles to development.
- **The screen was small by design.** About 7,500 molecules is a modest training set. That is part of what makes the result encouraging, but it also means the model's reach is bounded by the chemistry that happened to be in that library.
- **Conflicts of interest are normal here and worth noting.** Investigators in AI-driven drug discovery, including on this team, have commercial and patent interests in the area. This is standard for translational work and does not undercut the result, but an honest reading includes it.

## Sources
- [Nature Chemical Biology paper (Liu et al., 25 May 2023)](https://www.nature.com/articles/s41589-023-01349-8) · [DOI 10.1038/s41589-023-01349-8](https://doi.org/10.1038/s41589-023-01349-8)
- [PubMed record (PMID 37231267), Nat Chem Biol 19(11):1342-1350](https://pubmed.ncbi.nlm.nih.gov/37231267/)
- [MIT News: using AI, scientists find a drug that could combat drug-resistant infections](https://news.mit.edu/2023/using-ai-scientists-combat-drug-resistant-infections-0525)
- [McMaster University news release](https://news.mcmaster.ca/artificial-intelligence-new-antibiotic-drug-resistant-pathogen-acinetobacter-baumannii/)
- [MIT Jameel Clinic project page](https://jclinic.mit.edu/research-project/deep-learning-guided-discovery-of-an-antibiotic-targeting-acinetobacter-baumannii/)
- [Related entry: halicin, the 2020 broad-spectrum result](../halicin-antibiotic/)

---
*Back to **[README.md](./README.md)** · **[PROMPT.md](./PROMPT.md)**.*
