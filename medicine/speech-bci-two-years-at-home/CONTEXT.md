# 📚 Context: two years of independent, at-home speech BCI use

**The lineage.** This is the BrainGate2 line of work, run at UC Davis with Brown University and Mass General Brigham. The [2023 speech neuroprosthesis entry](../speech-neuroprosthesis/) covers the generation of results that made near-conversational decoding credible; the [handwriting BCI](../../neuroscience/handwriting-bci/) covers the earlier idea that decoding a fast, well-practiced motor act beats decoding slow point-and-click. The same UC Davis system reported roughly 97% word decoding in the *New England Journal of Medicine* in 2024, and near-instantaneous synthesis of the participant's voice in *Nature* in June 2025. The June 2026 *Nature Medicine* paper is the deployment chapter rather than a new decoding record.

**The person.** Casey Harrell is 47 and has ALS. He has tetraparesis and dysarthria severe enough that his remaining speech is very hard to follow. He chose to be public about his participation and has spoken through the device in interviews. He works, in his own words in the UC Davis release, a life "more full of dynamic action and with friends and family, with colleagues". He has a young daughter who does not remember what he sounded like before. He is not a demonstration; he is a user who logged 3,800 hours because the thing was useful to him, sometimes for twelve hours straight.

**What actually changed technically.** The decoding accuracy was already high in 2024. What was missing was independence. As co-senior author Sergey Stavisky put it in the UC Davis release, in the previous study Harrell "could only use the neuroprosthesis when someone from our research team was there to set it up." The new work is about a system stable enough that a home care team can start it, and a decoder that holds calibration across months rather than across a session. Co-PI David Brandman framed the result as BCIs moving past being "proof-of-concept devices that lived in highly controlled research labs."

**Reading the numbers correctly.** Two accuracy figures circulate and they measure different things:

| Figure | What it actually measures |
|---|---|
| **more than 99% word accuracy** | Formal test sessions in which Harrell was asked to say words presented on a screen, decoded over a 125,000-word vocabulary. A controlled copy task. |
| **92% of sentences** | Harrell's own labeling of his real, unscripted at-home sentences as decoded at least mostly correctly. The closer proxy for daily experience. |

The volume figures (183,060 sentences, 1,960,163 words, 56 words per minute average, more than 3,800 hours over nearly two years) describe genuine independent use, not test sessions.

## Why it's in the Hall of Fame
Because the interesting result is the one that is hardest to publish: not a higher number on a benchmark, but a machine-learning system that kept working, in someone's house, without its authors, for two years. Almost every AI achievement in this collection was measured under supervision. This one was measured by its absence.

## Honest caveats
- **n = 1.** One participant, one implant, one brain. Everything here is an existence proof. It says a thing is possible, not how often it will happen. Performance for Casey Harrell does not predict performance for anyone else, and the paper does not claim otherwise.
- **It requires brain surgery.** Four microelectrode arrays placed in the precentral gyrus, with a percutaneous connection through the skull. That carries real infection risk and daily maintenance, and it is not a decision anyone makes lightly.
- **Investigational device, not an approved product.** The UC Davis materials carry the standard notice: investigational device, limited by federal law to investigational use. You cannot get this. There is no cleared product, and the regulatory path is still ahead.
- **Not portable.** The computing hardware sits on a cart. "At home" means at home, not out in the world.
- **The 99% number is a copy task.** It is a real and impressive measurement, but headlines that present it as free-conversation accuracy are overstating it. Harrell's own 92% sentence rating is the honest everyday figure.
- **ALS is progressive, and BCI durability is unproven.** Nearly two years is among the longest such records, and it is still short. Reporting on the wider field notes that implants in some ALS participants have eventually stopped working without a clear explanation. Whether the neural signals, the arrays, or the decoders hold up as the disease advances is an open question for this participant specifically.
- **Conflicts of interest exist.** Investigators in this field, including on this team, hold patents and commercial interests related to BCI technology. That is reported in secondary coverage of the study (the paper's own disclosure statement sits behind a paywall) and is normal for translational work, but it belongs in an honest reading.
- **The prize is for the body of work, not this paper alone.** Sergey Stavisky received the 2026 Chen Institute and Science Prize for AI Accelerated Research (announced July 16, 2026) for the speech-neuroprosthesis program overall, which spans the 2024 NEJM, 2025 Nature, and 2026 Nature Medicine results.

## Sources
- [Nature Medicine paper (Card et al., 15 June 2026)](https://www.nature.com/articles/s41591-026-04414-6) · [DOI 10.1038/s41591-026-04414-6](https://doi.org/10.1038/s41591-026-04414-6)
- [UC Davis Health announcement](https://health.ucdavis.edu/news/headlines/brain-computer-interface-enables-independent-accurate-communication-for-man-living-with-als/2026/06)
- [EurekAlert release](https://www.eurekalert.org/news-releases/1132151)
- [Prior work: an accurate and rapidly calibrating speech neuroprosthesis (NEJM 2024)](https://pmc.ncbi.nlm.nih.gov/articles/PMC11328962/)
- [Prior work: an instantaneous voice-synthesis neuroprosthesis (Nature 2025)](https://www.nature.com/articles/s41586-025-09127-3)
- [BrainGate2 clinical trial record (NCT00912041)](https://clinicaltrials.gov/study/NCT00912041)
- [MIT Technology Review: brain-computer interface trials are taking off](https://www.technologyreview.com/2026/06/19/1139270/brain-computer-interface-trials-are-taking-off/)
- [AAAS: Chen Institute and Science Prize for AI Accelerated Research (July 2026)](https://www.aaas.org/news/winner-chen-institute-and-science-prize-uses-ai-rebuild-speech-brain-signals)

---
*Back to **[README.md](./README.md)** · **[PROMPT.md](./PROMPT.md)**.*
