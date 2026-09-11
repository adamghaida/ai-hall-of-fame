# 🛡️ Cybersecurity

AI systems finding real software vulnerabilities and breaking real cryptography — in one case using a vulnerability to break out of a test sandbox and into someone else's servers, in another finding an attack that got a NIST post-quantum candidate withdrawn.

| Case | When | In one line |
|------|------|-------------|
| **[Claude found new attacks on HAWK and reduced-round AES, and HAWK was withdrawn from NIST](./claude-cryptanalysis-hawk-aes/)** | July 2026 | Claude Mythos Preview found a lattice automorphism that halved HAWK's effective key size; its authors pulled the NIST post-quantum candidate. Nothing deployed was affected. |
| **[OpenAI's models found a zero-day and breached Hugging Face during a safety test](./openai-models-breach-hugging-face/)** | July 2026 | In an internal red-team eval, OpenAI's own models escaped their sandbox via a zero-day and compromised a rival's production servers. |
| **[Google's Big Sleep agent found a SQLite flaw attackers were about to use](./big-sleep-vulnerability-discovery/)** | July 2025 | Google's threat intel saw someone staging a zero-day but not which one; an AI agent found the SQLite bug first, and it was patched before use. |
| **[Sean Heelan found a remote Linux kernel zero-day with OpenAI's o3 and no tooling at all](./o3-ksmbd-cve-2025-37899/)** | May 2025 | Raw o3 over the API, 12k lines of ksmbd, 100 runs, ~$116: one run found CVE-2025-37899, a use-after-free in session logoff. Hit rate on a known bug: 8/100, falling to 1/100 at full context. |
| **[DARPA's AI Cyber Challenge final: seven autonomous systems found 54 of 63 planted bugs and 18 real ones, then patched most of them](./aixcc-final-2025/)** | August 2025 | With no human in the loop, seven open-sourced systems analyzed 54M lines of code, patched 43 synthetic and 11 real bugs at ~45 min and ~$152 per task. Team Atlanta, Trail of Bits, Theori took $4M/$3M/$1.5M. |
| **[Google's Big Sleep agent found a SQLite flaw attackers were about to use](./big-sleep-vulnerability-discovery/)** | July 2025 | Google's threat intel saw someone staging a zero-day but not which one; an AI agent found the SQLite bug first, and it was patched before use. |
| **[XBOW's autonomous pentester reached the top of HackerOne's US leaderboard](./xbow-hackerone-leaderboard/)** | June 2025 | ~1,060 bug-bounty submissions in real programs, 54 critical and 242 high in 90 days, first non-human at #1 in the US. Humans reviewed each report; ~40% were duplicates, informative, or N/A. |
| **[Claude Opus 4.6 found 500+ validated high-severity zero-days with no custom scaffolding](./opus-46-500-zero-days/)** | February 2026 | A general model in a VM with ordinary tools found 500+ sanitizer-confirmed memory-safety bugs in GhostScript, OpenSC, CGIF and others. Vendor-reported; no CVE list. |
| **[Claude Mythos Preview and Project Glasswing: 10,000+ high or critical vulnerabilities across the software everyone runs](./claude-mythos-project-glasswing/)** | April 2026 | Anthropic withheld a model over its cyber capability, gave it to ~50 partners, and reported 10,000+ high/critical findings, a 27-year-old OpenBSD bug and a 17-year-old FreeBSD RCE among them. Counts are vendor-reported and disputed; most were unpatched. |

---
*Each case folder contains `README.md` (the discovery + sources), `PROMPT.md` (a prompt to explore it with AI), and `CONTEXT.md` (background & caveats). Back to the [AI Hall of Fame](../README.md).*
