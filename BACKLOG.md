# Backlog: candidate entries not yet in the collection

Compiled 2026-09-10 from a gap review against the 68 existing entries. Each row was checked against at least one primary or near-primary source, but nothing here has been written up or re-verified to entry standard. Priority is a judgement of notability and fit, not certainty. Where a source could not be fetched, the caveat says so.

Rows marked **update** belong in an existing entry rather than a new one.

## Mathematics

| Candidate | Date | What happened | Source | Priority / caveats |
|---|---|---|---|---|
| Erdős #90, unit-distance conjecture disproved | May 2026 | OpenAI internal model proved u(n) ≥ n^(1+ε) for infinitely many n, refuting Erdős's 1946 conjecture; Will Sawin made it explicit (n^1.014). Gowers said he would recommend it for Annals. | https://cdn.openai.com/pdf/74c24085-19b0-4534-9c90-465b8e29ad73/unit-distance-proof.pdf, https://arxiv.org/abs/2605.20579 | High. Company PDF, not peer reviewed; improvement only appears around 10^2,000,000 points. |
| Erdős #728, first Erdős problem resolved autonomously with a Lean proof | Jan 2026 | GPT-5.2 Pro argument, Harmonic Aristotle Lean proof; #729 and #397 followed the same week. | https://arxiv.org/abs/2601.07421 | High. A comparable result was later found in Pomerance (2014). |
| Erdős #1196 from a single GPT-5.4 Pro prompt | Apr 2026 | Liam Price, an amateur, solved it in ~80 minutes with a Markov-chain technique; Tao co-authored the resulting paper. | https://terrytao.wordpress.com/2026/05/03/primitive-sets-and-von-mangoldt-chains-erdos-problem-1196-and-beyond/, https://arxiv.org/abs/2605.00301 | High. |
| AlphaProof Nexus: 9 of 353 open Erdős problems and 44 of 492 OEIS conjectures, in Lean | May 2026 | DeepMind agent produced machine-checked proofs, including #125 (open since 1970). | https://arxiv.org/abs/2605.22763 | High. Two statements amended after review; two later matched to literature. |
| AlphaEvolve improves nine classical Ramsey lower bounds | Mar 2026 | R(3,13) 60→61, R(4,20) 234→237, and seven others. | https://arxiv.org/abs/2603.09172 | High. Constructions only. |
| Matrix multiplication exponent ω < 2.371177 | Aug 2026 | New record with AlphaEvolve as final refinement step; Alman and Vassilevska Williams are coauthors. | https://arxiv.org/abs/2608.16884 | High. Distinct from the May 2025 AlphaEvolve entry. |
| AxiomProver proves Fel's conjecture and Chen–Gendron A.10, Lean-formalized | Feb 2026 | Decade-old conjecture on numerical semigroups proved from a natural-language statement. | https://arxiv.org/abs/2602.03716, https://arxiv.org/abs/2602.03722 | High. Not famous problems. |
| AxiomProver 12/12 on Putnam 2025 with Lean proofs | Dec 2025 | 8 of 12 inside the exam window, 4 after. | https://github.com/AxiomMath/putnam2025 | Medium. Self-reported. |
| Gemini Deep Think / Aletheia solves 4 Erdős problems autonomously | Feb 2026 | #652, #654, #1040, #1051, with an autonomy-level framework. | https://arxiv.org/abs/2602.10177 | Medium. |
| Erdős #1026 resolved in 48 hours with Aristotle, AlphaEvolve, GPT, Gemini | Dec 2025 | Tao's canonical case study of the mixed-tools workflow. | https://terrytao.wordpress.com/2025/12/08/the-story-of-erdos-problem-126/ | Medium. Result later found in 2016 literature. |
| Erdős problems roundup | to Jun 2026 | The Tao wiki records roughly 75 fully resolved entries (18 AI standalone), 34 literature finds, 150+ formalizations; erdosproblems.com at 565 solved / 652 open. | https://github.com/teorth/erdosproblems/wiki/AI-contributions-to-Erd%C5%91s-problems | High as a single overview entry. Wiki frozen at 2026-06-30. |
| The October 2025 "GPT-5 solved 10 Erdős problems" retraction | Oct 2025 | OpenAI's Kevin Weil claimed 10 solved; they were literature finds; post deleted. | https://techcrunch.com/2025/10/19/openais-embarrassing-math/ | Medium, as a cautionary entry. |
| Aaronson–Witteveen QMA oracle separation with a GPT-5 key step | Sep 2025 | | https://scottaaronson.blog/?p=9183 | Medium. |
| Zarankiewicz numbers via open-source evolutionary search | May 2026 | 3 exact values, 41 improved bounds, under $30 per case. | https://arxiv.org/abs/2605.01120 | Low–medium. |
| AlphaEvolve + Tao, 67 problems | Nov 2025 | ~20 new results, 8 worse than literature. | https://arxiv.org/abs/2511.02864 | **Update** to AlphaEvolve entry. |
| AlphaProof in Nature | Nov 2025 | | https://www.nature.com/articles/s41586-025-09833-y | **Update** to IMO 2024 entry. |

