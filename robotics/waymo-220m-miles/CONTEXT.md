# 📚 Context: Waymo's safety record at 220 million driverless miles

**The lineage.** Waymo grew out of the Google self-driving car project (2009) and began carrying passengers with no safety driver in the Phoenix area in 2020. Its Safety Impact Hub, launched publicly in 2023, is updated quarterly with crash rates for "rider-only" miles, meaning trips with no Waymo employee in the vehicle. The methodology is a chain of Waymo-authored papers: a 2023 comparison at 7.1 million miles (arXiv:2312.12675), the 56.7-million-mile crash-type paper published in *Traffic Injury Prevention* in 2025, and the rolling hub, which stood at 220.6 million miles as of March 31, 2026.

**The people.** The peer-reviewed paper is by Kristofer D. Kusano, John M. Scanlon, Yin-Hsiu Chen, Timothy L. McMurry, Tilia Gode and Trent Victor. All are Waymo safety researchers; Victor previously led safety research at Volvo. Carol Flannagan of the University of Michigan Transportation Research Institute is quoted in Waymo's June 2026 post on the care taken over apples-to-apples comparisons, but she is not an author.

**How the comparison works.** Waymo counts every crash its vehicles are involved in, regardless of fault, using the same reporting it files under NHTSA's Standing General Order. For the human side it uses state police-reported crash records and vehicle-miles-travelled estimates for the counties it operates in, then adjusts for where within those counties its cars actually drive. Because police records miss a large share of minor injury crashes, Waymo inflates the human injury-crash count by a national underreporting estimate (32%). Freeway miles are excluded from both sides so the comparison is surface streets only. Rates are expressed as crashed vehicles per mile, and every figure on the hub carries a 95% confidence interval.

**Reading the two sets of numbers.** The hub's 94% / 82% / 82% / 93% figures are the latest and largest, but they are a company dashboard. The journal paper's 79% (any-injury) and 81% (airbag) figures are older and smaller, but they were peer-reviewed and, more usefully, broken into eleven crash types (vehicle-to-vehicle intersection, rear-end, pedestrian, cyclist, motorcycle, single-vehicle, secondary and so on), so a reader can see that the reductions are not driven by one easy category. The intersection result (96% fewer injury crashes) is the single biggest effect.

## Why it's in the Hall of Fame
Autonomous driving is the most consequential deployed application of learned perception and control, and "is it safer than a person" is its central empirical question. This is the first time that question has been answered at a scale where serious-injury and pedestrian-injury crashes are numerous enough to estimate with tight confidence intervals, on public roads, with paying riders, and with part of the analysis surviving peer review.

## Honest caveats
- **Waymo's own analysis.** Every number here was produced by Waymo employees from Waymo data. The peer-reviewed paper has Waymo-only authorship. No outside body has audited the underlying crash logs. Treat the figures as company-reported.
- **Peer review covers a quarter of the miles.** The journal paper stops at 56.7 million miles (January 2025). The 220-million-mile figures on the hub have not been through review, though they use the same published methodology.
- **The human benchmark is a model, not a measurement.** It depends on choices about geography weighting, the 32% underreporting correction, and county-level VMT estimates. Different reasonable choices would move the percentages. Waymo publishes its method, which is more than most operators do, but the benchmark is still constructed.
- **Surface streets only.** Freeway miles are excluded from the comparison, so this says nothing about highway safety.
- **Five metro areas, mostly sunbelt.** Phoenix alone accounts for 80 million of the miles. Weather, road design and driver populations elsewhere may differ.
- **Relative, not absolute.** "94% fewer serious-injury crashes" is a comparison to a benchmark rate, not a statement that serious crashes never happen. Waymo vehicles have been involved in injury crashes, and the company has issued software recalls.
- **Not-at-fault crashes are included on both sides**, which is the fairer choice but means the number partly measures how well the vehicle avoids being hit, not only how well it avoids hitting.

## Sources
- [Waymo Safety Impact Hub (data through March 31, 2026)](https://waymo.com/safety/impact/)
- [Waymo blog: safety data update, June 24, 2026](https://waymo.com/blog/shorts/safetydata-june26/)
- [Kusano et al., Traffic Injury Prevention, 2025](https://www.tandfonline.com/doi/full/10.1080/15389588.2025.2499887) · [DOI 10.1080/15389588.2025.2499887](https://doi.org/10.1080/15389588.2025.2499887)
- [Same paper, open-access preprint (arXiv:2505.01515)](https://arxiv.org/abs/2505.01515)

---
*Back to **[README.md](./README.md)** · **[PROMPT.md](./PROMPT.md)**.*
