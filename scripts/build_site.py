#!/usr/bin/env python3
"""
Build the AI Hall of Fame website into site/ from the markdown entries.

    python3 scripts/build_site.py

Reads every <field>/<slug>/{README,CONTEXT,PROMPT}.md, writes:
  site/data/entries.json                 (used by index.html and explore.html)
  site/entries/<field>/<slug>/index.html (one page per case)

Everything else in site/ is hand-written source. No dependencies beyond the
standard library; the markdown converter below covers exactly the subset the
entries use (headings, paragraphs, emphasis, links, lists, quotes, code, tables).
"""
import datetime as _dt
import html
import json
import os
import re
import sys

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SITE = os.path.join(ROOT, "site")
IGNORE_TOP = {".git", ".github", ".claude", "scripts", "site"}
REPO_URL = "https://github.com/adamghaida/ai-hall-of-fame"

MONTHS = ["january", "february", "march", "april", "may", "june", "july",
          "august", "september", "october", "november", "december"]


def read(p):
    with open(p, encoding="utf-8") as f:
        return f.read()


# ----------------------------------------------------------------------------
# Markdown (the subset the entries use)
# ----------------------------------------------------------------------------
_CODE_SPAN = re.compile(r"`([^`]+)`")
_LINK = re.compile(r"\[([^\]]+)\]\(([^)\s]+)(?:\s+\"[^\"]*\")?\)")
_BOLD = re.compile(r"\*\*(.+?)\*\*")
_ITAL = re.compile(r"(?<![\w*])\*(?!\s)(.+?)(?<!\s)\*(?![\w*])")
_ITAL2 = re.compile(r"(?<![\w_])_(?!\s)(.+?)(?<!\s)_(?![\w_])")


def inline(text, link_fn):
    """Render inline markdown. `text` is raw; output is escaped HTML."""
    spans = []

    def stash(m):
        spans.append("<code>%s</code>" % html.escape(m.group(1)))
        return "\x00%d\x00" % (len(spans) - 1)

    text = _CODE_SPAN.sub(stash, text)
    text = html.escape(text, quote=False)

    def link(m):
        label, url = m.group(1), m.group(2)
        href, external = link_fn(url)
        attrs = ' target="_blank" rel="noopener"' if external else ""
        return '<a href="%s"%s>%s</a>' % (html.escape(href, quote=True), attrs, label)

    text = _LINK.sub(link, text)
    text = _BOLD.sub(r"<strong>\1</strong>", text)
    text = _ITAL.sub(r"<em>\1</em>", text)
    text = _ITAL2.sub(r"<em>\1</em>", text)
    text = re.sub("\x00(\\d+)\x00", lambda m: spans[int(m.group(1))], text)
    return text


