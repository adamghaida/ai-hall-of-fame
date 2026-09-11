# 🤖 Explore this with AI: Watson wins Jeopardy!

Paste the prompt below into your favorite AI assistant (Claude, ChatGPT, Gemini, or a local model). If your assistant can browse the web, tell it to read the sources first. The point is a clear, honest, grounded explanation of what happened and why it mattered.

> A room-sized IBM system beat the two best Jeopardy! players in history on live television, while famously answering "Toronto" to a question about US cities.

---

```text
You are a sharp, honest science explainer. Walk me through a specific, real milestone in AI so that I actually understand it, not just the headline.

Topic: IBM Watson defeating Ken Jennings and Brad Rutter at Jeopardy! in a two-game match broadcast February 14 to 16, 2011 (recorded January 14 at IBM Yorktown Heights), finishing $77,147 to $24,000 and $21,600.

Please cover, in plain language a curious non-expert can follow:
1. What actually happened, including the practice round, the final totals, the $1 million prize donated to charity, and the "What is Toronto?????" Final Jeopardy miss (and why the $947 wager mattered).
2. How Watson worked: the DeepQA pipeline (question analysis, candidate generation from about 200 million pages of offline text, evidence scoring, confidence estimation, and the buzz threshold), the 90 Power 750 servers and 2,880 cores, and roughly three seconds per clue. Be clear that this was an engineered system of many components, not a neural network or a single trained model, and explain how that differs from today's language models.
3. Why it mattered: open-domain question answering over natural language, confidence calibration under penalty, and the public impact.
4. The honest caveats: the buzzer (electronic delivery of the clue, a solenoid pressing the button 5 to 10 ms after the decision, versus human reaction times, and Rutter's "It was its buzzer that killed us"), the exhibition setting, the understanding failures, and the gap between the 2011 system and the later "Watson" product brand.
5. What I should read or explore next to go deeper.

Ground your answer in these primary sources (read them if you can, and cite them as you go):
- IBM history: Watson, 'Jeopardy!' champion: https://www.ibm.com/history/watson-jeopardy
- Wikipedia: IBM Watson: https://en.wikipedia.org/wiki/IBM_Watson
- The Kurzweil Library on the buzzer question: https://www.thekurzweillibrary.com/the-buzzer-factor-did-watson-have-an-unfair-advantage

Be concrete, use real numbers where they matter, and if you are unsure about a detail, say so instead of guessing.
```

## Bonus: have the agent re-run the Toronto clue

The failure is more instructive than the wins. Give an assistant the exact clue and category and ask it to work like DeepQA:

```
Find the exact wording of the Final Jeopardy clue from game 1 of the February 2011 IBM Watson match (category "U.S. Cities"; correct response: Chicago) from the Wikipedia article on IBM Watson or another reliable source, and quote it. Then, treating the clue the way DeepQA would: list your top five candidate answers with a confidence for each and the evidence supporting each one; explain how a system could arrive at "Toronto"; say what role the category constraint should have played; and decide how much you would wager given your stated confidence, compared with Watson's $947.
```

---

## Sources
- [IBM history: Watson, 'Jeopardy!' champion](https://www.ibm.com/history/watson-jeopardy)
- [Wikipedia: IBM Watson](https://en.wikipedia.org/wiki/IBM_Watson)
- [The Kurzweil Library: "The buzzer factor: did Watson have an unfair advantage?"](https://www.thekurzweillibrary.com/the-buzzer-factor-did-watson-have-an-unfair-advantage)

---
*Back to **[README.md](./README.md)** · **[CONTEXT.md](./CONTEXT.md)**.*
