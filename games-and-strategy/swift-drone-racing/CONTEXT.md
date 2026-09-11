# 📚 Context: Swift

**The sport.** In FPV drone racing, pilots fly quadcopters through a gate course wearing goggles that show the drone's onboard camera feed. At the top level the aircraft reach speeds above 100 km/h and pull more than 5 g in turns, and the margin between a fast lap and a crash is a few centimetres. Earlier autonomous racers had either flown far slower than humans or relied on external motion-capture systems to know where they were.

**The system.** Swift has two parts. A *perception* stack turns the onboard camera and IMU into an estimate of the drone's state: visual-inertial odometry (an Intel RealSense T265 running at 100 Hz) plus a convolutional network that detects the gate corners in the camera image, fused by a Kalman filter. A *control policy*, a small neural network, maps that state estimate to low-level flight commands. The policy is trained by model-free deep reinforcement learning entirely in simulation, rewarded for progress through the gates and penalized for collisions. The simulator alone is not accurate enough; the group flew the real drone under motion capture to fit residual models of the aerodynamics and of the perception noise, then trained with those in the loop. Motion capture is not used when racing.

**The events.** The races were flown in a hangar at Dübendorf airport near Zurich between June 5 and 13, 2022. Vanover won 4 of 9, Bitmatta 3 of 7, Schaepper 3 of 9. The paper attributes Swift's advantage partly to lower sensorimotor latency (about 40 ms from observation to command, versus roughly 220 ms for expert pilots) and to a more consistent racing line, with lower variance in lap times than any of the humans. The pilots' own advantages included a camera refreshing four times faster (120 Hz against 30 Hz) and the ability to recover from a crash and to react to an opponent.

**People.** Elia Kaufmann, Leonard Bauersfeld, Antonio Loquercio, Matthias Müller, Vladlen Koltun and Davide Scaramuzza; University of Zurich and Intel.

## Why it's in the Hall of Fame
It is the first time an autonomous vehicle beat human world champions at a physical race, on equal hardware, using only onboard sensing. The simulation-to-reality method, learning the residual between simulator and world rather than trying to simulate everything, is the technical contribution that the rest of robotics has been drawing on since.

## Honest caveats
- **Fixed track, controlled conditions.** Swift must be trained for the specific track it races, and the paper states that it assumes the environment looks as it did during training; changes in illumination can make the perception system fail, and the UZH release notes it did lose in exactly that situation. The humans could adapt on the spot.
- **Ten losses, mostly crashes.** Of Swift's 10 defeats, 40% came from collisions with the opponent's drone, 40% from hitting a gate, and 20% from simply being slower. Swift was not trained to recover after a crash, so a contact that a human would fly through ended its race.
- **Blind to the opponent.** The policy does not perceive the other drone; it flies for the fastest expected finish regardless of race position, which cost it in close contact and means it is not "racing" in the tactical sense a human is.
- **Modest sample.** Twenty-five races across three pilots, with a 15–10 result. The best-time comparison (17.465 s vs 17.956 s) is a half-second on one track; the paper's lap-time distributions are more informative than any single number.
- **Hardware parity, not sensing parity.** The drones were matched, but Swift's 100 Hz inertial data and 40 ms latency are advantages no human can have, while the humans' 120 Hz video is one Swift did not.
- **Real-world data was needed.** "Trained in simulation" is true of the policy, but the residual models that made it work were fitted to real flights under motion capture. This is sim-to-real with a real-data bridge, not pure simulation.

## Sources
- [Kaufmann et al., "Champion-level drone racing using deep reinforcement learning," Nature 620, 982–987 (2023)](https://www.nature.com/articles/s41586-023-06419-4)
- [PDF of the paper, hosted by the UZH Robotics and Perception Group](https://rpg.ifi.uzh.ch/docs/Nature23_Kaufmann.pdf)
- [TechXplore (from the UZH release): "High-speed AI drone overtakes world-champion drone racers"](https://techxplore.com/news/2023-08-high-speed-ai-drone-world-champion-racers.html)

---
*Back to **[README.md](./README.md)** · **[PROMPT.md](./PROMPT.md)**.*
