# 🤖 Explore this with AI: Deep Loop Shaping on LIGO

Paste the prompt below into your favorite AI assistant (Claude, ChatGPT, Gemini, or a local model). If your assistant can browse the web, tell it to read the sources first. The point is a clear, honest, grounded explanation of what happened and why it mattered.

> On the real LIGO Livingston detector, a controller trained by reinforcement learning with frequency-domain rewards cut the control noise from the observatory's most unstable mirror-stabilisation loop by more than 30x across the 10 to 30 Hz band, and up to 100x in sub-bands.

---

```text
You are a sharp, honest physics and control-engineering explainer. Walk me through a specific, real AI achievement so that I actually understand it, not just the headline.

Topic: Google DeepMind, Caltech's LIGO Laboratory and the Gran Sasso Science Institute used a reinforcement-learning method called Deep Loop Shaping to reduce control noise on the LIGO Livingston gravitational-wave detector. Published in Science 389, 1012-1015, on 4 September 2025 (Buchli, Tracey et al.; preprint arXiv:2509.14016).

Please cover, in plain language a curious non-expert can follow:
1. Why LIGO's mirrors need active feedback control at all, why that control injects noise, and why the 10 to 30 Hz band matters (intermediate-mass black-hole mergers, binary eccentricity, early warning for neutron-star mergers).
2. What classical "loop shaping" is in control engineering, and what Deep Loop Shaping changes: a reinforcement-learning agent with a reward defined in the frequency domain, trained in simulation, then run on the real 40 kg suspended mirrors.
3. What was measured: control noise in the 10 to 30 Hz band reduced by more than 30x, and up to 100x in sub-bands, on the loop the authors describe as the detector's most unstable and hardest to control, in a live test of roughly an hour.
4. Why it matters, and how it compares with other learned-control results on real instruments (for example reinforcement learning on the TCV and DIII-D tokamaks).
5. The honest caveats:
   - One loop on one detector, for about an hour; extending to all mirror-control loops is stated as future work.
   - No claim that LIGO's routine observing runs use this controller.
   - The 30 to 100x figure is about control noise, not about detections; "hundreds more events per year" is a projection.
   - The Science article is paywalled and no code was released, so independent reproduction is limited to the paper's description.
6. What I should read or explore next to go deeper.

Ground your answer in these sources (read them if you can, and cite them as you go):
- Science paper: https://www.science.org/doi/10.1126/science.adw1291
- Preprint: https://arxiv.org/abs/2509.14016
- Google DeepMind blog: https://deepmind.google/discover/blog/using-ai-to-perceive-the-universe-in-greater-depth/
- Phys.org write-up: https://phys.org/news/2025-09-algorithm-hushes-unwanted-noise-ligo.html

Be concrete, use the paper's own numbers, and if you are unsure about a detail, say so instead of guessing.
```

## Bonus: have the agent check the claims against the paper

There is no code release, so the checkable object is the paper and its figures. Have a capable assistant audit them rather than repeat them.

```
Open https://arxiv.org/abs/2509.14016 (and the Science version if you have access) and do three things.

1. Find the figure or table that supports "more than 30x in the 10 to 30 Hz band" and "up to 100x in sub-bands". State exactly what quantity is plotted (which noise, which units, which loop), what the baseline controller is, and over how long the comparison was measured.

2. Write out, in your own words, how the frequency-domain reward is constructed: what spectrum is being penalised, what is being rewarded, and how the agent is prevented from injecting noise into the observation band while still suppressing mirror motion.

3. List what the paper does and does not claim about deployment: is the controller used in LIGO observing runs, how many loops it has been applied to, and what the authors say is needed to turn this into a sensitivity improvement for the whole detector.
```

---

## Sources
- [Science paper: "Improving cosmological reach of a gravitational wave observatory using Deep Loop Shaping", Science 389, 1012–1015 (2025)](https://www.science.org/doi/10.1126/science.adw1291)
- [Preprint (arXiv:2509.14016)](https://arxiv.org/abs/2509.14016)
- [Google DeepMind blog: "Using AI to perceive the universe in greater depth" (4 September 2025)](https://deepmind.google/discover/blog/using-ai-to-perceive-the-universe-in-greater-depth/)
- [Phys.org: "New algorithm hushes unwanted noise in LIGO, may lead to more black hole discoveries" (4 September 2025)](https://phys.org/news/2025-09-algorithm-hushes-unwanted-noise-ligo.html)

---
*Back to **[README.md](./README.md)** · **[CONTEXT.md](./CONTEXT.md)**.*
