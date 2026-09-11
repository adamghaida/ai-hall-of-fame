# AtCoder World Tour Finals: one human beat OpenAI in 2025, nobody did in 2026

**Field:** 💻 Computer Science  ·  **When:** July 2026

> In July 2025 an OpenAI model ran for ten hours in the AtCoder Heuristic World Finals and finished second, 1.65 trillion points to Psyho's 1.81 trillion. Twelve months later OpenAI's agent solved all five problems in the Algorithm final (8,300 points to the best human's 4,300) and scored more than seven times the best human in the Heuristic final. The 600,000 yen "Humanity Prevails Award" for beating it went unclaimed.

## What happened
The AtCoder World Tour Finals is an invitation-only, on-site contest in Tokyo for the twelve highest-ranked competitors on AtCoder in each of two divisions: **Algorithm** (short, exact problems in the ICPC style) and **Heuristic** (one open-ended optimisation problem, scored by how good your solution is rather than whether it is correct). Since 2025 OpenAI has sponsored the finals and entered an AI agent as an "exhibition" participant that competes under the same rules and time limit as the humans but is not eligible for prizes.

**2025 (July 16, 2025, Heuristic division, 10 hours).** The OpenAI entry, listed as OpenAI-AHC, led for much of the contest. Przemysław Dębiak (Psyho), a former OpenAI engineer, overtook it in the final hours. After system tests his final score was about 1.81 trillion against the model's 1.65 trillion, a margin that coverage put at 9.5 to 10 percent. OpenAI said the model ran the full ten hours autonomously and called it the first time an AI had reached the top three of a major programming competition. Psyho's summary on X: "Humanity has prevailed (for now!)".

**2026 (July 7 to 9, 2026, both divisions).** AtCoder announced a **Humanity Prevails Award**: an extra 600,000 JPY for a competitor who both finished first and beat the AI, on top of the regular 1,000,000 JPY first prize in the Heuristic division.

- *Heuristic (July 7 to 8, 34 hours including a mandatory 10-hour overnight pause).* The OpenAI agent finished with a score in the tens of billions, more than seven times the best human result, ahead of all twelve human finalists. Psyho, who did not qualify for the 2026 final, posted "Humanity has not prevailed."
- *Algorithm (July 9, 7 hours, five problems worth 900, 900, 1,500, 2,500 and 2,500 points).* The OpenAI agent solved all five for a perfect 8,300 points. The best human, tour1st, solved three for 4,300. OpenAI's Borys Minaiev said problems D and E were "significantly harder than any AtCoder problem the team had seen before"; the agent needed roughly three hours to crack D, whereas in practice runs it had usually finished every problem within an hour.

Neither Humanity Prevails Award was claimed.

OpenAI has not published a paper on either run. The 2026 coverage describes the system as a model comparable to GPT-5.6 wrapped in a small harness that scales test-time compute, with no internet access during the contest. OpenAI never named the 2025 model.

## Why it matters
AtCoder is one of the few remaining venues where the world's best competitive programmers meet in person, and the World Tour Finals field is the top twelve on the platform. In 2025 the human margin was under ten percent and depended on one competitor's final-hour rewrite. In 2026 the margin flipped and became a rout in both divisions: the exact-solution division, where the two hardest problems stumped every human, and the heuristic division, whose open-ended, judgement-heavy format many expected to favour humans for longer.

[AlphaCode](../alphacode-competitive-programming/) reached the median human level in 2022. Four years later the best humans in the world could not keep pace in a live final. Together with the 2025 ICPC and 2026 IOI results, this is the year competitive programming stopped being a benchmark that AI was catching up on.

## Sources — the record of the discovery
- [AtCoder: World Tour Finals 2026 Algorithm (contest page, rules, Humanity Prevails Award)](https://atcoder.jp/contests/awtf2026algo)
- [AtCoder: World Tour Finals 2026 Heuristic (contest page, rules, prizes)](https://atcoder.jp/contests/awtf2026heuristic)
- [AtCoder: World Tour Finals 2025 Heuristic (contest page)](https://atcoder.jp/contests/awtf2025heuristic)
- [The Decoder: OpenAI's AI beats every human at AtCoder (July 9, 2026)](https://the-decoder.com/openais-ai-beats-every-human-at-atcoder-a-top-competitive-programming-contest/)
- [OfficeChai: OpenAI "completely demolishes" human competitors at AtCoder 2026 (July 8, 2026)](https://officechai.com/ai/openai-completely-demolishes-human-competitors-at-atcoder-2026-after-placing-2nd-last-year/)
- [The Decoder: An OpenAI model finished second in the AtCoder Heuristics World Finals (July 2025)](https://the-decoder.com/an-openai-ai-model-finished-second-in-the-atcoder-heuristics-world-finals/)
- [Indrox: A human defeats AI in the AtCoder World Tour 2025 grand finale (final scores)](https://indrox.com/en/blog/human-defeats-ai-atcoder-world-tour-2025)
- [Do It In Poland: Polish programmer defeats AI at AtCoder World Tour Finals 2025](https://doitinpoland.com/polish-programmer-defeats-ai-at-atcoder-world-tour-finals-2025/)
- [Competitive Programming Hall of Fame: 2026 Heuristic finalists](https://cphof.org/advanced/atcoder_wth/2026)

---
*In this folder: **[PROMPT.md](./PROMPT.md)** (a prompt to explore it with AI) · **[CONTEXT.md](./CONTEXT.md)** (background & caveats). Part of the [AI Hall of Fame](../../README.md) → [💻 Computer Science](../).*
