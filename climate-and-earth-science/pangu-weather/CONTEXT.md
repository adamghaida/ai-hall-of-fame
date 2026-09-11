# 📚 Context: Pangu-Weather

**The problem.** Numerical weather prediction (NWP) represents the atmosphere as a grid and integrates the equations of fluid dynamics forward in time. It is the most accurate forecasting method there is, and it is expensive: a single deterministic run of ECMWF's Integrated Forecasting System (IFS) takes hours on a supercomputer. Learned models had shown they could be orders of magnitude faster, but as of 2022 the best of them, NVIDIA's FourCastNet, was still far behind on accuracy (5-day Z500 RMSE 484.5 against 333.7 for the operational IFS, as quoted in the Pangu-Weather paper). The open question was whether a neural network could match NWP accuracy at all.

**The people.** Kaifeng Bi, Lingxi Xie, Hengheng Zhang, Xin Chen, Xiaotao Gu and Qi Tian, all at Huawei Cloud in Shenzhen. "Pangu" is the name of a series of Huawei Cloud pre-trained models; the paper notes the name refers to a figure in Chinese mythology. The preprint appeared on arXiv on 3 November 2022 and the paper was published in *Nature* on 5 July 2023 (an author correction followed on 14 September 2023).

**How it works.** Two ideas carry the result.
1. *3D Earth-specific transformer (3DEST).* Rather than flattening the atmosphere into 2D images, Pangu-Weather treats the 13 pressure levels plus the surface as a 3D volume and runs a Swin-style shifted-window transformer over it. Each window gets its own learned bias term ("Earth-specific priors"), so the network knows where on the sphere and at what height a patch sits, which matters because the physics differs with latitude and altitude.
2. *Hierarchical temporal aggregation.* Autoregressive models accumulate error at every step. Instead of one 6-hour model called repeatedly, the team trained four networks with forecast intervals of 1, 3, 6 and 24 hours and, for any target lead time, composed the fewest steps possible (a 56-hour forecast is two 24-hour steps, one 6-hour step and two 1-hour steps). The paper says this is both faster and more accurate than FourCastNet's fixed 6-hour stepping, and discusses the strategy's limitation, temporal inconsistency between the models, in Methods.

Training used a roughly 60 TB subset of ERA5 from the Copernicus Climate Data Store; each of the four networks was trained on 1979 to 2017 data, validated on 2019 and tested on 2018.

**Uptake.** The released ONNX models allow forecasts from either ERA5 or ECMWF initial fields. ECMWF added Pangu-Weather to its experimental charts in 2023 and published a first statistical assessment in an operational-like context (Ben Bouallègue et al.), which found comparable skill to the IFS on both global metrics and extreme events, while identifying increasing forecast smoothness and bias drift with lead time as drawbacks. That report's framing, a "new NWP paradigm" that relies on ML inference plus state-of-the-art analysis and reanalysis datasets for initialisation and training, is the framing under which ECMWF's own AIFS was later built and under which [AI models now run operationally](../ai-weather-models-operational/).

## Why it's in the Hall of Fame
It is the first peer-reviewed demonstration that a learned model could report better deterministic skill than the world's leading operational NWP system, on every variable tested, at four orders of magnitude lower cost. The wave that followed ([GraphCast](../graphcast-weather/), [GenCast](../gencast-ensemble-weather/), Aurora, AIFS) is measured against the bar this paper set.

## Honest caveats
- **Reanalysis, not operations.** All headline scores are computed on ERA5 reanalysis with ERA5 initial conditions. The paper says so plainly: "Pangu-Weather was trained and tested on reanalysis data, but real-world forecast systems work on observational data." Operational forecasts are initialised from a data-assimilation analysis, and the model's performance in that setting was not established in the paper. ECMWF's later assessment addressed exactly this gap.
- **The HRES cyclone comparison favours Pangu-Weather.** The authors write that the tropical-cyclone comparison with ECMWF-HRES "is somewhat unfair, because ECMWF-HRES used the IFS initial condition data as its input, whereas Pangu-Weather used reanalysis data." Reanalysis benefits from observations after the initial time; a real-time forecast cannot.
- **Smoothness and extremes.** Pangu-Weather produces smoother fields than the IFS, and the paper reports that both systems underestimate extremes, with Pangu-Weather suffering "heavier underestimation as the lead time increases." ECMWF's independent evaluation confirmed the smoothing and added bias drift with lead time.
- **No precipitation.** The model forecasts 69 upper-air and surface fields but not precipitation, which the authors list as a limitation for small-scale extreme events such as tornado outbreaks.
- **A crude ensemble.** The 100-member ensemble in the paper is built by adding random perturbations to the initial state and averaging; the authors report its spread-skill ratio is below 1 (underdispersive). Proper probabilistic AI forecasting arrived later with [GenCast](../gencast-ensemble-weather/).
- **"First" is a close call.** The arXiv preprint (November 2022) preceded GraphCast's (December 2022) by a few weeks, and the *Nature* paper (July 2023) preceded GraphCast's *Science* paper (November 2023), which reported stronger results on more targets. Pangu-Weather is the first published; it was not the best for long.
- **Licence.** The released weights are CC BY-NC-SA 4.0: commercial use is forbidden, and the GitHub README notes the ERA5-derived training data carries its own usage terms.

## Sources
- [Nature paper: Accurate medium-range global weather forecasting with 3D neural networks](https://www.nature.com/articles/s41586-023-06185-3)
- [arXiv preprint: Pangu-Weather (November 2022)](https://arxiv.org/abs/2211.02556)
- [GitHub: trained models, inference code, pseudocode](https://github.com/198808xc/Pangu-Weather)
- [ECMWF: The rise of data-driven weather forecasting (arXiv 2307.10128; later published in BAMS)](https://arxiv.org/abs/2307.10128)
- [Huawei: Pangu-Weather forecasts available on ECMWF's website (3 August 2023)](https://www.huawei.com/en/news/2023/8/pangu-weather-forcast)

---
*Back to **[README.md](./README.md)** · **[PROMPT.md](./PROMPT.md)**.*
