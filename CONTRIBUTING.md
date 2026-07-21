# Contributing to the AI Hall of Fame

Thanks for helping grow this collection! The goal is a **trustworthy, well-sourced** record of remarkable AI achievements. Quality and accuracy matter far more than quantity.

## What belongs here

An entry should be:

- **Documented** — backed by a peer-reviewed paper, an official research release, or credible journalism. Every entry **must** include at least one source link.
- **Concrete** — a specific, verifiable result (a record broken, an open problem solved, a first-of-its-kind, a real deployment). Not "AI is revolutionizing X."
- **Notable** — genuinely significant within its field.

When in doubt, prefer the primary source (the paper or the lab's own announcement) over secondary reporting.

## How to add an entry

Each case is a **folder** inside a field, containing three files. The easiest path is to copy an existing entry folder and edit it.

1. Find the right field folder (e.g. `mathematics/`, `medicine/`). If no field fits, open an issue to propose a new one.
2. Create a new folder named with a short kebab-case slug (e.g. `alphafold-protein-structure/`) containing:
   - **`README.md`** — the discovery: what happened, when (date + venue), why it matters, and a **Sources** section. This is the canonical record.
   - **`PROMPT.md`** — how to recreate it: code repos, datasets, models, and the actual prompt/method where one exists. Be honest when something isn't fully reproducible (proprietary weights, required hardware) and point to open reimplementations.
   - **`CONTEXT.md`** — deeper background, the people involved, and honest caveats (contested results, corrections, proof-of-concept status).
3. Add a row for your entry to the field's index `README.md` table.
4. If the achievement spans multiple fields, put the **full folder in the most fitting field** and add a cross-reference row ("Also relevant") in the other field's index.
5. Update the counts/badges in the root [README.md](./README.md) if needed.

## Style

- Be factual and hype-free. Note caveats honestly (e.g. "not yet clinically deployed").
- Keep entries concise — a few bullets, not an essay.
- Use the primary source's own numbers and dates.

## Corrections

Found an error or outdated claim? Please open an issue or PR. Accuracy is the entire point of this project.
