# 📚 Context: inner speech in motor cortex, and the mental password

**Where this sits.** The speech-BCI line runs through [the handwriting BCI](../handwriting-bci/) (2021), [the 2023 speech neuroprostheses](../../medicine/speech-neuroprosthesis/) at Stanford and UCSF, and the UC Davis work that produced instantaneous voice synthesis in 2025 and [two years of independent at-home use](../../medicine/speech-bci-two-years-at-home/) documented in 2026. All of those decode **attempted** speech. This paper asks what happens one level in, at speech that is only imagined, and it is the first to characterize inner speech in motor cortex at single-neuron resolution across multiple participants.

**Two questions, one study.** The paper is doing two things at once, and coverage tends to pick one. The engineering question is whether inner speech is a viable control signal, since attempted speech is tiring and slow. The privacy question is whether a device built to decode attempted speech might pick up inner speech the user never meant to share. You need the first result to know the second is a real concern, and the authors treat them as a pair.

**What they actually found about the neural code.** Inner speech is robustly represented in motor cortex and the representation is highly correlated with attempted speech, which is why a decoder trained on one has traction on the other. But the two are separable: there is a **"motor-intent" dimension** along which attempted and imagined speech differ. That is the finding the privacy mitigations lean on, because a difference you can measure is a difference you can gate on.

**The free-form result is the uncomfortable one.** During sequence recall and counting tasks, **some aspects of free-form inner speech could be decoded** without the participant deliberately dictating anything. Not a transcript of the inner monologue, but not nothing either. This is the sentence in the abstract that should shape how the result is reported, and it is usually the one left out.

**The mitigations.** The headline mechanism is a mental password: the decoder ignores inner speech until unlocked by a chosen phrase, "chitty chitty bang bang", picked because it is unusual enough not to occur by accident. The releases report better than 98% recognition. The paper describes these as high-fidelity strategies to prevent unintentional decoding, in the plural, so the password is one instance of the approach rather than the whole of it.

**A naming note.** The co-first author appears in the *Cell* author list and on PubMed as **Benyamin Abramovich Krasa**, and in the Stanford and EurekAlert press materials as **Benyamin Meschede-Krasa**. Same person; useful to know when searching.

**People and funding.** Erin M. Kunz (Stanford) and Benyamin Abramovich Krasa are joint first authors; Francis R. Willett is senior author, with Jaimie M. Henderson, Shaul Druckmann, Leigh R. Hochberg, Sergey D. Stavisky, David M. Brandman, Chethan Pandarinath and others among the co-authors. Per the releases, funding came from NIH, the Department of Defense, the Department of Veterans Affairs, the Howard Hughes Medical Institute and NSF.

## Why it's in the Hall of Fame
Because it is a capability result and a safeguard result in the same paper. The field has spent a decade demonstrating that brain signals can be decoded and then, separately, holding conferences about what that implies. This study shows that some private inner speech is decodable, says so plainly, and then builds and measures a mechanism to stop it happening by accident. That is a better template for neurotechnology than the usual order of operations.

## Honest caveats
- **This is not mind reading, and the paper does not claim it is.** Decoding imagined sentences that a participant is deliberately producing on cue is a long way from reading spontaneous thought. The free-form decoding was partial and confined to structured tasks like sequence recall and counting.
- **Free-form inner speech cannot currently be decoded without substantial errors.** The researchers say so directly in the press materials, and note that better hardware and algorithms might change this in future. The privacy concern is forward-looking; it is not a description of what is possible today.
- **The headline numbers are not in the abstract.** The abstract of the *Cell* paper is qualitative. The **74%** accuracy figure, the **125,000-word** vocabulary evaluation with two participants, and the **more than 98%** password recognition all come from institutional press releases and secondary coverage. They are consistent across several outlets, but if you need to cite them precisely, get them from the full paper rather than from this entry or from a news story.
- **Four participants, all with severe paralysis.** ALS or brainstem stroke, all with implanted electrode arrays. Nothing here applies to people without implants, and non-invasive equivalents are not close.
- **It requires neurosurgery and an investigational device.** As with every intracortical BCI in this collection.
- **A password protects against accidental decoding, not against a hostile system.** The threat model here is a user's own device over-hearing them, and for that the mechanism is sensible. It is not a defence against a decoder deliberately built to eavesdrop, and it should not be read as one.
- **Substantial disclosed conflicts of interest.** The declaration is long and worth reading. Several authors are inventors on intellectual property licensed to Blackrock Neurotech and Neuralink; Stavisky has equity in Wispr.ai and advises Sonera; Brandman and Rubin are principal investigators for a Paradromics clinical trial; Pandarinath is employed at Meta Reality Labs; Henderson consults for several neurotechnology companies. Hochberg's institution has research support agreements with numerous BCI firms. All disclosed, all normal for the field, all relevant to an honest reading.

## Sources
- [Cell paper (Kunz, Abramovich Krasa et al., 14 August 2025)](https://www.cell.com/cell/fulltext/S0092-8674(25)00681-6) · [DOI 10.1016/j.cell.2025.06.015](https://doi.org/10.1016/j.cell.2025.06.015)
- [PubMed record (PMID 40816265), including the full declaration of interests](https://pubmed.ncbi.nlm.nih.gov/40816265/)
- [EurekAlert release](https://www.eurekalert.org/news-releases/1093888)
- [News-Medical report](https://www.news-medical.net/news/20250814/Scientists-decode-inner-speech-from-brain-activity-with-high-accuracy.aspx)
- [Related entry: the 2023 speech neuroprostheses](../../medicine/speech-neuroprosthesis/)
- [Related entry: two years of independent at-home BCI use](../../medicine/speech-bci-two-years-at-home/)
- [Related entry: the handwriting BCI](../handwriting-bci/)

---
*Back to **[README.md](./README.md)** · **[PROMPT.md](./PROMPT.md)**.*
