# 📚 Context: AIFS, ECMWF's operational machine-learning forecast model

**Who ECMWF is.** The European Centre for Medium-Range Weather Forecasts is an intergovernmental organisation whose Integrated Forecasting System (IFS) is widely treated as the strongest global medium-range model. When Pangu-Weather (2023) and [GraphCast](../graphcast-weather/) (2023) reported beating the IFS on ERA5 reanalysis, ECMWF was the organisation with the most to lose and the best position to check. It did both: it ran the external models experimentally, and it built its own.

**The model.** AIFS is described in Lang et al. (arXiv 2406.01465, first posted 3 June 2024; authors include Simon Lang, Mihai Alexe, Matthew Chantry, Peter Dueben, Andrew Brown, Florian Pappenberger and Florence Rabier). It uses a graph neural network to encode the input state and decode the output, with a sliding-window transformer in between, and predicts six hours ahead from the two most recent states. Pre-training used ERA5 for 1979 to 2022; a rollout fine-tuning stage used ECMWF's real-time operational analyses for 2016 to 2022 so that the model sees the kind of input it will get in operations. The software stack is ECMWF's open-source Anemoi framework.

**From experiment to operations.** Experimental versions (v0.2, v0.2.1) ran alongside the IFS through 2024. AIFS Single v1 was implemented on the 25 February 2025 06 UTC run: 15-day deterministic forecasts, four cycles a day, N320 grid, 13 pressure levels, and a broader set of surface outputs than the experimental versions (100 m wind, snowfall, radiation, soil fields). ECMWF's news release quotes Director-General Florence Rabier and Director of Forecasts and Services Florian Pappenberger, and frames AIFS and IFS as complementary. AIFS ENS, a 51-member ensemble at about 31 km, followed on 1 July 2025, with Director of Research Andy Brown also quoted. ECMWF says the physics-based system "remains indispensable for high-resolution fields and coupled Earth-system processes" and that it is exploring hybrid approaches.

**Openness.** This is the most distinctive part of the release. The weights for AIFS Single v1.0 are on Hugging Face under CC BY 4.0 (checkpoint `aifs_single_v1.0.ckpt`, about 1.19 GB), with an example notebook that runs the model from ECMWF open data using the `anemoi-inference` package. ECMWF removed the standard dissemination delay on its Open Data platform for AIFS output. A national or international centre publishing an operational model's trained weights is unusual.

**Relation to other entries.** The [operational-weather entry](../ai-weather-models-operational/) tells the NOAA story (AIGFS, AIGEFS and the hybrid HGEFS, December 2025) and the National Hurricane Center's 2025 verification; it mentions AIFS as the earlier milestone. This entry is the ECMWF side: what the model is, what its own centre says it does well and badly, and what "fully operational" meant in practice.

## Why it's in the Hall of Fame
The organisation that runs the world's reference forecast system added a machine-learned model to its operational suite, with public verification, public weights and a public list of known defects. That is the strongest available form of the claim that learned weather models work: not a paper's scorecard, but a forecasting centre staking its schedule on one.

## Honest caveats
- **"Many measures" is not "all measures."** ECMWF's own wording is that AIFS outperforms physics-based models "for many measures." The implementation notice records areas where it is worse or different: cloud cover tends toward intermediate values, so cloud images are less sharp than IFS or observations; solar radiation forecasts are "less active" than IFS; there is no snow-depth parameter; soil moisture is hard to verify at all; for 100 m wind speed AIFS has lower mean squared error but a larger mean bias than IFS.
- **Tropical cyclone intensity.** The track gains are real, but the notice says "the strong underestimation of intensity continues to exist," inherited from the resolution of the training data. Track, not intensity, is the AI strength here as elsewhere.
- **Coarser than the IFS.** AIFS runs at roughly 30 km against the IFS's 9 km. ECMWF's own pages quote the spacing as 28 km (news release), about 31 km (Hugging Face card) and about 32 km (implementation notice, N320 grid); the entry gives the range rather than picking one.
- **Not independent of physics.** AIFS is trained on ERA5 and IFS analyses and initialised every cycle from ECMWF's physics-based data assimilation. It extends the conventional system rather than replacing it, which is also how ECMWF itself describes the relationship.
- **Operational teething.** The implementation page records that a v1.1 update ran into technical problems that forced a revert to v1.0 before v1.1 was re-implemented on 27 August 2025, and that "point rain artefacts" were identified in AIFS Single v1, attributed to an unphysical link between soil moisture and precipitation. Operational status did not mean the model was finished.
- **The percentages are ECMWF's.** The "up to 20%" cyclone-track gain and the "approximately 1,000 times" energy reduction come from ECMWF's own release, not from an independent audit. The independent verification of AI models in real forecasting that this collection has so far is the [NHC 2025 report](../ai-weather-models-operational/), which evaluated other systems.

## Sources
- [ECMWF news: ECMWF's AI forecasts become operational](https://www.ecmwf.int/en/about/media-centre/news/2025/ecmwfs-ai-forecasts-become-operational)
- [ECMWF implementation notice: Implementation of AIFS Single v1](https://confluence.ecmwf.int/display/fcst/Implementation+of+AIFS+Single+v1)
- [Lang et al., AIFS - ECMWF's data-driven forecasting system (arXiv 2406.01465)](https://arxiv.org/abs/2406.01465)
- [ecmwf/aifs-single-1.0 on Hugging Face](https://huggingface.co/ecmwf/aifs-single-1.0)
- [ECMWF news: ECMWF's ensemble AI forecasts become operational](https://www.ecmwf.int/en/about/media-centre/news/2025/ecmwfs-ensemble-ai-forecasts-become-operational)

---
*Back to **[README.md](./README.md)** · **[PROMPT.md](./PROMPT.md)**.*
