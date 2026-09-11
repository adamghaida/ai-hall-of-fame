# 📚 Context: NG1 and DN1 — antibiotics designed from scratch by generative AI

**The lineage.** This is the Collins lab at MIT, the same group behind [halicin](../halicin-antibiotic/) (Cell, 2020) and, with Jonathan Stokes at McMaster, abaucin (Nature Chemical Biology, 2023). Those two results were *virtual screening*: a neural network trained on measured growth inhibition ranked molecules that already sat in a physical library, and the wins were molecules chemists had made for other reasons. The 2025 paper changes the job description. The models now propose structures, and the question becomes whether anything they propose can be built and whether it works.

**How it worked.** Two generative tracks, both built on genetic algorithms (CReM, chemically reasonable mutations) and variational autoencoders:

| Track | What it did | Scale reported |
|---|---|---|
| Fragment-based | Screened >10⁷ chemical fragments in silico against *N. gonorrhoeae* or *S. aureus*, then expanded the promising ones into full molecules | ~7 million F1-containing candidates for *N. gonorrhoeae*; ~1,000 shortlisted; 80 selected for synthesis |
| Unconstrained | Generated whole compounds with no seed fragment | >29 million unique compounds for *S. aureus*; ~90 shortlisted |

Across both tracks the platform designed **more than 36 million compounds**. Filters ran on predicted antibacterial activity, predicted cytotoxicity against human cell lines, structural dissimilarity from known antibiotic classes, and synthesizability, with retrosynthesis modelling and human medicinal-chemistry review before anything reached a bench. **24 compounds were successfully synthesized; seven had selective antibacterial activity.**

**The people.** First authors Aarti Krishnan, Melis N. Anahtar, and Jacqueline A. Valeri; senior author **James J. Collins** (MIT, Broad Institute, Wyss Institute), with Felix Wong and Connor W. Coley among the co-authors. The work sits inside MIT's **Antibiotics-AI Project**, funded by the Defense Threat Reduction Agency, the NIH, the Audacious Project, Flu Lab, the Sea Grape Foundation, the Wyss Foundation, and an anonymous donor. The nonprofit **Phare Bio** is taking the leads forward.

**Why the targets matter.** *N. gonorrhoeae* and *S. aureus* are both WHO priority pathogens. Drug-resistant gonorrhoea is the more alarming of the two: strains have emerged that resist ceftriaxone, the last recommended first-line therapy. NG1 hitting **LptA**, a lipopolysaccharide-transport protein that no marketed antibiotic targets, is the part of this paper that a resistance specialist would circle.

## Why it's in the Hall of Fame
Because it closes a loop that had stayed open. AI drug discovery has produced a decade of impressive in-silico numbers and a much thinner record of molecules that exist. Here the generated structures were synthesized, characterized, given a mechanism, and tested in animals, and the paper reports how many did not make it as clearly as how many did.

## Honest caveats
- **Preclinical. Mice, not people.** NG1 reduced bacterial burden in a mouse vaginal infection model; DN1 cleared a mouse MRSA skin infection. Neither has entered a human trial, and the great majority of compounds at this stage never will.
- **The funnel is narrow.** Out of >36 million designs, 24 were synthesized and seven were active. That is a real hit rate for de novo design, but it means the models' output is mostly not actionable, and the human filtering steps (retrosynthesis, medicinal-chemistry review) did substantial work.
- **Synthesizability is the standing objection.** Jonathan Stokes, who led the abaucin work, called this an "interesting demonstration" while noting that many AI-generated structures still cannot be made, and that establishing a mechanism of action is technically hard and expensive. That critique applies to the field, not just this paper.
- **NG1 is narrow-spectrum by design.** Sparing commensals is a feature, but it also means NG1 is not a general antibiotic; it would need a diagnostic to be used well.
- **Drug-like properties are not there yet.** Phare Bio's stated work is modifying both compounds to make them suitable for further testing, which is an acknowledgement that the current molecules are leads, not candidates.
- **Some counts differ between sources.** MIT's announcement and the paper's abstract report the headline figures used here (>36 million generated, 24 synthesized, seven selective). Secondary coverage breaks the per-pathogen sub-counts down slightly differently; where they conflict, trust the paper.

## Sources
- [Cell paper: "A generative deep learning approach to de novo antibiotic design" (Krishnan et al., 14 August 2025)](https://www.cell.com/cell/abstract/S0092-8674(25)00855-4) · [DOI 10.1016/j.cell.2025.07.033](https://doi.org/10.1016/j.cell.2025.07.033)
- [MIT News announcement (14 August 2025)](https://news.mit.edu/2025/using-generative-ai-researchers-design-compounds-kill-drug-resistant-bacteria-0814)
- [Chemistry World: "Antibiotics designed with the help of AI attack bacteria in entirely new ways"](https://www.chemistryworld.com/news/antibiotics-designed-with-the-help-of-ai-attack-bacteria-in-entirely-new-ways/4022039.article)
- [Technology Networks: AI-designed antibiotics show promise against drug-resistant bacteria](https://www.technologynetworks.com/drug-discovery/news/ai-designed-antibiotics-show-promise-against-drug-resistant-bacteria-403510)
- [Earlier work in this lineage: halicin (Cell, 2020)](https://www.cell.com/cell/fulltext/S0092-8674(20)30102-1)

---
*Back to **[README.md](./README.md)** · **[PROMPT.md](./PROMPT.md)**.*
