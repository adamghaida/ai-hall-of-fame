# 📚 Context: an instantaneous voice-synthesis neuroprosthesis

**The lineage.** This is the UC Davis arm of the **BrainGate2** trial, with Brown University and Mass General Brigham. The same group reported roughly 97% word decoding to text in the *New England Journal of Medicine* in 2024, and later documented [nearly two years of independent at-home use](../../medicine/speech-bci-two-years-at-home/) in *Nature Medicine* in June 2026. The [2023 speech neuroprosthesis entry](../../medicine/speech-neuroprosthesis/) covers the Stanford and UCSF results that made near-conversational decoding credible in the first place. In the released data and code the participant is referred to as **T15**.

**Why "no ground-truth speech" is the central technical problem.** Supervised decoders learn a mapping from neural activity to a target. For brain-to-text, the target is the sentence, which you know because you put it on the screen. For brain-to-voice, the natural target would be a recording of the participant saying that sentence in his own voice, which does not exist and cannot be made, because the reason he has an implant is that he cannot speak intelligibly. The paper's contribution is producing an accurate synthesis of his voice anyway. This is the part that gets lost when the result is summarized as "brain implant lets man speak".

**What "instantaneous" buys.** Roughly 25 milliseconds of latency with closed-loop audio feedback puts the system inside the window where speaking feels like speaking. Hearing your own voice as you produce it is part of the motor control loop for normal speech, and it is also what lets a person interrupt, react, and hold the floor in a conversation. Stavisky's framing in the UC Davis release is that users will be able to be more included in a conversation, for instance by being able to interrupt. Wairagkar described the approach as mapping neural activity to intended sounds at each moment in time, which is the difference from segmenting speech into utterances and transcribing them.

**Paralinguistics.** Alongside phonemes, the decoder recovered features that let the participant modulate pitch in real time: turning a statement into a question, emphasizing a word, and producing simple melodies. He could also produce words that were not in a predefined set. This is evidence about what the precentral gyrus encodes, not only about what a decoder can be trained to output.

**Open materials.** The decoder code is on GitHub and the neural data is on Dryad, which is unusually open for clinical BCI work and makes parts of the result independently checkable.

## Why it's in the Hall of Fame
Because it moved the goalposts in a useful direction. The field had been optimizing words per minute and word error rate, which are metrics for a transcription system. This paper asks instead whether the thing on the other end sounds like a person talking, in time, with a voice they recognize as theirs. That is a harder and more honest target, and the result clears enough of it to be worth taking seriously.

## Honest caveats
- **n = 1.** One participant, one implant. Everything here is an existence proof. It does not establish how well this generalizes, and the paper does not claim otherwise.
- **About 60% intelligibility is a real improvement and not good enough.** Listeners understood roughly 60% of synthesized words, versus 4% unaided. Reporting that as restored speech overstates it. Four words in ten are still wrong or unclear, which is a long way from reliable conversation.
- **It requires neurosurgery.** 256 microelectrodes implanted in the precentral gyrus, with the ongoing risks and maintenance that implies.
- **Investigational device.** BrainGate2 is a clinical trial. This is not an approved product and it is not available to patients outside the trial.
- **Not portable, and measured in the lab.** This paper is about the synthesis capability, not about independent daily use. The at-home durability question is what the group's separate 2026 *Nature Medicine* paper addresses, and that study used the text-based system.
- **Decoding attempted speech, not thought.** The participant attempts to speak and motor cortex activity is decoded. The system does not read inner monologue or imagination. That distinction matters and gets blurred constantly in coverage. For what happens when researchers deliberately look at inner speech, and how they built a safeguard against decoding it unintentionally, see the separate Stanford *Cell* work from August 2025.
- **Substantial disclosed conflicts of interest.** The competing-interests statement is long. Stavisky is an inventor on speech-decoding intellectual property licensed to Blackrock Neurotech and Neuralink and advises Sonera; Wairagkar, Stavisky and Brandman have patent applications owned by the University of California with intellectual property licensed to Paradromics; Brandman was a surgical consultant for Paradromics; Mass General Brigham has research support agreements with numerous BCI companies through Hochberg. This is standard for translational neurotechnology and fully disclosed, and it belongs in an honest reading.

## Sources
- [Nature paper (Wairagkar et al., 12 June 2025)](https://www.nature.com/articles/s41586-025-09127-3) · [PMID 40506548, including the full competing-interests statement](https://pubmed.ncbi.nlm.nih.gov/40506548/)
- [UC Davis Health announcement](https://health.ucdavis.edu/news/headlines/first-of-its-kind-technology-helps-man-with-als-speak-in-real-time/2025/06)
- [EurekAlert release](https://www.eurekalert.org/news-releases/1087025)
- [ScienceDaily report](https://www.sciencedaily.com/releases/2025/06/250612081317.htm)
- [Code: Neuroprosthetics-Lab/brain-to-voice-2025](https://github.com/Neuroprosthetics-Lab/brain-to-voice-2025)
- [Data on Dryad](https://doi.org/10.5061/dryad.2280gb64f)
- [Related entry: the 2023 speech neuroprostheses](../../medicine/speech-neuroprosthesis/)
- [Related entry: two years of independent at-home BCI use](../../medicine/speech-bci-two-years-at-home/)

---
*Back to **[README.md](./README.md)** · **[PROMPT.md](./PROMPT.md)**.*
