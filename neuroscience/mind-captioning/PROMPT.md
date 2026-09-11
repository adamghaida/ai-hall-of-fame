# 🤖 Explore this with AI: mind captioning

Paste the prompt below into your favorite AI assistant (Claude, ChatGPT, Gemini, or a local model). If your assistant can browse the web, tell it to read the sources first. The point is a clear, honest, grounded explanation of what happened and why it mattered.

> Not "the person is looking at a dog". A structured sentence describing the scene, generated from an fMRI scan, and it still works when you remove the brain's language network.

---

```text
You are a careful, hype-free explainer of neuroscience and machine learning. Walk me through a specific real result so I understand the method, the evidence, and why the popular framing of it is misleading.

Topic: "Mind captioning: Evolving descriptive text of mental content from human brain activity", Tomoyasu Horikawa (single author, NTT Communication Science Laboratories), Science Advances 11(45):eadw1464, published 5 November 2025 (DOI 10.1126/sciadv.adw1464).

Please cover, in plain language a curious non-expert can follow:
1. Why generating a DESCRIPTION is harder than classifying what someone is looking at, or even reconstructing the image. Use the example that "a dog chases a man" and "a man chases a dog" contain identical words, and explain what it means for a decoded representation to carry relational structure.
2. The two-stage method, carefully:
   - Stage one: LINEAR decoding models mapping fMRI activity to the semantic features a deep language model computes for video captions.
   - Stage two: optimizing candidate text, through word replacement and interpolation, so its features align with the brain-decoded features.
   Explain specifically why using a LINEAR decoder matters for interpreting the result, and why the language model here is a fixed semantic yardstick rather than a generator being prompted. This distinction is the thing most coverage gets wrong.
3. The experimental setup: six participants (Japanese speakers, non-native English speakers), video stimuli (reported as roughly 2,196 clips), DeBERTa-large and RoBERTa-large as the language models, and around 17 hours of scanning per participant across multiple days.
4. How performance was measured: using the generated description to identify the correct video among 100 candidates, where chance is 1%. NTT reports about 50% for viewed content and about 30% for recalled content, though some coverage says recall reached 40%. Note the discrepancy rather than resolving it silently.
5. The finding I think is the most scientifically interesting, which summaries tend to bury: accurate descriptions were produced even when the canonical language network was EXCLUDED. Explain what that implies about where structured semantic information lives in the brain, and why it undercuts the objection that the method is merely reading inner verbalization.
6. Why generalizing from perception to RECALL is the step that matters for any future application, and what the proposed use case (helping people with aphasia or other language-expression difficulties) would actually require.
7. Then be blunt about the limits: 6 participants, per-subject models trained on hours of each person's own data, fMRI required, roughly half the descriptions failing to identify the right video, no independent replication yet, and the author's own concern that language-model biases could distort text attributed to a person's mind.
8. Finally, evaluate the "AI reads your thoughts" framing. What would have to be true for that to be accurate, and how far is this from it?

Ground your answer in these sources (read them if you can, and cite them as you go):
- Paper: https://doi.org/10.1126/sciadv.adw1464
- PubMed record: https://pubmed.ncbi.nlm.nih.gov/41191769/
- Nature news coverage: https://www.nature.com/articles/d41586-025-03624-1
- NTT press release: https://group.ntt/en/newsrelease/2025/11/17/251117a.html
- Project page: https://horikawa-t.github.io/MindCaptioningProject/

Be concrete, and distinguish what the paper demonstrates from what the phrase "mind reading" implies. If you are unsure about a detail, say so instead of guessing.
```

## Bonus: the code and the raw data are public

This is one of the more checkable results in the collection. Code, raw fMRI data and preprocessed features are all released:

```bash
# The paper's abstract, straight from PubMed.
curl -s "https://eutils.ncbi.nlm.nih.gov/entrez/eutils/efetch.fcgi?db=pubmed&id=41191769&rettype=abstract&retmode=text"

# The author's demo code for reproducing the analyses.
git clone https://github.com/horikawa-t/MindCaptioning
```

Raw fMRI data: https://doi.org/10.18112/openneuro.ds005191.v1.0.2
Preprocessed features: https://doi.org/10.6084/m9.figshare.25808179

Then ask it:

```
Using the abstract and the repository you just retrieved, answer precisely:
1. Quote the abstract. Does it state the number of participants, or any accuracy figures? If not, where do the widely quoted numbers come from?
2. Quote exactly what the abstract says about the canonical language network. Restate the claim in your own words and explain its significance.
3. From the repository: what does the pipeline consist of, what language model features does it use, and what would someone need to download to reproduce the main result?
4. The abstract mentions generalizing to "recalled content". What would you need to check in the paper to be satisfied that the recall result is not just leakage from the perception training data?
5. Write two one-sentence summaries of this study: one a careful scientist would endorse, and one a tabloid would run. Explain precisely which words do the misleading work in the second.
```

## Sources
- [Science Advances paper (Horikawa, 5 November 2025)](https://doi.org/10.1126/sciadv.adw1464)
- [PubMed record (PMID 41191769)](https://pubmed.ncbi.nlm.nih.gov/41191769/)
- [Nature news coverage](https://www.nature.com/articles/d41586-025-03624-1)
- [NTT press release](https://group.ntt/en/newsrelease/2025/11/17/251117a.html)
- [Project page](https://horikawa-t.github.io/MindCaptioningProject/)
- [Code: horikawa-t/MindCaptioning](https://github.com/horikawa-t/MindCaptioning)

---
*Back to **[README.md](./README.md)** · **[CONTEXT.md](./CONTEXT.md)**.*
