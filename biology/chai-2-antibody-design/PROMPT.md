# 🤖 Explore this with AI: Chai-2 and zero-shot antibody design

Paste the prompt below into your favorite AI assistant (Claude, ChatGPT, Gemini, or a local model). If your assistant can browse the web, tell it to read the sources first. The point is a clear, honest, grounded explanation of what happened and why it mattered.

> Twenty designs per target, 52 targets with no known antibody, one round of testing, and a binder for half of them. Reported by the company that built the model, and still not peer-reviewed.

---

```text
You are a careful, hype-free molecular biology explainer, and you are also a skeptical reader of benchmarks. Walk me through a specific AI-in-biology claim so I understand both the result and how much weight it can bear.

Topic: Chai-2, described in the preprint "Zero-shot antibody design in a 24-well plate" (Chai Discovery Team; Boitreaud, Dent, Geisz, McPartlon, Meier, Qiao, Rogozhnikov, Rollins, Wollenhaupt, Wu), posted to bioRxiv on 6 July 2025, DOI 10.1101/2025.07.05.663018. This is a preprint. It has not been peer reviewed.

Please cover, in plain language a curious non-expert can follow:
1. How antibodies are normally discovered: animal immunization, hybridomas, phage display. Give rough numbers for how many candidates those methods sample (10^8 to 10^11) so the comparison later lands.
2. Why de novo ANTIBODY design is harder than de novo miniprotein design. Explain the immunoglobulin scaffold, the six CDR loops, and why flexible loops are the worst case for a structure-based design method.
3. What "zero-shot" means in this paper: the 52 antigens had no known antibodies in the Protein Data Bank, and were filtered to exclude anything with 70% or more sequence identity to an entry in SAbDab. The model had never seen a binder to these proteins or close relatives.
4. The experimental design: up to 20 designs per target, expressed as scFvs or VHHs in a cell-free system, measured by bio-layer interferometry, one round only with no affinity maturation. Explain what BLI measures and what a KD is.
5. The results and their exact definitions:
   - Average hit rate 15.5% overall (20.0% VHH, 13.7% scFv), described as over 100-fold better than prior computational methods.
   - At least one hit for 50% of targets, 26 of 52.
   - A "hit" means a binding-positive BLI curve more than 0.1 nm above background AND more than 300% of background. Discuss whether that is a strict or a permissive threshold.
   - Miniproteins: 68% wet-lab success, picomolar KDs against IL-7Ra, PD-L1, PDGFR-beta and Insulin R, low-nanomolar against TNF-alpha.
   - Epitope-specific design on CCL2 at two distinct epitopes: 20% and 25% hit rates.
   - Cross-reactivity: a human/cyno lead at 77 nM and 121 nM.
   - Novelty: designs at least 10 angstroms RMSD from the closest known antibody structure, CDR edit distance above 10.
   - Specificity: 1 of 23 designs (4%) bound anything in an off-target panel.
6. Why "20 designs" is arguably the real headline rather than "16%". Work through what changes operationally when a target needs twenty molecules synthesized instead of a screening campaign.
7. Now be a critic. Lay out, specifically:
   - This is a preprint. Check whether a peer-reviewed version exists now.
   - The benchmark was designed, run, and reported by the company whose model is being tested. Targets chosen in house, wet lab in house, hit criterion defined by the authors, no blinded external evaluation.
   - Chai-2 is proprietary: no released weights, no public API, no web server. Explain why that makes the claim unfalsifiable from outside and what a genuinely independent evaluation would look like.
   - Half of the 52 targets produced nothing.
   - The designs were tested as scFvs and VHHs; the authors note biophysics can change when reformatted as Fabs or full-length mAbs, which is what a drug would be.
   - Developability and immunogenicity were assessed in silico, not measured. Thermal stability, aggregation and viscosity are named by the authors as open.
   - The 100-fold claim compares to published numbers from other methods, not a head-to-head rerun on these 52 targets.
8. Finally, give your honest read: is this a genuine step change in antibody design, a strong result that needs independent confirmation, or a well-packaged company benchmark? Argue for your answer.

Ground your answer in these sources (read them if you can, and cite them as you go):
- Preprint: https://www.biorxiv.org/content/10.1101/2025.07.05.663018v1
- Full text: https://www.biorxiv.org/content/10.1101/2025.07.05.663018v1.full

If you are unsure about a detail, say so instead of guessing, and never present a preprint number as an established finding.
```

## Have the agent verify it

The model is closed and no designed sequences were released, so there is no molecule to check. What *is* checkable, and what most citations of this work get wrong, is its **publication status**. Both bioRxiv and Europe PMC expose that directly.

```python
import json, urllib.parse, urllib.request

DOI = "10.1101/2025.07.05.663018"

# 1. bioRxiv tracks whether a preprint has been published in a journal.
pubs = json.load(urllib.request.urlopen(f"https://api.biorxiv.org/pubs/biorxiv/{DOI}"))
print("bioRxiv published-version records:", len(pubs.get("collection", [])))
for m in pubs.get("messages", []):
    print("  ", m.get("status"))

# 2. Europe PMC labels each record's source: PPR = preprint, MED/PMC = journal article.
q = urllib.parse.quote('TITLE:"Zero-shot antibody design in a 24-well plate"')
res = json.load(urllib.request.urlopen(
    f"https://www.ebi.ac.uk/europepmc/webservices/rest/search?query={q}&format=json"))
for r in res["resultList"]["result"]:
    print(f'  source={r["source"]}  journal={r.get("journalTitle") or "(none)"}  {r.get("firstPublicationDate")}  {r.get("doi")}')
```

As of September 2026 this prints `bioRxiv published-version records: 0`, the message `no articles found for published version of 10.1101/2025.07.05.663018`, and a single Europe PMC record with `source=PPR` and no journal. In other words the entry's central caveat still holds. If that ever changes, this entry needs updating, and the peer-reviewed numbers should replace the preprint's.

Then have the agent go looking for outside evidence:

```
Search for any independent, non-Chai-Discovery evaluation of Chai-2's antibody design hit rate:
an academic group, a CRO, a blinded benchmark, or a published head-to-head against another
method on the same targets. Also check whether Chai-2 weights, an API, or a web server have
become publicly available since July 2025, and whether any designed sequences from the preprint
were deposited. Report honestly if the answer to all of these is no, and say what that means for
how the 16% figure should be cited.
```

---

## Sources
- [bioRxiv preprint: "Zero-shot antibody design in a 24-well plate"](https://www.biorxiv.org/content/10.1101/2025.07.05.663018v1) (DOI 10.1101/2025.07.05.663018)
- [Full text of the preprint](https://www.biorxiv.org/content/10.1101/2025.07.05.663018v1.full)
- [Europe PMC record, which labels the item as a preprint](https://europepmc.org/search?query=%22Zero-shot%20antibody%20design%20in%20a%2024-well%20plate%22)

---
*Back to **[README.md](./README.md)** · **[CONTEXT.md](./CONTEXT.md)**.*
