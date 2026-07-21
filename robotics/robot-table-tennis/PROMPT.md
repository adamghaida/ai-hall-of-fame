# 🛠️ How to recreate: A robot that plays amateur-level competitive table tennis

*This file is a practical starting point for reproducing or exploring the result — code, data, models, and (where one exists) the actual prompt or method. It is not official documentation; always defer to the primary sources.*

No full open release, but the project site (sites.google.com/view/competitive-robot-table-tennis) documents the method: a **hierarchical** controller with low-level skill policies (forehand, backhand, serve) and a high-level policy that selects skills based on game state — trained largely in **simulation** and transferred zero-shot to the physical robot, then improved with real-play data.

## Primary sources & code
- [DeepMind research](https://deepmind.google/research/publications/107741/)
- [MIT Tech Review](https://www.technologyreview.com/2024/08/09/1096102/google-deepmind-trained-a-robot-to-beat-humans-at-table-tennis/)

---
*Back to **[README.md](./README.md)** · **[CONTEXT.md](./CONTEXT.md)**.*
