# 🤖 Explore this with AI: Claude Mythos Preview and Project Glasswing

Paste the prompt below into your favorite AI assistant (Claude, ChatGPT, Gemini, or a local model). If your assistant can browse the web, tell it to read the sources first. The point is a clear, honest, grounded explanation of what happened and why it mattered.

> Anthropic withheld a model from general release because of what it could do to software, gave it to about 50 organizations instead, and six weeks later reported over 10,000 high- or critical-severity vulnerabilities across their code. Most were unpatched when the numbers went out, and several researchers dispute what the numbers mean.

---

```text
You are a sharp, honest security explainer. Walk me through a specific, real AI security result so that I actually understand it, not just the headline. Treat vendor claims and independent checks as different kinds of evidence and keep them separate.

Topic: Anthropic's April 7, 2026 assessment of Claude Mythos Preview, the launch of Project Glasswing, and the May 22, 2026 update reporting over 10,000 high- or critical-severity vulnerabilities found across about 50 partner organizations.

Please cover, in plain language a curious non-expert can follow:
1. What Anthropic actually claimed on April 7: zero-days in every major OS and browser, the OSS-Fuzz comparison against Opus 4.6 (595 low-tier crashes and ten full control-flow hijacks versus one tier-3 result), the 198 manually reviewed reports (89% exact severity match, 98% within one level), and the fact that over 99% of findings were unpatched at announcement.
2. The two headline bugs, at the level of bug class only: the 27-year-old OpenBSD TCP SACK signed integer overflow (OpenBSD 7.8 errata patch 025, March 25, 2026) and the 17-year-old FreeBSD RPCSEC_GSS stack overflow CVE-2026-4747 (FreeBSD-SA-26:08, credited to "Nicholas Carlini using Claude, Anthropic"). Explain what a SACK option is and why a signed overflow there can crash a kernel, and why an unchecked copy into a fixed stack buffer can lead to remote code execution. Do not describe exploitation steps.
3. What Project Glasswing is: the twelve launch partners, the 40+ additional organizations, the $100M in credits and $4M in donations, the 90-day reporting pledge, and why a lab would route a model through a consortium instead of releasing it.
4. Mozilla's contribution: 271 previously unknown Firefox bugs fixed in Firefox 150 (180 sec-high, 80 sec-moderate, 11 sec-low), how the harness confirmed each hypothesis by building and running a test case, and CTO Bobby Holley's remark that none of the bugs were beyond an elite human researcher.
5. The May 22 update: over 10,000 high or critical findings across ~50 partners; 23,019 findings across 1,000+ open-source projects with 6,202 estimated high or critical; six independent firms validating 90.6% of a 1,752-finding sample as true positives (62.4% confirmed high or critical); 530 disclosed to maintainers, 75 patched, 65 public advisories. Say clearly which of these numbers are self-reported by partners and which were independently sampled.
6. The disputes, in detail:
   - Critics (collected by The Register on April 22) arguing there is no CVE list, that the "thousands" figure extrapolates from 198 reviewed reports, that Firefox exploit runs used a security-reduced build, and that the FreeBSD exploit shows substantial human guidance.
   - The reading that Opus 4.6 found the Firefox bugs before Mythos exploited them, and that Mythos's 72.4% exploit success rate falls under 5% if two now-patched bugs are removed.
   - AISLE's same-day replication in which all eight tested models, including a 3.6B-active-parameter open model at $0.11 per million tokens, found the FreeBSD overflow when handed the vulnerable function, and AISLE's own caveat that this is an upper bound, not an autonomous scan.
7. What is genuinely new here versus earlier results like Google's Big Sleep or Anthropic's own 500-zero-day Opus 4.6 report, and what remains unproven until the disclosure windows close.

Ground your answer in these sources (read them if you can, and cite them as you go):
- Anthropic's Mythos Preview assessment: https://www.anthropic.com/research/mythos-preview
- Project Glasswing: https://www.anthropic.com/glasswing
- Glasswing initial update (May 22, 2026): https://www.anthropic.com/research/glasswing-initial-update
- OpenBSD 7.8 errata: https://www.openbsd.org/errata78.html
- FreeBSD-SA-26:08: https://www.freebsd.org/security/advisories/FreeBSD-SA-26:08.rpcsec_gss.asc
- Mozilla Hacks on Firefox hardening: https://hacks.mozilla.org/2026/05/behind-the-scenes-hardening-firefox/
- AISLE, "The Jagged Frontier": https://aisle.com/blog/ai-cybersecurity-after-mythos-the-jagged-frontier
- The Register's critical roundup: https://www.theregister.com/security/2026/04/22/anthropic-mythos-shaping-up-as-nothingburger/5225649

Be concrete, use the real numbers, distinguish what vendors claim from what outsiders verified, and if you are unsure about a detail, say so instead of guessing.
```

## Bonus: have the agent check the public record

The two BSD fixes are concrete, checkable artifacts. Have a capable assistant look at them rather than paraphrase the announcement:

```
Open https://www.openbsd.org/errata78.html and find patch 025. Report its date, its exact one-line description, and whether it mentions Anthropic or Claude anywhere (it should not; the attribution is Anthropic's). Then open https://www.freebsd.org/security/advisories/FreeBSD-SA-26:08.rpcsec_gss.asc and report the CVE, the announced date, the affected branches, the credits line, and the advisory's own statement of impact. Finally, open https://www.anthropic.com/research/glasswing-initial-update and extract every number it gives for: partners, total high/critical findings, open-source projects scanned, findings sampled by independent firms, the true-positive rate, bugs disclosed to maintainers, bugs patched, and public advisories. Mark each number as "vendor-reported" or "independently sampled" and flag anything you cannot verify from these three pages.
```

---

## Sources
- [Anthropic — Claude Mythos Preview cybersecurity assessment](https://www.anthropic.com/research/mythos-preview)
- [Anthropic — Project Glasswing](https://www.anthropic.com/glasswing)
- [Anthropic — Project Glasswing: initial update](https://www.anthropic.com/research/glasswing-initial-update)
- [OpenBSD 7.8 errata](https://www.openbsd.org/errata78.html)
- [FreeBSD-SA-26:08.rpcsec_gss](https://www.freebsd.org/security/advisories/FreeBSD-SA-26:08.rpcsec_gss.asc)
- [Mozilla Hacks — Behind the scenes hardening Firefox](https://hacks.mozilla.org/2026/05/behind-the-scenes-hardening-firefox/)
- [AISLE — The Jagged Frontier](https://aisle.com/blog/ai-cybersecurity-after-mythos-the-jagged-frontier)
- [The Register — Anthropic Mythos shaping up as nothingburger](https://www.theregister.com/security/2026/04/22/anthropic-mythos-shaping-up-as-nothingburger/5225649)

---
*Back to **[README.md](./README.md)** · **[CONTEXT.md](./CONTEXT.md)**.*
