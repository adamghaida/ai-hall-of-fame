# AI weather models go operational at national forecasting agencies

**Field:** 🌍 Climate & Earth Science  ·  **When:** December 2025 · NOAA/NCEP

> NOAA put an AI-based global forecast suite into daily operations, including the first hybrid AI-plus-physics ensemble at an operational weather center. In the 2025 hurricane season, an AI model had lower track error than the National Hurricane Center's own official forecast at several lead times.

## What happened
Effective **December 17, 2025** with the 1200 UTC cycle, NOAA/NWS **National Centers for Environmental Prediction** implemented three new operational models: **AIGFS v1.0** (AI Global Forecast System, deterministic), **AIGEFS v1.0** (a 31-member AI ensemble), and **HGEFS v1.0** (a 62-member "grand ensemble" pairing the 31 AIGEFS members with the 31 members of the physics-based GEFSv12). All run on a 0.25° global grid; AIGFS and AIGEFS go out to 384 hours, HGEFS to 240. NOAA states the models "are based on Google DeepMind's GraphCast model," fine-tuned on NOAA's own Global Data Assimilation System analyses.

The efficiency numbers are the headline: a single 16-day AIGFS forecast uses **0.3% of the computing resources** of the operational GFS and finishes in about **40 minutes**; AIGEFS needs **9%** of the compute of GEFS. The more interesting scientific result is HGEFS. NOAA reports that the hybrid **consistently outperforms both the physics-only GEFS and the AI-only AIGEFS** across most major verification metrics, and describes the hybrid as "a first-of-its kind approach for an operational weather center." NOAA also flags a real weakness: AIGFS v1.0 improves tropical cyclone *track* but **degrades** tropical cyclone *intensity* forecasts relative to the traditional GFS.

ECMWF crossed the same line earlier: **AIFS Single v1** became operational on **25 February 2025** (which ECMWF's implementation notice calls "the first machine-learning-driven forecast model to be made fully operational"), and the 51-member **AIFS ENS** followed on **1 July 2025**, producing forecasts more than 10 times faster than the physics-based system at roughly 1/1000th the energy.

Then came the season-long verification. The **NHC 2025 Forecast Verification Report** (published 30 March 2026) evaluated the **Google DeepMind ensemble mean (GDMI)** against the primary early guidance models (the report includes a model only if it was available at least two-thirds of the time, which excludes several) and against NHC's own official forecast (OFCL):
- **Atlantic track:** "there was one model, the Google DeepMind ensemble mean (GDMI), that slightly outperformed NHC at the shorter lead times from 12 to 72 h." At 72 h, GDMI averaged **66.5 n mi** of track error against OFCL's **81.4 n mi**.
- **Eastern North Pacific track:** GDMI "performed considerably better than all of the other individual models and beat the official forecast and all of the consensus aids at 48–120 h." At 120 h: **87.3 n mi** for GDMI against **111.9 n mi** for OFCL.
- **Atlantic intensity:** OFCL beat every model at 12 and 96 h and had "comparable skill with the best model, GDMI," at the other lead times.

NHC's report is careful about what this does and does not show: official forecasts still "generally outperformed most dynamical and consensus models," and its consistency analysis (Figures 10 and 37, a 2023-25 sample) finds OFCL more *consistent* cycle to cycle than GFSI, EMXI, UKMI, HCCA and the TVCA/TVCE consensus aids - a comparison that does not include GDMI, which did not exist before 2025. GDMI was also unavailable early in the season, so the homogeneous comparison excludes the first two Atlantic storms. And GDMI itself was experimental guidance in 2025, not an operational NHC model: NWS says it "was used experimentally during the 2025 season," and DeepMind labels the forecasts it supplied as "not official warnings."

## Why it matters
This is the chapter after [GraphCast](../graphcast-weather/) and [GenCast](../gencast-ensemble-weather/): the research models stopped being research. Two of the world's largest forecasting centers now run AI models in daily operations, forecasters at the National Hurricane Center used AI guidance to issue real warnings during a season with three Category 5 hurricanes, and an independent agency verification found the AI model competitive with or better than the human-plus-consensus benchmark on track.

The caveats matter as much as the result. These models are trained on and initialised from physics-based reanalysis and data assimilation, so they extend the conventional system rather than replace it. They are consistently stronger on track than on intensity. And the single most encouraging operational finding is not that AI won, but that the **hybrid** beat both pure approaches, which is an argument for combining physics and learning rather than picking one.

## Sources — the record of the discovery
- [NOAA news release: NOAA deploys new generation of AI-driven global weather models](https://www.noaa.gov/news-release/noaa-deploys-new-generation-of-ai-driven-global-weather-models)
- [NWS Service Change Notice 25-89 (AIGFS, AIGEFS, HGEFS implementation, effective 17 Dec 2025)](https://www.weather.gov/media/notification/pdf_2025/scn25-89_AIGFS_AIGEFS_and_HGEFS.pdf)
- [NHC Forecast Verification Report, 2025 Hurricane Season (30 March 2026)](https://www.nhc.noaa.gov/verification/pdfs/Verification_2025.pdf)
- [NWS Q&A: AI in Hurricane Forecasting at the National Hurricane Center](https://www.weather.gov/news/261102-AI-Hurricane-Forecasting)
- [ECMWF: AIFS Single v1 becomes operational (25 Feb 2025)](https://www.ecmwf.int/en/about/media-centre/news/2025/ecmwfs-ai-forecasts-become-operational)
- [ECMWF implementation notice: Implementation of AIFS Single v1](https://confluence.ecmwf.int/display/fcst/Implementation+of+AIFS+Single+v1) — source for the "first machine-learning-driven forecast model to be made fully operational" wording, the pre-operational test phase, and the "AIFS Single v1" name
- [ECMWF: ensemble AI forecasts become operational (1 July 2025)](https://www.ecmwf.int/en/about/media-centre/news/2025/ecmwfs-ensemble-ai-forecasts-become-operational)
- [Google DeepMind: supporting better tropical cyclone prediction with AI](https://deepmind.google/blog/how-were-supporting-better-tropical-cyclone-prediction-with-ai/)

---
*In this folder: **[PROMPT.md](./PROMPT.md)** (a prompt to explore it with AI) · **[CONTEXT.md](./CONTEXT.md)** (background & caveats). Part of the [AI Hall of Fame](../../README.md) → [🌍 Climate & Earth Science](../).*
