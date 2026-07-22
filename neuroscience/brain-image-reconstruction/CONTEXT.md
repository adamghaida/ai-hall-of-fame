# 📚 Context: Reconstructing seen images from brain scans with Stable Diffusion

The method decodes fMRI into the image latent and text-conditioning that Stable Diffusion already understands, so it reuses the generator's visual prior instead of learning one from scratch. Caveats worth stating plainly: models are trained per-subject on many hours of paired fMRI (the public Natural Scenes Dataset), and reconstructions capture the gist and semantics of a scene rather than exact detail. It is a cousin of the speech-neuroprosthesis and handwriting-BCI entries: decoding intention or perception from neural signals.

## Why it's in the Hall of Fame
It showed that a powerful off-the-shelf generative model can be bridged to brain activity to decode aspects of visual experience, a striking demonstration for both neuroscience and future brain-computer interfaces.

## Sources
- [CVPR paper (open access)](https://openaccess.thecvf.com/content/CVPR2023/html/Takagi_High-Resolution_Image_Reconstruction_With_Latent_Diffusion_Models_From_Human_Brain_CVPR_2023_paper.html)
- [Project page](https://sites.google.com/view/stablediffusion-with-brain/)
- [Code (GitHub)](https://github.com/yu-takagi/StableDiffusionReconstruction)

---
*Back to **[README.md](./README.md)** · **[PROMPT.md](./PROMPT.md)**.*
