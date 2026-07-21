# 🛠️ How to recreate: GraphCast — 10-day global forecasts in under a minute

*This file is a practical starting point for reproducing or exploring the result — code, data, models, and (where one exists) the actual prompt or method. It is not official documentation; always defer to the primary sources.*

Open-sourced with weights: **github.com/google-deepmind/graphcast**. It learns to map the current atmospheric state to the state 6 hours later, then rolls that forward autoregressively for 10 days. Training data is the public **ERA5** reanalysis (Copernicus/ECMWF). Running the released model for inference is feasible on a single modern GPU/TPU.

## Primary sources & code
- [DeepMind blog](https://deepmind.google/discover/blog/graphcast-ai-model-for-faster-and-more-accurate-global-weather-forecasting/)
- [Science paper](https://www.science.org/doi/10.1126/science.adi2336)

---
*Back to **[README.md](./README.md)** · **[CONTEXT.md](./CONTEXT.md)**.*
