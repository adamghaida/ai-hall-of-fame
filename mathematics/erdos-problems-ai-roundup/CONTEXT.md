# 📚 Context: the Erdős problems as an AI proving ground

## The list and its keeper
Erdős posed hundreds of problems across sixty years, many with cash prizes, and wrote in 1997 that a well-chosen problem "can isolate an essential difficulty in a particular area, serving as a benchmark against which progress in this area can be measured." Thomas Bloom started erdosproblems.com so he could consult the problems anywhere, and it grew into a curated database with forum threads, tags, prize amounts, a "formalised statement?" field, and a log of status changes. The site is explicit that its "open" label is provisional: a status change records when Bloom learned of a solution, not when the solution happened, and the front page says as much.

## The October 2025 episode
In mid-October 2025, OpenAI's then-VP Kevin Weil posted that GPT-5 had "found solutions to 10 (!) previously unsolved Erdős problems and made progress on 11 others." Bloom replied that his "open" designation meant only that he was personally unaware of a solution and that "GPT-5 found references, which solved these problems, that I personally was unaware of." OpenAI researcher Sébastien Bubeck acknowledged that "only solutions in the literature were found"; Google DeepMind CEO Demis Hassabis called it "embarrassing"; the post came down. The wiki's section 2(a), literature search, is the direct descendant of that episode: it now credits AI with finding full existing solutions to 37 problems, which is useful, and is kept firmly separate from solving anything.

## How the wiki sorts contributions
The placement system is the wiki's core intellectual contribution. A row goes in 1(a) only if comparable literature is unknown and human involvement is "non-significant"; in 1(b) if comparable literature was discovered afterwards (the AI may not have used it); in 1(c) if the AI built on literature known beforehand; in 1(d) if humans contributed significantly. Secondary sections cover literature search, Lean formalization of someone else's proof, rewriting, and computation. Colours mark full, partial, incorrect and unverified. The disclaimers page adds that a solution "does not automatically qualify as publishable paper in a journal," that formalization is encouraged but "there are still possible exploits" (unproved axioms, misformalized statements), and that "problem solving is only one component of mathematical research."

## The people
Thomas Bloom (site), Terence Tao (wiki, and co-author on several AI-assisted papers), Kevin Barreto and Liam Price (problems 728, 729, 401, 1196), Nat Sothanaphan (writeups and stronger variants), Boris Alexeev (Lean), Wouter van Doorn (problem 1102, October 2025, profiled by Quanta as an amateur whose work the tools transformed), Jared Duker Lichtman (primitive sets), and the forum's pseudonymous literature searchers. On the corporate side, the wiki's company page lists DeepMind preprints from November 2025, January, February and May 2026, and OpenAI releases from November 2025, March, April and May 2026, plus Harmonic (Aristotle), Anthropic (Claude Mythos) and Axiom (AxiomProver) appearing in rows.

## Why it's in the Hall of Fame
As a single entry this is a summary rather than a discovery, and the individual results have their own pages where they merit it. It is here because the Erdős list is the one place where AI mathematics claims have been counted, sorted and disputed in public, continuously, by the people best placed to judge, and because the counts themselves are the achievement: from zero credible autonomous solutions in October 2025 to dozens by mid-2026, with the bookkeeping honest enough that the failures are visible too.

## Honest caveats
- **The counts here are this entry's, not the wiki's.** The wiki publishes tables, not totals. The figures in README.md come from a script that parses the frozen page (538 rows, 405 problems, 18 full AI-standalone problems, 81 problems with a full AI outcome in any primary section, 37 literature-search finds, 184 problems with formalization rows, 20 incorrect rows). Different reasonable rules (counting rows versus problems, treating variant solutions as full, deciding which column a colour refers to) give different numbers; the task brief this entry was written from quoted "roughly 75" fully resolved and "34" literature finds, and neither the brief's nor this entry's numbers should be read as official.
- **The wiki stopped on June 30, 2026.** Everything after, including the GPT-5.6 six-problem run and the Astra claims on 146, 180 and 183, is not in it. The database is the only live source, and as the [Astra entry](../astra-ten-proofs/) notes, the database can lag the claims by weeks or longer.
- **Numbers from different dates do not reconcile exactly.** Quanta's 565 solved and 652 open (sum 1,217) and the site's 1,220 problems with 586 solved on September 11, 2026 are five weeks apart and the database grows as well as flips.
- **Most AI-solved problems are easy, and the wiki says so.** Disclaimer 1: raw counts across methodologies are "comparing apples to oranges." Disclaimer 5: a problem open for N years may simply have been obscure. Tao's public estimate of a 1 to 2 percent success rate on genuinely open problems matches DeepMind's 9 of 353.
- **Retractions are part of the record, not just the October 2025 one.** Barreto retracted a Christmas Day 2025 claim on problem 333 within hours; the wiki carries 20 rows marked incorrect and 43 unverified; several AlphaProof Nexus solves were later reclassified as partial or matched to literature.
- **Incentives have shifted.** Quanta reports that companies now treat the list as a benchmark, that a Fields Medalist left academia for OpenAI, and that some mathematicians (Alon) see less point in the problems once machines solve them. Whether that is good for mathematics is contested, and the June 2026 Leiden Declaration on AI and Mathematics, discussed in the Astra entry, was written in part about this.

## Sources
- [AI contributions to Erdős problems (Tao's wiki)](https://github.com/teorth/erdosproblems/wiki/AI-contributions-to-Erd%C5%91s-problems) · [Disclaimers](https://github.com/teorth/erdosproblems/wiki/Disclaimers-and-caveats) · [Notable cases](https://github.com/teorth/erdosproblems/wiki/Notable-cases-of-AI-contributions-to-Erd%C5%91s-problems) · [Company involvement](https://github.com/teorth/erdosproblems/wiki/How-have-AI-companies-been-invested-in-Erd%C5%91s-problems%3F)
- [erdosproblems.com](https://www.erdosproblems.com/)
- [Quanta Magazine, August 3, 2026](https://www.quantamagazine.org/why-the-legendary-erdos-problems-are-falling-to-ai-20260803/)
- [TechCrunch, October 19, 2025](https://techcrunch.com/2025/10/19/openais-embarrassing-math/)
- [Barreto's blog post, January 26, 2026](https://www.erdosproblems.com/forum/thread/blog:2)
- [Sothanaphan, *Resolution of Erdős Problem #728* (arXiv 2601.07421)](https://arxiv.org/abs/2601.07421)
- [Alexeev et al., *Primitive sets and von Mangoldt chains* (arXiv 2605.00301)](https://arxiv.org/abs/2605.00301)
- [DeepMind, *Advancing Mathematics Research with AI-Driven Formal Proof Search* (arXiv 2605.22763)](https://arxiv.org/abs/2605.22763)
- [OpenAI, *Planar Point Sets with Many Unit Distances* (PDF)](https://cdn.openai.com/pdf/74c24085-19b0-4534-9c90-465b8e29ad73/unit-distance-proof.pdf)

Related entries: [six Erdős problems solved with GPT-5.6](../erdos-problems-gpt-5.6/) · [Astra's ten proofs](../astra-ten-proofs/) · [the Jacobian conjecture counterexample](../jacobian-conjecture-counterexample/)

---
*Back to **[README.md](./README.md)** · **[PROMPT.md](./PROMPT.md)**.*
