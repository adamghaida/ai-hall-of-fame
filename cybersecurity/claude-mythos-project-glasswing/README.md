# Claude Mythos Preview and Project Glasswing: 10,000+ high or critical vulnerabilities across the software everyone runs

**Field:** 🛡️ Cybersecurity  ·  **When:** April 2026

> Anthropic held back a model from general release because of what it could do to software, gave it to about 50 organizations instead, and six weeks later reported more than 10,000 high- or critical-severity vulnerabilities found across their code, including a 27-year-old OpenBSD kernel bug and a 17-year-old FreeBSD remote code execution flaw. Most were still unpatched when the numbers were published, and several researchers dispute what the numbers mean.

## What happened
On **April 7, 2026**, Anthropic published a cybersecurity assessment of **Claude Mythos Preview**, an unreleased model it said had found zero-day vulnerabilities in "every major operating system and every major web browser." Rather than ship it, Anthropic launched **Project Glasswing**: limited access for twelve launch partners (Amazon Web Services, Anthropic, Apple, Broadcom, Cisco, CrowdStrike, Google, JPMorganChase, the Linux Foundation, Microsoft, NVIDIA, and Palo Alto Networks) plus more than 40 further organizations that build or maintain critical software, backed by **$100M** in usage credits and **$4M** in donations to open-source security groups ($2.5M to Alpha-Omega and OpenSSF via the Linux Foundation, $1.5M to the Apache Software Foundation).

The April report described a handful of findings in detail, at the level of the bug class rather than the exploit:

- **OpenBSD TCP SACK.** A signed integer overflow in SACK block handling, present for **27 years**, that let crafted TCP packets crash the kernel. OpenBSD shipped it as **7.8 errata patch 025** on March 25, 2026 ("TCP packets with invalid SACK options could crash the kernel"). Anthropic reported spending under **$20,000** on roughly 1,000 runs of the OpenBSD scaffold, and under **$50** on the specific run that found this bug.
- **FreeBSD NFS remote code execution, CVE-2026-4747.** A **17-year-old** stack buffer overflow in RPCSEC_GSS packet validation. FreeBSD's advisory **FreeBSD-SA-26:08** of March 26, 2026 credits "Nicholas Carlini using Claude, Anthropic," and states remote code execution in the kernel is possible when the NFS server is reachable.
- **FFmpeg H.264.** A 16-year-old out-of-bounds write (code introduced in 2003, exploitable since 2010), found for roughly $10,000 of scanning.
- On OSS-Fuzz targets that had already absorbed years of fuzzing, Mythos Preview produced **595** low-tier crashes and full control-flow hijacks on **ten** fully patched targets; Claude Opus 4.6 on the same setup managed one crash above the lowest two tiers.

Anthropic said contracted security professionals were triaging every report before disclosure, that of **198** manually reviewed reports **89%** matched the model's own severity rating exactly and **98%** were within one level, and that if that held across the backlog it implied "over 1,000 critical-severity and thousands of high-severity vulnerabilities." It also said plainly that **over 99%** of what had been found was not yet patched, published 14 SHA-3 commitments to findings it could not yet describe, and adopted a 90 + 45 day coordinated disclosure window.

Partners started reporting. On **April 21, 2026**, Mozilla said an agentic pipeline built on Mythos Preview had found **271** previously unknown Firefox vulnerabilities fixed in **Firefox 150** (180 sec-high, 80 sec-moderate, 11 sec-low), part of a record 423 security bugs resolved that month. Mozilla's May writeup credits the pipeline's habit of building and running a reproducible test case for each hypothesis for keeping false positives down, and notes that individual sec-high bugs rarely amount to a working exploit on their own because of Firefox's sandboxing.

On **May 22, 2026**, Anthropic published a Glasswing update: **over 10,000** high- or critical-severity vulnerabilities reported by the roughly 50 partners; a scan of **1,000+ open-source projects** that produced 23,019 findings, an estimated **6,202** of them high or critical; **six independent security firms** assessed a sample of **1,752** findings and validated **90.6%** (1,587) as true positives, with 62.4% confirmed high or critical; **530** high or critical bugs disclosed to open-source maintainers, **75** patched and **65** with public advisories, average time to patch about two weeks. Cloudflare alone reported about 2,000 bugs, 400 of them high or critical, and a certificate-forgery flaw in wolfSSL (CVE-2026-5194) was among the named fixes.

## Why it matters
Volume is the story, and it is a documented one: an OpenBSD errata entry, a FreeBSD security advisory with the model in the credit line, Mozilla's own count in its own blog, and a validation sample run by outside firms rather than by Anthropic. Earlier milestones in this collection were single bugs ([Big Sleep's SQLite find](../big-sleep-vulnerability-discovery/)) or hundreds ([Opus 4.6's 500 zero-days](https://www.anthropic.com/research/zero-days)); this is the first time a model's output has been measured in the tens of thousands across the code that the internet actually runs on.

It also marks the first time a frontier lab has withheld a model from general release specifically on cyber grounds and routed it through a consortium of vendors instead, a decision that is itself contested. The same model produced the [HAWK and reduced-round AES cryptanalysis](../claude-cryptanalysis-hawk-aes/) in July 2026.

## Sources — the record of the discovery
- [Anthropic — Claude Mythos Preview cybersecurity assessment (April 7, 2026)](https://www.anthropic.com/research/mythos-preview)
- [Anthropic — Project Glasswing](https://www.anthropic.com/glasswing)
- [Anthropic — Project Glasswing: initial update (May 22, 2026)](https://www.anthropic.com/research/glasswing-initial-update)
- [OpenBSD 7.8 errata (patch 025, TCP SACK)](https://www.openbsd.org/errata78.html)
- [FreeBSD-SA-26:08.rpcsec_gss (CVE-2026-4747)](https://www.freebsd.org/security/advisories/FreeBSD-SA-26:08.rpcsec_gss.asc)
- [Mozilla Hacks — Behind the scenes hardening Firefox with Claude Mythos Preview (May 7, 2026)](https://hacks.mozilla.org/2026/05/behind-the-scenes-hardening-firefox/)
- [The Register — Anthropic Mythos model can find and exploit 0-days (April 8, 2026)](https://www.theregister.com/2026/04/07/anthropic_all_your_zerodays_are_belong_to_us/)
- [The Register — Anthropic Mythos shaping up as nothingburger (April 22, 2026)](https://www.theregister.com/security/2026/04/22/anthropic-mythos-shaping-up-as-nothingburger/5225649)
- [AISLE — AI cybersecurity after Mythos: the jagged frontier (April 7, 2026)](https://aisle.com/blog/ai-cybersecurity-after-mythos-the-jagged-frontier)
- [SecurityWeek](https://www.securityweek.com/claude-mythos-finds-271-firefox-vulnerabilities/) · [Wikipedia — Claude Mythos](https://en.wikipedia.org/wiki/Claude_Mythos)

---
*In this folder: **[PROMPT.md](./PROMPT.md)** (a prompt to explore it with AI) · **[CONTEXT.md](./CONTEXT.md)** (background & caveats). Part of the [AI Hall of Fame](../../README.md) → [🛡️ Cybersecurity](../).*
