# 🤖 Explore this with AI: Google's global flood forecasting in ungauged basins

Paste the prompt below into your favorite AI assistant (Claude, ChatGPT, Gemini, or a local model). If your assistant can browse the web, tell it to read the sources first. The point is a clear, honest, grounded explanation of what happened and why it mattered.

> An LSTM trained on 5,680 river gauges predicted extreme floods in ungauged basins five days ahead as reliably as the leading global system could manage at zero days, and was serving public forecasts in more than 80 countries when the paper appeared.

---

```text
You are a sharp, honest science explainer. Walk me through a specific, real AI achievement so that I actually understand it, not just the headline.

Topic: Google's machine-learning flood forecasting system for ungauged river basins (Nearing et al., "Global prediction of extreme floods in ungauged watersheds," Nature, 20 March 2024) and the Flood Hub deployment built on it.

Please cover, in plain language a curious non-expert can follow:
1. Why "prediction in ungauged basins" was a long-standing problem in hydrology, and why it matters that the least-gauged regions are often the most flood-exposed.
2. How the model works: one LSTM trained on 5,680 gauges worldwide, an encoder over past weather and catchment attributes, a decoder over a 7-day horizon, a probabilistic output. Explain why training one model on many basins can beat per-basin calibration, and what "evaluated in ungauged mode" means.
3. The paper's results, with the baseline named: 5-day forecasts as reliable as GloFAS nowcasts; reliability on 5-year return-period floods matching GloFAS on 1-year floods; better than GloFAS at about 70% of gauges for 2-year events. Explain what "reliability" (precision and recall on return-period events) does and does not measure.
4. The deployment: Flood Hub in 80 countries and 460 million people at publication; the 11 November 2024 model trained on 15,980 gauges with 7-day skill equal to the old 5-day skill, coverage of 100+ countries and 700 million people, about 250,000 virtual gauges across 150 countries, the API and the GRRR dataset; and Google's current claim of 2 billion people in 150+ countries via Search, Maps and Android alerts.
5. The honest caveats: the comparison is to GloFAS nowcasts rather than to well-calibrated national systems; reliability varies by region; ECMWF GloFAS scientists are co-authors, so the comparison is fair but not an outside audit; the coverage figures are Google's own; virtual-gauge forecasts are validated only indirectly via satellite imagery; the flood model inherits the errors of its input weather forecasts.
6. What I should read or try next to go deeper.

Ground your answer in these sources (read them if you can, and cite them as you go):
- Nature paper: https://www.nature.com/articles/s41586-024-07145-1
- arXiv preprint: https://arxiv.org/abs/2307.16104
- Google blog, 20 March 2024: https://blog.google/technology/ai/google-ai-global-flood-forecasting/
- Google Research blog, 11 November 2024: https://research.google/blog/a-flood-forecasting-ai-model-trained-and-evaluated-globally/
- Google blog, 11 November 2024: https://blog.google/innovation-and-ai/products/expanding-flood-forecasting-coverage-helping-partners/
- Google Research flood forecasting project page: https://sites.research.google/gr/floodforecasting/

Be concrete, use real numbers where they matter, say whose number each one is, and if you are unsure about a detail, say so instead of guessing.
```

## Bonus: check the released models and data

The trained models from the paper are public, so the artifact can be inspected:

```text
Open the Zenodo record at https://doi.org/10.5281/zenodo.10397664 and the analysis repository at https://github.com/google-research-datasets/global_streamflow_model_paper. Report what files the Zenodo record contains, the licence, and how the README says the models are meant to be run with NeuralHydrology (https://neuralhydrology.github.io). Then find the paper's evaluation code for return-period precision and recall and describe, in a few sentences, how a "reliability" score for a 2-year return-period event is computed and how the GloFAS comparison is set up. If you have the compute, run the repository's example evaluation on one gauge and report what it outputs. Do not claim to reproduce the paper's global numbers from one gauge.
```

---

## Sources
- [Nearing et al., Global prediction of extreme floods in ungauged watersheds, Nature 627 (20 March 2024)](https://www.nature.com/articles/s41586-024-07145-1)
- [arXiv 2307.16104 (preprint)](https://arxiv.org/abs/2307.16104)
- [Google blog, 20 March 2024](https://blog.google/technology/ai/google-ai-global-flood-forecasting/)
- [Google Research blog, 11 November 2024](https://research.google/blog/a-flood-forecasting-ai-model-trained-and-evaluated-globally/)
- [Google blog, 11 November 2024: expanding flood forecasting coverage](https://blog.google/innovation-and-ai/products/expanding-flood-forecasting-coverage-helping-partners/)
- [Google Research: Flood Forecasting project page](https://sites.research.google/gr/floodforecasting/)
- [Trained models on Zenodo](https://doi.org/10.5281/zenodo.10397664) · [Analysis code](https://github.com/google-research-datasets/global_streamflow_model_paper)

---
*Back to **[README.md](./README.md)** · **[CONTEXT.md](./CONTEXT.md)**.*
