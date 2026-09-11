# 📚 Context: Tiangong Ultra's 8.64 s 100 m at the World Humanoid Robot Games

**The event.** The World Humanoid Robot Games are a Beijing-organised, state-backed competition first held in August 2025. The 2026 edition (August 22 to 26, National Speed Skating Oval) had 666 teams and 2,056 robots in 51 events, of which 30 were competitive (track, football, dance, table tennis, tug of war) and 21 were scenario-based (factory, hospital, hotel tasks). Organisers also released a dataset of more than 2,500 hours of real-world robot operation data alongside the Games.

**The robot and the team.** Tiangong Ultra is the flagship of the Beijing Humanoid Robot Innovation Centre, founded in November 2023 and branded X-Humanoid; its shareholders include Baidu, Xiaomi's robotics arm and Beijing state-owned enterprises. Reuters gives the Ultra's weight as 75 kg and its top speed as above 17 m/s. The same robot won the first humanoid half-marathon in April 2025 in 2:40:42 (remotely controlled) and the 2025 Games 100 m in 21.50 s. Its 2026 progression was 9.39 s (August 23), 8.86 s (semifinal, August 25), 8.64 s (final, closing day). Reuters quotes team lead Jack Guo on the next goal: turning "high performance into high reliability and high usability."

**How it runs.** Reuters describes the sprint controller as a trained motion-control system that continuously adjusts joints and balance so the robot can sprint upright "without an operator directing every step." That is consistent with the reinforcement-learning locomotion policies now standard for legged robots, trained in simulation and transferred to hardware, but the team has not published the method, and the description comes from a news interview rather than a paper.

**Stopping is the unsolved part.** Al Jazeera reported that after the 8.86 s semifinal the robot hit a thick mat beyond the finish, collapsed, and a small fire appeared in its torso. Reuters describes crash mats past a short run-off as the normal arrangement, with robots slamming into the barrier after every race. A sprinter who can accelerate to 17 m/s but not decelerate has solved half of a locomotion problem.

## Why it's in the Hall of Fame
It is the clearest timed, public, repeated measure of how quickly learned humanoid locomotion improved between 2025 and 2026: the same robot, the same distance, the same event, 21.50 s to 8.64 s. Sprinting is not useful work, but a controller that keeps a 75 kg biped upright at 17 m/s is a real engineering result, and it was achieved in a competition with hundreds of other teams rather than a curated video.

## Honest caveats
- **Whether the 100 m required full autonomy is not confirmed by the primary reports.** CGTN and Al Jazeera do not say whether the sprint was autonomous or remotely piloted. Wikipedia's article on the Games states, citing a Forbes piece by John Koetsier, that in 2026 "activities that mandate full autonomy include sprints, 4 x 100m relay, soccer, tai chi, and gymnastics," while events such as the 400 m obstacle course and kickboxing permit a human in the loop; it separately cites organiser claims (via Chosun Ilbo) that the 400 m, 1,500 m and 4x100 m relay were "fully autonomous" categories. Reuters' description of the controller ("without an operator directing every step") points the same way but is not a statement of the rules. We could not verify the rulebook directly, so treat "fully autonomous sprint" as reported by Wikipedia and consistent with, but not confirmed by, the news sources.
- **The "faster than Bolt" framing is not a comparison.** Different start (upright standing start with a roughly one-second delay versus blocks and a 0.146 s reaction), different finish (the robot ran into a mat), different surface and rules, no anti-doping-style regulation of hardware. Interesting Engineering's own report notes that robot results "cannot replace officially recognized human records."
- **The robot could not stop.** Deceleration was by collision with a mat, and one run ended with a collapse and a small fire in the torso. Any comparison to athletic performance should include that.
- **Date discrepancy in coverage.** CGTN and other outlets place the 8.64 s final on the Games' closing day (August 26); Reuters' syndicated piece dates it August 25. We follow CGTN, the closing-day report.
- **Company-reported specifications.** The 75 kg weight and 17 m/s top speed are the team's figures as relayed by Reuters.
- **Not peer reviewed, no published method.** There is no paper describing the controller. The result is a competition time, verified by the organisers' timing system, and nothing more.
- **State-backed event.** The Games are organised in Beijing with government support and the winning team is partly state-owned; coverage in Chinese state media (CGTN, Global Times) is promotional in tone. The times themselves are consistent across independent outlets (Al Jazeera, Reuters, AP as cited by Wikipedia).

## Sources
- [CGTN: Tiangong Ultra sets 100m record as World Humanoid Robot Games close (August 27, 2026)](https://news.cgtn.com/news/2026-08-27/Tiangong-Ultra-sets-100m-record-as-World-Humanoid-Robot-Games-close-1PWx9LjZDC8/p.html)
- [Al Jazeera: Chinese robot Tiangong clocks sub-9-second 100 metres in Beijing (August 25, 2026)](https://www.aljazeera.com/sports/2026/8/25/chinese-robot-tiangong-clocks-sub-9-second-100-metres-in-beijing)
- [Reuters (via Kathmandu Post), August 29, 2026](https://kathmandupost.com/science-technology/2026/08/29/china-s-record-robotic-strides-show-the-limits-of-human-speed)
- [Reuters (via KFGO), September 9, 2026](https://kfgo.com/2026/09/09/exclusive-after-outrunning-bolt-chinas-robot-champion-races-towards-real-world-work/)
- [Interesting Engineering](https://interestingengineering.com/ai-robotics/humanoid-robot-tiangong-ultra-100m-sprint-record)
- [Wikipedia: World Humanoid Robot Games](https://en.wikipedia.org/wiki/World_Humanoid_Robot_Games)
- [Al Jazeera on the 2025 half-marathon (Tiangong Ultra's earlier win)](https://www.aljazeera.com/features/2025/4/19/humans-outrun-robots-at-beijing-half-marathon)

---
*Back to **[README.md](./README.md)** · **[PROMPT.md](./PROMPT.md)**.*
