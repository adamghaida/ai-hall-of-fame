# 📚 Context: XBOW on the HackerOne leaderboard

**What XBOW is.** XBOW is a commercial autonomous penetration-testing product: an agent that is pointed at a web target, enumerates it, forms hypotheses about vulnerabilities, tries to confirm them, and writes up what it finds. Nico Waisman, the company's head of security, led the HackerOne effort and wrote up the results. Before the bug-bounty run, XBOW had mostly published results on capture-the-flag style benchmarks, which are easy to overfit and hard to compare across systems.

**Why HackerOne.** Bug-bounty platforms are the closest thing to a real-world benchmark for web security. Targets are production systems, the judge is the company that owns them, and the scoring penalizes noise: duplicates, non-issues, and "informative" reports that describe something real but not a security problem all count against a researcher's reputation. HackerOne's leaderboard combines report count, bounty totals, a signal score that reflects report quality, and an impact score that reflects severity. XBOW's argument was that ranking first there, over 90 days, against the platform's human population in the US, was a more honest test than any benchmark.

**The results in detail.** Nearly 1,060 reports; in the 90-day window, 54 critical, 242 high, 524 medium, 65 low. Of all reports: 130 resolved, 303 triaged, 33 new, 125 pending, 208 duplicates, 209 informative, 36 not applicable. XBOW's own writeup notes that roughly 45% were still awaiting resolution at the time of the post. TechRepublic's contemporaneous account gives 132 resolved rather than 130; the difference is presumably timing. The bug classes are the standard web catalogue: RCE, SQL injection, XXE, path traversal, SSRF, XSS, information disclosure, cache poisoning, and exposed secrets.

**The human in the loop.** HackerOne's policy on automated tools required that submissions be reviewed by a person. XBOW complied: its security team read each report before it was filed. The company's phrasing, "all findings were fully automated," refers to discovery and validation, not to submission. How many candidate findings the human reviewers rejected before filing is not published.

**What came after.** XBOW reported reaching number one globally for the second quarter of 2025, then said in August that leaderboards were no longer the point and that it would focus on customers running it before code reached production, while keeping a presence on HackerOne for feedback. In March 2026 it announced a $75M Series B led by Altimeter, bringing total funding to $117M, with the June 2025 ranking as the headline credential.

## Why it's in the Hall of Fame
It is the first documented case of an AI system outranking every human researcher on a major bug-bounty platform, scored by the affected companies rather than by the system's makers. It is also a useful early data point on the economics: hundreds of accepted findings, but also hundreds of duplicates and non-issues, generated at machine speed.

## Honest caveats
- **Human review before every submission.** "Fully autonomous" describes the finding, not the filing. XBOW's staff screened each report to satisfy HackerOne's rules. The number of candidates screened out is unpublished, so the true precision of the system is unknown.
- **The leaderboard rewards volume.** Reputation on HackerOne accrues per accepted report. A system that can submit at scale to many programs has a structural advantage over an individual researcher regardless of the depth of any single finding. Ranking first is evidence of throughput as much as of skill.
- **Roughly 40% of submissions were not accepted as new, valid issues.** 208 duplicates, 209 informative, and 36 not applicable out of about 1,060. Commenters on Hacker News pointed out that this share consumes real triage time at the receiving programs, and that acceptance varied enormously by program: one tally cited 22 of 24 valid for one large program and 3 of 43 for another, which suggests program scope and policy shaped the numbers as much as the system did.
- **Resolved is a small fraction.** 130 resolved out of 1,060 at announcement, with 303 triaged and 125 pending. Many of the accepted findings were mediums (524 of the 885 severity-rated reports in the 90-day window), which is where bounty programs typically see the most volume.
- **Self-reported.** All the numbers come from XBOW's blog and its HackerOne profile. HackerOne has not published an independent analysis of the run, and bounty amounts were not disclosed.
- **Web applications only.** XBOW's results are in the web bug classes it lists. This says nothing about memory safety, kernels, or cryptography, which is where most other AI security results in this collection sit.
- **A commercial milestone.** The company used the ranking to raise money and sell product. That does not make it false, but it is worth reading the blog posts as marketing that happens to contain data.

## Sources
- [XBOW — "How XBOW ranked #1" (June 24, 2025)](https://xbow.com/blog/top-1-how-xbow-did-it)
- [XBOW — "XBOW on HackerOne: what's next" (August 18, 2025)](https://xbow.com/blog/xbow-on-hackerone-whats-next)
- [XBOW — Series B announcement (March 20, 2026)](https://xbow.com/blog/series-b)
- [TechRepublic — AI bug hunter claims top spot on HackerOne's leaderboard (June 26, 2025)](https://www.techrepublic.com/article/news-ai-xbow-tops-hackerone-us-leaderboad/)
- [Hacker News discussion](https://news.ycombinator.com/item?id=44367548)

---
*Back to **[README.md](./README.md)** · **[PROMPT.md](./PROMPT.md)**.*
