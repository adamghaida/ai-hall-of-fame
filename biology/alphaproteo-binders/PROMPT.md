# 🤖 Explore this with AI: AlphaProteo — protein binders designed on demand

Paste the prompt below into your favorite AI assistant (Claude, ChatGPT, Gemini, or a local model). If your assistant can browse the web, tell it to read the sources first. The point is a clear, honest, grounded explanation of what happened and why it mattered.

> A generative model designed protein binders for seven targets with 3- to 300-fold better affinity than the best previous methods, and failed completely on an eighth.

---

```text
You are a careful, hype-free molecular biology explainer. Walk me through a specific, real AI-in-biology result so that I actually understand what was and was not achieved.

Topic: AlphaProteo, announced by Google DeepMind on 5 September 2024, with the technical report "De novo design of high-affinity protein binders with AlphaProteo" (Zambaldi, La, Chu, Patani, Danson et al., arXiv:2409.08022).

Please cover, in plain language a curious non-expert can follow:
1. What a protein binder is and why designing one used to be hard. Explain how people got binders before computational design worked: animal immunization, phage display, directed evolution, and why each is slow or expensive.
2. What AlphaProteo actually takes as input and produces as output. It needs an experimental structure of the target and a specified binding site; it returns candidate binder sequences. Explain why the structure requirement is a real constraint, not a footnote.
3. The training data: the Protein Data Bank plus more than 100 million AlphaFold-predicted structures. What does it mean that a design model is trained largely on another model's predictions?
4. The results, target by target, from Table 1 of the report. In vitro success rate and best measured KD:
   - BHRF1: 88%, 8.5 nM, 94 designs tested
   - VEGF-A: 33%, 0.48 nM, 94 designs
   - IL-7Ra: 25%, 0.082 nM, 94 designs
   - PD-L1: 15%, 0.18 nM, 159 designs
   - IL-17A: 14%, 8.4 nM, 63 designs
   - SARS-CoV-2 RBD: 12%, 26 nM, 172 designs
   - TrkA: 9%, 0.96 nM, 131 designs
   Explain what a dissociation constant (KD) means and why nanomolar and picomolar are the numbers people care about.
5. The abstract's headline claim: 3- to 300-fold better binding affinities and higher success rates than the best existing methods, from one round of medium-throughput screening with no further optimization. Explain what "one round, no affinity maturation" buys you in practice.
6. The eighth target. AlphaProteo was pointed at TNFa, picked because in-silico screening predicted success rates close to zero, and produced no hits. The report blames a flat, highly polar binding site at the interface between two subunits of a homotrimer. Explain that failure mode and why it is a common and important one.
7. The honest caveats, stated plainly:
   - This is an arXiv technical report, not a peer-reviewed paper, and the wet lab work was done by the authors.
   - Success means measured in vitro binding, not biological function (except the SARS-CoV-2 binders, which blocked infection in cell assays) and certainly not therapeutic efficacy.
   - Quoting the 88% BHRF1 figure as "AlphaProteo's success rate" is wrong; four of seven targets came in at 15% or below.
   - Model weights and code were not released. DeepMind described a phased sharing approach developed with external biosecurity advisers including the Nuclear Threat Initiative's AI Bio Forum. So nobody outside has reproduced this.
8. How AlphaProteo relates to RFdiffusion and to AlphaFold: what each contributed, and what specifically improved.

Ground your answer in these sources (read them if you can, and cite them as you go):
- DeepMind announcement: https://deepmind.google/blog/alphaproteo-generates-novel-proteins-for-biology-and-health-research/
- Technical report: https://arxiv.org/abs/2409.08022
- Full text with the results table: https://arxiv.org/html/2409.08022v1

Be concrete, clearly separate what the report claims from what the blog post adds, and if you are unsure about a detail, say so instead of guessing.
```

## Have the agent verify it

There are no released weights to run, so the checkable artifact here is the record itself: the report's metadata and its results table. Ask an agent with code execution and web access to confirm both rather than trusting the summary above.

```python
# Confirm the technical report exists, and check its metadata against this entry.
import urllib.request, xml.etree.ElementTree as ET

url = "http://export.arxiv.org/api/query?id_list=2409.08022"
root = ET.fromstring(urllib.request.urlopen(url).read())
ns = {"a": "http://www.w3.org/2005/Atom"}
entry = root.find("a:entry", ns)

print("title    :", " ".join(entry.find("a:title", ns).text.split()))
print("published:", entry.find("a:published", ns).text)
print("authors  :", len(entry.findall("a:author", ns)))
print()
print(" ".join(entry.find("a:summary", ns).text.split()))

# Expect: "De novo design of high-affinity protein binders with AlphaProteo",
# published 2024-09, and an abstract containing "3- to 300-fold" and "seven target proteins".
```

Then have it audit the numbers:

```
Fetch https://arxiv.org/html/2409.08022v1 and find the table of experimental binder-design
results. For each of the seven targets, report the in vitro success rate, the best KD, and the
number of designs tested, and compare them against this list:

  BHRF1 88% / 8.5 nM / 94      VEGF-A 33% / 0.48 nM / 94    IL-7Ra 25% / 0.082 nM / 94
  PD-L1 15% / 0.18 nM / 159    IL-17A 14% / 8.4 nM / 63     SC2RBD 12% / 26 nM / 172
  TrkA   9% / 0.96 nM / 131

Flag every discrepancy. Then find what the report says about TNFa and quote it. Finally, search
for any peer-reviewed journal version of this work, and for any independent group reproducing
AlphaProteo's results. Report honestly if you find none.
```

---

## Sources
- [Google DeepMind: AlphaProteo generates novel proteins for biology and health research](https://deepmind.google/blog/alphaproteo-generates-novel-proteins-for-biology-and-health-research/)
- [Technical report: "De novo design of high-affinity protein binders with AlphaProteo" (arXiv:2409.08022)](https://arxiv.org/abs/2409.08022)
- [Full text with the per-target results table](https://arxiv.org/html/2409.08022v1)

---
*Back to **[README.md](./README.md)** · **[CONTEXT.md](./CONTEXT.md)**.*
