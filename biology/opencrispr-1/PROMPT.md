# 🤖 Explore this with AI: OpenCRISPR-1, a gene editor written by a language model

Paste the prompt below into your favorite AI assistant (Claude, ChatGPT, Gemini, or a local model). If your assistant can browse the web, tell it to read the sources first. The point is a clear, honest, grounded explanation of what happened and why it mattered.

> A protein language model generated a Cas9-like nuclease 403 mutations from anything it was trained to imitate. It edited human DNA better than Cas9, with about 95% fewer off-target edits, and the sequence was published.

---

```text
You are a careful, hype-free molecular biology explainer. Walk me through a specific, real AI-in-biology result so that I actually understand what was and was not achieved.

Topic: OpenCRISPR-1, from Profluent Bio. Announced 22 April 2024; published as "Design of highly functional genome editors by modelling CRISPR-Cas sequences" (Ruffolo, Nayfach, Gallagher et al., senior author Ali Madani) in Nature on 30 July 2025, DOI 10.1038/s41586-025-09298-z, Nature 645, 518-525.

Please cover, in plain language a curious non-expert can follow:
1. Why every CRISPR editor in clinical use is a borrowed bacterial protein, and what that costs: off-target cutting, delivery size, and pre-existing human immunity to SpCas9 because most people have been exposed to Streptococcus pyogenes. Explain why the paper frames this as "functional tradeoffs" from porting an enzyme into a non-native environment.
2. What a protein language model is, and how generating a nuclease differs from predicting one's structure. Be concrete about what the model was trained on: the CRISPR-Cas Atlas, 1,246,088 CRISPR-Cas operons mined from 26.2 terabases of assembled genomes and metagenomes.
3. Why the guide RNA had to be designed too. A Cas9 effector is useless without a compatible single-guide RNA, and the team tailored sgRNAs to the generated proteins.
4. The screening funnel and the numbers: models generated 4.8x the number of protein clusters found across natural CRISPR-Cas families; 209 generated Cas9-like proteins were tested in human cells; 48 were characterized in detail; OpenCRISPR-1 was the lead.
5. How far OpenCRISPR-1 is from anything natural: 403 mutations from SpCas9 and 182 from its nearest natural relative. Explain why a rewrite that deep would normally be expected to produce a dead protein.
6. The performance numbers, and be precise about which source says what:
   - Nature paper: median indel rates of 56.4% (OpenCRISPR-1) versus 47.1% (SpCas9), and a 95% reduction in editing at known SpCas9 off-target sites.
   - Profluent's April 2024 announcement, describing the earlier preprint: 55.7% versus 48.3% on target, 0.32% versus 6.1% off target.
   Explain what an indel rate is and why "at known SpCas9 off-target sites" is a meaningful but limited way to measure specificity.
7. The two extras: compatibility with base editing (35-60% adenine-to-guanine editing when fused to an adenosine deaminase), and the immunology result (it lacks previously identified immunodominant and subdominant SpCas9 T-cell epitopes; antibody assays used serum from 40 healthy donors).
8. The release. Profluent published OpenCRISPR-1's protein sequence and a compatible sgRNA on GitHub, free for research and commercial use under a license agreement requiring ethical use. Explain how unusual that is, and what "open" does and does not mean here (the models and training pipeline were not released).
9. The honest caveats, stated plainly:
   - Editing was demonstrated in cultured human cells. No in vivo efficacy study, no clinical trial.
   - The off-target claim is measured at sites known to be problematic for SpCas9, not by unbiased genome-wide profiling.
   - The work was done and reported by the company that owns the platform.
   - 209 tested, 48 characterized, 1 lead: this is generative design plus screening, not a system that emits a working nuclease on demand.
10. How this differs from the Doudna lab's SynTnpBs (Science, July 2026), which are often conflated with it. SynTnpBs are constrained inverse-folding redesigns of a natural TnpB scaffold with the nucleic-acid-contacting residues held fixed; OpenCRISPR-1 is a full sequence sampled from a generative model. Say which is the stronger "AI-designed" claim and why.

Ground your answer in these sources (read them if you can, and cite them as you go):
- Nature paper: https://www.nature.com/articles/s41586-025-09298-z
- Open-access full text: https://pmc.ncbi.nlm.nih.gov/articles/PMC12422970/
- Profluent announcement: https://www.profluent.bio/media/editing-the-human-genome-with-ai
- Released sequence and license: https://github.com/Profluent-AI/OpenCRISPR

Be concrete, clearly separate the peer-reviewed numbers from the 2024 announcement's numbers, and if you are unsure about a detail, say so instead of guessing.
```

## Have the agent verify it

