# 🤖 Explore this with AI: the Erdős problems and AI

Paste the prompt below into your favorite AI assistant (Claude, ChatGPT, Gemini, or a local model). If your assistant can browse the web, tell it to read the sources first. The point is a clear, honest, grounded explanation of what happened and why it mattered.

> From a withdrawn "GPT-5 solved 10 Erdős problems" post in October 2025 to a frozen wiki of hundreds of sorted AI contributions in June 2026: the one place where AI mathematics has been counted in public.

---

```text
You are a sharp, honest math and AI explainer. Walk me through a specific, real body of AI achievements so that I actually understand it, not just the headlines.

Topic: Between October 2025 and August 2026, Paul Erdős's problems, catalogued by Thomas Bloom at erdosproblems.com, became the main public testbed for AI in research mathematics. Terence Tao's tracking wiki (frozen June 30, 2026) sorts every claimed AI contribution into "AI standalone", "AI alongside literature", "AI building on literature", "AI collaborating with humans", plus literature search, formalization, rewriting and computation, with colour codes for full, partial, incorrect and unverified. By August 2026 Quanta reported 565 solved and 652 open problems on the site.

Please cover, in plain language a curious non-expert can follow:
1. The October 2025 episode: what Kevin Weil claimed, what Thomas Bloom pointed out, and why "found a reference" is not "solved." Why did this make the community build a classification system?
2. The milestones in order: problem 728 (January 2026, GPT-5.2 Pro plus Aristotle's Lean proof, the first credited autonomous solution); DeepMind's January paper (four solved, nine forgotten solutions found); problem 1196 (April, one GPT-5.4 Pro prompt, then a paper with Tao); AlphaProof Nexus (May, 9 of 353 in Lean); the unit distance disproof, problem 90 (May 20, OpenAI; Claude Mythos May 26); six problems with GPT-5.6 in July; Astra's claims on 146, 180 and 183 in August.
3. How the wiki's sections work and why the distinction between 1(a) and 1(b) matters. What do the wiki's disclaimers say about difficulty, obscurity, selection bias, and Lean exploits?
4. What the numbers say if you count the wiki's rows: on the order of 18 problems fully solved by AI standalone, around 80 with a full AI outcome in some primary section, roughly 37 literature finds, over 180 problems with Lean formalizations, and about 20 rows marked incorrect. Explain why any such count depends on counting rules and why the wiki itself publishes no totals.
5. The honest caveats: most AI-solved problems are elementary; Tao's 1 to 2 percent success-rate estimate; retractions (problem 333 on Christmas Day 2025, later reclassifications of Nexus solves); the wiki stopped on June 30 and the database lags claims; the numbers from different dates do not reconcile exactly.
6. What changed for mathematicians: companies treating the list as a benchmark, Noga Alon's remark that there is "no point anymore," Tao's warning about proof abundance, a Fields Medalist moving to OpenAI, and the June 2026 Leiden Declaration.

Ground your answer in these primary sources (read them if you can, and cite them as you go):
- Tao's wiki: https://github.com/teorth/erdosproblems/wiki/AI-contributions-to-Erd%C5%91s-problems
- Its disclaimers: https://github.com/teorth/erdosproblems/wiki/Disclaimers-and-caveats
- The database: https://www.erdosproblems.com/
- Quanta, August 3, 2026: https://www.quantamagazine.org/why-the-legendary-erdos-problems-are-falling-to-ai-20260803/
- TechCrunch on the October 2025 claim: https://techcrunch.com/2025/10/19/openais-embarrassing-math/

Be concrete, use real numbers where they matter, and if you are unsure about a detail, say so instead of guessing.
```

## Bonus: have the agent recount the wiki

The wiki is a public git repository, so the counts in this entry can be reproduced or disputed:

```
Clone the wiki with `git clone https://github.com/teorth/erdosproblems.wiki.git` and open the file whose name starts with "AI-contributions-to-Erd". Confirm the banner says the data is as of June 30, 2026. Then write a Python script that:
1. Splits the page into sections by the "### 1(a)", "### 1(b)", ... "### 2(d)" headings and collects every table row starting with "| [[" (each row begins with a problem number in double brackets).
2. Reports, per section, the number of rows and the number of distinct problem numbers.
3. For the primary sections, identifies the "Outcome" column (column 4 in 1(a) and 1(b), column 5 in 1(c) and 1(d), counting from 1) and counts distinct problems whose outcome cell starts with the green circle 🟢. Report the total across the four primary sections and the 1(a) figure separately.
4. Counts rows containing 🔴 (incorrect) and ⚪ (unverified) anywhere.
5. In section 2(b) (formalization), counts rows and distinct problems.
Compare your numbers with those in this entry's README (538 rows, 405 problems, 18 standalone, 81 primary-full, 20 incorrect, 43 unverified, 184 formalized problems) and explain any differences by pointing at the specific rows or rules that cause them. Then pick three rows from 1(a) at random, open the linked erdosproblems.com pages, and check whether the site's current status agrees with the wiki's colour.
```

---

## Sources
- [AI contributions to Erdős problems (Tao's wiki, frozen June 30, 2026)](https://github.com/teorth/erdosproblems/wiki/AI-contributions-to-Erd%C5%91s-problems)
- [Disclaimers and caveats (Tao's wiki)](https://github.com/teorth/erdosproblems/wiki/Disclaimers-and-caveats)
- [erdosproblems.com](https://www.erdosproblems.com/)
- [Quanta Magazine, August 3, 2026](https://www.quantamagazine.org/why-the-legendary-erdos-problems-are-falling-to-ai-20260803/)
- [TechCrunch, October 19, 2025](https://techcrunch.com/2025/10/19/openais-embarrassing-math/)

---
*Back to **[README.md](./README.md)** · **[CONTEXT.md](./CONTEXT.md)**.*
