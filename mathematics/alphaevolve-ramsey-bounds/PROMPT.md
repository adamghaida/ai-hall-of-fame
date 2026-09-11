# 🤖 Explore this with AI: AlphaEvolve and Ramsey numbers

Paste the prompt below into your favorite AI assistant (Claude, ChatGPT, Gemini, or a local model). If your assistant can browse the web, tell it to read the sources first. The point is a clear, honest, grounded explanation of what happened and why it mattered.

> Nine cells of the Ramsey table moved at once, found by evolving search programs rather than graphs, with every new graph published for checking.

---

```text
You are a sharp, honest math and AI explainer. Walk me through a specific, real AI achievement so that I actually understand it, not just the headline.

Topic: In March 2026, Ansh Nagda, Prabhakar Raghavan and Abhradeep Thakurta (Google DeepMind / Google / UC Berkeley) posted "Reinforced Generation of Combinatorial Structures: Ramsey Numbers" (arXiv 2603.09172), improving lower bounds for nine classical Ramsey numbers using AlphaEvolve: R(3,13) 60→61, R(3,18) 99→100, R(4,13) 138→139, R(4,14) 147→148, R(4,15) 158→159, R(4,16) 170→174, R(4,18) 205→209, R(4,19) 213→219, R(4,20) 234→237. The graphs are published as adjacency matrices with a verification notebook.

Please cover, in plain language a curious non-expert can follow:
1. What R(r, s) means, why a graph on n vertices with no r-clique and no s-independent set proves R(r, s) ≥ n + 1, and why lower bounds are "easy to check, hard to find."
2. How the state of the art was built: Radziszowski's survey, Exoo's constructions, circulant graphs and difference sets, simulated annealing.
3. What AlphaEvolve is and what is different about using it as a meta-search that evolves search algorithms rather than graphs. Describe two or three of the discovered heuristics from the paper's appendix (e.g. difference-set "teleportation" mutations, warm-starting from scaled difference sets, growing graphs by attaching a new vertex to a maximal independent set).
4. Why the authors say the discovered algorithms do not transfer between cells, and what that implies about the "single meta-algorithm" claim.
5. The honest caveats: improvements of 1 to 6 vertices; no exact values or upper bounds changed; a preprint, not peer reviewed; the released code is randomized and not guaranteed to reproduce the bounds; secondary coverage that says "five" bounds when the paper says nine.
6. How this compares to FunSearch's cap set result (2023) and AlphaEvolve's 2025 results, and what would count as a genuinely bigger step in Ramsey theory.

Ground your answer in these primary sources (read them if you can, and cite them as you go):
- The paper: https://arxiv.org/abs/2603.09172
- The constructions, verification notebook and search code: https://github.com/google-research/google-research/tree/master/ramsey_number_bounds

Be concrete, use real numbers where they matter, and if you are unsure about a detail, say so instead of guessing.
```

## Bonus: have the agent verify a bound

A Ramsey lower bound is a finite object, so this one can be checked end to end:

```
Download the adjacency matrix for "R(3, 13) >= 61" from
https://github.com/google-research/google-research/tree/master/ramsey_number_bounds/improved_bounds
(the file is a printed NumPy array of 0s and 1s). Parse it and confirm:
1. It is a 60 x 60 symmetric 0/1 matrix with zero diagonal.
2. The graph has no triangle (no 3-clique): check every edge (u, v) has no common neighbour.
3. The graph has no independent set of size 13: compute the independence number, e.g. via a maximum-clique
   search on the complement graph with networkx (nx.max_weight_clique or nx.graph_clique_number on the complement),
   and confirm it is at most 12.
If both checks pass, the graph proves R(3,13) >= 61. Report the number of edges, the degree sequence, and whether
the graph is circulant (is the adjacency matrix invariant under the cyclic shift of vertex labels?).
Then repeat the independence-number check for "R(4, 20) >= 237" (236 vertices, no 4-clique, no 20-independent set),
using a proper branch-and-bound clique solver, and say honestly how long it took or whether it timed out.
```

---

## Sources
- [*Reinforced Generation of Combinatorial Structures: Ramsey Numbers* (arXiv 2603.09172)](https://arxiv.org/abs/2603.09172)
- [google-research/ramsey_number_bounds: constructions, verification notebook, search code (GitHub)](https://github.com/google-research/google-research/tree/master/ramsey_number_bounds)

---
*Back to **[README.md](./README.md)** · **[CONTEXT.md](./CONTEXT.md)**.*
