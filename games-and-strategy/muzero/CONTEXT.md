# 📚 Context: MuZero

**The lineage.** [AlphaGo](../alphago-move-37/) (2016) learned from human games plus self-play and searched with the real rules. AlphaGo Zero dropped the human games. [AlphaZero](../alphazero-self-play/) (2017–2018) dropped the Go-specific engineering and played chess and shogi too. All three still needed the rules of the game to run their lookahead search. MuZero drops that last requirement.

**Two traditions it joins.** *Model-free* reinforcement learning (DQN and its descendants) learns values and policies directly from experience and had dominated visually rich domains like Atari, where writing down the rules is impractical. *Model-based* methods learn a simulator and plan with it, and had excelled in board games only when the simulator was given. Learned simulators that tried to predict full future observations tended to waste capacity on irrelevant detail and accumulate error. MuZero's answer is a model that is trained only to be useful for planning.

**How it works.** Three networks. A *representation* function maps the current observation (or, in Atari, the recent frames) to a hidden state. A *dynamics* function takes a hidden state and an action and returns the next hidden state and a predicted reward. A *prediction* function maps a hidden state to a policy and a value. Monte Carlo tree search is run entirely in this hidden-state space, and the three networks are trained jointly so that, k steps into an imagined rollout, the predicted rewards, values and policies match the real rewards, the search-improved values, and the search-improved policies observed later. There is no loss on reconstructing observations, so the hidden state is free to encode whatever helps decisions.

**People.** Julian Schrittwieser, Ioannis Antonoglou, Thomas Hubert, Karen Simonyan, Laurent Sifre, Simon Schmitt, Arthur Guez, Edward Lockhart, Demis Hassabis, Thore Graepel, Timothy Lillicrap and David Silver at DeepMind.

## Why it's in the Hall of Fame
It is the first system to match AlphaZero-level play in Go, chess and shogi without being given the rules, and the first model-based method to set the state of the art on the full Atari suite. Together those results settled a long argument about whether learned models could plan as well as true simulators, at least in these domains, and completed the AlphaGo-to-AlphaZero-to-MuZero progression of removing human-supplied knowledge one piece at a time.

## Honest caveats
- **"Without rules" has limits.** In the board games MuZero is still told which moves are legal in the current position and when a game has ended; what it learns is how actions change the state and what they are worth. It also still needs a real environment to interact with during training. It does not learn from watching, and it does not transfer between games.
- **Compute.** Like AlphaZero, MuZero was trained with very large amounts of self-play on specialized hardware. The Atari results use the standard 200-million-frame budget, and the Reanalyze variant was needed to be competitive at lower sample counts.
- **Deterministic, fully observed domains.** Go, chess, shogi and Atari are deterministic and, for the board games, fully observed. Extending the idea to stochastic and partially observed environments was left to follow-up work.
- **Atari state of the art is a moving target.** The 57-game record was surpassed by later agents; the durable claim is that a model-based planner matched or beat the best model-free methods, not that MuZero remains the top score.
- **The model is not interpretable.** Because nothing forces the hidden state to correspond to the real board or screen, MuZero's "understanding" of a game cannot be read off its model in the way an AlphaZero search tree can.

## Sources
- [Schrittwieser et al., "Mastering Atari, Go, chess and shogi by planning with a learned model," Nature 588, 604–609 (2020)](https://www.nature.com/articles/s41586-020-03051-4)
- [DeepMind blog: "MuZero: Mastering Go, chess, shogi and Atari without rules" (23 December 2020)](https://deepmind.google/discover/blog/muzero-mastering-go-chess-shogi-and-atari-without-rules/)
- [Preprint, arXiv:1911.08265 (19 November 2019)](https://arxiv.org/abs/1911.08265)

---
*Back to **[README.md](./README.md)** · **[PROMPT.md](./PROMPT.md)**.*
