# WeatherNext Cyclones: a full extra day of hurricane warning, verified with the National Hurricane Center

**Field:** 🌍 Climate & Earth Science  ·  **When:** August 2026 · Nature

> Google DeepMind's cyclone model cut 5-day track error to 230 km against 370 km for ECMWF's ensemble, beat NOAA's HAFS on intensity, fed live guidance to the National Hurricane Center through the 2025 season including Hurricane Melissa's Category 5 landfall in Jamaica, and was then published in Nature and open-sourced.

## What happened
On 6 August 2026 *Nature* published "Operational tropical cyclone forecasting with AI" (Alet, Andersson, Price et al.; last author Peter Battaglia), describing **WeatherNext Cyclones (WN-C)**, an ensemble model that forecasts a cyclone's track, maximum wind speed and wind-field size up to 15 days ahead. WN-C was trained jointly on decades of ECMWF global atmospheric analyses and on the IBTrACS archive of nearly 5,000 observed cyclones. It runs on a 0.25° grid in 6-hour steps, has about 180 million parameters, is built as four independently trained models, and is initialised from ECMWF's operational analysis. The standard ensemble is 50 members; the paper also evaluates ensembles up to 1,000.

Evaluated on cyclones from 2023 to 2025, the paper reports that WN-C offers "an average lead-time advantage of 1 day or more over leading operational models." The headline figures:
- **Track.** At 5 days, "WN-C has an average error of 230 km" against **370 km for ECMWF ENS**, the leading physics-based ensemble, and 335 km for [GenCast](../gencast-ensemble-weather/). That is a lead-time advantage of just over 30 hours over ENS. The 140 km gap matches what DeepMind reported when it launched **Weather Lab** on 12 June 2025 on the 2023 to 2024 seasons.
- **Intensity.** The 3-day mean intensity forecast is 3.75 kt more accurate than NOAA's regional HAFS model, which the authors compare to the progress physics-based models made over the previous ten years.
- **Size.** For the 34-kt wind radii, WN-C has significantly lower extent errors than both ENS and HAFS.

The operational part is what earns the title. From June 2025 DeepMind published real-time predictions on Weather Lab, and experimental WN-C forecasts were provided to the **National Hurricane Center**, whose forecasters, the paper says, had "already begun incorporating its guidance into their official forecast process." NHC's own 2025 verification report found the Google DeepMind ensemble mean slightly better than the official NHC forecast on Atlantic track at 12 to 72 hours (see the [operational-weather entry](../ai-weather-models-operational/)). For **Hurricane Melissa** (October 2025), DeepMind reports the model gave 80% probability of a Category 5 landfall in Jamaica five days ahead, rising to near certainty three days out, from a storm that was still Category 1; Melissa became the strongest hurricane on record to strike Jamaica.

With the paper, DeepMind open-sourced the models at github.com/google-deepmind/weathernext (code under Apache 2.0, other materials under CC BY 4.0), including the exact checkpoint used operationally in 2025 and a lightweight 1° variant that runs in a free Colab notebook. For 2026 the ensemble was scaled to 1,000 members.

## Why it matters
Cyclone forecasts are where forecast skill converts most directly into lives and evacuations. Track error had been shrinking slowly for decades; WN-C's gain against ENS is the size of roughly a decade of that progress, and, unlike most AI weather results, it was tested live by the agency that issues the warnings, verified in that agency's annual report, and then published with the code. It also breaks the pattern that AI models win on track but not intensity: WN-C beats a dedicated regional intensity model on intensity too. The work was done with NHC, NOAA, CIRA and the UK Met Office, not around them.

## Sources — the record of the discovery
- [Alet et al., "Operational tropical cyclone forecasting with AI," Nature (6 August 2026)](https://www.nature.com/articles/s41586-026-10953-2)
- [Google DeepMind blog: WeatherNext AI model achieves breakthrough in forecasting cyclones (6 August 2026)](https://deepmind.google/blog/weathernext-ai-model-achieves-breakthrough-in-forecasting-cyclones/)
- [Code and weights: github.com/google-deepmind/weathernext (Apache 2.0 / CC BY 4.0)](https://github.com/google-deepmind/weathernext)
- [Google DeepMind blog: Weather Lab launch and the NHC partnership (12 June 2025)](https://deepmind.google/blog/how-were-supporting-better-tropical-cyclone-prediction-with-ai/)
- [Google DeepMind blog: WeatherNext and Hurricane Melissa's landfall in Jamaica (19 May 2026)](https://deepmind.google/blog/how-weathernext-helped-the-national-hurricane-center-better-predict-hurricane-melissas-historic-landfall-in-jamaica/)
- [NHC Forecast Verification Report, 2025 hurricane season](https://www.nhc.noaa.gov/verification/pdfs/Verification_2025.pdf) — the independent agency verification

---
*In this folder: **[PROMPT.md](./PROMPT.md)** (a prompt to explore it with AI) · **[CONTEXT.md](./CONTEXT.md)** (background & caveats). Part of the [AI Hall of Fame](../../README.md) → [🌍 Climate & Earth Science](../).*
