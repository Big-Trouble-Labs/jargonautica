---
title: "Human in the Loop"
tags:
  - glossary/ai
  - ai/agents
section: "Agents and Tools"
summary: "Keeping a person in the process at the points where it matters, rather than automating end to end."
---

# Human in the Loop

## Plain View

Keeping a person in the process at the points where it matters, rather than automating end to end. That might mean approving an action before it happens, reviewing output before it is sent, or handling anything the system is not confident about. It is the main practical control on systems that are usually right but not reliably so.

## Technical View

Design choices include where the checkpoint sits, what the reviewer is shown, and how their decision is captured for later training and audit. Confidence-based routing sends only uncertain cases for review, which controls cost but depends on calibration that language models tend to lack. The main failure mode is automation bias: reviewers who rubber-stamp fluent output provide the appearance of oversight without the substance, so review interfaces should surface evidence and disagreement rather than presenting a finished answer for approval.

## Related

- [[Automation Bias]]: why this safeguard is weaker than it sounds
- [[Agent]]: what most needs a checkpoint
- [[Guardrails]]: the automated counterpart
- [[Alignment]]: human judgement as the reference point
- [[Golden Dataset]]: review decisions become evaluation data

---

Part of [[AI Terminology Index]], section: Agents and Tools.
