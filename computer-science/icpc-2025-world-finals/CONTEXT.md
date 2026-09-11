# 📚 Context: AI at the ICPC World Finals 2025

**The contest.** The International Collegiate Programming Contest (ICPC) is the oldest and largest university programming competition; nearly 3,000 universities from over 103 countries compete in regionals for a place at the World Finals. Teams of three students share a single computer for five hours and are ranked by problems solved, with ties broken by time and wrong-submission penalties. The 2025 World Finals in Baku had 12 problems. In a normal year the winning team solves most of them and nobody solves all of them; in 2025 the top human team finished with 11.

**OpenAI's run.** OpenAI described its entrant as an ensemble of general-purpose reasoning models, not a system trained for ICPC: GPT-5 (released a month earlier) and an experimental reasoning model that has not been released. OpenAI's statement, as quoted by VentureBeat, was that "for 11 of the 12 problems, the system's first answer was correct. For the hardest problem, it succeeded on the 9th submission." The 11 first-try solves came from GPT-5; the experimental model produced the final solve. OpenAI said the system competed in the onsite AI track and submitted to the ICPC World Finals local judge, judged concurrently with the human teams. Mark Chen's post framed the result as the close of a competition season that also included a gold-medal score at the IMO, sixth place at the IOI, and second place at the AtCoder Heuristic World Finals (see the [IMO 2025 entry](../../mathematics/gemini-deep-think-imo-2025/) for the Gemini side of that season).

**Google DeepMind's run.** The Gemini system was an advanced version of Gemini 2.5 Deep Think, the same lineage that scored gold at the IMO in July 2025. DeepMind's blog describes the ingredients as reinforcement learning on hard reasoning problems, multi-step reasoning, parallel thinking (exploring several candidate approaches at once), and code generation with execution and iterative refinement. It ran remotely, live, under ICPC rules and with the organizers' oversight, starting ten minutes after the human teams. Total solve time across its ten solved problems was 677 minutes. The two problems it did not solve are not named in the blog.

**Problem C.** The blog's account of Problem C is the most concrete technical detail either lab released. The task is to configure a network of ducts, each of which can be open, closed, or partly open, so that a set of reservoirs fills as quickly as possible. Because duct settings are continuous, the configuration space is infinite. Gemini's approach was to assume each reservoir has a priority value, observe that for fixed priorities the optimal duct configuration can be found by dynamic programming, then use the minimax theorem to turn the original problem into a search for the priorities that most constrain the flow, carried out with nested ternary searches. No human team solved the problem during the contest.

**People.** OpenAI: Mostafa Rohaninejad and Borys Minaiev (a former ICPC world champion) posted about the result; Mark Chen summarized the season. Google DeepMind's blog is unsigned; ICPC global executive director Bill Poucher is quoted in it.

## Why it's in the Hall of Fame
Competitive programming was the first domain where a large language model was benchmarked against humans in live contests ([AlphaCode](../alphacode-competitive-programming/), 2022, median competitor). The 2025 World Finals is the point where two independent systems finished above every human team at the top of the sport, on a fresh problem set, on the contest's own judge, within the contest's own time limit. Gemini's Problem C solve is the first time an AI solved a World Finals problem that no human team solved.

## Honest caveats

- **OpenAI's result rests on OpenAI's own posts.** There is no OpenAI blog post, paper, or technical report on the run. The primary record is a set of posts on X (the company account, Mostafa Rohaninejad, Mark Chen), which require an account to read; the details in this entry are as relayed by VentureBeat, TechRepublic, and The Decoder. DeepMind's blog, which quotes an ICPC official, does not mention OpenAI. The description of an onsite AI track judged by the local judge comes from OpenAI; we did not find an ICPC statement confirming it.
- **Neither system was a ranked entrant.** Both labs' placements ("first" and "second") are hypothetical comparisons against the human scoreboard. Neither AI appears in the official standings, and neither received a medal.
- **Undisclosed compute.** Both labs describe their methods at the level of "parallel thinking" and "an ensemble." Neither reports how much compute the five hours consumed, how many candidate programs were generated, or how the systems decided what to submit. A human team has one computer; the AI systems did not. The comparison is like-for-like on time and problem set, not on resources.
- **Unreleased models.** The model that solved OpenAI's twelfth problem is described only as experimental. Gemini 2.5 Deep Think's ICPC version is described as "advanced," and it is not the version available to the public. Neither run can be reproduced by anyone outside the labs.
- **Scoring nuance.** ICPC ranks on problems solved and then on time and penalties. OpenAI's system needed nine submissions on one problem; how that would have affected a hypothetical time-penalty ranking has not been reported. Gemini's 677 minutes is a sum of per-problem solve times, not elapsed contest time.
- **Problem selection.** The two problems Gemini did not solve are not identified in the blog, and neither lab has said which problems its system found hardest, so whether the AI systems' difficulty profile matches humans' cannot be checked.

## Sources
- [Google DeepMind blog](https://deepmind.google/blog/gemini-achieves-gold-medal-level-at-the-international-collegiate-programming-contest-world-finals/)
- [OpenAI announcement post on X](https://x.com/OpenAI/status/1968368133024231902)
- [Mostafa Rohaninejad's thread on X](https://x.com/MostafaRohani/status/1968360976379703569)
- [Mark Chen's post on X](https://x.com/markchen90/status/1968372340271862014)
- [The Decoder coverage](https://the-decoder.com/openai-outperforms-humans-and-google-at-the-worlds-top-collegiate-programming-contest/)
- [VentureBeat coverage](https://venturebeat.com/ai/google-and-openais-coding-wins-at-university-competition-show-enterprise-ai)
- [TechRepublic coverage](https://www.techrepublic.com/article/openai-deepmind-icpc-2025-results/)
- [9to5Google coverage](https://9to5google.com/2025/09/17/gemini-2-5-deep-think-coding-gold/)

Related entries: [AlphaCode](../alphacode-competitive-programming/) · [Gemini Deep Think at the IMO 2025](../../mathematics/gemini-deep-think-imo-2025/)

---
*Back to **[README.md](./README.md)** · **[PROMPT.md](./PROMPT.md)**.*
