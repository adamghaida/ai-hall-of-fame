# SRT-H: a robot performs the key phase of gallbladder removal autonomously, 8 for 8 on pig tissue

**Field:** 🤖 Robotics  ·  **When:** July 2025 · Science Robotics

> A surgical robot trained on videos of surgeons carried out a 17-step cholecystectomy sequence on eight ex vivo pig gallbladders it had never seen, with no human touching the controls, taking spoken corrections along the way. It was slower than a surgeon, and it was not a living patient.

## What happened
On July 9, 2025, *Science Robotics* published "SRT-H: A hierarchical framework for autonomous surgery via language-conditioned imitation learning" by Ji Woong (Brian) Kim, Axel Krieger and colleagues at Johns Hopkins University, with Chelsea Finn and Lucy Shi at Stanford and collaborators at Optosurgical (DOI 10.1126/scirobotics.adt5254; preprint arXiv:2505.10251).

The system, the Surgical Robot Transformer-Hierarchy (**SRT-H**), is two learned policies stacked. A high-level policy plans in language: it looks at the endoscope view and produces the next task-level instruction (for example, "grab the gallbladder head") or a corrective one ("move the left arm a bit to the left"). A low-level policy turns each instruction into arm trajectories. Because the high level speaks in language, a surgeon can also interject with the same kind of spoken instruction, and the robot incorporates it. Both levels are transformer models trained by imitation on roughly **18,000 demonstration clips** from more than 30 pig gallbladders, recorded from Johns Hopkins surgeons operating on pig cadavers and captioned with what each step was.

The task was the clipping-and-cutting phase of a cholecystectomy: identify the cystic duct and artery, grasp them precisely, place clips, and cut, a sequence Johns Hopkins describes as **17 distinct steps** lasting minutes. On **8 of 8** held-out ex vivo pig gallbladders, on a da Vinci surgical platform, the robot completed the sequence with no human intervention at the controls, according to the paper's project page and Johns Hopkins' announcement (which calls it 100% accuracy). It handled altered starting positions and blood-like dyes that changed how the tissue looked. It took longer than a human surgeon, with results Johns Hopkins describes as comparable to an expert's.

Krieger's framing in the Johns Hopkins release: "This advancement moves us from robots that can execute specific surgical tasks to robots that truly understand surgical procedures."

## Why it matters
Earlier autonomous-surgery results, including Krieger's own 2022 STAR robot suturing pig intestine, were single tasks on pre-marked tissue with tight scripting. SRT-H is the first to chain a realistic multi-step procedure phase on unseen anatomy, recover from its own mistakes by re-planning in language, and accept a surgeon's spoken correction mid-procedure, all learned from video rather than hand-coded. The language-conditioned hierarchy is borrowed directly from the robot-foundation-model playbook, which is why the result belongs in a robotics collection as much as a medical one.

It is a laboratory result. Eight trials on excised tissue in a benchtop rig, without breathing, bleeding, or a living patient's variation, is a proof of concept, and the paper says so. See [CONTEXT.md](./CONTEXT.md).

## Sources — the record of the discovery
- [Kim et al., "SRT-H: A hierarchical framework for autonomous surgery via language-conditioned imitation learning", Science Robotics 10(104), July 9, 2025](https://www.science.org/doi/10.1126/scirobotics.adt5254) · [DOI 10.1126/scirobotics.adt5254](https://doi.org/10.1126/scirobotics.adt5254)
- [Open-access preprint (arXiv:2505.10251)](https://arxiv.org/abs/2505.10251)
- [Project page with videos and results](https://h-surgical-robot-transformer.github.io/)
- [Johns Hopkins Hub: Robot performs first realistic surgery without human help (July 9, 2025)](https://hub.jhu.edu/2025/07/09/robot-performs-first-realistic-surgery-without-human-help)
- [TechXplore: Autonomous gallbladder removal (July 9, 2025)](https://techxplore.com/news/2025-07-autonomous-gallbladder-robot-realistic-surgery.html)

---
*In this folder: **[PROMPT.md](./PROMPT.md)** (a prompt to explore it with AI) · **[CONTEXT.md](./CONTEXT.md)** (background & caveats). Part of the [AI Hall of Fame](../../README.md) → [🤖 Robotics](../).*
