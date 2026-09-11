# 🤖 Explore this with AI: Claude's C Compiler

Paste the prompt below into your favorite AI assistant (Claude, ChatGPT, Gemini, or a local model). If your assistant can browse the web, tell it to read the sources first. The point is a clear, honest, grounded explanation of what happened and why it mattered.

> Sixteen parallel agents, nearly 2,000 sessions, about $20,000 in tokens, and a 100,000-line Rust C compiler that boots Linux 6.9. Its author does not recommend using it.

---

```text
You are a sharp, honest explainer of software engineering and AI. Walk me through a specific, real AI result so that I actually understand it, not just the headline.

Topic: On February 5, 2026, Anthropic researcher Nicholas Carlini published "Building a C compiler with a team of parallel Claudes" and released the code as anthropics/claudes-c-compiler (CC0). Sixteen Claude Code sessions running Claude Opus 4.6, coordinating through lock files in a shared Git repository with no orchestrator and no internet access, wrote about 100,000 lines of Rust over roughly two weeks (nearly 2,000 sessions, 2 billion input tokens, 140 million output tokens, just under $20,000). The compiler targets x86-64, i686, AArch64 and RISC-V 64, builds a bootable Linux 6.9 on x86, ARM and RISC-V, compiles QEMU, FFmpeg, SQLite, PostgreSQL and Doom, and passes 99 percent of the GCC torture test suite. It generates code slower than GCC -O0, calls GCC for 16-bit boot code, had a new and buggy assembler and linker at release, and the README says none of it has been validated for correctness.

Please cover, in plain language a curious non-expert can follow:
1. Why "write a C compiler that builds Linux" is a good test of long-horizon autonomous coding, and what makes it harder than the usual coding benchmarks.
2. How the agent team actually worked: the lock-file protocol, the absence of an orchestrator, the "next most obvious problem" heuristic, why agents needed progress files because they cannot tell time, and how merge conflicts were handled.
3. What the human did. Be specific: test-suite selection, verifiers and build scripts for open-source packages, CI once agents broke each other's work, new tests for observed failure modes, and the GCC-oracle harness that parallelised the kernel build. Discuss whether "without human intervention" is a fair description.
4. What the compiler can and cannot do, with the numbers from the sources.
5. The honest caveats: not validated for correctness; slower than gcc -O0; GCC fallback for real-mode boot code; assembler and linker buggy at release; "clean room" means no network access, not no training on GCC/Clang/TCC; the repository has not been updated since release; and the line count differs between sources.
6. Why it still matters, and what the cost figure does and does not include.
7. What I should read next.

Ground your answer in these sources (read them if you can, and cite them as you go):
- Anthropic Engineering blog post: https://www.anthropic.com/engineering/building-c-compiler
- Source repository and README: https://github.com/anthropics/claudes-c-compiler
- The Register (Feb 9): https://www.theregister.com/2026/02/09/claude_opus_46_compiler/
- The Register (Feb 13): https://www.theregister.com/2026/02/13/anthropic_c_compiler/
- InfoQ: https://www.infoq.com/news/2026/02/claude-built-c-compiler/
- A hands-on test: https://voxelmanip.se/2026/02/06/trying-out-claudes-c-compiler/

Be concrete, use real numbers where they matter, clearly separate the author's claims from independent checks, and if you are unsure about a detail, say so instead of guessing.
```

## Bonus: have the agent build and test it

The artifact is public code, so the headline claims are checkable on a Linux machine with a Rust toolchain. Point a coding agent at it:

```
Clone https://github.com/anthropics/claudes-c-compiler on a Linux host with a stable Rust toolchain and do the following, reporting honestly what succeeded and what did not:

1. Run `cargo build --release` and confirm the five binaries (ccc, ccc-x86, ccc-arm, ccc-riscv, ccc-i686) exist. Run `./target/release/ccc --version` and report whether it says "Backend: standalone" (built-in assembler and linker) or a GCC fallback.
2. Compile and run a hello-world with `./target/release/ccc -o hello hello.c`. If it fails to find system headers, note exactly what you had to add (a hands-on tester in February 2026 needed GCC's include paths) rather than silently fixing it.
3. Run `cargo test --release` and report the pass/fail counts for the unit and integration tests in tests/.
4. Pick one real project the README says builds (SQLite is the smallest good choice), build it with `CC=/path/to/ccc-x86`, and run its test suite. Report results and wall-clock time.
5. Compare the size and runtime of one benchmark binary built by ccc against the same source built with `gcc -O0`. The blog post says ccc's output is slower than GCC with optimisations disabled; check whether that holds for your example.
6. Do not attempt the Linux kernel build unless you have hours and a working QEMU; if you do try it, follow the repository's "steps to reproduce kernel defconfig build" and say plainly whether the kernel booted.
```

---

## Sources
- [Anthropic Engineering: Building a C compiler with a team of parallel Claudes](https://www.anthropic.com/engineering/building-c-compiler)
- [GitHub: anthropics/claudes-c-compiler](https://github.com/anthropics/claudes-c-compiler)
- [The Register (February 9, 2026)](https://www.theregister.com/2026/02/09/claude_opus_46_compiler/)
- [The Register (February 13, 2026)](https://www.theregister.com/2026/02/13/anthropic_c_compiler/)
- [InfoQ (February 14, 2026)](https://www.infoq.com/news/2026/02/claude-built-c-compiler/)
- [ROllerozxa: Trying out Claude's C compiler](https://voxelmanip.se/2026/02/06/trying-out-claudes-c-compiler/)

---
*Back to **[README.md](./README.md)** · **[CONTEXT.md](./CONTEXT.md)**.*