## Computer science

| Candidate | Date | What happened | Source | Priority / caveats |
|---|---|---|---|---|
| ICPC World Finals 2025: OpenAI 12/12, Gemini Deep Think 10/12 | Sep 2025 | First perfect ICPC score by any entrant; Gemini solved a problem no human team solved. | https://deepmind.google/blog/gemini-achieves-gold-medal-level-at-the-international-collegiate-programming-contest-world-finals/ | High. OpenAI result exists only as an X thread. |
| Nemotron-3-Ultra-CC outscores the top human at IOI 2026 | Aug 2026 | 535.4/600 vs 498.27, run live but unofficial. | https://arxiv.org/abs/2609.02849 | High. Not IOI-supervised. |
| OpenAI gold in the official IOI 2025 AI track | Aug 2025 | Would rank 6th of 330. | https://x.com/OpenAI/status/1954969035713687975 | Medium–high. Score never published. |
| AtCoder World Tour Finals: 2nd to Psyho in 2025, sweeps both 2026 rounds | Jul 2025, Jul 2026 | 2026: 5/5 vs best human 4,300 of 8,300; heuristic score >7x best human. | https://atcoder.jp/contests/awtf2026algo | High as one entry. Standings behind login. |
| AlphaEvolve improves inapproximability gadgets (MAX-4-CUT, TSP) | Sep 2025 | | https://arxiv.org/abs/2509.18057 | High. |
| Claude Opus 4.6 writes a C compiler that builds Linux | Feb 2026 | ~100k lines Rust, 4 targets, 99% on GCC torture suite, ~$20k. | https://www.anthropic.com/engineering/building-c-compiler | High. Slower than gcc -O0; not validated for correctness. |
| o3 on ARC-AGI-1 | Dec 2024 | 75.7% semi-private at ~$26/task; prior best ~5%. | https://arcprize.org/blog/oai-o3-pub-breakthrough | Medium. Benchmark score. |
| Zochi: first AI-generated paper in an ACL main track | May 2025 | | https://github.com/IntologyAI/Zochi | Medium. Humans did figures, citations, rebuttal. |
| Sakana AI Scientist paper passes ICLR workshop review | Mar 2025 | | https://sakana.ai/ai-scientist-first-publication/ | Medium. Workshop, withdrawn after acceptance. |
| AlphaEvolve production numbers (Spanner −20% write amplification, Borg 0.7%) | Dec 2025 | | https://cloud.google.com/blog/products/ai-machine-learning/alphaevolve-is-available-for-everyone | **Update** to AlphaEvolve entry. |
| AlphaChip in Trillium and Ironwood TPUs | 2024–25 | | https://deepmind.google/blog/how-alphachip-transformed-computer-chip-design/ | **Update** to AlphaChip entry. |

## Cybersecurity

