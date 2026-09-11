# 🤖 Explore this with AI: NG1 and DN1 — antibiotics designed from scratch by generative AI

Paste the prompt below into your favorite AI assistant (Claude, ChatGPT, Gemini, or a local model). If your assistant can browse the web, tell it to read the sources first. The point is a clear, honest, grounded explanation of what happened and why it mattered.

> Generative models invented more than 36 million molecules that had never existed, and two of the 24 actually made in the lab cleared drug-resistant gonorrhoea and MRSA infections in mice.

---

```text
You are a sharp, honest science explainer with a working knowledge of medicinal chemistry and machine learning. Walk me through a specific real result so I understand the mechanism, not just the headline.

Topic: "A generative deep learning approach to de novo antibiotic design", Aarti Krishnan, Melis N. Anahtar, Jacqueline A. Valeri et al., Cell 188(21):5962-5979.e22, published online 14 August 2025 (DOI 10.1016/j.cell.2025.07.033). James J. Collins's lab at MIT, part of the Antibiotics-AI Project.

Please cover, in plain language a curious non-expert can follow:
1. The key distinction from earlier AI antibiotic work. Halicin (Cell 2020) and abaucin (Nature Chemical Biology 2023) came from SCREENING existing chemical libraries with a trained classifier. This paper GENERATES molecules that did not previously exist. Explain why that is a harder problem and what new failure modes it introduces.
2. How the generation actually worked: genetic algorithms (CReM, "chemically reasonable mutations") and fragment-based variational autoencoders, run in two modes - a fragment-based mode screening >10^7 fragments against Neisseria gonorrhoeae or Staphylococcus aureus and then expanding hits, and an unconstrained mode with no seed fragment. Explain what a VAE over molecules is doing in intuitive terms.
3. The filtering funnel, with the real numbers: more than 36 million compounds designed, filtered for predicted activity, predicted human-cell toxicity, dissimilarity from known antibiotics, and synthesizability (including retrosynthetic modelling and human medicinal-chemistry review); 24 compounds synthesized; 7 with selective antibacterial activity; 2 leads. Be explicit about how much work the human and retrosynthesis filters did.
4. The two leads:
   - NG1: narrow-spectrum against N. gonorrhoeae, active against multidrug-resistant isolates including strains resistant to first-line therapy, sparing commensal species, targeting LptA (lipopolysaccharide transport) - a target no approved antibiotic uses. Reduced bacterial burden in a mouse vaginal infection model.
   - DN1: disrupts bacterial membranes, cleared a methicillin-resistant S. aureus skin infection in mice.
   Explain what LptA does and why hitting it is interesting for resistance.
5. The honest limits. These are PRECLINICAL compounds tested in mice, not drugs. No human has taken either. Phare Bio is modifying them to improve drug-like properties, which means the current molecules are leads and not candidates. Jonathan Stokes has noted that many AI-generated structures cannot practically be synthesized and that determining a mechanism of action is slow and expensive. Attrition from lead to approved antibiotic is brutal.
6. What would actually constitute the next milestone: a generative-AI-designed antibiotic entering a Phase 1 trial, and what has to happen first.

Ground your answer in these sources (read them if you can, and cite them as you go):
- Cell paper: https://www.cell.com/cell/abstract/S0092-8674(25)00855-4
- DOI: https://doi.org/10.1016/j.cell.2025.07.033
- MIT News: https://news.mit.edu/2025/using-generative-ai-researchers-design-compounds-kill-drug-resistant-bacteria-0814
- Chemistry World: https://www.chemistryworld.com/news/antibiotics-designed-with-the-help-of-ai-attack-bacteria-in-entirely-new-ways/4022039.article

Use real numbers where they matter. Separate what the paper demonstrates from what the press release implies. If you are unsure about a detail, say so instead of guessing.
```

## Bonus: have the agent audit the funnel

The interesting number in this paper is not 36 million. It is 24, and then 7, and then 2. Have an assistant reconstruct the attrition honestly:

```
Using https://www.cell.com/cell/abstract/S0092-8674(25)00855-4 and https://news.mit.edu/2025/using-generative-ai-researchers-design-compounds-kill-drug-resistant-bacteria-0814

1. Build a table of the funnel: compounds generated -> computationally filtered -> shortlisted -> synthesized -> selectively active -> leads with in vivo efficacy. Give the number at each stage and say which source it comes from.
2. At which stage did humans (medicinal chemists, retrosynthesis software) intervene, and what would the result have looked like without those steps?
3. Compare this hit rate to what a conventional high-throughput screen of a natural-product library typically achieves. Cite what you use.
4. Find three news headlines about this study and rate each as accurate, overstated, or ambiguous about how close NG1 and DN1 are to being drugs.
5. Name the single experiment you would want to see next before believing either compound has a future.
```

## Sources
- [Cell paper (Krishnan et al., 14 August 2025)](https://www.cell.com/cell/abstract/S0092-8674(25)00855-4)
- [DOI 10.1016/j.cell.2025.07.033](https://doi.org/10.1016/j.cell.2025.07.033)
- [MIT News announcement](https://news.mit.edu/2025/using-generative-ai-researchers-design-compounds-kill-drug-resistant-bacteria-0814)
- [Chemistry World coverage](https://www.chemistryworld.com/news/antibiotics-designed-with-the-help-of-ai-attack-bacteria-in-entirely-new-ways/4022039.article)

---
*Back to **[README.md](./README.md)** · **[CONTEXT.md](./CONTEXT.md)**.*
