# 🤖 Explore this with AI: inner speech decoding, and the mental password

Paste the prompt below into your favorite AI assistant (Claude, ChatGPT, Gemini, or a local model). If your assistant can browse the web, tell it to read the sources first. The point is a clear, honest, grounded explanation of what happened and why it mattered.

> Researchers showed that imagined sentences can be read out of motor cortex in real time, then built a lock for it: the decoder stays shut until you think "chitty chitty bang bang".

---

```text
You are a careful, hype-free explainer of neurotechnology, machine learning, and research ethics. Walk me through a specific real result so I understand both what was demonstrated and how much the privacy framing is warranted.

Topic: "Inner speech in motor cortex and implications for speech neuroprostheses", Erin M. Kunz and Benyamin Abramovich Krasa (joint first authors), senior author Francis R. Willett, Cell, 14 August 2025 (DOI 10.1016/j.cell.2025.06.015). Multi-unit recordings from four participants with severe paralysis from ALS or brainstem stroke. Note the co-first author appears in press materials as Benyamin Meschede-Krasa.

Please cover, in plain language a curious non-expert can follow:
1. The difference between ATTEMPTED speech (physically trying to talk, which existing speech BCIs decode) and INNER speech (the sentence you say silently in your head). Explain why attempted speech is fatiguing and why inner speech would be a better interface if it worked.
2. What the study found about how inner speech is represented in motor cortex: that it is robustly represented, that imagined sentences can be decoded in real time, that the representation is highly correlated with attempted speech, and that there is a separable neural "motor-intent" dimension distinguishing the two. Explain why that separability is what makes safeguards technically possible.
3. The uncomfortable finding, which I do not want softened: some aspects of FREE-FORM inner speech could be decoded during sequence recall and counting tasks, meaning speech the participant was not deliberately dictating.
4. The safeguard: a mental password ("chitty chitty bang bang") that keeps the decoder locked until the user thinks it, reported at better than 98% recognition. Explain what threat this actually defends against (a user's own device over-hearing them) and what it does NOT defend against (a system deliberately built to eavesdrop).
5. An evidence-quality question I specifically want you to check: the Cell abstract is qualitative and contains no percentages. The widely quoted figures - up to 74% accuracy, a 125,000-word vocabulary evaluated with two participants, over 98% password recognition - come from institutional press releases. Verify where each number actually comes from and tell me if any of them are not traceable to the paper itself.
6. Why this is NOT mind reading. Be specific about the gap between decoding deliberately-produced imagined sentences on cue and reading spontaneous thought, and note that the researchers say free-form inner speech cannot currently be decoded without substantial errors.
7. The honest limits: four participants, all with implanted arrays and severe paralysis, neurosurgery required, investigational devices, and extensive disclosed commercial conflicts among the authors.

Ground your answer in these sources (read them if you can, and cite them as you go):
- Cell paper: https://www.cell.com/cell/fulltext/S0092-8674(25)00681-6
- PubMed record with full declaration of interests: https://pubmed.ncbi.nlm.nih.gov/40816265/
- EurekAlert release: https://www.eurekalert.org/news-releases/1093888
- News-Medical report: https://www.news-medical.net/news/20250814/Scientists-decode-inner-speech-from-brain-activity-with-high-accuracy.aspx

Be concrete, and be careful to distinguish what the paper demonstrates from what the phrase "reading your thoughts" implies to a general reader. If you are unsure about a detail, say so instead of guessing.
```

## Bonus: have the agent trace the numbers to their source

This result is reported with confident percentages that do not appear in the paper's abstract. That is a good exercise in source discipline:

```bash
# The paper's own abstract and full declaration of interests.
curl -s "https://eutils.ncbi.nlm.nih.gov/entrez/eutils/efetch.fcgi?db=pubmed&id=40816265&rettype=abstract&retmode=text"
```

Then ask it:

```
Using the record you just retrieved, answer precisely:
1. Quote the abstract. Does it contain ANY numerical accuracy figures? How many participants does it state?
2. The figures "74% accuracy", "125,000-word vocabulary" and "over 98% password recognition" are widely reported. For each, find the earliest source you can that states it, and say whether that source is the paper, a press release, or downstream reporting.
3. Quote what the abstract says about decoding free-form inner speech. Compare that to how three news headlines characterize the study. Which headlines would leave a reader with an accurate impression?
4. Summarize the declaration of interests. Which authors have commercial ties to which BCI companies?
5. Based only on the abstract, write a one-sentence description of this study that a careful scientist would not object to. Then write the sentence a headline writer would use, and explain the gap.
```

## Sources
- [Cell paper (Kunz, Abramovich Krasa et al., 14 August 2025)](https://www.cell.com/cell/fulltext/S0092-8674(25)00681-6)
- [PubMed record (PMID 40816265)](https://pubmed.ncbi.nlm.nih.gov/40816265/)
- [EurekAlert release](https://www.eurekalert.org/news-releases/1093888)
- [News-Medical report](https://www.news-medical.net/news/20250814/Scientists-decode-inner-speech-from-brain-activity-with-high-accuracy.aspx)

---
*Back to **[README.md](./README.md)** · **[CONTEXT.md](./CONTEXT.md)**.*