| Candidate | Date | What happened | Source | Priority / caveats |
|---|---|---|---|---|
| Claude Mythos Preview / Project Glasswing | Apr–May 2026 | 10,000+ high/critical vulnerabilities across ~50 partners; 27-year-old OpenBSD bug, 17-year-old FreeBSD NFS RCE CVE-2026-4747, 271 Firefox bugs per Mozilla; six external firms found 90.6% true positives on 1,752 sampled. | https://www.anthropic.com/research/mythos-preview, https://www.anthropic.com/research/glasswing-initial-update | High. Counts disputed by some researchers; most unpatched at announcement. |
| Claude Opus 4.6 finds 500+ validated high-severity zero-days | Feb 2026 | No custom scaffolding. | https://www.anthropic.com/research/zero-days | High. Vendor-reported. |
| XBOW tops the HackerOne US leaderboard | Jun 2025 | ~1,060 submissions in 90 days, 54 critical. | https://xbow.com/blog/top-1-how-xbow-did-it | High. Humans reviewed before submission. |
| DARPA AIxCC final | Aug 2025 | 7 systems found 54/63 synthetic and 18 real vulnerabilities, patched 43 and 11; open-sourced. | https://www.darpa.mil/news/2025/aixcc-results | High. |
| Sean Heelan finds CVE-2025-37899 (Linux ksmbd) with o3 | May 2025 | Raw model, no tooling; honest hit rates. | https://sean.heelan.io/2025/05/22/how-i-used-o3-to-find-cve-2025-37899-a-remote-zeroday-vulnerability-in-the-linux-kernels-smb-implementation/ | High. |
| OSS-Fuzz LLM harnesses find 20-year-old OpenSSL bug | Nov 2024 | 26 vulnerabilities incl. CVE-2024-9143. | https://security.googleblog.com/2024/11/leveling-up-fuzzing-finding-more.html | High. Low severity. |
| Anthropic disrupts GTG-1002, an AI-orchestrated espionage campaign | Nov 2025 | Claude Code ran 80–90% of an intrusion campaign against ~30 organizations. | https://www.anthropic.com/news/disrupting-AI-espionage | High as a misuse entry. Vendor-only reporting. |
| Qualys RefluXFS CVE-2026-64600 found with Mythos | Jul 2026 | Independent firm, single CVE, working root exploit. | https://blog.qualys.com/vulnerabilities-threat-research/2026/07/22/refluxfs-a-linux-kernel-local-privilege-escalation-to-root-in-xfs-cve-2026-64600 | Medium–high. |
| Copy Fail CVE-2026-31431 (Theori Xint Code) | Apr 2026 | | https://copy.fail/ | Medium–high. |
| DeepMind CodeMender: 72 security patches upstreamed | Oct 2025 | | https://deepmind.google/blog/introducing-codemender-an-ai-agent-for-code-security/ | Medium. |
| curl ends its bug bounty over AI-generated reports | Jan 2026 | Valid-report rate fell from >15% to <5%. | https://daniel.haxx.se/blog/2026/01/26/the-end-of-the-curl-bug-bounty/ | Medium, as a side-effects entry. |
| Palisade "AI vs Humans" CTF: best AI in top 5% | Mar 2025 | | https://arxiv.org/abs/2505.19915 | Medium. |
| CryptanalysisBench: KINDI proof error and SpoC key recovery | Jul 2026 | | https://arxiv.org/abs/2607.18538 | Medium. |
| Big Sleep's first 20 open-source vulnerabilities; curl CVE-2025-9086 | Aug–Oct 2025 | | https://daniel.haxx.se/blog/2025/10/10/a-new-breed-of-analyzers/ | **Update** to Big Sleep entry. |

## Games and strategy

The collection starts at AlphaGo. Everything before 2016 is missing.

