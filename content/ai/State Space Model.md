---
title: "State Space Model"
aliases:
  - "Mamba"
  - "SSM"
tags:
  - glossary/ai
  - ai/machinery
section: "How the Machinery Works"
summary: "An alternative to attention that processes a sequence by maintaining a running summary, rather than looking back at everything each time."
---

# State Space Model

## Plain View

An alternative to attention that processes a sequence by maintaining a running summary, rather than looking back at everything each time. That makes cost grow in step with length rather than with its square, which matters enormously for very long inputs. Mamba is the best known example.

## Technical View

Derived from continuous-time linear systems, discretised and made input-dependent through selective mechanisms, giving linear-time training via parallel scan and constant-memory inference per token. Competitive with transformers at moderate scale and stronger on very long sequences, but weaker on tasks requiring precise recall of arbitrary earlier content, which is why hybrid architectures interleaving a few attention layers are the common compromise.

## Related

- [[Attention]]: the mechanism it replaces
- [[Linear Attention]]: a closely related family
- [[Recurrent Neural Network]]: the older recurrent idea it revives
- [[Context Window]]: the long-sequence problem it addresses
- [[Hidden Markov Model]]: the classical ancestor

---

Part of [[AI Terminology Index]], section: How the Machinery Works.
