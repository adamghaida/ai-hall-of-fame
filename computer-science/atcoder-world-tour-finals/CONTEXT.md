# 📚 Context: AtCoder World Tour Finals, 2025 and 2026

**What AtCoder is.** AtCoder is a Japanese competitive-programming platform with weekly rated contests. It runs two separate rating tracks. The *Algorithm* track is the familiar format: short problems with a single correct answer, judged on hidden tests, full points or nothing per problem. The *Heuristic* track (AtCoder Heuristic Contest, AHC) poses one NP-hard optimisation problem for hours or days, scores every submission on how good its output is, and ranks by total score after a final system test on unseen inputs. Heuristic contests reward iterative engineering, intuition about the problem's structure, and knowing when to throw a working approach away. The World Tour Finals invites the top twelve on each yearly ranking to Tokyo.

**2025: the exhibition begins.** OpenAI sponsored the 2025 finals and entered agents in both divisions as non-prize "exhibition" contestants under the same rules as the humans. The Heuristic final on **July 16, 2025** ran for ten hours. The OpenAI entry (OpenAI-AHC) took an early lead with a straightforward strategy; **Przemysław Dębiak** (Psyho), a Polish competitor who had worked at OpenAI, trailed for hours before a final-hour submission put him ahead. Provisional standings showed a 5.5 percent margin; after system tests it was 9.5 percent, with final scores reported as roughly **1.81 trillion to 1.65 trillion**. Every other human finished behind the AI. Sam Altman replied "Good job, Psyho" on X, and OpenAI said the run was fully autonomous and the first top-three finish by an AI in a major programming competition.

**2026: both divisions.** AtCoder added a **Humanity Prevails Award** of 600,000 JPY, payable only to someone who finished first *and* beat the AI. The Heuristic final ran **July 7 to 8, 2026** (34 hours on the clock, with no submissions accepted between 22:00 on day one and 08:00 on day two). The Algorithm final ran **July 9, 2026** for seven hours with five problems (900, 900, 1,500, 2,500, 2,500 points; a full-feedback format with a five-minute penalty per wrong submission). Sponsors were OpenAI and SMBC.

**People.** On the OpenAI side, coverage names **Borys Minaiev** (an ICPC world champion who now works on reasoning at OpenAI) and **Sheryl Hsu**. Minaiev said the 2026 Algorithm result "was actually pretty unexpected": problems D and E were far harder than anything the team had tested on, and the agent spent about three hours on D before solving it, where it normally cleared a whole set within an hour. Among the humans, **tour1st** led the 2026 Algorithm final with three of five problems; the 2026 Heuristic finalist list (Rafbill, eijirou, Shun_PI, saharan, nikaj, montplusa, yosupo, rhoo, terry_u16, asi1024, MathGorilla, bowwowforeach, with yokozuna57 listed as well) is on cphof.org. Psyho did not qualify in 2026 but followed the contest publicly and posted "Humanity has not prevailed"; he added that OpenAI's performance was outstanding.

**What ran.** OpenAI has not published a technical report for either year. The 2026 coverage, citing OpenAI staff, describes a model comparable to GPT-5.6 (which OpenAI was shipping that same week) plus a small harness that scales test-time compute, running with no internet access. The 2025 model was never named beyond "a private reasoning model".

## Why it's in the Hall of Fame
The 2025 contest produced the last documented case of a human beating a frontier lab's best agent head-to-head in an elite programming final, and it was close. The 2026 contest, one year later, produced the opposite: a perfect Algorithm score when the best human solved three of five, and a Heuristic score more than seven times the best human's, with a cash prize for beating the AI left on the table. For the Heuristic format in particular, which is closer to real optimisation engineering than to puzzle-solving, this was the first clear demonstration that an agent could out-iterate the best human specialists over a full day.

## Honest caveats

- **The standings are behind a login.** AtCoder's standings pages for all three contests require an AtCoder account. The numbers in this entry (1.81T vs 1.65T in 2025; 8,300 vs 4,300 and "more than seven times" in 2026) come from press coverage and participant commentary rather than from a page this entry could cite directly. The contest pages themselves (dates, durations, problem point values, award rules) are public and were checked.
- **The 2026 Heuristic margin is a ratio, not a score.** Coverage gives OpenAI's score as "in the tens of billions" and "more than seven times" the best human, without the exact figures. The identity of the top human in the 2026 Heuristic final is also reported inconsistently (OfficeChai, citing Psyho's congratulations, points to Shun_PI; the cphof.org list is ordered differently). This entry does not name a Heuristic runner-up for that reason.
- **The model is not identified.** OpenAI did not name the 2025 model. For 2026, "comparable to GPT-5.6" and "a small harness for test-time compute scaling" are the whole public description. Nobody outside OpenAI can reproduce the run, and there is no paper.
- **Exhibition status.** The AI competed under the same time limits and (per OpenAI) without internet access, but as a non-prize exhibition entrant. The 2025 field was twelve humans plus the agent; the human results and ratings were unaffected.
- **Compute is undisclosed.** A ten-hour or 34-hour autonomous run scaling test-time compute could cost far more than a human's laptop. The comparison is of results, not of resources.
- **One competition, one lab.** AtCoder is one of several elite circuits; the ICPC and IOI results in 2025 and 2026 came from OpenAI, Google DeepMind and NVIDIA on different problem sets. This entry documents the AtCoder finals only.

## Sources
- [AtCoder: World Tour Finals 2026 Algorithm](https://atcoder.jp/contests/awtf2026algo)
- [AtCoder: World Tour Finals 2026 Heuristic](https://atcoder.jp/contests/awtf2026heuristic)
- [AtCoder: World Tour Finals 2025 Heuristic](https://atcoder.jp/contests/awtf2025heuristic)
- [AtCoder: announcement of the 2026 finals (qualification rules)](https://atcoder.jp/posts/1394)
- [The Decoder: OpenAI's AI beats every human at AtCoder (July 9, 2026)](https://the-decoder.com/openais-ai-beats-every-human-at-atcoder-a-top-competitive-programming-contest/)
- [OfficeChai: OpenAI "completely demolishes" human competitors at AtCoder 2026 (July 8, 2026)](https://officechai.com/ai/openai-completely-demolishes-human-competitors-at-atcoder-2026-after-placing-2nd-last-year/)
- [The Decoder: An OpenAI model finished second in the AtCoder Heuristics World Finals (July 2025)](https://the-decoder.com/an-openai-ai-model-finished-second-in-the-atcoder-heuristics-world-finals/)
- [Indrox: A human defeats AI in the AtCoder World Tour 2025 grand finale](https://indrox.com/en/blog/human-defeats-ai-atcoder-world-tour-2025)
- [Do It In Poland: Polish programmer defeats AI at AtCoder World Tour Finals 2025](https://doitinpoland.com/polish-programmer-defeats-ai-at-atcoder-world-tour-finals-2025/)
- [Competitive Programming Hall of Fame: 2026 Heuristic finalists](https://cphof.org/advanced/atcoder_wth/2026)

Related entries: [AlphaCode, competitive programming at the median human level](../alphacode-competitive-programming/)

---
*Back to **[README.md](./README.md)** · **[PROMPT.md](./PROMPT.md)**.*