| Candidate | Date | What happened | Source | Priority / caveats |
|---|---|---|---|---|
| Deep Blue beats Kasparov | May 1997 | 3.5–2.5. | https://www.ibm.com/history/deep-blue | High. Search, not learning. |
| TD-Gammon | 1992–95 | Self-play RL reached near-world-class and changed opening theory. | https://dl.acm.org/doi/10.1145/203330.203343 | High. |
| Chinook solves checkers | 2007 | | https://www.science.org/doi/10.1126/science.1144079 | High. |
| Watson wins Jeopardy! | Feb 2011 | $77,147 vs $24,000 and $21,600. | https://www.ibm.com/history/watson-jeopardy | High. |
| DQN learns 49 Atari games from pixels | Feb 2015 | | https://www.nature.com/articles/nature14236 | High. |
| Libratus beats four top heads-up no-limit pros | Jan 2017 | 120,000 hands, +$1.77M in chips. | https://www.science.org/doi/10.1126/science.aao1733 | High. |
| MuZero: planning without the rules | Dec 2020 | | https://www.nature.com/articles/s41586-020-03051-4 | High. |
| Swift beats drone-racing world champions | Aug 2023 | 15 of 25 races; fastest lap. | https://www.nature.com/articles/s41586-023-06419-4 | High. Fixed track. Cross-list with robotics. |
| DreamerV3 collects Minecraft diamonds from scratch | Apr 2025 | | https://www.nature.com/articles/s41586-025-08744-2 | High. |
| DeepStack | Mar 2017 | | https://www.science.org/doi/10.1126/science.aam6960 | Medium–high. |
| Agent57 above human on all 57 Atari games | Mar 2020 | | https://deepmind.google/discover/blog/agent57-outperforming-the-human-atari-benchmark/ | Medium. |
| Adversarial policies beat superhuman KataGo | 2022–25 | An amateur reproduced the exploit by hand. | https://arxiv.org/abs/2211.00241 | Medium. A documented failure mode. |
| Capture the Flag (FTW) | May 2019 | | https://www.science.org/doi/10.1126/science.aau6249 | Medium. |
| JueWu wins 40 of 42 vs pro Honor of Kings teams | 2020 | | https://arxiv.org/abs/2011.12692 | Medium. |
| Suphx reaches 10 dan on Tenhou | 2020 | | https://arxiv.org/abs/2003.13590 | Medium. |
| Dr. Fill outscores all humans at the ACPT | Apr 2021 | | https://www.crosswordtournament.com/2021/index.htm | Medium. Unofficial entrant. |
| NooK beats bridge champions (declarer play) | Mar 2022 | | https://www.imperial.ac.uk/news/235238/ai-based-imperial-research-beats-world/ | Medium. Press only. |
| Gemini 2.5 Pro completes Pokémon Blue; Claude Opus 4.7 completes Pokémon Red | May 2025, May 2026 | | https://techcrunch.com/2025/05/03/googles-gemini-has-beaten-pokemon-blue-with-a-little-help | Medium. Heavy harness caveats. |
| GT Sophy shipped to players (2.0, 2.1, 3.0) | 2023–25 | | https://ai.sony/blog/gran-turismo-sophy-five-years-on-from-nature-cover-to-open-frontier | **Update** to GT Sophy entry. |

## Robotics and autonomous systems

There is no autonomous-driving entry at all.

