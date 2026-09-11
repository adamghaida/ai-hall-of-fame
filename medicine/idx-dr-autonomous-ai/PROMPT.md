# 🤖 Explore this with AI: IDx-DR, the first autonomous AI allowed to make a diagnosis

Paste the prompt below into your favorite AI assistant (Claude, ChatGPT, Gemini, or a local model). If your assistant can browse the web, tell it to read the sources first. The point is a clear, honest, grounded explanation of what happened and why it mattered.

> The first time a regulator let software deliver a diagnostic result with no doctor reviewing it.

---

```text
You are a careful, hype-free explainer of medical devices, regulation, and machine learning. Walk me through a specific real milestone so I understand both the technology and the regulatory logic.

Topic: the FDA's De Novo authorization of IDx-DR on 11 April 2018 (DEN180001), the first autonomous AI diagnostic system authorized in any field of medicine, and its pivotal trial: "Pivotal trial of an autonomous AI-based diagnostic system for detection of diabetic retinopathy in primary care offices", Abramoff, Lavin, Birch, Shah, Folk, npj Digital Medicine 1:39, 28 August 2018 (DOI 10.1038/s41746-018-0040-6), registered as NCT02963441.

Please cover, in plain language a curious non-expert can follow:
1. What diabetic retinopathy is, why early detection matters, and why screening has historically been bottlenecked by the supply of eye specialists.
2. What exactly "autonomous" means here. The system returns the screening decision itself, with no clinician interpreting the images. Be precise about how narrow the authorized claim is: detecting more than mild diabetic retinopathy (mtmDR) in adults with diabetes not previously diagnosed with retinopathy, using one specified camera, with a binary referral output.
3. The pivotal trial design: 900 participants enrolled at 10 primary care sites, 819 fully analyzable, mtmDR prevalence 23.8%, compared against Wisconsin Fundus Photograph Reading Center widefield stereoscopic photography and macular OCT with ETDRS grading, with prespecified endpoints of >85% sensitivity and >82.5% specificity.
4. The results, and a discrepancy I want you to handle honestly: the published paper reports sensitivity 87.2% and specificity 90.7%, while the FDA decision summary reports observed sensitivity 87.4% and observed specificity 89.5% (and mentions separately computed enrichment-corrected values). Explain what might account for this and do NOT paper over it.
5. Why the imageability rate of 96.1% matters as much as the accuracy figures. What does it mean for an autonomous system to recognize when it cannot produce a result, and why is that essential when no clinician is checking?
6. How this differs from the 2016 Gulshan et al. JAMA study, where a deep network matched specialists at grading fundus photographs. One is a claim about model accuracy on datasets; the other is a claim about a product in a real workflow. Explain why the second is harder.
7. What the De Novo pathway is, why it was used here, and what "special controls" FDA attached to the new device category. Explain why the precedent mattered more than the authorization itself.
8. The honest limits: about one in eight cases missed at 87% sensitivity, a single pivotal trial, a narrow indication, company-run trial with the founder as first author, and the fact that authorization measures diagnostic accuracy rather than proving that deployment prevents blindness.

Ground your answer in these sources (read them if you can, and cite them as you go):
- FDA De Novo order: https://www.accessdata.fda.gov/cdrh_docs/pdf18/DEN180001.pdf
- FDA decision summary: https://www.accessdata.fda.gov/cdrh_docs/reviews/DEN180001.pdf
- FDA De Novo database record: https://www.accessdata.fda.gov/scripts/cdrh/cfdocs/cfpmn/denovo.cfm?id=DEN180001
- Pivotal trial: https://www.nature.com/articles/s41746-018-0040-6
- Trial registration: https://clinicaltrials.gov/study/NCT02963441

Note: the product was later renamed LumineticsCore, so current material may use either name. Be concrete, use the real numbers, and if you are unsure about a detail, say so instead of guessing.
```

## Bonus: have the agent check the regulatory record itself

Unusually for an AI milestone, the primary evidence here is a public regulatory file. Have an assistant read it rather than trusting press coverage:

```bash
# The FDA's own De Novo database record: decision date, device name, requester, regulation number.
curl -s "https://www.accessdata.fda.gov/scripts/cdrh/cfdocs/cfpmn/denovo.cfm?id=DEN180001"

# The pivotal trial's PubMed record and abstract.
curl -s "https://eutils.ncbi.nlm.nih.gov/entrez/eutils/efetch.fcgi?db=pubmed&id=31304320&rettype=abstract&retmode=text"
```

Then ask it:

```
Using the records you just retrieved, plus the FDA decision summary PDF, answer precisely:
1. What is the exact decision date, the De Novo number, and the regulation number and device category FDA created?
2. Quote the authorized indications for use exactly. List every restriction it contains.
3. What sensitivity and specificity does the npj Digital Medicine abstract report, and what does the FDA decision summary report as OBSERVED values? State both and note that they differ.
4. What were the prespecified performance thresholds, and did the system clear them on both documents' numbers?
5. Does the authorization permit use in patients who already have a diagnosis of diabetic retinopathy? Answer from the indication text, not from intuition.
6. Finally: find a news article about this authorization and check whether it accurately conveys how narrow the authorized indication is.
```

## Sources
- [FDA De Novo classification order, DEN180001](https://www.accessdata.fda.gov/cdrh_docs/pdf18/DEN180001.pdf)
- [FDA decision summary](https://www.accessdata.fda.gov/cdrh_docs/reviews/DEN180001.pdf)
- [FDA De Novo database record](https://www.accessdata.fda.gov/scripts/cdrh/cfdocs/cfpmn/denovo.cfm?id=DEN180001)
- [Pivotal trial (npj Digital Medicine, 2018)](https://www.nature.com/articles/s41746-018-0040-6) · [PMID 31304320](https://pubmed.ncbi.nlm.nih.gov/31304320/)
- [Trial registration (NCT02963441)](https://clinicaltrials.gov/study/NCT02963441)

---
*Back to **[README.md](./README.md)** · **[CONTEXT.md](./CONTEXT.md)**.*
