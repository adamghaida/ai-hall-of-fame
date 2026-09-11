# 📚 Context: AlphaEvolve and the Ramsey table

## Ramsey numbers in one paragraph
Ramsey's theorem says that for any r and s there is an n such that every two-colouring of the edges of the complete graph on n vertices contains a red K_r or a blue K_s; R(r, s) is the least such n. Erdős's famous quip is that if aliens demanded R(5,5) we should marshal all our computers, but if they demanded R(6,6) we should attack. Lower bounds are constructive (exhibit a graph with no r-clique and no s-independent set on n vertices, then R(r, s) ≥ n + 1) and upper bounds are proofs about all graphs. Almost all known lower bounds for small (r, s) are computational, and the canonical record is Radziszowski's dynamic survey in the Electronic Journal of Combinatorics. Many of the constructions are circulant (Cayley) graphs defined by a difference set, which reduces the search from a whole adjacency matrix to a subset of Z_n and makes clique checks fast.

## What AlphaEvolve did here
AlphaEvolve (Novikov et al., 2025) is an LLM-driven evolutionary coding agent: it holds a population of programs, asks a language model to mutate them, runs them, scores the outputs, and iterates. The Ramsey paper uses it one level up. The evolved programs are search algorithms; the score is the largest valid graph the algorithm finds for a target (r, s). The paper reports that the discovered algorithms are cell-specific: "Each of the search algorithms seems specific to the corresponding cells; their success does not seem to transfer between cells." Some rediscover known algebraic seeds (Paley graphs for R(4,4) and R(6,7), cubic residues for R(4,13)), but the optimization stages differ from Exoo's simulated annealing. For R(4,18), where the previous record came from differencing between other cells, AlphaEvolve "developed a new ground-up heuristic."

## People
Ansh Nagda (Berkeley and DeepMind), Prabhakar Raghavan (Google), Abhradeep Thakurta (DeepMind). The same authors' 2025 paper applied the approach to hardness-of-approximation gadgets. The earlier bounds are due to Geoffrey Exoo, Milos Tatarevic and others.

## Why it's in the Hall of Fame
The Ramsey table is one of the oldest computational frontiers in combinatorics, and moving nine cells with one general-purpose system is a clean, checkable demonstration that LLM-driven program search can compete with decades of specialist hand-tuning. The publication of adjacency matrices plus a verification notebook makes it one of the most reproducible AI-mathematics results of 2026.

## Honest caveats
- **Small steps.** The improvements are 1 vertex in five cells, 3 to 6 in the others. No cell was resolved exactly and no upper bound changed. These are records, not breakthroughs in understanding.
- **Not peer reviewed.** An arXiv preprint (five versions between March 10 and April 21, 2026). The graphs are what is verifiable; the paper's account of the search process is not independently reproducible, and the repository README warns that the released code is "a randomized procedure that is not guaranteed to find the final lower bound with high probability."
- **The "decade-old records" framing is partly about neglect.** Some of these cells had not been attacked with modern compute simply because few people work on them. Radziszowski's survey is the reference, and several previous bounds date to Exoo's 2006 database.
- **Secondary coverage disagrees on the count.** OfficeChai's March 11 article speaks of "five" Ramsey numbers; the paper and repository list nine. The repository also contains a construction for R(4,21) ≥ 244 that does not appear in the paper's abstract.
- **No transfer.** The authors themselves note the discovered algorithms do not carry over between cells, which limits the "meta-algorithm" claim to "one system that can be pointed at any cell," not "one algorithm that works everywhere."
- **Credit is shared with the search seeds.** Several of the winning algorithms start from classical algebraic constructions that humans found first.

## Sources
- [*Reinforced Generation of Combinatorial Structures: Ramsey Numbers* (arXiv 2603.09172)](https://arxiv.org/abs/2603.09172)
- [google-research/ramsey_number_bounds (GitHub)](https://github.com/google-research/google-research/tree/master/ramsey_number_bounds)
- [OfficeChai, March 11, 2026](https://officechai.com/ai/google-deepminds-alphaevolve-cracks-five-ramsey-number-puzzles-that-stumped-mathematicians-for-decades/)

Related entries: [AlphaEvolve](../alphaevolve-algorithm-discovery/) · [FunSearch and the cap set problem](../funsearch-cap-set/) · [AlphaTensor](../alphatensor-matrix-multiplication/)

---
*Back to **[README.md](./README.md)** · **[PROMPT.md](./PROMPT.md)**.*
