# 📚 Context: MASAI, the first randomised trial of AI in breast-cancer screening

**Why a randomised trial was the missing piece.** Mammography AI has produced impressive retrospective results since the late 2010s, including [the Google Health study](../breast-cancer-screening/) in *Nature* in 2020. Retrospective studies share a structural weakness: the model re-reads images whose outcomes are already known, nobody's behaviour changes, and the measured quantity is model accuracy rather than programme performance. What a screening programme actually cares about is the **interval cancer rate**, the cancers that appear between rounds because the screen missed them. You cannot measure that by re-reading an archive; you have to randomise women and wait.

**The design.** MASAI ran at four screening sites in Sweden, sponsored by Region Skåne and led by Kristina Lång at Lund University. Women eligible for the national programme were informed as part of their screening invitation and randomised 1:1 unless they opted out. Randomisation was automatic, done by the imaging system after image acquisition. Participants and the radiographers acquiring images were masked; the radiologists reading them were not, which is unavoidable when the intervention is a tool the reader uses.

**How the AI was used.** This is the detail most coverage skips. The system did not replace radiologists. It produced an examination-level malignancy risk score on a 10-point scale, which was used to **triage**: examinations scoring 1 to 9 went to a single reader, score 10 went to two readers. Radiologists also saw the risk score, and computer-aided detection marks for the higher-scoring examinations. So the workload saving comes from the triage step and the accuracy gain from decision support, and the protocol still requires at least one human radiologist on every examination. The safety analysis published in *The Lancet Oncology* in 2023 describes the system as Transpara version 1.7.0.

**The three reports.** MASAI has published in stages: the clinical-safety analysis at 80,033 enrolled participants (*Lancet Oncology*, 2023), which reported the 44.3% workload reduction and cancer detection rates of 6.1 vs 5.1 per 1,000; and the primary-outcome interval-cancer analysis at 105,934 participants (*The Lancet*, 31 January 2026). Per the registry the trial is now complete. When citing "the MASAI result", it is worth saying which analysis you mean.

**Funding.** Swedish Cancer Society, the Confederation of Regional Cancer Centres, and Swedish governmental funding for clinical research (ALF). The trial was not funded by the AI vendor, which matters for a result this commercially consequential.

## Why it's in the Hall of Fame
Because it is the first time AI screening has been tested the way a drug would be: randomised, prospective, in a real population, against the standard of care, on an outcome that patients experience rather than a proxy the model was optimised for. Plenty of AI systems have beaten radiologists on a dataset. This is the one that was put in front of 105,934 women and measured on the cancers it failed to catch.

## Honest caveats
- **The primary outcome was non-inferiority, not superiority.** The proportion ratio of 0.88 has a 95% CI of 0.65 to 1.18 and p=0.41. The honest statement is "AI-supported screening did not produce more interval cancers, and produced numerically fewer." Headlines reading "12% fewer interval cancers" are quoting a point estimate whose interval includes no difference.
- **The subtype findings are descriptive.** Fewer invasive (75 vs 89), T2+ (38 vs 48) and non-luminal A (43 vs 59) interval cancers are reported descriptively, not as powered hypothesis tests. The widely quoted "27% fewer aggressive cancers" is the non-luminal A comparison and should carry that qualifier.
- **One country, one vendor, one AI system, one device type.** Sweden, with a well-organised national programme and moderately-to-highly experienced radiologists. Performance elsewhere, with different equipment, different reader experience, or a different model, is not established by this trial.
- **Race and ethnicity data were not collected.** The trial reports this explicitly. Screening AI has documented performance differences across populations, and MASAI cannot speak to them.
- **It is still not autonomous.** Every examination gets at least one human reader. This is a trial of AI-assisted screening, not of replacing radiologists, and the investigators have said so directly.
- **Interval cancers are a 2-year window.** Longer-term outcomes, and above all whether any of this changes breast-cancer mortality, are not what this trial measured. Mortality would require a far larger and longer study.
- **Generalising the workload figure needs care.** The 44.3% reduction comes from the 2023 safety analysis under this specific triage protocol. A programme using the AI differently would not automatically see it.

## Sources
- [The Lancet paper (Gommers et al., 31 January 2026)](https://www.thelancet.com/journals/lancet/article/PIIS0140-6736(25)02464-X/abstract) · [DOI 10.1016/S0140-6736(25)02464-X](https://doi.org/10.1016/S0140-6736(25)02464-X)
- [PubMed record (PMID 41620232)](https://pubmed.ncbi.nlm.nih.gov/41620232/)
- [Clinical-safety analysis, Lancet Oncology 2023 (PMID 37541274)](https://pubmed.ncbi.nlm.nih.gov/37541274/)
- [MASAI trial registration (NCT04838756)](https://clinicaltrials.gov/study/NCT04838756)
- [ecancer report on the final results](https://ecancer.org/en/news/27721-ai-supported-mammography-screening-results-in-fewer-aggressive-and-advanced-breast-cancers-finds-full-results-from-first-randomised-controlled-trial)
- [Vendor announcement of the publication (ScreenPoint Medical)](https://www.prnewswire.com/news-releases/the-lancet-publishes-final-results-from-the-first-randomized-controlled-trial-in-breast-ai-302675094.html)
- [Related entry: retrospective AI mammography reading (Nature, 2020)](../breast-cancer-screening/)

---
*Back to **[README.md](./README.md)** · **[PROMPT.md](./PROMPT.md)**.*
