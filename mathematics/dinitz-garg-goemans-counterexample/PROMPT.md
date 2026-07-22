# 🤖 Explore this with AI: Disproving the Dinitz–Garg–Goemans conjecture (with GPT-5.6 Pro)

Paste the prompt below into your favorite AI assistant (Claude, ChatGPT, Gemini, or a local model). If your assistant can browse the web, tell it to read the sources first. The point is a clear, honest, grounded explanation of what happened and why it mattered.

> A roughly 30-year-old unsplittable-flow conjecture in graph theory, disproved by a concrete counterexample found in a chat with GPT-5.6 Pro.

---

```text
You are a sharp, honest math explainer. Walk me through a specific, real AI-assisted result so that I actually understand it, not just the headline.

Topic: A counterexample to the cost version of the Dinitz-Garg-Goemans conjecture (single-source unsplittable flow), found with GPT-5.6 Pro in July 2026.

Please cover, in plain language a curious non-expert can follow:
1. What "single-source unsplittable flow" means, and what the 1999 Dinitz-Garg-Goemans theorem actually guarantees.
2. What the stronger "cost-preserving" conjecture claimed, and why it was believed / stayed open for decades.
3. What the counterexample shows (a graph with fractional flow cost 58 where any unsplittable flow with capacity violation <= 15 costs at least 60), and why that refutes the conjecture.
4. The honest caveats: it is brand new and not yet peer-reviewed, only the cost strengthening falls (the base theorem stands), and the human-versus-AI split is hard to apportion.
5. How a mathematician would independently verify a claimed counterexample like this.

Ground your answer in these sources (read them if you can, and cite them as you go):
- Dmitry Rybin's announcement (X): https://x.com/DmitryRybin1/status/2079904005652893709
- The GPT-5.6 Pro chat where it was found: https://chatgpt.com/share/6a60b2eb-0b64-83ee-9c76-7931ca1de063
- Dinitz, Garg & Goemans, Combinatorica 1999 (the original theorem): https://link.springer.com/article/10.1007/s004930050043

Be concrete, distinguish confirmed facts from what is still unverified, and if you are unsure about a detail, say so instead of guessing.
```

## Bonus: have the agent check the counterexample

Since this is a concrete finite graph, ask a code-capable assistant to reconstruct it from the shared chat and verify the claim directly:

```
From the shared graph, set up (a) the min-cost fractional single-source flow and (b) the min-cost UNSPLITTABLE flow subject to per-arc capacity violation <= 15, as an integer/constraint program. Confirm the fractional optimum is 58 and that every feasible unsplittable flow costs >= 60, which is what refutes the cost-preserving Dinitz-Garg-Goemans conjecture.
```

---

## Sources
- [Dmitry Rybin's announcement (X)](https://x.com/DmitryRybin1/status/2079904005652893709)
- [The GPT-5.6 Pro chat where the counterexample was found](https://chatgpt.com/share/6a60b2eb-0b64-83ee-9c76-7931ca1de063)
- [Dinitz, Garg & Goemans, "On the single-source unsplittable flow problem" (Combinatorica, 1999)](https://link.springer.com/article/10.1007/s004930050043)
- [Digg — coverage](https://digg.com/tech/yg49xzrx)

---
*Back to **[README.md](./README.md)** · **[CONTEXT.md](./CONTEXT.md)**.*
