# Pangu-Weather: the first AI model to out-forecast ECMWF's operational system

**Field:** 🌍 Climate & Earth Science  ·  **When:** July 2023 · Nature

> A transformer trained on 39 years of reanalysis data reported lower forecast error than ECMWF's operational Integrated Forecasting System on every variable it was tested on, out to 7 days, while producing a forecast in 1.4 seconds on a single GPU: more than 10,000 times faster.

## What happened
On **5 July 2023**, *Nature* published "Accurate medium-range global weather forecasting with 3D neural networks" by **Kaifeng Bi, Lingxi Xie, Hengheng Zhang, Xin Chen, Xiaotao Gu and Qi Tian** of **Huawei Cloud**. Their system, **Pangu-Weather**, is a set of four 3D vision transformers (for 1-, 3-, 6- and 24-hour steps) with what the authors call **Earth-specific priors** (position-dependent bias terms that encode latitude, longitude and height), chained together by a **hierarchical temporal aggregation** scheme that reaches any lead time with the fewest possible model calls, limiting the build-up of error.

The model was trained on **39 years of ERA5 reanalysis (1979 to 2017)** at **0.25°** resolution, covering 5 upper-air variables on 13 pressure levels plus 4 surface variables (69 fields in total), validated on 2019 and tested on 2018. On that test year, evaluated against ERA5:

- For every tested variable, Pangu-Weather reported **lower RMSE and higher anomaly correlation** than the operational IFS and than FourCastNet, the strongest earlier AI model. The paper states RMSE was **typically about 10% lower than the operational IFS** and about 30% lower than FourCastNet, at all lead times from 1 h to 168 h.
- Headline number: **5-day Z500 (500 hPa geopotential) RMSE of 296.7**, against **333.7** for the operational IFS and **462.5** for FourCastNet.
- **Inference cost of 1.4 s on a single GPU**, which the paper describes as "more than 10,000-times faster than the operational IFS, which requires several hours in a supercomputer with hundreds of nodes."
- Tracking **88 named tropical cyclones of 2018** by following the minimum in mean sea-level pressure, the mean 3-day and 5-day position errors were **120.29 km and 195.65 km**, against **162.28 km and 272.10 km** for ECMWF-HRES.

The trained models (ONNX format), inference code and pseudocode were released on [GitHub](https://github.com/198808xc/Pangu-Weather) under a non-commercial licence, and ECMWF ran the model in its own experimental chart suite; an ECMWF team then published an independent assessment ("The rise of data-driven weather forecasting") that found "comparable skill for both global metrics and extreme events" against the IFS, alongside two drawbacks, increasing smoothness and bias drift with lead time.

## Why it matters
Before Pangu-Weather, AI weather models were fast but clearly less accurate than numerical weather prediction: the paper opens by noting FourCastNet's 5-day Z500 RMSE of 484.5 against 333.7 for the IFS. Pangu-Weather was the first peer-reviewed model to close that gap and go past it, on the operational system's own scorecard variables, and it did so at a cost that makes large ensembles almost free. It was also the first of these models that an operational centre picked up and ran: ECMWF's assessment of Pangu-Weather concluded that "a new NWP paradigm is emerging." [GraphCast](../graphcast-weather/) (preprint December 2022, published November 2023) and [GenCast](../gencast-ensemble-weather/) pushed the scores further, and ECMWF's own AIFS later became the first fully operational ML forecast model (see [AI weather models go operational](../ai-weather-models-operational/)). Pangu-Weather is the entry that made the rest plausible.

## Sources — the record of the discovery
- [Nature paper: Accurate medium-range global weather forecasting with 3D neural networks (5 July 2023)](https://www.nature.com/articles/s41586-023-06185-3)
- [arXiv preprint (3 November 2022): Pangu-Weather: A 3D High-Resolution Model for Fast and Accurate Global Weather Forecast](https://arxiv.org/abs/2211.02556)
- [GitHub release: trained ONNX models, inference code and pseudocode](https://github.com/198808xc/Pangu-Weather)
- [ECMWF independent assessment: The rise of data-driven weather forecasting (Ben Bouallègue et al., arXiv 2307.10128)](https://arxiv.org/abs/2307.10128)
- [Huawei announcement of Pangu-Weather forecasts on ECMWF's charts site (3 August 2023)](https://www.huawei.com/en/news/2023/8/pangu-weather-forcast)

---
*In this folder: **[PROMPT.md](./PROMPT.md)** (a prompt to explore it with AI) · **[CONTEXT.md](./CONTEXT.md)** (background & caveats). Part of the [AI Hall of Fame](../../README.md) → [🌍 Climate & Earth Science](../).*
