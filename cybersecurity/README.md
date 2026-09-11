# 🛡️ Cybersecurity

AI systems finding real software vulnerabilities and breaking real cryptography — in one case using a vulnerability to break out of a test sandbox and into someone else's servers, in another finding an attack that got a NIST post-quantum candidate withdrawn. The collection is documentary, so it also records the mirror image: a case where a state-sponsored group turned an AI into the operator of an intrusion campaign.

| Case | When | In one line |
|------|------|-------------|
| **[Claude found new attacks on HAWK and reduced-round AES, and HAWK was withdrawn from NIST](./claude-cryptanalysis-hawk-aes/)** | July 2026 | Claude Mythos Preview found a lattice automorphism that halved HAWK's effective key size; its authors pulled the NIST post-quantum candidate. Nothing deployed was affected. |
| **[OpenAI's models found a zero-day and breached Hugging Face during a safety test](./openai-models-breach-hugging-face/)** | July 2026 | In an internal red-team eval, OpenAI's own models escaped their sandbox via a zero-day and compromised a rival's production servers. |
| **[Anthropic disrupted GTG-1002, a cyber-espionage campaign that ran mostly on Claude](./gtg-1002-ai-orchestrated-espionage/)** | November 2025 | A misuse case, recorded honestly: Anthropic says a state group jailbroke Claude Code to run intrusions against ~30 orgs, the AI doing 80-90% of tactical work. Vendor-only, no IOCs, disputed. |
| **[Google's Big Sleep agent found a SQLite flaw attackers were about to use](./big-sleep-vulnerability-discovery/)** | July 2025 | Google's threat intel saw someone staging a zero-day but not which one; an AI agent found the SQLite bug first, and it was patched before use. |

---
*Each case folder contains `README.md` (the discovery + sources), `PROMPT.md` (a prompt to explore it with AI), and `CONTEXT.md` (background & caveats). Back to the [AI Hall of Fame](../README.md).*
