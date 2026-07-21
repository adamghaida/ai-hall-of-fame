# 🛠️ How to recreate: RFdiffusion — designing brand-new proteins from scratch

*This file is a practical starting point for reproducing or exploring the result — code, data, models, and (where one exists) the actual prompt or method. It is not official documentation; always defer to the primary sources.*

Open-sourced: **github.com/RosettaCommons/RFdiffusion**. Typical workflow: specify a design goal (e.g. a binder to a target, a scaffold around a functional motif, or a symmetric oligomer); RFdiffusion generates backbone structures by denoising; then **ProteinMPNN** designs sequences for those backbones and **AlphaFold2** filters candidates by predicted confidence. Promising designs are ordered as genes and tested in the lab.

## Primary sources & code
- [Nature paper](https://www.nature.com/articles/s41586-023-06415-8)
- [Institute for Protein Design](https://www.ipd.uw.edu/2022/12/a-diffusion-model-for-protein-design/)

---
*Back to **[README.md](./README.md)** · **[CONTEXT.md](./CONTEXT.md)**.*
