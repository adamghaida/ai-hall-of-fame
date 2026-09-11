# 📚 Context: MICrONS, a cubic millimetre of mouse cortex

**What MICrONS was for.** The programme name stands for Machine Intelligence from Cortical Networks, and the original IARPA framing was reverse-engineering: map cortical circuits in enough detail to extract algorithmic principles that might improve machine learning. Whether that payoff arrives is an open question. What the programme definitely produced is a dataset, and the dataset is the achievement.

**Why AI is load-bearing here, not incidental.** Electron microscopy gives you a stack of images at nanometre resolution, and a neuron is a thin process that wanders through thousands of consecutive slices. Tracing one by hand is slow; tracing 120,000 through roughly 28,000 slices and 1.6 petabytes is not humanly possible. Machine-learning segmentation does the tracing, automated detectors find synapses and nuclei, and human proofreaders fix errors. This is the same methodological family as [FlyWire](../flywire-connectome/), and in both cases the honest description is a hybrid pipeline rather than "AI mapped a brain".

**Structure plus function is the actual novelty.** Connectomes existed. Large-scale calcium imaging existed. Doing both on the same tissue, and then registering one to the other so that a given cell in the functional recording can be identified in the electron-microscope volume, is the hard part and the reason this dataset gets used. Andreas Tolias, quoted by Princeton, put the point plainly: what is unique is that it brought structure and function together.

**The numbers vary slightly by source, which is normal.** The *Nature* abstract states more than 200,000 cells and 0.5 billion synapses, with dense calcium imaging of around 75,000 neurons. MICrONS Explorer reports 523 million synapses and about 120,000 neurons; press materials round to half a billion synapses and 4 kilometres of axons, and give the volume as roughly 1.4 × 0.87 × 0.84 mm. The apparent discrepancy between "200,000 cells" and "120,000 neurons" is not an error: the cell count includes non-neuronal cells such as glia. The synapse counts differ because detection and proofreading are ongoing and the portal has released multiple dataset versions. Cite the abstract for the headline figures and the portal for the current ones.

**Proofreading is partial, and that matters.** The abstract is explicit that proofreading was done on a **subset** of neurons, yielding reconstructions with complete dendritic trees and local and inter-areal axonal projections. The full automated segmentation has not been exhaustively corrected. Analyses that depend on completeness use the proofread subset.

**The companion papers.** The flagship paper is a resource description; the scientific claims live in the accompanying studies, which cover cell-type characterization, a synaptic-level connectivity diagram of a cortical column, inhibitory connectivity linked to gene expression, integration of information across visual space, neuronal invariances, and a general connectivity principle for excitatory neurons. Citing "the MICrONS paper" for a specific biological finding is usually citing the wrong one.

## Why it's in the Hall of Fame
Because it is the first time anyone has had both the complete wiring and the recorded activity of the same substantial piece of mammalian cortex, and because getting there required machine learning to do something no quantity of human labour could have done. Francis Crick called this specific combination impossible in 1979. It is now a public dataset anyone can download.

## Honest caveats
- **One cubic millimetre, one mouse.** This is a sample of visual cortex from a single animal. It is not a mouse brain, let alone a general mammalian cortex. Individual variability is not addressed by n = 1.
- **Scale perspective.** A mouse brain is on the order of 500 cubic millimetres; a human brain is roughly a million times the volume of this sample. Extrapolating the method to a human connectome is not a matter of turning a crank.
- **Proofreading is incomplete.** Only a subset of neurons has been proofread. Automated segmentation contains errors, including merges and splits, and any analysis has to account for them. The dataset is versioned precisely because it keeps being corrected.
- **The connectome is a snapshot of dead tissue.** Structure was recovered after the animal was sacrificed. Synaptic strengths, plasticity and neuromodulation are not in the wiring diagram, and the physical connectome constrains function without determining it.
- **Function and structure were measured at different times.** Calcium imaging happened in the living animal beforehand; the electron microscopy afterwards. Co-registration is an inference, carefully done but not free of error.
- **Calcium imaging is an indirect proxy for spiking**, with limited temporal resolution, and it covered pyramidal neurons in particular rather than every cell in the volume.
- **The programme's stated goal is not yet met.** MICrONS was funded to extract principles that improve machine learning. The dataset exists; the transfer to better AI remains an aspiration rather than a result, and nobody should cite this as an AI-capabilities milestone in that sense.
- **"AI mapped a brain" is the wrong summary.** Machine learning did the segmentation that made the reconstruction possible, and hundreds of humans proofread it over seven years.

## Sources
- [Nature paper (MICrONS Consortium, 9 April 2025)](https://www.nature.com/articles/s41586-025-08790-w) · [PMID 40205214](https://pubmed.ncbi.nlm.nih.gov/40205214/)
- [MICrONS Explorer data portal](https://www.microns-explorer.org/)
- [MICrONS Explorer: the cubic millimetre dataset, with current counts and versions](https://www.microns-explorer.org/cortical-mm3)
- [Princeton University announcement](https://www.princeton.edu/news/2025/04/09/first-time-scientists-map-half-billion-connections-allow-mice-see)
- [Allen Institute announcement](https://alleninstitute.org/news/scientists-complete-largest-wiring-diagram-and-functional-map-of-the-brain-to-date)
- [Related entry: FlyWire, the first complete adult-brain connectome](../flywire-connectome/)

---
*Back to **[README.md](./README.md)** · **[PROMPT.md](./PROMPT.md)**.*
