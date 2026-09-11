# Libratus beats four top heads-up no-limit poker pros

**Field:** ♟️ Games & Strategy  ·  **When:** January 2017 · Science (December 2017 / January 2018)

> Over 120,000 hands and 20 days, a Carnegie Mellon AI beat four of the world's best heads-up no-limit Texas hold'em specialists by 14.7 big blinds per 100 hands, a margin the authors put at 99.98% statistical significance.

## What happened
From **January 11 to 30, 2017**, at Rivers Casino in Pittsburgh, **Libratus**, built by **Tuomas Sandholm** and **Noam Brown** at Carnegie Mellon, played **120,000 hands** of heads-up no-limit Texas hold'em against four professionals who specialize in that format: **Dong Kim, Jimmy Chou, Daniel McAulay and Jason Les**. The event, "Brains vs. Artificial Intelligence: Upping the Ante," carried a **$200,000** prize pool split among the humans by relative performance.

Libratus finished **$1,766,250** in chips ahead, a win rate of **147 milli-big-blinds per hand (14.7 bb/100)**. Treating hands as independent, the paper reports **99.98% statistical significance (p = 0.0002)**, and Libratus beat each of the four individually. The strategy was computed on the **Bridges** supercomputer at the Pittsburgh Supercomputing Center, before and during the event.

The system had three parts. A **blueprint strategy**, an approximate equilibrium for an abstracted version of the game, computed in advance. **Nested subgame solving**, which in the later betting rounds re-solved the current hand in real time, without card abstraction and with a provable safety guarantee, whenever the opponent did something outside the abstraction. And a **self-improver** that each night found the parts of the blueprint the humans had been exploiting that day and computed better strategies for them, patching the top three holes before the next session. The techniques, the paper stresses, use no expert domain knowledge or human data and are not specific to poker.

## Why it matters
Poker is the canonical imperfect-information game: players hold private cards, bluff, and must reason about what their actions reveal. Perfect-information successes like [AlphaGo](../alphago-move-37/) did not carry over. Libratus was the first AI to beat top humans at heads-up no-limit hold'em, the two-player form that had been the field's benchmark for a decade, and it did so with a game-theoretic method (counterfactual-regret-style equilibrium finding plus safe real-time re-solving) rather than by learning to exploit particular opponents. Two years later the same group's [Pluribus](../pluribus-poker/) extended the result to six-player poker.

## Sources — the record of the discovery
- [Brown & Sandholm, "Superhuman AI for heads-up no-limit poker: Libratus beats top professionals," Science 359, 418 (2018); first release 17 December 2017](https://www.science.org/doi/10.1126/science.aao1733)
- [Author manuscript of the same paper (NSF Public Access Repository, PDF)](https://par.nsf.gov/servlets/purl/10077416)
- [CMU News, 31 January 2017: "Carnegie Mellon Artificial Intelligence Beats Top Poker Pros"](https://www.cmu.edu/news/stories/archives/2017/january/AI-beats-poker-pros.html)
- [IEEE Spectrum: "AI Learns From Mistakes to Defeat Human Poker Players"](https://spectrum.ieee.org/ai-learns-from-mistakes-to-defeat-human-poker-players)
- [Wikipedia: Libratus](https://en.wikipedia.org/wiki/Libratus)

---
*In this folder: **[PROMPT.md](./PROMPT.md)** (a prompt to explore it with AI) · **[CONTEXT.md](./CONTEXT.md)** (background & caveats). Part of the [AI Hall of Fame](../../README.md) → [♟️ Games & Strategy](../).*
