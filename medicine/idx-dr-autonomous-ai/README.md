# IDx-DR — the first autonomous AI allowed to make a diagnosis

**Field:** 🩺 Medicine  ·  **When:** April 2018 · US FDA

> The first time a regulator let software deliver a diagnostic result with no doctor reviewing it.

## What happened
On **11 April 2018**, the FDA granted the De Novo request **DEN180001** for **IDx-DR**, software from IDx, LLC (later Digital Diagnostics) in Iowa City, with Michael D. Abràmoff as the listed contact. The order created an entirely new device category, **21 CFR 886.1100, "retinal diagnostic software device"**, Class II, product code PIB.

The authorized indication is narrow and specific: IDx-DR is indicated for use by health care providers to **automatically detect more than mild diabetic retinopathy (mtmDR)** in adults with diabetes who have **not previously been diagnosed** with diabetic retinopathy, using the Topcon NW400 camera.

What makes it a first is not the algorithm. It is the **absence of a clinician in the loop**. Every previously authorized AI-ish medical device produced an output that a qualified human then interpreted; computer-aided detection marked a suspicious region and a radiologist decided what it meant. IDx-DR returns the screening decision itself. A nurse or technician in a primary care office takes retinal photographs, and the software reports either that more than mild diabetic retinopathy is present and the patient should see an eye specialist, or that it is not and the patient should be rescreened later. **No ophthalmologist reads the images.**

The evidence was a prospective pivotal trial, registered as [NCT02963441](https://clinicaltrials.gov/study/NCT02963441) and published in *npj Digital Medicine* on 28 August 2018 by Abràmoff, Lavin, Birch, Shah and Folk. **900 participants** with diabetes and no prior diagnosis of retinopathy were enrolled at **10 primary care sites**, and **819** could be fully analyzed. Prevalence of mtmDR in the analyzable set was **23.8%** (198/819). Images were compared against the Wisconsin Fundus Photograph Reading Center's widefield stereoscopic photography and macular OCT, graded on the ETDRS scale.

The system had to clear **prespecified** thresholds of 85% sensitivity and 82.5% specificity, and it did:

| Metric | Published paper | FDA decision summary (observed) |
|---|---|---|
| Sensitivity | **87.2%** (95% CI 81.8–91.2) | **87.4%** (95% CI 81.9–92.9) |
| Specificity | **90.7%** (95% CI 88.3–92.7) | **89.5%** (95% CI 86.9–93.1) |
| Imageability | **96.1%** (94.6–97.3) | **96.1%** (819/852) |

The two documents report slightly different sensitivity and specificity figures, which is worth knowing if you are citing them; see [CONTEXT.md](./CONTEXT.md).

Operators were not eye specialists, and they went through a standardized training protocol before the study began. That was deliberate: the claim under test was that the whole package works in the hands of primary care staff.

## Why it matters
The [2016 Gulshan study already in this collection](../diabetic-retinopathy-detection/) showed that a deep network could **match specialists** at grading diabetic retinopathy from fundus photographs. That is a scientific result about accuracy. IDx-DR is a different kind of milestone: a regulator examining a specific system, in a specific setting, with a specific camera, and concluding it could be **used on patients without expert oversight**.

That distinction is the whole story. Diabetic retinopathy is a leading cause of blindness among working-age adults, it is treatable when caught early, and the bottleneck has always been that screening requires an eye specialist. Most people with diabetes do not get their recommended annual eye exam. Moving the screen into the primary care office, where patients already are, attacks the bottleneck directly.

It also set the regulatory template. The FDA had to define what evidence an autonomous diagnostic needs: a prospective trial against a rigorous reference standard, prespecified endpoints, and special controls covering the operator, the camera, and the labelling. Every autonomous diagnostic AI since has been argued against that precedent.

## Sources — the record of the discovery
- [FDA De Novo classification order, DEN180001 (11 April 2018)](https://www.accessdata.fda.gov/cdrh_docs/pdf18/DEN180001.pdf)
- [FDA decision summary with the clinical data](https://www.accessdata.fda.gov/cdrh_docs/reviews/DEN180001.pdf)
- [FDA De Novo database record, DEN180001](https://www.accessdata.fda.gov/scripts/cdrh/cfdocs/cfpmn/denovo.cfm?id=DEN180001)
- [Pivotal trial (Abràmoff et al., npj Digital Medicine, 28 August 2018)](https://www.nature.com/articles/s41746-018-0040-6) · [DOI 10.1038/s41746-018-0040-6](https://doi.org/10.1038/s41746-018-0040-6) · [PMID 31304320](https://pubmed.ncbi.nlm.nih.gov/31304320/)
- [Trial registration (NCT02963441)](https://clinicaltrials.gov/study/NCT02963441)
- [Company announcement (Digital Diagnostics)](https://www.digitaldiagnostics.com/fda-permits-marketing-of-lumineticscore-formerly-known-as-idx-dr-for-automated-detection-of-diabetic-retinopathy-in-primary-care/)
- [University of Iowa Research Park announcement](https://researchpark.uiowa.edu/news/2018/04/fda-permits-marketing-idx-dr-automated-detection-diabetic-retinopathy-primary-care)

---
*In this folder: **[PROMPT.md](./PROMPT.md)** (a prompt to explore it with AI) · **[CONTEXT.md](./CONTEXT.md)** (background & caveats). Part of the [AI Hall of Fame](../../README.md) → [🩺 Medicine](../).*
