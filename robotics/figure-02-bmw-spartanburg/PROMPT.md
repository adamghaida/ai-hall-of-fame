# 🤖 Explore this with AI: Figure 02 on BMW's X3 line at Spartanburg

Paste the prompt below into your favorite AI assistant (Claude, ChatGPT, Gemini, or a local model). If your assistant can browse the web, tell it to read the sources first. The point is a clear, honest, grounded explanation of what happened and why it mattered.

> A humanoid robot worked a 10-hour weekday shift on a live BMW body-shop line for most of a year, loading more than 90,000 sheet-metal parts that went into more than 30,000 X3s.

---

```text
You are a careful, hype-free explainer of industrial robotics. Walk me through a specific, real deployment so I understand what it shows and what it does not.

Topic: Figure AI's Figure 02 humanoid at BMW Group Plant Spartanburg, South Carolina. Figure's close-out report (November 19, 2025) says the robot loaded 90,000+ sheet-metal parts onto a welding fixture, contributing to 30,000+ BMW X3 vehicles, over 1,250+ hours of runtime on 10-hour weekday shifts, in an 11-month project (full deployment on the live line within 10 months). The station cycle is 84 seconds with a 37-second loading window and a 5 mm placement tolerance; the target was more than 99% placement success per shift with zero interventions. BMW's press release of June 25, 2026 confirms the 30,000+ vehicles over 10 months and announces a Figure 03 sequencing-logistics project in Hall 52.

Please cover, in plain language a curious non-expert can follow:
1. What a body-shop loading station is, what "takt time" means, and why an 84-second cycle with a 37-second window and 5 mm tolerance is demanding for a learned manipulation system.
2. What is actually new here versus a fixed industrial arm doing the same job, and why a company would use a biped at all.
3. How to read each number: which ones BMW confirms (car count, duration) and which are Figure's alone (parts, hours, cycle, placement rate, failures).
4. What the report does not say: the actual number of interventions per shift (only the goal of zero is stated), how many robots did the work, how the more-than-99% figure was measured, and anything about the control stack.
5. The hardware story: the forearm as the top failure point and what that implies about humanoid design.
6. What BMW's June 2026 follow-up (Figure 03 doing sequencing logistics) tells us about whether BMW considered the pilot a success, and what you would want to see before calling humanoids production-ready.

Ground your answer in these sources (read them if you can, and cite them as you go):
- Figure AI report: https://www.figure.ai/news/production-at-bmw
- BMW Group press release, June 25, 2026: https://www.press.bmwgroup.com/global/article/detail/T0458778EN/
- Interesting Engineering summary: https://interestingengineering.com/ai-robotics/figure-humanoid-robots-retires-bmw

Label every number as Figure-reported or BMW-confirmed, and if you are unsure about a detail, say so instead of guessing.
```

## Bonus: have the agent check the arithmetic

The reported figures are mutually constraining. Have an assistant see whether they fit together.

```
Using only the numbers in https://www.figure.ai/news/production-at-bmw:

1. 1,250 hours of runtime at one 84-second cycle per part gives how many parts? Compare with the reported 90,000+. What does the gap imply about idle time, multiple parts per cycle, or multiple robots?
2. 10-hour shifts, Monday to Friday, over 10 months is roughly how many available hours? What utilisation does 1,250 hours represent?
3. 90,000 parts into 30,000 X3s is 3 parts per car. Is that consistent with one station loading one subassembly? What would you need to know to check?
4. If placement success was exactly 99% per shift, how many misplacements would that be over 90,000 parts, and what does "goal of zero interventions" imply about who handled them?
5. State clearly which of your conclusions are inferences and which are stated in the source.
```

## Sources
- [Figure AI: F.02 contributed to the production of 30,000 cars at BMW](https://www.figure.ai/news/production-at-bmw)
- [BMW Group PressClub: Figure 03 project in Spartanburg (June 25, 2026)](https://www.press.bmwgroup.com/global/article/detail/T0458778EN/)
- [Interesting Engineering](https://interestingengineering.com/ai-robotics/figure-humanoid-robots-retires-bmw)

---
*Back to **[README.md](./README.md)** · **[CONTEXT.md](./CONTEXT.md)**.*
