# Figure 02 loads 90,000 sheet-metal parts on BMW's X3 line at Spartanburg

**Field:** 🤖 Robotics  ·  **When:** November 2025 · Figure AI deployment report; BMW Group follow-up June 2026

> A humanoid robot worked a 10-hour weekday shift on a live BMW body-shop line for most of a year, loading more than 90,000 sheet-metal parts that went into more than 30,000 X3s. The numbers are Figure's; BMW confirms the car count and calls Spartanburg the birthplace of humanoid robotics in its day-to-day operations.

## What happened
On November 19, 2025, Figure AI published a close-out report on its Figure 02 humanoid at BMW Group Plant Spartanburg, South Carolina, the first humanoid deployment on a running automotive production line. The company-reported figures:

- **90,000+ sheet-metal parts** loaded, contributing to the production of **30,000+ BMW X3** vehicles
- **1,250+ hours** of runtime, on a **10-hour shift, Monday to Friday**
- An **11-month** project overall; full deployment on the active line was reached within 10 months
- Task: pick sheet-metal parts from racks or bins and place them on a welding fixture, after which conventional industrial robots weld them. The station's total cycle time is **84 seconds**, of which **37 seconds** is the robot's loading window; parts must be placed within a **5 mm** tolerance, which the robot does in about 2 seconds
- Target of **more than 99%** placement success per shift, and a goal of zero interventions per shift
- The forearm was the top hardware failure point (three degrees of freedom and thermal management packed into a small volume); Figure describes overall hardware failures as minimal
- Interesting Engineering, summarising the report, adds that the robot walked roughly 200 miles inside the plant over the deployment

Figure 02 was retired fleet-wide after this deployment as its successor, Figure 03, arrived. On June 25, 2026, BMW Group's press office published a follow-up confirming that Figure 02 had supported production of more than 30,000 X3s over 10 months and announcing a Figure 03 project in Hall 52 at Spartanburg. The new task is sequencing logistics: picking unsorted components from large containers and sorting them into trolleys for just-in-sequence delivery to assembly workers. Ulrich Wieland, Vice President of Production Control and Logistics at BMW Manufacturing, is quoted: "Plant Spartanburg is the birthplace of humanoid robotics in BMW Manufacturing's operational day-to-day activities."

## Why it matters
Humanoid robots have been demonstrated in staged warehouse videos for years. This is the first case where one held a takt-timed station on a real car line for a sustained period, with the customer publicly counting the output. The 84-second cycle, 37-second window and 5 mm tolerance are the sort of constraints that ordinarily rule out learned manipulation, and the reported placement rate above 99% per shift is a real production number, not a benchmark.

It is also a modest one. The task is a single, repetitive pick-and-place that a fixed industrial arm could do; the interesting claim is that a general-purpose biped did it at production pace without a redesign of the cell. Figure does not report how many interventions actually occurred (only the goal of zero), does not state how many robots did the work, and has not published the control stack; BMW's release confirms the outcome but not the operational detail. See [CONTEXT.md](./CONTEXT.md).

## Sources — the record of the discovery
- [Figure AI: F.02 contributed to the production of 30,000 cars at BMW (November 19, 2025)](https://www.figure.ai/news/production-at-bmw)
- [BMW Group PressClub: BMW Group advances the use of Physical AI in production with Figure 03 project in Spartanburg (June 25, 2026)](https://www.press.bmwgroup.com/global/article/detail/T0458778EN/)
- [Interesting Engineering: Figure humanoid robots retire bruised after 11 months of work at BMW](https://interestingengineering.com/ai-robotics/figure-humanoid-robots-retires-bmw)

---
*In this folder: **[PROMPT.md](./PROMPT.md)** (a prompt to explore it with AI) · **[CONTEXT.md](./CONTEXT.md)** (background & caveats). Part of the [AI Hall of Fame](../../README.md) → [🤖 Robotics](../).*
