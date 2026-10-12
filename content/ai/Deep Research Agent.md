---
title: "Deep Research Agent"
aliases:
  - "Deep Research"
tags:
  - glossary/ai
  - ai/agents
section: "Agents and Tools"
summary: "An AI agent that answers a research question by planning its own searches, reading many sources and writing up a referenced report, usually over several minutes rather than seconds."
---

# Deep Research Agent

## Plain View

An AI agent that answers a research question by planning its own searches, reading many sources and writing up a referenced report, usually over several minutes rather than seconds. Instead of answering from memory, it works more like a junior researcher: it decides what to look up, follows leads and gathers evidence. The output can save hours, but it can still misread or misquote its sources, so the references need checking.

## Technical View

Google introduced a feature under this name in December 2024, and several other developers followed with similar products. The pattern combines a planner that drafts a multi-step research plan, iterative search and browsing with queries rewritten in light of what has been found, reading and note-taking across many documents, and a final synthesis with citations. It is agentic retrieval run over a long horizon with a large context budget. Failure modes include citations that do not support the claim attached to them, over-weighting low-quality pages that rank well, and confident synthesis over thin evidence. Evaluation is hard because there is rarely a single right report.

## Related

- [[Agentic Retrieval]]: the retrieval pattern it is built on
- [[Grounding and Citation]]: where its value and its errors both sit
- [[Query Rewriting]]: how each search builds on the last
- [[Long-horizon Tasks]]: the kind of task it runs
- [[Hallucination]]: why its references need checking
- [[Planning and Decomposition]]: the research plan it starts from

---

Part of [[AI Terminology Index]], section: Agents and Tools.
