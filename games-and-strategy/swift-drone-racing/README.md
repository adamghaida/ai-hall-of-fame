# Swift beats drone-racing world champions

**Field:** ♟️ Games & Strategy  ·  **When:** August 2023 · Nature

> An autonomous quadcopter flying on its own camera and inertial sensors beat three champion human pilots in head-to-head races, winning 15 of 25 and setting the fastest time on the track, 17.465 s to the best human's 17.956 s.

## What happened
**Swift**, built by Elia Kaufmann, Davide Scaramuzza and colleagues at the University of Zurich's Robotics and Perception Group with Intel, raced first-person-view (FPV) drones against three human champions: **Alex Vanover** (2019 Drone Racing League world champion), **Thomas Bitmatta** (two-time MultiGP International Open World Cup champion) and **Marvin Schaepper** (three-time Swiss national champion). The races took place in June 2022 in a hangar near Zurich and were reported in *Nature* (vol. 620, pp. 982–987, 30 August 2023).

The track had **seven square gates** over a **75 m lap** inside a 30 × 30 × 8 m volume, including a Split-S manoeuvre, and the drones exceeded **100 km/h** with accelerations of more than five times gravity. Swift used only onboard sensing and computation during the races: a camera at 30 Hz and an inertial measurement unit, with no external tracking.

Head-to-head results, from the paper: Swift won **5 of 9** races against Vanover, **4 of 7** against Bitmatta and **6 of 9** against Schaepper, **15 of 25** overall. Its best three-lap race time was **17.465 s**, against **17.956 s** for Vanover, 18.746 s for Bitmatta and 21.160 s for Schaepper.

The control policy was trained by **deep reinforcement learning in simulation**, with the gap to reality closed by data collected on the real drone: learned residual models of the physical dynamics and of the perception system's errors, identified with a motion-capture system that was used only during that data-collection phase.

## Why it matters
Every earlier entry in this collection is a game on a board or a screen. Swift is the first autonomous system to beat human world champions at a **physical sport**, where the "moves" are motor commands issued from noisy sensors at 100 km/h and a mistake is a crash. The paper's comparison with classical approaches is pointed: no traditional trajectory-planning method achieved competitive lap times even when handed near-perfect state estimates from motion capture, whereas Swift did it from a single onboard camera. It is a milestone for mobile robotics as much as for reinforcement learning, and its lineage runs from [Gran Turismo Sophy](../gran-turismo-sophy/), which beat champion drivers in a simulator the year before.

## Sources — the record of the discovery
- [Kaufmann et al., "Champion-level drone racing using deep reinforcement learning," Nature 620, 982–987 (2023)](https://www.nature.com/articles/s41586-023-06419-4)
- [PDF of the paper, hosted by the UZH Robotics and Perception Group](https://rpg.ifi.uzh.ch/docs/Nature23_Kaufmann.pdf)
- [TechXplore (from the UZH release): "High-speed AI drone overtakes world-champion drone racers"](https://techxplore.com/news/2023-08-high-speed-ai-drone-world-champion-racers.html)

---
*In this folder: **[PROMPT.md](./PROMPT.md)** (a prompt to explore it with AI) · **[CONTEXT.md](./CONTEXT.md)** (background & caveats). Part of the [AI Hall of Fame](../../README.md) → [♟️ Games & Strategy](../).*
