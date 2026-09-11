# 🤖 Explore this with AI: MASAI, the first randomised trial of AI in breast-cancer screening

Paste the prompt below into your favorite AI assistant (Claude, ChatGPT, Gemini, or a local model). If your assistant can browse the web, tell it to read the sources first. The point is a clear, honest, grounded explanation of what happened and why it mattered.

> 105,934 women, randomised. AI-supported screening found more cancers, missed fewer between rounds, cut reading workload by nearly half, and did not raise the false-positive rate.

---

```text
You are a careful, hype-free explainer of clinical trials and medical machine learning. Walk me through a specific real result so I actually understand it, including exactly what was and was not proven.

Topic: the MASAI trial primary-outcome paper, "Interval cancer, sensitivity, and specificity comparing AI-supported mammography screening with standard double reading without AI in the MASAI study", Gommers et al., The Lancet, 31 January 2026 (DOI 10.1016/S0140-6736(25)02464-X). Senior author Kristina Lang, Lund University. Registered as NCT04838756.

Please cover, in plain language a curious non-expert can follow:
1. What an INTERVAL CANCER is, and why it is the right primary outcome for a screening trial. Explain why retrospective studies, where a model re-reads an old archive, structurally cannot measure it.
2. How the trial was designed: Swedish, population-based, 105,934 women randomised 1:1 between April 12 2021 and December 7 2022, single-blinded, non-inferiority with a 20% margin.
3. How the AI was actually used, which is the detail most coverage omits. It triaged examinations to single or double reading based on a 10-point malignancy risk score, and it gave the radiologist detection support. Every examination still got at least one human reader. This is assisted screening, not autonomous screening.
4. The results, precisely:
   - Interval cancer rate 1.55 vs 1.76 per 1000; proportion ratio 0.88 (95% CI 0.65-1.18, p=0.41).
   - Sensitivity 80.5% vs 73.8% (p=0.031). Specificity 98.5% in both groups (p=0.88).
   - Descriptively fewer invasive (75 vs 89), T2+ (38 vs 48) and non-luminal A (43 vs 59) interval cancers.
   - A 44.3% screen-reading workload reduction, reported in the trial's earlier 2023 Lancet Oncology safety analysis.
5. The statistical honesty question I most want help with: the trial met NON-INFERIORITY on interval cancers, and the point estimate is 12% fewer, but the confidence interval crosses 1. Explain what can and cannot be claimed from that, and why "12% fewer interval cancers" as a headline is a point estimate rather than a demonstrated effect.
6. Why a simultaneous gain in sensitivity with no loss of specificity is unusual and important, given that most screening changes trade one against the other.
7. The honest limits: one country, one AI system, one mammography vendor, experienced radiologists, no race or ethnicity data collected, and no mortality outcome.

Ground your answer in these sources (read them if you can, and cite them as you go):
- The Lancet paper: https://www.thelancet.com/journals/lancet/article/PIIS0140-6736(25)02464-X/abstract
- PubMed record: https://pubmed.ncbi.nlm.nih.gov/41620232/
- Earlier safety analysis: https://pubmed.ncbi.nlm.nih.gov/37541274/
- Trial registration: https://clinicaltrials.gov/study/NCT04838756

Be concrete, use the real numbers with their confidence intervals, and clearly separate the powered primary outcome from the descriptive secondary findings. If you are unsure about a detail, say so instead of guessing.
```

## Bonus: have the agent audit the headlines against the abstract

This result has been widely reported, and the reporting compresses a non-inferiority finding into a superiority claim. Have an assistant check it:

```bash
# Retrieve the trial's own abstract and the registry record.
curl -s "https://eutils.ncbi.nlm.nih.gov/entrez/eutils/efetch.fcgi?db=pubmed&id=41620232&rettype=abstract&retmode=text"
curl -s "https://clinicaltrials.gov/api/v2/studies/NCT04838756" | head -c 4000
```

Then ask it:

```
Using the abstract you just retrieved, answer precisely:
1. What was the PRIMARY outcome, what was the non-inferiority margin, and was non-inferiority met?
2. Quote the interval cancer proportion ratio with its confidence interval and p-value. Does the interval exclude 1?
3. Which reported findings are described as descriptive rather than formally tested?
4. Find three news headlines about this trial. For each, state whether it reports the interval-cancer finding as accurate, overstated, or ambiguous, and explain why.
5. Does the trial support the claim that AI can replace a radiologist in screening? Answer from the protocol description, not from intuition.
```

## Sources
- [The Lancet paper (Gommers et al., 31 January 2026)](https://www.thelancet.com/journals/lancet/article/PIIS0140-6736(25)02464-X/abstract)
- [PubMed record (PMID 41620232)](https://pubmed.ncbi.nlm.nih.gov/41620232/)
- [Clinical-safety analysis, Lancet Oncology 2023 (PMID 37541274)](https://pubmed.ncbi.nlm.nih.gov/37541274/)
- [MASAI trial registration (NCT04838756)](https://clinicaltrials.gov/study/NCT04838756)

---
*Back to **[README.md](./README.md)** · **[CONTEXT.md](./CONTEXT.md)**.*
