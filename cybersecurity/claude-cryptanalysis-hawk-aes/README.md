# Claude found new attacks on HAWK and reduced-round AES, and HAWK was withdrawn from NIST

**Field:** 🛡️ Cybersecurity  ·  **When:** July 2026

> Claude Mythos Preview found a lattice automorphism that halves the hard problem behind HAWK, a NIST post-quantum signature candidate. Its authors withdrew it from standardization. No deployed cryptography is affected.

**Read this first:** nothing you use was broken. HAWK was a *candidate*, never deployed. The AES result attacks a deliberately weakened 7-round research variant, not the 10-round AES protecting real traffic, and it needs 2^105 chosen plaintexts. Anthropic's own words: "neither of these results has a practical impact on today's computer systems; no production software will have to change as a result."

## What happened
On **July 28, 2026**, Anthropic published results from running **Claude Mythos Preview** at open problems in cryptanalysis. Two findings stood out.

**HAWK.** HAWK is a lattice-based signature scheme that was a round-3 candidate in NIST's call for Additional Digital Signatures, and it had survived roughly two years of expert review. Mythos found a **nontrivial order-2 Galois automorphism** in the power-of-two cyclotomic field HAWK uses (the map sending a root of unity to its negative) and used it to build a "cocycle lattice" whose shortest vector is the cocycle V_tau = B^-1 tau(B), one descent step short of the secret basis transformation. The result is a deterministic polynomial-time reduction of HAWK-*n* key recovery to an exact-SVP oracle in dimension **n/2 + 1**, roughly halving the effective key size:

| Parameter set | Prior estimated cost | After |
|---|---|---|
| HAWK-256 (small) | 2^64 | **2^38** (key actually recovered, ~3h42m measured end to end on a 96-core server) |
| HAWK-512 | 2^150 | 2^108 |
| HAWK-1024 | 2^288 | 2^182 |

HAWK-512 and HAWK-1024 remain far out of reach. But restoring the intended margin means doubling key sizes, which erases HAWK's main selling point. Anthropic's Steve Weis posted the result to the NIST **pqc-forum** the same day; cryptographer Daniel Apon replied within hours, "It checks out independently for me." The submission team then **withdrew HAWK** from the standardization process, and NIST's round-3 page now lists it as withdrawn.

Finding, developing and verifying the attack took about **60 hours** in total and roughly **$100,000** in API cost, with the human researcher acting more as project manager than technical guide.

**Reduced-round AES.** Separately, Mythos worked autonomously for about a week (roughly a billion output tokens, again about $100,000) on **7-round AES-128**, a standard academic target that had not improved since 2013. Three days in, it invented an invariant fingerprint it named the **"Möbius Bridge"**, exploiting the invert-then-affine-transform structure of the AES S-box to eliminate one of the nine key bytes prior meet-in-the-middle attacks had to guess, a factor-256 reduction in guessing work. Time complexity drops from about 2^99 to between 2^89.3 and 2^91.4 depending on how operations are counted, i.e. **200x to 800x faster**. The data requirement is unchanged and absurd: **2^105 chosen plaintexts**, about 4 x 10^31 messages. Verifying it took human researchers several hundred hours.

Both papers, a chain-of-thought transcript for the AES discovery, and reproducible demo code were published. Anthropic also released **CryptanalysisBench** with academics at ETH Zurich, Tel Aviv University, and TU Berlin: 191 tasks across six cryptographic primitive families drawn from NIST competitions.

## Why it matters
This appears to be the first time an AI-originated cryptanalytic result has changed the outcome of a NIST standardization process. HAWK had been examined by human experts for two years; prior human work (van Gent and Pulles, 2025) had even pointed out that *a* suitable nontrivial automorphism would cut the rank in half, but nobody had found one. Mythos found it inside about 60 hours of total effort, and the crypto community verified it in hours.

It also sets a template for how to publish this kind of claim: the primary source states plainly that nothing deployed is affected, ships the papers and runnable code, and discloses to NIST first. That matters, because the failure mode here is not the cryptography. It is the headline.

## Sources — the record of the discovery
- [Anthropic — Discovering cryptographic weaknesses with Claude](https://www.anthropic.com/research/discovering-cryptographic-weaknesses)
- [Paper: HAWK-n Key Recovery Reduces to SVP in Dimension n/2 + 1 (PDF)](https://anthropic.com/document/hawk_key_recovery.pdf)
- [Paper: the AES Möbius Bridge (PDF)](https://anthropic.com/document/aes_mobius_bridge.pdf)
- [NIST pqc-forum thread and independent verification](https://groups.google.com/a/list.nist.gov/g/pqc-forum/c/2r2u6SbHun4)
- [NIST — Round 3 Additional Signatures (HAWK listed as withdrawn)](https://csrc.nist.gov/projects/pqc-dig-sig/round-3-additional-signatures)
- [CryptanalysisBench: Can LLMs do Cryptanalysis? (arXiv)](https://arxiv.org/abs/2607.18538)
- [Demonstration code (GitHub)](https://github.com/anthropics/cryptography-research-demo)
- [The Hacker News](https://thehackernews.com/2026/07/claude-ai-just-cracked-post-quantum.html) · [CyberScoop](https://cyberscoop.com/anthropic-claude-mythos-encryption-flaws-hawk-aes-pqc/) · [Simon Willison](https://simonwillison.net/2026/Jul/28/)

---
*In this folder: **[PROMPT.md](./PROMPT.md)** (a prompt to explore it with AI) · **[CONTEXT.md](./CONTEXT.md)** (background & caveats). Part of the [AI Hall of Fame](../../README.md) → [🛡️ Cybersecurity](../).*