def md_to_html(src, link_fn):
    src = re.sub(r"<!--.*?-->", "", src, flags=re.S)
    lines = src.split("\n")
    out = []
    i = 0
    n = len(lines)

    def flush_para(buf):
        if buf:
            out.append("<p>%s</p>" % inline(" ".join(s.strip() for s in buf), link_fn))
            buf.clear()

    para = []
    while i < n:
        line = lines[i]
        s = line.strip()

        if s.startswith("```"):
            flush_para(para)
            lang = s[3:].strip()
            j = i + 1
            code = []
            while j < n and not lines[j].strip().startswith("```"):
                code.append(lines[j])
                j += 1
            cls = ' class="lang-%s"' % html.escape(lang) if lang else ""
            out.append("<pre><code%s>%s</code></pre>" % (cls, html.escape("\n".join(code))))
            i = j + 1
            continue

        if not s:
            flush_para(para)
            i += 1
            continue

        m = re.match(r"^(#{1,6})\s+(.*)$", s)
        if m:
            flush_para(para)
            level = len(m.group(1))
            text = m.group(2).strip()
            slug = re.sub(r"[^a-z0-9]+", "-", re.sub(r"<[^>]+>", "", text).lower()).strip("-")
            out.append('<h%d id="%s">%s</h%d>' % (level, slug, inline(text, link_fn), level))
            i += 1
            continue

        if re.match(r"^(-{3,}|\*{3,}|_{3,})$", s):
            flush_para(para)
            out.append("<hr>")
            i += 1
            continue

        if s.startswith(">"):
            flush_para(para)
            buf = []
            while i < n and lines[i].strip().startswith(">"):
                buf.append(re.sub(r"^>\s?", "", lines[i].strip()))
                i += 1
            out.append("<blockquote>%s</blockquote>" % md_to_html("\n".join(buf), link_fn))
            continue

        if s.startswith("|"):
            flush_para(para)
            rows = []
            while i < n and lines[i].strip().startswith("|"):
                rows.append(lines[i].strip())
                i += 1
            cells = [[c.strip() for c in r.strip("|").split("|")] for r in rows]
            if len(cells) >= 2 and all(re.match(r"^:?-+:?$", c) for c in cells[1]):
                head, body = cells[0], cells[2:]
            else:
                head, body = None, cells
            t = ['<div class="table-wrap"><table>']
            if head:
                t.append("<thead><tr>%s</tr></thead>" % "".join("<th>%s</th>" % inline(c, link_fn) for c in head))
            t.append("<tbody>")
            for r in body:
                t.append("<tr>%s</tr>" % "".join("<td>%s</td>" % inline(c, link_fn) for c in r))
            t.append("</tbody></table></div>")
            out.append("".join(t))
            continue

        m = re.match(r"^(\s*)([-*+]|\d+[.)])\s+(.*)$", line)
        if m:
            flush_para(para)
            ordered = m.group(2)[0].isdigit()
            tag = "ol" if ordered else "ul"
            items = []
            while i < n:
                mm = re.match(r"^(\s*)([-*+]|\d+[.)])\s+(.*)$", lines[i])
                if mm and (mm.group(2)[0].isdigit()) == ordered:
                    items.append(mm.group(3))
                    i += 1
                elif lines[i].startswith(("  ", "\t")) and lines[i].strip() and items:
                    items[-1] += " " + lines[i].strip()
                    i += 1
                else:
                    break
            out.append("<%s>%s</%s>" % (tag, "".join("<li>%s</li>" % inline(it, link_fn) for it in items), tag))
            continue

        para.append(line)
        i += 1
    flush_para(para)
    return "\n".join(out)


# ----------------------------------------------------------------------------
# Entry parsing
# ----------------------------------------------------------------------------
def parse_when(when):
    """'July 2024 · Nature (2025)' -> ('2024-07', 'Nature (2025)')"""
    venue = ""
    if "·" in when:
        when_part, venue = [x.strip() for x in when.split("·", 1)]
    else:
        when_part = when.strip()
    years = re.findall(r"(19|20)\d{2}", when_part)
    year = int(re.search(r"(19|20)\d{2}", when_part).group(0)) if years else 0
    month = 0
    low = when_part.lower()
    for k, name in enumerate(MONTHS, 1):
        if name in low:
            month = k
            break
    sort = "%04d-%02d" % (year, month if month else 6)
    return sort, venue


def parse_field_index(path):
    t = read(path)
    m = re.search(r"^#\s+(\S+)\s+(.+)$", t, re.M)
    emoji, name = (m.group(1), m.group(2).strip()) if m else ("", os.path.basename(os.path.dirname(path)))
    desc = ""
    for para in t.split("\n\n")[1:]:
        p = para.strip()
        if p and not p.startswith(("|", "#", "*", "-", "<")):
            desc = p
            break
    return emoji, name, desc


