# MICrONS — a cubic millimetre of mouse cortex, wired and watched

**Field:** 🧠 Neuroscience  ·  **When:** April 2025 · Nature

> Half a billion synapses mapped in a speck of brain, co-registered with recordings of 75,000 of those same neurons firing while the mouse watched videos.

## What happened
On **9 April 2025**, *Nature* published "Functional connectomics spanning multiple areas of mouse visual cortex" by **The MICrONS Consortium**, the flagship of a package of about ten papers released across the Nature family of journals.

The dataset covers roughly **one cubic millimetre** of mouse visual cortex. Within it, the electron-microscopy reconstruction contains **more than 200,000 cells** and **0.5 billion synapses**. The MICrONS Explorer portal gives the more granular figures: about **120,000 neurons** among those cells, and **523 million** detected synapses, spanning cortical layers 2 to 5 and containing on the order of **4 kilometres of axons**.

The part that makes this different from every previous connectome is the second dataset layered on top. Before the tissue was sliced and imaged, the same neurons were **watched while they worked**: dense two-photon calcium imaging of around **75,000 neurons** in primary visual cortex (VISp) and three higher visual areas (VISrl, VISal, VISlm), in an **awake mouse viewing natural and synthetic stimuli**. Those functional recordings are **co-registered** with the structural reconstruction, so for tens of thousands of individual neurons you can ask both what it is connected to and what it was doing.

Reconstructing that wiring is an AI problem before it is a neuroscience problem. The volume produced around **1.6 petabytes** of electron-microscope images across roughly 28,000 tissue slices, far beyond what humans could trace. Machine-learning segmentation followed each neuron's wandering processes through the stack, automated detection found the synapses and nuclei, and human proofreaders corrected the output. Neither the AI nor the proofreading would have produced this alone.

The work took about **seven years** and involved **more than 150 researchers** across institutions including the Allen Institute, Baylor College of Medicine and Princeton, funded principally by **IARPA** and the **NIH BRAIN Initiative**. The whole dataset is public at [MICrONS Explorer](https://www.microns-explorer.org/).

## Why it matters
[FlyWire](../flywire-connectome/) mapped a complete adult fly brain, about 139,000 neurons, the previous high-water mark for whole-brain connectomics. MICrONS is a different trade: instead of an entire small brain, a **piece of a mammalian one**, in a species with a cortex, and crucially **with the physiology attached**.

That pairing is the point. A connectome on its own is anatomy: it tells you what is wired to what, not what the wiring computes. Recordings on their own are physiology: they tell you what neurons do, not why. Having both for the same 75,000 cells lets researchers ask the question the field has wanted to ask for decades, which is how circuit structure produces functional response. The companion papers use it for exactly that, including characterizing cell types, mapping a cortical column's synaptic connectivity, and identifying a general principle for connectivity between excitatory neurons.

There is a nice historical marker here. In 1979 Francis Crick wrote that it would be impossible to produce an exact wiring diagram for a cubic millimetre of brain tissue along with the firing of all its neurons. That is a fair description of what this is.

It is also one cubic millimetre of one mouse. A human brain is roughly a million times larger by volume. See [CONTEXT.md](./CONTEXT.md).

## Sources — the record of the discovery
- [Nature paper (MICrONS Consortium, 9 April 2025)](https://www.nature.com/articles/s41586-025-08790-w) · [DOI 10.1038/s41586-025-08790-w](https://doi.org/10.1038/s41586-025-08790-w) · [PMID 40205214](https://pubmed.ncbi.nlm.nih.gov/40205214/)
- [MICrONS Explorer data portal](https://www.microns-explorer.org/)
- [MICrONS Explorer: the cubic millimetre dataset](https://www.microns-explorer.org/cortical-mm3)
- [Princeton University announcement](https://www.princeton.edu/news/2025/04/09/first-time-scientists-map-half-billion-connections-allow-mice-see)
- [Allen Institute announcement](https://alleninstitute.org/news/scientists-complete-largest-wiring-diagram-and-functional-map-of-the-brain-to-date)
- [Related entry: FlyWire, the first complete adult-brain connectome](../flywire-connectome/)

---
*In this folder: **[PROMPT.md](./PROMPT.md)** (a prompt to explore it with AI) · **[CONTEXT.md](./CONTEXT.md)** (background & caveats). Part of the [AI Hall of Fame](../../README.md) → [🧠 Neuroscience](../).*
