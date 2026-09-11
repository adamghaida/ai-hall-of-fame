# 🤖 Explore this with AI: XBOW on the HackerOne leaderboard

Paste the prompt below into your favorite AI assistant (Claude, ChatGPT, Gemini, or a local model). If your assistant can browse the web, tell it to read the sources first. The point is a clear, honest, grounded explanation of what happened and why it mattered.

> An AI system that finds and validates web vulnerabilities on its own submitted nearly 1,060 reports to real bug-bounty programs and became the first non-human to rank first on HackerOne's US leaderboard. Humans reviewed every report before it went out, and about a fifth of the submissions were duplicates or informative.

---

```text
You are a sharp, honest security explainer. Walk me through a specific, real AI security result so that I actually understand it, not just the headline.

Topic: XBOW, an autonomous penetration-testing system, reaching the top of HackerOne's US bug-bounty leaderboard in June 2025.

Please cover, in plain language a curious non-expert can follow:
1. What a bug-bounty platform is, how HackerOne's leaderboard is scored (report count, bounties, signal, impact), and why it is both a real-world test and a crude one.
2. What XBOW did: nearly 1,060 submissions; in 90 days, 54 critical, 242 high, 524 medium, 65 low; and the status breakdown of 130 resolved, 303 triaged, 33 new, 125 pending, 208 duplicates, 209 informative, 36 not applicable. Explain what "triaged," "duplicate," and "informative" mean on HackerOne.
3. The bug classes involved (RCE, SQL injection, XXE, path traversal, SSRF, XSS, information disclosure, cache poisoning, exposed secrets) and how they differ from the memory-safety bugs that most other AI vulnerability-finding results concern.
4. The human in the loop: XBOW's statement that findings were fully automated but its security team reviewed every report before submission to comply with HackerOne's automated-tools policy. What does that do to the word "autonomous"?
5. The honest caveats. Be rigorous:
   - The leaderboard rewards volume, and a system that submits at scale has a structural advantage.
   - Roughly 40% of submissions were duplicates, informative, or not applicable, and what that costs the receiving programs.
   - Acceptance varied a lot by program (Hacker News commenters cited 22 of 24 valid for one program and 3 of 43 for another).
   - Only 130 were resolved at announcement; most accepted findings were mediums.
   - All numbers are self-reported by a company that later raised $75M on the result.
6. What it showed about the economics of AI-generated vulnerability reports, and how that connects to later disputes about AI report volume overwhelming maintainers and triage teams.

Ground your answer in these sources (read them if you can, and cite them as you go):
- XBOW's announcement: https://xbow.com/blog/top-1-how-xbow-did-it
- XBOW's follow-up: https://xbow.com/blog/xbow-on-hackerone-whats-next
- TechRepublic coverage: https://www.techrepublic.com/article/news-ai-xbow-tops-hackerone-us-leaderboad/
- Hacker News discussion: https://news.ycombinator.com/item?id=44367548

Be concrete, distinguish what XBOW claims from what outsiders can check, and if you are unsure about a detail, say so instead of guessing.
```

## Bonus: have the agent check the arithmetic

The status counts are a concrete, checkable object. Have a capable assistant work through them rather than repeat the headline:

```
Read https://xbow.com/blog/top-1-how-xbow-did-it and extract every number it gives: total submissions, the 90-day severity breakdown, and the status breakdown (resolved, triaged, new, pending, duplicate, informative, not applicable). Check whether the status counts sum to the stated total, compute the share of submissions that were duplicates, informative, or not applicable, and compute the share that were resolved. Then explain what fraction of the 90-day severity-rated reports were critical or high versus medium or low. State clearly which of these figures come from XBOW itself and whether any independent source (HackerOne, the affected programs) has confirmed them.
```

---

## Sources
- [XBOW — "How XBOW ranked #1"](https://xbow.com/blog/top-1-how-xbow-did-it)
- [XBOW — "XBOW on HackerOne: what's next"](https://xbow.com/blog/xbow-on-hackerone-whats-next)
- [TechRepublic — AI bug hunter claims top spot on HackerOne's leaderboard](https://www.techrepublic.com/article/news-ai-xbow-tops-hackerone-us-leaderboad/)
- [Hacker News discussion](https://news.ycombinator.com/item?id=44367548)

---
*Back to **[README.md](./README.md)** · **[CONTEXT.md](./CONTEXT.md)**.*
