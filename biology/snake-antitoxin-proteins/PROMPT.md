# 🤖 Explore this with AI: designed antitoxins for snake venom

Paste the prompt below into your favorite AI assistant (Claude, ChatGPT, Gemini, or a local model). If your assistant can browse the web, tell it to read the sources first. The point is a clear, honest, grounded explanation of what happened and why it mattered.

> Snakebite is still treated with antibodies harvested from immunized horses. Computationally designed miniproteins bound the deadliest cobra toxins at nanomolar affinity, survived boiling temperatures, and kept mice alive through lethal doses given minutes earlier.

---

```text
You are a careful, hype-free explainer of biomedical research. Walk me through a specific, real AI-in-biology result so that I understand exactly what was achieved and what was not.

Topic: "De novo designed proteins neutralize lethal snake venom toxins", Susana Vazquez Torres and Melisa Benard Valle et al., senior authors Timothy P. Jenkins (DTU) and David Baker (University of Washington). Published in Nature on 15 January 2025, DOI 10.1038/s41586-024-08393-x, Nature 639, 225-231.

Please cover, in plain language a curious non-expert can follow:
1. The disease. Snakebite envenoming kills over 100,000 people a year and permanently disables many more, mostly in rural South Asia and sub-Saharan Africa, and the WHO classifies it as a neglected tropical disease. Explain how current antivenom is made (immunize a horse or sheep, harvest and purify plasma antibodies) and its four practical problems: cost, cold chain, adverse reactions including serum sickness, and species specificity.
2. Three-finger toxins. Explain what 3FTx are, why they are called that, and why they are the worst case for conventional antivenom: small, poorly immunogenic, and responsible for the most acute harm. Distinguish alpha-neurotoxins (block nicotinic acetylcholine receptors, cause respiratory paralysis) from cytotoxins (destroy tissue).
3. The design method: RFdiffusion for backbone generation, ProteinMPNN for sequence design, AlphaFold2 as an in-silico filter, with partial diffusion used to refine. Explain what each step does. Emphasize the abstract's phrase "with limited experimental screening" and why the number of molecules that had to be made matters as much as the affinity achieved.
4. The three binders and their measurements (these values come from the openly readable preprint version; the Nature abstract states them qualitatively):
   - SHRT, against a short-chain alpha-neurotoxin: KD 0.9 nM, Tm 78 C
   - LNG, against the long-chain alpha-neurotoxin alpha-cobratoxin: KD 1.9 nM, Tm above 95 C
   - CYTX, against a cytotoxin from Naja pallida: KD 271 nM, Tm 61 C
   Explain what a KD and a melting temperature are, and why thermostability is a bigger deal for a rural-clinic drug than for a hospital one.
5. The structures. PDB entries 9BK5 (LNG complex, 2.68 A), 9BK6 (CYTX_B10 complex, 2.0 A), 9BK7 (SHRT, 2.58 A), with design-to-structure agreement reported as near-atomic. Explain why solving a crystal structure is the honest check on a computational design.
6. The mouse experiments, precisely. Against 3x LD50 toxin challenges: pre-incubated 1:10 toxin:binder gave 100% survival for SHRT against ScNtx and LNG against alpha-cobratoxin. Given as a rescue 15 minutes after the toxin, SHRT gave 100% at 1:10 and 1:5, LNG gave 100% and 80%. At 30 minutes, SHRT 100%, LNG 60%. Explain why the rescue experiment is much more meaningful than the pre-incubation one, and why the drop with delay matters.
7. The caveats, stated plainly and without softening:
   - These proteins neutralize three-finger TOXINS, not snake VENOM. Real venom is a variable mixture containing toxin families these binders do not bind.
   - The researchers say conventional antivenom will remain the cornerstone of treatment for the foreseeable future, and that designed antitoxins would most likely arrive first as supplements.
   - Mice, purified toxin, laboratory timing. A human is bitten in a field with an unknown dose, hours from a clinic.
   - No human trials, no toxicology, no human immunogenicity data.
   - The cytotoxin binder is ~300-fold weaker than the neurotoxin binders and its protection was shown in cell assays, not animals.
   - "80-100% survival" is a range across toxins, doses, ratios and designs, not a single efficacy figure.
8. What a realistic development path would look like from here, and what would have to be shown before this could treat a person.

Ground your answer in these sources (read them if you can, and cite them as you go):
- Nature paper: https://www.nature.com/articles/s41586-024-08393-x
- Open preprint version with the detailed tables: https://pmc.ncbi.nlm.nih.gov/articles/PMC11118692/
- Baker Lab: https://www.bakerlab.org/2025/01/15/neutralizing-deadly-snake-toxins/
- DTU: https://www.dtu.dk/english/newsarchive/2025/01/ai-designed-proteins-neutralise-snake-toxins
- Phys.org: https://phys.org/news/2025-01-ai-proteins-neutralize-toxins-snake.html

Be concrete, always distinguish "neutralizes a toxin in a mouse" from "treats snakebite in a person", and if you are unsure about a detail, say so instead of guessing.
```

