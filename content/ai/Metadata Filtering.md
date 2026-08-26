---
title: "Metadata Filtering"
tags:
  - glossary/ai
  - ai/retrieval
section: "Retrieval and Knowledge"
summary: "Narrowing by attribute before ranking by meaning."
---

# Metadata Filtering

## Plain View

Narrowing by attribute before ranking by meaning. Only documents from this department, this year, this security classification. It is the mechanism that keeps a retrieval system from showing people things they should not see, and it needs to be enforced at query time rather than by filtering results afterwards.

## Technical View

Applied as pre-filtering, restricting the search space before vector comparison, or post-filtering, discarding results afterwards. Pre-filtering is correct for access control and avoids returning too few results, but interacts awkwardly with approximate nearest neighbour indexes, which is why database engines that combine both matter. Permission filters must derive from the requesting user's entitlements at query time, since embedding-level isolation is not a security control.

## Related

- [[Vector Database]]: where filtering is applied
- [[Tenant Isolation]]: the security use of filters
- [[Schema and Metadata]]: the attributes being filtered on
- [[Retrieval Augmented Generation]]: narrowing before ranking

---

Part of [[AI Terminology Index]], section: Retrieval and Knowledge.
