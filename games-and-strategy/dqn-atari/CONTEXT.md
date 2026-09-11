# 📚 Context: DQN and the Atari games

**The problem.** Reinforcement learning (RL) had a long track record on problems with small, hand-built state descriptions, and one famous success with a neural network, TD-Gammon, in the 1990s. But combining RL with deep neural networks was known to be unstable: successive training samples are correlated, the target of the learning update moves as the network changes, and small changes to the value estimate can change the policy and hence the data. The Arcade Learning Environment (Bellemare et al., 2013) had just offered a clean test: dozens of Atari 2600 games with a common interface, raw pixels in, joystick actions out, score as reward.

**The method.** DQN approximates the action-value function Q(state, action) with a convolutional network that takes the last four preprocessed 84×84 frames and outputs one value per joystick action. Training uses Q-learning with two stabilizers: a replay memory of the most recent million transitions, sampled uniformly at random for each minibatch, and a target network whose weights are copied from the learning network only periodically. Actions are chosen ε-greedily, with ε annealed from 1.0 to 0.1 over the first million frames. Rewards are clipped to −1, 0, +1 so one learning rate works across games. A separate network is trained per game, but with identical architecture and hyperparameters.

**The evaluation.** Scores are reported as a percentage on a scale where a random policy is 0% and the human tester is 100%. The human played about 20 episodes of up to five minutes per game after roughly two hours of practice, with the audio off and the same emulator as the agent. DQN reached at least 75% on 29 games and beat previous RL methods on 43. The paper's ablations show that removing replay or the target network hurts substantially.

**People.** The work came from DeepMind, then recently acquired by Google, with Volodymyr Mnih as first author and David Silver, Demis Hassabis and Koray Kavukcuoglu among the 19 authors. The 2013 preprint, on seven games, had beaten prior methods on six and a human expert on three.

## Why it's in the Hall of Fame
DQN is the paper that made "deep reinforcement learning" a field. It showed that a general-purpose learning algorithm could go from pixels to competent play across dozens of quite different tasks without any task-specific engineering, and its benchmark and its two stabilizing tricks were the starting point for nearly every RL system of the next decade, including the ones later in this collection.

## Honest caveats
- **"Human-level" is a specific claim.** The comparison is with one professional games tester after two hours of practice per game, not with expert or record-holding players, and the threshold is 75% of that score. On 20 of the 49 games DQN fell below it, and on several, including Montezuma's Revenge, it scored close to zero. The paper itself notes that games needing "more temporally extended planning strategies" remained a major challenge for all agents.
- **One network per game.** The recipe is general; the trained agents are not. Each game got its own network trained from scratch, and nothing learned in one game transferred to another.
- **Sample-hungry.** Fifty million frames per game is about 38 days of continuous play, versus the human's two hours. Data efficiency became a central research theme precisely because DQN was so far from human efficiency.
- **Deterministic emulator.** The Atari 2600 is deterministic given the action sequence; later work found that agents can exploit this, and evaluation protocols (random no-op starts, sticky actions) were tightened after 2015.
- **Score, not understanding.** DQN optimizes the reward signal, and its Breakout tunnel-digging is a strategy that emerges from that, not from any model of the game. The paper's t-SNE analysis shows the network learns useful state representations, but it does not plan and has no explicit model, which is the gap DeepMind's MuZero later addressed.

## Sources
- [Mnih et al., "Human-level control through deep reinforcement learning," Nature 518, 529–533 (2015)](https://www.nature.com/articles/nature14236)
- [PDF of the Nature paper (DeepMind mirror)](https://storage.googleapis.com/deepmind-media/dqn/DQNNaturePaper.pdf)
- [Mnih et al., "Playing Atari with Deep Reinforcement Learning," arXiv:1312.5602 (December 2013 preprint, 7 games)](https://arxiv.org/abs/1312.5602)

---
*Back to **[README.md](./README.md)** · **[PROMPT.md](./PROMPT.md)**.*
