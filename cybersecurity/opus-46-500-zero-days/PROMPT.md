# 🤖 Explore this with AI: Claude Opus 4.6 and the 500 zero-days

Paste the prompt below into your favorite AI assistant (Claude, ChatGPT, Gemini, or a local model). If your assistant can browse the web, tell it to read the sources first. The point is a clear, honest, grounded explanation of what happened and why it mattered.

> Anthropic gave a general-purpose model a virtual machine with ordinary tools, pointed it at well-fuzzed open-source projects, and reported more than 500 validated high-severity zero-days. No CVE list was published, and the count rests on Anthropic's own triage.

---

```text
You are a sharp, honest security explainer. Walk me through a specific, real AI security result so that I actually understand it, not just the headline.

Topic: Anthropic's Frontier Red Team report of February 5, 2026, stating that Claude Opus 4.6 found and validated more than 500 high-severity zero-day vulnerabilities in open-source software (GhostScript, OpenSC, CGIF, and others) with no custom scaffolding.

Please cover, in plain language a curious non-expert can follow:
1. What "no scaffolding" meant here: a virtual machine, standard utilities, off-the-shelf analysis tools, and (per Nicholas Carlini) roughly a ten-line shell script plus a Docker container. Contrast that with purpose-built systems like Google's Big Sleep or DARPA's AIxCC finalists.
2. Why the team focused on memory-corruption bugs and validated them with Address Sanitizer builds. Explain what a sanitizer crash proves and what it does not prove (severity, reachability, exploitability).
3. The validation pipeline: reproduce with sanitizers, have the model critique and de-duplicate its own findings, then human researchers confirm each bug and initially write the patches. Explain why "every bug validated" and "no published false-positive rate" can both be true.
4. Why this matters: the claim that discovery is no longer the bottleneck, Anthropic's own suggestion that 90-day disclosure windows may not hold up, and the counterargument that triage and patch deployment were always the real constraint.
5. The honest caveats. Be rigorous:
   - The 500 figure is vendor-reported with no CVE list or severity distribution.
   - "High severity" is Anthropic's own rating.
   - Memory-corruption focus makes the count easier to reach and underrepresents other bug classes.
   - Finding is not exploiting: Opus 4.6 turned Firefox JS-engine bugs into working exploits in only two of several hundred attempts.
   - Coverage was incomplete by the lead author's own account (5 to 10 runs per codebase).
   - The patching burden lands on maintainers, and Carlini's own estimate that Firefox engineers spent about twice the discovery time on fixes.
6. How this report was later used as the baseline for Anthropic's Mythos Preview assessment, and what that comparison showed.

Ground your answer in these sources (read them if you can, and cite them as you go):
- Anthropic's report: https://www.anthropic.com/research/zero-days
- Nicholas Carlini on Security Cryptography Whatever (March 25, 2026): https://securitycryptographywhatever.com/2026/03/25/ai-bug-finding/
- Anthropic's Mythos Preview assessment (Opus 4.6 baseline numbers): https://www.anthropic.com/research/mythos-preview
- Futurum analysis of the patching bottleneck: https://futurumgroup.com/insights/claude-found-500-zero-days-who-patches-them-before-attackers-arrive/

Be concrete, distinguish what Anthropic claims from what can be independently checked, and if you are unsure about a detail, say so instead of guessing.
```

## Bonus: have the agent check what is actually public

There is no CVE list, so the checkable object is the report itself and the named projects' own records. Have a capable assistant do the legwork:

```
Read https://www.anthropic.com/research/zero-days and list every concrete, checkable claim it makes: the number of vulnerabilities, the projects named, the validation steps, the disclosure status, and the authors. Then, for GhostScript, OpenSC, and CGIF, look at each project's public security advisories, release notes, or issue tracker for fixes landed between February and June 2026 and note any that credit Anthropic, Claude, or the named authors. Report what you could confirm, what you could not, and whether the public record so far is consistent with "500+ high-severity" or only with "a meaningful number of real bugs." Do not describe how to trigger any of the bugs.
```

---

## Sources
- [Anthropic Frontier Red Team — LLM-discovered zero-days](https://www.anthropic.com/research/zero-days)
- [Security Cryptography Whatever — "AI Finds Vulns You Can't" with Nicholas Carlini](https://securitycryptographywhatever.com/2026/03/25/ai-bug-finding/)
- [Anthropic — Claude Mythos Preview assessment](https://www.anthropic.com/research/mythos-preview)
- [Futurum — Claude found 500 zero-days. Who patches them before attackers arrive?](https://futurumgroup.com/insights/claude-found-500-zero-days-who-patches-them-before-attackers-arrive/)

---
*Back to **[README.md](./README.md)** · **[CONTEXT.md](./CONTEXT.md)**.*
