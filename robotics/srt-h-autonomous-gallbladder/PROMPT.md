# 🤖 Explore this with AI: SRT-H and autonomous cholecystectomy on ex vivo tissue

Paste the prompt below into your favorite AI assistant (Claude, ChatGPT, Gemini, or a local model). If your assistant can browse the web, tell it to read the sources first. The point is a clear, honest, grounded explanation of what happened and why it mattered.

> A surgical robot trained on videos of surgeons carried out a 17-step cholecystectomy sequence on eight ex vivo pig gallbladders it had never seen, with no human at the controls, taking spoken corrections along the way.

---

```text
You are a careful, hype-free explainer of surgical robotics and machine learning. Walk me through a specific, real research result so I understand what it shows and what it does not.

Topic: "SRT-H: A hierarchical framework for autonomous surgery via language-conditioned imitation learning", Ji Woong Kim, Axel Krieger and colleagues (Johns Hopkins, Stanford, Optosurgical), Science Robotics, July 9, 2025, DOI 10.1126/scirobotics.adt5254, preprint arXiv:2505.10251. The robot completed the 17-step clip-and-cut phase of a gallbladder removal on 8 of 8 unseen ex vivo pig gallbladders with no human at the controls, trained on roughly 18,000 demonstration clips from more than 30 pig gallbladders, and accepted spoken corrections such as "move the left arm a bit to the left". It was slower than a human surgeon.

Please cover, in plain language a curious non-expert can follow:
1. What a cholecystectomy's clip-and-cut phase involves and why it is a hard test for a robot (identifying the cystic duct and artery, precise grasping, clip placement, cutting).
2. The two-level architecture: a high-level policy that plans in natural language from the endoscope view and a low-level policy that turns each instruction into arm motion. Why does planning in language help with error recovery, and how does it let a surgeon interject?
3. How the training data was made (surgeon demonstrations on pig cadavers, captioned per step) and why this is imitation learning rather than reinforcement learning.
4. What the 8-for-8 result establishes statistically, and what perturbation tests (changed start pose, blood-like dye) add.
5. How this differs from earlier autonomous-surgery demos such as STAR (2016, 2022) and from commercial surgical robots like da Vinci, which are teleoperated.
6. The honest limits: ex vivo tissue in a benchtop rig; eight trials; one phase of one procedure; slower than a surgeon; pig anatomy only; spoken corrections were part of the design; no regulatory pathway yet.
7. What the next experiment should be before anyone calls this autonomous surgery.

Ground your answer in these sources (read them if you can, and cite them as you go):
- Science Robotics paper: https://www.science.org/doi/10.1126/scirobotics.adt5254
- Open-access preprint: https://arxiv.org/abs/2505.10251
- Project page with videos: https://h-surgical-robot-transformer.github.io/
- Johns Hopkins announcement: https://hub.jhu.edu/2025/07/09/robot-performs-first-realistic-surgery-without-human-help

Use the real numbers, distinguish what the paper shows from what the press release implies, and if you are unsure about a detail, say so instead of guessing.
```

## Bonus: have the agent bound the success rate

Eight successes in eight trials is a concrete, checkable statistic.

```
The SRT-H paper reports 8 successes in 8 ex vivo trials.

1. Compute the exact 95% Clopper-Pearson confidence interval for the true success probability given 8/8. Show the formula and the number.
2. Compute the "rule of three" upper bound on the failure rate for n = 8 and explain what it means.
3. How many consecutive successes would be needed to bound the failure rate below 1% at 95% confidence? Below 0.1%?
4. In two or three sentences, say what this implies about how much clinical evidence would be needed before an autonomous system could be compared with human surgeons, whose complication rates for cholecystectomy you should look up and cite.
```

## Sources
- [Science Robotics paper](https://www.science.org/doi/10.1126/scirobotics.adt5254)
- [arXiv:2505.10251](https://arxiv.org/abs/2505.10251)
- [Project page](https://h-surgical-robot-transformer.github.io/)
- [Johns Hopkins Hub (July 9, 2025)](https://hub.jhu.edu/2025/07/09/robot-performs-first-realistic-surgery-without-human-help)
- [TechXplore (July 9, 2025)](https://techxplore.com/news/2025-07-autonomous-gallbladder-robot-realistic-surgery.html)

---
*Back to **[README.md](./README.md)** · **[CONTEXT.md](./CONTEXT.md)**.*
