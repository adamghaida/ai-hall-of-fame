# A brain implant that synthesizes a voice instantly, with the speaker's own intonation

**Field:** 🧠 Neuroscience  ·  **When:** June 2025 · Nature

> Not text on a screen a few seconds later. A voice, in about a fortieth of a second, that he could bend into a question or use to sing.

## What happened
On **12 June 2025**, *Nature* published "An instantaneous voice-synthesis neuroprosthesis" by **Maitreyee Wairagkar** and colleagues at UC Davis, with **David M. Brandman** and **Sergey D. Stavisky** as senior authors, working under the **BrainGate2** clinical trial.

The participant is a man with **ALS** and **severe dysarthria**, whose remaining speech is very difficult to understand. **256 microelectrodes** implanted in his **ventral precentral gyrus** record neural activity as he attempts to speak. Instead of decoding that activity into text, the system synthesizes **voice**, continuously, with **closed-loop audio feedback** so he hears himself as he speaks. The delay is about **one fortieth of a second**, comparable to the gap between speaking and hearing your own voice naturally.

Every speech BCI before this, including [the 2023 speech neuroprostheses](../../medicine/speech-neuroprosthesis/) and [the handwriting BCI](../handwriting-bci/), produced **text**. Text arrives after a pause, in complete units, stripped of everything that is not words. You cannot interrupt with text. You cannot be sarcastic with it, or ask a question by lifting your voice at the end, or hum.

Two things make this paper hard rather than incremental. First, there was **no ground-truth speech to train on**: the participant cannot speak intelligibly, so there is no recording of him saying the target sentence to pair with his neural activity. The team had to get around the absence of training labels and still synthesize his voice recognisably. Second, they decoded **paralinguistic features** alongside phonemic content, which let him **change intonation in real time** to ask questions or stress a word, and **sing short melodies**.

On intelligibility, UC Davis reports that listeners correctly understood about **60%** of the synthesized words, against **4%** for his unaided speech. That is a large improvement and it is also well short of reliable conversation, which is the honest way to hold both facts at once.

## Why it matters
The field's benchmark had been words per minute and word error rate, both of which treat speech as text delivery. This paper changes the target. Prosody, timing, and hearing your own voice are not decorations on top of language; they are most of how people actually talk to each other. A system that returns a sentence three seconds late cannot participate in a conversation, however accurate the sentence is.

The technical result underneath is that **intention to speak can be decoded continuously**, moment to moment, rather than segmented into utterances and transcribed after the fact. The intonation control matters for the same reason: it shows that the motor cortex signal carries more than which phonemes are coming, and that the extra information survives decoding.

This is one participant, and the same UC Davis research programme later documented [nearly two years of independent at-home use](../../medicine/speech-bci-two-years-at-home/) of its text-based system. Both results are existence proofs, not products. See [CONTEXT.md](./CONTEXT.md) for the limits.

## Sources — the record of the discovery
- [Nature paper (Wairagkar et al., 12 June 2025)](https://www.nature.com/articles/s41586-025-09127-3) · [DOI 10.1038/s41586-025-09127-3](https://doi.org/10.1038/s41586-025-09127-3) · [PMID 40506548](https://pubmed.ncbi.nlm.nih.gov/40506548/)
- [UC Davis Health announcement](https://health.ucdavis.edu/news/headlines/first-of-its-kind-technology-helps-man-with-als-speak-in-real-time/2025/06)
- [EurekAlert release](https://www.eurekalert.org/news-releases/1087025)
- [ScienceDaily report](https://www.sciencedaily.com/releases/2025/06/250612081317.htm)
- [Code: Neuroprosthetics-Lab/brain-to-voice-2025](https://github.com/Neuroprosthetics-Lab/brain-to-voice-2025)
- [Data on Dryad](https://doi.org/10.5061/dryad.2280gb64f)

---
*In this folder: **[PROMPT.md](./PROMPT.md)** (a prompt to explore it with AI) · **[CONTEXT.md](./CONTEXT.md)** (background & caveats). Part of the [AI Hall of Fame](../../README.md) → [🧠 Neuroscience](../).*