Unusually for an AI-designed molecule, the artifact is public. OpenCRISPR-1's amino acid sequence is in the released FASTA, so the "403 mutations from SpCas9" claim is directly checkable. The script below downloads the released sequence and the canonical SpCas9 sequence from UniProt (Q99ZW2) and aligns them. Pure standard library, no dependencies.

```python
import urllib.request

def fasta(url):
    recs, name = {}, None
    for line in urllib.request.urlopen(url).read().decode().splitlines():
        line = line.strip()
        if line.startswith(">"):
            name = line[1:]; recs[name] = ""
        elif name:
            recs[name] += line
    return recs

oc = fasta("https://raw.githubusercontent.com/Profluent-AI/OpenCRISPR/main/OpenCRISPR-1/OpenCRISPR-1.fasta")
sp = fasta("https://rest.uniprot.org/uniprotkb/Q99ZW2.fasta")  # SpCas9, S. pyogenes

print("records in the release:")
for k, v in oc.items():
    print(f"  {k}  ({len(v)})")

A = [v for k, v in oc.items() if k.startswith("OpenCRISPR-1 protein") and "codon" not in k][0]
B = next(iter(sp.values()))

# Needleman-Wunsch, match +1 / mismatch -1 / gap -8.
n, m, GAP = len(A), len(B), -8
S = [[0] * (m + 1) for _ in range(n + 1)]
P = [bytearray(m + 1) for _ in range(n + 1)]
for j in range(1, m + 1): S[0][j], P[0][j] = j * GAP, 2
for i in range(1, n + 1): S[i][0], P[i][0] = i * GAP, 1
for i in range(1, n + 1):
    ai, prev, row, pr = A[i - 1], S[i - 1], S[i], P[i]
    for j in range(1, m + 1):
        d, u, l = prev[j - 1] + (1 if ai == B[j - 1] else -1), prev[j] + GAP, row[j - 1] + GAP
        if d >= u and d >= l:   row[j], pr[j] = d, 0
        elif u >= l:            row[j], pr[j] = u, 1
        else:                   row[j], pr[j] = l, 2

i, j, ident, subs, gaps = n, m, 0, 0, 0
while i > 0 or j > 0:
    p = P[i][j]
    if i > 0 and j > 0 and p == 0:
        ident, subs = (ident + 1, subs) if A[i-1] == B[j-1] else (ident, subs + 1)
        i, j = i - 1, j - 1
    elif i > 0 and p == 1: gaps, i = gaps + 1, i - 1
    else:                  gaps, j = gaps + 1, j - 1

print(f"\nOpenCRISPR-1 {n} aa vs SpCas9 {m} aa")
print(f"identical {ident} | substitutions {subs} | gap positions {gaps}")
print(f"total differences {subs + gaps} | identity {100*ident/max(n,m):.1f}%")
```

Expected output: the release contains four records (the protein, a human codon-optimized DNA version, and two sgRNA designs with 16 nt and 12 nt stems); OpenCRISPR-1 is **1,380 aa** against SpCas9's **1,368 aa**; and the alignment gives roughly **391 substitutions plus 20 gap positions, about 411 differences at around 70% identity**. That is in the same place as the paper's **403 mutations**, and the small gap reflects alignment parameters rather than a disagreement. If you get an answer near 400, the claim holds; if you get 40 or 4,000, something is wrong with the run.

Then push further:

```
Using https://pmc.ncbi.nlm.nih.gov/articles/PMC12422970/ (open access), find the figure or table
reporting on-target indel rates for OpenCRISPR-1 versus SpCas9 and the off-target comparison.
Quote the exact numbers and say how many sites and cell types they cover. Then answer: was the
off-target analysis unbiased genome-wide, or restricted to sites already known to be off-targets
for SpCas9? Finally, search for any independent laboratory (not Profluent) that has published
results using OpenCRISPR-1, and report honestly what you find.
```

---

## Sources
- [Nature: "Design of highly functional genome editors by modelling CRISPR–Cas sequences"](https://www.nature.com/articles/s41586-025-09298-z)
- [Open-access full text on PubMed Central](https://pmc.ncbi.nlm.nih.gov/articles/PMC12422970/)
- [Profluent: "Editing the human genome with AI"](https://www.profluent.bio/media/editing-the-human-genome-with-ai)
- [OpenCRISPR on GitHub, including the released FASTA](https://github.com/Profluent-AI/OpenCRISPR)
- [UniProt Q99ZW2, the canonical SpCas9 sequence used as the comparison](https://www.uniprot.org/uniprotkb/Q99ZW2/entry)

---
*Back to **[README.md](./README.md)** · **[CONTEXT.md](./CONTEXT.md)**.*
