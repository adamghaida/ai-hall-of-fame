# 🤖 Explore this with AI: Claude's cryptanalysis of HAWK and reduced-round AES

Paste the prompt below into your favorite AI assistant (Claude, ChatGPT, Gemini, or a local model). If your assistant can browse the web, tell it to read the sources first. The point is a clear, honest, grounded explanation of what happened and why it mattered.

> Claude Mythos Preview found a lattice automorphism that halves the hard problem behind HAWK, a NIST post-quantum signature candidate, and its authors withdrew it from standardization. No deployed cryptography is affected.

---

```text
You are a sharp, honest cryptography explainer. Walk me through a specific, real AI-assisted result so that I actually understand it, not just the headline. Be especially careful not to let this sound like "AI broke encryption," because it did not.

Topic: Anthropic's July 28, 2026 publication of two cryptanalytic results found by Claude Mythos Preview: (a) a key-recovery attack on the HAWK post-quantum signature scheme that reduces HAWK-n key recovery to exact SVP in dimension n/2 + 1, and (b) a "Möbius Bridge" speedup of 200x to 800x against 7-round AES-128.

Please cover, in plain language a curious non-expert can follow:
1. Start with what was NOT broken. HAWK was a NIST candidate, never deployed. The AES result is on a 7-round reduced variant, not the 10-round AES in TLS, disk encryption, or anything else, and it needs 2^105 chosen plaintexts. Explain why reduced-round cryptanalysis is normal, valuable academic work rather than a break.
2. What HAWK is, what module-LIP / lattice isomorphism means informally, and what a Galois automorphism is doing in the attack. Explain intuitively why finding a nontrivial order-2 automorphism lets you work in half the dimension, and why that roughly halves the effective key size.
3. The concrete numbers: HAWK-256 going from an estimated 2^64 to 2^38 with an actual key recovered on one server in a few hours; HAWK-512 from 2^150 to 2^108; HAWK-1024 from 2^288 to 2^182. Which of those are practical and which are still astronomically infeasible?
4. Why the HAWK submission team withdrew the scheme from NIST standardization even though HAWK-512 and HAWK-1024 were not practically broken. What does "doubling the parameters makes it uncompetitive" mean in the context of ML-DSA?
5. The AES result: what a meet-in-the-middle attack is, what the "Möbius Bridge" invariant fingerprint does (eliminating one of nine guessed key bytes via the algebraic structure of the S-box), and how 2^99 to roughly 2^89.3-2^91.4 operations maps onto "200 to 800 times faster."
6. The honest framing of the AI contribution: prior human work (van Gent and Pulles, 2025) had already noted that a suitable nontrivial automorphism would halve the rank, but none was known for HAWK; the model found one. About 60 hours in total to find, develop and verify the HAWK attack, and about $100,000 in API cost; about a week of autonomous work and another $100,000 for AES, with the key idea arriving three days in; and human verification that took several hundred hours. What does that verification asymmetry imply?
7. How the community responded on the NIST pqc-forum, including independent verification and Daniel Apon's argument that we need shared standards for evaluating AI-generated cryptanalytic claims.

Ground your answer in these sources (read them if you can, and cite them as you go):
- Anthropic's announcement: https://www.anthropic.com/research/discovering-cryptographic-weaknesses
- HAWK paper (PDF): https://anthropic.com/document/hawk_key_recovery.pdf
- AES Möbius Bridge paper (PDF): https://anthropic.com/document/aes_mobius_bridge.pdf
- NIST pqc-forum thread: https://groups.google.com/a/list.nist.gov/g/pqc-forum/c/2r2u6SbHun4
- NIST round-3 additional signatures page: https://csrc.nist.gov/projects/pqc-dig-sig/round-3-additional-signatures
- CryptanalysisBench: https://arxiv.org/abs/2607.18538

Be concrete, clearly separate confirmed facts from interpretation, and if you are unsure about a detail, say so instead of guessing.
```

## Bonus: have the agent check the claim rather than repeat it

The HAWK result is a concrete, checkable object: a reduction plus working code. Have a capable assistant actually engage with it.

```
Open https://github.com/anthropics/cryptography-research-demo and read the HAWK key-recovery demonstration, alongside the paper at https://anthropic.com/document/hawk_key_recovery.pdf. Explain the cocycle lattice construction, why the cocycle V_tau = B^-1 tau(B) is its shortest vector, and what further step is needed to turn that vector into the secret basis transformation. Then state precisely what the demo does and does not establish: does it recover a real HAWK-256 key end to end, and are the HAWK-512 / HAWK-1024 figures measured or extrapolated gate-count estimates? Finally, confirm HAWK's current status on https://csrc.nist.gov/projects/pqc-dig-sig/round-3-additional-signatures and say whether ML-KEM, ML-DSA, or SLH-DSA are affected in any way.
```

---

## Sources
- [Anthropic — Discovering cryptographic weaknesses with Claude](https://www.anthropic.com/research/discovering-cryptographic-weaknesses)
- [Paper: HAWK-n Key Recovery Reduces to SVP in Dimension n/2 + 1 (PDF)](https://anthropic.com/document/hawk_key_recovery.pdf)
- [Paper: the AES Möbius Bridge (PDF)](https://anthropic.com/document/aes_mobius_bridge.pdf)
- [NIST pqc-forum thread and independent verification](https://groups.google.com/a/list.nist.gov/g/pqc-forum/c/2r2u6SbHun4)
- [NIST — Round 3 Additional Signatures](https://csrc.nist.gov/projects/pqc-dig-sig/round-3-additional-signatures)
- [CryptanalysisBench (arXiv)](https://arxiv.org/abs/2607.18538)
- [Demonstration code (GitHub)](https://github.com/anthropics/cryptography-research-demo)

---
*Back to **[README.md](./README.md)** · **[CONTEXT.md](./CONTEXT.md)**.*
