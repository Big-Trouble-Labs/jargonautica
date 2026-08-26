---
title: "Agentic Retrieval"
aliases:
  - "Iterative Retrieval"
tags:
  - glossary/ai
  - ai/retrieval
section: "Retrieval and Knowledge"
summary: "Letting the model search several times, look at what came back, and search again with a better query, instead of doing one search and hoping."
---

# Agentic Retrieval

## Plain View

Letting the model search several times, look at what came back, and search again with a better query, instead of doing one search and hoping. It handles questions that need information from several places, and it costs more and takes longer, so it suits research-style tasks rather than quick lookups.

## Technical View

An iterative loop where the model issues queries, evaluates retrieved evidence for sufficiency, and reformulates or drills down until it can answer or hits a stopping condition. Suits multi-hop and comparative questions that single-shot retrieval cannot serve. Requires iteration and token budget caps, and evaluation must assess the trajectory, since a correct final answer can follow retrieval that missed the relevant evidence entirely.

## Related

- [[Retrieval Augmented Generation]]: the single-shot version
- [[Query Rewriting]]: reformulation between steps
- [[Agent]]: the loop it belongs to
- [[Budget Caps]]: why iteration needs limits
- [[Trajectory]]: what has to be evaluated

---

Part of [[AI Terminology Index]], section: Retrieval and Knowledge.
