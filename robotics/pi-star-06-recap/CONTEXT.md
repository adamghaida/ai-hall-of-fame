# 📚 Context: π*0.6 and RECAP

**The lab.** Physical Intelligence is a San Francisco robotics-foundation-model startup founded in 2024 by, among others, Karol Hausman, Sergey Levine and Chelsea Finn. Its line of vision-language-action (VLA) models runs π0 (October 2024), π0.5 (April 2025, generalising to unseen homes) and now π0.6 with its RL-improved variant π*0.6. The company publishes on arXiv and its own blog rather than at peer-reviewed venues, and releases some model weights.

**The problem.** A VLA trained by imitation copies human teleoperation. Real-world manipulation is long-horizon (an espresso order is dozens of sub-steps), so even a low per-step error rate compounds into a high per-task failure rate, and the policy has never seen the states its own mistakes produce. The two standard fixes, more demonstrations or a person on standby, do not scale. The paper's own framing is that "providing corrections can only take us so far."

**How RECAP works, in one paragraph.** Collect heterogeneous data: demonstrations, the robot's autonomous rollouts (successes and failures), and expert interventions where a teleoperator takes over mid-episode. Train a value function to predict expected task outcome from any state. Instead of the usual RL step of directly optimising the policy against the value (which is unstable for large models), condition the policy on the advantage, the improvement in value an action yields, so the same network can imitate both good and bad data while being told which is which. At deployment, ask for high-advantage actions. The paper describes credit assignment across long tasks as "a key challenge" the value function has to solve. π0.6 is pre-trained this way with offline RL; π*0.6 is the version further specialised per task with on-robot data.

**The three demonstrations.** An 18-hour espresso service (5:30 am to 11:30 pm) at above 90% success on professional equipment; 50 novel garments folded in a new home over several hours; 59 chocolate boxes assembled and labelled in a real factory. The headline quantitative claim is from the abstract: on the hardest tasks, "RECAP more than doubles task throughput and roughly halves the task failure rate."

## Why it's in the Hall of Fame
Because closing a reinforcement-learning loop on a large real-world robot model, using its own deployment data and human corrections, and getting a measurable reliability gain on hours-long tasks, is the step that separates a broad demo model from a deployable one. It is early and unreplicated, but it is a concrete, documented method with concrete numbers.

## Honest caveats
- **Company research release, not peer reviewed.** The paper is an arXiv preprint from the company that sells the product; the blog is marketing. No external group has reproduced the results.
- **Baselines and tasks are the company's.** "More than doubles throughput" and "roughly halves failure" are relative to Physical Intelligence's own non-RL model on tasks the company selected. Absolute success rates for laundry and box assembly are not given in the sources we could read; the espresso figure is "above 90%".
- **Single runs.** The 18-hour espresso service, the 50-item laundry session and the 59-box factory run are each one episode, not repeated trials with variance reported.
- **Human corrections are still in the loop.** RECAP's data includes expert teleoperated interventions during autonomous execution. The robot improves from experience, but the experience includes a person taking over when it fails. The paper itself says corrections "can only take us so far."
- **Hardware and setup are not independent.** The demonstrations use Physical Intelligence's own robot platforms and environments; the "new home" for laundry was new to the model, not chosen by a third party.
- **Terminology varies.** The blog styles the method "Recap" and the paper "RECAP"; the model is written π*0.6, π*₀.₆ or pi-star 0.6. They refer to the same thing.
- **Secondary coverage contains at least one arithmetic slip.** Humanoids Daily describes 5:30 am to 11:30 pm as a 13-hour run; it is 18 hours.

## Sources
- [Physical Intelligence blog (November 17, 2025)](https://www.pi.website/blog/pistar06)
- [arXiv:2511.14759](https://arxiv.org/abs/2511.14759)
- [Hugging Face paper page](https://huggingface.co/papers/2511.14759)
- [Humanoids Daily (November 18, 2025)](https://www.humanoidsdaily.com/news/physical-intelligence-claims-rl-is-back-with-new-model-that-learns-from-its-own-mistakes)

---
*Back to **[README.md](./README.md)** · **[PROMPT.md](./PROMPT.md)**.*
