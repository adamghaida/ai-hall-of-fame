# 🤖 Explore this with AI: the first perfect 42/42 AI scores at IMO 2026

Paste the prompt below into your favorite AI assistant (Claude, ChatGPT, Gemini, or a local model). If your assistant can browse the web, tell it to read the sources first. The point is a clear, honest, grounded explanation of what happened and why it mattered.

> Two years after silver and one after gold, AI systems reported flawless papers at the International Mathematical Olympiad. Only seven of 666 human contestants did the same.

---

```text
You are a sharp, honest math and AI-evaluation explainer. Walk me through a specific, real result so that I actually understand it, including the parts the headlines got wrong.

Topic: the claims that AI systems scored a perfect 42/42 at the 2026 International Mathematical Olympiad (Shanghai, July 10-21, 2026), announced in the days after the closing ceremony.

Please cover, in plain language a curious non-expert can follow:
1. How IMO scoring and grading actually work: six problems, 7 points each, 42 total, and the coordination process by which marks are agreed between team leaders and problem captains. Why "who graded it" is the whole ballgame for an AI claim.
2. The three-year arc: 28/42 in 2024 (DeepMind's AlphaProof + AlphaGeometry 2, in Lean), 35/42 in 2025 (Gemini Deep Think with official IMO grading; OpenAI at the same score via an independent panel), and the 42/42 claims in 2026.
3. A careful roster of who claimed what in 2026 and on whose authority:
   - Huawei ("Celia") and Xiaohongshu/RedNote ("dots-note-3.0"), each announcing 42/42 and each saying the solutions went to IMO organisers for grading.
   - Deedy Das of Menlo Ventures, whose own harness recorded 42/42 for Claude Fable 5, GPT-5.6 Sol (xhigh) and Kimi K3, and whose repository says the graders were Claude-based agents and the scores are "strong but not authoritative."
   Keep official grading, company self-report, and independent testing clearly separate. Note that the IMO's own news page carries no statement about AI participation or AI grading in 2026.
4. The human baseline: 666 contestants from 117 countries, a gold cutoff of 29, and exactly 7 perfect scores. What does an AI matching that actually demonstrate?
5. The honest caveats: no IMO confirmation of any AI score has been found; several of the models are unreleased or in beta, so nobody outside can reproduce the result; contamination and problem-leakage are perennial risks for competition benchmarks even under a stated post-exam release protocol; and an olympiad problem is designed to be solvable by a teenager in about 90 minutes, which is a different kind of hard from open research mathematics.
6. What you would want to see before treating "AI got a perfect IMO score" as settled fact.

Ground your answer in these sources (read them if you can, and cite them as you go):
- IMO 2026 official results: https://www.imo-official.org/editions/2026/
- IMO official news index: https://www.imo-official.org/news/
- AFP wire story: https://techxplore.com/news/2026-07-ai-humans-score-math-contest.html
- SCMP on RedNote's model: https://www.scmp.com/tech/article/3361482/worlds-first-ai-model-earn-perfect-score-maths-olympiad-comes-chinas-rednote
- Independent evaluation with audit trails: https://github.com/deedy/imo-2026
- An IMO coordinator on AI grading at IMO 2025: https://www.lesswrong.com/posts/3FRqRpisLaydEAhyD/a-brief-perspective-from-an-imo-coordinator

Be concrete, clearly separate confirmed facts from unverified claims, and if you are unsure about a detail, say so instead of guessing.
```

## Bonus: have the agent audit one solution

The IMO 2026 problems are public, and one independent evaluation published its full transcripts. Have a capable assistant grade rather than summarize:

```
Open https://github.com/deedy/imo-2026 and pick one problem where a model was awarded 7/7. Read the model's actual submitted solution. State the problem, walk through the argument, and grade it yourself against a strict olympiad standard: is every case covered, is every claimed inequality or lemma justified, and would a coordinator deduct points anywhere? Then compare your marks to the ones in the repository's table and explain any disagreement.
```

---

## Sources
- [IMO 2026 official results page (imo-official.org)](https://www.imo-official.org/editions/2026/)
- [IMO official news index](https://www.imo-official.org/news/)
- [AFP wire story, via TechXplore](https://techxplore.com/news/2026-07-ai-humans-score-math-contest.html)
- [South China Morning Post on RedNote's dots-note-3.0](https://www.scmp.com/tech/article/3361482/worlds-first-ai-model-earn-perfect-score-maths-olympiad-comes-chinas-rednote)
- [Deedy Das's independent evaluation and audit trails (GitHub)](https://github.com/deedy/imo-2026)
- [An IMO coordinator's perspective on AI grading at IMO 2025 (LessWrong)](https://www.lesswrong.com/posts/3FRqRpisLaydEAhyD/a-brief-perspective-from-an-imo-coordinator)

---
*Back to **[README.md](./README.md)** · **[CONTEXT.md](./CONTEXT.md)**.*
