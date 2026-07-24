# Six open Erdős problems solved in five days with GPT-5.6

**Field:** 🧮 Mathematics  ·  **When:** July 2026

> One researcher, thirteen attempts, six previously-open problems from Paul Erdős's list closed in under a week using a structured prompting workflow with GPT-5.6.

## What happened
On July 22, 2026, Shouqiao Wang (a Columbia PhD student, previously credited for AI-assisted work on Erdős Problem 690) announced that he had solved **six problems** listed as open on **erdosproblems.com** — Thomas Bloom's maintained database of roughly 1,000 conjectures Paul Erdős posed — in five days, using OpenAI's **GPT-5.6 Sol** through a Codex-based workflow.

He reported attempting **13 problems** total, for a success rate near 46%, with one run continuing for 32 hours. The workflow was deliberate rather than a single ask: each prompt restated the problem precisely, specified exactly what a complete proof or disproof needed to establish, listed weaker "near miss" results that would not count as a solution, flagged known traps and edge cases up front, and used independent adversarial agents to try to poke holes in every candidate argument before accepting it.

The solved problems are numbered **390, 486, 536, 788, 1002, and 1038**. Wang published proof PDFs, LaTeX source, the prompts used, and (for some problems) supporting computational scripts in a public GitHub repository, and says formalization of the proofs in the Lean proof assistant is in progress.

## Why it matters
It lands in the same week as an AI-assisted disproof of the Jacobian conjecture and of the Dinitz-Garg-Goemans conjecture, part of a fast-moving pattern of frontier language models closing out individually-hard, previously-open math problems when paired with careful human problem framing and adversarial self-checking. Unlike a single flashy result, this is a **workflow claim**: the emphasis is on a repeatable prompting and verification process, not a one-off insight.

## Sources — the record of the discovery
- [Shouqiao Wang's announcement thread (X)](https://x.com/Qiaoqiao2001/status/2080003441821163958)
- [Proofs, prompts, and LaTeX source (GitHub)](https://github.com/ShouqiaoW/erdos)
- [Erdős Problems database (Thomas Bloom)](https://www.erdosproblems.com/)
- [AI contributions to Erdős problems (official tracking wiki)](https://github.com/teorth/erdosproblems/wiki/AI-contributions-to-Erd%C5%91s-problems)

---
*In this folder: **[PROMPT.md](./PROMPT.md)** (a prompt to explore it with AI) · **[CONTEXT.md](./CONTEXT.md)** (background & caveats). Part of the [AI Hall of Fame](../../README.md) → [🧮 Mathematics](../).*