def split_readme(t):
    """Return (title, when, hook, body_md, sources[list of (label,url)])."""
    title = re.search(r"^#\s+(.+)$", t, re.M).group(1).strip()
    when_m = re.search(r"\*\*When:\*\*\s*(.+?)\s*$", t, re.M)
    when = when_m.group(1).strip() if when_m else ""
    hook_m = re.search(r"^>\s*(.+)$", t, re.M)
    hook = hook_m.group(1).strip() if hook_m else ""
    body = []
    seen_title = seen_hook = False
    for line in t.split("\n"):
        s = line.strip()
        if not seen_title and s.startswith("# "):
            seen_title = True
            continue
        if s.startswith("**Field:**"):
            continue
        if not seen_hook and s.startswith(">"):
            seen_hook = True
            continue
        if s.startswith("*In this folder") or s.startswith("*Back to"):
            continue
        body.append(line)
    body_md = "\n".join(body).strip()
    # the Sources section is rendered separately as a table on the page
    body_md = re.split(r"^##\s+Sources.*$", body_md, maxsplit=1, flags=re.M)[0].strip()
    body_md = re.sub(r"\n-{3,}\s*$", "", body_md)
    sources = []
    sm = re.search(r"^##\s+Sources.*?$", t, re.M)
    if sm:
        for lab, url in _LINK.findall(t[sm.end():]):
            if url.startswith("http"):
                sources.append({"label": lab, "url": url})
    return title, when, hook, body_md, sources


def strip_generic(t):
    """CONTEXT/PROMPT: drop the H1 and the back-links footer."""
    out = []
    seen_title = False
    for line in t.split("\n"):
        s = line.strip()
        if not seen_title and s.startswith("# "):
            seen_title = True
            continue
        if s.startswith("*Back to") or s.startswith("*In this folder"):
            continue
        out.append(line)
    body = "\n".join(out).strip()
    return re.sub(r"\n-{3,}\s*$", "", body)


def make_link_fn(field, slug, entry_ids, rel_root):
    """Rewrite relative markdown links into site links; externals unchanged."""
    def fn(url):
        if url.startswith(("http://", "https://", "mailto:")):
            return url, True
        if url.startswith("#"):
            return url, False
        frag = ""
        if "#" in url:
            url, frag = url.split("#", 1)
            frag = "#" + frag
        base = os.path.join(field, slug)
        target = os.path.normpath(os.path.join(base, url))
        parts = target.split(os.sep)
        # ./CONTEXT.md etc -> same page
        if len(parts) == 3 and parts[0] == field and parts[1] == slug:
            name = parts[2].lower()
            anchor = {"readme.md": "#record", "context.md": "#context", "prompt.md": "#prompt"}.get(name)
            if anchor:
                return anchor, False
        if len(parts) >= 2 and "/".join(parts[:2]) in entry_ids:
            return "%sentries/%s/%s/%s" % (rel_root, parts[0], parts[1], frag), False
        if len(parts) == 1 and parts[0] in FIELD_SLUGS or (len(parts) == 2 and parts[1].lower() == "readme.md" and parts[0] in FIELD_SLUGS):
            return "%sexplore.html?field=%s" % (rel_root, parts[0]), False
        if target in ("README.md", ".") or target == "":
            return rel_root or "./", False
        if target.upper() == "CONTRIBUTING.MD":
            return REPO_URL + "/blob/main/CONTRIBUTING.md", True
        return "%s/blob/main/%s" % (REPO_URL, target), True
    return fn


FIELD_SLUGS = set()


