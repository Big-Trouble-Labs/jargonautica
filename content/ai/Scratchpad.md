---
title: "Scratchpad"
tags:
  - glossary/ai
  - ai/agents
section: "Agents and Tools"
summary: "Working space where the model can think, calculate and take notes without that appearing in the final answer."
---

# Scratchpad

## Plain View

Working space where the model can think, calculate and take notes without that appearing in the final answer. It gives the model somewhere to be wrong before it is right, which improves the answer, and it keeps the mess out of the user's view.

## Technical View

Implemented as delimited regions filtered from the displayed output, or as separate reasoning tokens in models that support them. It provides additional computation for a hard problem and allows conditioning on partial results. Note that scratchpad content is not a reliable account of the model's actual processing, and that it counts fully against context and cost even when discarded.

## Related

- [[Chain of Thought]]: the reasoning it holds
- [[Reasoning Models and Test-Time Compute]]: internalised in newer models
- [[Context Window]]: it consumes budget even when discarded
- [[Chain-of-thought Faithfulness]]: it is not a reliable account of processing

---

Part of [[AI Terminology Index]], section: Agents and Tools.