| Candidate | Date | What happened | Source | Priority / caveats |
|---|---|---|---|---|
| Waymo safety data at 220M rider-only miles | Jun 2026 | 94% fewer serious-injury crashes, 82% fewer airbag crashes vs human benchmarks. | https://waymo.com/safety/impact/ | High. Waymo's own analysis on a peer-reviewed method. |
| Waymo peer-reviewed 56.7M-mile crash-type study | May 2025 | | https://www.tandfonline.com/doi/full/10.1080/15389588.2025.2499887 | High. Authors are Waymo employees. |
| Tiangong Ultra runs 100 m in 8.64 s | Aug 2026 | World Humanoid Robot Games, Beijing. | https://news.cgtn.com/news/2026-08-27/Tiangong-Ultra-sets-100m-record-as-World-Humanoid-Robot-Games-close-1PWx9LjZDC8/p.html | High. Autonomy in sprint events only stated by Wikipedia; verify. |
| Honor "Lightning" wins the Beijing humanoid half-marathon in 50:26 | Apr 2026 | Under the human world record. | https://english.beijing.gov.cn/latest/news/202604/t20260419_4593508.html | High. Battery swaps allowed; autonomy status of winner unverified. |
| Figure 02 at BMW Spartanburg | Nov 2025 | 90,000+ parts loaded across 30,000+ X3s over 11 months; BMW confirmed. | https://www.figure.ai/news/production-at-bmw, https://www.press.bmwgroup.com/global/article/detail/T0458778EN/ | High. Single robot. |
| Physical Intelligence π*0.6 | Nov 2025 | 18-hour espresso service, 50 novel laundry items, 59 chocolate boxes. | https://arxiv.org/abs/2511.14759 | High. Company release. |
| SRT-H autonomous gallbladder removal, 8 of 8 ex vivo | Jul 2025 | | https://www.therobotreport.com/johns-hopkins-teaches-robot-to-perform-a-gallbladder-removal-on-a-realistic-patient/ | High. Ex vivo pig tissue. |
| Zipline passes 2M autonomous deliveries | Jan 2026 | 125M+ autonomous miles. | https://www.zipline.com/newsroom/zipline-surpasses-2-million-deliveries-raises-more-than-600m-to-power-next-phase-of-growth-and-expands-operations-to-houston-and-phoenix | High. Press release. |
| AgiBot A2 walks 106 km Suzhou to Shanghai (Guinness) | Nov 2025 | | https://www.guinnessworldrecords.com/news/2026/2/humanoid-robot-stuns-passersby-as-it-walks-over-100-km-across-china-in-big-tech-milestone | Medium. |
| Agility Digit: 100,000 totes at GXO | Nov 2025 | First humanoid robots-as-a-service contract. | https://www.agilityrobotics.com/content/digit-moves-over-100k-totes | Medium. |
| Baidu Apollo Go: 3.4M driverless rides in a quarter | Q4 2025 | | https://cnevpost.com/2026/02/27/baidu-apollo-go-robotaxi-300000-weekly-rides-expands-to-south-korea/ | Medium. No independent safety study. |
| Physical Intelligence π0.5 generalizes to unseen homes | Apr 2025 | | https://www.pi.website/blog/pi05 | Medium. |
| Open X-Embodiment / RT-X | Oct 2023 | 22 embodiments, 1M+ trajectories. | https://robotics-transformer-x.github.io/ | Medium. |
| Gemini Robotics 2 whole-body humanoid control | Jul 2026 | | https://deepmind.google/blog/gemini-robotics-2-brings-whole-body-intelligence-to-robots/ | Medium. Research demos. |
| NASA Ingenuity: 72 autonomous flights on Mars | 2021–24 | | https://science.nasa.gov/mission/mars-2020-perseverance/ingenuity-mars-helicopter/ | Medium. Classical autonomy, not learned. |

## Biology, chemistry, medicine

