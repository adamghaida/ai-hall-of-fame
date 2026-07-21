# 🛠️ How to recreate: DGMR — 'nowcasting' the next 90 minutes of rain

*This file is a practical starting point for reproducing or exploring the result — code, data, models, and (where one exists) the actual prompt or method. It is not official documentation; always defer to the primary sources.*

Open-sourced: code and a UK-trained model are available (github.com/google-deepmind/deepmind-research/tree/master/nowcasting; open reimplementation at github.com/openclimatefix/skillful_nowcasting). DGMR is a conditional GAN that generates realistic future radar 'movies'; train on public radar archives (e.g. UK Met Office / MRMS) and evaluate with meteorologist-style skill scores.

## Primary sources & code
- [DeepMind blog](https://deepmind.google/discover/blog/nowcasting-the-next-hour-of-rain/)
- [Nature paper](https://www.nature.com/articles/s41586-021-03854-z)

---
*Back to **[README.md](./README.md)** · **[CONTEXT.md](./CONTEXT.md)**.*
