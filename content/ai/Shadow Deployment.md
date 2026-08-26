---
title: "Shadow Deployment"
tags:
  - glossary/ai
  - ai/measurement
section: "Measuring Performance"
summary: "Running the new system alongside the old one on real traffic, without acting on its output or showing it to anyone."
---

# Shadow Deployment

## Plain View

Running the new system alongside the old one on real traffic, without acting on its output or showing it to anyone. It reveals how the new thing behaves on genuine inputs, which never look like your test set, with no risk to users.

## Technical View

Mirrors production requests to the candidate system and logs results for offline comparison, isolating it from user-visible effects and side effects. It surfaces distribution differences between test and live traffic, latency and cost under real load, and error classes absent from curated evaluations. Care is needed that the shadow path cannot perform actions, and that duplicated requests do not double costs or trip rate limits.

## Related

- [[Canary Release]]: the next step, with real exposure
- [[Online and Offline Evaluation]]: bridging the two
- [[Load Testing]]: measuring behaviour under real traffic
- [[Model Router]]: comparing candidate models safely

---

Part of [[AI Terminology Index]], section: Measuring Performance.
