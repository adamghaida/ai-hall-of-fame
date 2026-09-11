# The Erdős problems and AI: a roundup of the 2025 to 2026 record

**Field:** 🧮 Mathematics  ·  **When:** August 2026

> In October 2025 an OpenAI executive's claim that GPT-5 had solved ten Erdős problems was withdrawn within days; ten months later Thomas Bloom's database listed 565 solved problems, Terence Tao's tracking wiki recorded dozens of AI-produced resolutions, and the unit distance conjecture was gone.

## What happened
**erdosproblems.com**, built and maintained by Thomas Bloom, catalogues the problems Paul Erdős posed over his career. Quanta reported that by August 2025 it held nearly 1,000 problems and that 111 statuses had flipped from open to solved between 2024 and 2025, mostly by humans finding old literature or new proofs. In 2026 it became, in the wiki's own words, "a suitable collection of open problems to measure AI systems at this time," and the counts moved fast: Quanta's August 3, 2026 feature gave **565 solved and 652 open**; on September 11, 2026 the site's front page reads "There are 1220 problems in the database of which 586 (48%) have been solved."

The record of what AI did is Terence Tao's **AI contributions to Erdős problems** wiki, which was frozen with data as of **June 30, 2026**. It sorts contributions into primary sections, 1(a) AI standalone, 1(b) AI alongside literature found afterwards, 1(c) AI building on known literature, 1(d) AI collaborating with humans, and secondary sections for literature search, formalization, rewriting and computation, with colour codes for full resolution, partial progress, incorrect work and unverified claims. Counting its rows directly (see [PROMPT.md](./PROMPT.md) for the script):

- **538 rows** touching **405 distinct problems**; 101 rows dated 2025, 456 dated 2026.
- **18 distinct problems** with a full resolution in section 1(a), AI standalone: seven credited to an unnamed OpenAI internal model, three to GPT-5.4 Pro, two each to GPT-5.5 Pro, DeepMind's prover agent and Aristotle, and one each to Claude Mythos, GPT-5.2 Pro, GPT-5.2 Thinking, Aletheia, and a Claude Fable 5 / Codex / GPT-5.5 combination.
- **81 distinct problems** with a full AI outcome somewhere in the four primary sections (18 in 1(a), 14 in 1(b), 18 in 1(c), 36 in 1(d)).
- **37 problems** where an AI literature search turned up a complete existing solution (section 2(a)), and 7 problems in 1(b) whose AI solution was later matched to a full prior solution.
- **184 problems** with at least one Lean formalization row (section 2(b)), 173 of them formalizing full proofs.
- **20 rows** flagged as incorrect work and **43** as unverified.

The milestones, in order: the withdrawn OpenAI claim (October 2025); the first credited autonomous solution, **problem 728**, by GPT-5.2 Pro with Aristotle's Lean proof (January 2026); DeepMind's January paper solving four problems and finding forgotten solutions to nine more out of 700 conjectures evaluated with Gemini; **problem 1196** from a single GPT-5.4 Pro prompt, digested into a paper with Tao (April to May); DeepMind's AlphaProof Nexus resolving **9 of 353** formalized open problems in Lean (May 21); OpenAI's model disproving the **unit distance conjecture, problem 90** (May 20), with Claude Mythos following six days later; [six problems solved in five days with GPT-5.6](../erdos-problems-gpt-5.6/) (July); and OpenAI's [Astra release](../astra-ten-proofs/) claiming problems 146, 180 and 183 (August 1).

## Why it matters
No other body of open problems has been worked over this systematically by AI, with a public referee. Bloom's site records status changes and forum discussion; Tao's wiki records who did what, and includes disclaimers that the page "is not a benchmark," that many problems "lack a thorough literature review," that selection bias hides failures, and that "absence of past progress may reflect obscurity rather than difficulty." The result is the most honest available picture of what language models and provers can and cannot do on research-level problems in mid-2026: a real, growing list of genuine resolutions, concentrated on elementary problems, alongside a comparable list of "solutions" that turned out to be in the literature, an estimated 1 to 2 percent success rate on the open list as a whole, and a handful of results (the unit distance disproof above all) that experts regard as significant.

It has also changed the field's relationship to the list. Quanta quotes Noga Alon that once AI started to solve the problems "there is no point anymore," reports Tao's view that mathematics is moving from proof scarcity to proof abundance and needs infrastructure to absorb it, and notes that Jacob Tsimerman, weeks after receiving the 2026 Fields Medal, announced a move to OpenAI. See **[CONTEXT.md](./CONTEXT.md)** for the October 2025 episode and the other caveats.

## Sources — the record of the discovery
- [AI contributions to Erdős problems (Tao's wiki, frozen June 30, 2026)](https://github.com/teorth/erdosproblems/wiki/AI-contributions-to-Erd%C5%91s-problems) · [Notable cases](https://github.com/teorth/erdosproblems/wiki/Notable-cases-of-AI-contributions-to-Erd%C5%91s-problems) · [Disclaimers](https://github.com/teorth/erdosproblems/wiki/Disclaimers-and-caveats) · [Company involvement](https://github.com/teorth/erdosproblems/wiki/How-have-AI-companies-been-invested-in-Erd%C5%91s-problems%3F)
- [erdosproblems.com (Thomas Bloom)](https://www.erdosproblems.com/)
- [Konstantin Kakaes, "Why the Legendary Erdős Problems Are Falling to AI," Quanta Magazine, August 3, 2026](https://www.quantamagazine.org/why-the-legendary-erdos-problems-are-falling-to-ai-20260803/)
- [TechCrunch, "OpenAI's embarrassing math," October 19, 2025](https://techcrunch.com/2025/10/19/openais-embarrassing-math/)
- [Kevin Barreto, "Problem 728 and the use of AI on Erdős problems" (erdosproblems.com blog, January 26, 2026)](https://www.erdosproblems.com/forum/thread/blog:2)

---
*In this folder: **[PROMPT.md](./PROMPT.md)** (a prompt to explore it with AI, including a script to recount the wiki) · **[CONTEXT.md](./CONTEXT.md)** (background & caveats). Part of the [AI Hall of Fame](../../README.md) → [🧮 Mathematics](../).*
