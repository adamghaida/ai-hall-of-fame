# 🤖 Explore this with AI: BTSbot and the autonomous supernova loop

Paste the prompt below into your favorite AI assistant (Claude, ChatGPT, Gemini, or a local model). If your assistant can browse the web, tell it to read the sources first. The point is a clear, honest, grounded explanation of what happened and why it mattered.

> In October 2023 a neural network watching the Zwicky Transient Facility's alert stream spotted SN 2023tyk, requested a spectrum from a robotic telescope, had it classified as a Type Ia supernova and reported it to the community without a person touching any step; by 2025 the same system had sent more than 1,200 automated follow-up requests.

---

```text
You are a sharp, honest astronomy and machine-learning explainer. Walk me through a specific, real AI achievement so that I actually understand it, not just the headline.

Topic: BTSbot, a neural network built by Nabeel Rehemtulla, Adam Miller and colleagues (Northwestern University, with the Zwicky Transient Facility) that autonomously identifies bright supernovae and triggers spectroscopic follow-up. Documented in ApJ 972, 7 (2024; arXiv:2401.15167) and in the SN 2024jlf paper, ApJ 985, 241 (29 May 2025; arXiv:2501.18686). First fully automated discovery-to-classification: SN 2023tyk, October 2023.

Please cover, in plain language a curious non-expert can follow:
1. What ZTF's Bright Transient Survey is, why it wants a complete spectroscopic sample of transients brighter than 18.5 mag, and why human scanning was the bottleneck (hours of latency, thousands of hours of labour).
2. How BTSbot works: a multi-modal convolutional neural network on alert image cutouts plus metadata, trained on about 1.4 million historical ZTF images, integrated into the Fritz marshal so that high-scoring sources automatically get a spectrum request to the SED Machine on the Palomar 60-inch, with SNIascore classifying the result.
3. The SN 2023tyk timeline (ZTF detection 3 October 2023, BTSbot trigger 5 October, public Type Ia classification 7 October) and the system paper's numbers: all bright transients recovered in the test split, about an hour faster than scanners, 296 live selections in October 2023 with 93% real.
4. BTSbot-nearby and SN 2024jlf: the filter (score at least 0.5, host galaxy within 60 Mpc, offset at most 15 kpc, absolute magnitude brighter than about -11, non-detection within 3.5 days), the 7-minute trigger, the spectrum 0.7 days after first light, the flash-ionisation lines lasting 1.3 to 1.8 days, and the more than 1,200 automated requests since October 2023.
5. Why it matters: closing the loop from detection to telescope action to public classification without a human, on a production survey, and what early spectra reveal about a progenitor star's final mass loss.
6. The honest caveats:
   - Humans built and tune the filters and still vet the sample; classification depends on getting a usable spectrum.
   - Two detections are required before a trigger, adding an hour or more.
   - The model cannot reject moving objects on its own; incomplete host catalogues cause misses.
   - The scope is bright extragalactic transients in ZTF.
   - The "first fully automated" claim is the team's own.
7. What I should read or explore next to go deeper.

Ground your answer in these sources (read them if you can, and cite them as you go):
- SN 2024jlf paper (ApJ 2025): https://iopscience.iop.org/article/10.3847/1538-4357/adcf1e
- SN 2024jlf preprint: https://arxiv.org/abs/2501.18686
- BTSbot system paper (arXiv): https://arxiv.org/abs/2401.15167
- Northwestern news (13 October 2023): https://news.northwestern.edu/stories/2023/10/first-supernova-detected-confirmed-classified-and-shared-by-ai/
- Code and models: https://github.com/nabeelre/BTSbot

Be concrete, use the papers' own numbers, and if you are unsure about a detail, say so instead of guessing.
```

## Bonus: have the agent run the model

BTSbot is open source with pre-trained weights, so the claim can be exercised rather than just read. The snippet below follows the repository's README; have a capable assistant run it and report what it sees.

```bash
pip install btsbot
```

```python
import btsbot

# Load a pre-trained BTSbot from the Hugging Face Hub, as documented in the repo README.
model = btsbot.load_HF_model(
    architecture="convnext",   # or "maxvit"
    multi_modal=True,          # image-only variants are also available
    pretrain="galaxyzoo",      # or "imagenet", "randinit"
)
print(model)
```

Then ask the assistant:

```
Open https://github.com/nabeelre/BTSbot and run inference_example.py (or reproduce its logic) on a handful of ZTF alert cutouts. Report:
1. What inputs the model expects (image channels, metadata fields) and what threshold the papers use for an automatic follow-up trigger.
2. The scores it assigns to a known supernova versus a known artefact or variable star, if you can obtain public ZTF cutouts for each.
3. Whether the training set on Zenodo (DOI 10.5281/zenodo.10839690) lets you reproduce the test-split completeness reported in arXiv:2401.15167, and what you would need to do so.
```

---

## Sources
- [ApJ paper (2025): "The BTSbot-nearby Discovery of SN 2024jlf", ApJ 985, 241](https://iopscience.iop.org/article/10.3847/1538-4357/adcf1e)
- [Preprint of the SN 2024jlf paper (arXiv:2501.18686)](https://arxiv.org/abs/2501.18686)
- [System paper: "The Zwicky Transient Facility Bright Transient Survey. III. BTSbot", ApJ 972, 7 (2024) (arXiv:2401.15167)](https://arxiv.org/abs/2401.15167)
- [Northwestern news: "First supernova detected, confirmed, classified and shared by AI" (13 October 2023)](https://news.northwestern.edu/stories/2023/10/first-supernova-detected-confirmed-classified-and-shared-by-ai/)
- [BTSbot source code and pre-trained models (GitHub)](https://github.com/nabeelre/BTSbot)

---
*Back to **[README.md](./README.md)** · **[CONTEXT.md](./CONTEXT.md)**.*