## Have the agent verify it

The designs were crystallized and deposited, so the structural half of the claim is publicly checkable. The script below finds every PDB entry whose primary citation is this paper, then reports each one's resolution and title.

```python
import json, urllib.parse, urllib.request

DOI = "10.1038/s41586-024-08393-x"

q = {
    "query": {"type": "terminal", "service": "text", "parameters": {
        "attribute": "rcsb_primary_citation.pdbx_database_id_DOI",
        "operator": "exact_match", "value": DOI}},
    "return_type": "entry",
    "request_options": {"paginate": {"start": 0, "rows": 100}},
}
hits = json.load(urllib.request.urlopen(
    "https://search.rcsb.org/rcsbsearch/v2/query?json=" + urllib.parse.quote(json.dumps(q))))
ids = [r["identifier"] for r in hits["result_set"]]
print(f"PDB entries citing {DOI}: {hits['total_count']} -> {ids}\n")

for pid in ids:
    d = json.load(urllib.request.urlopen(f"https://data.rcsb.org/rest/v1/core/entry/{pid}"))
    res = (d.get("rcsb_entry_info", {}).get("resolution_combined") or ["n/a"])[0]
    rel = d.get("rcsb_accession_info", {}).get("initial_release_date", "")[:10]
    print(f'{pid}  {res} A  released {rel}  {d["struct"]["title"]}')
```

Expected output: **3 entries**, `9BK5 9BK6 9BK7`, released **2024-10-09**, at **2.68 Å, 2.0 Å and 2.58 Å**, titled *"Structure of LNG binder complex"*, *"Structure of B10_CYTX binder-complex"* and *"Structure of SHRT_binder"*. Two of the three are binder-toxin **complexes**, which is the interesting part: the structures show the designed protein actually gripping its toxin, not merely folding as predicted.

Then send the agent after the parts that cannot be checked from a database:

```
1. Fetch PDB 9BK5 and describe the interface between the designed LNG binder and alpha-cobratoxin.
   Which of the toxin's three loops does the binder engage, and does it overlap the surface that
   binds the nicotinic acetylcholine receptor? That overlap is the mechanism of neutralization.
2. Read https://pmc.ncbi.nlm.nih.gov/articles/PMC11118692/ and extract every mouse experiment:
   group sizes, toxin doses, administration routes and timings, and survival. State clearly which
   experiments were pre-incubation and which were genuine rescue.
3. Search for any follow-up published since January 2025: work against WHOLE venom rather than
   purified toxins, any non-rodent study, any toxicology or immunogenicity data, or any move
   toward a clinical candidate. Report honestly if you find none, and say what that implies about
   where this result actually sits on the path to a treatment.
```

---

## Sources
- [Nature: "De novo designed proteins neutralize lethal snake venom toxins"](https://www.nature.com/articles/s41586-024-08393-x)
- [Open preprint version](https://pmc.ncbi.nlm.nih.gov/articles/PMC11118692/)
- [Baker Lab: "Neutralizing deadly snake toxins"](https://www.bakerlab.org/2025/01/15/neutralizing-deadly-snake-toxins/)
- [DTU: "AI-designed proteins neutralise snake toxins"](https://www.dtu.dk/english/newsarchive/2025/01/ai-designed-proteins-neutralise-snake-toxins)
- [Phys.org coverage](https://phys.org/news/2025-01-ai-proteins-neutralize-toxins-snake.html)
- [PDB 9BK5, the LNG binder in complex with α-cobratoxin](https://www.rcsb.org/structure/9BK5)

---
*Back to **[README.md](./README.md)** · **[CONTEXT.md](./CONTEXT.md)**.*
