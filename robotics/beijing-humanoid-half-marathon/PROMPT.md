# 🤖 Explore this with AI: the 2026 Beijing humanoid half-marathon

Paste the prompt below into your favorite AI assistant (Claude, ChatGPT, Gemini, or a local model). If your assistant can browse the web, tell it to read the sources first. The point is a clear, honest, grounded explanation of what happened and why it mattered.

> A year after the first humanoid half-marathon, where the winner took 2 hours 40 minutes and 6 of 21 robots finished, Honor's "Lightning" covered 21.1 km in 50:26, with battery swaps, a fall near the end, and handlers to pick it up.

---

```text
You are a sharp, hype-free explainer of robotics. Walk me through a specific, real event so I understand what it shows and what it does not.

Topic: the Beijing E-Town Humanoid Robot Half-Marathon of April 19, 2026. Winner: "Lightning" (Shandian), built by the smartphone maker Honor, in 50 minutes 26 seconds over 21.0975 km. Honor robots also took second (50:56) and third (53:01). Rules: two categories (fully autonomous and remotely controlled, with remote-controlled times multiplied by 1.2), 30-second start intervals, battery swaps monitored by judges (up to three allowed), more than ten terrain types, over 100 teams. Organisers say 38% of entries ran autonomously. The 2025 edition was won in about 2 hours 40 minutes by a remotely controlled robot, with 6 of 21 finishing. The men's human world record is 57:20 (Jacob Kiplimo, Lisbon, March 8, 2026).

Please cover, in plain language a curious non-expert can follow:
1. What a humanoid has to do to run 21 km: energy budget, heat, joint wear, balance on varied surfaces, and why 2025's robots mostly failed.
2. What changed between 2025 and 2026 (winner's time, finisher rate, share of autonomous entries), and what a purpose-built running humanoid like Lightning does differently (long legs modelled on elite runners, liquid cooling adapted from phones).
3. The autonomy question: what "fully autonomous" meant under these rules, the 1.2x weighting for remote-controlled robots, and the fact that a remote-controlled robot crossed first in 48:19 while the self-navigating Lightning was crowned champion. Note that the official Beijing government page does not itself state Lightning's category.
4. Why the "beat the human world record" framing is weak: closed pre-mapped lane, interval starts, battery swaps, engineers following with equipment, and Lightning falling into a barricade near the end and being stood back up by handlers.
5. What the sceptics said (Rodney Brooks: "no safety at all"; Alan Fern: no scientific advance in that part of the problem) and whether you agree.
6. What a version of this benchmark would look like that actually measured useful capability.

Ground your answer in these sources (read them if you can, and cite them as you go):
- Beijing government official report: https://english.beijing.gov.cn/latest/news/202604/t20260419_4593508.html
- NBC News: https://www.nbcnews.com/world/china/humanoid-robots-race-humans-beijing-half-marathon-showing-rapid-advanc-rcna340842
- Scientific American: https://www.scientificamerican.com/article/a-humanoid-robot-beat-the-human-half-marathon-record-at-a-beijing-race-but-what-did-it-actually-prove/
- Smithsonian Magazine: https://www.smithsonianmag.com/smart-news/a-humanoid-robot-just-beat-the-human-world-record-for-the-fastest-half-marathon-during-a-race-in-china-180988599/
- Al Jazeera on the 2025 edition: https://www.aljazeera.com/features/2025/4/19/humans-outrun-robots-at-beijing-half-marathon
- World Athletics on the human record: https://worldathletics.org/news/report/jacob-kiplimo-half-marathon-world-record-lisbon

Use the real numbers, flag anything reported by only one outlet, and if you are unsure about a detail, say so instead of guessing.
```

## Bonus: have the agent do the pace arithmetic

```
1. Convert 50:26 over 21.0975 km into average speed (m/s and km/h) and pace per km. Do the same for the human record of 57:20 and for the 2025 robot winner's 2 hours 40 minutes.
2. If Lightning used the maximum of three battery swaps and each took roughly a minute, what was its moving average speed?
3. Compare that speed to Lightning's 100 m time of 9.47 s at the August 2026 World Humanoid Robot Games. What ratio of sprint speed to distance speed does that imply, and how does it compare to the same ratio for elite human athletes (Bolt's 9.58 s versus Kiplimo's 57:20)?
4. Say which inputs are official race data and which are secondary reporting.
```

## Sources
- [Beijing municipal government (English): official race report](https://english.beijing.gov.cn/latest/news/202604/t20260419_4593508.html)
- [NBC News](https://www.nbcnews.com/world/china/humanoid-robots-race-humans-beijing-half-marathon-showing-rapid-advanc-rcna340842)
- [Scientific American](https://www.scientificamerican.com/article/a-humanoid-robot-beat-the-human-half-marathon-record-at-a-beijing-race-but-what-did-it-actually-prove/)
- [Smithsonian Magazine](https://www.smithsonianmag.com/smart-news/a-humanoid-robot-just-beat-the-human-world-record-for-the-fastest-half-marathon-during-a-race-in-china-180988599/)
- [Al Jazeera on the 2025 edition](https://www.aljazeera.com/features/2025/4/19/humans-outrun-robots-at-beijing-half-marathon)
- [World Athletics: Kiplimo 57:20](https://worldathletics.org/news/report/jacob-kiplimo-half-marathon-world-record-lisbon)

---
*Back to **[README.md](./README.md)** · **[CONTEXT.md](./CONTEXT.md)**.*
