# 🤖 Explore this with AI: AlphaEvolve's hardness-of-approximation gadgets

Paste the prompt below into your favorite AI assistant (Claude, ChatGPT, Gemini, or a local model). If your assistant can browse the web, tell it to read the sources first. The point is a clear, honest, grounded explanation of what happened and why it mattered.

> A coding agent evolved a 19-node weighted gadget that tightens the NP-hardness threshold for MAX-4-CUT from 0.9883 to 0.987, and every gadget was re-checked by brute force.

---

```text
You are a sharp, honest explainer of theoretical computer science and AI. Walk me through a specific, real AI-assisted result so that I actually understand it, not just the headline.

Topic: In September 2025, Ansh Nagda, Prabhakar Raghavan and Abhradeep Thakurta (Google DeepMind / Google / UC Berkeley) posted "Reinforced Generation of Combinatorial Structures: Hardness of Approximation" (arXiv 2509.18057). Using AlphaEvolve, DeepMind's LLM-driven code-evolution agent, they found new gadget reductions showing MAX-4-CUT is NP-hard to approximate within 0.987 (previously 0.9883, via a 19-variable gadget with edge weights from 1 to 1429), metric TSP within 111/110 (previously 117/116), and constructed nearly extremal Ramanujan graphs on up to 163 vertices that improve lower bounds for certifying MAX-CUT and independent set on random 3- and 4-regular graphs. AlphaEvolve also evolved the verification code, making it up to 10,000 times faster, and the final gadgets were re-verified by brute force.

Please cover, in plain language a curious non-expert can follow:
1. What an inapproximability result is, and why a tiny change like 0.9883 to 0.987 is meaningful to complexity theorists.
2. What a "gadget reduction" is, and what "lifting" means: how a finite object with 19 nodes can prove a statement about all input sizes.
3. How AlphaEvolve searched: what the fitness signal was, why evolving the verifier mattered as much as evolving the gadget, and why the final brute-force recheck matters for trust.
4. The Ramanujan-graph part: what certifying properties of random regular graphs means, why 163 vertices versus 10 is a big jump, and what the planted-instance hypothesis (the paper's Conjecture 2.1) adds as an assumption.
5. The honest caveats: the MAX-3-CUT gadget bound (0.9649) is still weaker than the 16/17 bound from custom PCPs; some searches failed (the d = 3 MAX-3-CUT bound, a Hadamard-matrix construction); humans designed all the reduction frameworks and the TSP reformulation; it is a preprint, revised several times; and no gadget data release is linked, so re-verification requires reconstructing the gadgets from the paper.
6. Where this sits relative to the original AlphaEvolve announcement (May 2025) and to other AI-in-mathematics results.
7. What I should read next.

Ground your answer in these sources (read them if you can, and cite them as you go):
- arXiv abstract: https://arxiv.org/abs/2509.18057
- Full text: https://arxiv.org/html/2509.18057
- Google Research blog: https://research.google/blog/ai-as-a-research-partner-advancing-theoretical-computer-science-with-alphaevolve/
- AlphaEvolve announcement: https://deepmind.google/discover/blog/alphaevolve-a-gemini-powered-coding-agent-for-designing-advanced-algorithms/

Be concrete, use real numbers where they matter, clearly separate confirmed facts from your own interpretation, and if you are unsure about a detail, say so instead of guessing.
```

## Bonus: have the agent check a gadget

The MAX-4-CUT gadget is a finite object, so its claimed gap can in principle be re-verified exhaustively. Point a coding agent at the paper:

```
Read https://arxiv.org/html/2509.18057 and find the MAX-4-CUT gadget (19 variables, integer edge weights between 1 and 1429, reduction from 3LIN(4)). Do the following and report back honestly:

1. Write down precisely what the gadget's completeness and soundness parameters need to be for the 0.987 inapproximability claim, in the paper's own notation.
2. If the paper gives the gadget's edge list and weights explicitly, transcribe it into a small Python script that enumerates all 4^19 assignments (or uses symmetry / branch and bound to prune) and computes the completeness and soundness values. 4^19 is about 2.7 x 10^11, so say clearly whether a full enumeration is feasible on your hardware, and if not, implement a branch-and-bound that you can argue is exact.
3. Compare your numbers with the paper's. If the paper does not list the gadget explicitly, say so, and instead reproduce the calculation that turns the completeness/soundness pair into the 0.987 ratio.
4. Do not claim to have verified anything you did not actually run.
```

---

## Sources
- [arXiv 2509.18057 (abstract)](https://arxiv.org/abs/2509.18057)
- [arXiv 2509.18057 (HTML full text)](https://arxiv.org/html/2509.18057)
- [Google Research blog: AI as a research partner (September 30, 2025)](https://research.google/blog/ai-as-a-research-partner-advancing-theoretical-computer-science-with-alphaevolve/)
- [DeepMind: AlphaEvolve announcement (May 2025)](https://deepmind.google/discover/blog/alphaevolve-a-gemini-powered-coding-agent-for-designing-advanced-algorithms/)

---
*Back to **[README.md](./README.md)** · **[CONTEXT.md](./CONTEXT.md)**.*
