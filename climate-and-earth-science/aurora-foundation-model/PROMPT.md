# 🤖 Explore this with AI: Aurora, a foundation model for the Earth system

Paste the prompt below into your favorite AI assistant (Claude, ChatGPT, Gemini, or a local model). If your assistant can browse the web, tell it to read the sources first. The point is a clear, honest, grounded explanation of what happened and why it mattered.

> A single 1.3-billion-parameter model, pretrained on more than a million hours of geophysical data, was fine-tuned to beat the operational systems for air pollution, ocean waves, tropical cyclone tracks and 0.1-degree weather.

---

```text
You are a sharp, honest science explainer. Walk me through a specific, real AI achievement so that I actually understand it, not just the headline.

Topic: Aurora, Microsoft Research's foundation model for the Earth system (Bodnar et al., Nature, 21 May 2025), and its July 2026 follow-up Aurora 1.5.

Please cover, in plain language a curious non-expert can follow:
1. What "foundation model" means here and why applying it to the Earth system was not obvious: the datasets differ in variables, resolution, physics and length of record. What did the authors pretrain on, and what is the claimed benefit of pretraining for tasks with little data (ocean waves, with records only from 2016)?
2. How the model works: the flexible Perceiver-style encoder with per-variable embeddings, the 3D Swin transformer processor, the decoder, and why that design lets new variables be added at fine-tuning time. Give the size (1.3 billion parameters) and the pretraining compute (150,000 steps on 32 A100 GPUs).
3. The four results, with the paper's own numbers and the operational baseline for each: air quality vs CAMS (74% matched or beaten, 95% within 20% RMSE), ocean waves vs HRES-WAM (86% of wave variables), tropical cyclone tracks vs official agency forecasts on all 2022-2023 cyclones (6% better at day 1, 20-25% at days 2-5 in the North Atlantic and East Pacific), and 0.1-degree weather vs IFS HRES (92% of targets, up to 24% lower RMSE beyond 12 hours).
4. Why the breadth matters more than any single score, and how this differs from single-task models like GraphCast and GenCast.
5. Aurora 1.5 (Weyn et al., preprint, 9 July 2026): what the three-stage fine-tuning does, what the ensemble technique borrowed from ECMWF's AIFS-CRPS is, and the reported numbers (beats ECMWF ENS on 88.9% of targets over days 1-10; 16% lower cyclone track error than the original Aurora). Make clear that this is a company preprint, not peer-reviewed.
6. The honest caveats: Aurora starts from physics-based data assimilation analyses; IFS HRES is better at the shortest lead times; "matches or outperforms" includes ties and CAMS remains better on about a quarter of air-quality targets; the 2025 model is deterministic; the results are retrospective, not operational; and the two different cyclone figures Microsoft gives for Aurora 1.5 (16% in the paper abstract, roughly one-third in the blog) are different comparisons.
7. What I should read or run next to go deeper.

Ground your answer in these sources (read them if you can, and cite them as you go):
- Nature paper: https://www.nature.com/articles/s41586-025-09005-y
- arXiv preprint: https://arxiv.org/abs/2405.13063
- Code and weights: https://github.com/microsoft/aurora
- Aurora 1.5 blog: https://www.microsoft.com/en-us/research/blog/aurora-1-5-extending-open-foundation-models-for-weather-and-earth-system-applications/
- Aurora 1.5 preprint: https://www.microsoft.com/en-us/research/wp-content/uploads/2026/07/Aurora_1_5_Paper.pdf

Be concrete, use real numbers where they matter, distinguish peer-reviewed results from company claims, and if you are unsure about a detail, say so instead of guessing.
```

## Bonus: run the model

The weights are public under an MIT licence, so an agent with Python can check that the model loads and produces a forecast:

```text
Run `pip install microsoft-aurora`, then follow the "Aurora: A Foundation Model of the Atmosphere" documentation at https://microsoft.github.io/aurora/ to load the AuroraSmallPretrained checkpoint from Hugging Face (repo microsoft/aurora), build a Batch from a small ERA5 sample as the docs describe, and roll the model forward a few 6-hour steps. Report the checkpoint name and size you downloaded, the variables the model expects, whether the rollout runs on your hardware, and what the licence file at https://github.com/microsoft/aurora says. Do not report forecast skill from a single sample; the point is only to confirm the artifact is real and runnable.
```

---

## Sources
- [Bodnar et al., A foundation model for the Earth system, Nature (21 May 2025)](https://www.nature.com/articles/s41586-025-09005-y)
- [arXiv 2405.13063 (preprint)](https://arxiv.org/abs/2405.13063)
- [github.com/microsoft/aurora](https://github.com/microsoft/aurora) · [microsoft/aurora on Hugging Face](https://huggingface.co/microsoft/aurora)
- [Microsoft Research blog: Aurora 1.5](https://www.microsoft.com/en-us/research/blog/aurora-1-5-extending-open-foundation-models-for-weather-and-earth-system-applications/)
- [Aurora 1.5 preprint (PDF)](https://www.microsoft.com/en-us/research/wp-content/uploads/2026/07/Aurora_1_5_Paper.pdf)

---
*Back to **[README.md](./README.md)** · **[CONTEXT.md](./CONTEXT.md)**.*
