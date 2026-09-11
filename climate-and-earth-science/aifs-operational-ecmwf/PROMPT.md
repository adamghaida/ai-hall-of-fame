# 🤖 Explore this with AI: AIFS, ECMWF's operational machine-learning forecast model

Paste the prompt below into your favorite AI assistant (Claude, ChatGPT, Gemini, or a local model). If your assistant can browse the web, tell it to read the sources first. The point is a clear, honest, grounded explanation of what happened and why it mattered.

> On 25 February 2025 ECMWF switched on AIFS Single v1, the first machine-learning forecast model made fully operational at a major centre, with open weights and open data.

---

```text
You are a sharp, honest explainer of weather science and machine learning. Walk me through a specific, real operational milestone so I actually understand it, not just the headline.

Topic: ECMWF's Artificial Intelligence Forecasting System (AIFS). AIFS Single v1 became operational on 25 February 2025 and AIFS ENS (51 members) on 1 July 2025.

Please cover, in plain language a curious non-expert can follow:
1. Who ECMWF is and why its Integrated Forecasting System (IFS) is the benchmark that Pangu-Weather and GraphCast were measured against. Why does it matter that the benchmark's owner built and deployed its own learned model?
2. How AIFS works: the graph-neural-network encoder and decoder, the sliding-window transformer processor, pre-training on ERA5 (1979 to 2022) and fine-tuning on operational analyses (2016 to 2022). Explain why the fine-tuning step matters for a model that has to run on real-time analyses.
3. What "fully operational" meant here: four runs a day, 15-day forecasts, the N320 grid (roughly 30 km, compared with 9 km for the IFS), 24/7 support, and the removal of the dissemination delay on open data. Contrast this with a research paper's retrospective score.
4. The numbers ECMWF reports: better than physics-based models "for many measures," up to 20% better tropical cyclone tracks, about 1,000 times less energy per forecast, and the ensemble running more than 10 times faster than the physics ensemble. Say who reported each number.
5. The openness: Anemoi is open source, the weights are on Hugging Face under CC BY 4.0, and the forecasts are open data. Why is a forecasting centre releasing operational weights unusual?
6. The honest caveats, taken from ECMWF's own implementation notice: persistent underestimation of tropical cyclone intensity, less sharp cloud cover, less active solar radiation, no snow-depth output, a 100 m wind bias, the point-rain artefacts, and the v1.1 revert and re-implementation. Also: AIFS depends on ECMWF's physics-based data assimilation for its starting state.
7. How this fits with NOAA's December 2025 deployment and what you would want to see over the next few years before calling learned models the default.

Ground your answer in these sources (read them if you can, and cite them as you go):
- ECMWF news, AIFS Single operational: https://www.ecmwf.int/en/about/media-centre/news/2025/ecmwfs-ai-forecasts-become-operational
- ECMWF implementation notice for AIFS Single v1: https://confluence.ecmwf.int/display/fcst/Implementation+of+AIFS+Single+v1
- Lang et al., AIFS paper: https://arxiv.org/abs/2406.01465
- Model weights on Hugging Face: https://huggingface.co/ecmwf/aifs-single-1.0
- ECMWF news, AIFS ENS operational: https://www.ecmwf.int/en/about/media-centre/news/2025/ecmwfs-ensemble-ai-forecasts-become-operational

Be concrete, separate what ECMWF claims from what has been independently verified, and if you are unsure about a detail, say so instead of guessing.
```

## Bonus: run the operational model yourself

The weights are public, so an agent with a GPU (or patience) can produce an AIFS forecast from ECMWF open data. The Hugging Face card documents the `anemoi-inference` route:

```text
Install anemoi-inference and its dependencies, then load the operational checkpoint from Hugging Face:

    from anemoi.inference.runners.default import DefaultRunner
    from anemoi.inference.config.run import RunConfiguration
    config = RunConfiguration(checkpoint={"huggingface": "ecmwf/aifs-single-1.0"})
    runner = DefaultRunner(config)

Follow the example notebook linked from https://huggingface.co/ecmwf/aifs-single-1.0 to pull initial conditions from ECMWF Open Data, produce a 10-day forecast of 500 hPa geopotential, and compare it against the AIFS forecast published on ECMWF's open data service for the same cycle. Report whether the fields match, and note the licence (CC BY 4.0 for the weights).
```

---

## Sources
- [ECMWF news: ECMWF's AI forecasts become operational](https://www.ecmwf.int/en/about/media-centre/news/2025/ecmwfs-ai-forecasts-become-operational)
- [ECMWF implementation notice: Implementation of AIFS Single v1](https://confluence.ecmwf.int/display/fcst/Implementation+of+AIFS+Single+v1)
- [Lang et al., AIFS - ECMWF's data-driven forecasting system (arXiv 2406.01465)](https://arxiv.org/abs/2406.01465)
- [ecmwf/aifs-single-1.0 on Hugging Face](https://huggingface.co/ecmwf/aifs-single-1.0)
- [ECMWF news: ECMWF's ensemble AI forecasts become operational](https://www.ecmwf.int/en/about/media-centre/news/2025/ecmwfs-ensemble-ai-forecasts-become-operational)

---
*Back to **[README.md](./README.md)** · **[CONTEXT.md](./CONTEXT.md)**.*
