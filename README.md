<div align="center">

# 🏛️ AI Hall of Fame

### A curated collection of documented cases where artificial intelligence did something genuinely *remarkable*.

<br>

[![Stars](https://shieldcn.dev/github/adamghaida/ai-hall-of-fame/stars.svg)](https://github.com/adamghaida/ai-hall-of-fame/stargazers)
[![Forks](https://shieldcn.dev/github/adamghaida/ai-hall-of-fame/forks.svg)](https://github.com/adamghaida/ai-hall-of-fame/network/members)
[![Contributors](https://shieldcn.dev/github/adamghaida/ai-hall-of-fame/contributors.svg)](https://github.com/adamghaida/ai-hall-of-fame/graphs/contributors)
[![Last commit](https://shieldcn.dev/github/adamghaida/ai-hall-of-fame/last-commit.svg)](https://github.com/adamghaida/ai-hall-of-fame/commits/main)
[![Issues](https://shieldcn.dev/github/adamghaida/ai-hall-of-fame/issues.svg)](https://github.com/adamghaida/ai-hall-of-fame/issues)
[![Views](https://shieldcn.dev/views/repo/adamghaida/ai-hall-of-fame.svg)](https://github.com/adamghaida/ai-hall-of-fame)

![13 fields](https://shieldcn.dev/badge/13_fields.svg)
![134 cases](https://shieldcn.dev/badge/134_cases.svg)
![every entry cited](https://shieldcn.dev/badge/every_entry_cited.svg)
![reproducible](https://shieldcn.dev/badge/reproducible.svg)
[![PRs welcome](https://shieldcn.dev/badge/PRs_welcome.svg)](./CONTRIBUTING.md)
[![CC BY 4.0](https://shieldcn.dev/badge/CC_BY_4.0.svg)](./LICENSE)

</div>

---

## 📖 What is this?

Every so often, an AI system doesn't just automate a task. It **discovers something new about the world**, beats a record that stood for half a century, or restores an ability someone thought they'd lost forever.

This repository collects those moments, organized by field. **Every case gets its own folder** with three files:

| File | What's in it |
|------|--------------|
| 📄 **`README.md`** | What happened, when, why it matters, plus **links to the primary sources** (the record of the discovery). |
| 🤖 **`PROMPT.md`** | **A copy-paste prompt** that gets an AI assistant to explain the discovery, grounded in the sources. |
| 📚 **`CONTEXT.md`** | Deeper background, the people involved, and the **honest caveats**. |

The bar for inclusion is high:

- ✅ **Documented**: backed by a peer-reviewed paper, official research release, or credible reporting.
- ✅ **Concrete**: a specific result, not a vague "AI is transforming X" claim.
- ✅ **Notable**: a record broken, an open problem cracked, a first-of-its-kind, or a real-world deployment.
- ✅ **Honest**: where a result was contested, corrected, or is only a proof-of-concept, we say so.

> **A note on what's *not* here:** we don't include things AI hasn't actually done. The **Riemann hypothesis** and **P vs NP**, for instance, remain unsolved by humans and AI alike, so there's no entry claiming otherwise. (The **Jacobian conjecture** was on this "not yet" list too, until July 2026, when an AI-assisted counterexample disproved it for n ≥ 3. It now has [its own entry](./mathematics/jacobian-conjecture-counterexample/). This list tracks reality, and reality moves fast.)

---

## 🌐 The website

The collection is also a website: **[hof.adam.cm](https://hof.adam.cm/)**. The home page is a timeline of 36 selected moments, drawn to scale. The explore page lists every case, filterable by field. Each case has its own page with the entry, the caveats, and the prompt.

The site is generated from the entry folders by [`scripts/build_site.py`](./scripts/build_site.py) and deployed by GitHub Actions on every push to `main`, so adding an entry here adds it to the site. The timeline itself is hand-curated in [`site/data/timeline.json`](./site/data/timeline.json). To preview locally:

```bash
python3 scripts/build_site.py && python3 -m http.server 8765 --directory site
```

---

## 🗂️ Explore by field

| Field | Cases | A highlight |
|-------|:-----:|-------------|
| [🧮 Mathematics](./mathematics/) | 24 | A **Millennium Prize blowup proof** (forced case, unverified), the **Jacobian conjecture** disproved, an 80-year-old **Erdős conjecture** refuted, and a perfect 42/42 at the IMO |
| [⚛️ Physics](./physics/) | 7 | AI controlled **real fusion plasma** inside a tokamak reactor and quieted **LIGO's noisiest feedback loop** |
| [🧪 Chemistry](./chemistry/) | 6 | AlphaFold's protein folding won a **Nobel Prize**; generative AI designed **antibiotics that clear MRSA** in mice |
| [🧬 Biology](./biology/) | 15 | Generative AI **designs brand-new proteins** from scratch, including the first AI-generated **gene editor** used in human cells |
| [🩺 Medicine](./medicine/) | 10 | AI **restores speech** after paralysis; the first **randomised trial** of AI mammography screening on 105,934 women |
| [💻 Computer Science](./computer-science/) | 8 | An AI-found sorting algorithm ships in the **C++ standard library**; a perfect **12/12 at the ICPC World Finals** |
| [🛡️ Cybersecurity](./cybersecurity/) | 10 | **10,000+ vulnerabilities** found across the software everyone runs; a NIST post-quantum candidate withdrawn |
| [🔬 Materials Science](./materials-science/) | 4 | **2.2 million** new crystals discovered in one effort |
| [🔭 Astronomy](./astronomy/) | 6 | A neural net found a **hidden 8th planet** in Kepler data; **118 new planets** validated from TESS |
| [🌍 Climate & Earth Science](./climate-and-earth-science/) | 10 | AI weather models **beat the world's best** supercomputer forecasts, and now run **operationally** at ECMWF and NOAA |
| [🧠 Neuroscience](./neuroscience/) | 7 | The **first complete wiring map** of an adult brain; **inner speech decoded** with a mental password |
| [♟️ Games & Strategy](./games-and-strategy/) | 17 | "**Move 37**": the moment AI showed genuine creativity, plus Deep Blue, Watson, and a drone that **beat racing champions** |
| [🤖 Robotics](./robotics/) | 10 | **220 million driverless miles** with 94% fewer serious-injury crashes; a humanoid runs 100 m in **8.64 seconds** |

*Some landmark systems (AlphaFold, AlphaTensor, the speech neuroprosthesis, and more) matter to several fields, so each has one full write-up, cross-linked from the others.*

---

## ⭐ Fifteen to start with

New here? These are among the most consequential entries in the collection:

1. **[Navier–Stokes finite-time blowup](./mathematics/navier-stokes-finite-time-blowup/)**: an AI-produced proof for the forced case of a Millennium Prize Problem, Lean-checked, not yet independently verified, September 2026.
2. **[Jacobian conjecture counterexample](./mathematics/jacobian-conjecture-counterexample/)**: an AI-assisted result disproving an 87-year-old conjecture (n ≥ 3), July 2026.
3. **[Erdős's unit distance conjecture disproved](./mathematics/erdos-90-unit-distance-disproof/)**: an 80-year-old conjecture refuted by an OpenAI model, May 2026; Gowers said he would recommend it for Annals.
4. **[Waymo's safety record](./robotics/waymo-220m-miles/)**: 220 million driverless miles with 94% fewer serious-injury crashes than human drivers.
5. **[Deep Blue beats Kasparov](./games-and-strategy/deep-blue-kasparov/)**: 1997, the first win by a computer over a reigning world champion under tournament conditions.
6. **[AlphaFold](./chemistry/alphafold-protein-structure/)**: solved a 50-year grand challenge and won the 2024 Nobel Prize in Chemistry.
7. **[Fusion plasma control](./physics/fusion-plasma-control/)**: reinforcement learning drove a *real* nuclear-fusion reactor.
8. **[FunSearch](./mathematics/funsearch-cap-set/)**: first LLM to produce a verifiable, genuinely new answer to an open math problem.
9. **[AlphaProof](./mathematics/alphaproof-alphageometry-imo-2024/)**: silver-medal mathematics at the International Math Olympiad.
10. **[AlphaDev sorting](./computer-science/alphadev-sorting/)**: an AI-discovered algorithm merged into the C++ standard library.
11. **[Speech neuroprosthesis](./medicine/speech-neuroprosthesis/)**: conversational-speed communication restored after paralysis.
12. **[GNoME](./materials-science/gnome-materials-discovery/)**: 380,000 newly predicted stable materials.
13. **[GraphCast](./climate-and-earth-science/graphcast-weather/)**: 10-day global weather forecasts in under a minute.
14. **[AlphaGo "Move 37"](./games-and-strategy/alphago-move-37/)**: the move that showed AI could be creative.
15. **[RFdiffusion](./biology/rfdiffusion-protein-design/)**: generative design of proteins that don't exist in nature.

---

## 🤝 Contributing

Know of a documented case that belongs here? **Contributions are very welcome.** See [CONTRIBUTING.md](./CONTRIBUTING.md) for the (short) guidelines. In brief:

- Add a folder under the relevant field with `README.md`, `PROMPT.md`, and `CONTEXT.md` (copy an existing entry as a template).
- **Every entry must cite a primary or highly credible source.**
- Keep it factual and hype-free, and note caveats honestly. This collection lives or dies by its trustworthiness.

Not sure which field? Open an issue and we'll figure it out together.

---

## 📜 License

Content is released under [**Creative Commons Attribution 4.0**](./LICENSE), free to share and adapt with attribution. Linked papers, images, and trademarks belong to their respective owners.

<div align="center">
<br>

*Curated with care. If a fact here is wrong or out of date, please open an issue. Accuracy is the whole point.*

</div>
