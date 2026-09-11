# Reinforcement learning steers a DIII-D plasma around tearing instabilities

**Field:** ⚛️ Physics  ·  **When:** February 2024 · Nature

> A reinforcement-learning controller ran live on the DIII-D tokamak, watched a neural network's forecast of how close the plasma was to tearing, and adjusted beam power and plasma shape in real time to keep the plasma below that threshold while holding ITER-baseline-like conditions.

## What happened
Tearing instabilities are one of the main ways a tokamak plasma disrupts: magnetic islands form at the q = 2 surface, confinement collapses, and the discharge ends. Operators normally avoid them with conservative, hand-tuned operating limits. A team led by **Jaemin Seo** and **Egemen Kolemen** (Princeton University and the Princeton Plasma Physics Laboratory) instead trained a controller to steer around them, and published the result in *Nature* (volume 626, pages 746 to 751) on **21 February 2024**.

The system has two parts. First, a **multimodal neural-network dynamics model** trained on past DIII-D experiments takes the plasma's profiles (electron density, electron temperature, ion rotation, safety factor and pressure, mapped onto 33 flux coordinates) and outputs a continuous **"tearability"** score between 0 and 1, predicting the likelihood of a tearing instability **25 ms** ahead. Second, a **deep reinforcement-learning** policy (deep deterministic policy gradient, DDPG) was trained inside that model to maximise normalised plasma pressure β_N while keeping predicted tearability below a chosen threshold k. Its actuators were the **total neutral-beam power** and the **top triangularity** of the plasma shape.

The trained network was converted to C with Keras2C and run in DIII-D's plasma control system. In live experiments (shots 193266, 193273, 193277, 193280, 193281 and 193282) with thresholds k = 0.2, 0.5 and 0.7, the controller kept the tearing likelihood under threshold and tracked the stable path in the operating space while maintaining H-mode performance, under conditions resembling the **ITER baseline scenario** in which tearing is common. Princeton's release describes the model as able to forecast instabilities **up to 300 milliseconds** ahead of their onset; the paper's dynamics model works in 25 ms prediction steps.

## Why it matters
This is the first published demonstration of a reinforcement-learning controller actively avoiding tearing instabilities on a working tokamak, rather than reacting after they appear. The approach learned its control policy from past experimental data rather than from a physics model, which the authors argue is what makes it transferable to a device like ITER, where the operating space is not yet mapped. It complements the earlier magnetic-shape control work on TCV (see [Controlling fusion plasma inside a real tokamak](../fusion-plasma-control/)): that work controlled the coils that shape the plasma; this one controls heating and shape to keep the plasma stable at high pressure.

The honest framing, from the paper itself: this is a "proof-of-concept study" that "is still in the early stages of fine-tuning". It was run on a handful of shots in one scenario, on a machine whose sensors and actuators differ from ITER's.

## Sources — the record of the discovery
- [Nature paper: "Avoiding fusion plasma tearing instability with deep reinforcement learning", Nature 626, 746–751 (2024)](https://www.nature.com/articles/s41586-024-07024-9)
- [Princeton Engineering news: "Engineers use AI to wrangle fusion power for the grid" (21 February 2024)](https://engineering.princeton.edu/news/2024/02/21/engineers-use-ai-wrangle-fusion-power-grid)
- [US DOE Office of Science highlight: "AI Tackles Disruptive Tearing Instability in Fusion Plasma"](https://www.energy.gov/science/fes/articles/ai-tackles-disruptive-tearing-instability-fusion-plasma)

---
*In this folder: **[PROMPT.md](./PROMPT.md)** (a prompt to explore it with AI) · **[CONTEXT.md](./CONTEXT.md)** (background & caveats). Part of the [AI Hall of Fame](../../README.md) → [⚛️ Physics](../).*
