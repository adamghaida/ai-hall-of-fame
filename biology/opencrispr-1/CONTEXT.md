# 📚 Context: OpenCRISPR-1 — a gene editor written by a language model

**The problem with borrowed enzymes.** Every CRISPR editor in use is a bacterial immune protein pressed into service in a human cell. SpCas9, from *Streptococcus pyogenes*, evolved to shred phage DNA in a bacterium. In a human nucleus it works, but it carries baggage: off-target cutting, a size that strains delivery vectors, and, because most people have been exposed to *S. pyogenes*, pre-existing immunity. Much of the last decade of editing research has been spent engineering around traits that only exist because the protein came from somewhere else. The Nature paper's framing is exactly this: editors ported into non-native environments "show notable functional tradeoffs".

**The method.** Profluent's approach was to model the CRISPR universe as a language and sample from it. They assembled the **CRISPR-Cas Atlas** by mining **26.2 terabases** of assembled genomes and metagenomes into **1,246,088 CRISPR–Cas operons**, then trained protein language models on that corpus. Crucially they did not stop at the effector protein: Cas9 is useless without a compatible single-guide RNA, so the models were also used to tailor sgRNA sequences to the generated effectors. The generated set covered **4.8×** the number of protein clusters that CRISPR–Cas families occupy in nature. The model interpolates into regions of sequence space evolution has not visited.

**The funnel.** **209** generated Cas9-like proteins were tested in human cells; **48** were taken forward for detailed characterization; **OpenCRISPR-1** emerged as the lead. Its distance from everything known is the striking part: **403 mutations from SpCas9**, **182 from its nearest natural relative**. For a protein of Cas9's size that is a substantial rewrite, and the default expectation for a rewrite that deep is a dead enzyme.

**The people.** **Jeffrey A. Ruffolo** and **Stephen Nayfach** are co-first authors; the list runs through **Joseph Gallagher, Aadyot Bhatnagar, Joel Beazer, Riffat Hussain, Jordan Russ, Jennifer Yip, Emily Hill, Martin Pacesa, Alexander J. Meeske, Peter Cameron** to senior author **Ali Madani**, Profluent's founder and CEO, previously an author on the ProGen protein language model work at Salesforce Research.

## Why it's in the Hall of Fame
This is the cleanest existing example of AI generating a functional molecular machine rather than editing one. The comparison was run against SpCas9, the field's reference editor, on SpCas9's home turf, editing human DNA, and the designed protein won on on-target efficiency, off-target specificity, and immune-epitope profile simultaneously. Then the sequence was published. Very little frontier AI-designed biology is both benchmarked against the incumbent and handed to everyone afterwards.

## How it differs from the other AI-editor entry
[SynTnpBs](../ai-designed-genome-editors/) (Doudna lab, Science, July 2026) is also an "AI-designed genome editor", and the two are frequently conflated. They are different claims:

| | OpenCRISPR-1 | SynTnpBs |
|---|---|---|
| Model | Protein **language model** over CRISPR sequence space | **Inverse folding** (ESM-IF1) over a fixed backbone |
| Starting point | The distribution of natural CRISPR proteins | One natural TnpB structure |
| What was free to change | The whole sequence | Scaffold only; RNA/DNA-contacting and catalytic residues held fixed |
| Scaffold | Cas9-like, ~1,300 residues | TnpB, hypercompact |
| Divergence | 403 mutations from SpCas9; 182 from nearest natural protein | Lobes at ~83% and ~72% identity to natural counterparts |
| Released | Sequence + guide RNA, licensed | Not released as a public sequence |

## Honest caveats
- **Cultured cells, not organisms or patients.** Editing was demonstrated in human cell culture. No in vivo efficacy, no delivery study in an animal, no clinical trial of OpenCRISPR-1 has been reported.
- **Two sets of numbers exist.** Profluent's April 2024 announcement cited **55.7% vs 48.3%** on-target and **0.32% vs 6.1%** off-target, from the preprint. The Nature paper reports **median indel rates of 56.4% vs 47.1%** and a **95% reduction at known SpCas9 off-target sites**. Both are in this entry's README; they are close but not identical, and a citation should name its source.
- **"95% fewer off-target edits" is site-directed, not genome-wide.** The measurement is at *known SpCas9 off-target sites*. That is a reasonable and informative benchmark, but an AI-generated editor 403 mutations from Cas9 could in principle have its own off-target landscape that a SpCas9-derived site panel would not detect. Unbiased genome-wide profiling is a separate study.
- **Company-run, company-reported.** The work was done by Profluent on Profluent's platform. Independent labs have used the released sequence, but the headline comparisons in the paper are the company's own.
- **The model is not open; the product is.** OpenCRISPR-1's protein sequence and a compatible sgRNA are public. The language models, the training procedure, and the CRISPR-Cas Atlas pipeline are not released in a form that would let an outside group regenerate a comparable editor.
- **"Open" means licensed.** The GitHub release states OpenCRISPR-1 is free for research and commercial use "to any users who take a license", with obligations including ethical use. That is unusually generous for a biotech asset and is not the same as an unrestricted public-domain release.
- **First-of-its-kind claims deserve care.** The defensible version is the paper's own: precision editing of the human genome with a programmable gene editor designed with AI. Earlier work had used machine learning to *select*, *engineer*, or *discover* editors; the novelty here is a full-length effector sampled from a generative model.
- **Most designs failed.** 209 tested in human cells, 48 characterized in detail, one lead. This is a generative-plus-screening pipeline, not a system that emits a working nuclease on demand.

## Sources
- [Nature: "Design of highly functional genome editors by modelling CRISPR–Cas sequences"](https://www.nature.com/articles/s41586-025-09298-z) (July 30, 2025)
- [Open-access full text, PubMed Central](https://pmc.ncbi.nlm.nih.gov/articles/PMC12422970/)
- [Profluent: "Editing the human genome with AI"](https://www.profluent.bio/media/editing-the-human-genome-with-ai) (April 22, 2024)
- [OpenCRISPR on GitHub — sequence, guide RNA, and license terms](https://github.com/Profluent-AI/OpenCRISPR)
- [bioRxiv preprint (April 2024), superseded by the Nature paper](https://www.biorxiv.org/content/10.1101/2024.04.22.590591)

---
*Back to **[README.md](./README.md)** · **[PROMPT.md](./PROMPT.md)**.*
