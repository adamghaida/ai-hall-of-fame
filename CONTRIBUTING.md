# Contributing to the AI Hall of Fame

Thanks for helping grow this collection! The goal is a **trustworthy, well-sourced** record of remarkable AI achievements. Quality and accuracy matter far more than quantity.

## What belongs here

An entry should be:

- **Documented** — backed by a peer-reviewed paper, an official research release, or credible journalism. Every entry **must** include at least one source link.
- **Concrete** — a specific, verifiable result (a record broken, an open problem solved, a first-of-its-kind, a real deployment). Not "AI is revolutionizing X."
- **Notable** — genuinely significant within its field.

When in doubt, prefer the primary source (the paper or the lab's own announcement) over secondary reporting.

## The entry structure (required)

Each case is a **folder** inside a field, containing **exactly these three files**:

| File | Required content |
|------|------------------|
| **`README.md`** | A `#` title; a `**Field:**` / `**When:**` line; `## What happened`; `## Why it matters`; a `## Sources` section with **≥ 1 http(s) link**. This is the canonical record. |
| **`PROMPT.md`** | A copy-paste **prompt that gets an AI assistant to explain the discovery**, grounded in the sources (which are listed with **≥ 1 http(s) link**). If the result is a concrete, checkable object (a formula, an algorithm), add a "have the agent verify it" snippet too. Regenerate/format it like the other entries. |
| **`CONTEXT.md`** | Deeper background, the people involved, and **honest caveats** (contested results, corrections, proof-of-concept status), plus a `## Sources` section. |

> Start by copying the skeleton in [`.github/ENTRY_TEMPLATE/`](./.github/ENTRY_TEMPLATE) — it has all three files pre-structured. Or copy an existing entry folder.

## How to add an entry

1. Find the right field folder (e.g. `mathematics/`, `medicine/`). If no field fits, [open a "new field" issue](./.github/ISSUE_TEMPLATE/new-entry.yml) first.
2. Create a folder named with a short kebab-case slug (e.g. `alphafold-protein-structure/`) and add the three files above.
3. Add a row for your entry to the field's index `README.md` table (**every entry must be linked from its field index** — the validator enforces this).
4. If the achievement spans multiple fields, put the **full folder in the most fitting field** and add a cross-reference row ("Also relevant") in the other field's index.
5. Update the counts/badges in the root [README.md](./README.md) if needed.
6. The website rebuilds itself from the entry folders on merge. If it belongs among the few dozen items on the home-page timeline, also add it to the curated timeline in [`site/data/timeline.json`](./site/data/timeline.json).

## Rules (enforced by CI)

Every pull request runs [`scripts/validate_entries.py`](./scripts/validate_entries.py). **A PR that fails validation will not be merged.** Run it yourself first:

```bash
python3 scripts/validate_entries.py
```

It fails (errors) if any of these are true:

- An entry folder is missing `README.md`, `PROMPT.md`, or `CONTEXT.md`.
- A `README.md` is missing a required marker (`**Field:**`, `**When:**`, `## What happened`, `## Why it matters`, `## Sources`).
- Any of the three files has **no source link**.
- An entry is **not linked** from its field's index README.
- Any **relative markdown link is broken** (points at a file/folder that doesn't exist).

It warns (non-blocking) if a `PROMPT.md` has no obvious sources/code section.

## Style & quality bar

- **Documented, concrete, notable** — a specific verifiable result, not "AI is revolutionizing X". Prefer the primary source (paper / lab announcement) over secondary reporting.
- **Factual and hype-free.** Note caveats honestly (e.g. "not yet peer-reviewed", "retrospective only", "contested"). We include contested/corrected results — but only when the entry says so.
- **Never invent or overstate.** If AI hasn't actually done something, it doesn't get an entry. (See the root README note on the Jacobian conjecture for how we handle "not yet → done".)
- Use the primary source's own numbers and dates. Keep entries concise.

## Pull requests

Open your PR against `main`. The [pull request template](./.github/PULL_REQUEST_TEMPLATE.md) has the full checklist; fill it in. In short, a mergeable entry PR:

1. Adds one entry folder with all three files + a cited source.
2. Links the entry from its field index.
3. Passes `python3 scripts/validate_entries.py` locally and in CI. ✅

## Corrections

Found an error, broken link, or outdated claim? [Open a correction issue](./.github/ISSUE_TEMPLATE/correction.yml) or send a PR. Accuracy is the entire point of this project.
