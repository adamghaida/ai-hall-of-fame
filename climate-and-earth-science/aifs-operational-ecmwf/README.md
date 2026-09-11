# AIFS: ECMWF puts a machine-learning weather model into full operations

**Field:** 🌍 Climate & Earth Science  ·  **When:** February 2025 · ECMWF

> On 25 February 2025 the European Centre for Medium-Range Weather Forecasts switched on AIFS Single v1, which its implementation notice calls "the first machine-learning-driven forecast model to be made fully operational". It beats the physics-based IFS on many scores, improves tropical cyclone tracks by up to 20%, and uses roughly 1,000 times less energy per forecast.

## What happened
ECMWF, the intergovernmental centre whose Integrated Forecasting System (IFS) has long been the benchmark for global medium-range forecasting, made its **Artificial Intelligence Forecasting System (AIFS)** an operational product. **AIFS Single v1** went live with the **25 February 2025 06 UTC** run: a deterministic model running four times a day (00/06/12/18 UTC) out to **15 days**, on the N320 grid (ECMWF's pages give the spacing as roughly 28 to 32 km) with **13 pressure levels**. The physics-based IFS runs at 9 km. Both systems start from the same initial conditions, built by ECMWF's data assimilation from around 60 million quality-controlled observations per cycle.

The model itself (Lang et al., 2024) is a graph-neural-network encoder and decoder around a sliding-window transformer processor. It was pre-trained on the ERA5 reanalysis for 1979 to 2022 and then fine-tuned on ECMWF's own operational analyses for 2016 to 2022. ECMWF states that AIFS "outperforms state-of-the-art physics-based models for many measures," with gains of **up to 20% on tropical cyclone tracks**, and that it delivers "a reduction of approximately 1,000 times in energy use for making a forecast." The implementation notice adds that the "considerable improvements in tropical cyclone track predictions" seen in earlier experimental AIFS versions "remain in the new version 1," which "reduces TC position errors even further."

Unusually for an operational system, everything is open: the code is built on ECMWF's open-source **Anemoi** framework, the trained weights are on Hugging Face under **CC BY 4.0**, and the forecasts are published through ECMWF's Open Data service with the usual dissemination delay removed for AIFS. ECMWF describes it as "the first fully operational weather prediction open model."

The ensemble followed on **1 July 2025**: **AIFS ENS**, 51 members at about 31 km, generating forecasts more than 10 times faster than the physics-based ensemble at roughly 1/1000th of the energy, and again beating it on many measures.

## Why it matters
Pangu-Weather and [GraphCast](../graphcast-weather/) showed that learned models could beat the IFS on retrospective scores. AIFS is the moment the centre that owns the benchmark accepted the result, built its own model, and put it on the operational schedule with 24/7 support and public data feeds. That is a different kind of evidence from a paper: the model runs every six hours on real analyses, its output is verified continuously, and its weaknesses are documented in a public implementation notice. It also set the pattern that [NOAA followed in December 2025](../ai-weather-models-operational/). The energy figure matters on its own: a thousandfold reduction changes who can afford to run a global forecast.

## Sources — the record of the discovery
- [ECMWF news: ECMWF's AI forecasts become operational (25 February 2025)](https://www.ecmwf.int/en/about/media-centre/news/2025/ecmwfs-ai-forecasts-become-operational)
- [ECMWF implementation notice: Implementation of AIFS Single v1](https://confluence.ecmwf.int/display/fcst/Implementation+of+AIFS+Single+v1) — resolution, levels, run schedule, training recipe, open data, and the documented weaknesses
- [Lang et al., "AIFS - ECMWF's data-driven forecasting system" (arXiv 2406.01465)](https://arxiv.org/abs/2406.01465)
- [Model weights: ecmwf/aifs-single-1.0 on Hugging Face (CC BY 4.0)](https://huggingface.co/ecmwf/aifs-single-1.0)
- [ECMWF news: ECMWF's ensemble AI forecasts become operational (1 July 2025)](https://www.ecmwf.int/en/about/media-centre/news/2025/ecmwfs-ensemble-ai-forecasts-become-operational)

---
*In this folder: **[PROMPT.md](./PROMPT.md)** (a prompt to explore it with AI) · **[CONTEXT.md](./CONTEXT.md)** (background & caveats). Part of the [AI Hall of Fame](../../README.md) → [🌍 Climate & Earth Science](../).*
