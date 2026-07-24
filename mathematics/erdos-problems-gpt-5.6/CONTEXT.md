# 📚 Context: six Erdős problems solved with GPT-5.6

**The database.** Paul Erdős posed thousands of conjectures over his career; mathematician Thomas Bloom built **erdosproblems.com** to catalog roughly 1,000 of them with their current status (open, solved, or partially resolved) and references. It has become the reference point for tracking whether a given Erdős problem has actually been settled.

**The broader wave.** This is not an isolated event. Since late 2025 there has been a fast-growing, publicly tracked pattern of frontier models contributing to Erdős problems: Mark Sellke and a collaborator reported finding solutions to 10 previously-open problems using thousands of GPT-5 queries; Erdős Problem 1196 was formally marked "PROVED" on the database crediting GPT-5.4 Pro, with Terence Tao verifying the proof and calling it one of the most unambiguous instances of AI solving a genuinely open problem; and a `teorth/erdosproblems` GitHub wiki now tracks AI contributions with a color-coded confidence system (full solution, partial result, incorrect, unverified). Wang's own prior contribution to Problem 690 (in collaboration with a system called "Multiscalar Fields System") is already recorded there as a verified full solution from May 2026.

**The workflow, not just the result.** What Wang emphasizes is procedural: precise problem restatement, an explicit definition of what counts as a complete proof (ruling out weaker results that might superficially look like a solution), pre-loading known traps, and adversarial multi-agent checking before accepting an answer. That template mirrors what has worked in the other AI-plus-math cases in this database (formal verification, explicit failure criteria, human framing of the problem).

## Why it's in the Hall of Fame
Six previously-open problems from a canonical, actively maintained math database, closed in under a week, with the full proofs, prompts, and workflow made public for scrutiny. It complements the single-result Jacobian and Dinitz-Garg-Goemans entries by showing a repeatable *process* for AI-assisted problem solving rather than one lucky find.

## Honest caveats
- **Extremely fresh, self-reported claim.** This was announced via an X thread on July 22, 2026, hours before this entry was written. It has not gone through peer review, and as of this writing the specific July 2026 batch of six problems had not yet been reflected in the official `teorth/erdosproblems` tracking wiki (which does, however, already credit Wang for a separate, independently verified contribution from May 2026).
- **"Solved" needs the proofs read, not just the count.** The proof PDFs and LaTeX are public on GitHub, but that does not substitute for the community verification that problems like #1196 received (where Terence Tao personally checked the argument). Treat the specific six problems as a strong, plausible, but not yet independently confirmed claim.
- **Formalization is in progress, not complete.** The repository states some proofs have been formalized and machine-checked in Lean, with the rest still in progress; full Lean formalization would be the strongest independent confirmation.
- **Difficulty varies enormously across Erdős problems.** Some entries on the list are genuinely deep open questions; others are more tractable or already had partial progress in the literature. "Open on the database" does not mean every one carries equal weight, and this entry does not claim otherwise.
- **The workflow, not the model alone, is doing a lot of the work.** Wang is explicit that a math background helped him design the prompts even though "the Codex workflow" itself does not require deep mathematical knowledge to run; how much of the result is attributable to the base model versus the scaffolding is genuinely an open question.

## Sources
- [Shouqiao Wang's announcement thread (X)](https://x.com/Qiaoqiao2001/status/2080003441821163958)
- [Proofs, prompts, and LaTeX source (GitHub)](https://github.com/ShouqiaoW/erdos)
- [Erdős Problems database (Thomas Bloom)](https://www.erdosproblems.com/)
- [AI contributions to Erdős problems (official tracking wiki)](https://github.com/teorth/erdosproblems/wiki/AI-contributions-to-Erd%C5%91s-problems)

---
*Back to **[README.md](./README.md)** · **[PROMPT.md](./PROMPT.md)**.*
