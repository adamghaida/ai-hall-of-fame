# 🤖 Explore this with AI: Reinforcement learning steers a DIII-D plasma around tearing instabilities

Paste the prompt below into your favorite AI assistant (Claude, ChatGPT, Gemini, or a local model). If your assistant can browse the web, tell it to read the sources first. The point is a clear, honest, grounded explanation of what happened and why it mattered.

> A reinforcement-learning controller ran live on the DIII-D tokamak, watched a neural network's forecast of how close the plasma was to tearing, and adjusted beam power and plasma shape in real time to keep the plasma below that threshold while holding ITER-baseline-like conditions.

---

```text
You are a sharp, honest plasma-physics and machine-learning explainer. Walk me through a specific, real AI achievement so that I actually understand it, not just the headline.

Topic: Jaemin Seo, Egemen Kolemen and colleagues (Princeton University / Princeton Plasma Physics Laboratory) used deep reinforcement learning to avoid tearing instabilities in live experiments on the DIII-D tokamak. Published in Nature 626, 746-751, on 21 February 2024.

Please cover, in plain language a curious non-expert can follow:
1. What a tearing instability is (magnetic islands at the m/n = 2/1 surface), why it leads to disruptions, and why operators normally avoid it by staying far from the high-pressure operating limits that fusion performance actually needs.
2. How the system works: a neural-network dynamics model trained on past DIII-D data that takes plasma profiles (electron density, electron temperature, ion rotation, safety factor, pressure on 33 flux coordinates) and predicts a "tearability" score between 0 and 1 about 25 ms ahead; a DDPG reinforcement-learning policy trained inside that model to maximise normalised pressure beta_N while keeping tearability under a threshold k; and the two actuators it controls, total neutral-beam power and top triangularity.
3. What actually happened on the machine: the policy was compiled to C with Keras2C and run in DIII-D's plasma control system across shots 193266, 193273, 193277, 193280, 193281 and 193282, with thresholds k = 0.2, 0.5 and 0.7, in conditions resembling the ITER baseline scenario. Explain what "tracking the stable path in a time-varying operating space" means.
4. Why it matters for ITER and future reactors, and how it relates to the 2022 DeepMind/EPFL TCV work that used reinforcement learning to control the magnetic coils shaping the plasma.
5. The honest caveats:
   - The paper describes itself as a proof of concept still in the early stages of fine-tuning.
   - Only a handful of shots, in one scenario; other operating modes would need separate controllers.
   - The paper's model predicts 25 ms ahead per step while Princeton's press release says "up to 300 milliseconds in advance"; note the difference and do not overstate the horizon.
   - Diagnostic uncertainties of roughly 10% (temperature) and 20% (density) in the tearability prediction.
   - One shot (193282) disrupted; the paper attributes it to an unrelated loss of plasma-current control.
   - Data available only on request; no public code.
6. What I should read or explore next to go deeper.

Ground your answer in these sources (read them if you can, and cite them as you go):
- Nature paper: https://www.nature.com/articles/s41586-024-07024-9
- Princeton Engineering news: https://engineering.princeton.edu/news/2024/02/21/engineers-use-ai-wrangle-fusion-power-grid
- US DOE Office of Science highlight: https://www.energy.gov/science/fes/articles/ai-tackles-disruptive-tearing-instability-fusion-plasma

Be concrete, use the paper's own numbers, and if you are unsure about a detail, say so instead of guessing.
```

## Bonus: have the agent check the claims against the paper

There is no public code or dataset for this controller, so the checkable object is the paper itself. Have a capable assistant audit it rather than repeat it.

```
Open https://www.nature.com/articles/s41586-024-07024-9 and do three things.

1. Find every statement about the prediction horizon of the tearability model. Reconcile the 25 ms figure with the "up to 300 milliseconds" figure in Princeton's press release (https://engineering.princeton.edu/news/2024/02/21/engineers-use-ai-wrangle-fusion-power-grid). Is 300 ms a multi-step rollout, a different quantity, or a press simplification?

2. Write out the reward function in words and in symbols: what is rewarded, what is penalised, and how the threshold k enters. Then explain what changing k from 0.2 to 0.7 should do to the plasma's beta_N and its tearing margin, and check whether the reported shots behave that way.

3. List the paper's stated limitations verbatim, and add any you think are missing (number of shots, scenario coverage, sensor/actuator differences from ITER, data availability).
```

---

## Sources
- [Nature paper: "Avoiding fusion plasma tearing instability with deep reinforcement learning", Nature 626, 746–751 (2024)](https://www.nature.com/articles/s41586-024-07024-9)
- [Princeton Engineering news: "Engineers use AI to wrangle fusion power for the grid" (21 February 2024)](https://engineering.princeton.edu/news/2024/02/21/engineers-use-ai-wrangle-fusion-power-grid)
- [US DOE Office of Science highlight: "AI Tackles Disruptive Tearing Instability in Fusion Plasma"](https://www.energy.gov/science/fes/articles/ai-tackles-disruptive-tearing-instability-fusion-plasma)

---
*Back to **[README.md](./README.md)** · **[CONTEXT.md](./CONTEXT.md)**.*
