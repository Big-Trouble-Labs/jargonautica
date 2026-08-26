---
title: "Lost in the Middle"
tags:
  - glossary/ai
  - ai/language-models
section: "Language Models Specifically"
summary: "The finding that models attend well to the start and the end of a long input and less well to everything in between."
---

# Lost in the Middle

## Plain View

The finding that models attend well to the start and the end of a long input and less well to everything in between. Put the crucial paragraph in the middle of a hundred pages and it may be effectively ignored, even though it is technically inside the context window. A large window is not the same as reliable use of that window, and this is the clearest evidence of it.

## Technical View

Documented as a U-shaped performance curve on retrieval tasks as the position of the relevant passage varies, attributed to a combination of attention dilution over long sequences and position biases inherited from the training data distribution. The practical consequences are to put instructions and critical material at the beginning or the end, order retrieved documents accordingly, and prefer a few well-chosen chunks over many. Long-context benchmarks that only test finding a single planted fact overstate real performance, since real tasks require reasoning across several scattered passages.

## Related

- [[Context Window]]: the limit this qualifies
- [[Context Engineering]]: the practice that exists partly because of this
- [[Retrieval Augmented Generation]]: where document ordering matters
- [[Chunking]]: why fewer, better chunks beat many
- [[Attention]]: the mechanism the effect is attributed to

---

Part of [[AI Terminology Index]], section: Language Models Specifically.
