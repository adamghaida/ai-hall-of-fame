# Sixteen parallel Claude agents wrote a 100,000-line C compiler that boots Linux

**Field:** 💻 Computer Science  ·  **When:** February 2026

> Over about two weeks, nearly 2,000 Claude Code sessions running Claude Opus 4.6, sixteen at a time, wrote a C compiler in Rust from scratch, with no internet access and no dependencies beyond the Rust standard library. It builds a bootable Linux 6.9 for x86, ARM and RISC-V, compiles QEMU, FFmpeg, SQLite, PostgreSQL and Doom, passes 99 percent of the GCC torture suite, and cost just under $20,000 in API tokens. Its author does not recommend using it.

## What happened
On February 5, 2026, Anthropic researcher **Nicholas Carlini** published *Building a C compiler with a team of parallel Claudes* and released the result, **Claude's C Compiler (ccc)**, on GitHub under a CC0 public-domain licence. The task he set was deliberately hard and unambiguous: write, in Rust, a C compiler capable of compiling the Linux kernel.

The setup was an agent team rather than a single long session. Sixteen Claude Code instances worked in parallel on one Git repository in a shared Docker container. Coordination was a "simple synchronization algorithm": an agent claims a task by writing a text file to a `current_tasks/` directory and committing it; if two agents claim the same task, Git's synchronization forces the second to pick another. There was no orchestrator. Agents chose the "next most obvious" problem, resolved their own merge conflicts, and kept progress notes in files because, as Carlini put it, Claude "can't tell time" and would otherwise spend hours running tests instead of making progress. In total the project consumed **2 billion input tokens and 140 million output tokens**, just under **$20,000**, across **nearly 2,000 sessions in about two weeks**.

Carlini's own work was the environment: finding high-quality compiler test suites, writing build scripts and verifiers for open-source packages, watching for failure modes and writing new tests when he found them, and building a continuous-integration pipeline once agents started breaking each other's work. One trick mattered for the kernel: because the Linux build kept failing in the same place for every agent, he wrote a harness that compiled most of the kernel with GCC as a known-good oracle and only the remaining files with ccc, so sixteen agents could each chase a different failing file.

What came out, per the blog post and the repository README:

- About **100,000 lines of Rust** (a clean-room implementation with no internet access during development), with a preprocessor, parser, SSA-based intermediate representation, 15-plus optimisation passes, and code generators for **x86-64, i686, AArch64 and RISC-V 64**, plus DWARF debug info.
- It builds a **bootable Linux 6.9** on x86, ARM and RISC-V.
- It compiles **QEMU, FFmpeg** (7,331 FATE checkasm tests on x86-64 and AArch64), **SQLite, PostgreSQL** (237 regression tests), Redis, Lua, LuaJIT, CPython, Busybox, coreutils, musl, TCC and **Doom**, which it can run; the README lists over 150 further projects.
- A **99 percent pass rate** on "most compiler test suites including the GCC torture test suite".

## Why it matters
Compilers are the canonical large, exacting software project: hundreds of interacting features, a brutal correctness bar (a miscompiled kernel does not boot), and decades of accumulated test suites to fail. Getting one from empty repository to booting Linux, with no human writing or reviewing the code, is the clearest demonstration so far that a team of coding agents can carry an entire complex project rather than a ticket at a time. The number that matters most is arguably the price: about $20,000 of tokens, roughly a week of a senior engineer's fully loaded cost, for two weeks of sixteen-way parallel work.

The result also drew a fair amount of deflation, much of it from Carlini himself. The compiler generates code slower than GCC with optimisations disabled, is not a drop-in replacement, produces Rust that is "nowhere near" expert quality, and has not been validated for correctness. Steve Sinofsky pointed out that GCC also "fully worked" in 1987 and spent 37 years evolving with the language and platforms, and critics noted that Claude's training data includes GCC, Clang and TCC, so "clean room" describes network access, not knowledge. Carlini's closing line captures both halves: the experiment "excites me" but "also leaves me feeling uneasy", because it makes it easy to deploy software nobody has personally verified.

## Sources — the record of the discovery
- [Anthropic Engineering: Building a C compiler with a team of parallel Claudes (Nicholas Carlini, February 5, 2026)](https://www.anthropic.com/engineering/building-c-compiler)
- [GitHub: anthropics/claudes-c-compiler (source, README, build instructions, CC0-1.0)](https://github.com/anthropics/claudes-c-compiler)
- [The Register: Claude Opus 4.6 spends $20K trying to write a C compiler (Joe Fay, February 9, 2026)](https://www.theregister.com/2026/02/09/claude_opus_46_compiler/)
- [The Register: Anthropic's AI-built C compiler, critical take (Steven J. Vaughan-Nichols, February 13, 2026)](https://www.theregister.com/2026/02/13/anthropic_c_compiler/)
- [InfoQ: Sixteen Claude agents built a C compiler without human intervention... almost (February 14, 2026)](https://www.infoq.com/news/2026/02/claude-built-c-compiler/)
- [ROllerozxa: Trying out Claude's C compiler (hands-on test, February 6, 2026)](https://voxelmanip.se/2026/02/06/trying-out-claudes-c-compiler/)

---
*In this folder: **[PROMPT.md](./PROMPT.md)** (a prompt to explore it with AI) · **[CONTEXT.md](./CONTEXT.md)** (background & caveats). Part of the [AI Hall of Fame](../../README.md) → [💻 Computer Science](../).*
