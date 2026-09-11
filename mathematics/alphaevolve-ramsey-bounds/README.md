# AlphaEvolve improves nine classical Ramsey number lower bounds

**Field:** 🧮 Mathematics  ·  **When:** March 2026

> Nine records in the most famous table in combinatorics moved at once, some for the first time in over a decade, and the new graphs are published as adjacency matrices anyone can check in a notebook.

## What happened
The Ramsey number **R(r, s)** is the smallest n such that every graph on n vertices contains either a clique of size r or an independent set of size s. Exact values are known only for tiny cases (R(3,3) = 6, R(4,4) = 18, R(4,5) = 25), and for everything else the state of the art is a table of bounds maintained in Stanisław Radziszowski's dynamic survey *Small Ramsey Numbers*. Lower bounds come from explicit constructions: a graph on n vertices with no r-clique and no s-independent set proves R(r, s) ≥ n + 1. For decades, these graphs have been found by bespoke computer searches, each tuned by hand to one cell of the table.

On **March 10, 2026**, **Ansh Nagda** (UC Berkeley and Google DeepMind), **Prabhakar Raghavan** (Google) and **Abhradeep Thakurta** (Google DeepMind) posted *Reinforced Generation of Combinatorial Structures: Ramsey Numbers*, reporting improved lower bounds for nine classical Ramsey numbers, found with **AlphaEvolve**, DeepMind's LLM-driven code-evolution agent:

| Ramsey number | Previous bound | New bound |
|---|---|---|
| R(3,13) | 60 | 61 |
| R(3,18) | 99 | 100 |
| R(4,13) | 138 | 139 |
| R(4,14) | 147 | 148 |
| R(4,15) | 158 | 159 |
| R(4,16) | 170 | 174 |
| R(4,18) | 205 | 209 |
| R(4,19) | 213 | 219 |
| R(4,20) | 234 | 237 |

The previous bounds the paper cites come from Exoo (2006), Exoo and Tatarevic (2015) and Radziszowski's survey. The method is a meta-search: rather than evolving graphs, AlphaEvolve evolves **search programs**. For each (r, s), a population of candidate search algorithms is mutated by an LLM and scored on the size of the largest valid graph it finds; the paper's appendix prints 33 of the discovered algorithms in prose. Several rediscover classical starting points (cubic-residue and Paley graphs, circulant graphs with difference sets) and then optimize with evolved heuristics: simulated annealing with adaptive cooling, "teleportation" mutations that replace two distances in a difference set by their sum and difference, warm-starting larger graphs from scaled difference sets, and vertex-growth strategies that attach a new vertex to a maximal independent set. Beyond the nine new bounds, the same pipeline "recovered lower bounds for all Ramsey numbers known to be exact, and matched the best known lower bounds across many other cases," including cells for which prior work never published its algorithm.

The constructions are published in the `google-research` repository as adjacency matrices, with a notebook `verify_bounds.ipynb` that checks each graph has no r-clique and no s-independent set, together with the AI-generated search code for each cell.

## Why it matters
Ramsey lower bounds are a classic proving ground for computational search, and the table has been advanced by a small number of specialists (Exoo above all) writing hand-crafted code for one cell at a time. The paper's claim is not that any single new bound is deep, but that "AlphaEvolve is a single meta-algorithm yielding search algorithms for all of our results," which is a different kind of contribution: one system, many cells, with the search strategies themselves as the discovered objects. It sits alongside AlphaEvolve's earlier improvements to open bounds (see [the AlphaEvolve entry](../alphaevolve-algorithm-discovery/)) and its later role, in August 2026, as the final refinement step in a new upper bound on the matrix multiplication exponent (the lineage that began with [AlphaTensor](../alphatensor-matrix-multiplication/)). The results are also unusually easy to verify: a Ramsey lower bound is a finite object, and the graphs are public.

The improvements are by one to six vertices, the search algorithms do not transfer between cells, and no upper bound moved. See **[CONTEXT.md](./CONTEXT.md)**.

## Sources — the record of the discovery
- [Nagda, Raghavan, Thakurta, *Reinforced Generation of Combinatorial Structures: Ramsey Numbers* (arXiv 2603.09172, March 10, 2026; v5 April 21)](https://arxiv.org/abs/2603.09172)
- [The constructions (adjacency matrices), verification notebook, and search code (GitHub, google-research/ramsey_number_bounds)](https://github.com/google-research/google-research/tree/master/ramsey_number_bounds)
- [OfficeChai coverage, March 11, 2026 (with a Pushmeet Kohli quote)](https://officechai.com/ai/google-deepminds-alphaevolve-cracks-five-ramsey-number-puzzles-that-stumped-mathematicians-for-decades/)

---
*In this folder: **[PROMPT.md](./PROMPT.md)** (a prompt to explore it with AI, including how to verify the graphs) · **[CONTEXT.md](./CONTEXT.md)** (background & caveats). Part of the [AI Hall of Fame](../../README.md) → [🧮 Mathematics](../).*
