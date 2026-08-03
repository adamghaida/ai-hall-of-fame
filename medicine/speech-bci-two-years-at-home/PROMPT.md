# 🤖 Explore this with AI: two years of a speech BCI used independently at home

Paste the prompt below into your favorite AI assistant (Claude, ChatGPT, Gemini, or a local model). If your assistant can browse the web, tell it to read the sources first. The point is a clear, honest, grounded explanation of what happened and why it mattered.

> A man with ALS spoke nearly 2 million words through an AI decoder over almost two years, on his own schedule, in his own house, with no researcher in the room.

---

```text
You are a careful, hype-free explainer of neurotechnology and machine learning. Walk me through a specific real result so I actually understand it, including what it does not show.

Topic: "Long-term independent use of an intracortical brain-computer interface for speech and cursor control", Nicholas S. Card et al., Nature Medicine, 15 June 2026 (DOI 10.1038/s41591-026-04414-6). The participant is Casey Harrell, a man with ALS enrolled in the BrainGate2 trial at UC Davis, implanted in 2023 with four microelectrode arrays (256 electrodes) in the left precentral gyrus.

Please cover, in plain language a curious non-expert can follow:
1. What the device physically is and what signal it records. Be clear that it decodes ATTEMPTED speech (motor cortex activity from trying to speak), not inner thoughts or imagination, and explain why that distinction matters.
2. Where the machine learning actually sits in the pipeline: neural signal to phonemes to words, the role of a 125,000-word vocabulary and language modeling, and how a second decoder turns attempted hand movement into cursor and click control.
3. What is genuinely new here versus the same group's earlier results. Earlier work (NEJM 2024) reported roughly 97% word decoding, and a June 2025 Nature paper demonstrated near-instantaneous voice synthesis. The new claim is INDEPENDENT AT-HOME USE: more than 3,800 hours over nearly two years with no researchers present.
4. The numbers, precisely, and what each one measures:
   - 183,060 sentences and 1,960,163 words communicated, averaging 56 words per minute.
   - 92% of sentences self-labeled by the participant as decoded at least mostly correctly. This is the real-world figure.
   - More than 99% word accuracy in FORMAL testing where he was asked to say words shown on a screen. Explain clearly that this is a controlled copy task over a fixed vocabulary and is not the same thing as 99% accuracy in free conversation.
5. Why "no researcher in the room" is the scientifically interesting part: decoder stability over months, recalibration burden, and who actually operates the system day to day.
6. The honest limits. This is a single participant (n = 1). It requires neurosurgery. The device is investigational and not approved for general use. The hardware is not portable and involves a percutaneous connection with infection risk. Results for one person do not predict results for others, and ALS is progressive, so the durability of this outcome is unknown. Some ALS participants' implants in other studies have stopped working for unclear reasons.
7. What you would want to see next before calling this a solved assistive technology: more participants, fully implanted wireless hardware, and a regulatory path.

Ground your answer in these sources (read them if you can, and cite them as you go):
- Nature Medicine paper: https://www.nature.com/articles/s41591-026-04414-6
- UC Davis Health announcement: https://health.ucdavis.edu/news/headlines/brain-computer-interface-enables-independent-accurate-communication-for-man-living-with-als/2026/06
- EurekAlert release: https://www.eurekalert.org/news-releases/1132151
- Prior work, NEJM 2024: https://pmc.ncbi.nlm.nih.gov/articles/PMC11328962/
- Prior work, Nature 2025 voice synthesis: https://www.nature.com/articles/s41586-025-09127-3
- BrainGate2 trial record: https://clinicaltrials.gov/study/NCT00912041

Write about the participant as a person, not a data point, and do not be sentimental about it. Separate what the paper demonstrates from what press coverage implies. If you are unsure about a detail, say so instead of guessing.
```

## Bonus: have the agent audit the accuracy claim

Most coverage of this result compresses two different measurements into one number. Have an assistant pull them apart:

```
Read the abstract of https://www.nature.com/articles/s41591-026-04414-6 and the UC Davis release at https://health.ucdavis.edu/news/headlines/brain-computer-interface-enables-independent-accurate-communication-for-man-living-with-als/2026/06

Then answer precisely:
1. Exactly what task produced the ">99% word accuracy" figure, and what vocabulary size it was measured over?
2. Exactly what does the 92% figure measure, and how were the participant's own ratings collected?
3. Find three news headlines about this study and state, for each, whether it reports the accuracy figure in a way a careful reader would call accurate, overstated, or ambiguous.
4. Which of the two numbers better describes what a user of this system would experience day to day, and why?
```

## Sources
- [Nature Medicine paper (Card et al., 15 June 2026)](https://www.nature.com/articles/s41591-026-04414-6)
- [UC Davis Health announcement](https://health.ucdavis.edu/news/headlines/brain-computer-interface-enables-independent-accurate-communication-for-man-living-with-als/2026/06)
- [EurekAlert release](https://www.eurekalert.org/news-releases/1132151)
- [BrainGate2 clinical trial record (NCT00912041)](https://clinicaltrials.gov/study/NCT00912041)

---
*Back to **[README.md](./README.md)** · **[CONTEXT.md](./CONTEXT.md)**.*
