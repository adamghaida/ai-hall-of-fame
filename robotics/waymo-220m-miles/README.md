# Waymo's safety record at 220 million driverless miles

**Field:** 🤖 Robotics  ·  **When:** June 2026 · Waymo Safety Impact Hub (data through March 2026) · Traffic Injury Prevention (peer-reviewed crash-type study, May 2025)

> Over 220 million miles with no human behind the wheel, Waymo's own analysis reports 94% fewer crashes with serious or fatal injuries and 82% fewer injury crashes than human drivers on the same streets. The largest slice of that record to be independently reviewed, 56.7 million miles, appeared in a peer-reviewed journal in 2025.

## What happened
On June 24, 2026, Waymo updated its public Safety Impact Hub with data through March 31, 2026, covering **220.6 million rider-only miles** (no safety driver, no employee in the car) across Phoenix (80.6M miles), the San Francisco Bay Area (67.1M), Los Angeles (51.8M), Austin (15.8M) and Atlanta (5.4M). Waymo says its fleet now drives more than 4 million autonomous miles a week.

Compared with human drivers in the same areas, and counting every crash regardless of who was at fault, Waymo reports:

| Outcome | Reduction vs. human benchmark | Fewer crashes (absolute) |
|---|---|---|
| Serious injury or worse | **94%** | 47 |
| Airbag deployment (any vehicle) | **82%** | 305 |
| Any reported injury | **82%** | 707 |
| Pedestrian injury crashes | **93%** | 76 |
| Cyclist injury crashes | **84%** | 48 |
| Motorcyclist injury crashes | **84%** | 32 |

The human benchmark is built from state police-reported crash records and vehicle-miles-travelled data in the counties where Waymo operates, adjusted for where within those areas Waymo actually drives, with a 32% underreporting correction applied to human injury crashes based on national estimates. Freeways are excluded; the comparison covers surface streets only. Rates are crashed vehicles per mile with 95% confidence intervals.

The part of this record that has passed peer review is narrower. In May 2025, *Traffic Injury Prevention* published "Comparison of Waymo Rider-Only Crash Rates by Crash Type to Human Benchmarks at 56.7 Million Miles" by Kristofer Kusano, John Scanlon, Yin-Hsiu Chen, Timothy McMurry, Tilia Gode and Trent Victor, all of Waymo. Using data through January 2025, it reports a **79%** reduction (95% CI 71% to 85%) in any-injury-reported crashes and an **81%** reduction (CI 69% to 90%) in airbag-deployment crashes across all locations combined, and breaks the result into eleven crash types. The biggest effect was in vehicle-to-vehicle intersection crashes: 96% fewer injury-reported crashes (CI 87% to 99%) and 91% fewer airbag-deployment crashes (CI 76% to 98%). Cyclist, motorcycle, pedestrian, secondary and single-vehicle crash types also showed statistically significant reductions, and no crash type showed a statistically significant increase.

## Why it matters
Whether a learned driving system is actually safer than people is the question the whole autonomous-driving field has been arguing about for a decade, and it can only be settled with enough miles for rare events (serious injuries, pedestrian strikes) to be statistically visible. 220 million rider-only miles is, by a wide margin, the largest such dataset ever assembled for a driverless fleet operating on public roads with paying passengers, and the crash-type breakdown is the first peer-reviewed look at *where* the reductions come from rather than just the aggregate.

It is also an existence proof with a caveat baked in: the numbers are Waymo's, computed by Waymo employees from Waymo's telemetry and NHTSA Standing General Order reports, and the peer-reviewed slice covers about a quarter of the miles on the hub. Independent researchers have engaged with the methodology (Carol Flannagan of the University of Michigan Transportation Research Institute is quoted in Waymo's June 2026 post on the difficulty of apples-to-apples comparisons), but nobody outside the company has audited the raw crash data. See [CONTEXT.md](./CONTEXT.md).

## Sources — the record of the discovery
- [Waymo Safety Impact Hub (data through March 31, 2026)](https://waymo.com/safety/impact/)
- [Waymo blog: safety data update, June 24, 2026](https://waymo.com/blog/shorts/safetydata-june26/)
- [Kusano et al., "Comparison of Waymo Rider-Only Crash Rates by Crash Type to Human Benchmarks at 56.7 Million Miles", Traffic Injury Prevention, 2025](https://www.tandfonline.com/doi/full/10.1080/15389588.2025.2499887) · [DOI 10.1080/15389588.2025.2499887](https://doi.org/10.1080/15389588.2025.2499887)
- [Same paper, open-access preprint (arXiv:2505.01515)](https://arxiv.org/abs/2505.01515)

---
*In this folder: **[PROMPT.md](./PROMPT.md)** (a prompt to explore it with AI) · **[CONTEXT.md](./CONTEXT.md)** (background & caveats). Part of the [AI Hall of Fame](../../README.md) → [🤖 Robotics](../).*
