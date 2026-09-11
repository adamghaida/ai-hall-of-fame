# 📚 Context: AgiBot A2's 106 km walk from Suzhou to Shanghai

**The company and the robot.** AgiBot (Agibot Innovation (Shanghai) Technology Co., Ltd.) is a Shanghai humanoid-robot company. The A2 is its full-size bipedal service humanoid, marketed for reception, guided tours, item delivery and similar roles, with multilingual speech, face recognition and autonomous navigation; AgiBot says it delivered more than 1,000 A2 units in 2025. heise gives the A2 as 1.69 m tall, 69 kg with battery and 40 degrees of freedom, with the A2 Ultra version rated for about 3 hours per battery. The batteries are hot-swappable, which is what made a multi-day walk without shutdown possible.

**The attempt.** From the evening of November 10 to November 13, 2025, a single A2 walked 106.286 km from Jinji Lake in Suzhou to the Bund in Shanghai in 56 h 7 min 49 s, crossing from Jiangsu province into Shanghai municipality. Guinness certified the distance, the time and the title "Longest journey walked by a humanoid robot," and published a feature on February 2, 2026. Guinness records 15 battery replacements, a 7-minute pause for heavy rain, and one 17-hour rest for the support team. Preparation included hundreds of hours of testing and a 24-hour autonomous walk on August 17, 2025 in heat approaching 40°C. The company says the unit was a standard production robot and that only the rubber sole layer showed wear afterwards.

**How it navigated.** Guinness states the robot was not guided or remotely controlled and used its own perception. Interesting Engineering, drawing on company materials, describes dual GPS modules, lidar and infrared depth cameras; AgiBot says it followed traffic rules and handled tiled roads, ramps and crowds. No technical description of the planner, the map, or how much of the route was pre-surveyed has been published.

**Pace.** 106 km in 56 hours is about 1.9 km/h averaged over elapsed time. If the 17-hour support-team rest is excluded on the assumption the robot also paused, the moving average is about 2.7 km/h, a slow human walk. The result is about endurance, not speed.

## Why it's in the Hall of Fame
It is the longest externally adjudicated walk by a humanoid robot, done on a production unit over public roads with mixed surfaces, across day and night, without shutdown. Most humanoid claims are demonstrations chosen by the company; this one has an independent measurement of distance and time and a defined rule set, and it moves the documented endurance ceiling for legged robots from hours to days.

## Honest caveats
- **A company-organised record attempt.** AgiBot planned the route, ran the support crew, and supplied the evidence Guinness adjudicated. Guinness certifies distance, time and compliance with its rules; it does not audit the software or verify how autonomous the navigation was beyond the absence of remote control.
- **"Fully autonomous navigation" is Guinness's statement of the company's claim.** No independent observer has described what the onboard system did versus what was pre-loaded (route, maps, waypoints). A pre-surveyed route with GPS waypoints and local obstacle avoidance would satisfy "not remotely controlled" while being much less than general-purpose navigation.
- **Battery swap count differs by source.** Guinness says 15 replacements; heise reports that AgiBot did not disclose the number when asked. We use the Guinness figure.
- **The support team rested for 17 hours.** The sources do not say whether the robot walked unattended during that time or also paused. The 56-hour elapsed time includes it either way.
- **Specifications conflict.** heise reports 1.69 m and 69 kg with battery; Interesting Engineering reports 175 cm and 55 kg. We report both and do not know which is correct for the unit used.
- **No falls are reported, but the sources are company-derived.** The claim of wear only on the sole rubber comes from AgiBot.
- **Timeline of the record.** The walk was in November 2025; Guinness's feature article is dated February 2, 2026. The entry is dated to the walk.
- **Not a research result.** There is no paper, no method description and nothing reproducible here. It is a documented endurance milestone for deployed hardware.

## Sources
- [Guinness World Records (February 2, 2026)](https://www.guinnessworldrecords.com/news/2026/2/humanoid-robot-stuns-passersby-as-it-walks-over-100-km-across-china-in-big-tech-milestone)
- [AgiBot announcement](https://www.agibot.com/article/231/detail/35.html)
- [heise online](https://www.heise.de/en/news/Guinness-World-Record-Humanoid-Robot-Agibot-A2-Walks-Over-100-km-in-One-Go-11097977.html)
- [Interesting Engineering](https://interestingengineering.com/ai-robotics/china-agibot-humanoid-robot-world-record)

---
*Back to **[README.md](./README.md)** · **[PROMPT.md](./PROMPT.md)**.*
