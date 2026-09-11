# Chinook solves checkers

**Field:** ♟️ Games & Strategy  ·  **When:** July 2007 · Science

> After 18 years of computation over a game with 500 billion billion positions, a University of Alberta team proved that checkers, played perfectly, is a draw. Chinook was search and databases, not a learned system; it is here as a landmark of computer play, for the record.

## What happened
On **July 19, 2007**, Jonathan Schaeffer's group at the University of Alberta announced, and *Science* published, "Checkers Is Solved" (Science 317, 1518–1522). The result: from the standard opening position, **perfect play by both sides leads to a draw**. Checkers (8×8 draughts) has roughly **5 × 10^20** reachable positions, making it by far the largest game solved at the time.

The proof had two halves. An **endgame database** of every position with 10 or fewer pieces on the board, about **39 trillion positions**, each stored with its exact win/loss/draw value. And a **proof-tree search** from the opening that, for each line the opponent could try, found a move leading into the databases with at least a draw. The computation ran nearly continuously from 1989 to 2007, on an average of about 50 computers at a time and more than 200 at peak.

The program behind it, **Chinook**, had already made history at the board. In 1990 it finished second to **Marion Tinsley** at the US Nationals, earning the right to challenge him. Tinsley, who lost only seven games in a career spanning 1950 to 1995, beat Chinook in 1992 (4 wins, 2 losses, 33 draws). In the 1994 rematch, after six draws, Tinsley withdrew on health grounds (he died of cancer the following year) and Chinook was declared **Man-Machine World Champion**, the first program to hold a world championship title against humans. It defended the title against Don Lafferty in 1995, 1–0 with 31 draws.

## Why it matters
Solving a game is a stronger statement than winning at it: it replaces heuristics with proof. Checkers was the first popular, human-played game of this size to be solved, and it remains one of the largest results ever produced by exhaustive computation. Schaeffer's description of the approach, replacing human-understandable heuristics with perfect knowledge, marks the extreme end of the search-based tradition that also produced IBM's Deep Blue. The learned systems that followed, from [AlphaGo](../alphago-move-37/) onward, took the opposite route: approximate judgment in games far too large to ever solve.

## Sources — the record of the discovery
- [Schaeffer et al., "Checkers Is Solved," Science 317, 1518 (2007)](https://www.science.org/doi/10.1126/science.1144079)
- [Schaeffer, "Checkers, Solved!" (IEEE Spectrum reprint hosted at the University of Alberta)](https://webdocs.cs.ualberta.ca/~jonathan/publications/ai_publications/checksolved.pdf)
- [Chinook project: solving-checkers publications](http://webdocs.cs.ualberta.ca/~chinook/publications/solving_checkers.html)
- [ScienceDaily: "Scientists Solve Checkers" (July 2007)](https://www.sciencedaily.com/releases/2007/07/070719143517.htm)
- [ChessBase: "500 billion billion moves later, computers solve checkers"](https://en.chessbase.com/post/500-billion-billion-moves-later-computers-solve-checkers)
- [Wikipedia: Chinook (computer program)](https://en.wikipedia.org/wiki/Chinook_(computer_program))

---
*In this folder: **[PROMPT.md](./PROMPT.md)** (a prompt to explore it with AI) · **[CONTEXT.md](./CONTEXT.md)** (background & caveats). Part of the [AI Hall of Fame](../../README.md) → [♟️ Games & Strategy](../).*
