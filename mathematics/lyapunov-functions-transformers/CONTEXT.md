# 📚 Context: Symbolic transformers find Lyapunov functions

Like AlphaTensor and FunSearch, this exploits a 'generate-then-verify' asymmetry: proposing a Lyapunov function is hard, but checking one is easy. It's also a clean rebuttal to the claim that transformers only interpolate — here they produce certificates for systems outside their training distribution.

## Why it's in the Hall of Fame
Finding a Lyapunov function is a long-standing open problem with no general algorithm; a learned model that proposes them (each easily checked) is a real tool for control theory and mathematics.

## Sources
- [arXiv paper](https://arxiv.org/abs/2410.08304)

---
*Back to **[README.md](./README.md)** · **[PROMPT.md](./PROMPT.md)**.*
