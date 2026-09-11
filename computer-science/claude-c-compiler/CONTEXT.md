# 📚 Context: Claude's C Compiler

**Who and why.** Nicholas Carlini is a security researcher on Anthropic's Safeguards team, previously at Google DeepMind and known for adversarial-ML and model-extraction work. He framed the project as a stress test of long-horizon autonomy: pick a task with an unambiguous finish line (compile a booting Linux kernel), give it to a team of agents rather than one, write no code yourself, and see what breaks. The blog post went up on **February 5, 2026**; the repository, created February 4, had its last push the same day the post appeared, so the code is a snapshot of the experiment rather than a maintained project.

**How the team worked.** Sixteen Claude Code sessions ran Claude Opus 4.6 in parallel in a shared Docker container against one Git repository, with no network access. Coordination was deliberately minimal. An agent takes a lock by writing a text file into `current_tasks/` and committing; a conflicting claim fails at push time and the loser picks something else. There was no planner or manager agent. Agents were told to find the "next most obvious" problem, and to keep progress files current because a session has no sense of elapsed time. Merge conflicts were frequent and were resolved by the agents. Each session was fresh, so all state had to live in the repository: the design document, progress notes, tests and the task-lock files.

**The human's job.** Carlini did not write compiler code, but he did a lot of engineering around the agents: assembling test suites (including the GCC torture tests), writing build scripts and verifiers for open-source packages so that "does FFmpeg build and pass its tests" became a signal, building a CI pipeline once agents started breaking each other's work, designing new tests whenever he spotted a recurring failure mode, and writing the GCC-oracle harness that let the kernel build be parallelised. InfoQ's headline ("without human intervention... almost") and Carlini's own phrasing agree that the environment design was the human contribution, and it was substantial.

**What the artifact is.** The README describes a full pipeline: preprocessor, lexer, parser, semantic analysis, a target-independent SSA IR, 15-plus optimisation passes, code generators for x86-64, i686, AArch64 and RISC-V 64, a built-in assembler and linker for all four, and DWARF output. It ships bundled headers (including SSE/AVX-512 and NEON intrinsics) and accepts GCC-style flags, so `make CC=ccc` works for many projects. A few numbers from the README: PostgreSQL passes 237 regression tests, FFmpeg passes 7,331 FATE checkasm tests on x86-64 and AArch64, and over 150 further projects build. The blog post gives the headline claims: bootable Linux 6.9 on three architectures, QEMU, FFmpeg, SQLite, Postgres, Redis and Doom, and a 99 percent pass rate on "most compiler test suites including the GCC torture test suite".

**Cost.** 2 billion input tokens, 140 million output tokens, just under $20,000, nearly 2,000 sessions, about two weeks. The Register's Joe Fay noted that this is API list price and excludes Carlini's time.

## Why it's in the Hall of Fame
Whole-project autonomy, not snippet autonomy. Compilers are large, tightly coupled, and unforgiving, and the Linux kernel is the most demanding C codebase most people can name. An agent team going from nothing to a booting kernel, with a human writing tests but not code, at a token cost in the tens of thousands of dollars, is a concrete, reproducible-in-principle data point about what agentic software engineering could do in early 2026. It is also a good model of how to report such a result: the author published the code, the cost, the coordination mechanism and a long list of what does not work.

## Honest caveats

- **Not validated for correctness.** The README, in the one paragraph a human wrote, says: "I do not recommend you use this code! None of it has been validated for correctness." Passing test suites is evidence, not proof, and the docs "may be wrong and make claims that are false".
- **Slow output.** The compiler's generated code is less efficient than GCC's with all optimisations disabled; `-O0` through `-O3` run the same pipeline. A hands-on test the day after release found a 1.7 MiB binary where GCC produced 823 KiB, and needed GCC's header paths to build even Hello World.
- **It does not fully boot Linux on its own.** It lacks a 16-bit x86 code generator for real-mode boot code and calls GCC for that step (the `gcc_m16` feature). The 32-bit and 64-bit x86 compilers are its own.
- **The assembler and linker were the weakest part.** The blog post says these "are the very last bits that Claude started automating and are still somewhat buggy", and the demo video used GCC's. The repository defaults to the built-in ones and offers `gcc_assembler` and `gcc_linker` features as fallbacks. Some coverage described the compiler as having no assembler or linker at all; the accurate statement is that it has them, that they were new and buggy at release, and that GCC fallbacks are available.
- **"Clean room" means no network, not no prior knowledge.** Claude did not have internet access during development, but it was trained on the source of GCC, Clang, TCC and every other public compiler. Commenters on GitHub and The Register raised this; it does not diminish the engineering, but it does mean this is not evidence of inventing compiler techniques.
- **Human scaffolding was significant.** Test suite selection, verifiers, CI, the kernel oracle harness, and new tests for each observed failure mode were all human work. InfoQ collected reactions making exactly this point, and Carlini's post describes it openly.
- **Quality and maintainability.** Carlini rates the Rust code as reasonable but "nowhere near" expert quality, and the repository has not been updated since release. Steve Sinofsky's comparison is apt: GCC also worked in 1987; the hard part was 37 years of evolving with the language, platforms and libraries.
- **Line count varies by source.** The blog post says 100,000 lines. Some later coverage quotes a larger figure for the repository, presumably counting tests and headers. This entry uses the blog post's number.

## Sources
- [Anthropic Engineering: Building a C compiler with a team of parallel Claudes (February 5, 2026)](https://www.anthropic.com/engineering/building-c-compiler)
- [GitHub: anthropics/claudes-c-compiler](https://github.com/anthropics/claudes-c-compiler)
- [The Register: Claude Opus 4.6 spends $20K trying to write a C compiler (February 9, 2026)](https://www.theregister.com/2026/02/09/claude_opus_46_compiler/)
- [The Register: Anthropic's AI-built C compiler (February 13, 2026)](https://www.theregister.com/2026/02/13/anthropic_c_compiler/)
- [InfoQ: Sixteen Claude agents built a C compiler without human intervention... almost (February 14, 2026)](https://www.infoq.com/news/2026/02/claude-built-c-compiler/)
- [ROllerozxa: Trying out Claude's C compiler (February 6, 2026)](https://voxelmanip.se/2026/02/06/trying-out-claudes-c-compiler/)

Related entries: [AlphaDev, faster sorting in libc++](../alphadev-sorting/) · [AlphaCode, competitive programming](../alphacode-competitive-programming/) · [AlphaChip, chip floorplanning](../alphachip-floorplanning/)

---
*Back to **[README.md](./README.md)** · **[PROMPT.md](./PROMPT.md)**.*
