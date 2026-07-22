# 📚 Context: disproving the Dinitz–Garg–Goemans conjecture

**The problem.** In *single-source unsplittable flow*, several commodities must all be routed from one source to their destinations, and each commodity's whole demand has to follow a **single path** (no splitting). A classic 1999 result by Yefim Dinitz, Naveen Garg, and Michel Goemans shows you can always convert a fractional (splittable) flow into an unsplittable one while overloading any arc by less than the largest single demand. That rounding theorem is a cornerstone of combinatorial optimization.

**The conjecture that fell.** Goemans asked whether the same rounding can be done *for free in cost*: given arbitrary costs on the arcs, can you always find an unsplittable flow with the bounded capacity violation **and** total cost no more than the original fractional flow's cost? This cost-preserving strengthening (often bundled under the "Dinitz–Garg–Goemans conjecture" name) had resisted proof or disproof for decades, with essentially no non-trivial graph classes where it was known to hold. Rybin's graph answers it: fractional cost 58, but any admissible unsplittable flow costs ≥ 60.

**The AI's role.** The counterexample was found in a chat with GPT-5.6 Pro, which Rybin shared. As with the Jacobian result, a human mathematician framed the problem and vouches for the object; the model did the heavy lifting of search and construction inside the conversation.

## Why it's in the Hall of Fame
It is a second fresh case, within days of the Jacobian conjecture, of a frontier language model helping settle a long-open mathematical conjecture, and the outcome is a small, verifiable object rather than an opaque proof.

## Honest caveats
- **Very new and not yet vetted.** This was announced on July 22, 2026 via a tweet plus a shared model chat, not a peer-reviewed paper or even an arXiv preprint yet. Independent verification is still pending; treat it as a strong claim awaiting the usual checks.
- **Only the cost strengthening falls.** The original 1999 DGG capacity theorem still stands. What is disproved is the conjectured cost-preserving version (Goemans' conjecture).
- **"With GPT-5.6 Pro" is doing real work here.** How much was model versus human is hard to apportion from a shared chat; the honest framing is human-plus-AI collaboration, with the human responsible for the final claim.
- **Verifiable in principle.** The counterexample is a concrete finite graph with explicit flow values, so it can be checked by solving the relevant flow programs, which is what any confirmation should do.

## Sources
- [Dmitry Rybin's announcement (X)](https://x.com/DmitryRybin1/status/2079904005652893709)
- [The GPT-5.6 Pro chat where the counterexample was found](https://chatgpt.com/share/6a60b2eb-0b64-83ee-9c76-7931ca1de063)
- [Dinitz, Garg & Goemans, "On the single-source unsplittable flow problem" (Combinatorica, 1999)](https://link.springer.com/article/10.1007/s004930050043)
- [Digg — coverage](https://digg.com/tech/yg49xzrx)

---
*Back to **[README.md](./README.md)** · **[PROMPT.md](./PROMPT.md)**.*
