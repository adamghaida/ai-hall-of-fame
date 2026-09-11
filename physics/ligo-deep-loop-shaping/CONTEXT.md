# 📚 Context: Deep Loop Shaping on LIGO

**The people.** The paper is a collaboration between **Google DeepMind** (lead authors **Jonas Buchli** and **Brendan Tracey**, with Yu Him Justin Chiu, Matthias Lochbrunner, Craig Donner, Iain Barr and others), **Caltech's LIGO Laboratory** (**Rana X. Adhikari**, **Christopher Wipf**) and the **Gran Sasso Science Institute** in Italy (**Jan Harms**, Tomislav Andric). It appeared in *Science* volume 389, issue 6664, pages 1012 to 1015, on 4 September 2025, with a preprint posted to arXiv (2509.14016) on 17 September 2025.

**The problem.** A LIGO interferometer is only sensitive if its mirrors sit almost perfectly still in the right positions and orientations. Ground motion, dominated at low frequencies by ocean waves, pushes them around, so each mirror is held by feedback loops that measure its motion and push back. Any controller of that kind also feeds its own sensing noise and actuator noise into the mirror, and at low frequencies (roughly 10 to 30 Hz) that control noise is what limits the detector. LIGO's observation band runs from about 10 Hz to 5,000 Hz; the lowest decade is where mergers of the most massive black holes, in the hundreds of solar masses, would show up, and where early warning of neutron-star mergers would come from.

**Loop shaping, then deep loop shaping.** Control engineers have long designed such feedback loops by "loop shaping": choosing a controller so that the closed loop has a target frequency response, strong where disturbances must be suppressed and quiet where noise must not be injected. Doing that by hand for a nonlinear, high-order, unstable plant with many coupled loops is hard, and the achievable trade-offs are limited. Deep Loop Shaping keeps the objective (a target spectrum of residual motion and injected noise) but has a reinforcement-learning agent find the controller. The reward is computed in the frequency domain, which is what lets the agent be told "suppress here, do not inject there" directly rather than through a time-domain proxy. The controller is a neural network trained in simulation and then run on the real detector.

**What was measured.** Installed on the most unstable and difficult loop at the LIGO Livingston Observatory in Louisiana, the learned controller reduced control noise in the 10 to 30 Hz band by more than 30x compared with the existing controller, with reductions of up to 100x in narrower sub-bands. DeepMind's blog describes the noise as pushed below the level of quantum fluctuations in the observation band relevant to several-hundred-solar-mass mergers. Reporting on the release puts the live hardware test at about one hour.

**Where it leads.** The stated next steps are longer-duration tests and application to more of LIGO's mirror-control loops; the authors also point to vibration suppression and noise cancellation problems in aerospace, robotics and structural engineering. It is a sibling of the learned-control results elsewhere in this collection, such as [reinforcement learning on the TCV tokamak](../fusion-plasma-control/): in each case a controller trained in simulation is run on a real, expensive instrument.

## Why it's in the Hall of Fame
Control noise at low frequency was a known, specific, long-standing obstacle in gravitational-wave astronomy. A learned controller removed most of it on a working detector, in a loop that classical methods had struggled with, and the result is peer-reviewed in *Science*. It is a concrete instance of AI improving a flagship physics instrument rather than analysing its output.

## Honest caveats
- **Proof of concept on one loop.** The demonstration is on a single feedback loop of one detector (Livingston). The sensitivity gain for LIGO as a whole requires applying the method to many loops, which is stated as future work.
- **Short test.** Coverage of the release reports about one hour of live operation. The paper does not claim the controller is in use during routine observing runs, and this entry does not either.
- **"30 to 100x" is a control-noise figure, not a detection-rate figure.** The blog's "hundreds more events per year" is a projection contingent on rolling the method out further; no new gravitational-wave detection is attributed to this controller.
- **Which loop.** The sources we could access describe it as the observatory's most unstable and difficult mirror-stabilisation loop; we have not independently verified the loop's technical designation and do not name one here.
- **Access.** The Science article is paywalled; we verified the abstract and headline numbers via the arXiv preprint and the DeepMind and Phys.org write-ups. No code release accompanies the paper as far as we could find.

## Sources
- [Science paper: "Improving cosmological reach of a gravitational wave observatory using Deep Loop Shaping", Science 389, 1012–1015 (2025)](https://www.science.org/doi/10.1126/science.adw1291)
- [Preprint (arXiv:2509.14016)](https://arxiv.org/abs/2509.14016)
- [Google DeepMind blog: "Using AI to perceive the universe in greater depth" (4 September 2025)](https://deepmind.google/discover/blog/using-ai-to-perceive-the-universe-in-greater-depth/)
- [Phys.org: "New algorithm hushes unwanted noise in LIGO, may lead to more black hole discoveries" (4 September 2025)](https://phys.org/news/2025-09-algorithm-hushes-unwanted-noise-ligo.html)

---
*Back to **[README.md](./README.md)** · **[PROMPT.md](./PROMPT.md)**.*
