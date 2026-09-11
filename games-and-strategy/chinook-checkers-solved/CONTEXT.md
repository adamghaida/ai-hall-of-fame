# 📚 Context: Chinook solves checkers

**The program.** Chinook was started in 1989 by Jonathan Schaeffer at the University of Alberta, with a team that over the years included Neil Burch, Yngvi Björnsson, Akihiro Kishimoto, Martin Müller, Robert Lake, Paul Lu and Steve Sutphen. As a player it was a classical game program: alpha-beta search, a hand-tuned evaluation function, an opening book, and endgame databases. The 1994 championship version ran on a 16-processor Silicon Graphics Challenge at 150 MHz with 1 GB of RAM, eight-piece endgame databases, and a minimum search depth of 19 ply. **Nothing in Chinook was learned from data.**

**Marion Tinsley.** The human side of the story is unusual. By the ChessBase account, Tinsley went from 1950 to 1995 without losing a tournament, won all nine of his world championship matches, and lost exactly seven games in a career of thousands. When Chinook qualified to challenge him in 1990, the checkers federations balked at a computer challenger; Tinsley protested, and a separate Man versus Machine world title was created. He won the 1992 match 4–2 with 33 draws. In 1994, after six draws, he withdrew with what turned out to be pancreatic cancer, handing Chinook the title by default. Whether Chinook could have beaten a healthy Tinsley was never settled.

**Solving the game.** The 2007 result is a different kind of achievement from the matches. "Weakly solved" means the game-theoretic value from the starting position is known, together with a strategy that achieves it against any opposition. It is weaker than "strongly solved," which would give the value of every legal position. The proof combined the 39-trillion-position endgame database (all positions with 10 or fewer pieces) with a best-first proof-tree search from the opening that only needed to find one adequate reply for the defending side at each point, which is why the search never had to touch most of the 5 × 10^20 positions. The work began in 1989 and, per ScienceDaily, was completed in late April 2007; the *Science* paper appeared in July.

## Why it's in the Hall of Fame
It is the largest game solved by exhaustive computation to that date, and the first time a game with a serious human competitive tradition was proved to be a draw. Chinook's 1994 title is also, per the record, the first world championship in any game won by a program against humans.

## Honest caveats
- **Not machine learning.** Chinook is included as a landmark of computer play, not as a learned system. Its playing strength came from search, expert-tuned evaluation and databases, and the proof came from exhaustive computation. The point of contrast with the learned systems in this collection is deliberate.
- **Weakly, not strongly, solved.** The proof establishes the value of the standard opening position and a strategy to hold the draw. It does not give the value of every reachable position, and a perfect-play strategy from an arbitrary mid-game position is not part of the result.
- **The 1994 title was by withdrawal.** Chinook never beat Tinsley in a match; it lost the 1992 match and was level after six draws when he withdrew in 1994. Its 1995 defence against Don Lafferty was won by a single game over 32.
- **Proof verification.** A proof of this size cannot be checked by hand. As with every computer-assisted proof, trust rests on the software and hardware being correct, and on the checks the authors describe in the paper.
- **Primary source access.** The *Science* article is paywalled; the numbers above were checked against Schaeffer's own IEEE Spectrum account (hosted at the University of Alberta), the ScienceDaily and ChessBase coverage from July 2007, and Wikipedia.

## Sources
- [Schaeffer et al., "Checkers Is Solved," Science 317, 1518 (2007)](https://www.science.org/doi/10.1126/science.1144079)
- [Schaeffer, "Checkers, Solved!" (IEEE Spectrum reprint hosted at the University of Alberta)](https://webdocs.cs.ualberta.ca/~jonathan/publications/ai_publications/checksolved.pdf)
- [Chinook project: solving-checkers publications](http://webdocs.cs.ualberta.ca/~chinook/publications/solving_checkers.html)
- [ScienceDaily: "Scientists Solve Checkers" (July 2007)](https://www.sciencedaily.com/releases/2007/07/070719143517.htm)
- [ChessBase: "500 billion billion moves later, computers solve checkers"](https://en.chessbase.com/post/500-billion-billion-moves-later-computers-solve-checkers)
- [Wikipedia: Chinook (computer program)](https://en.wikipedia.org/wiki/Chinook_(computer_program))

---
*Back to **[README.md](./README.md)** · **[PROMPT.md](./PROMPT.md)**.*
