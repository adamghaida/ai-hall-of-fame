# DQN: one network learns 49 Atari games from pixels

**Field:** ♟️ Games & Strategy  ·  **When:** February 2015 · Nature

> A single deep reinforcement-learning recipe, given nothing but the screen pixels and the score, learned 49 different Atari 2600 games and reached at least 75% of a professional games tester's score on 29 of them.

## What happened
DeepMind's **Deep Q-Network (DQN)**, published in *Nature* (vol. 518, pp. 529–533) by Volodymyr Mnih, Koray Kavukcuoglu, David Silver and colleagues, combined a convolutional neural network with Q-learning to learn to play Atari games directly from **84×84-pixel frames and the game score**, with no hand-designed features and no game-specific knowledge.

The same algorithm, network architecture and hyperparameters were used for every one of **49 games**, from Breakout and Pong to Seaquest and Ms. Pac-Man. Judged against a professional human games tester who played under the same conditions (same emulator, same 60 Hz display, no audio, about two hours of practice per game), DQN scored **more than 75% of the human score on 29 of the 49 games**, and it beat the best existing reinforcement-learning methods on 43. Each agent was trained on 50 million frames, about 38 days of game experience.

Two engineering ideas made it work where earlier attempts to combine deep networks with reinforcement learning had been unstable: **experience replay** (learning from randomly sampled past transitions rather than the most recent ones) and a separate, periodically updated **target network** for the Q-learning targets. A December 2013 preprint had shown the method on seven games; the Nature paper scaled it to 49.

## Why it matters
Before DQN, reinforcement learning worked on small, hand-featurized problems and deep learning worked on supervised tasks with labels. DQN was the first agent to learn competent control policies for a large, varied set of tasks from raw high-dimensional sensory input using only a reward signal, and it did so with one fixed recipe rather than per-game tuning. That combination, deep networks plus reinforcement learning at scale, is the foundation of [AlphaGo](../alphago-move-37/) a year later and of [AlphaZero](../alphazero-self-play/), MuZero and the rest of the lineage in this collection. The Atari-57 suite the paper popularized became the standard benchmark for the field for the following decade.

## Sources — the record of the discovery
- [Mnih et al., "Human-level control through deep reinforcement learning," Nature 518, 529–533 (2015)](https://www.nature.com/articles/nature14236)
- [PDF of the Nature paper (DeepMind mirror)](https://storage.googleapis.com/deepmind-media/dqn/DQNNaturePaper.pdf)
- [Mnih et al., "Playing Atari with Deep Reinforcement Learning," arXiv:1312.5602 (December 2013 preprint, 7 games)](https://arxiv.org/abs/1312.5602)

---
*In this folder: **[PROMPT.md](./PROMPT.md)** (a prompt to explore it with AI) · **[CONTEXT.md](./CONTEXT.md)** (background & caveats). Part of the [AI Hall of Fame](../../README.md) → [♟️ Games & Strategy](../).*
