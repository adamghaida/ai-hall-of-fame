# 🤖 Explore this with AI: Libratus

Paste the prompt below into your favorite AI assistant (Claude, ChatGPT, Gemini, or a local model). If your assistant can browse the web, tell it to read the sources first. The point is a clear, honest, grounded explanation of what happened and why it mattered.

> Over 120,000 hands and 20 days, a Carnegie Mellon AI beat four of the world's best heads-up no-limit hold'em specialists by 14.7 big blinds per 100 hands.

---

```text
You are a sharp, honest science explainer. Walk me through a specific, real AI achievement so that I actually understand it, not just the headline.

Topic: Libratus (Carnegie Mellon; Tuomas Sandholm and Noam Brown) beating four top heads-up no-limit Texas hold'em professionals, Dong Kim, Jimmy Chou, Daniel McAulay and Jason Les, over 120,000 hands at Rivers Casino, Pittsburgh, January 11 to 30, 2017, by $1,766,250 in chips (147 mbb/hand, 99.98% significance). Published in Science (first release December 2017).

Please cover, in plain language a curious non-expert can follow:
1. What actually happened, with the numbers, and why heads-up no-limit hold'em was the long-standing benchmark for imperfect-information games.
2. How it worked. Explain why a subgame in poker cannot be solved in isolation, then the three modules: the abstracted blueprint strategy computed by counterfactual regret minimization on the Bridges supercomputer; nested, safe subgame solving in real time for the later betting rounds; and the nightly self-improver that patched the three most-exploited off-abstraction bet sizes. Make clear that there is no neural network in Libratus.
3. Why it mattered: the first defeat of top HUNL specialists, the theoretical guarantee behind the real-time re-solving, and the path to Pluribus and six-player poker two years later.
4. The honest caveats: the i.i.d. assumption behind the significance figure, heads-up only, the compute cost, and the competing DeepStack result from the University of Alberta the same year and how the two "first" claims differ.
5. What I should read or explore next to go deeper.

Ground your answer in these primary sources (read them if you can, and cite them as you go):
- Science paper: https://www.science.org/doi/10.1126/science.aao1733
- Author manuscript (PDF): https://par.nsf.gov/servlets/purl/10077416
- CMU announcement, 31 January 2017: https://www.cmu.edu/news/stories/archives/2017/january/AI-beats-poker-pros.html
- IEEE Spectrum coverage: https://spectrum.ieee.org/ai-learns-from-mistakes-to-defeat-human-poker-players
- Nested subgame solving paper: https://arxiv.org/abs/1705.02955

Be concrete, use real numbers where they matter, and if you are unsure about a detail, say so instead of guessing.
```

## Bonus: have the agent check the statistics and rebuild the core idea

```
1. The match result is 147 mbb/hand over 120,000 hands. Using a per-hand standard deviation typical of heads-up no-limit hold'em (state the value you assume and where it comes from), compute the standard error of the mean and the z-score, and check whether the paper's 99.98% significance and p = 0.0002 are consistent with your assumption. Explain what the i.i.d. assumption does and does not license here.
2. Implement counterfactual regret minimization for Kuhn poker (three cards, one bet). Run it to convergence, print the resulting strategy, and verify against the known analytical equilibrium. Then explain in one paragraph why the same algorithm needs abstraction and real-time subgame solving to scale to no-limit hold'em.
```

---

## Sources
- [Brown & Sandholm, "Superhuman AI for heads-up no-limit poker: Libratus beats top professionals," Science 359, 418 (2018); first release 17 December 2017](https://www.science.org/doi/10.1126/science.aao1733)
- [Author manuscript of the same paper (NSF Public Access Repository, PDF)](https://par.nsf.gov/servlets/purl/10077416)
- [CMU News, 31 January 2017: "Carnegie Mellon Artificial Intelligence Beats Top Poker Pros"](https://www.cmu.edu/news/stories/archives/2017/january/AI-beats-poker-pros.html)
- [IEEE Spectrum: "AI Learns From Mistakes to Defeat Human Poker Players"](https://spectrum.ieee.org/ai-learns-from-mistakes-to-defeat-human-poker-players)
- [Wikipedia: Libratus](https://en.wikipedia.org/wiki/Libratus)
- [Brown & Sandholm, "Safe and Nested Subgame Solving for Imperfect-Information Games," arXiv:1705.02955 (NeurIPS 2017)](https://arxiv.org/abs/1705.02955)

---
*Back to **[README.md](./README.md)** · **[CONTEXT.md](./CONTEXT.md)**.*
