# 🧮 Mathematics

AI systems that have proved theorems, cracked open problems, and discovered algorithms that had eluded humans for decades.

---

### AlphaProof & AlphaGeometry 2 — silver-medal performance at the IMO

- **What happened:** DeepMind's AlphaProof (a reinforcement-learning system that writes proofs in the formal language **Lean**) and AlphaGeometry 2 together solved 4 of the 6 problems at the 2024 International Mathematical Olympiad, scoring 28/42 — one point shy of gold and equal to a **silver medalist**. AlphaProof cracked the notoriously hard Problem 6, which only 5 of ~600 human contestants solved.
- **When:** July 2024 (peer-reviewed in *Nature*, 2025).
- **Why it's a big deal:** The first time a machine reached medal-level performance at the world's premier mathematics competition. Because proofs are checked by the Lean proof assistant, every answer is **provably correct** — not a plausible-looking guess.
- **Sources:** [DeepMind blog](https://deepmind.google/discover/blog/ai-solves-imo-problems-at-silver-medal-level/) · [Nature paper](https://www.nature.com/articles/s41586-025-09833-y)

### Gemini Deep Think — official gold medal at IMO 2025

- **What happened:** An advanced version of Gemini with "Deep Think" solved 5 of 6 problems for 35/42 points, earning an **official gold medal** — graded under the same rules and time limits as human contestants, working directly in natural language.
- **When:** July 2025.
- **Why it's a big deal:** One year after silver, an AI hit gold — and did it end-to-end in natural language rather than a formal proof language.
- **Sources:** [DeepMind blog](https://deepmind.google/blog/advanced-version-of-gemini-with-deep-think-officially-achieves-gold-medal-standard-at-the-international-mathematical-olympiad/)

### FunSearch — a new answer to a decades-old open problem

- **What happened:** FunSearch paired a large language model with an automated evaluator and evolutionary search to discover new, larger constructions for the **cap set problem**, a longstanding open question in extremal combinatorics. It also found improved heuristics for online bin packing.
- **When:** December 2023 (*Nature*).
- **Why it's a big deal:** Believed to be the first time an LLM produced a **verifiable, genuinely new discovery** on an established open mathematical problem — not retrieving a known result, but generating knowledge that didn't previously exist.
- **Sources:** [DeepMind blog](https://deepmind.google/discover/blog/funsearch-making-new-discoveries-in-mathematical-sciences-using-large-language-models/) · [Nature paper](https://www.nature.com/articles/s41586-023-06924-6) · [MIT Tech Review](https://www.technologyreview.com/2023/12/14/1085318/google-deepmind-large-language-model-solve-unsolvable-math-problem-cap-set/)

### AlphaTensor — beating a 50-year-old matrix-multiplication record

- **What happened:** By framing algorithm discovery as a single-player game ("TensorGame"), AlphaTensor found faster ways to multiply matrices — including a method for 4×4 matrices that **improved on Strassen's 1969 algorithm** for the first time, plus algorithms tuned to run 10–20% faster on specific hardware (Nvidia V100, TPU v2).
- **When:** October 2022 (*Nature*).
- **Why it's a big deal:** Matrix multiplication underlies almost all modern computing. An AI beat a benchmark that had stood for over half a century.
- **Sources:** [DeepMind blog](https://deepmind.google/discover/blog/discovering-novel-algorithms-with-alphatensor/) · [Nature paper](https://www.nature.com/articles/s41586-022-05172-4)

### AlphaEvolve — 48 multiplications, breaking Strassen again

- **What happened:** AlphaEvolve, a Gemini-powered evolutionary coding agent, found a way to multiply 4×4 **complex-valued** matrices using only **48 scalar multiplications**, beating Strassen's 49 for this case for the first time since 1969. It also improved bounds on open problems like the kissing number and recovered or surpassed state-of-the-art results across ~50 math problems it was tested on.
- **When:** May 2025.
- **Why it's a big deal:** A general-purpose discovery engine that improves real algorithms and open math bounds — and was even used internally to recover data-center compute at Google.
- **Sources:** [DeepMind blog](https://deepmind.google/discover/blog/alphaevolve-a-gemini-powered-coding-agent-for-designing-advanced-algorithms/) · [IEEE Spectrum](https://spectrum.ieee.org/deepmind-alphaevolve)
