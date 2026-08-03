# 🤖 Explore this with AI: AI weather models go operational at national forecasting agencies

Paste the prompt below into your favorite AI assistant (Claude, ChatGPT, Gemini, or a local model). If your assistant can browse the web, tell it to read the sources first. The point is a clear, honest, grounded explanation of what happened and why it mattered.

> NOAA put an AI-based global forecast suite into daily operations, including the first hybrid AI-plus-physics ensemble at an operational weather center. In the 2025 hurricane season, an AI model had lower track error than the National Hurricane Center's own official forecast at several lead times.

---

```text
You are a sharp, honest explainer of weather science and machine learning. Walk me through a specific, real operational milestone so I actually understand it, not just the headline.

Topic: AI weather prediction models crossing from research into daily operations at national forecasting agencies, and how they performed in the 2025 Atlantic and eastern North Pacific hurricane seasons.

Please cover, in plain language a curious non-expert can follow:

1. What "operational" actually means at a weather agency, and why it is a much higher bar than a good score in a research paper. Explain the evaluation-then-implementation process NOAA/NCEP used and what a Service Change Notice is.

2. The three NOAA models that went live on December 17, 2025: AIGFS (deterministic), AIGEFS (31-member AI ensemble), and HGEFS (a 62-member hybrid combining 31 AIGEFS members with 31 physics-based GEFSv12 members). Cover what each one is for, the compute numbers NOAA published, and the fact that NOAA built them on Google DeepMind's GraphCast and fine-tuned them with NOAA's own Global Data Assimilation System analyses.

3. Why the HGEFS result is the scientifically interesting one: NOAA reports the hybrid consistently outperforms BOTH the physics-only and the AI-only ensembles. Explain why mixing two systems with different error characteristics can beat either alone, and what that implies about "AI replacing physics".

4. ECMWF's parallel path: AIFS Single v1 operational on 25 February 2025 and the 51-member AIFS ENS on 1 July 2025.

5. The hurricane verification. Read the NHC 2025 Forecast Verification Report and report exactly what it says about GDMI (the Google DeepMind ensemble mean) versus OFCL (the NHC official forecast) for Atlantic track, eastern North Pacific track, and Atlantic intensity. Quote the report's own numbers from the homogeneous comparison tables rather than paraphrasing news coverage.

6. The honest caveats, spelled out:
   - AI models are trained on and initialised from physics-based reanalysis and data assimilation, so they depend on the conventional forecasting system rather than replacing it.
   - They are typically better at cyclone track than at intensity. NOAA explicitly says AIGFS v1.0 degrades tropical cyclone intensity forecasts relative to the traditional GFS.
   - Rare or extreme events are underrepresented in training data, which is exactly where forecasts matter most.
   - GDMI was not available for the whole 2025 season, so the homogeneous comparison excludes some early storms.
   - NHC's report still finds the official forecast generally outperformed most models and was more consistent from cycle to cycle, and NHC's own science operations officer stresses that humans stay in the loop.

7. What you would want to see over the next few seasons before calling this settled.

Ground your answer in these sources (read them if you can, and cite them as you go):
- NOAA news release: https://www.noaa.gov/news-release/noaa-deploys-new-generation-of-ai-driven-global-weather-models
- NWS Service Change Notice 25-89: https://www.weather.gov/media/notification/pdf_2025/scn25-89_AIGFS_AIGEFS_and_HGEFS.pdf
- NHC Forecast Verification Report, 2025 hurricane season: https://www.nhc.noaa.gov/verification/pdfs/Verification_2025.pdf
- NWS Q&A with NHC Science Operations Officer Wallace Hogsett: https://www.weather.gov/news/261102-AI-Hurricane-Forecasting
- ECMWF AIFS Single v1 operational: https://www.ecmwf.int/en/about/media-centre/news/2025/ecmwfs-ai-forecasts-become-operational
- ECMWF AIFS ENS operational: https://www.ecmwf.int/en/about/media-centre/news/2025/ecmwfs-ensemble-ai-forecasts-become-operational
- Google DeepMind on tropical cyclone prediction: https://deepmind.google/blog/how-were-supporting-better-tropical-cyclone-prediction-with-ai/

Be concrete, clearly separate what an agency verified from what a model developer claimed, and if you are unsure about a detail, say so instead of guessing.
```

## Bonus: have the agent check the numbers itself

The verification report contains homogeneous error tables, so the central claim is checkable rather than a matter of opinion:

```
Open https://www.nhc.noaa.gov/verification/pdfs/Verification_2025.pdf and find Table 2 (Atlantic track), Table 4 (Atlantic intensity), Table 6 (eastern North Pacific track), and Table 8 (eastern North Pacific intensity) for the 2025 season. For each table, list the mean errors for OFCL and GDMI at 12, 24, 48, 72, 96, and 120 hours, and state at which lead times GDMI beat the official NHC forecast. Then check the sample sizes ("Forecasts" row) and tell me whether the differences look large relative to the sample. Finally, note anything in the report's text that qualifies the comparison.
```

---

## Sources
- [NOAA news release: NOAA deploys new generation of AI-driven global weather models](https://www.noaa.gov/news-release/noaa-deploys-new-generation-of-ai-driven-global-weather-models)
- [NWS Service Change Notice 25-89 (AIGFS, AIGEFS, HGEFS)](https://www.weather.gov/media/notification/pdf_2025/scn25-89_AIGFS_AIGEFS_and_HGEFS.pdf)
- [NHC Forecast Verification Report, 2025 Hurricane Season](https://www.nhc.noaa.gov/verification/pdfs/Verification_2025.pdf)
- [NWS Q&A: AI in Hurricane Forecasting at the National Hurricane Center](https://www.weather.gov/news/261102-AI-Hurricane-Forecasting)
- [ECMWF: AIFS Single v1 becomes operational](https://www.ecmwf.int/en/about/media-centre/news/2025/ecmwfs-ai-forecasts-become-operational)
- [ECMWF: ensemble AI forecasts become operational](https://www.ecmwf.int/en/about/media-centre/news/2025/ecmwfs-ensemble-ai-forecasts-become-operational)
- [Google DeepMind: supporting better tropical cyclone prediction with AI](https://deepmind.google/blog/how-were-supporting-better-tropical-cyclone-prediction-with-ai/)

---
*Back to **[README.md](./README.md)** · **[CONTEXT.md](./CONTEXT.md)**.*
