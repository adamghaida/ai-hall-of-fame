# AlphaEvolve finds new hardness-of-approximation gadgets for MAX-4-CUT and TSP

**Field:** 💻 Computer Science  ·  **When:** September 2025 · arXiv

> A coding agent evolved a 19-node weighted gadget that tightens the NP-hardness threshold for MAX-4-CUT from 0.9883 to 0.987, pushed the metric TSP bound from 117/116 to 111/110, and built near-extremal Ramanujan graphs on 163 vertices where prior hand constructions stopped at 10. Every gadget was then re-checked by brute force.

## What happened
Complexity theorists prove that a problem is hard to *approximate* by building a **gadget**: a small, finite combinatorial object that translates one problem's constraints into another's while preserving a precise gap between satisfiable and unsatisfiable instances. Finding a good gadget is a search over a huge discrete space, and checking one means enumerating every assignment to its variables. The searches are tedious, and the best-known gadgets for several classic problems had not moved in years.

In September 2025, Ansh Nagda (UC Berkeley and Google DeepMind), Prabhakar Raghavan (Google) and Abhradeep Thakurta (Google DeepMind) posted *Reinforced Generation of Combinatorial Structures: Hardness of Approximation* (arXiv 2509.18057), reporting that [AlphaEvolve](../../mathematics/alphaevolve-algorithm-discovery/), DeepMind's Gemini-driven code-evolution agent, had produced new gadgets in three settings:

- **MAX-4-CUT.** A reduction from 3LIN(4) using a gadget with **19 variables** and integer edge weights ranging from 1 to **1,429**. It shows MAX-4-CUT is NP-hard to approximate within **0.987**, improving the 0.9883 bound of Austrin, O'Donnell, Tan and Wright (2014). For MAX-3-CUT the same method gave 0.9649 (55/57), better than the previous gadget-based bound of 0.9853 but still behind the 16/17 bound proved with custom PCPs.
- **Metric TSP.** New "equation gadgets" show metric TSP is NP-hard to approximate within **111/110**, improving the previous 117/116.
- **Average-case certification.** For MAX-CUT and maximum independent set on random 3- and 4-regular graphs, AlphaEvolve constructed **nearly extremal Ramanujan graphs on up to 163 vertices** (prior explicit examples had about 10), raising the lower bounds on what any polynomial-time certifier can achieve: for example γ₄ for MAX-CUT from 7/8 to 113/124, and γ₄ for independent set from 3/7 to 74/163.

The trick that made the search feasible was to point AlphaEvolve at the *verifier* as well. Checking a gadget of size m naively costs Ω(kᵐ) constraint evaluations; AlphaEvolve evolved branch-and-bound verifiers that ran up to **10,000× faster** on the final MAX-4-CUT gadget, letting the search loop iterate far more candidates. The authors then re-verified every final gadget with the original brute-force checker, so the theorems do not depend on the evolved verifier being correct. Because the reductions are "lifting" arguments, a single finite gadget yields a theorem that holds for all input sizes n.

## Why it matters
Hardness-of-approximation bounds are among the sharpest tools in theoretical computer science, and they are unusually well suited to machine search: the object is finite, the correctness check is mechanical, and the score (the gap the gadget certifies) is a single number. This is the first paper to move several long-standing gadget-based bounds using an LLM agent, and the verification story is clean: the AI-discovered objects were checked exhaustively, and the human-written proof framework around them is unchanged.

It is also a clear example of the division of labour that seems to work. Humans chose the problems, designed the reduction frameworks and wrote the lifting arguments; the agent explored the combinatorial spaces and made the checkers fast. Google's research blog framed it as "AI as a research partner", which is the honest framing: the MAX-3-CUT result did not beat the best non-gadget method, a Hadamard-matrix search failed outright, and direct prompting of an LLM produced nothing usable.

## Sources — the record of the discovery
- [arXiv 2509.18057: Reinforced Generation of Combinatorial Structures: Hardness of Approximation (Nagda, Raghavan, Thakurta)](https://arxiv.org/abs/2509.18057)
- [Full text (arXiv HTML)](https://arxiv.org/html/2509.18057)
- [Google Research blog: AI as a research partner, advancing theoretical computer science with AlphaEvolve (September 30, 2025)](https://research.google/blog/ai-as-a-research-partner-advancing-theoretical-computer-science-with-alphaevolve/)
- [DeepMind: the original AlphaEvolve announcement (May 2025)](https://deepmind.google/discover/blog/alphaevolve-a-gemini-powered-coding-agent-for-designing-advanced-algorithms/)

---
*In this folder: **[PROMPT.md](./PROMPT.md)** (a prompt to explore it with AI) · **[CONTEXT.md](./CONTEXT.md)** (background & caveats). Part of the [AI Hall of Fame](../../README.md) → [💻 Computer Science](../).*
