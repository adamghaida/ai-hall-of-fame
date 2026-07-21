# 🛠️ How to recreate: Controlling fusion plasma inside a real tokamak

*This file is a practical starting point for reproducing or exploring the result — code, data, models, and (where one exists) the actual prompt or method. It is not official documentation; always defer to the primary sources.*

You cannot run this without a tokamak, but the approach is documented and the simulation stack is reproducible. Train a policy in a **free-boundary plasma-equilibrium simulator** (the paper used a model of TCV) with RL, rewarding accurate tracking of plasma shape, position, and current; then transfer zero-shot to hardware. EPFL and DeepMind describe the reward shaping and the sim-to-real gap in detail. Related open plasma simulators exist for study.

## Primary sources & code
- [DeepMind blog](https://deepmind.google/discover/blog/accelerating-fusion-science-through-learned-plasma-control/)
- [Nature paper](https://www.nature.com/articles/s41586-021-04301-9)
- [MIT Tech Review](https://www.technologyreview.com/2022/02/16/1045470/deepminds-ai-can-control-superheated-plasma-inside-a-fusion-reactor/)

---
*Back to **[README.md](./README.md)** · **[CONTEXT.md](./CONTEXT.md)**.*
