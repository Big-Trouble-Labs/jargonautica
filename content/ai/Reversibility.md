---
title: "Reversibility"
tags:
  - glossary/ai
  - ai/product
section: "Product and Adoption"
summary: "Making actions undoable wherever possible."
---

# Reversibility

## Plain View

Making actions undoable wherever possible. It is the single most effective safety feature in an AI product, because it converts a mistake from an incident into an inconvenience. Where an action genuinely cannot be undone, that is where confirmation belongs.

## Technical View

Techniques include soft deletion with a recovery window, drafts requiring explicit send, staged changes with review, and versioned state with rollback. Classify actions by reversibility and cost and require confirmation proportionate to both, rather than confirming everything, which trains users to click through. For agents, this classification should be enforced at the tool boundary rather than requested in the prompt.

## Related

- [[Error Recovery]]: the wider design goal
- [[Idempotency and Retries]]: the technical counterpart
- [[Least Privilege]]: confirmation proportionate to consequence
- [[Agent]]: what makes autonomy tolerable

---

Part of [[AI Terminology Index]], section: Product and Adoption.
