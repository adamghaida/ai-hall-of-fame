# 🤖 Explore this with AI: Evo-generated bacteriophage genomes

Paste the prompt below into your favorite AI assistant (Claude, ChatGPT, Gemini, or a local model). If your assistant can browse the web, tell it to read the sources first. The point is a clear, honest, grounded explanation of what happened and why it mattered.

> A DNA language model was asked to write entire viral genomes from scratch. Of 285 synthesized designs, 16 booted up into infectious bacteriophages.

---

```text
You are a careful, hype-free molecular biology explainer. Walk me through a specific, real AI-in-biology result so that I actually understand what was and was not achieved.

Topic: "Generative design of bacteriophages with genome language models", Samuel H. King, Claudia L. Driscoll, David B. Li, Daniel Guo, Aditi T. Merchant, Garyk Brixi, Max E. Wilkinson and Brian L. Hie (Arc Institute and Stanford). Published in Science on 6 August 2026 (DOI 10.1126/science.aec2657), first posted as a bioRxiv preprint on 17 September 2025 (DOI 10.1101/2025.09.12.675911).

Please cover, in plain language a curious non-expert can follow:
1. What a genome language model is, and how Evo 1 and Evo 2 differ from a protein language model or a structure predictor like AlphaFold. They operate on nucleotides, at genome scale, with very long context.
2. Why designing a whole genome is categorically harder than designing one protein. Use PhiX174 as the example: a small lytic phage of E. coli with overlapping reading frames, where one stretch of DNA encodes two proteins in two different frames. Explain what has to be simultaneously correct for a genome to produce infectious particles.
3. The experimental funnel and the real numbers:
   - Models fine-tuned on roughly 15,000 Microviridae genomes.
   - 302 genomes generated, 285 successfully synthesized and assembled (the rest failed on high-complexity DNA synthesis).
   - 16 of those 285 inhibited growth of E. coli C, i.e. were viable phages. That is about a 5.6% success rate.
   - Generated genomes carried 67 to 392 novel mutations relative to Microviridae training sequences, at 93.0% to 98.8% nucleotide identity.
4. The three results that make this more than a stunt:
   - Multiple generated phages beat PhiX174 in growth competitions and lysis kinetics.
   - Cryo-EM showed one generated phage using "an evolutionarily distant DNA packaging protein within its capsid" - a substitution the model made that the experimenters discovered afterwards.
   - A cocktail of generated phages overcame PhiX174 resistance in three E. coli strains (CR1 after one passage, CR2 after two, CR3 after five), where PhiX174 alone overcame none.
5. The honest caveats, stated plainly:
   - Roughly 5% of designs worked. This is a screen with a good generator in front of it.
   - 93-98.8% identity to training data means novelty within a known viral family, not a new kind of virus.
   - PhiX174 is among the smallest genomes in biology; scaling is unproven.
   - Flasks of E. coli, not a therapy. No animal data, no safety work.
6. The biosecurity question, fairly. The authors deliberately withheld all viruses with eukaryotic hosts, including human pathogens, from the training data, and recommend consulting safety and security professionals throughout such projects. Science ran an accompanying commentary by Inglesby and Hanke. Present both the "this is a real dual-use capability" argument (Simon Clarke) and the "low efficiency is itself a barrier" argument (Jordi Garcia Ojalvo).
7. What would have to be true for this to become an actual phage therapy, and what the obvious next experiments are.

Ground your answer in these sources (read them if you can, and cite them as you go):
- Science paper: https://www.science.org/doi/10.1126/science.aec2657
- bioRxiv preprint (full text, open): https://www.biorxiv.org/content/10.1101/2025.09.12.675911v1.full
- AAAS press release: https://www.eurekalert.org/news-releases/1138470
- Science Media Centre expert reaction: https://www.sciencemediacentre.org/expert-reaction-to-generative-design-of-bacteriophages-with-genome-language-models/
- Phys.org: https://phys.org/news/2026-08-sixteen-ai-viruses-route-drug.html
- Arc Institute on Evo 2: https://arcinstitute.org/news/evo2

Be concrete, clearly separate what the paper claims from what press coverage adds, and if you are unsure about a detail, say so instead of guessing.
```