def main():
    fields = []
    entries = []
    for name in sorted(os.listdir(ROOT)):
        d = os.path.join(ROOT, name)
        if not os.path.isdir(d) or name in IGNORE_TOP or name.startswith("."):
            continue
        idx = os.path.join(d, "README.md")
        if not os.path.isfile(idx):
            continue
        FIELD_SLUGS.add(name)
        emoji, fname, desc = parse_field_index(idx)
        count = 0
        for slug in sorted(os.listdir(d)):
            ed = os.path.join(d, slug)
            if not os.path.isdir(ed) or not os.path.isfile(os.path.join(ed, "README.md")):
                continue
            count += 1
            readme = read(os.path.join(ed, "README.md"))
            title, when, hook, body_md, sources = split_readme(readme)
            sort, venue = parse_when(when)
            ctx_p, pr_p = os.path.join(ed, "CONTEXT.md"), os.path.join(ed, "PROMPT.md")
            entries.append({
                "id": "%s/%s" % (name, slug),
                "field": name, "slug": slug,
                "fieldName": fname, "emoji": emoji,
                "title": title, "when": when, "date": sort, "venue": venue,
                "hook": hook, "sources": sources,
                "url": "entries/%s/%s/" % (name, slug),
                "_body": body_md,
                "_context": strip_generic(read(ctx_p)) if os.path.isfile(ctx_p) else "",
                "_prompt": strip_generic(read(pr_p)) if os.path.isfile(pr_p) else "",
            })
        fields.append({"slug": name, "emoji": emoji, "name": fname, "description": desc, "count": count})

    entry_ids = {e["id"] for e in entries}
    by_field = {}
    for e in entries:
        by_field.setdefault(e["field"], []).append(e)
    for lst in by_field.values():
        lst.sort(key=lambda e: e["date"], reverse=True)

    template = read(os.path.join(SITE, "templates", "entry.html"))
    for e in entries:
        rel_root = "../../../"
        link_fn = make_link_fn(e["field"], e["slug"], entry_ids, rel_root)
        body_html = md_to_html(e["_body"], link_fn)
        context_html = md_to_html(e["_context"], link_fn) if e["_context"] else "<p>No context file.</p>"
        prompt_html = md_to_html(e["_prompt"], link_fn) if e["_prompt"] else "<p>No prompt file.</p>"
        more = [x for x in by_field[e["field"]] if x["id"] != e["id"]][:4]
        more_html = "".join(
            '<li><span class="w">%s</span><a href="%s%s">%s</a></li>'
            % (html.escape(x["when"].split("·")[0].strip()), rel_root, x["url"], html.escape(x["title"])) for x in more)
        src_html = "".join('<tr><td><a href="%s" target="_blank" rel="noopener">%s</a></td><td class="dom">%s</td></tr>'
                           % (html.escape(s["url"], quote=True), html.escape(s["label"]),
                              html.escape(re.sub(r"^https?://(www\.)?", "", s["url"]).split("/")[0]))
                           for s in e["sources"])
        page = template
        for k, v in {
            "title": html.escape(e["title"]),
            "title_attr": html.escape(e["title"], quote=True),
            "hook": inline(e["hook"], link_fn),
            "hook_plain": html.escape(re.sub(r"[*_`]", "", e["hook"]), quote=True),
            "field": e["field"], "field_name": html.escape(e["fieldName"]), "emoji": e["emoji"],
            "when": html.escape(e["when"]),
            "body": body_html, "context": context_html, "prompt": prompt_html,
            "sources": src_html, "more": more_html,
            "root": rel_root,
            "repo_dir": "%s/tree/main/%s/%s" % (REPO_URL, e["field"], e["slug"]),
            "canonical_path": e["url"],
        }.items():
            page = page.replace("{{%s}}" % k, v)
        outd = os.path.join(SITE, "entries", e["field"], e["slug"])
        os.makedirs(outd, exist_ok=True)
        with open(os.path.join(outd, "index.html"), "w", encoding="utf-8") as f:
            f.write(page)

    public = [{k: v for k, v in e.items() if not k.startswith("_")} for e in entries]
    public.sort(key=lambda e: e["date"], reverse=True)
    os.makedirs(os.path.join(SITE, "data"), exist_ok=True)
    with open(os.path.join(SITE, "data", "entries.json"), "w", encoding="utf-8") as f:
        json.dump({"generated": _dt.date.today().isoformat(), "fields": fields, "entries": public},
                  f, ensure_ascii=False, indent=1)
    print("Built %d entry pages across %d fields -> site/" % (len(entries), len(fields)))
    return 0


if __name__ == "__main__":
    sys.exit(main())
