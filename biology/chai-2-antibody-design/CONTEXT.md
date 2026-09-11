# 📚 Context: Chai-2 and zero-shot antibody design

**Why antibodies are the hard case.** De novo binder design had a good run between 2022 and 2025, but almost all of it was **miniproteins**: small, usually helical, designed from scratch with no constraint on shape. An antibody is different. The scaffold is fixed by biology, an immunoglobulin fold that has to remain an immunoglobulin fold, and essentially all the binding happens on six **complementarity-determining region (CDR) loops** that stick out from it. Loops are floppy, structure predictors are worst at exactly this, and the designer has almost no freedom to change the parts that are easy to get right. That is why de novo antibody design lagged miniprotein design by years, and why hit rates before this work were low enough that you needed high-throughput screening to find anything, which is the very cost the method was supposed to remove.

**What "zero-shot" means here.** Not that the model was untrained, but that for each of the 52 antigens there was **no prior binder to learn from**: the targets were filtered to exclude anything with 70% or greater sequence identity to a structure in SAbDab. The model had never seen an antibody against these proteins or their close relatives, and got one attempt.

**The 24-well plate.** The title is the claim. A 24-well plate is a piece of ordinary benchtop labware. Twenty designs per target, expressed in a cell-free transcription-translation system and read out on bio-layer interferometry, is a scale any lab can run. Contrast that with phage display or hybridoma campaigns, which sample 10⁸ to 10¹¹ candidates. The argument is not that the model beats those methods on the best binder found; it is that it needs six orders of magnitude fewer tries.

**The people.** The preprint is credited to the **Chai Discovery Team**, with **Jacques Boitreaud, Jack Dent, Danny Geisz, Matthew McPartlon, Joshua Meier, Zhuoran Qiao, Alex Rogozhnikov, Nathan Rollins, Paul Wollenhaupt and Kevin Wu** named. Chai Discovery is a San Francisco company; its earlier model, Chai-1, was released for structure prediction. Chai-2 was not.

## Why it's in the Hall of Fame
It is the first reported result where de novo antibody design produces binders at a rate that makes screening unnecessary, across a target set large enough (52) to be more than anecdote, with an explicit and checkable hit criterion, and with the negative half of the result stated in the same sentence as the positive half (half the targets yielded nothing). It is included here **as a preprint with an asterisk**, not as an established result.

## Honest caveats
- **Preprint, not peer-reviewed.** Posted to bioRxiv on 6 July 2025. As of September 2026, no peer-reviewed journal version has appeared; a Europe PMC search returns only the preprint record.
- **A company-run benchmark on a company's own model.** Chai Discovery chose the 52 targets, ran the wet-lab work in house, defined the hit criterion, and reported the results. There was **no blinded external evaluation and no third-party arbiter**. Nothing here suggests bad faith, but a self-administered benchmark is a different kind of evidence from an independent one, and the distinction matters most exactly when the numbers are impressive.
- **The model is closed.** Chai Discovery's public GitHub release is **Chai-1**, its structure-prediction model. Chai-2's weights have not been published. That makes the central claim unfalsifiable from outside.
- **"16%" is an average across formats and targets.** The reported figure is 15.5% overall, 20.0% for VHHs and 13.7% for scFvs. **Half of the 52 targets produced no hit at all.**
- **Format matters and was not controlled for.** Designs were tested as scFvs and VHHs. The authors state plainly that biophysical characteristics of scFvs could differ once the same variable domains are reformatted as Fabs or full-length monoclonals, which is the format a therapeutic would actually use.
- **Binding is the beginning of a drug, not the end.** Thermal stability, aggregation propensity and viscosity are listed by the authors as unfinished. Developability and immunogenicity were assessed **in silico** against approved therapeutic antibodies, not measured.
- **The specificity panel is small.** The off-target result (1 of 23 designs showing above-background binding) is reassuring but covers 23 designs, not the full set.
- **The 100-fold comparison is to published prior methods, not a head-to-head run.** No competing method was re-run on these 52 targets under the same conditions.
- **CDR loop flexibility remains unsolved.** The authors name it as a continuing challenge affecting prediction accuracy, which is a useful admission: the result is empirical, not a claim that the underlying modelling problem is solved.

## Sources
- [bioRxiv preprint: "Zero-shot antibody design in a 24-well plate"](https://www.biorxiv.org/content/10.1101/2025.07.05.663018v1) (DOI 10.1101/2025.07.05.663018, July 6, 2025)
- [Full text, including the hit definition, novelty metrics and off-target panel](https://www.biorxiv.org/content/10.1101/2025.07.05.663018v1.full)

---
*Back to **[README.md](./README.md)** · **[PROMPT.md](./PROMPT.md)**.*
