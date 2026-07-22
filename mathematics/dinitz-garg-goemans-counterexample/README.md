# Disproving the Dinitz–Garg–Goemans conjecture (with GPT-5.6 Pro)

**Field:** 🧮 Mathematics  ·  **When:** July 2026

> A roughly 30-year-old unsplittable-flow conjecture in graph theory, disproved by a concrete counterexample found in a chat with GPT-5.6 Pro.

## What happened
On July 22, 2026, mathematician **Dmitry Rybin** announced a counterexample to the cost version of the **Dinitz–Garg–Goemans (DGG) conjecture**, a graph-theory problem about *unsplittable flow* that had been open since the late 1990s.

The setup: the 1999 DGG theorem shows that any fractional (splittable) flow can be rounded into an **unsplittable** flow (where each demand travels along a single path) so that the flow on any arc grows by less than the maximum demand. Goemans conjectured a stronger, cost-preserving version: you could do this rounding while also keeping the total **cost** no larger than the fractional flow's cost.

Rybin exhibited a specific graph where that fails. The fractional flow has **cost 58**, but **every** unsplittable flow that stays within the allowed capacity violation (≤ 15, the maximum demand) costs **at least 60**. No cost-preserving unsplittable rounding exists, so the conjecture is false. The counterexample was found in a conversation with OpenAI's **GPT-5.6 Pro**, which Rybin shared publicly.

## Why it matters
Days after an AI-assisted counterexample settled the Jacobian conjecture, here is another decades-old open problem resolved with a frontier model's help, and again the result is a **concrete, checkable object** (one graph with explicit flow costs) rather than a long proof. It closes off the hoped-for cost-preserving strengthening of a foundational rounding theorem in combinatorial optimization.

## Sources — the record of the discovery
- [Dmitry Rybin's announcement (X)](https://x.com/DmitryRybin1/status/2079904005652893709)
- [The GPT-5.6 Pro chat where the counterexample was found](https://chatgpt.com/share/6a60b2eb-0b64-83ee-9c76-7931ca1de063)
- [Dinitz, Garg & Goemans, "On the single-source unsplittable flow problem" (Combinatorica, 1999) — the original theorem](https://link.springer.com/article/10.1007/s004930050043)
- [Digg — coverage](https://digg.com/tech/yg49xzrx)

---
*In this folder: **[PROMPT.md](./PROMPT.md)** (a prompt to explore it with AI) · **[CONTEXT.md](./CONTEXT.md)** (background & caveats). Part of the [AI Hall of Fame](../../README.md) → [🧮 Mathematics](../).*
