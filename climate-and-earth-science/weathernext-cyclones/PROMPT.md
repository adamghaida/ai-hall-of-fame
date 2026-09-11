# 🤖 Explore this with AI: WeatherNext Cyclones and the National Hurricane Center

Paste the prompt below into your favorite AI assistant (Claude, ChatGPT, Gemini, or a local model). If your assistant can browse the web, tell it to read the sources first. The point is a clear, honest, grounded explanation of what happened and why it mattered.

> Google DeepMind's cyclone model cut 5-day track error to 230 km against 370 km for ECMWF's ensemble, fed live guidance to the National Hurricane Center through the 2025 season, and was then published in Nature and open-sourced.

---

```text
You are a sharp, honest explainer of weather science and machine learning. Walk me through a specific, real AI achievement so I actually understand it, not just the headline.

Topic: WeatherNext Cyclones, Google DeepMind's tropical cyclone forecasting model (Alet et al., "Operational tropical cyclone forecasting with AI," Nature, 6 August 2026), its use by the US National Hurricane Center in the 2025 season, and its open-source release.

Please cover, in plain language a curious non-expert can follow:
1. Why cyclone track and intensity are different problems, why intensity and rapid intensification were the hard part for both physics-based and earlier AI models, and what agencies like NHC use today (global ensembles such as ECMWF ENS, regional models such as NOAA's HAFS, consensus aids, human forecasters).
2. How WN-C works: joint training on ECMWF global analyses and the IBTrACS archive of nearly 5,000 cyclones, a 0.25-degree grid with 6-hour steps out to 15 days, about 180 million parameters, four independently trained models, and 50-member (later 1,000-member) ensembles initialised from ECMWF analyses.
3. The paper's numbers and the baselines for each: 5-day track error of 230 km vs 370 km for ENS and 335 km for GenCast (about 30 hours of lead time); 3-day intensity 3.75 kt better than HAFS; better 34-kt wind radii than ENS and HAFS; rapid-intensification CSI from below 0.3 to 0.5; "an average lead-time advantage of 1 day or more" on 2023-2025 cyclones.
4. The operational story: Weather Lab (12 June 2025), live experimental guidance to NHC in 2025, Hurricane Melissa (80% probability of a Category 5 landfall in Jamaica five days out, from a Category 1 storm), and what NHC's own 2025 verification report found about the Google DeepMind ensemble mean versus the official forecast. Keep the agency's verification separate from DeepMind's claims.
5. The open-source release: what is in github.com/google-deepmind/weathernext, the licences (Apache 2.0 code, CC BY 4.0 for other materials), and the fact that the exact 2025 operational checkpoint is included.
6. The honest caveats: experimental guidance rather than the official forecast; most figures are the authors' own; comparisons in the paper are against ENS and HAFS rather than NHC's official forecast; wind speed precision bounded by coarse training data; RI improved but not solved; three test seasons; rainfall, surge and gusts not covered.
7. What you would want to see over the next few seasons, and what to read next.

Ground your answer in these sources (read them if you can, and cite them as you go):
- Nature paper: https://www.nature.com/articles/s41586-026-10953-2
- DeepMind blog, August 2026 release: https://deepmind.google/blog/weathernext-ai-model-achieves-breakthrough-in-forecasting-cyclones/
- Code and weights: https://github.com/google-deepmind/weathernext
- DeepMind blog, Weather Lab launch, June 2025: https://deepmind.google/blog/how-were-supporting-better-tropical-cyclone-prediction-with-ai/
- DeepMind blog, Hurricane Melissa: https://deepmind.google/blog/how-weathernext-helped-the-national-hurricane-center-better-predict-hurricane-melissas-historic-landfall-in-jamaica/
- NHC 2025 verification report: https://www.nhc.noaa.gov/verification/pdfs/Verification_2025.pdf

Be concrete, use real numbers where they matter, say whose number each one is, and if you are unsure about a detail, say so instead of guessing.
```

## Bonus: run the released model

The weights and code are public, and the smallest variant is meant to run on free Colab hardware:

```text
Open https://github.com/google-deepmind/weathernext, install the package at the tagged version the README gives (pip install git+https://github.com/google-deepmind/weathernext.git@v0.3.0 at the time of writing), and run the quick-start Colab with the WeatherNext Cyclones Mini checkpoint. List the checkpoints the repository documents (including the one labelled as used operationally in the 2025 Atlantic season), where the weights are hosted, and what the LICENSE files say for code and for weights. Produce a short ensemble cyclone forecast from a sample initial condition and describe the outputs (track, maximum wind, wind radii). Do not report skill from one case; the point is to confirm the artifact is real, runnable and licensed as claimed.
```

---

## Sources
- [Alet et al., Operational tropical cyclone forecasting with AI, Nature (6 August 2026)](https://www.nature.com/articles/s41586-026-10953-2)
- [Google DeepMind blog: WeatherNext AI model achieves breakthrough in forecasting cyclones](https://deepmind.google/blog/weathernext-ai-model-achieves-breakthrough-in-forecasting-cyclones/)
- [github.com/google-deepmind/weathernext](https://github.com/google-deepmind/weathernext)
- [Google DeepMind blog: How we're supporting better tropical cyclone prediction with AI](https://deepmind.google/blog/how-were-supporting-better-tropical-cyclone-prediction-with-ai/)
- [Google DeepMind blog: WeatherNext and Hurricane Melissa](https://deepmind.google/blog/how-weathernext-helped-the-national-hurricane-center-better-predict-hurricane-melissas-historic-landfall-in-jamaica/)
- [NHC Forecast Verification Report, 2025 hurricane season](https://www.nhc.noaa.gov/verification/pdfs/Verification_2025.pdf)

---
*Back to **[README.md](./README.md)** · **[CONTEXT.md](./CONTEXT.md)**.*
