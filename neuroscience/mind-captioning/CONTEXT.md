# 📚 Context: mind captioning

**Where this sits.** Brain decoding has moved through recognizable stages: classifying which category a person is viewing, then [reconstructing the image itself](../brain-image-reconstruction/), and now generating descriptive text. Each step raises the structural demands on the decoded representation. An image reconstruction can be impressive while remaining semantically vague. A sentence has to commit to who did what to whom, and getting the relations wrong produces a sentence that is clearly wrong rather than merely blurry.

**The method, in more detail.** The pipeline deliberately separates two things. A **linear** decoder maps voxel activity to the semantic feature vector that a deep language model assigns to a caption. Linearity matters: it limits how much the decoder itself can invent, so the structure in the output has to come from the brain data rather than from a powerful nonlinear model hallucinating plausible text. Then a separate optimization searches text space, iteratively replacing and interpolating words, for a description whose features match the decoded features. The language model is a fixed semantic yardstick, not a generator being prompted.

**Why the language-network result is the interesting one.** Horikawa reports that descriptions stayed accurate even with the canonical language network excluded. If structured semantic content, including relations between entities, can be read out from outside classical language regions, that is evidence about how meaning is represented in the brain. It also weakens a natural objection to the whole enterprise, which is that a text decoder might merely be reading inner verbalization. The result suggests it is reading something more like nonverbal structured thought, which is what makes the aphasia application conceivable.

**The evaluation.** Descriptions were scored by whether they could identify the correct video among 100 candidates, with chance at 1%. NTT's release gives about 50% for perception and about 30% for recall; some secondary coverage reports recall as high as 40%. We cite the range rather than pick, and anyone needing the exact figure should take it from the paper.

**The author and the openness.** This is a single-author paper from NTT's Communication Science Laboratories, with no competing interests declared. Code is on GitHub, raw fMRI data is on OpenNeuro, and preprocessed features are on figshare. For a result this easy to sensationalize, that level of openness is worth noting, and it means the claims are independently checkable.

**On the privacy conversation.** The paper arrived into an existing debate about neural privacy, and NTT's own release is notably measured about it: the study required roughly 17 hours of scanning per participant, across multiple days, with explicit informed consent, and the researchers acknowledge both that unspoken thoughts could in principle be inferred without consent and that model biases could distort generated text. The honest position is that this method cannot be used on an unwilling person, and that saying so is not the same as saying the concern is permanently moot.

## Why it's in the Hall of Fame
Because it decodes structure, not just content, and because the finding that it works without the language network is a real contribution to neuroscience rather than only a demonstration of decoding power. It also generalizes from seeing to remembering, which is the step that separates a stimulus-locked party trick from something that might one day help a person who cannot speak.

## Honest caveats
- **Six participants.** A small sample even by fMRI standards, all Japanese speakers who were non-native English speakers, while the generated descriptions and the language models are in English. Whether that language mismatch affects the results is a reasonable question this entry cannot answer.
- **Per-subject models, trained on hours of that subject's own data.** Roughly 17 hours of scanning per participant across multiple days. There is no general-purpose decoder here; each person gets a model fitted to their own brain. This is standard in the field and it is also the single biggest practical limitation.
- **It requires fMRI.** A large, stationary, expensive scanner, with the participant lying still and cooperating. Nothing about this works covertly or at a distance.
- **The accuracy is far above chance and far from reliable.** Roughly 50% on a 1-in-100 identification task for viewed content is a strong result against a 1% baseline. It is not a transcript of someone's experience, and roughly half the time the description does not identify the right video.
- **Reported recall accuracy varies by source.** NTT says about 30%; some coverage says up to 40%. We have not resolved which corresponds to which analysis in the paper, and we would rather flag the discrepancy than pick a number.
- **"Reading thoughts" overstates it.** The system verbalizes content related to specific video stimuli that participants viewed or were cued to recall, using a decoder trained on their responses to similar material. It does not access spontaneous, unprompted thought.
- **Model bias is a live concern the author raises.** The generated text comes from optimizing against a language model's feature space, and those models carry biases that could shape the content of descriptions attributed to a person's mind. That is an unusual and serious failure mode worth taking seriously.
- **Not yet independently replicated.** Recent work, published in a reputable venue with open code and data, but the replication record is not there yet.

## Sources
- [Science Advances paper (Horikawa, 5 November 2025)](https://doi.org/10.1126/sciadv.adw1464) · [PMID 41191769](https://pubmed.ncbi.nlm.nih.gov/41191769/)
- [Nature news coverage (Max Kozlov)](https://www.nature.com/articles/d41586-025-03624-1)
- [NTT press release, including the ethics discussion](https://group.ntt/en/newsrelease/2025/11/17/251117a.html)
- [Medical Xpress report, with the stimulus and model details](https://medicalxpress.com/news/2025-11-mind-captioning-technique-human-thoughts.html)
- [Project page](https://horikawa-t.github.io/MindCaptioningProject/)
- [Code: horikawa-t/MindCaptioning](https://github.com/horikawa-t/MindCaptioning)
- [Raw fMRI data on OpenNeuro](https://doi.org/10.18112/openneuro.ds005191.v1.0.2)
- [Preprocessed data on figshare](https://doi.org/10.6084/m9.figshare.25808179)
- [Related entry: reconstructing seen images from brain scans](../brain-image-reconstruction/)

---
*Back to **[README.md](./README.md)** · **[PROMPT.md](./PROMPT.md)**.*
