# 🤖 Explore this with AI: TD-Gammon

Paste the prompt below into your favorite AI assistant (Claude, ChatGPT, Gemini, or a local model). If your assistant can browse the web, tell it to read the sources first. The point is a clear, honest, grounded explanation of what happened and why it mattered.

> A neural network that learned backgammon by playing itself came within a point of a world-class player and changed how experts open the game.

---

```text
You are a sharp, honest science explainer. Walk me through a specific, real AI achievement so that I actually understand it, not just the headline.

Topic: TD-Gammon, Gerald Tesauro's backgammon program at IBM Research (1991 to 1995, with a final version in 1998), which learned to evaluate positions by temporal-difference learning from self-play and reached near-world-class strength.

Please cover, in plain language a curious non-expert can follow:
1. What actually happened: the versions (0.0 through 3.1), the training-game counts, and the documented results against human experts, including −1 point over 40 games against Bill Robertie in 1993 and −8 over 100 games against Malcolm Davis in 1998.
2. How it worked. Explain TD(λ) with the value estimate being nudged toward the next position's estimate, why a neural network as the value function mattered, why self-play with dice gave free exploration, and what the small set of hand-designed features and the later two-ply search contributed.
3. Why it mattered: the first clear success of reinforcement learning with a neural network in a real game, the lineage to AlphaGo and AlphaZero, and the change it forced in human opening theory (splitting the back checkers instead of slotting).
4. The honest caveats: it never clearly beat the best humans, the match samples were tiny, the input was not purely raw, and the method did not transfer to chess or Go at the time.
5. What I should read or explore next to go deeper.

Ground your answer in these primary sources (read them if you can, and cite them as you go):
- Tesauro's 1995 Communications of the ACM article (full text): https://www.bkgm.com/articles/tesauro/tdl.html
- The same article's ACM Digital Library record: https://dl.acm.org/doi/10.1145/203330.203343
- Wikipedia: TD-Gammon: https://en.wikipedia.org/wiki/TD-Gammon

Be concrete, use real numbers where they matter, and if you are unsure about a detail, say so instead of guessing.
```

## Bonus: have the agent rebuild it

TD(λ) with a small network is a weekend project, and the point of the original is that it works from self-play alone. Ask an agent to reproduce the core loop on a simplified game:

```
Implement TD(λ) learning with a small feed-forward network as the value function, trained purely by self-play, for a simplified backgammon (or for tic-tac-toe if you want a fast sanity check). Use the update rule from Tesauro's 1995 CACM article: w_{t+1} - w_t = α (Y_{t+1} - Y_t) Σ_{k=1..t} λ^{t-k} ∇_w Y_k. Report how the win rate against a random player and against a one-ply greedy player changes over training, and show a plot. Then explain in one paragraph why the dice make exploration easy in backgammon but not in chess.
```

---

## Sources
- [Tesauro, "Temporal Difference Learning and TD-Gammon," Communications of the ACM 38(3), March 1995 (ACM DL)](https://dl.acm.org/doi/10.1145/203330.203343)
- [Full text of the same article, hosted at bkgm.com](https://www.bkgm.com/articles/tesauro/tdl.html)
- [Wikipedia: TD-Gammon](https://en.wikipedia.org/wiki/TD-Gammon)

---
*Back to **[README.md](./README.md)** · **[CONTEXT.md](./CONTEXT.md)**.*
