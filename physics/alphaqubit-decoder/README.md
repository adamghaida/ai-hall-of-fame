# AlphaQubit: a learned decoder beats the best hand-built quantum error-correction decoders

**Field:** ⚛️ Physics  ·  **When:** November 2024 · Nature

> A recurrent transformer trained by Google DeepMind and Google Quantum AI decoded surface-code errors on real Sycamore processor data with about 6% fewer logical errors than the most accurate existing decoder and 30% fewer than the fastest standard one, but it is still too slow to run in real time.

## What happened
Quantum error correction encodes one logical qubit redundantly across many physical qubits and repeatedly measures parity checks ("syndromes"). A **decoder** reads the noisy stream of syndromes and infers which errors occurred, so they can be undone. How accurately the decoder does this sets the logical error rate of the whole machine, and the best classical decoders for the **surface code** are hand-built algorithms such as minimum-weight perfect matching with correlations, or expensive tensor-network methods.

**AlphaQubit**, described in "Learning high-accuracy error decoding for quantum processors" (*Nature* volume 635, pages 834 to 840, **20 November 2024**; first author **Johannes Bausch**, senior author **Pushmeet Kohli**), replaces that with a **recurrent, transformer-based neural network** that learns to decode. It was pre-trained on hundreds of millions of simulated syndrome examples across a range of noise levels, then fine-tuned on thousands of experimental samples from Google's **Sycamore** processor.

On Sycamore's published surface-code memory experiments at code distances 3 and 5 (up to 49 qubits), AlphaQubit achieved logical error rates of (2.901 ± 0.023) × 10^-2 at distance 3 and (2.748 ± 0.015) × 10^-2 at distance 5, outperforming the tensor-network decoder that had been the accuracy benchmark, by about **6%** in the blog's summary. Against the faster correlated-matching decoder it made about **30%** fewer errors. In simulation the advantage held out to distance 11 (241 physical qubits), where AlphaQubit's error rate was roughly 1.25 to 1.4 times lower than correlated matching's.

## Why it matters
Decoding accuracy translates directly into how many physical qubits a fault-tolerant computer needs for a given logical error rate. Learned decoders had been proposed for years, but this is the first to beat the strongest classical decoders on real hardware data rather than on idealised noise, and it did so while learning the processor's actual noise structure (cross-talk, leakage, correlated errors) from data instead of requiring it to be modelled by hand. It marks decoding as a problem where machine learning is now competitive with the best specialised algorithms.

The honest framing, from the paper itself: superconducting qubits need a decoder throughput of about 1 µs per round, and AlphaQubit is not there. The Nature paper says improving throughput "remains an important goal", and DeepMind's blog states plainly that it is "still too slow to correct errors in a superconducting processor in real time". Training also became harder at the largest distances tested.

## Sources — the record of the discovery
- [Nature paper: "Learning high-accuracy error decoding for quantum processors", Nature 635, 834–840 (2024)](https://www.nature.com/articles/s41586-024-08148-8)
- [Google DeepMind blog: "AlphaQubit tackles one of quantum computing's biggest challenges" (20 November 2024)](https://blog.google/innovation-and-ai/models-and-research/google-deepmind/alphaqubit-quantum-error-correction/)
- [Phys.org: "Google DeepMind develops an AI-based decoder that identifies quantum computing errors" (25 November 2024)](https://phys.org/news/2024-11-google-deepmind-ai-based-decoder.html)

---
*In this folder: **[PROMPT.md](./PROMPT.md)** (a prompt to explore it with AI) · **[CONTEXT.md](./CONTEXT.md)** (background & caveats). Part of the [AI Hall of Fame](../../README.md) → [⚛️ Physics](../).*
