#!/usr/bin/env python3
"""
Validate AI Hall of Fame entries against the repo's contribution rules.

Run locally before opening a PR:

    python3 scripts/validate_entries.py

Exit code 0 = all good, 1 = one or more errors. Warnings never fail the build
but should be addressed. CI runs this on every pull request.

Rules enforced (errors):
  1. Each field (top-level dir) has an index README.md.
  2. Each entry folder contains README.md, PROMPT.md, and CONTEXT.md.
  3. README.md contains: **Field:**, **When:**, "## What happened",
     "## Why it matters", a "## Sources" section, and >= 1 http(s) source link.
  4. PROMPT.md links to at least one source/repo.
  5. CONTEXT.md cites at least one source.
  6. Every entry is linked from its field's index README table.
  7. No broken *relative* markdown links anywhere in fields / root README / CONTRIBUTING.

Warnings (non-fatal):
  - PROMPT.md has no obvious sources/code section.
"""
import os
import re
import sys

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
IGNORE_TOP = {".git", ".github", "scripts"}
REQUIRED_FILES = ["README.md", "PROMPT.md", "CONTEXT.md"]
README_MARKERS = ["**Field:**", "**When:**", "## What happened", "## Why it matters", "## Sources"]
LINK_RE = re.compile(r"\[[^\]]*\]\(([^)]+)\)")

errors = []
warnings = []


def rel(p):
    return os.path.relpath(p, ROOT)


def read(p):
    with open(p, encoding="utf-8") as f:
        return f.read()


def has_http(text):
    return "http://" in text or "https://" in text


def check_readme(path):
    t = read(path)
    for marker in README_MARKERS:
        if marker not in t:
            errors.append(f'{rel(path)}: missing required marker "{marker}"')
    if not has_http(t):
        errors.append(f"{rel(path)}: must cite at least one source (no http link found)")


def check_prompt(path):
    t = read(path)
    if not has_http(t):
        errors.append(f"{rel(path)}: PROMPT.md must link to at least one source or code repo")
    if "source" not in t.lower() and "code" not in t.lower():
        warnings.append(f"{rel(path)}: PROMPT.md should include a sources/code section")


def check_context(path):
    t = read(path)
    if not has_http(t):
        errors.append(f"{rel(path)}: CONTEXT.md must cite at least one source")


def check_links(path):
    t = read(path)
    base = os.path.dirname(path)
    for target in LINK_RE.findall(t):
        target = target.strip()
        # strip an optional link title: [x](url "title")
        if " " in target and not target.lower().startswith("http"):
            target = target.split(" ", 1)[0]
        if target.startswith(("http://", "https://", "mailto:", "#")):
            continue
        target = target.split("#", 1)[0]
        if not target:
            continue
        resolved = os.path.normpath(os.path.join(base, target))
        if not os.path.exists(resolved):
            errors.append(f"{rel(path)}: broken relative link -> {target}")


def main():
    fields = [
        name
        for name in sorted(os.listdir(ROOT))
        if os.path.isdir(os.path.join(ROOT, name)) and name not in IGNORE_TOP and not name.startswith(".")
    ]

    total_entries = 0
    for field in fields:
        fdir = os.path.join(ROOT, field)
        findex = os.path.join(fdir, "README.md")
        if not os.path.isfile(findex):
            errors.append(f"{field}/: missing field index README.md")
            continue
        index_text = read(findex)

        for slug in sorted(os.listdir(fdir)):
            edir = os.path.join(fdir, slug)
            if not os.path.isdir(edir):
                continue
            total_entries += 1

            for rf in REQUIRED_FILES:
                if not os.path.isfile(os.path.join(edir, rf)):
                    errors.append(f"{field}/{slug}/: missing required file {rf}")

            readme = os.path.join(edir, "README.md")
            prompt = os.path.join(edir, "PROMPT.md")
            context = os.path.join(edir, "CONTEXT.md")
            if os.path.isfile(readme):
                check_readme(readme)
            if os.path.isfile(prompt):
                check_prompt(prompt)
            if os.path.isfile(context):
                check_context(context)

            if f"./{slug}/" not in index_text and f"]({slug}/" not in index_text:
                errors.append(f"{field}/README.md: entry '{slug}' is not linked from the field index")

    # relative-link integrity across root docs + all field markdown
    scan = [os.path.join(ROOT, "README.md"), os.path.join(ROOT, "CONTRIBUTING.md")]
    for field in fields:
        for dirpath, _, files in os.walk(os.path.join(ROOT, field)):
            scan += [os.path.join(dirpath, fn) for fn in files if fn.endswith(".md")]
    for p in scan:
        if os.path.isfile(p):
            check_links(p)

    print(f"Scanned {len(fields)} fields, {total_entries} entries.")
    if warnings:
        print(f"\n{len(warnings)} warning(s):")
        for w in warnings:
            print("  ⚠️ ", w)
    if errors:
        print(f"\n{len(errors)} error(s):")
        for e in errors:
            print("  ✗ ", e)
        print("\n❌ Validation failed. See rules in CONTRIBUTING.md.")
        return 1
    print("\n✅ All entries valid.")
    return 0


if __name__ == "__main__":
    sys.exit(main())
