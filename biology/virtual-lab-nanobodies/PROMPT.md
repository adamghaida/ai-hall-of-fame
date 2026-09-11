# 🤖 Explore this with AI: the Virtual Lab of AI agents

Paste the prompt below into your favorite AI assistant (Claude, ChatGPT, Gemini, or a local model). If your assistant can browse the web, tell it to read the sources first. The point is a clear, honest, grounded explanation of what happened and why it mattered.

> An LLM principal investigator assembled a team of LLM specialists, ran meetings, wrote a three-tool design pipeline, and produced 92 nanobody candidates. Two bound recent SARS-CoV-2 variants better than the molecules they came from.

---

```text
You are a careful, hype-free explainer of AI-in-science results, and you are alert to the difference between what a system did and what a press summary says it did.

Topic: "The Virtual Lab of AI agents designs new SARS-CoV-2 nanobodies", Kyle Swanson, Wesley Wu, Nash L. Bulaong, John E. Pak and James Zou (Stanford and Chan Zuckerberg Biohub SF). Nature, 29 July 2025, DOI 10.1038/s41586-025-09442-9, Nature volume 646.

Please cover, in plain language a curious non-expert can follow:
1. What a nanobody is: the single variable domain of a camelid heavy-chain-only antibody, about a tenth the mass of a conventional antibody, stable and cheap to express. Explain why several good anti-SARS-CoV-2 nanobodies already existed by 2020.
2. The Virtual Lab's structure, precisely. A human defines a Principal Investigator agent and a Scientific Critic agent by specifying title, expertise, goal and role. The PI assembles the team, here an Immunologist, a Machine Learning Specialist and a Computational Biologist. Work runs through TEAM meetings (all agents debate an agenda) and INDIVIDUAL meetings (one agent works a task with critic feedback). The released code uses gpt-4o-2024-08-06, with five iterations and three rounds per meeting. Be clear about exactly which parts the human did.
3. What the agents actually decided:
   - To modify EXISTING nanobodies rather than design new ones.
   - To use ESM (protein language model, scoring mutations by log-likelihood ratio), AlphaFold-Multimer (predicting the mutant nanobody bound to the KP.3 spike RBD, using interface pLDDT as a binding-confidence metric), and Rosetta (binding energy from the predicted structure after relaxation).
   - To rank designs by WS = 0.2*(ESM LLR) + 0.5*(AF ipLDDT) - 0.3*(Rosetta dG), over four rounds of mutation.
   Explain each tool and what the weighted score is really doing.
4. The output: 92 mutant nanobodies, 23 each from Ty1, H11-D4, Nb21 and VHH-72, each with ONE TO FOUR mutations relative to its parent. Tested by ELISA against spike RBD from Wuhan, JN.1, KP.3, KP2.3 and BA.2, with BSA as negative control. Two nanobodies showed improved binding to JN.1 or KP.3 while keeping strong binding to the ancestral spike.
5. Now the critical part. Assess how much of this is "AI did science":
   - These are point mutants of published nanobodies, not de novo designs. How much weaker is that claim?
   - ESM, AlphaFold-Multimer and Rosetta are the obvious tool choices for this problem. Did the agents show insight, or competent convention?
   - Where did the 0.2 / 0.5 / -0.3 weights come from, and is there evidence they are good?
   - Two hits out of 92, measured by ELISA binding to recombinant RBD. What does that NOT tell you about neutralization or therapy?
   - The human wrote the PI and Critic specs, set agendas, gave feedback between meetings, and ran the wet lab. Restate the result with the human contribution properly included.
6. What is genuinely novel here regardless of the above, and why publishing the full agent meeting transcripts matters for evaluating agentic science claims.
7. The authors' own stated limitations, including LLM knowledge cutoffs and the need for human oversight.

Ground your answer in these sources (read them if you can, and cite them as you go):
- Nature paper: https://www.nature.com/articles/s41586-025-09442-9
- Code, transcripts and raw data: https://github.com/zou-group/virtual-lab
- Nanobody design subproject: https://github.com/zou-group/virtual-lab/blob/main/nanobody_design/README.md
- Preprint: https://www.biorxiv.org/content/10.1101/2024.11.11.623004v1

Be concrete, always distinguish what the agents did from what the humans did, and if you are unsure about a detail, say so instead of guessing.
```

## Have the agent verify it

This entry is unusually easy to check, because the authors released the **raw ELISA plate readings** along with the code. The script below pulls the four data files and reconstructs the basic counts, so you can confirm the 92-design figure and look at the actual binding signal instead of the summary.

```python
import urllib.request

BASE = ("https://raw.githubusercontent.com/zou-group/virtual-lab/main/"
        "nanobody_design/experimental_data/")
PARENTS = ["Ty1", "H11-D4", "Nb21", "VHH-72"]

total = 0
for parent in PARENTS:
    txt = urllib.request.urlopen(BASE + parent + ".txt").read().decode("utf-8-sig")
    rows = [l.split("\t") for l in txt.splitlines() if l.strip()]
    header, data = [c for c in rows[0] if c.strip()], rows[1:]
    total += len(data)
    print(f"{parent}: {len(data)} wells, antigens {header}")
print("\ntotal wells:", total, "= 92 designs + 4 wild types")
```

Expected output: **24 wells for each of the four parents, 96 in total**, with antigen columns `Wuhan, JN.1, KP.3, KP2.3, BA.2, BSA`. That reproduces the paper's arithmetic (23 mutants × 4 parents = 92, plus the 4 wild types) from the released data rather than from the abstract.

Then have the agent do something the summary cannot do for you:

```
1. Download the four ELISA files under
   https://github.com/zou-group/virtual-lab/tree/main/nanobody_design/experimental_data
   and, for each well, compare the JN.1 and KP.3 signal against the BSA negative control in the
   same row. How many designs show a meaningful signal on JN.1 or KP.3? How does that compare to
   the wild-type row for the same parent? Be explicit about the threshold you choose and why.
2. Read the agent meeting transcripts under nanobody_design/discussions. Find where the team
   decided to mutate existing nanobodies rather than design de novo, and where the 0.2 / 0.5 /
   -0.3 weights were set. Quote the reasoning and say whether you find it sound.
3. Look at nanobody_design/ablations.ipynb. What do the ablations test, and do they support the
   claim that the multi-agent structure (rather than a single LLM) was necessary?
4. Search for any independent group that has reproduced the Virtual Lab structure on a different
   research problem. Report honestly if you find none.
```

---

## Sources
- [Nature: "The Virtual Lab of AI agents designs new SARS-CoV-2 nanobodies"](https://www.nature.com/articles/s41586-025-09442-9)
- [zou-group/virtual-lab: code, agent transcripts, sequences and raw ELISA data](https://github.com/zou-group/virtual-lab)
- [The nanobody design subproject](https://github.com/zou-group/virtual-lab/blob/main/nanobody_design/README.md)
- [bioRxiv preprint (November 2024)](https://www.biorxiv.org/content/10.1101/2024.11.11.623004v1)

---
*Back to **[README.md](./README.md)** · **[CONTEXT.md](./CONTEXT.md)**.*
