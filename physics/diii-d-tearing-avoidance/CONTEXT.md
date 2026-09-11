# 📚 Context: Reinforcement learning steers a DIII-D plasma around tearing instabilities

**The people.** First author **Jaemin Seo** did the work as a postdoc in **Egemen Kolemen**'s group (Princeton University, Department of Mechanical and Aerospace Engineering, and the Princeton Plasma Physics Laboratory) and is now an assistant professor at Chung-Ang University in Korea. Co-authors include SangKyeun Kim, Azarakhsh Jalalvand, Rory Conlin, Andrew Rothstein, Joseph Abbate, Keith Erickson, Josiah Wai and Ricardo Shousha. The experiments ran on the **DIII-D National Fusion Facility** in San Diego, a US Department of Energy user facility operated by General Atomics. Funding came from the DOE Office of Fusion Energy Sciences and the National Research Foundation of Korea. The paper is *Nature* 626, 746 to 751, published 21 February 2024.

**The problem.** A tokamak reaches high fusion performance by pushing plasma pressure up, but high pressure is where tearing modes (magnetic islands at rational surfaces, here the m/n = 2/1 mode) tend to appear. Once a tearing mode locks, the plasma usually disrupts, which in a reactor-scale machine like ITER can damage the vessel. Standard practice is to stay well inside empirical stability limits, which costs performance. The goal here was to run close to the limit but not over it.

**How it works.** The team first built a data-driven dynamics model from DIII-D's experimental history. It takes the measured plasma profiles (five quantities on 33 flux coordinates) plus the actuator settings and predicts a short step ahead: the next plasma state and a scalar "tearability" between 0 and 1 that estimates how likely a tearing instability is. That model became the simulator in which a DDPG reinforcement-learning agent was trained. The reward is positive while predicted tearability stays under a threshold k and rises with β_N; if tearability exceeds k the agent is penalised in proportion to the overshoot. The trained policy was compiled to C via Keras2C and installed in the DIII-D plasma control system, where it adjusted total neutral-beam power and the top triangularity of the plasma shape during real discharges.

**What the experiments showed.** Across the reported shots the controller held tearability under the chosen threshold and kept the plasma on a stable trajectory through the time-varying operating space, in conditions designed to resemble the ITER baseline scenario where tearing is a known problem. Different threshold values (0.2, 0.5, 0.7) traded performance against margin, as intended. One shot (193282) did disrupt, but the paper attributes that to an unrelated loss of plasma-current control rather than the AI controller.

**Lineage.** This sits alongside DeepMind and EPFL's 2022 work on TCV ([fusion-plasma-control](../fusion-plasma-control/)), which used reinforcement learning to drive the magnetic coils that shape the plasma. The DIII-D work targets a different layer of the control problem: stability at high pressure, using heating and shape as the knobs, with a learned instability forecaster in the loop. Kolemen's group has published related real-time machine-learning controllers for DIII-D in *Nuclear Fusion* (volume 64, article 026006, 2024), which the DOE highlight lists alongside the Nature paper.

## Why it's in the Hall of Fame
It is a documented, peer-reviewed case of a learned controller running live on a major tokamak and doing something operators could not do by hand: continuously steering the plasma along the edge of the tearing limit instead of parking it safely far away. The policy was learned from experimental data rather than a physics model, which is the basis for the authors' case that it could transfer to devices whose operating space has not been explored yet.

## Honest caveats
- **Proof of concept, by the authors' own description.** The paper calls itself a "proof-of-concept study on tearing avoidance using RL" that "is still in the early stages of fine-tuning".
- **Small number of shots, one scenario.** The reported experiments are a handful of DIII-D discharges in an ITER-baseline-like regime. Other operating modes (hybrid, fully non-inductive) would need their own controllers.
- **The forecast horizon is stated differently in different places.** The Nature paper's dynamics model predicts tearability 25 ms ahead per step. Princeton's press release says the model can forecast instabilities "up to 300 milliseconds in advance". We could not confirm from the paper text we accessed how the 300 ms figure is derived, so this entry treats 25 ms as the paper's number and 300 ms as the press release's.
- **Diagnostic uncertainty propagates.** The authors estimate roughly 10% uncertainty from electron temperature errors and roughly 20% from density measurement errors in the tearability prediction.
- **Transfer to ITER is an argument, not a result.** DIII-D's sensors and actuators differ from ITER's; the paper notes that the controller's applicability is constrained by the specific sensing and actuation available.
- **Data are not openly released.** The data availability statement says data are available from the corresponding author on reasonable request. There is no public code release to reproduce the controller.
- **One shot disrupted.** Shot 193282 ended in a disruption; the paper attributes it to an unintended loss of plasma-current control unrelated to the AI system.

## Sources
- [Nature paper: "Avoiding fusion plasma tearing instability with deep reinforcement learning", Nature 626, 746–751 (2024)](https://www.nature.com/articles/s41586-024-07024-9)
- [Princeton Engineering news: "Engineers use AI to wrangle fusion power for the grid" (21 February 2024)](https://engineering.princeton.edu/news/2024/02/21/engineers-use-ai-wrangle-fusion-power-grid)
- [US DOE Office of Science highlight: "AI Tackles Disruptive Tearing Instability in Fusion Plasma"](https://www.energy.gov/science/fes/articles/ai-tackles-disruptive-tearing-instability-fusion-plasma)

---
*Back to **[README.md](./README.md)** · **[PROMPT.md](./PROMPT.md)**.*
