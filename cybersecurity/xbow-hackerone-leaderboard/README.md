# XBOW's autonomous pentester reached the top of HackerOne's US leaderboard

**Field:** 🛡️ Cybersecurity  ·  **When:** June 2025

> An AI system that finds and validates web vulnerabilities on its own submitted nearly 1,060 reports to real bug-bounty programs and became the first non-human to rank first on HackerOne's US leaderboard. Humans reviewed every report before it went out, about a fifth of the submissions were duplicates or "informative," and the leaderboard rewards volume.

## What happened
**XBOW** is an autonomous penetration-testing system built by a startup of the same name. To test it against real targets rather than benchmarks, the company enrolled it in public and private bug-bounty programs on **HackerOne** and, in its own words, treated it "like any external researcher would: no shortcuts, no internal knowledge." On **June 24, 2025**, XBOW's head of security Nico Waisman announced that it had reached the **top position on HackerOne's US leaderboard**, ranking above thousands of human researchers.

The numbers XBOW published: nearly **1,060** vulnerabilities submitted; over the preceding 90 days, **54 critical**, **242 high**, **524 medium**, and **65 low** severity findings. Across all submissions, **130** had been resolved by the affected companies, **303** were triaged (accepted, fix pending), 33 were new, 125 were pending review, **208** were marked duplicates, **209** informative, and 36 not applicable. The bug classes reported included remote code execution, SQL injection, XXE, path traversal, server-side request forgery, cross-site scripting, information disclosure, cache poisoning, and exposed secrets. One finding XBOW highlighted was a vulnerability in a Palo Alto GlobalProtect VPN deployment that it said affected more than 2,000 hosts.

The process was not fully hands-off. XBOW stated that "all findings were fully automated," but that its security team **reviewed them before submission** to comply with HackerOne's policy on automated tools. By August 2025 the company said it had reached number one globally for Q2 and was shifting its focus from leaderboards to running before customers' code reached production; in March 2026 it raised a $75M Series B on the back of the result.

## Why it matters
Bug-bounty leaderboards are a crude instrument, but they are an instrument aimed at real systems, scored by the companies whose systems were tested, with duplicates and non-issues counted against you. Reaching the top of one was the first public demonstration that an AI system could produce a sustained stream of vulnerability reports that program owners accepted and paid for, in web applications rather than in the memory-safety bugs that most other AI results in this collection concern. It also previewed the tension that followed: an automated submitter can generate report volume faster than triage teams can absorb it, which is the same bottleneck that [Anthropic's 500-zero-day report](https://www.anthropic.com/research/zero-days) and the [Big Sleep](../big-sleep-vulnerability-discovery/) FFmpeg dispute ran into later.

## Sources — the record of the discovery
- [XBOW — "How XBOW ranked #1" (June 24, 2025)](https://xbow.com/blog/top-1-how-xbow-did-it)
- [XBOW — "XBOW on HackerOne: what's next" (August 18, 2025)](https://xbow.com/blog/xbow-on-hackerone-whats-next)
- [TechRepublic — AI bug hunter claims top spot on HackerOne's leaderboard (June 26, 2025)](https://www.techrepublic.com/article/news-ai-xbow-tops-hackerone-us-leaderboad/)
- [Hacker News discussion, including per-program acceptance rates](https://news.ycombinator.com/item?id=44367548)
- [XBOW — Series B announcement (March 20, 2026)](https://xbow.com/blog/series-b)

---
*In this folder: **[PROMPT.md](./PROMPT.md)** (a prompt to explore it with AI) · **[CONTEXT.md](./CONTEXT.md)** (background & caveats). Part of the [AI Hall of Fame](../../README.md) → [🛡️ Cybersecurity](../).*
