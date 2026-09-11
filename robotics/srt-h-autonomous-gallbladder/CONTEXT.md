# 📚 Context: SRT-H and autonomous cholecystectomy on ex vivo tissue

**The lineage.** Axel Krieger's group at Johns Hopkins has worked on surgical autonomy for a decade. Its STAR robot (Smart Tissue Autonomous Robot) sutured pig intestine in 2016 (open surgery, with more human guidance) and laparoscopically in four live pigs in 2022, but each was one task, heavily scripted, on tissue prepared for the robot. SRT-H replaces the scripting with learning: the earlier Surgical Robot Transformer (2024) learned individual sub-tasks from video, and SRT-H adds the hierarchy that strings them together and corrects errors.

**The people.** First author Ji Woong (Brian) Kim did the work as a Johns Hopkins postdoc and moved to Stanford. Senior author Axel Krieger leads the Laboratory for Computational Sensing and Robotics at Johns Hopkins. Co-authors include Juo-Tung Chen, Pascal Hansen, Antony Goldenberg, Samuel Schmidgall, Paul Maria Scheikl, Anton Deguet, Brandon White and surgeon Jeffrey Jopling at Johns Hopkins; Lucy Shi and Chelsea Finn at Stanford; De Ru Tsai and Richard Cha at Optosurgical.

**How it works.** SRT-H is two transformers. The high-level policy takes the endoscope images and outputs a natural-language instruction, either the next step of the procedure or a correction to the current one. The low-level policy takes the images plus that instruction and outputs robot-arm motions. Planning in language does two things: it lets the high level recover from a failed step by issuing a correction rather than blindly continuing, and it gives a human surgeon a way to intervene by speaking the same kind of instruction. Training data was roughly 18,000 demonstration segments from more than 30 pig gallbladders, recorded from Johns Hopkins surgeons on cadaveric tissue and captioned. Both policies were trained by imitation, not reinforcement learning.

**The experiment.** Eight ex vivo pig gallbladders not used in training, mounted in a benchtop rig on a da Vinci platform. The task was the 17-step clip-and-cut phase: expose and identify the cystic duct and artery, grasp, place clips, cut. The robot completed all eight with no human at the controls. Perturbation tests changed the starting pose and added blood-like dye to alter tissue appearance. Procedure time was longer than a human surgeon's; Johns Hopkins describes the outcomes as comparable to an expert's.

## Why it's in the Hall of Fame
It is the first learned system to complete a realistic, multi-step surgical procedure phase autonomously on unseen anatomy, with in-procedure error recovery and spoken human correction, and it did so 8 times out of 8. The method is the language-conditioned hierarchical policy now common in general robot manipulation, applied to a domain where a mistake matters. That combination, and the peer-reviewed venue, earn it a place; the scope limits below keep the description honest.

## Honest caveats
- **Ex vivo, not a patient.** The tissue was excised pig gallbladder in a benchtop setup. No breathing, no bleeding, no heartbeat, no adhesions, no anaesthesia, no immune response. "Realistic" in the Johns Hopkins headline means realistic anatomy and steps, not a live operation.
- **n = 8.** Eight trials is enough to show the system works and not enough to estimate a failure rate. 8 for 8 is consistent with a true success rate anywhere from roughly 70% upward.
- **One phase of one procedure.** The 17 steps cover the critical clip-and-cut phase of a cholecystectomy, not the whole operation (no port placement, no retraction strategy, no extraction, no closure).
- **Slower than a surgeon.** Johns Hopkins states the robot took longer than a human. The sources do not give the times.
- **Pig anatomy, one training source.** The demonstrations were Johns Hopkins surgeons on pig tissue. Generalisation to human anatomy, other surgeons' technique, or other instruments is untested.
- **Human corrections were part of the design and the evaluation.** The system accepts spoken corrections; the sources describe it responding to them during testing. "No human intervention" refers to the controls, not to the absence of any human input.
- **Hardware detail is thin in the accessible sources.** The project page references a da Vinci endoscope view; the exact platform configuration is in the paper, which sits behind a paywall. The preprint is open.
- **Regulatory distance.** Nothing here is cleared for clinical use, and the group's stated next step is live-animal work, not patients.

## Sources
- [Science Robotics paper](https://www.science.org/doi/10.1126/scirobotics.adt5254) · [DOI 10.1126/scirobotics.adt5254](https://doi.org/10.1126/scirobotics.adt5254)
- [arXiv:2505.10251](https://arxiv.org/abs/2505.10251)
- [Project page](https://h-surgical-robot-transformer.github.io/)
- [Johns Hopkins Hub (July 9, 2025)](https://hub.jhu.edu/2025/07/09/robot-performs-first-realistic-surgery-without-human-help)
- [TechXplore (July 9, 2025)](https://techxplore.com/news/2025-07-autonomous-gallbladder-robot-realistic-surgery.html)
- [Prior work: STAR robot performs laparoscopic intestinal surgery (Johns Hopkins Hub, January 26, 2022)](https://hub.jhu.edu/2022/01/26/star-robot-performs-intestinal-surgery)

---
*Back to **[README.md](./README.md)** · **[PROMPT.md](./PROMPT.md)**.*
