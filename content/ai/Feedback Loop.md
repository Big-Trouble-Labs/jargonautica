---
title: "Feedback Loop"
tags:
  - glossary/ai
  - ai/product
section: "Product and Adoption"
summary: "Collecting signal from users about whether the output was any good, and actually using it."
---

# Feedback Loop

## Plain View

Collecting signal from users about whether the output was any good, and actually using it. Thumbs up and down are nearly free to add and produce weak, heavily biased data. The stronger signals are behavioural: what people edited, what they copied, what they abandoned.

## Technical View

Explicit feedback suffers from very low response rates and selection bias towards extremes. Implicit signals such as edit distance between generated and final text, copy events, regeneration, abandonment and downstream task success are more plentiful and more representative. A usable pipeline routes negative signals into a triage queue, produces evaluation cases from them, and closes the loop by reporting whether the fix worked.

## Related

- [[Golden Dataset]]: where negative signals should end up
- [[Error Analysis]]: what the signals feed
- [[Online and Offline Evaluation]]: closing the loop
- [[Reinforcement Learning from Human Feedback]]: the training use of preferences

---

Part of [[AI Terminology Index]], section: Product and Adoption.
