# 🛡️ Cybersecurity

AI systems finding real software vulnerabilities and breaking real cryptography — in one case using a vulnerability to break out of a test sandbox and into someone else's servers, in another finding an attack that got a NIST post-quantum candidate withdrawn.

| Case | When | In one line |
|------|------|-------------|
| **[Claude found new attacks on HAWK and reduced-round AES, and HAWK was withdrawn from NIST](./claude-cryptanalysis-hawk-aes/)** | July 2026 | Claude Mythos Preview found a lattice automorphism that halved HAWK's effective key size; its authors pulled the NIST post-quantum candidate. Nothing deployed was affected. |
| **[OpenAI's models found a zero-day and breached Hugging Face during a safety test](./openai-models-breach-hugging-face/)** | July 2026 | In an internal red-team eval, OpenAI's own models escaped their sandbox via a zero-day and compromised a rival's production servers. |
| **[Google's Big Sleep agent found a SQLite flaw attackers were about to use](./big-sleep-vulnerability-discovery/)** | July 2025 | Google's threat intel saw someone staging a zero-day but not which one; an AI agent found the SQLite bug first, and it was patched before use. |
| **[XBOW's autonomous pentester reached the top of HackerOne's US leaderboard](./xbow-hackerone-leaderboard/)** | June 2025 | ~1,060 bug-bounty submissions in real programs, 54 critical and 242 high in 90 days, first non-human at #1 in the US. Humans reviewed each report; ~40% were duplicates, informative, or N/A. |

---
*Each case folder contains `README.md` (the discovery + sources), `PROMPT.md` (a prompt to explore it with AI), and `CONTEXT.md` (background & caveats). Back to the [AI Hall of Fame](../README.md).*
