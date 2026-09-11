# MASAI — the first randomised trial of AI in breast-cancer screening reports its primary outcome

**Field:** 🩺 Medicine  ·  **When:** January 2026 · The Lancet

> 105,934 women, randomised. AI-supported screening found more cancers, missed fewer between rounds, cut reading workload by nearly half, and did not raise the false-positive rate.

## What happened
On 31 January 2026, *The Lancet* published the primary-outcome analysis of the **MASAI** trial (Gommers, Hernström, Josefsson et al.; senior author **Kristina Lång**, Lund University). MASAI is a Swedish **randomised, controlled, non-inferiority, single-blinded, population-based screening-accuracy trial**, registered as [NCT04838756](https://clinicaltrials.gov/study/NCT04838756).

Every earlier headline result on AI in mammography, including [the 2020 Google Health study already in this collection](../breast-cancer-screening/), was **retrospective**: a model re-read images whose outcomes were already known. MASAI is the first randomised controlled trial to test AI-supported screening prospectively, in a real national screening programme, against the standard of care.

Between **12 April 2021 and 7 December 2022**, **105,934 women** were randomly assigned 1:1 to AI-supported screening or standard double reading without AI (19 were excluded from analysis). Median age was 53.8 years. In the intervention arm the AI system was used two ways: to **triage** each examination to single or double reading, and to provide **detection support** to the radiologist.

The primary outcome was the **interval cancer rate**, meaning cancers that surface between screening rounds because screening missed them. This is the outcome that matters, and the one retrospective studies cannot measure. The trial was powered for non-inferiority with a 20% margin.

| Outcome | AI-supported | Standard double reading |
|---|---|---|
| Interval cancer rate (per 1,000) | **1.55** (95% CI 1.23–1.92) | **1.76** (1.42–2.15) |
| Sensitivity | **80.5%** (76.4–84.2) | **73.8%** (68.9–78.3), p=0.031 |
| Specificity | **98.5%** (98.4–98.6) | **98.5%**, p=0.88 |

The interval-cancer proportion ratio was **0.88** (95% CI 0.65–1.18; p=0.41): non-inferior, and **12% fewer** interval cancers, though the confidence interval crosses 1 and the trial was not powered to prove superiority on this outcome. Descriptively, the AI arm had fewer interval cancers that were **invasive (75 vs 89)**, **T2 or larger (38 vs 48)**, and **non-luminal A (43 vs 59)**, the last being the aggressive subtypes and a **27%** descriptive reduction.

Sensitivity was significantly higher with AI and specificity was identical, so the extra cancers did not come at the cost of more false alarms. The trial's earlier clinical-safety analysis, published in *The Lancet Oncology* in 2023, reported that AI triage cut the **screen-reading workload by 44.3%**.

## Why it matters
Screening AI has had strong retrospective numbers for years. The open question was whether those numbers survive contact with a real programme, where radiologists behave differently when a model is in the loop and where the cancers that count are the ones nobody saw. MASAI is the trial that asked.

The answer is favourable on every axis it measured at once, which is the unusual part: more sensitivity, no loss of specificity, fewer aggressive interval cancers, and substantially less reading labour. Screening programmes across Europe are short of radiologists, and a protocol that halves reading volume without degrading accuracy is a workforce result as much as a clinical one.

It is worth being precise about what was shown. The primary outcome was **non-inferiority**, not proven superiority, on interval cancers. The favourable subtype differences are **descriptive**. And the trial is one country, one mammography vendor, one AI system, and experienced radiologists. See [CONTEXT.md](./CONTEXT.md) for the full list.

## Sources — the record of the discovery
- [The Lancet paper (Gommers et al., 31 January 2026)](https://www.thelancet.com/journals/lancet/article/PIIS0140-6736(25)02464-X/abstract) · [DOI 10.1016/S0140-6736(25)02464-X](https://doi.org/10.1016/S0140-6736(25)02464-X)
- [PubMed record (PMID 41620232), Lancet 407(10527):505-514](https://pubmed.ncbi.nlm.nih.gov/41620232/)
- [Earlier clinical-safety analysis (Lancet Oncology, 2023; PMID 37541274)](https://pubmed.ncbi.nlm.nih.gov/37541274/)
- [MASAI trial registration (NCT04838756)](https://clinicaltrials.gov/study/NCT04838756)
- [ecancer report on the final results](https://ecancer.org/en/news/27721-ai-supported-mammography-screening-results-in-fewer-aggressive-and-advanced-breast-cancers-finds-full-results-from-first-randomised-controlled-trial)

---
*In this folder: **[PROMPT.md](./PROMPT.md)** (a prompt to explore it with AI) · **[CONTEXT.md](./CONTEXT.md)** (background & caveats). Part of the [AI Hall of Fame](../../README.md) → [🩺 Medicine](../).*
