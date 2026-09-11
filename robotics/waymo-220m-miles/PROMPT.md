# 🤖 Explore this with AI: Waymo's safety record at 220 million driverless miles

Paste the prompt below into your favorite AI assistant (Claude, ChatGPT, Gemini, or a local model). If your assistant can browse the web, tell it to read the sources first. The point is a clear, honest, grounded explanation of what happened and why it mattered.

> Over 220 million miles with no human behind the wheel, Waymo's own analysis reports 94% fewer serious-injury crashes and 82% fewer injury crashes than human drivers on the same streets.

---

```text
You are a careful, hype-free explainer of autonomous-vehicle safety statistics. Walk me through a specific real result so I actually understand it, including what it does not show.

Topic: Waymo's rider-only (no human in the driver's seat) crash record. Two documents: (a) the Waymo Safety Impact Hub as updated on June 24, 2026 with data through March 31, 2026, covering 220.6 million rider-only miles in Phoenix, the San Francisco Bay Area, Los Angeles, Austin and Atlanta; and (b) the peer-reviewed paper "Comparison of Waymo Rider-Only Crash Rates by Crash Type to Human Benchmarks at 56.7 Million Miles" by Kusano, Scanlon, Chen, McMurry, Gode and Victor, Traffic Injury Prevention, 2025.

Please cover, in plain language a curious non-expert can follow:
1. What "rider-only miles" means and why that is the right denominator for a driverless safety claim.
2. The headline numbers from the hub and exactly what each one compares: 94% fewer serious-injury-or-worse crashes, 82% fewer airbag-deployment crashes, 82% fewer any-injury crashes, 93% fewer pedestrian-injury crashes, 84% fewer cyclist and 84% fewer motorcyclist injury crashes.
3. How the human benchmark is built: state police-reported crash records plus vehicle-miles-travelled data for the counties Waymo operates in, weighted for where Waymo actually drives, with a 32% underreporting correction for human injury crashes, freeways excluded, all crashes counted regardless of fault, rates as crashed vehicles per mile with 95% confidence intervals. Explain why each of those choices matters and which direction it could bias the result.
4. What the peer-reviewed paper adds: 56.7 million miles through January 2025, an aggregate 79% reduction in any-injury-reported crashes (CI 71% to 85%) and 81% in airbag-deployment crashes (CI 69% to 90%), broken into eleven crash types, with the largest effect in vehicle-to-vehicle intersection crashes (96% and 91%). Which crash types showed significant reductions and which did not?
5. The honest limits. All authors are Waymo employees and the data is Waymo's; the peer-reviewed slice is about a quarter of the miles; the benchmark is a constructed model; the comparison is surface streets in five mostly sunbelt metros; "94% fewer" is a relative rate, not zero.
6. What an independent auditor would want before treating these numbers as settled.

Ground your answer in these sources (read them if you can, and cite them as you go):
- Waymo Safety Impact Hub: https://waymo.com/safety/impact/
- Waymo blog, June 24, 2026 update: https://waymo.com/blog/shorts/safetydata-june26/
- Kusano et al., Traffic Injury Prevention 2025: https://www.tandfonline.com/doi/full/10.1080/15389588.2025.2499887
- Open-access preprint of the same paper: https://arxiv.org/abs/2505.01515

Be concrete, use the real numbers, label every figure as company-reported, and if you are unsure about a detail, say so instead of guessing.
```

## Bonus: have the agent recompute a rate

The hub reports both a percentage reduction and an absolute count of "fewer crashes" for each outcome. Those two numbers, together with the mileage, let you back out the implied human and Waymo crash rates and check that they are consistent.

```
Read https://waymo.com/safety/impact/ and pull, for the "serious injury or worse" outcome: the total rider-only miles, the percentage reduction, and the absolute number of fewer crashes.

Then:
1. Let W be the number of Waymo crashes and H the benchmark's expected number of human crashes over the same miles. From "94% fewer" and "47 fewer crashes", solve for W and H (H - W = 47, W = 0.06 H).
2. Express both as crashes per 100 million miles.
3. Repeat for "any reported injury" (82%, 707 fewer) and "pedestrian injury" (93%, 76 fewer).
4. Sanity-check the implied human rates against any publicly available national or state injury-crash rate you can find, and say whether they look plausible for urban surface streets.
5. State clearly which of your inputs are Waymo-reported and which are independent.
```

## Sources
- [Waymo Safety Impact Hub (data through March 31, 2026)](https://waymo.com/safety/impact/)
- [Waymo blog: safety data update, June 24, 2026](https://waymo.com/blog/shorts/safetydata-june26/)
- [Kusano et al., Traffic Injury Prevention, 2025](https://www.tandfonline.com/doi/full/10.1080/15389588.2025.2499887)
- [Open-access preprint (arXiv:2505.01515)](https://arxiv.org/abs/2505.01515)

---
*Back to **[README.md](./README.md)** · **[CONTEXT.md](./CONTEXT.md)**.*
