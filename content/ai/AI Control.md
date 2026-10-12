---
title: "AI Control"
tags:
  - glossary/ai
  - ai/alignment
section: "Alignment and Safety Concepts"
summary: "An approach to safety that asks how to use a powerful AI system safely even if it might be secretly working against you, rather than relying only on making it trustworthy."
---

# AI Control

## Plain View

An approach to safety that asks how to use a powerful AI system safely even if it might be secretly working against you, rather than relying only on making it trustworthy. It uses monitoring, restrictions and checks, often with a weaker but trusted model watching a stronger one, and tests those defences by having a team play the part of a scheming model trying to get past them.

## Technical View

Formalised by Greenblatt, Shlegeris, Sachan and Roger of Redwood Research in a December 2023 paper. An untrusted capable model does the work, constrained by a less capable trusted model and a small budget of trusted human review. Protocols include trusted monitoring, where the weak model flags suspicious outputs for audit; trusted editing, where it rewrites them; and untrusted monitoring, where another instance of the strong model checks the work under measures that prevent collusion. Safety is estimated through control evaluations, in which a red team designs the attack strategy the untrusted model would follow. It complements alignment, and proponents accept it gets harder as models outstrip their monitors.

## Related

- [[Deceptive Alignment]]: the threat it assumes may be present
- [[Scalable Oversight]]: the complementary approach to supervising stronger models
- [[Red Teaming]]: how protocols are stress-tested
- [[Sandboxing]]: a containment measure protocols build on
- [[Sandbagging]]: a subversion strategy monitors must catch

---

Part of [[AI Terminology Index]], section: Alignment and Safety Concepts.
