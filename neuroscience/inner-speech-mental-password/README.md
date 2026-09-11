# Inner speech decoded from motor cortex, with a mental password to keep it private

**Field:** 🧠 Neuroscience  ·  **When:** August 2025 · Cell

> Researchers showed that imagined sentences can be read out of motor cortex in real time, then built a lock for it: the decoder stays shut until you think "chitty chitty bang bang".

## What happened
On **14 August 2025**, *Cell* published "Inner speech in motor cortex and implications for speech neuroprostheses" by **Erin M. Kunz** and **Benyamin Abramovich Krasa** (joint first authors) with **Francis R. Willett** as senior author, from Stanford with collaborators at UC Davis, Emory, Brown, and Mass General Brigham.

Every speech BCI in this collection so far decodes **attempted** speech: the user physically tries to talk, and motor cortex activity from that attempt is decoded. It works, but it is **fatiguing**, and for people with some residual movement it is slow. The obvious question is whether you could skip the attempt and decode **inner speech**, the sentence you say silently in your head. The equally obvious worry is what happens if a device can do that without being asked.

Using multi-unit recordings from **four participants** with severe paralysis from ALS or brainstem stroke, the team established several things. Inner speech is **robustly represented in motor cortex**, and **imagined sentences can be decoded in real time**. The representation of inner speech is **highly correlated** with that of attempted speech, but not identical: they identified a neural **"motor-intent" dimension** that separates the two. They also found that **some aspects of free-form inner speech could be decoded** during sequence recall and counting tasks, meaning inner speech that the participant was not deliberately dictating.

Press materials from the institutions report real-time inner-speech decoding evaluated over a **125,000-word vocabulary** with two participants, at accuracies **up to 74%**. Those figures come from the press releases rather than from the paper's abstract, and we flag that in [CONTEXT.md](./CONTEXT.md).

The part that makes this entry unusual is the last result. Having demonstrated that private inner speech is partially decodable, the same paper demonstrates **high-fidelity strategies that prevent speech BCIs from unintentionally decoding it**. One is a **mental password**: the decoder stays locked until the user thinks a chosen phrase, in this case **"chitty chitty bang bang"**, which the system recognized with **more than 98% accuracy** per the press releases.

## Why it matters
Two reasons, pulling in opposite directions, which is exactly why it belongs here.

Practically, inner speech would be a better interface than attempted speech. As co-first author Abramovich Krasa put it in the release, if you only have to think about speech rather than physically attempt it, it is potentially easier. For someone using a BCI all day, less fatigue is not a minor convenience.

Ethically, this is the first paper in the field to treat **mental privacy as an engineering requirement rather than a talking point**. The usual pattern in neurotechnology is a capability paper followed, eventually, by a separate ethics commentary. Here the same study that shows some private inner speech is decodable also ships a mitigation and measures how well it works. A password that gates the decoder is a modest mechanism, but it establishes that "the device should not listen unless asked" is something you can build and test, not just worry about.

It is worth holding the limits firmly. This does not read minds. See [CONTEXT.md](./CONTEXT.md).

## Sources — the record of the discovery
- [Cell paper (Kunz, Abramovich Krasa et al., 14 August 2025)](https://www.cell.com/cell/fulltext/S0092-8674(25)00681-6) · [DOI 10.1016/j.cell.2025.06.015](https://doi.org/10.1016/j.cell.2025.06.015) · [PMID 40816265](https://pubmed.ncbi.nlm.nih.gov/40816265/)
- [EurekAlert release](https://www.eurekalert.org/news-releases/1093888)
- [News-Medical report](https://www.news-medical.net/news/20250814/Scientists-decode-inner-speech-from-brain-activity-with-high-accuracy.aspx)
- [Related entry: the 2023 speech neuroprostheses](../../medicine/speech-neuroprosthesis/)
- [Related entry: the handwriting BCI](../handwriting-bci/)

---
*In this folder: **[PROMPT.md](./PROMPT.md)** (a prompt to explore it with AI) · **[CONTEXT.md](./CONTEXT.md)** (background & caveats). Part of the [AI Hall of Fame](../../README.md) → [🧠 Neuroscience](../).*
