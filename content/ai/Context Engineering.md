---
title: "Context Engineering"
tags:
  - glossary/ai
  - ai/runtime
section: "Controlling and Extending Behaviour at Run Time"
summary: "The successor to prompt engineering."
---

# Context Engineering

## Plain View

The successor to prompt engineering. Once systems started retrieving documents, calling tools and carrying memory, the interesting question stopped being how to phrase a request and became what should be in the context window at all, in what order, and what should be dropped. Most quality problems in serious applications turn out to be context problems rather than model problems.

## Technical View

Concerns include budget allocation across system instructions, memory, retrieved material, tool definitions and conversation history; ordering, given position effects such as lost in the middle and the value of a stable cacheable prefix; compaction and summarisation as a conversation grows; and pruning of stale tool results. Tool definitions are themselves part of the context and degrade selection accuracy when too numerous, so exposing a smaller relevant set matters. The discipline is closer to systems design than to writing, and it is where most engineering effort in agentic applications now goes.

## Related

- [[Prompt Engineering]]: the narrower practice this grew out of
- [[Context Window]]: the budget being managed
- [[Lost in the Middle]]: why ordering matters
- [[Retrieval Augmented Generation]]: the largest consumer of context
- [[Caching]]: why a stable prefix is worth designing for
- [[Memory]]: another claim on the same space

---

Part of [[AI Terminology Index]], section: Controlling and Extending Behaviour at Run Time.
