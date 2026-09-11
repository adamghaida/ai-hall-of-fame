# Aurora: one foundation model for weather, air quality, ocean waves and cyclone tracks

**Field:** 🌍 Climate & Earth Science  ·  **When:** May 2025 · Nature

> A single 1.3-billion-parameter model, pretrained on more than a million hours of geophysical data, was fine-tuned to beat the operational systems for air pollution, ocean waves, tropical cyclone tracks and 0.1-degree weather, at orders of magnitude lower computing cost.

## What happened
Microsoft Research's **Aurora** (Bodnar et al., *Nature* 641, 1180 to 1187, published 21 May 2025) applied the foundation-model recipe to the Earth system: pretrain one large model on many heterogeneous datasets, then fine-tune it cheaply to specific prediction tasks. Aurora is a 1.3-billion-parameter 3D Swin-transformer with a flexible encoder that accepts arbitrary sets of variables, pretrained for 150,000 steps on 32 A100 GPUs on "more than one million hours of diverse geophysical data."

The paper reports four fine-tuned results against the operational systems that forecasters actually use:
- **Air quality.** Against ECMWF's Copernicus Atmosphere Monitoring Service (CAMS), Aurora "matches or outperforms CAMS on 74% of all targets" and is within 20% RMSE on 95% of them, for a chemistry-and-transport problem that CAMS solves on a supercomputer.
- **Ocean waves.** Against ECMWF's HRES-WAM, Aurora "matches or outperforms HRES-WAM on 86% of all wave variables" and is within 20% RMSE on 96% of targets.
- **Tropical cyclone tracks.** A single deterministic run of Aurora, fine-tuned to HRES analyses at 0.25°, "outperforms the track forecasts from these complex systems for several agencies on a dataset of all tropical cyclones globally in 2022-2023." In the North Atlantic and East Pacific the paper reports "improvements of 6% at lead time 1 day and 20-25% at lead times 2-5 days" over the official forecasts.
- **High-resolution weather.** Fine-tuned to 0.1° (about 11 km), Aurora "achieves lower RMSE than IFS HRES on 92% of target variables, pressure levels and lead times," with reductions of up to 24% at lead times beyond 12 hours.

Code and weights are public at github.com/microsoft/aurora under an MIT licence, installable with `pip install microsoft-aurora`.

A follow-up preprint, **Aurora 1.5** (Weyn et al., 9 July 2026, not peer-reviewed), fine-tuned the same base model into an hourly, 26-variable ensemble system. Microsoft reports that Aurora 1.5 ENS "outperforms the ECMWF ENS operational ensemble on 88.9% of upper-air and single-level target variables in the medium range (days 1-10)," cuts tropical cyclone track error by 16% relative to the original Aurora, and is likewise released openly.

## Why it matters
[GraphCast](../graphcast-weather/) and [GenCast](../gencast-ensemble-weather/) each solved one task, medium-range atmospheric forecasting, with a model built for it. Aurora's claim is different: that one pretrained model transfers, with modest fine-tuning, to problems with different physics, variables and data histories, including ocean waves, for which the training record only starts in 2016. If that holds, the cost of building a competitive forecasting system for a new Earth-system variable drops from a dedicated multi-year effort to a fine-tuning run. That is why the paper's title is "a foundation model for the Earth system" rather than "a weather model."

## Sources — the record of the discovery
- [Bodnar et al., "A foundation model for the Earth system," Nature 641, 1180-1187 (21 May 2025)](https://www.nature.com/articles/s41586-025-09005-y)
- [arXiv 2405.13063: Aurora: A Foundation Model for the Earth System (preprint, v1 May 2024, v3 November 2024)](https://arxiv.org/abs/2405.13063)
- [Code and weights: github.com/microsoft/aurora (MIT licence)](https://github.com/microsoft/aurora) · [microsoft/aurora on Hugging Face](https://huggingface.co/microsoft/aurora)
- [Microsoft Research project page: Aurora Forecasting](https://www.microsoft.com/en-us/research/project/aurora-forecasting/)
- [Microsoft Research blog: Aurora 1.5 (9 July 2026)](https://www.microsoft.com/en-us/research/blog/aurora-1-5-extending-open-foundation-models-for-weather-and-earth-system-applications/) · [Aurora 1.5 preprint (PDF)](https://www.microsoft.com/en-us/research/wp-content/uploads/2026/07/Aurora_1_5_Paper.pdf)

---
*In this folder: **[PROMPT.md](./PROMPT.md)** (a prompt to explore it with AI) · **[CONTEXT.md](./CONTEXT.md)** (background & caveats). Part of the [AI Hall of Fame](../../README.md) → [🌍 Climate & Earth Science](../).*
