# 🤖 Explore this with AI: MICrONS, a cubic millimetre of mouse cortex

Paste the prompt below into your favorite AI assistant (Claude, ChatGPT, Gemini, or a local model). If your assistant can browse the web, tell it to read the sources first. The point is a clear, honest, grounded explanation of what happened and why it mattered.

> Half a billion synapses mapped in a speck of brain, co-registered with recordings of 75,000 of those same neurons firing while the mouse watched videos.

---

```text
You are a sharp, honest science explainer comfortable with both neuroscience and machine learning. Walk me through a specific real result so I actually understand what is new about it.

Topic: "Functional connectomics spanning multiple areas of mouse visual cortex", The MICrONS Consortium, Nature 640:435-447, 9 April 2025 (DOI 10.1038/s41586-025-08790-w), the flagship of about ten papers released across Nature journals.

Please cover, in plain language a curious non-expert can follow:
1. What a connectome is, and why producing one is fundamentally a data problem: electron microscopy at nanometre resolution, roughly 28,000 tissue slices, about 1.6 petabytes, and neurons as thin processes that wander through thousands of consecutive images.
2. Where machine learning actually sits in the pipeline: segmentation to trace each neuron through the image stack, automated synapse and nucleus detection, then human proofreading. Be clear that this is a hybrid pipeline and that "AI mapped a brain" is an inaccurate summary.
3. The dataset's contents, with the numbers from the abstract: more than 200,000 cells and 0.5 billion synapses in the electron-microscopy reconstruction, co-registered with dense calcium imaging of around 75,000 neurons in VISp, VISrl, VISal and VISlm in an awake mouse viewing natural and synthetic stimuli. Explain why the abstract says 200,000 CELLS while the data portal says about 120,000 NEURONS (hint: glia).
4. Why co-registering structure with function is the real novelty, and what question it lets researchers ask that a connectome alone or recordings alone cannot answer.
5. How this compares to FlyWire, which mapped a complete adult fruit fly brain of about 139,000 neurons in 2024. One is a whole small brain; the other is a fragment of a mammalian cortex with physiology attached. Explain the trade-off.
6. What the accompanying papers did with the resource: cell-type characterization, a synaptic-level connectivity diagram of a cortical column, inhibitory connectivity linked to gene expression, and a general connectivity principle for excitatory neurons.
7. The honest limits: one cubic millimetre of one mouse; proofreading done only on a SUBSET of neurons; the connectome is a static snapshot of dead tissue with no synaptic strengths or plasticity; structure and function were measured at different times and co-registration is an inference; calcium imaging is an indirect proxy for spiking.
8. A scale reality check: how does one cubic millimetre compare to a whole mouse brain, and to a human brain? What would it actually take to scale this method up?

Ground your answer in these sources (read them if you can, and cite them as you go):
- Nature paper: https://www.nature.com/articles/s41586-025-08790-w
- PubMed record: https://pubmed.ncbi.nlm.nih.gov/40205214/
- Data portal: https://www.microns-explorer.org/
- Cubic millimetre dataset details: https://www.microns-explorer.org/cortical-mm3
- Princeton announcement: https://www.princeton.edu/news/2025/04/09/first-time-scientists-map-half-billion-connections-allow-mice-see

Be concrete, use the real numbers, and note where different sources give slightly different figures rather than silently picking one. If you are unsure about a detail, say so instead of guessing.
```

## Bonus: the dataset is public, so have the agent query it

Unlike most results in this collection, the artifact here is a downloadable dataset with a programmatic API. That makes it directly checkable:

```bash
# The paper's abstract, straight from PubMed.
curl -s "https://eutils.ncbi.nlm.nih.gov/entrez/eutils/efetch.fcgi?db=pubmed&id=40205214&rettype=abstract&retmode=text"
```

```python
# The MICrONS data is served through CAVEclient. Install and connect:
#   pip install caveclient
# Then (this requires setting up access credentials, which the portal documents):
from caveclient import CAVEclient
client = CAVEclient("minnie65_public")
print(client.materialize.get_tables())        # what tables exist
print(client.materialize.version)             # which dataset version you are on
```

Then ask it:

```
Using the abstract and the data portal, answer precisely:
1. Quote the abstract's figures for cells, synapses, and functionally imaged neurons. Which visual areas are named?
2. What does the abstract say about how much of the volume was PROOFREAD? Quote it. Why does that qualifier matter for anyone analyzing the data?
3. The portal lists multiple dataset versions. Explain why a connectome has versions at all, and what that implies about treating any single synapse count as final.
4. Reconcile these numbers: 200,000+ cells (abstract), ~120,000 neurons (portal), 523 million synapses (portal), 0.5 billion synapses (abstract). Which differences are real disagreements and which are just different quantities?
5. Find one of the companion papers and state one specific biological finding it reports. Is that finding in the flagship paper, or only in the companion?
```

## Sources
- [Nature paper (MICrONS Consortium, 9 April 2025)](https://www.nature.com/articles/s41586-025-08790-w)
- [PubMed record (PMID 40205214)](https://pubmed.ncbi.nlm.nih.gov/40205214/)
- [MICrONS Explorer data portal](https://www.microns-explorer.org/)
- [MICrONS Explorer: the cubic millimetre dataset](https://www.microns-explorer.org/cortical-mm3)
- [Princeton University announcement](https://www.princeton.edu/news/2025/04/09/first-time-scientists-map-half-billion-connections-allow-mice-see)
- [Allen Institute announcement](https://alleninstitute.org/news/scientists-complete-largest-wiring-diagram-and-functional-map-of-the-brain-to-date)

---
*Back to **[README.md](./README.md)** · **[CONTEXT.md](./CONTEXT.md)**.*
