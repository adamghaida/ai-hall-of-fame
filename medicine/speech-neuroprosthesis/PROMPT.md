# 🛠️ How to recreate: A speech neuroprosthesis that restores conversation after paralysis

*This file is a practical starting point for reproducing or exploring the result — code, data, models, and (where one exists) the actual prompt or method. It is not official documentation; always defer to the primary sources.*

Requires implanted electrode arrays, so it isn't home-reproducible, but the decoding methods and some data are shared through the **BrainGate** collaboration and companion repositories. The core is an RNN/transformer that maps windows of neural firing to phoneme probabilities, then a language model that assembles phonemes into words — the same architecture you can study on released neural datasets.

## Primary sources & code
- [Stanford / Nature](https://www.nature.com/articles/s41586-023-06377-x)
- [UCSF / Nature](https://www.nature.com/articles/s41586-023-06443-4)
- [NIH summary](https://www.nih.gov/news-events/nih-research-matters/brain-computer-interface-restores-natural-speech-after-paralysis)

---
*Back to **[README.md](./README.md)** · **[CONTEXT.md](./CONTEXT.md)**.*
