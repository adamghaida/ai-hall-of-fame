# 🤖 Explore this with AI: π*0.6 and RECAP

Paste the prompt below into your favorite AI assistant (Claude, ChatGPT, Gemini, or a local model). If your assistant can browse the web, tell it to read the sources first. The point is a clear, honest, grounded explanation of what happened and why it mattered.

> A robot foundation model that keeps learning after it ships: fine-tuned with RL on its own runs plus human corrections, it ran an espresso station for 18 hours, folded 50 unfamiliar garments in a new home, and assembled 59 chocolate boxes in a factory.

---

```text
You are a careful, hype-free explainer of robot learning. Walk me through a specific, real research result so I understand the method, the evidence and the limits.

Topic: Physical Intelligence's π*0.6 and the RECAP method (Reinforcement Learning with Experience and Corrections via Advantage-conditioned Policies), released November 17, 2025 (blog) and November 18, 2025 (arXiv:2511.14759, 56 authors). Reported results: an 18-hour espresso service (5:30 am to 11:30 pm) at above 90% success, 50 novel laundry items folded in a new home, 59 chocolate boxes assembled and labelled in a real factory, and on the hardest tasks "more than doubles task throughput and roughly halves the task failure rate" versus the same model without RL.

Please cover, in plain language a curious non-expert can follow:
1. Why imitation-learned robot policies fail on long tasks (compounding errors, unseen states) and why simply collecting more demonstrations does not fix it.
2. How RECAP works: the three data sources (demonstrations, autonomous rollouts, expert teleoperated interventions), the value function, and what "advantage conditioning" means. Explain why conditioning on advantage is used instead of directly optimising the policy against the value, and how the model can outperform the average quality of its training data.
3. What "π0.6" versus "π*0.6" refers to (offline-RL pre-training versus per-task specialisation with on-robot data).
4. How to read the three demonstrations: what each one shows, and what a single 18-hour run or a single 59-box run does and does not establish.
5. The honest limits: company preprint, not peer reviewed; baselines and tasks chosen by the company; single episodes; humans still correcting the robot during data collection; absolute success rates not given for two of the three tasks.
6. Where this sits relative to earlier VLAs (π0, π0.5, RT-2, OpenVLA) and what a convincing independent test would look like.

Ground your answer in these sources (read them if you can, and cite them as you go):
- Physical Intelligence blog: https://www.pi.website/blog/pistar06
- arXiv paper: https://arxiv.org/abs/2511.14759
- Humanoids Daily coverage: https://www.humanoidsdaily.com/news/physical-intelligence-claims-rl-is-back-with-new-model-that-learns-from-its-own-mistakes

Use the real numbers, label every figure as company-reported, and if you are unsure about a detail, say so instead of guessing.
```

## Bonus: have the agent implement the core idea

Advantage conditioning is a small, checkable idea. Have an assistant write a toy version so you can see why it works.

```
Write a short, runnable Python script (numpy only) that demonstrates advantage-conditioned policy learning on a toy problem:

1. A 1-D "reaching" task: state is a position x in [-1, 1], the goal is x = 0, an episode is 10 steps, reward is negative distance at the end.
2. Generate a mixed dataset from two behaviour policies: a "good" one that moves toward the goal with noise and a "bad" one that moves randomly. Do not label which is which.
3. Fit a simple value function V(x, t) by regression on the observed returns.
4. Compute the advantage of each logged action as V(next state) - V(state) and bin it into "high" and "low".
5. Train one policy (e.g. a small linear or tabular model) that takes (state, advantage-bin) as input and predicts the action, by imitation on the whole dataset.
6. At test time, always query the policy with the "high" bin. Show that it beats (a) plain imitation on the full dataset and (b) each behaviour policy alone.

Print the final average return of each. Then explain in a few sentences how this maps onto RECAP as described at https://arxiv.org/abs/2511.14759, and what the toy leaves out (long-horizon credit assignment, human corrections, a large VLA backbone).
```

## Sources
- [Physical Intelligence blog (November 17, 2025)](https://www.pi.website/blog/pistar06)
- [arXiv:2511.14759](https://arxiv.org/abs/2511.14759)
- [Hugging Face paper page](https://huggingface.co/papers/2511.14759)
- [Humanoids Daily](https://www.humanoidsdaily.com/news/physical-intelligence-claims-rl-is-back-with-new-model-that-learns-from-its-own-mistakes)

---
*Back to **[README.md](./README.md)** · **[CONTEXT.md](./CONTEXT.md)**.*
