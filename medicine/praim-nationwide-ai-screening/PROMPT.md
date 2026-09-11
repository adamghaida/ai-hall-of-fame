# 🤖 Explore this with AI: PRAIM, AI-supported mammography screening at national scale

Paste the prompt below into your favorite AI assistant (Claude, ChatGPT, Gemini, or a local model). If your assistant can browse the web, tell it to read the sources first. The point is a clear, honest, grounded explanation of what happened and why it mattered.

> 463,094 women, 119 radiologists, 12 sites in Germany: AI-supported double reading found 17.6% more cancers without recalling more women.

---

```text
You are a careful, hype-free explainer of epidemiology and medical machine learning. I want to understand a specific real-world deployment result AND how much weight its study design can bear.

Topic: the PRAIM study, "Nationwide real-world implementation of AI for cancer detection in population-based mammography screening", Eisemann, Bunk et al., Nature Medicine, 7 January 2025 (DOI 10.1038/s41591-024-03408-6). Senior author Alexander Katalinic, University of Lubeck.

Please cover, in plain language a curious non-expert can follow:
1. What the study did: 463,094 women aged 50-69 screened at 12 sites in Germany's organized programme between July 2021 and February 2023, by 119 radiologists, with 260,739 screenings done using AI support (the Vara system).
2. The results, precisely:
   - Cancer detection rate 6.7 vs 5.7 per 1000, a 17.6% relative increase (95% CI +5.7%, +30.8%), reported as statistically superior.
   - Recall rate 37.4 vs 38.3 per 1000, lower than and noninferior to control (difference -2.5%, 95% CI -6.5% to +1.7%).
   - PPV of recall 17.9% vs 14.9%; PPV of biopsy 64.5% vs 59.2%.
3. Why "more cancers found AND fewer recalls" is a notable combination, given that screening changes usually trade sensitivity against false positives. Explain what positive predictive value means and why both PPVs rising supports the interpretation.
4. The study design, carefully. This is an OBSERVATIONAL implementation study, not a randomised trial, and radiologists VOLUNTARILY CHOSE whether to use the AI on a given reading. Walk me through the specific ways that self-selection could bias the comparison in either direction, and what statistical adjustment can and cannot fix.
5. The funding and authorship structure. The study was funded by Vara, the company whose system was studied; Vara was involved in study design, data collection and interpretation, and writing; three authors are Vara employees with stock options, and several radiologist authors are Vara customers. Explain how a careful reader should weigh a vendor-funded implementation study that discloses all of this openly.
6. What detection rate does NOT tell us: interval cancers, stage shift, overdiagnosis, and mortality. Explain overdiagnosis specifically, and why "found more cancers" is not automatically "did more good".
7. How this compares to the MASAI randomised trial in Sweden, which reported its primary interval-cancer outcome in The Lancet in January 2026. What does each study design establish that the other cannot?

Ground your answer in these sources (read them if you can, and cite them as you go):
- Nature Medicine paper: https://www.nature.com/articles/s41591-024-03408-6
- PubMed record with the full competing-interests statement: https://pubmed.ncbi.nlm.nih.gov/39775040/
- Study data: https://datadryad.org/dataset/doi:10.5061/dryad.zs7h44jgn
- MASAI trial for comparison: https://www.thelancet.com/journals/lancet/article/PIIS0140-6736(25)02464-X/abstract

Be concrete, use the real numbers with their confidence intervals, and be explicit about the difference between "associated with" and "caused". If you are unsure about a detail, say so instead of guessing.
```

## Bonus: have the agent read the disclosures itself

The competing-interests statement is part of the evidence here, and most coverage omits it entirely. Have an assistant retrieve it directly:

```bash
# The PubMed record includes the abstract and the full competing-interests statement.
curl -s "https://eutils.ncbi.nlm.nih.gov/entrez/eutils/efetch.fcgi?db=pubmed&id=39775040&rettype=abstract&retmode=text"
```

Then ask it:

```
Using the record you just retrieved, answer precisely:
1. Quote the sentence describing how radiologists decided whether to use the AI system. What does that imply about group comparability?
2. Who funded the study, and what role did the funder play in design, data, interpretation and writing?
3. Which authors are employees of the AI vendor, and what financial interests are disclosed for the other authors?
4. Does the abstract claim the AI CAUSED the higher detection rate, or does it use associational language? Quote the exact wording of the conclusion.
5. Now find three news articles about PRAIM. For each, state whether it mentions the observational design and the vendor funding. Report how many of the three would leave a reader with an accurate impression of the evidence.
```

## Sources
- [Nature Medicine paper (Eisemann et al., 7 January 2025)](https://www.nature.com/articles/s41591-024-03408-6)
- [PubMed record (PMID 39775040)](https://pubmed.ncbi.nlm.nih.gov/39775040/)
- [Study data on Dryad](https://datadryad.org/dataset/doi:10.5061/dryad.zs7h44jgn)
- [University of Lübeck project page](https://research.uni-luebeck.de/en/projects/praim-prospective-multicenter-observational-study-of-an-integrate/)

---
*Back to **[README.md](./README.md)** · **[CONTEXT.md](./CONTEXT.md)**.*
