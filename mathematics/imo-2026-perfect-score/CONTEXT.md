# 📚 Context: the first perfect 42/42 AI scores at IMO 2026

**The competition.** The IMO gives six problems over two 4.5-hour days, each worth 7 points, for a maximum of 42. Marks are decided by coordination: a confidential marking scheme, the team leaders arguing their contestants' scripts, and problem captains keeping the standard consistent across 600-plus papers. At IMO 2026 in Shanghai (July 10 to 21, 117 countries, 666 contestants) the gold cutoff was 29 and 7 contestants scored 42/42, up from 5 perfect scores in 2025.

**The three-year arc.** 2024: DeepMind's [AlphaProof and AlphaGeometry 2](../alphaproof-alphageometry-imo-2024/) scored 28/42 writing Lean proofs, one point short of gold. 2025: [Gemini Deep Think](../gemini-deep-think-imo-2025/) scored 35/42 in natural language with official IMO grading, and OpenAI reported the same 35/42 through an independent panel of former medalists. 2026: multiple claims of 42/42.

## Who claimed what, and who graded it

| Claimant | Score | Graded by | Status |
|---|---|---|---|
| Huawei "Celia" | 42/42 | IMO organisers, per Xiaohongshu's account | Company announcement; no IMO confirmation found |
| Xiaohongshu/RedNote "dots-note-3.0" | 42/42 | IMO organisers, per Xiaohongshu | Company announcement; no IMO confirmation found |
| Claude Fable 5, GPT-5.6 Sol (xhigh), Kimi K3 | 42/42 each | Claude-based verifier agents | Independent test, explicitly non-authoritative |
| Axiom Math's prover | 42/42 | Deedy Das's harness, per [Das's own post on X](https://x.com/deedydas/status/2079409461874332066) relayed by AFP | Reported by Das and AFP; not in the repo's published table |
| NVIDIA Nemotron 3 Ultra | 30/42 | "The IMO team graded its solutions", per [NVIDIA's own post on X](https://x.com/NVIDIAAI/status/2079642933058244704) | Company report, above the 29-point gold cutoff |

## Why it's in the Hall of Fame
Whatever the per-company roster turns out to be, the aggregate signal is strong and it is a genuine first: in July 2026, AI systems went from 35/42 to flawless papers on a fresh, unpublished set of IMO problems, matching the top 1% of the strongest teenage mathematicians on Earth. Three separate models cleared 42/42 in one independently published harness with full audit trails, which is a much harder thing to fake than a press release.

## Honest caveats
- **Grading provenance varies by claimant, and none of it is confirmed by the IMO.** The IMO's public news index has no item about AI participation, an AI track, or AI grading at IMO 2026; the only AI-adjacent entry is a July 4, 2026 note that OpenAI would give ChatGPT Pro subscriptions to gold medalists and Mirzakhani award winners. The claim that "IMO organisers graded the solutions" comes from Xiaohongshu's own statement as relayed by AFP, not from the IMO. Wire coverage generally reported all six 42/42 results in one breath and dropped the distinction.
- **Coordinator-grading claims have been questioned before.** After IMO 2025, an IMO coordinator's widely-shared account described AI company representatives approaching coordinators with laptops at the closing party for on-the-spot evaluations, and noted there were no formal agreements or regulations governing AI participation. That was 2025, not 2026, but it is the reason "graded by IMO organisers" is a phrase worth reading carefully.
- **The independent test says it is not authoritative.** Deedy Das's repository is unusually candid: the graders are Claude-based agents rather than human medalists, the runs are single runs per configuration, and gaps of a few points may be within normal variance for stochastic agentic systems.
- **Nobody outside can reproduce the headline result.** dots-note-3.0 was reported as still in beta with open-sourcing only promised, and Huawei's Celia is not a system third parties can run against the same problems. Claims about unreleased models are, structurally, claims you have to take on trust.
- **Contamination and leakage are always live concerns for competition benchmarks.** The stated protocol (problems released to labs only after contestants sat the exam, fixed submission window, no human intervention) is designed to prevent exactly this, but the protocol is self-described by the participants rather than published and enforced by an independent body.
- **An olympiad problem is not research mathematics.** IMO problems are hard, but they are built to be solvable by a talented 17-year-old in about 90 minutes with no references, and every one of them is known in advance to have a clean short solution. Saturating that benchmark says something real about reasoning under a clock; it does not say a model can pose the right question, work for months, or build a theory. The other mathematics entries in this collection (open Erdős problems, the Jacobian and Dinitz-Garg-Goemans counterexamples) are closer to that different, harder thing.
- **No 2026 result from the two labs that defined the 2025 milestone.** No Google DeepMind or OpenAI announcement of an IMO 2026 score was found, so the models most people would have expected at the top of this list simply are not on it through official channels.

## Sources
- [IMO 2026 official results page (imo-official.org)](https://www.imo-official.org/editions/2026/)
- [IMO official news index](https://www.imo-official.org/news/)
- [AFP wire story, via TechXplore](https://techxplore.com/news/2026-07-ai-humans-score-math-contest.html)
- [South China Morning Post on RedNote's dots-note-3.0](https://www.scmp.com/tech/article/3361482/worlds-first-ai-model-earn-perfect-score-maths-olympiad-comes-chinas-rednote)
- [BigGo Finance, framing the results as claims awaiting scrutiny](https://finance.biggo.com/news/69d2e462-b41d-4fc5-9eb6-be6ced5b5f6e)
- [Deedy Das's independent evaluation and audit trails (GitHub)](https://github.com/deedy/imo-2026)
- [Analysis separating official grading from the independent harness](https://www.digitalapplied.com/blog/imo-2026-perfect-scores-ai-benchmark-saturation)
- [NVIDIA's own announcement of Nemotron 3 Ultra's 30/42 on the IMO 2026 problems (X)](https://x.com/NVIDIAAI/status/2079642933058244704)
- [An IMO coordinator's perspective on AI grading at IMO 2025 (LessWrong)](https://www.lesswrong.com/posts/3FRqRpisLaydEAhyD/a-brief-perspective-from-an-imo-coordinator)
- [DeepMind's IMO 2025 gold announcement, for the 35/42 baseline](https://deepmind.google/blog/advanced-version-of-gemini-with-deep-think-officially-achieves-gold-medal-standard-at-the-international-mathematical-olympiad/)

---
*Back to **[README.md](./README.md)** · **[PROMPT.md](./PROMPT.md)**.*
