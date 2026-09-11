# Google flood forecasting: reliable five-day warnings for rivers with no gauges

**Field:** 🌍 Climate & Earth Science  ·  **When:** March 2024 · Nature

> An LSTM trained on 5,680 river gauges predicted extreme floods in ungauged basins five days ahead as reliably as the leading global system could manage at zero days, and was already serving public forecasts in more than 80 countries when the paper appeared. A November 2024 model pushed that to seven days for 100 countries and 700 million people.

## What happened
Most of the world's rivers have no streamflow gauge, and the places with the fewest gauges are often the places where floods kill the most people. "Global prediction of extreme floods in ungauged watersheds" (Nearing et al., *Nature* 627, published 20 March 2024; authors from Google Research with ECMWF hydrologists among the co-authors) describes a single machine-learning model trained on 5,680 gauges worldwide that forecasts river discharge for any catchment from meteorological forecasts and static catchment attributes, with no local calibration.

The model is an LSTM encoder-decoder: one LSTM reads a historical sequence of weather and geophysical inputs, a second rolls forward over a 7-day forecast horizon, and the output is a probability distribution over discharge. It was evaluated out-of-sample on gauges held out of training, so the scores measure performance in basins the model has never seen. The paper's headline: the model achieves "reliability in predicting extreme riverine events in ungauged watersheds at up to a five-day lead time" that is "similar to or better than" the reliability of nowcasts (zero-day lead) from the Copernicus Global Flood Awareness System (GloFAS), the operational state of the art. On 5-year return-period floods it matches or beats GloFAS's accuracy on 1-year events, and it improved on GloFAS at 70% of gauges for 2-year return-period events. Trained models were released on Zenodo under CC BY 4.0.

This was already a deployment, not a proposal. On the day of publication Google reported that Flood Hub, the public site built on the model, covered 80 countries and 460 million people with forecasts up to seven days ahead. On 11 November 2024 Google announced a retrained model (15,980 gauges, up from 5,680) whose "performance at a 7-day lead time is similar to the 5-day lead time performance of our previous model," expanded coverage to more than 100 countries and 700 million people, and added roughly 250,000 "virtual gauge" forecast points across 150 countries, an API pilot, and the Google Runoff Reanalysis & Reforecast dataset. Google's flood forecasting site currently states coverage of 2 billion people in over 150 countries, with riverine forecasts up to 7 days ahead and flash-flood forecasts up to 24 hours ahead, delivered through Search, Maps and Android notifications.

## Why it matters
Flood early warning is one of the highest-value applications of weather prediction, and the bottleneck was never the meteorology alone: it was the hydrology in places with no data. Showing that a model trained where gauges exist transfers to basins where they do not, and then running it at global scale for the public, converts a long-standing research problem in hydrology (prediction in ungauged basins) into an operating service. It is the hydrological counterpart to what [GraphCast](../graphcast-weather/) and [AIFS](../ai-weather-models-operational/) did for the atmosphere, with the added feature that the users are often people who previously had no forecast at all.

## Sources — the record of the discovery
- [Nearing et al., "Global prediction of extreme floods in ungauged watersheds," Nature 627 (20 March 2024)](https://www.nature.com/articles/s41586-024-07145-1)
- [arXiv 2307.16104: AI Increases Global Access to Reliable Flood Forecasts (preprint)](https://arxiv.org/abs/2307.16104)
- [Google blog, 20 March 2024: How we're using AI to expand global access to reliable flood forecasts](https://blog.google/technology/ai/google-ai-global-flood-forecasting/)
- [Google Research blog, 11 November 2024: An improved flood forecasting AI model, trained and evaluated globally](https://research.google/blog/a-flood-forecasting-ai-model-trained-and-evaluated-globally/)
- [Google blog, 11 November 2024: expanding flood forecasting coverage and helping partners](https://blog.google/innovation-and-ai/products/expanding-flood-forecasting-coverage-helping-partners/)
- [Google Research: Flood Forecasting project page (current coverage figures)](https://sites.research.google/gr/floodforecasting/)

---
*In this folder: **[PROMPT.md](./PROMPT.md)** (a prompt to explore it with AI) · **[CONTEXT.md](./CONTEXT.md)** (background & caveats). Part of the [AI Hall of Fame](../../README.md) → [🌍 Climate & Earth Science](../).*
