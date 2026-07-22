# An AI reading of a cheap ECG spots a weak heart before symptoms

**Field:** 🩺 Medicine  ·  **When:** January 2019 · Nature Medicine

> A 10-second ECG, read by AI, flags a dangerously weak heart that normally takes an ultrasound to find.

## What happened
Mayo Clinic trained a convolutional network on 12-lead ECGs paired with echocardiograms from ~45,000 patients to detect **low ejection fraction** (≤35%), meaning asymptomatic left-ventricular dysfunction. On 52,870 held-out patients it reached an AUC of **0.93** (about 86% sensitivity and specificity). People who screened positive but currently looked healthy were **4x** more likely to develop dysfunction later.

## Why it matters
It pulls a signal cardiologists cannot see from a ubiquitous, cheap test, opening the door to population-scale screening for a treatable but dangerous condition. It later held up in a prospective, real-world trial.

## Sources — the record of the discovery
- [Nature Medicine paper](https://www.nature.com/articles/s41591-018-0240-2)
- [Mayo Clinic prospective trial](https://newsnetwork.mayoclinic.org/discussion/trial-demonstrates-early-ai-guided-detection-of-heart-disease-in-routine-practice/)

---
*In this folder: **[PROMPT.md](./PROMPT.md)** (a prompt to explore it with AI) · **[CONTEXT.md](./CONTEXT.md)** (background & caveats). Part of the [AI Hall of Fame](../../README.md) → [🩺 Medicine](../).*
