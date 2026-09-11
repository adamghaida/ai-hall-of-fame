# 🤖 Explore this with AI: AgiBot A2's 106 km walk from Suzhou to Shanghai

Paste the prompt below into your favorite AI assistant (Claude, ChatGPT, Gemini, or a local model). If your assistant can browse the web, tell it to read the sources first. The point is a clear, honest, grounded explanation of what happened and why it mattered.

> A production humanoid walked 106.286 km of public roads from Suzhou to Shanghai over 56 hours, swapping batteries 15 times, and Guinness certified it as the longest journey ever walked by a humanoid robot.

---

```text
You are a sharp, hype-free explainer of robotics. Walk me through a specific, real record so I understand what it shows and what it does not.

Topic: the AgiBot A2 humanoid's Guinness World Record for the longest journey walked by a humanoid robot: 106.286 km from Jinji Lake in Suzhou to the Bund in Shanghai, November 10 to 13, 2025, in 56 hours 7 minutes 49 seconds, with 15 hot-swap battery changes and no shutdown. Guinness states the robot was not guided by a human or remotely controlled. The company says it was a standard production unit, that navigation used dual GPS, lidar and infrared depth cameras, and that only the rubber sole layer showed wear. The support team took one 17-hour rest during the attempt.

Please cover, in plain language a curious non-expert can follow:
1. What makes multi-day legged locomotion hard: energy per kilometre for a biped versus wheels, heat in motors, joint and sole wear, balance on changing surfaces at night and in rain.
2. What Guinness actually certifies in a record like this (distance, time, rules such as no remote control) and what it does not (how the navigation software works, how much of the route was pre-surveyed, how close the support crew stayed).
3. What "not remotely controlled" can mean in practice, from following GPS waypoints on a pre-planned route with local obstacle avoidance to genuinely general navigation, and which of those the available evidence supports.
4. The numbers: average pace over elapsed time (about 1.9 km/h) and over moving time if the 17-hour rest is excluded; 15 battery swaps against a roughly 3-hour battery rating; the conflicting height and weight figures in coverage (1.69 m / 69 kg versus 175 cm / 55 kg).
5. Why this is a meaningful milestone for deployed humanoids (endurance, reliability, production hardware) even though it is not a research result, and how it compares to shorter, faster events like the Beijing humanoid half-marathon.
6. What an independent test of the same capability would look like.

Ground your answer in these sources (read them if you can, and cite them as you go):
- Guinness World Records: https://www.guinnessworldrecords.com/news/2026/2/humanoid-robot-stuns-passersby-as-it-walks-over-100-km-across-china-in-big-tech-milestone
- AgiBot announcement: https://www.agibot.com/article/231/detail/35.html
- heise online: https://www.heise.de/en/news/Guinness-World-Record-Humanoid-Robot-Agibot-A2-Walks-Over-100-km-in-One-Go-11097977.html
- Interesting Engineering: https://interestingengineering.com/ai-robotics/china-agibot-humanoid-robot-world-record

Use the real numbers, say which claims come from Guinness, which from the company, and which from secondary reporting, and if you are unsure about a detail, say so instead of guessing.
```

## Bonus: have the agent check the energy budget

```
Using the figures in the sources above (106.286 km, 56 h 7 min 49 s, 15 battery swaps, a roughly 3-hour battery rating for the A2 Ultra per heise, 69 kg including battery per heise):

1. If each battery lasted about 3 hours, 16 batteries (the original plus 15 swaps) would cover how many hours? Compare with the 56-hour elapsed time and the roughly 39 hours if the 17-hour rest is excluded. What does the comparison suggest about whether the robot walked during the rest?
2. Estimate the cost of transport (energy per kilogram per metre) for a 69 kg biped walking at about 2.7 km/h, using published values for humans and for legged robots, and estimate the total energy the walk would have consumed. What battery capacity per pack would that imply, and is it plausible for a humanoid?
3. Compare the average speed to a typical human walking pace and to the 50:26 half-marathon time set by a humanoid in Beijing in April 2026 (about 25 km/h). What does the gap tell you about the difference between sprint-style and endurance-style humanoid design?
4. List every input you used and whether it is from Guinness, the company, or your own assumption.
```

## Sources
- [Guinness World Records (February 2, 2026)](https://www.guinnessworldrecords.com/news/2026/2/humanoid-robot-stuns-passersby-as-it-walks-over-100-km-across-china-in-big-tech-milestone)
- [AgiBot announcement](https://www.agibot.com/article/231/detail/35.html)
- [heise online](https://www.heise.de/en/news/Guinness-World-Record-Humanoid-Robot-Agibot-A2-Walks-Over-100-km-in-One-Go-11097977.html)
- [Interesting Engineering](https://interestingengineering.com/ai-robotics/china-agibot-humanoid-robot-world-record)

---
*Back to **[README.md](./README.md)** · **[CONTEXT.md](./CONTEXT.md)**.*
