# AI-redesigned starting points make laboratory evolution work better

**Field:** 🧬 Biology  ·  **When:** July 2026 · Nature

> Directed evolution has spent decades starting from whatever enzyme nature happened to provide. Redesigning that starting enzyme with a neural network first, so it has stability to spare, produced a better end product than evolving the natural one ever did.

## What happened
On **July 22, 2026**, *Nature* published **"AI-redesigned starting points and outcomes enhance protein evolution"** by **Nick Krasnow** and colleagues in **David Liu's** lab at the **Broad Institute of MIT and Harvard** (DOI [10.1038/s41586-026-10820-0](https://doi.org/10.1038/s41586-026-10820-0)).

The problem it addresses is structural to how protein engineering works. Laboratory directed evolution improves an enzyme by accumulating mutations, but every mutation also chips away at the protein's stability. Sooner or later the protein stops folding, and evolution stalls before it reaches the function you wanted. Liu's framing: "Laboratory evolution requires the commitment of time and resources. So what you start with is incredibly important as a major determinant of what you end up with."

The team's move was to spend the neural network on **stability rather than function**. They ran **ProteinMPNN**, the inverse-folding model from David Baker's lab, over the catalytic domains of three bacterial proteases (the light chains of botulinum neurotoxins E, F and X, which the same lab had previously established as reprogrammable, highly specific protein-cutting tools). ProteinMPNN proposes new amino acid sequences predicted to fold into the same 3D shape. The redesigns diverged about **16%** from the natural sequence, which is a large rewrite by the standards of this field.

The redesigned proteins were better before any evolution happened at all: **78% of 74 BoNT/E designs retained catalytic activity**, the best three ran at **1.7 to 2.8 times** the catalytic efficiency of the wild type (one variant at 310 mM⁻¹s⁻¹ against 110 for the natural enzyme), melting temperatures reached **59.5 °C**, and expression in cells rose **24-fold** for two of them.

Then came the actual test. The team put both the redesigned and the natural enzymes through **PACE** (phage-assisted continuous evolution, the Liu lab's automated system that runs many generations per day), selecting for the ability to cut **human ataxin-2**, a protein implicated in neurodegeneration including ALS. The enzymes evolved from AI-redesigned starting points adapted faster and ended up **79-fold better on the ataxin-2 target** than the best enzyme evolved from the natural protein. Krasnow's explanation of why: "if you start with a more stable protein, it has more stability to spare, so it can afford larger changes in pursuit of new functions."

## Why it matters
Most AI-and-proteins results are about designing a finished molecule. This one is about **where a search starts**, and it is a claim other labs can act on immediately without adopting anyone's model as an oracle: stabilize your scaffold computationally before you evolve it, and the evolution goes further. Because the neural network is asked only to preserve a fold, a task inverse-folding models are already good at, rather than to invent a function, it is used where it is reliable and the laboratory does the part it is better at.

The honest limits are real. This is a **proof of concept on one enzyme family**, and the authors themselves note that whether the advantage carries to unrelated families is the open question. A protease that cuts its target well in a laboratory assay is a long way from a therapy: delivery, immune recognition, and off-target cutting across an entire proteome are all unsolved here. And the division of labour is worth stating plainly, because the headline invites the wrong reading. **The AI did not evolve anything.** It made a sturdier starting material; PACE still did the functional search.

## Sources — the record of the discovery
- [Nature paper: "AI-redesigned starting points and outcomes enhance protein evolution" (DOI 10.1038/s41586-026-10820-0)](https://www.nature.com/articles/s41586-026-10820-0)
- [Broad Institute: Combining AI with laboratory evolution yields improved proteins](https://www.broadinstitute.org/news/combining-ai-laboratory-evolution-yields-improved-proteins)
- [Phys.org coverage, including quotes from Liu and Krasnow](https://phys.org/news/2026-07-combining-ai-protein-laboratory-evolution.html)
- [News-Medical summary with the quantitative results](https://www.news-medical.net/news/20260724/AI-redesign-helps-enzymes-evolve-beyond-natural-limits.aspx)
- [The reprogrammed-protease platform this builds on: Blum et al., *Science* (2021), DOI 10.1126/science.abf5972](https://doi.org/10.1126/science.abf5972)
- [Plain-language coverage of that 2021 work](https://www.genengnews.com/news/evolved-proteases-selectively-cleave-target-sequences-unlock-potential-of-proteome-editing/)

---
*In this folder: **[PROMPT.md](./PROMPT.md)** (a prompt to explore it with AI) · **[CONTEXT.md](./CONTEXT.md)** (background & caveats). Part of the [AI Hall of Fame](../../README.md) → [🧬 Biology](../).*
