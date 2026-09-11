# 🤖 Explore this with AI: Swift

Paste the prompt below into your favorite AI assistant (Claude, ChatGPT, Gemini, or a local model). If your assistant can browse the web, tell it to read the sources first. The point is a clear, honest, grounded explanation of what happened and why it mattered.

> An autonomous quadcopter flying on its own camera and inertial sensors beat three champion human pilots in head-to-head races, winning 15 of 25 and setting the fastest time on the track.

---

```text
You are a sharp, honest science explainer. Walk me through a specific, real AI achievement so that I actually understand it, not just the headline.

Topic: Swift, the University of Zurich and Intel autonomous racing drone (Kaufmann et al., Nature 620, 982–987, August 2023), which beat three champion FPV pilots, Alex Vanover, Thomas Bitmatta and Marvin Schaepper, in head-to-head races in June 2022, winning 15 of 25 and posting the fastest race time (17.465 s versus 17.956 s for the best human).

Please cover, in plain language a curious non-expert can follow:
1. What actually happened: the track (seven gates, 75 m laps, speeds above 100 km/h), the per-pilot results (5 of 9, 4 of 7, 6 of 9), the best times, and what made this the first physical-sport win over world champions.
2. How it worked. Explain the perception stack (camera plus IMU, visual-inertial odometry, gate-corner detection, Kalman filter), the small control policy trained by model-free reinforcement learning in simulation, and, most importantly, how the simulation-to-reality gap was closed with residual models fitted to real flights under motion capture (used only for that data collection). Contrast with classical trajectory planning, which the paper says could not match these lap times even with perfect state estimates.
3. Why it mattered for robotics and for reinforcement learning, and how it relates to earlier "AI beats champions" results in board games and in racing simulators.
4. The honest caveats: fixed track and lighting, 40% of losses from collisions with the opponent and 40% from hitting gates, no crash recovery, no awareness of the opponent, a 25-race sample, and the latency and sensor asymmetries in both directions.
5. What I should read or explore next to go deeper.

Ground your answer in these primary sources (read them if you can, and cite them as you go):
- Nature paper: https://www.nature.com/articles/s41586-023-06419-4
- PDF of the paper (UZH): https://rpg.ifi.uzh.ch/docs/Nature23_Kaufmann.pdf
- UZH release via TechXplore: https://techxplore.com/news/2023-08-high-speed-ai-drone-world-champion-racers.html

Be concrete, use real numbers where they matter, and if you are unsure about a detail, say so instead of guessing.
```

## Bonus: have the agent check the numbers

The paper's results table (Fig. 3b) is small enough to audit:

```
From the paper, extract the head-to-head table: races, best time-to-finish, wins and losses for Swift against each pilot. Verify that the totals are 25 races and 15 wins, compute the win ratio per pilot, and check the "40% / 40% / 20%" breakdown of Swift's 10 losses against the stated causes. Then do a quick significance check: if Swift and a human were equally likely to win each race, how likely is 15 or more wins out of 25? State the assumptions and why races against the same pilot are not independent trials.
```

---

## Sources
- [Kaufmann et al., "Champion-level drone racing using deep reinforcement learning," Nature 620, 982–987 (2023)](https://www.nature.com/articles/s41586-023-06419-4)
- [PDF of the paper, hosted by the UZH Robotics and Perception Group](https://rpg.ifi.uzh.ch/docs/Nature23_Kaufmann.pdf)
- [TechXplore (from the UZH release): "High-speed AI drone overtakes world-champion drone racers"](https://techxplore.com/news/2023-08-high-speed-ai-drone-world-champion-racers.html)

---
*Back to **[README.md](./README.md)** · **[CONTEXT.md](./CONTEXT.md)**.*
