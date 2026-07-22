# Reconstructing seen images from brain scans with Stable Diffusion

**Field:** 🧠 Neuroscience  ·  **When:** 2023 · CVPR

> Show someone a photo, scan their brain, and reconstruct a recognizable version of what they saw.

## What happened
Takagi and Nishimoto mapped human **fMRI** activity into the latent space of **Stable Diffusion** to reconstruct high-resolution images a person was viewing, without training a bespoke generative model. They also linked parts of the diffusion model (the latent, the text conditioning, the denoising U-Net) to distinct brain regions.

## Why it matters
It showed that a powerful off-the-shelf generative model can be bridged to brain activity to decode aspects of visual experience, a striking demonstration for both neuroscience and future brain-computer interfaces.

## Sources — the record of the discovery
- [CVPR paper (open access)](https://openaccess.thecvf.com/content/CVPR2023/html/Takagi_High-Resolution_Image_Reconstruction_With_Latent_Diffusion_Models_From_Human_Brain_CVPR_2023_paper.html)
- [Project page](https://sites.google.com/view/stablediffusion-with-brain/)
- [Code (GitHub)](https://github.com/yu-takagi/StableDiffusionReconstruction)

---
*In this folder: **[PROMPT.md](./PROMPT.md)** (a prompt to explore it with AI) · **[CONTEXT.md](./CONTEXT.md)** (background & caveats). Part of the [AI Hall of Fame](../../README.md) → [🧠 Neuroscience](../).*
