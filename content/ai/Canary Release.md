---
title: "Canary Release"
tags:
  - glossary/ai
  - ai/measurement
section: "Measuring Performance"
summary: "Giving the new version to a small share of traffic first, watching, and rolling out further only if it holds up."
---

# Canary Release

## Plain View

Giving the new version to a small share of traffic first, watching, and rolling out further only if it holds up. It limits the blast radius of a bad change, and it only works if you have decided in advance what you are watching and what number triggers a rollback.

## Technical View

Progressive exposure, commonly one per cent then five then twenty-five, gated on automated health checks covering error rate, latency percentiles, cost per request and quality signals. Requires that the metrics move fast enough to be informative at low traffic volumes, which for quality signals often means proxy measures rather than outcome measures. Automatic rollback on threshold breach is the part most often omitted and most valuable.

## Related

- [[Shadow Deployment]]: the zero-exposure predecessor
- [[Rollback]]: what happens when it fails
- [[Service Level Objective]]: the thresholds that gate it
- [[Observability and Tracing]]: how it is watched

---

Part of [[AI Terminology Index]], section: Measuring Performance.
