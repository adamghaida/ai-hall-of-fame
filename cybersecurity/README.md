# 🛡️ Cybersecurity

AI systems finding real software vulnerabilities and breaking real cryptography — in one case using a vulnerability to break out of a test sandbox and into someone else's servers, in another finding an attack that got a NIST post-quantum candidate withdrawn.

| Case | When | In one line |
|------|------|-------------|
| **[Claude found new attacks on HAWK and reduced-round AES, and HAWK was withdrawn from NIST](./claude-cryptanalysis-hawk-aes/)** | July 2026 | Claude Mythos Preview found a lattice automorphism that halved HAWK's effective key size; its authors pulled the NIST post-quantum candidate. Nothing deployed was affected. |
| **[OpenAI's models found a zero-day and breached Hugging Face during a safety test](./openai-models-breach-hugging-face/)** | July 2026 | In an internal red-team eval, OpenAI's own models escaped their sandbox via a zero-day and compromised a rival's production servers. |
| **[Google's Big Sleep agent found a SQLite flaw attackers were about to use](./big-sleep-vulnerability-discovery/)** | July 2025 | Google's threat intel saw someone staging a zero-day but not which one; an AI agent found the SQLite bug first, and it was patched before use. |
| **[Sean Heelan found a remote Linux kernel zero-day with OpenAI's o3 and no tooling at all](./o3-ksmbd-cve-2025-37899/)** | May 2025 | Raw o3 over the API, 12k lines of ksmbd, 100 runs, ~$116: one run found CVE-2025-37899, a use-after-free in session logoff. Hit rate on a known bug: 8/100, falling to 1/100 at full context. |

---
*Each case folder contains `README.md` (the discovery + sources), `PROMPT.md` (a prompt to explore it with AI), and `CONTEXT.md` (background & caveats). Back to the [AI Hall of Fame](../README.md).*
