# PRAIM — AI-supported mammography screening at national scale

**Field:** 🩺 Medicine  ·  **When:** January 2025 · Nature Medicine

> 463,094 women, 119 radiologists, 12 sites in Germany: AI-supported double reading found 17.6% more cancers without recalling more women.

## What happened
On 7 January 2025, *Nature Medicine* published **PRAIM**, by Nora Eisemann and Stefan Bunk (joint first authors) with Alexander Katalinic (University of Lübeck) as senior author. It is described by its authors as an **observational, multicenter, real-world, noninferiority, implementation study**, and it is the largest report to date of AI actually running inside a national breast-cancer screening programme.

Between **July 2021 and February 2023**, **463,094 women** aged 50 to 69 were screened at **12 sites** in Germany's organized programme by **119 radiologists**. **260,739** of those screenings were done with AI support; the rest were standard double reading. Crucially, **radiologists voluntarily chose whether to use the AI system** on a given reading. The system was **Vara**, from the Berlin company of the same name.

| Metric | AI-supported | Standard double reading |
|---|---|---|
| Breast cancer detection rate (per 1,000) | **6.7** | **5.7** |
| Recall rate (per 1,000) | **37.4** | **38.3** |
| PPV of recall | **17.9%** | **14.9%** |
| PPV of biopsy | **64.5%** | **59.2%** |

The detection rate was **17.6% higher** (95% CI +5.7%, +30.8%) and the paper reports this as **statistically superior**. The recall rate was **lower than and noninferior** to the control group (percentage difference −2.5%, 95% CI −6.5% to +1.7%).

That combination is the point. Screening interventions usually buy extra cancer detection with extra recalls, meaning more women called back for a scare that turns out to be nothing. Here detection went up while recalls went slightly down, and both positive predictive values improved, so a larger share of the women who were recalled or biopsied genuinely had something.

## Why it matters
[MASAI](https://www.thelancet.com/journals/lancet/article/PIIS0140-6736(25)02464-X/abstract) is the randomised evidence for AI screening; PRAIM is the deployment evidence. They answer different questions. A randomised trial tells you whether a protocol works when it is applied as specified. PRAIM tells you what happened when a commercial AI system was switched on across a real national programme, with more than a hundred ordinary radiologists using it however they chose, for a year and a half.

Scale is the contribution. Nearly half a million women is large enough to measure detection and recall rates precisely, and the German programme's organized structure means the comparison is against a genuine, well-documented standard of care rather than an ad hoc baseline.

The design is also the main weakness, and it is a serious one. **This is not a randomised trial.** Radiologists decided for themselves when to use AI, so the two groups were not formed by chance, and the study was funded by the AI vendor. Those facts do not erase the result, but they bound what it can support. See [CONTEXT.md](./CONTEXT.md).

## Sources — the record of the discovery
- [Nature Medicine paper (Eisemann et al., 7 January 2025)](https://www.nature.com/articles/s41591-024-03408-6) · [DOI 10.1038/s41591-024-03408-6](https://doi.org/10.1038/s41591-024-03408-6)
- [PubMed record (PMID 39775040), Nat Med 31(3):917-924](https://pubmed.ncbi.nlm.nih.gov/39775040/)
- [Study data on Dryad](https://datadryad.org/dataset/doi:10.5061/dryad.zs7h44jgn)
- [University of Lübeck project page](https://research.uni-luebeck.de/en/projects/praim-prospective-multicenter-observational-study-of-an-integrate/)
- [Related: retrospective AI mammography reading (Nature, 2020)](../breast-cancer-screening/)

---
*In this folder: **[PROMPT.md](./PROMPT.md)** (a prompt to explore it with AI) · **[CONTEXT.md](./CONTEXT.md)** (background & caveats). Part of the [AI Hall of Fame](../../README.md) → [🩺 Medicine](../).*
