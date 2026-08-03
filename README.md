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
![67 cases](https://shieldcn.dev/badge/67_cases.svg)
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

## 🗂️ Explore by field

| Field | Cases | A highlight |
|-------|:-----:|-------------|
| [🧮 Mathematics](./mathematics/) | 15 | AI helped **disprove the 87-year-old Jacobian conjecture**, won **IMO gold**, and reportedly scored a perfect 42/42 |
| [⚛️ Physics](./physics/) | 3 | AI controlled **real fusion plasma** inside a tokamak reactor |
| [🧪 Chemistry](./chemistry/) | 4 | AlphaFold's protein folding won a **Nobel Prize** |
| [🧬 Biology](./biology/) | 7 | Generative AI **designs brand-new proteins** from scratch |
| [🩺 Medicine](./medicine/) | 7 | AI **restores speech** after paralysis, at home for two years; an AI-designed drug reaches trials |
| [💻 Computer Science](./computer-science/) | 3 | An AI-found sorting algorithm ships in the **C++ standard library** |
| [🛡️ Cybersecurity](./cybersecurity/) | 3 | An AI-found attack got a **NIST post-quantum candidate withdrawn** |
| [🔬 Materials Science](./materials-science/) | 4 | **2.2 million** new crystals discovered in one effort |
| [🔭 Astronomy](./astronomy/) | 3 | A neural net found a **hidden 8th planet** in Kepler data |
| [🌍 Climate & Earth Science](./climate-and-earth-science/) | 5 | AI weather models **beat the world's best** supercomputer forecasts, and now run **operationally** |
| [🧠 Neuroscience](./neuroscience/) | 3 | The **first complete wiring map** of an adult brain |
| [♟️ Games & Strategy](./games-and-strategy/) | 8 | "**Move 37**": the moment AI showed genuine creativity |
| [🤖 Robotics](./robotics/) | 2 | A robot reached **amateur human level** at table tennis |

*Some landmark systems (AlphaFold, AlphaTensor, the speech neuroprosthesis, and more) matter to several fields, so each has one full write-up, cross-linked from the others.*

---

## ⭐ Eleven to start with

New here? These are among the most consequential entries in the collection:

1. **[Jacobian conjecture counterexample](./mathematics/jacobian-conjecture-counterexample/)**: an AI-assisted result disproving an 87-year-old conjecture (n ≥ 3), July 2026.
2. **[AlphaFold](./chemistry/alphafold-protein-structure/)**: solved a 50-year grand challenge and won the 2024 Nobel Prize in Chemistry.
3. **[Fusion plasma control](./physics/fusion-plasma-control/)**: reinforcement learning drove a *real* nuclear-fusion reactor.
4. **[FunSearch](./mathematics/funsearch-cap-set/)**: first LLM to produce a verifiable, genuinely new answer to an open math problem.
5. **[AlphaProof](./mathematics/alphaproof-alphageometry-imo-2024/)**: silver-medal mathematics at the International Math Olympiad.
6. **[AlphaDev sorting](./computer-science/alphadev-sorting/)**: an AI-discovered algorithm merged into the C++ standard library.
7. **[Speech neuroprosthesis](./medicine/speech-neuroprosthesis/)**: conversational-speed communication restored after paralysis.
8. **[GNoME](./materials-science/gnome-materials-discovery/)**: 380,000 newly predicted stable materials.
9. **[GraphCast](./climate-and-earth-science/graphcast-weather/)**: 10-day global weather forecasts in under a minute.
10. **[AlphaGo "Move 37"](./games-and-strategy/alphago-move-37/)**: the move that showed AI could be creative.
11. **[RFdiffusion](./biology/rfdiffusion-protein-design/)**: generative design of proteins that don't exist in nature.

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
