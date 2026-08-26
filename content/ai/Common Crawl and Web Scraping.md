---
title: "Common Crawl and Web Scraping"
aliases:
  - "Common Crawl"
  - "Web Scraping"
tags:
  - glossary/ai
  - ai/data
section: "Data"
summary: "Where most of the text actually comes from."
---

# Common Crawl and Web Scraping

## Plain View

Where most of the text actually comes from. Common Crawl is a non-profit that has been copying large parts of the public web for years and giving the results away, and it or something like it underpins nearly every large model. This is why models know about obscure hobbies and forum arguments, and also why the question of consent has become so contentious.

## Technical View

Raw crawl data is extremely noisy and needs aggressive filtering, so derived collections such as C4, RefinedWeb and FineWeb apply published pipelines to produce usable subsets. Coverage is skewed towards English, towards pages that were linked to, and towards material that happened to be public at crawl time. Publishers increasingly block crawlers through robots.txt and licensing terms, which is gradually shifting the balance towards licensed and synthetic sources.

## Related

- [[Training Corpus]]: what this feeds
- [[Copyright and Training Data]]: the dispute this created
- [[Data Licensing]]: the paid alternative now growing
- [[Bias]]: coverage is skewed in ways that carry through
- [[Data Poisoning]]: an open crawl is an open door

---

Part of [[AI Terminology Index]], section: Data.
