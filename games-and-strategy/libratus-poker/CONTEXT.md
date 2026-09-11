# 📚 Context: Libratus

**The problem.** Heads-up no-limit Texas hold'em (HUNL) has on the order of 10^160 decision points, and unlike chess or Go, a player cannot see the opponent's cards. That makes the value of a position depend on the probability distribution over what the opponent might hold, which in turn depends on the whole strategy of both players, so a game cannot be solved by looking at a subgame in isolation. No-limit, with its continuous range of bet sizes, was the open case; the paper notes that no prior AI had defeated top human players in it, and Sandholm's group had come up short in a similar 2015 event with a predecessor, Claudico.

**The method.** Libratus is game theory computed at scale, not deep learning. (i) *Blueprint:* the group abstracted the game (fewer bet sizes, and on the third and fourth betting rounds card-strength buckets of 2.5 million and 1.25 million respectively) and ran a counterfactual-regret-minimization variant on Bridges to approximate a Nash equilibrium. Wikipedia's account puts the compute at about 15 million core-hours before the event and 4 million during. (ii) *Nested subgame solving:* in the later rounds Libratus did not follow the blueprint; it re-solved the remainder of the hand in real time, with no card abstraction, in a way that guarantees the re-solved strategy is no more exploitable than the blueprint, and it did so again whenever the opponent chose a bet size outside the abstraction. (iii) *Self-improvement:* each night a meta-algorithm ranked the off-abstraction bet sizes the humans had used most that day and computed strategies for the top three, so the blueprint filled in exactly where it was being probed.

**The match.** 120,000 hands over 20 days, with the four pros playing in parallel against copies of the AI, studying together and adjusting strategy nightly. The final margin, 147 mbb/hand, is described in the paper's notes as "a massive and unambiguous victory." Individually, per Wikipedia, Dong Kim lost least (−$85,649) and Jason Les most (−$880,087).

**People.** Tuomas Sandholm (professor) and Noam Brown (then a PhD student) at Carnegie Mellon's Computer Science Department. The same two went on to build Pluribus.

## Why it's in the Hall of Fame
It is the first defeat of top human specialists at heads-up no-limit hold'em, the imperfect-information benchmark the field had targeted since the 2000s, by a method with theoretical guarantees rather than opponent modelling. The nested subgame-solving idea (published separately at NeurIPS 2017) is what made real-time equilibrium play feasible, and it fed directly into [Pluribus](../pluribus-poker/).

## Honest caveats
- **Not a neural network.** Libratus learned its strategy by self-play regret minimization, but there is no deep learning in it; readers should not group it with DQN or AlphaGo methodologically. That is a feature of the result, not a flaw, but it is worth knowing.
- **Statistical significance assumes independence.** The 99.98% figure treats hands as i.i.d.; the paper's own footnote acknowledges that both sides adapted during the event, so this is a rough guide to variance, not a clean hypothesis test. The margin is large enough that the conclusion does not depend on it.
- **Heads-up only.** Two-player zero-sum poker has a well-defined equilibrium to aim for. Multiplayer poker does not, which is why it needed the separate Pluribus result in 2019.
- **The "first" claim depends on who counts as top.** The University of Alberta's DeepStack reported beating professional players at HUNL in *Science* earlier in 2017, against a pool of less specialized pros; the Libratus authors' claim rests on the calibre of the four opponents, who were HUNL specialists. This entry does not adjudicate between them.
- **Compute.** Millions of core-hours on a supercomputer, including live re-solving during play; this was not a laptop result, unlike Pluribus two years later.
- **Primary source access.** The *Science* page returns a 403 to automated readers; the numbers above come from the NSF-hosted author manuscript and CMU's own announcement.

## Sources
- [Brown & Sandholm, "Superhuman AI for heads-up no-limit poker: Libratus beats top professionals," Science 359, 418 (2018); first release 17 December 2017](https://www.science.org/doi/10.1126/science.aao1733)
- [Author manuscript of the same paper (NSF Public Access Repository, PDF)](https://par.nsf.gov/servlets/purl/10077416)
- [CMU News, 31 January 2017: "Carnegie Mellon Artificial Intelligence Beats Top Poker Pros"](https://www.cmu.edu/news/stories/archives/2017/january/AI-beats-poker-pros.html)
- [IEEE Spectrum: "AI Learns From Mistakes to Defeat Human Poker Players"](https://spectrum.ieee.org/ai-learns-from-mistakes-to-defeat-human-poker-players)
- [Wikipedia: Libratus](https://en.wikipedia.org/wiki/Libratus)
- [Brown & Sandholm, "Safe and Nested Subgame Solving for Imperfect-Information Games," arXiv:1705.02955 (NeurIPS 2017)](https://arxiv.org/abs/1705.02955)

---
*Back to **[README.md](./README.md)** · **[PROMPT.md](./PROMPT.md)**.*
