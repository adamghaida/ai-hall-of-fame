# 🤖 Explore this with AI: Euclid's strong-lensing discovery engine

Paste the prompt below into your favorite AI assistant (Claude, ChatGPT, Gemini, or a local model). If your assistant can browse the web, tell it to read the sources first. The point is a clear, honest, grounded explanation of what happened and why it mattered.

> In the first 63 square degrees of Euclid data, a deep-learning sweep followed by Space Warps volunteers and expert vetting produced 497 galaxy-galaxy strong lens candidates, 250 of them grade A and 243 of those never published before.

---

```text
You are a sharp, honest astronomy and machine-learning explainer. Walk me through a specific, real AI-assisted result so that I actually understand it, not just the headline.

Topic: The Euclid Collaboration's "Strong Lensing Discovery Engine" (lead author M. Walmsley, arXiv:2503.15324, 19 March 2025), which found 497 galaxy-galaxy strong lens candidates in Euclid's Quick Data Release 1 (63 square degrees, about 0.45% of the survey).

Please cover, in plain language a curious non-expert can follow:
1. What a galaxy-galaxy strong gravitational lens is, why they are rare and hard to spot, why Euclid's resolution matters (Einstein radii below one arcsecond), and what astronomers do with lenses once found (dark-matter halos, magnified background galaxies, double-source-plane cosmology).
2. How the four-stage engine works: an ensemble of deep-learning models with Zoobot (a generalist Galaxy Zoo-trained morphology model) as the best performer; Space Warps citizen scientists (over 1,000 volunteers, more than 800,000 classifications); expert vetting and grading; and system-by-system lens modelling. Explain why a generalist model can beat a lens-specific one, and why the volunteer stage is there.
3. The results: 497 candidates, 250 grade A, 243 of those previously unpublished, only 7 grade-A systems already known; four double-source-plane lenses, edge-on lenses, complete Einstein rings, quads; the claim of roughly doubling the number of known lens candidates with space-based imaging; projections of about 7,000 grade A or B candidates by late 2026 and over 100,000 from the full mission.
4. How this compares with other machine-plus-human discovery systems in astronomy, for example the AnomalyMatch sweep of the Hubble archive.
5. The honest caveats:
   - These are visually graded candidates, not spectroscopically confirmed lenses; the paper says all numbers are approximate because grading is subjective.
   - "Doubling" refers to space-based lens candidates specifically.
   - Do not confuse the Space Warps volunteer numbers with the 9,976 volunteers of the separate Galaxy Zoo morphology campaign mentioned in ESA's release.
   - The 7,000 and 100,000 figures are extrapolations.
   - Completeness is bounded by what the models rank highly.
6. What I should read or explore next to go deeper.

Ground your answer in these sources (read them if you can, and cite them as you go):
- Paper (arXiv): https://arxiv.org/abs/2503.15324
- ESA release: https://www.esa.int/Science_Exploration/Space_Science/Euclid/Euclid_opens_data_treasure_trove_offers_glimpse_of_deep_fields
- Space Warps blog: https://blog.spacewarps.org/2025/03/19/space-warps-helps-to-find-497-spectacular-lenses-in-euclid-data/

Be concrete, use the collaboration's own numbers, clearly separate candidates from confirmed lenses, and if you are unsure about a detail, say so instead of guessing.
```

## Bonus: have the agent check the catalogue

The result is a concrete, checkable object: a graded candidate catalogue. Have a capable assistant test the claim rather than repeat it.

```
Open https://arxiv.org/abs/2503.15324 and do three things.

1. Reconstruct the funnel: how many Q1 galaxies were scanned by the models, how many were sent to Space Warps, how many reached expert grading, and how the 497 split into grades A, B and C. Check that 250 grade A with 243 previously unpublished and 7 previously known is consistent with the tables, and identify any place where the text and tables disagree.

2. Find the paper's description of the deep-learning ensemble. List the models, state how Zoobot was trained and fine-tuned, and report the metric on which it was judged best. Then explain what the machine stage's ranking threshold implies for completeness: what fraction of true lenses would you expect it to miss, based on the paper's own tests?

3. Pick five grade-A candidates with the smallest Einstein radii and check whether any have since been confirmed spectroscopically or modelled in follow-up papers. Report what you find and what you could not find.
```

---

## Sources
- [Euclid Collaboration, Walmsley et al.: "Euclid Quick Data Release (Q1): The Strong Lensing Discovery Engine A – System overview and lens catalogue" (arXiv:2503.15324)](https://arxiv.org/abs/2503.15324)
- [ESA: "Euclid opens data treasure trove, offers glimpse of deep fields" (19 March 2025)](https://www.esa.int/Science_Exploration/Space_Science/Euclid/Euclid_opens_data_treasure_trove_offers_glimpse_of_deep_fields)
- [Space Warps blog: "Space Warps helps to find 497 spectacular lenses in Euclid data" (19 March 2025)](https://blog.spacewarps.org/2025/03/19/space-warps-helps-to-find-497-spectacular-lenses-in-euclid-data/)

---
*Back to **[README.md](./README.md)** · **[CONTEXT.md](./CONTEXT.md)**.*
