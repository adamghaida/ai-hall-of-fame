# Mind captioning — turning brain activity into sentences about what someone saw

**Field:** 🧠 Neuroscience  ·  **When:** November 2025 · Science Advances

> Not "the person is looking at a dog". A structured sentence describing the scene, generated from an fMRI scan, and it still works when you remove the brain's language network.

## What happened
On **5 November 2025**, *Science Advances* published "Mind captioning: Evolving descriptive text of mental content from human brain activity" by **Tomoyasu Horikawa**, a single-author paper from **NTT Communication Science Laboratories** in Kanagawa, Japan.

Earlier brain-decoding work, including [image reconstruction with Stable Diffusion](../brain-image-reconstruction/), recovered *what* a person was looking at. Recovering a **description** is a different problem, because a description has structure: objects, actions, places, and the relationships between them. "A dog chases a man" and "a man chases a dog" contain identical words.

The method has two stages. First, **linear decoding models** are trained to translate fMRI activity evoked by videos into the **semantic features** that a deep language model computes for those videos' captions. Second, candidate descriptions are **optimized** so their own features line up with the brain-decoded features, refined iteratively through **word replacement and interpolation**. The text is evolved to match the brain, rather than generated in one pass.

**Six participants** were scanned, all Japanese speakers who were non-native English speakers, while viewing short video clips. Per coverage of the work, the stimulus set ran to roughly **2,196 videos**, the language models used were **DeBERTa-large** and **RoBERTa-large**, and each participant contributed on the order of **17 hours** of scanning across multiple days.

For evaluation, generated descriptions were used to pick the correct video out of **100 candidates**, where chance is 1%. NTT reports roughly **50% accuracy for viewed content** and about **30% for recalled content**; some coverage puts the recall figure as high as 40%. Either way it is far above chance, and the method **generalized from perception to recall**, producing text for videos participants were remembering rather than watching.

The most interesting scientific result is almost a footnote in the summaries. The descriptions remained accurate **even when the canonical language network was excluded** from the analysis. That suggests structured, fine-grained semantic information is represented outside the brain regions usually credited with language.

## Why it matters
For neuroscience, the language-network result is the substantive finding. If you can reconstruct a structured description of a scene from activity outside the classical language areas, then the representation of relational meaning is more distributed than the standard account implies.

For applications, generalizing to **recalled** content is what points somewhere. A method that only works while someone stares at a stimulus is a laboratory curiosity. One that verbalizes what a person is remembering gestures at a communication route for people who cannot produce language, such as those with aphasia, which is the use case Horikawa names.

The right framing is a **research method**, not a technology. This is 6 participants, per-subject models, hours of scanning each, in an fMRI scanner. See [CONTEXT.md](./CONTEXT.md) before repeating any headline about AI reading minds.

## Sources — the record of the discovery
- [Science Advances paper (Horikawa, 5 November 2025)](https://doi.org/10.1126/sciadv.adw1464) · Sci Adv 11(45):eadw1464 · [PMID 41191769](https://pubmed.ncbi.nlm.nih.gov/41191769/)
- [Nature news: 'Mind-captioning' AI decodes brain activity to turn thoughts into text](https://www.nature.com/articles/d41586-025-03624-1)
- [NTT press release](https://group.ntt/en/newsrelease/2025/11/17/251117a.html)
- [Project page](https://horikawa-t.github.io/MindCaptioningProject/)
- [Code: horikawa-t/MindCaptioning](https://github.com/horikawa-t/MindCaptioning)
- [Raw fMRI data on OpenNeuro](https://doi.org/10.18112/openneuro.ds005191.v1.0.2)
- [Related entry: reconstructing seen images from brain scans](../brain-image-reconstruction/)

---
*In this folder: **[PROMPT.md](./PROMPT.md)** (a prompt to explore it with AI) · **[CONTEXT.md](./CONTEXT.md)** (background & caveats). Part of the [AI Hall of Fame](../../README.md) → [🧠 Neuroscience](../).*
