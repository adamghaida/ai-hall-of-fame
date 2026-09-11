# 📚 Context: Deep Blue beats Kasparov

**The lineage.** Deep Blue grew out of *ChipTest* and *Deep Thought*, chess machines built by Feng-hsiung Hsu and colleagues at Carnegie Mellon in the late 1980s. IBM hired the team, and the project that became Deep Blue was led by Hsu and Murray Campbell with Joe Hoane, Jerry Brody and C. J. Tan. Grandmaster Joel Benjamin was brought in to work on the opening book and evaluation.

**How it played.** Deep Blue was a search engine. Custom VLSI chess chips (480 of them in the 1997 machine, on an IBM RS/6000 SP) generated and scored positions at roughly 200 million per second, and an alpha-beta search chose the move. The evaluation function that scored positions was designed by people and tuned against master games; IBM's own history lists the between-match upgrades as bigger endgame databases, a stronger evaluation function, more grandmaster advice, and ways to disguise its strategy. Wikipedia describes it as "a then-state-of-the-art expert system." **It did not learn.** Nothing in Deep Blue was trained on data in the way every post-2015 system in this collection was.

**The two matches.** February 10 to 17, 1996, Philadelphia: Kasparov 4–2. May 3 to 11, 1997, New York: Deep Blue 3½–2½ (two wins, three draws, one loss). Kasparov's collapse in game 6 is the famous ending; the pivotal moment was game 2, which Kasparov resigned in a position the Chess Programming Wiki describes as "possibly drawn."

## Why it's in the Hall of Fame
It is the first time a machine beat a reigning world champion in a match at chess, the game that had served as computing's measure of intelligence since Turing and Shannon. It also marks the end of one road: after 1997 the interesting question was no longer whether machines could win at chess, but whether they could learn to, which is the question [AlphaGo](../alphago-move-37/) and [AlphaZero](../alphazero-self-play/) answered.

## Honest caveats
- **Not machine learning.** Deep Blue is included as a landmark of computer play. Its strength came from hand-built hardware, hand-written evaluation, and search, not from a learned model. Readers comparing it with the learned systems here should treat it as the baseline those systems were later measured against.
- **One match, no rematch.** 3½–2½ over six games is a narrow margin. Kasparov demanded a third match; IBM declined, retired the machine, and dismantled it. Deep Blue never played again, so there is no larger sample.
- **The game 2 dispute.** Kasparov accused IBM of human intervention during game 2. IBM said the only human involvement was between games (adjusting the opening book and evaluation, which the match rules allowed). The allegation was never substantiated. Separately, the Wikipedia account records that a software bug produced an unexplained move that Kasparov read as a sign of deeper insight than the machine had.
- **Preparation asymmetry.** Deep Blue's team had studied Kasparov's games; Kasparov had no access to Deep Blue's games before the match. The Chess Programming Wiki's account frames the event as much a media exercise for IBM as a scientific test.
- **Chess-specific.** Deep Blue could do nothing but play chess, and its approach did not transfer to games like Go, whose branching factor defeats brute-force search.

## Sources
- [IBM history: Deep Blue](https://www.ibm.com/history/deep-blue)
- [Wikipedia: Deep Blue (chess computer)](https://en.wikipedia.org/wiki/Deep_Blue_(chess_computer))
- [Chess Programming Wiki: Kasparov versus Deep Blue 1997](https://chessprogramming.org/Kasparov_versus_Deep_Blue_1997)

---
*Back to **[README.md](./README.md)** · **[PROMPT.md](./PROMPT.md)**.*
