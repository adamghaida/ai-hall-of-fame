# 📚 Context: Figure 02 on BMW's X3 line at Spartanburg

**The companies.** Figure AI is a Sunnyvale humanoid-robot startup founded in 2022 by Brett Adcock. Figure 02 was its second-generation robot, announced in August 2024; Figure 03 replaced it in late 2025. BMW Group Plant Spartanburg is BMW's largest plant by volume and builds the X3 among other models. BMW and Figure announced a commercial agreement in January 2024; the Spartanburg body-shop work described here ran through most of 2025.

**The task.** In a body shop, stamped sheet-metal parts are loaded onto a fixture and welded into subassemblies. The loading step is usually done by a person or a dedicated fixed arm. Figure 02 stood at one such station, picked parts from racks or bins, and placed them on the welding fixture within a 5 mm tolerance inside a 37-second loading window of an 84-second station cycle. Everything downstream was ordinary automation.

**The numbers, and where each comes from.**

| Figure | Source |
|---|---|
| 90,000+ parts loaded | Figure AI report, November 19, 2025 |
| 30,000+ X3 vehicles | Figure AI report; confirmed in BMW Group press release, June 25, 2026 |
| 1,250+ hours runtime; 10-hour shifts, Monday to Friday | Figure AI report |
| 84 s cycle, 37 s load window, 5 mm tolerance, more than 99% placement per shift | Figure AI report |
| 11-month project, full deployment within 10 months | Figure AI report (BMW's release says 10 months) |
| Roughly 200 miles walked | Interesting Engineering, summarising Figure |
| Forearm the top hardware failure point | Figure AI report |

**What came next.** BMW's June 2026 release moves Figure 03 to Hall 52 for sequencing logistics: picking unsorted parts from large containers into sequencing trolleys for just-in-sequence delivery to the assembly line. Figure 03 adds tactile sensors and palm cameras in the hands, soft exterior safety components, wireless charging and speech interaction. BMW says it intends to scale the sequencing use case across production logistics.

## Why it's in the Hall of Fame
It is the first documented, customer-confirmed run of a humanoid robot at production pace on a live automotive line over a period of months, with output counted in finished cars. Most humanoid claims are demos; this one has a takt time, a tolerance and a car count, and the customer put its name to the car count.

## Honest caveats
- **Company-reported figures.** The part count, hours, cycle times, placement rate and failure data all come from Figure's own report. BMW's press release confirms the 30,000+ vehicles and the 10-month duration but none of the operational detail.
- **Intervention counts are not disclosed.** Figure states that the goal was zero interventions per shift. It does not say how many interventions actually happened, how often a person had to reset the robot or the cell, or how the more-than-99% figure was measured.
- **Number of robots not stated.** Figure's report refers to a "Figure 02 robot deployment" and a "fleet-wide retirement" but never says how many units worked the station. The 1,250 hours of runtime over roughly ten months of 10-hour weekday shifts is consistent with a single station rather than a fleet, but that is our inference, not Figure's statement.
- **A simple, repetitive task.** Sheet-metal loading at a fixed station is well within reach of conventional automation. The claim is not that the robot did something an arm could not, but that a general-purpose biped did it at production pace in an unmodified cell.
- **11 months versus 10 months.** Figure's headline says an 11-month deployment; its text and BMW's release say full deployment was reached within 10 months. The difference appears to be integration time versus time on the live line.
- **Hardware wear was real.** Figure itself reports the forearm as the top failure point; Interesting Engineering's headline describes the robots as retiring "bruised." The data on failures is qualitative.
- **No published method.** Figure has not described the perception or control stack used at BMW, so nothing here is reproducible from the sources.
- **Commercial context.** Both companies have an interest in the deployment looking successful. BMW's follow-up was published alongside the announcement of a new Figure 03 contract.

## Sources
- [Figure AI: F.02 contributed to the production of 30,000 cars at BMW (November 19, 2025)](https://www.figure.ai/news/production-at-bmw)
- [BMW Group PressClub: Figure 03 project in Spartanburg (June 25, 2026)](https://www.press.bmwgroup.com/global/article/detail/T0458778EN/)
- [Interesting Engineering: Figure humanoid robots retire bruised after 11 months of work at BMW](https://interestingengineering.com/ai-robotics/figure-humanoid-robots-retires-bmw)

---
*Back to **[README.md](./README.md)** · **[PROMPT.md](./PROMPT.md)**.*
