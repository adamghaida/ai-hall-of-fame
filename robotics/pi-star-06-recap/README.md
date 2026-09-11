# π*0.6: a robot foundation model that improves from its own deployment experience

**Field:** 🤖 Robotics  ·  **When:** November 2025 · Physical Intelligence research release (arXiv:2511.14759)

> A vision-language-action model that keeps learning after it ships: fine-tuned with reinforcement learning on its own autonomous runs plus human corrections, it ran an espresso station for 18 hours, folded 50 unfamiliar laundry items in a new home, and assembled 59 chocolate boxes in a factory. Company-reported: throughput more than doubled and failure rates roughly halved on the hardest tasks.

## What happened
On November 17, 2025, Physical Intelligence published π*0.6 ("pi-star 0.6") and a training method it calls **RECAP**: Reinforcement Learning with Experience and Corrections via Advantage-conditioned Policies. The paper (arXiv:2511.14759, 56 authors) followed on November 18.

The problem RECAP addresses is the standard weakness of imitation-learned robot policies: they copy demonstrations, so a small error puts the robot in a state no demonstration covered, and errors compound. RECAP adds three kinds of data to the usual demonstrations: the robot's own autonomous attempts, and corrections a human teleoperator makes by taking over mid-task when the robot goes wrong. All of it is used to train a **value function** that predicts how well a situation is likely to turn out. The policy is then conditioned on the **advantage**, the change in predicted value an action produces, so that at run time the model can be asked for high-advantage actions and, in the company's framing, perform better than the average of the data it was trained on. The base model, π0.6, is pre-trained with offline RL on this heterogeneous data and then specialised per task with more on-robot collection.

The three demonstrations reported by the company:

- **Espresso.** The robot operated a professional espresso machine continuously from 5:30 am to 11:30 pm, an 18-hour service, with a success rate above 90%.
- **Laundry.** In a home not seen in training, it folded 50 different novel garments, running for hours without interruption.
- **Box assembly.** In a real factory, it assembled and labelled 59 chocolate packaging boxes.

Across the hardest tasks, the paper's abstract states that RECAP "more than doubles task throughput and roughly halves the task failure rate" relative to the same model trained without the RL stage.

## Why it matters
Large vision-language-action models had already made robot manipulation broad (many tasks from one network) but not reliable (each task fails often enough to need a person nearby). Physical Intelligence's earlier π0 and π0.5 models were in that category. RECAP is one of the first results showing an RL loop that closes on a large VLA in the real world at useful scale: the robot runs, its failures and a human's corrections go back into training, and the same model comes out measurably better on hours-long tasks. Co-founder Karol Hausman's summary, quoted by Humanoids Daily, was "RL is back."

The important qualifier is that every number here is the company's. There is no independent replication, the espresso and factory runs are single episodes, and the 2x figures are relative to the company's own baseline on tasks the company chose. See [CONTEXT.md](./CONTEXT.md).

## Sources — the record of the discovery
- [Physical Intelligence: A VLA that learns from experience (blog, November 17, 2025)](https://www.pi.website/blog/pistar06)
- [π*0.6: a VLA That Learns From Experience (arXiv:2511.14759)](https://arxiv.org/abs/2511.14759)
- [Hugging Face paper page for arXiv:2511.14759](https://huggingface.co/papers/2511.14759)
- [Humanoids Daily: Physical Intelligence claims "RL is back" with new model that learns from its own mistakes (November 18, 2025)](https://www.humanoidsdaily.com/news/physical-intelligence-claims-rl-is-back-with-new-model-that-learns-from-its-own-mistakes)

---
*In this folder: **[PROMPT.md](./PROMPT.md)** (a prompt to explore it with AI) · **[CONTEXT.md](./CONTEXT.md)** (background & caveats). Part of the [AI Hall of Fame](../../README.md) → [🤖 Robotics](../).*
