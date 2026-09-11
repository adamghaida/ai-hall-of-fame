# 🤖 Explore this with AI: Chinook solves checkers

Paste the prompt below into your favorite AI assistant (Claude, ChatGPT, Gemini, or a local model). If your assistant can browse the web, tell it to read the sources first. The point is a clear, honest, grounded explanation of what happened and why it mattered.

> After 18 years of computation over a game with 500 billion billion positions, a University of Alberta team proved that checkers, played perfectly, is a draw.

---

```text
You are a sharp, honest science explainer. Walk me through a specific, real milestone in computer game-playing so that I actually understand it, not just the headline.

Topic: Chinook, the University of Alberta checkers program led by Jonathan Schaeffer: its 1994 Man-Machine World Championship title, and the July 2007 Science paper "Checkers Is Solved," which proved that perfect play from the standard opening position is a draw.

Please cover, in plain language a curious non-expert can follow:
1. What actually happened, in two parts: the matches against Marion Tinsley (1992: Tinsley 4–2 with 33 draws; 1994: six draws, then Tinsley withdrew with cancer) and the 2007 proof.
2. How it worked. For the player: alpha-beta search, a hand-tuned evaluation function, opening book and endgame databases. For the proof: the 39-trillion-position endgame database (all positions with 10 or fewer pieces) plus a proof-tree search from the opening, and why that search never had to examine most of the roughly 5 × 10^20 positions. Be explicit that none of this was machine learning.
3. What "weakly solved" means, how it differs from "strongly solved" and "ultra-weakly solved," and why the distinction matters.
4. Why it mattered: the largest game solved at the time, the difference between winning and proving, and how this exhaustive-search tradition contrasts with the learned systems (AlphaGo, AlphaZero) that came after.
5. The honest caveats: the 1994 title came by withdrawal, not by beating Tinsley; the proof is weak, not strong; and a proof this large cannot be checked by hand.
6. What I should read or explore next to go deeper.

Ground your answer in these primary sources (read them if you can, and cite them as you go):
- Schaeffer et al., "Checkers Is Solved," Science 317, 1518 (2007): https://www.science.org/doi/10.1126/science.1144079
- Schaeffer's own account in IEEE Spectrum (PDF): https://webdocs.cs.ualberta.ca/~jonathan/publications/ai_publications/checksolved.pdf
- Chinook project publications page: http://webdocs.cs.ualberta.ca/~chinook/publications/solving_checkers.html
- ScienceDaily coverage, July 2007: https://www.sciencedaily.com/releases/2007/07/070719143517.htm
- Wikipedia: Chinook (computer program): https://en.wikipedia.org/wiki/Chinook_(computer_program)

Be concrete, use real numbers where they matter, and if you are unsure about a detail, say so instead of guessing.
```

## Bonus: have the agent verify the scale

The proof itself is too large to re-run, but its arithmetic and its method are checkable in miniature:

```
1. Count the number of legal checkers positions with exactly 2, 3 and 4 pieces on an 8x8 board (12 dark squares per side, kings and men, both sides to move), by direct enumeration in code. Compare your counts with the sizes reported for the Chinook endgame databases and explain any discrepancy.
2. Implement retrograde analysis to build a complete win/loss/draw database for all positions with at most 3 pieces, then verify a few positions by hand.
3. In one paragraph, explain why the same two-stage strategy (endgame database plus proof-tree search from the opening) scales to 10 pieces and 5 × 10^20 positions but would not be feasible for chess.
```

---

## Sources
- [Schaeffer et al., "Checkers Is Solved," Science 317, 1518 (2007)](https://www.science.org/doi/10.1126/science.1144079)
- [Schaeffer, "Checkers, Solved!" (IEEE Spectrum reprint hosted at the University of Alberta)](https://webdocs.cs.ualberta.ca/~jonathan/publications/ai_publications/checksolved.pdf)
- [Chinook project: solving-checkers publications](http://webdocs.cs.ualberta.ca/~chinook/publications/solving_checkers.html)
- [ScienceDaily: "Scientists Solve Checkers" (July 2007)](https://www.sciencedaily.com/releases/2007/07/070719143517.htm)
- [ChessBase: "500 billion billion moves later, computers solve checkers"](https://en.chessbase.com/post/500-billion-billion-moves-later-computers-solve-checkers)
- [Wikipedia: Chinook (computer program)](https://en.wikipedia.org/wiki/Chinook_(computer_program))

---
*Back to **[README.md](./README.md)** · **[CONTEXT.md](./CONTEXT.md)**.*
