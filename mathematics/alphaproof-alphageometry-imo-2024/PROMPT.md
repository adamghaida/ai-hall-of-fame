# 🛠️ How to recreate: AlphaProof & AlphaGeometry 2 — silver-medal math at the IMO

*This file is a practical starting point for reproducing or exploring the result — code, data, models, and (where one exists) the actual prompt or method. It is not official documentation; always defer to the primary sources.*

Not fully reproducible from open weights — AlphaProof is unreleased. But the pipeline is public in outline: (1) auto-formalize natural-language problems into **Lean** statements with a fine-tuned Gemini; (2) search for a proof term with an AlphaZero-style prover that is rewarded only when Lean type-checks the proof; (3) train on millions of self-generated formal problems. To experiment yourself, install **Lean 4 + Mathlib**, take a past IMO problem, formalize it, and try to close the goal — the same verification standard the AI met.

The 2024 IMO problems (public): https://www.imo-official.org/problems.aspx

## Primary sources & code
- [DeepMind blog](https://deepmind.google/discover/blog/ai-solves-imo-problems-at-silver-medal-level/)
- [Nature paper (2025)](https://www.nature.com/articles/s41586-025-09833-y)

---
*Back to **[README.md](./README.md)** · **[CONTEXT.md](./CONTEXT.md)**.*
