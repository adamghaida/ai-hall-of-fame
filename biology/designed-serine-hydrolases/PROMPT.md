# 🤖 Explore this with AI: de novo serine hydrolases

Paste the prompt below into your favorite AI assistant (Claude, ChatGPT, Gemini, or a local model). If your assistant can browse the web, tell it to read the sources first. The point is a clear, honest, grounded explanation of what happened and why it mattered.

> Designing a protein that folds is routine. Designing one that runs a four-step catalytic mechanism is not. This one was built from a sketch of an active site, and the crystal structures came back matching the design to under 1 Å.

---

```text
You are a careful, hype-free biochemistry explainer. Walk me through a specific, real AI-in-biology result so that I actually understand what was and was not achieved.

Topic: "Computational design of serine hydrolases", Anna Lauko, Samuel J. Pellock, Kiera H. Sumida et al. with senior author David Baker. Released by Science on 13 February 2025, in the issue of 18 April 2025. DOI 10.1126/science.adu2454, Science 388, eadu2454.

Please cover, in plain language a curious non-expert can follow:
1. Why enzyme design lagged behind the rest of protein design. By 2024 models could design proteins that fold, bind, glow and self-assemble, but designed catalysts were still orders of magnitude slower than natural ones. Explain why: catalysis depends on stabilizing transition states, not ground states, and a multistep mechanism needs the right geometry at every step.
2. The serine hydrolase mechanism, step by step: the Ser-His-Asp catalytic triad, the oxyanion hole, the tetrahedral intermediate, the acyl-enzyme intermediate, and hydrolysis by water. Make clear how many distinct states the active site has to hold.
3. What "starting from minimal active site descriptions" means. The designers specified the chemistry they wanted, not a protein to modify.
4. The two-part method:
   - RFdiffusion generating backbones around catalytic sites of increasing complexity and varying geometry.
   - PLACER, an ensemble-generation network that predicts conformational ensembles so designs can be scored for active-site PREORGANIZATION at each step of the reaction. Explain preorganization and why scoring across the reaction coordinate is the key idea. Note that this tool was called ChemNet in the 2024 preprint.
5. The full released pipeline: CA-RFdiffusion, refinement, sequence design with LigandMPNN plus FastRelax, structural validation with AlphaFold2, substrate placement, PLACER, analysis. Say which parts are new.
6. The results:
   - kcat/Km up to 2.2 x 10^5 M^-1 s^-1. Explain what catalytic efficiency means and how to read that number.
   - Crystal structures with C-alpha RMSD under 1 angstrom from the design models. Six structures are in the PDB: 9DED, 9DEE, 9DEF, 9DEG, 9DEH, 9MRB.
   - Five different folds, distinct from those of natural serine hydrolases.
   - Over 300 designs tested in the lab; a subset reacted with activity-based probes, confirming an activated catalytic serine.
7. The honest caveats:
   - Still well below highly evolved natural hydrolases.
   - Ester hydrolysis, not the harder amide or peptide bond cleavage.
   - Over 300 designs and iterative rounds of design and screening, so not one-shot design.
   - The August 2024 preprint reported up to 3.8 x 10^3 M^-1 s^-1, roughly sixty times lower than the published figure. Explain that this is six months of further optimization, not a contradiction, and why mixing the two numbers would be an error.
8. What would have to be true for this method to produce an industrially useful enzyme, and what the obvious next targets are.

Ground your answer in these sources (read them if you can, and cite them as you go):
- Science paper: https://www.science.org/doi/10.1126/science.adu2454
- Paper PDF: https://www.bakerlab.org/wp-content/uploads/2025/02/science.adu2454.pdf
- Baker Lab writeup: https://www.bakerlab.org/2025/02/13/ai-enzymes-with-complex-active-sites/
- Code: https://github.com/laukoag/serine-hydrolase-design
- Preprint: https://www.biorxiv.org/content/10.1101/2024.08.29.610411v1

Be concrete, separate the paper's numbers from the preprint's, and if you are unsure about a detail, say so instead of guessing.
```

## Have the agent verify it

The structural claim is the one with a public artifact behind it. Six crystal structures from this work are deposited in the **Protein Data Bank**, and the RCSB search API will find them from the paper's DOI alone, so you can confirm both that they exist and what resolution they were solved at without taking anyone's word for it.

```python
import json, urllib.parse, urllib.request

DOI = "10.1126/science.adu2454"

q = {
    "query": {"type": "terminal", "service": "text", "parameters": {
        "attribute": "rcsb_primary_citation.pdbx_database_id_DOI",
        "operator": "exact_match", "value": DOI}},
    "return_type": "entry",
    "request_options": {"paginate": {"start": 0, "rows": 100}},
}
url = "https://search.rcsb.org/rcsbsearch/v2/query?json=" + urllib.parse.quote(json.dumps(q))
hits = json.load(urllib.request.urlopen(url))
ids = [r["identifier"] for r in hits["result_set"]]
print(f"PDB entries citing {DOI}: {hits['total_count']}  ->  {ids}\n")

for pid in ids:
    d = json.load(urllib.request.urlopen(f"https://data.rcsb.org/rest/v1/core/entry/{pid}"))
    res = (d.get("rcsb_entry_info", {}).get("resolution_combined") or ["n/a"])[0]
    rel = d.get("rcsb_accession_info", {}).get("initial_release_date", "")[:10]
    print(f'{pid}  {res} A  released {rel}  {d["struct"]["title"]}')
```

Expected output, as of this writing: **6 entries**, `9DED 9DEE 9DEF 9DEG 9DEH 9MRB`, all released **2025-02-19**, at **1.21 to 2.21 Å**, with titles like *"The designed serine hydrolase known as super"* and *"The designed serine hydrolase known as dad_t1"*. Note what this does and does not prove: it confirms that designed serine hydrolases were crystallized and deposited at good resolution. It does **not** by itself confirm the sub-ångström agreement with the design models, which requires superposing each structure on its design coordinates.

Then push the agent further:

```
1. Download the coordinates for PDB 9DEE (the highest-resolution entry, 1.21 A) and describe its
   fold. Identify the catalytic triad residues and check whether they are arranged as a serine
   hydrolase triad.
2. Compare the six deposited structures: are they the same fold or different ones? The paper
   claims five folds distinct from natural serine hydrolases.
3. Read https://github.com/laukoag/serine-hydrolase-design and describe exactly which steps of
   the pipeline are new to this work and which are existing tools (RFdiffusion, LigandMPNN,
   AlphaFold2). Say honestly whether the repository is enough to reproduce the paper.
4. Search for any independent group that has expressed and assayed these designed hydrolases, or
   applied PLACER to a different reaction. Report honestly if you find none.
```

---

## Sources
- [Science: "Computational design of serine hydrolases"](https://www.science.org/doi/10.1126/science.adu2454) (DOI 10.1126/science.adu2454)
- [Paper PDF hosted by the Baker Lab](https://www.bakerlab.org/wp-content/uploads/2025/02/science.adu2454.pdf)
- [Baker Lab: "Generating new enzymes with complex active sites"](https://www.bakerlab.org/2025/02/13/ai-enzymes-with-complex-active-sites/)
- [Design pipeline and code on GitHub](https://github.com/laukoag/serine-hydrolase-design)
- [bioRxiv preprint (August 2024)](https://www.biorxiv.org/content/10.1101/2024.08.29.610411v1)
- [PDB entry 9DEE, the highest-resolution deposited design](https://www.rcsb.org/structure/9DEE)

---
*Back to **[README.md](./README.md)** · **[CONTEXT.md](./CONTEXT.md)**.*
