# 🛠️ How to recreate: the Jacobian conjecture counterexample

*This is the rare Hall-of-Fame entry you can fully verify on your own laptop in seconds — the whole point of a counterexample is that it is a concrete object anyone can check.*

## Verify it yourself (this script was actually run for this entry)

```python
import sympy as sp

x, y, z = sp.symbols('x y z')
a = (1 + x*y)**3 * z + y**2 * (1 + x*y) * (4 + 3*x*y)
b = y + 3*x*(1 + x*y)**2 * z + 3*x*y**2 * (4 + 3*x*y)
c = 2*x - 3*x**2*y - x**3*z

F = sp.Matrix([a, b, c])
J = F.jacobian([x, y, z])
print('Jacobian determinant =', sp.simplify(J.det()))   # -> -2
print('degree of a =', sp.Poly(a, x, y, z).total_degree())  # -> 7
```

Running this prints **`Jacobian determinant = -2`** — a nonzero constant, so the map satisfies the conjecture's hypothesis. The conjecture's *conclusion* (bijectivity) fails: the map is generically **three-to-one**, so distinct points share an image. (You can probe this by solving `F(p) = F(q)` for `p ≠ q`, or by computing the degree of the map; the write-ups exhibit explicit colliding points.)

You can do the same check in Mathematica, Maple, or even Wolfram Alpha — several mathematicians independently verified the arithmetic that way within hours of the announcement.

## Recreating the *discovery* (harder, and only partly public)
Finding — rather than checking — such a map is the hard part. Alpöge drove **Claude Fable 5** in an agentic loop: proposing candidate polynomial maps, computing their Jacobians, and searching the constrained space of maps with constant nonzero Jacobian that fail injectivity. The exact prompts and search harness are not fully published; treat this as a template rather than a script:

1. Fix a target: a map Cⁿ → Cⁿ (n = 3) with **constant nonzero Jacobian** but not injective.
2. Have the model generate structured candidate families (here, degree-7 forms built from the factor `1 + xy`).
3. For each candidate, symbolically compute the Jacobian determinant (must be a nonzero constant) and test injectivity/degree.
4. Iterate, letting the model exploit the algebraic structure of near-misses.

## Primary sources & code
- [Secret Blogging Seminar (exact map + geometric analysis)](https://sbseminar.wordpress.com/2026/07/20/the-new-counterexample-to-the-jacobian-conjecture/)
- [Wikipedia — Jacobian conjecture](https://en.wikipedia.org/wiki/Jacobian_conjecture)
- [Hacker News discussion](https://news.ycombinator.com/item?id=48973869)

---
*Back to **[README.md](./README.md)** · **[CONTEXT.md](./CONTEXT.md)**.*