## Bonus: have the agent verify the checkable artifacts

Three things here are publicly checkable: the code, the fine-tuning dataset, and the sequence-novelty claim. Ask an agent with tool access to do this:

```
Verify three claims about "Generative design of bacteriophages with genome language models" (Science 2026, DOI 10.1126/science.aec2657) using only public artifacts. Report what you actually found, including failures.

1. CODE. The paper's code availability statement names https://github.com/evo-design/evo/ for Evo 1 and https://github.com/arcinstitute/evo2 for Evo 2. Confirm both repositories exist, are public, and contain generation and fine-tuning code. Report their licenses and whether model weights are downloadable.

2. DATA. The Microviridae fine-tuning dataset is cited as https://doi.org/10.5281/zenodo.17101843. Confirm the Zenodo record resolves, and report how many genome sequences it contains and under what license. Check whether the count is consistent with the reported "around 15,000 viral genomes".

3. NOVELTY. Download the reference PhiX174 genome from NCBI (RefSeq NC_001422.1) and, if the paper's generated genome sequences are available in its supplementary material or the Zenodo record, compute pairwise nucleotide identity between each generated genome and PhiX174. The paper reports 93.0% to 98.8% identity to the closest Microviridae training sequences and 67 to 392 novel mutations. Say clearly whether your computed numbers match, and note that identity-to-PhiX174 and identity-to-nearest-training-sequence are different quantities.
```

A short check you can run yourself, once you have the generated sequences:

```python
# Pairwise nucleotide identity between a generated genome and PhiX174 (NC_001422.1).
# Requires: pip install biopython
from Bio import Entrez, SeqIO, Align

Entrez.email = "you@example.com"  # NCBI requires this
with Entrez.efetch(db="nucleotide", id="NC_001422.1", rettype="fasta", retmode="text") as h:
    phix = SeqIO.read(h, "fasta")

aligner = Align.PairwiseAligner(mode="global", match_score=1, mismatch_score=-1,
                                open_gap_score=-5, extend_gap_score=-0.5)

def identity(a, b):
    aln = aligner.align(a, b)[0]
    top, bot = str(aln[0]), str(aln[1])
    matches = sum(x == y for x, y in zip(top, bot) if x != "-" and y != "-")
    return 100.0 * matches / len(phix.seq)

for rec in SeqIO.parse("generated_phages.fasta", "fasta"):   # from the paper's supplement
    print(f"{rec.id}\t{len(rec.seq)} bp\t{identity(phix.seq, rec.seq):.2f}% identity to PhiX174")
```

---

## Sources
- [Science paper: "Generative design of bacteriophages with genome language models"](https://www.science.org/doi/10.1126/science.aec2657)
- [bioRxiv preprint](https://www.biorxiv.org/content/10.1101/2025.09.12.675911v1) · [full text](https://www.biorxiv.org/content/10.1101/2025.09.12.675911v1.full)
- [EurekAlert / AAAS press release](https://www.eurekalert.org/news-releases/1138470)
- [Science Media Centre expert reaction](https://www.sciencemediacentre.org/expert-reaction-to-generative-design-of-bacteriophages-with-genome-language-models/)
- [Phys.org coverage](https://phys.org/news/2026-08-sixteen-ai-viruses-route-drug.html)
- [Arc Institute: Evo 2](https://arcinstitute.org/news/evo2)
- Code: [evo-design/evo](https://github.com/evo-design/evo/) · [arcinstitute/evo2](https://github.com/arcinstitute/evo2) · Data: [Zenodo 10.5281/zenodo.17101843](https://doi.org/10.5281/zenodo.17101843)

---
*Back to **[README.md](./README.md)** · **[CONTEXT.md](./CONTEXT.md)**.*
