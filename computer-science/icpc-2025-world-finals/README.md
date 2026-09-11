# ICPC World Finals 2025: a perfect 12/12 from OpenAI, gold-level 10/12 from Gemini

**Field:** 💻 Computer Science  ·  **When:** September 2025

> At the 2025 ICPC World Finals in Baku, an OpenAI reasoning system solved all 12 problems inside the 5-hour window, a score no human team reached, and Gemini 2.5 Deep Think solved 10, including Problem C, which none of the 139 university teams solved.

## What happened
The ICPC World Finals is the championship of university competitive programming: teams of three get five hours, one computer, and a dozen algorithmic problems. The 2025 finals were held in **Baku, Azerbaijan, on September 4, 2025**, with **139 teams** from 103 countries. Two AI labs ran their systems on the same problem set under the same time limit, and both published results on **September 17, 2025**.

**OpenAI** reported a **perfect 12 of 12**. Its entry was an ensemble of general-purpose reasoning models rather than a contest-specific system: GPT-5 produced correct first-submission answers for 11 problems, and an unreleased experimental reasoning model solved the hardest problem on its 9th submission. According to OpenAI's own description, relayed by VentureBeat and TechRepublic, the system competed in an onsite AI track with submissions judged by the ICPC World Finals local judge at the same time as the human teams. The **best human team solved 11 of 12**; four teams took gold (St. Petersburg State University, University of Tokyo, Beijing Jiaotong University, Tsinghua University). OpenAI announced the result in posts on X by the company account, researcher Mostafa Rohaninejad, and chief research officer Mark Chen, not in a blog post or paper.

**Google DeepMind** ran an advanced version of **Gemini 2.5 Deep Think** live in a remote environment, following ICPC rules, overseen by the contest organizers, starting ten minutes after the human teams. It solved **10 of 12** problems in a combined **677 minutes** of solve time: eight problems within the first 45 minutes and two more within three hours. Ranked against the human teams that would have been **second place**, gold-medal level. Its most notable solve was **Problem C**, a liquid-distribution problem over a network of ducts and reservoirs with a continuous configuration space, which **no human team solved**. Gemini found a solution in about 30 minutes by assigning priority values to reservoirs, using dynamic programming to configure the ducts for a given set of priorities, and then applying the minimax theorem and nested ternary searches to find the priorities that most constrain the flow.

## Why it matters
Three years earlier, [AlphaCode](../alphacode-competitive-programming/) reaching the median Codeforces competitor was a landmark. At the 2025 World Finals, two different labs' systems finished above every human team on the sport's hardest stage, and one of them solved a problem the field's best students could not, with a method the organizers found worth writing up. Unlike a benchmark, this was the live problem set, unseen in advance, judged by the contest's own infrastructure. ICPC's global executive director, Bill Poucher, called it "a key moment in defining the AI tools and academic standards needed for the next generation."

The results also matter for what they were not. Neither system was a ranked entrant, neither lab has published a technical report on the runs, and the labs describe the compute they used only in general terms. See **[CONTEXT.md](./CONTEXT.md)** for the caveats, including why OpenAI's result rests on the company's own posts.

## Sources — the record of the discovery
- [Google DeepMind blog: Gemini achieves gold-medal level at the ICPC World Finals](https://deepmind.google/blog/gemini-achieves-gold-medal-level-at-the-international-collegiate-programming-contest-world-finals/)
- [OpenAI announcement post on X](https://x.com/OpenAI/status/1968368133024231902)
- [Mostafa Rohaninejad's thread on X](https://x.com/MostafaRohani/status/1968360976379703569)
- [The Decoder: OpenAI outperforms humans and Google at the world's top collegiate programming contest](https://the-decoder.com/openai-outperforms-humans-and-google-at-the-worlds-top-collegiate-programming-contest/)
- [VentureBeat coverage](https://venturebeat.com/ai/google-and-openais-coding-wins-at-university-competition-show-enterprise-ai)
- [TechRepublic coverage](https://www.techrepublic.com/article/openai-deepmind-icpc-2025-results/)
- [9to5Google coverage](https://9to5google.com/2025/09/17/gemini-2-5-deep-think-coding-gold/)

---
*In this folder: **[PROMPT.md](./PROMPT.md)** (a prompt to explore it with AI) · **[CONTEXT.md](./CONTEXT.md)** (background & caveats). Part of the [AI Hall of Fame](../../README.md) → [💻 Computer Science](../).*
