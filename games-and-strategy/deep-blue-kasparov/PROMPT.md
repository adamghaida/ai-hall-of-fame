# 🤖 Explore this with AI: Deep Blue beats Kasparov

Paste the prompt below into your favorite AI assistant (Claude, ChatGPT, Gemini, or a local model). If your assistant can browse the web, tell it to read the sources first. The point is a clear, honest, grounded explanation of what happened and why it mattered.

> The first computer to beat a reigning world chess champion in a match, by brute-force search rather than learning.

---

```text
You are a sharp, honest science explainer. Walk me through a specific, real milestone in computer game-playing so that I actually understand it, not just the headline.

Topic: IBM's Deep Blue defeating world chess champion Garry Kasparov 3½–2½ in New York, May 3 to 11, 1997, after losing to him 4–2 in Philadelphia in February 1996.

Please cover, in plain language a curious non-expert can follow:
1. What actually happened in both matches, game by game, and why beating a reigning champion under tournament time controls had been out of reach.
2. How Deep Blue worked: the 480 custom chess chips on an IBM RS/6000 SP, roughly 200 million positions per second, alpha-beta search, and a hand-written, hand-tuned evaluation function with grandmaster input. Be explicit that this was NOT machine learning: nothing was trained on data, and explain how that differs from AlphaZero twenty years later.
3. Why it mattered: chess as computing's long-standing benchmark for intelligence, and what the result did and did not prove about machines "thinking."
4. The honest caveats: the narrow six-game margin, Kasparov's unsubstantiated accusation of human intervention in game 2, IBM's refusal of a third match and dismantling of the machine, the preparation asymmetry, and the fact that nothing Deep Blue did transferred to any other game.
5. What I should read or explore next to go deeper, including how modern chess engines differ from Deep Blue.

Ground your answer in these primary sources (read them if you can, and cite them as you go):
- IBM history: Deep Blue: https://www.ibm.com/history/deep-blue
- Wikipedia: Deep Blue (chess computer): https://en.wikipedia.org/wiki/Deep_Blue_(chess_computer)
- Chess Programming Wiki: Kasparov versus Deep Blue 1997: https://chessprogramming.org/Kasparov_versus_Deep_Blue_1997

Be concrete, use real numbers where they matter, and if you are unsure about a detail, say so instead of guessing.
```

## Bonus: have the agent check the games

The six 1997 games are public. Have an assistant with a chess engine or a python-chess environment replay game 2 and game 6:

```
Load the PGN of Kasparov vs Deep Blue, 1997, games 2 and 6 (available from the Chess Programming Wiki or any major game database). In game 2, run an engine on the final position after 45.Ra6 and report whether Black had a drawing continuation, as later analysis claimed. In game 6, identify the move where Kasparov's position became lost and explain why in one paragraph each. Report engine name, depth, and evaluations.
```

---

## Sources
- [IBM history: Deep Blue](https://www.ibm.com/history/deep-blue)
- [Wikipedia: Deep Blue (chess computer)](https://en.wikipedia.org/wiki/Deep_Blue_(chess_computer))
- [Chess Programming Wiki: Kasparov versus Deep Blue 1997](https://chessprogramming.org/Kasparov_versus_Deep_Blue_1997)

---
*Back to **[README.md](./README.md)** · **[CONTEXT.md](./CONTEXT.md)**.*
