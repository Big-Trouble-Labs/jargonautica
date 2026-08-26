---
title: "ReAct"
aliases:
  - "Reason and Act"
tags:
  - glossary/ai
  - ai/agents
section: "Agents and Tools"
summary: "The basic loop most agents run on: think about what to do, do it, look at the result, think again."
---

# ReAct

## Plain View

The basic loop most agents run on: think about what to do, do it, look at the result, think again. Writing the reasoning out before acting improves the choice of action, and feeding the result back in lets the system correct itself rather than committing to a plan made before it knew anything.

## Technical View

Interleaves reasoning traces with actions and observations in a single generation loop. The reasoning step measurably improves tool selection and argument construction over acting directly. Practical concerns are context growth as the trace accumulates, requiring compaction, and error compounding across steps. Most production agent frameworks are variations on this pattern with added structure around termination, retries and state.

## Related

- [[Tool Schema]]: what the model reads to choose a tool
- [[Scratchpad]]: where the intermediate work goes
- [[Agent]]: the pattern most agents follow
- [[Chain of Thought]]: the reasoning half
- [[Tool Use and Function Calling]]: the acting half
- [[Trajectory]]: what the loop produces
- [[Context Engineering]]: managing the growing trace

---

Part of [[AI Terminology Index]], section: Agents and Tools.
