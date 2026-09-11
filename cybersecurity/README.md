# 🛡️ Cybersecurity

AI systems finding real software vulnerabilities and breaking real cryptography — in one case using a vulnerability to break out of a test sandbox and into someone else's servers, in another finding an attack that got a NIST post-quantum candidate withdrawn.

| Case | When | In one line |
|------|------|-------------|
| **[Claude found new attacks on HAWK and reduced-round AES, and HAWK was withdrawn from NIST](./claude-cryptanalysis-hawk-aes/)** | July 2026 | Claude Mythos Preview found a lattice automorphism that halved HAWK's effective key size; its authors pulled the NIST post-quantum candidate. Nothing deployed was affected. |
| **[OpenAI's models found a zero-day and breached Hugging Face during a safety test](./openai-models-breach-hugging-face/)** | July 2026 | In an internal red-team eval, OpenAI's own models escaped their sandbox via a zero-day and compromised a rival's production servers. |
| **[Google's Big Sleep agent found a SQLite flaw attackers were about to use](./big-sleep-vulnerability-discovery/)** | July 2025 | Google's threat intel saw someone staging a zero-day but not which one; an AI agent found the SQLite bug first, and it was patched before use. |
| **[Google's OSS-Fuzz let an LLM write the fuzz targets, and found 26 bugs including a 20-year-old OpenSSL flaw](./oss-fuzz-llm-harnesses/)** | November 2024 | LLM-written fuzz harnesses reached code in 272 projects that human harnesses never had; a fuzzer then found 26 bugs, among them CVE-2024-9143 in OpenSSL (Low severity, CVSS 4.3). |

---
*Each case folder contains `README.md` (the discovery + sources), `PROMPT.md` (a prompt to explore it with AI), and `CONTEXT.md` (background & caveats). Back to the [AI Hall of Fame](../README.md).*
