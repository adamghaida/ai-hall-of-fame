# 📚 Context: TD-Gammon

**The problem.** Backgammon has about 10^20 positions and, because every move begins with a dice roll, a branching factor in the hundreds. Brute-force search of the kind that later won chess for IBM's Deep Blue does not work. Earlier backgammon programs, including Tesauro's own *Neurogammon* (1989), were trained by supervised learning on expert-labelled positions, which capped them at the level of the labels.

**The idea.** Richard Sutton's TD(λ) algorithm (1988) updates a value estimate toward the estimate at the next step rather than toward a final outcome, with λ controlling how far credit for a result is spread back through the moves that produced it. Tesauro made the value estimator a multilayer neural network and let the program generate its own training data by playing itself, starting from random weights. The 1995 article notes that the dice provide free exploration, so the usual exploration versus exploitation dilemma largely disappears. The network first learned "linear" ideas (which features are good or bad) and only later the context-dependent judgments that experts prize.

**Versions.** Version 0.0 (1991) used a raw board encoding and 40 hidden units and already matched the best prior programs. Version 1.0 added a handful of hand-designed features and reached 300,000 training games. Version 2.0 (1992) added two-ply search; 2.1 (1993) trained on 1.5 million games; 3.0 (1995) and 3.1 (1998) followed, the last with 160 hidden units and more than 6 million games.

**People.** Gerald Tesauro (IBM Research) built it. The human opponents included Bill Robertie, Paul Magriel, Malcolm Davis, Kent Goulding and Kit Woolsey, all among the strongest players of the era.

## Why it's in the Hall of Fame
It is the founding result for reinforcement learning with neural networks in games. Sutton and Barto's textbook uses it as the canonical case study, and the AlphaGo and AlphaZero papers sit squarely in its lineage. The change it forced in human opening theory is also, as far as the record shows, the first time a learned system taught expert humans a better way to play a classic game.

## Honest caveats
- **Near, not above, the best humans.** The best documented results are a 1-point deficit over 40 games against Robertie (1993) and an 8-point deficit over 100 games against Davis (1998). Both are small margins in a high-variance game, and both are losses. Tesauro's article is careful to say "near parity," and Wikipedia's summary is that it "plays at or near the level of the best human players."
- **Small samples.** Forty and 100 games are far too few to establish a rating with confidence; the 1990s had no equivalent of the 120,000-hand poker matches that later entries here use.
- **Not purely raw input.** The headline networks (1.0 onward) included a small set of hand-designed backgammon features alongside the board encoding, and versions 2.0 and later added a shallow lookahead search. The self-play learning is the point, but "no human knowledge" would overstate it.
- **Backgammon-friendly.** Tesauro himself noted that the stochastic dice make backgammon unusually well suited to this method; the approach did not transfer straightforwardly to deterministic games like chess and Go until search and network scale caught up in the 2010s.
- **Primary source access.** The ACM Digital Library page for the 1995 article is paywalled; the full text linked from bkgm.com is a faithful copy, and the match numbers above come from it and from Wikipedia's table.

## Sources
- [Tesauro, "Temporal Difference Learning and TD-Gammon," Communications of the ACM 38(3), March 1995 (ACM DL)](https://dl.acm.org/doi/10.1145/203330.203343)
- [Full text of the same article, hosted at bkgm.com](https://www.bkgm.com/articles/tesauro/tdl.html)
- [Wikipedia: TD-Gammon](https://en.wikipedia.org/wiki/TD-Gammon)

---
*Back to **[README.md](./README.md)** · **[PROMPT.md](./PROMPT.md)**.*