| Candidate | Date | What happened | Source | Priority / caveats |
|---|---|---|---|---|
| Evo designs viable bacteriophage genomes | Sep 2025 | 16 of 285 generated genomes produced infectious phages. | https://www.biorxiv.org/content/10.1101/2025.09.12.675911v1 | High. Preprint; check for journal version. |
| AlphaProteo | Sep 2024 | 3–300x better binder affinity; first AI-designed VEGF-A binder. | https://deepmind.google/blog/alphaproteo-generates-novel-proteins-for-biology-and-health-research/ | High. |
| OpenCRISPR-1, first AI-generated gene editor used in human cells | Apr 2024 | 403 mutations from SpCas9, ~95% fewer off-target edits. | https://www.profluent.bio/media/editing-the-human-genome-with-ai | High. |
| Chai-2 zero-shot antibody design, 16% hit rate | Jul 2025 | | https://www.biorxiv.org/content/10.1101/2025.07.05.663018v1 | High. Preprint, company benchmark. |
| De novo serine hydrolases (Baker lab) | Feb 2025 | Designed enzymes with multistep mechanisms, structures <1 Å from design. | https://www.bakerlab.org/wp-content/uploads/2025/02/science.adu2454.pdf | High. |
| AI-designed proteins neutralize snake venom toxins in mice | Jan 2025 | | https://www.bakerlab.org/2025/01/15/neutralizing-deadly-snake-toxins/ | High. |
| The Virtual Lab designs SARS-CoV-2 nanobodies | Jul 2025 | Multi-agent AI team, wet-lab validated. | https://www.nature.com/articles/s41586-025-09442-9 | High. |
| AI co-scientist recapitulates a decade-long phage discovery in days | Feb 2025 | | https://www.cell.com/cell/fulltext/S0092-8674(25)00973-0 | High. Retrospective; verify citation. |
| Generative-AI antibiotics NG1 and DN1 | Aug 2025 | Cleared gonorrhoea and MRSA in mice. | https://news.mit.edu/2025/using-generative-ai-researchers-design-compounds-kill-drug-resistant-bacteria-0814 | High. Preclinical. |
| Abaucin | May 2023 | Narrow-spectrum antibiotic vs A. baumannii. | https://www.nature.com/articles/s41589-023-01349-8 | High. |
| MASAI trial final results | Jan 2026 | First RCT of AI mammography, 105,934 women: 12% fewer interval cancers, 44% less reading workload. | https://www.thelancet.com/journals/lancet/article/PIIS0140-6736(25)02464-X/abstract | High. |
| PRAIM: AI screening at national scale in Germany | Jan 2025 | 463,094 women, +17.6% detection, lower recall. | https://www.nature.com/articles/s41591-024-03408-6 | High. Observational. |
| IDx-DR, first FDA-authorized autonomous diagnostic AI | Apr 2018 | | https://www.fda.gov/news-events/press-announcements/fda-permits-marketing-artificial-intelligence-based-device-detect-certain-diabetic-retinopathy | High. |
| GPT-4b micro redesigns Yamanaka factors | 2025 | >50x pluripotency marker expression. | https://openai.com/index/accelerating-life-sciences-research-with-retro-biosciences/ | Medium. Company-reported; check publication. |
| Boltz-2 approaches FEP accuracy at ~1000x lower cost | Jun 2025 | | https://www.biorxiv.org/content/10.1101/2025.06.14.659707v1 | Medium. |
| Evo 2 zero-shot BRCA1 variant classification | Mar 2026 (Nature) | | https://arcinstitute.org/news/evo2 | Medium. |

## Neuroscience

| Candidate | Date | What happened | Source | Priority / caveats |
|---|---|---|---|---|
| Real-time voice synthesis BCI for ALS (UC Davis) | Jun 2025 | Instantaneous synthesized speech with the user's intonation. | https://www.sciencedaily.com/releases/2025/06/250612081317.htm | High. Find the Nature DOI. |
| Inner-speech decoding with a mental password | Aug 2025 | 74% accuracy over 125,000 words. | https://www.cell.com/cell/fulltext/S0092-8674(25)00681-6 | High. |
| MICrONS cubic-millimetre mouse cortex connectome | Apr 2025 | ~200,000 cells, 523M synapses, with functional imaging. | https://www.nature.com/articles/s41586-025-08790-w | High. |
| "Mind captioning": sentences from brain activity | Nov 2025 | | https://www.nature.com/articles/d41586-025-03624-1 | High. Six subjects. |

## Physics, astronomy, climate, materials

