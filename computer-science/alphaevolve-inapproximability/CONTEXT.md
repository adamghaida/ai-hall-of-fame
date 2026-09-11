# 📚 Context: AlphaEvolve and hardness of approximation

**The problem class.** For an NP-hard optimisation problem, an *approximation ratio* α means a polynomial-time algorithm always gets within a factor α of the optimum. An *inapproximability* result says that doing better than some threshold is itself NP-hard. The gap between the best known algorithm and the best known hardness bound is where a field's open questions live. For MAX-CUT the gap was closed (assuming the Unique Games Conjecture) in the 2000s; for MAX-k-CUT with k ≥ 3 and for metric TSP it has stayed open for decades.

**Gadgets and lifting.** Most such hardness results are proved by reduction: start from a problem already known to be hard with a certain gap, and build a small *gadget* that encodes one source constraint as a bundle of target constraints so that the gap survives. The gadget is a finite object (here, a weighted graph on 19 nodes), but the reduction produces a theorem quantified over all instance sizes. The paper calls this "lifting": in the research blog's words, one can "take a chunk of the proof (corresponding to a certain finite structure), and evolve it to support a stronger universal statement, while keeping the interface to the rest of the proof intact." The human-written proof framework is fixed; only the finite chunk is searched.

**What was searched.**
- *MAX-4-CUT*, reduced from 3LIN(4) (constraints of the form x + y + z ≡ b mod 4) via standard Håstad-style PCPs. Prior state of the art was 0.9883 (Austrin, O'Donnell, Tan, Wright, 2014); the new 19-variable gadget with weights from 1 to 1,429 gives 0.987. For *MAX-3-CUT* the analogous search gave 0.9649 (55/57), which beats the previous gadget-based 0.9853 but not the 16/17 ≈ 0.941 bound obtained with custom PCPs. For the d = 3 MAX-3-CUT variant, AlphaEvolve recovered the known bound and could not improve it.
- *Metric TSP*, where "equation gadgets" were found that improve the hardness threshold from 117/116 to 111/110. The authors say this direction needed significant human involvement to reformulate the problem so that the soundness and completeness constraints could be modularised for search.
- *Certification on random regular graphs.* Here the object is a Ramanujan graph (a d-regular graph whose nontrivial adjacency eigenvalues are all at most 2√(d−1)) with an unusually large max-cut or an unusually small independent set. Such graphs bound what any polynomial-time algorithm can *certify* about random d-regular graphs under a planted-instance hypothesis (the paper's Conjecture 2.1). Prior explicit examples had about 10 vertices; AlphaEvolve found nearly extremal examples on up to 163 vertices, giving γ₄ᴹᶜ ≥ 113/124 (previously 7/8), γ₃ᴵˢ ≥ 17/36 (previously 11/24) and γ₄ᴵˢ ≥ 74/163 (previously 3/7).

**The verification trick.** Checking a gadget exhaustively costs Ω(kᵐ) work for a gadget with m variables over a k-valued domain. Rather than accept that bound, the authors gave AlphaEvolve the verifier as an evolvable program and scored it on speed and agreement with brute force. The evolved branch-and-bound verifiers ran up to 10,000× faster on the final MAX-4-CUT gadget. The final gadgets were re-checked with the original brute-force code, so the published theorems rest on the exhaustive check, not on the evolved one.

**People.** Ansh Nagda was a student researcher at UC Berkeley and Google DeepMind; Prabhakar Raghavan is Google's Chief Technologist and a long-time algorithms researcher; Abhradeep Thakurta is a staff research scientist at Google DeepMind. The blog post thanks Adam Zsolt Wagner, Swarat Chaudhuri, Pasin Manurangsi and Sushant Sachdeva. AlphaEvolve itself is the Gemini-based evolutionary coding agent DeepMind announced in May 2025; see the [main AlphaEvolve entry](../../mathematics/alphaevolve-algorithm-discovery/).

## Why it's in the Hall of Fame
Hardness gadgets are a canonical case where a finite, machine-checkable object carries a theorem for all n. This paper shows an LLM-driven search moving several such bounds at once (MAX-4-CUT, metric TSP, three certification thresholds) while keeping the proof of correctness exhaustive and human-readable. It also introduced a reusable methodology, evolving the verifier alongside the object, that is likely to matter well beyond these particular problems.

## Honest caveats

- **The improvements are small in absolute terms.** 0.9883 to 0.987 for MAX-4-CUT and 117/116 to 111/110 for TSP are real, but they do not close the gaps to the best known algorithms. The paper's own framing is incremental progress on bounds, not resolution of open problems.
- **Not every attempt worked.** MAX-3-CUT's new gadget bound is still weaker than the non-gadget 16/17 result. AlphaEvolve could not improve the d = 3 MAX-3-CUT bound. A search for a certain Hadamard-matrix construction failed even with fast verification. The authors also report that naive LLM prompting produced nothing; the results came from the evolutionary loop.
- **Human design was essential.** Humans chose the reductions, wrote the lifting arguments, modularised the TSP constraints and decided what to search over. The TSP direction in particular is described as needing significant human involvement.
- **Conditional results.** The certification bounds (γ values) are conditional on a planted-instance hypothesis (Conjecture 2.1 in the paper) in addition to P ≠ NP. The MAX-k-CUT and TSP results assume only P ≠ NP.
- **Peer-review status.** The paper has been revised several times on arXiv (v7 is dated March 9, 2026; the title changed from "Applications to Complexity Theory" to "Hardness of Approximation"). This entry did not find a peer-reviewed venue for it; treat the results as a well-documented preprint. No code or gadget data release was found in the paper or blog post, so an outside party cannot re-run the brute-force check without reconstructing the gadgets from the paper.
- **Reproducibility of the search.** AlphaEvolve is not publicly available. The gadgets can be verified by anyone; the discovery process cannot be rerun by anyone outside Google.

## Sources
- [arXiv 2509.18057 (abstract)](https://arxiv.org/abs/2509.18057)
- [arXiv 2509.18057 (HTML full text)](https://arxiv.org/html/2509.18057)
- [Google Research blog: AI as a research partner (September 30, 2025)](https://research.google/blog/ai-as-a-research-partner-advancing-theoretical-computer-science-with-alphaevolve/)
- [DeepMind: AlphaEvolve announcement (May 2025)](https://deepmind.google/discover/blog/alphaevolve-a-gemini-powered-coding-agent-for-designing-advanced-algorithms/)

Related entries: [AlphaEvolve, breaking Strassen again](../../mathematics/alphaevolve-algorithm-discovery/) · [AlphaDev, faster sorting](../alphadev-sorting/)

---
*Back to **[README.md](./README.md)** · **[PROMPT.md](./PROMPT.md)**.*
