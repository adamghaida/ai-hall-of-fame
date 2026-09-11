# 🤖 Explore this with AI: Pangu-Weather

Paste the prompt below into your favorite AI assistant (Claude, ChatGPT, Gemini, or a local model). If your assistant can browse the web, tell it to read the sources first. The point is a clear, honest, grounded explanation of what happened and why it mattered.

> A transformer trained on 39 years of reanalysis data reported lower forecast error than ECMWF's operational system on every tested variable, in 1.4 seconds on one GPU.

---

```text
You are a sharp, honest explainer of weather science and machine learning. Walk me through a specific, real AI achievement so that I actually understand it, not just the headline.

Topic: Pangu-Weather (Huawei Cloud, Nature, 5 July 2023), the first deep-learning model reported to beat ECMWF's operational Integrated Forecasting System on deterministic medium-range forecast skill.

Please cover, in plain language a curious non-expert can follow:
1. What numerical weather prediction is, why it is expensive, and why earlier AI models (for example FourCastNet) were fast but not accurate enough. Use the paper's own numbers: 5-day Z500 RMSE of 484.5 for FourCastNet against 333.7 for the operational IFS.
2. The two core ideas: the 3D Earth-specific transformer (why treat the atmosphere as a 3D volume, and what the "Earth-specific priors" are) and hierarchical temporal aggregation (four models for 1-, 3-, 6- and 24-hour steps, composed to reach any lead time with the fewest steps). Explain why fewer autoregressive steps means less accumulated error.
3. The results as the paper reports them: trained on 39 years of ERA5 (1979 to 2017) at 0.25 degrees, tested on 2018; lower RMSE than the operational IFS on every tested variable, typically about 10% lower; 5-day Z500 RMSE 296.7 against 333.7; 1.4 s inference on a single GPU, "more than 10,000-times faster"; and tracking of 88 named 2018 tropical cyclones with 3-day and 5-day position errors of 120.29 km and 195.65 km against 162.28 km and 272.10 km for ECMWF-HRES.
4. What ECMWF found when it ran the model itself ("The rise of data-driven weather forecasting"): comparable skill on global metrics and extremes, but increasing smoothness and bias drift with lead time.
5. The honest caveats: all headline scores are on reanalysis rather than an operational setting; the authors themselves call the cyclone comparison with HRES "somewhat unfair" because HRES used IFS initial conditions while Pangu-Weather used reanalysis; smoother fields and heavier underestimation of extremes at longer leads; no precipitation; an underdispersive initial-perturbation ensemble; a non-commercial licence; and the fact that GraphCast's preprint followed within weeks and reported stronger results.
6. Where this sits in the lineage: what changed between this paper and ECMWF making its own AI model (AIFS) fully operational in February 2025.

Ground your answer in these sources (read them if you can, and cite them as you go):
- Nature paper: https://www.nature.com/articles/s41586-023-06185-3
- arXiv preprint (November 2022): https://arxiv.org/abs/2211.02556
- GitHub release (weights and inference code): https://github.com/198808xc/Pangu-Weather
- ECMWF assessment, "The rise of data-driven weather forecasting": https://arxiv.org/abs/2307.10128

Be concrete, use real numbers where they matter, distinguish what the authors claimed from what an independent centre verified, and if you are unsure about a detail, say so instead of guessing.
```

## Bonus: run the model yourself

The trained models are public, so the central claim (a global 0.25° forecast in seconds on one GPU, or minutes on a CPU) is checkable. The repository ships ONNX files for the 1-, 3-, 6- and 24-hour networks (about 1.1 GB each), an example input, and `inference_cpu.py` / `inference_gpu.py`.

```
Read https://github.com/198808xc/Pangu-Weather. Following its README, download the 24-hour ONNX model and the example input arrays, install onnxruntime, and run the CPU inference script to produce a single 24-hour global forecast. Report the wall-clock time and the output array shapes (upper-air: 5 x 13 x 721 x 1440; surface: 4 x 721 x 1440). Then explain what you would need (ERA5 or ECMWF initial fields, and the licence terms, which forbid commercial use) to reproduce the paper's 2018 RMSE comparison against the operational IFS.
```

---

## Sources
- [Nature paper: Accurate medium-range global weather forecasting with 3D neural networks](https://www.nature.com/articles/s41586-023-06185-3)
- [arXiv preprint: Pangu-Weather (November 2022)](https://arxiv.org/abs/2211.02556)
- [GitHub: trained models, inference code, pseudocode](https://github.com/198808xc/Pangu-Weather)
- [ECMWF: The rise of data-driven weather forecasting](https://arxiv.org/abs/2307.10128)

---
*Back to **[README.md](./README.md)** · **[CONTEXT.md](./CONTEXT.md)**.*