| Candidate | Date | What happened | Source | Priority / caveats |
|---|---|---|---|---|
| RL avoids tearing instabilities on DIII-D | Feb 2024 | | https://www.nature.com/articles/s41586-024-07024-9 | High. |
| Deep Loop Shaping on LIGO cuts control noise 30–100x | Sep 2025 | Tested on the Livingston detector. | https://www.science.org/doi/10.1126/science.adw1291 | High. |
| AlphaQubit decoder | Nov 2024 | | https://www.nature.com/articles/s41586-024-08148-8 | High. Too slow for real time. |
| AXOL1TL anomaly detection in the CMS Level-1 trigger | 2024–25 | Autoencoder deciding in <4 µs at 40 MHz in production. | https://cds.cern.ch/record/2942560 | High. |
| Pangu-Weather | Jul 2023 | First DL model more accurate than the operational IFS. | https://www.nature.com/articles/s41586-023-06185-3 | High. |
| ECMWF AIFS operational | Feb 2025 | | https://www.ecmwf.int/en/about/media-centre/news/2025/ecmwfs-ai-forecasts-become-operational | High. |
| Aurora Earth-system model | May 2025 | | https://www.nature.com/articles/s41586-025-09005-y | High. |
| WeatherNext cyclones and the NHC partnership | 2025–26 | | https://deepmind.google/blog/weathernext-ai-model-achieves-breakthrough-in-forecasting-cyclones/ | High. Possibly an **update** to the operational-weather entry. |
| Google flood forecasting in ungauged basins, 100+ countries | Mar 2024 | | https://www.nature.com/articles/s41586-024-07145-1 | High. |
| RAVEN validates 118 TESS planets | Mar 2026 | | https://warwick.ac.uk/news/pressreleases/ai-approach-uncovers-dozens-of-hidden-planets/ | High. |
| Euclid Q1 strong-lens discovery, 497 lenses | Mar 2025 | | https://arxiv.org/abs/2503.15324 | High. |
| BTSbot: autonomous supernova discovery to spectrum | 2023–25 | | https://iopscience.iop.org/article/10.3847/1538-4357/adcf1e | High. |
| ATLAS unsupervised anomaly searches | 2024–25 | | https://arxiv.org/pdf/2312.14190 | Medium. Null results. |
| PhyE2E symbolic regression beats a NASA formula | Oct 2025 | | https://www.nature.com/natmachintell/volumes/7/issues/10 | Medium. Find the article DOI. |
| AlphaEarth Foundations embeddings | Jul 2025 | | https://developers.google.com/earth-engine/datasets/catalog/GOOGLE_SATELLITE_EMBEDDING_V1_ANNUAL | Medium. |
| FireSat wildfire constellation | 2025–26 | | https://sites.research.google/gr/wildfires/firesat/ | Medium. |
| ML-designed plasma catalysis alloys | Oct 2025 | | https://www.nature.com/articles/s44286-025-00287-7 | Medium. |

## Checked and rejected

Isomorphic Labs first-in-human (conflicting reports, no primary statement); zasocitinib (physics-based, not AI, design); Gemini Deep Think IOI 2025 gold (no announcement found); "AI Kaggle grandmaster" (no live-competition wins documented); Linux kernel first AI-authored merge (no clean first); Sakana CUDA Engineer (results retracted); 1X NEO home deliveries (pre-orders only); Tesla Robotaxi (no safety report, unverified mileage); Knuth graph-theory problem "solved in an hour" by Claude (no source); Bubeck's convex-optimization bound (superseded before it was produced); UC San Diego humanoid surgery (teleoperated).

## Existing lists elsewhere

No maintained cross-field record of AI achievements was found. The closest, all mathematics-only: the Tao Erdős wiki (frozen 2026-06-30), subroy13/awesome-ai-proofs (145 research results, single maintainer, active), seewoo5/awesome-ai-for-math (paper list), Epoch AI's FrontierMath open problems (6 of 50 solved by AI), and First Proof. Wikipedia's timeline and year pages are news chronologies with thin 2025–26 coverage of results. For science and medicine the best starting points are the Stanford AI Index 2026 science and medicine chapters and vendor showcase pages; none is per-case. Games and robotics have no tracker; Wikipedia's "Progress in artificial intelligence" games table stops at 2024.
