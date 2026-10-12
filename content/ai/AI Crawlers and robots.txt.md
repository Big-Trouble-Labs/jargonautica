---
title: "AI Crawlers and robots.txt"
aliases:
  - "Robots Exclusion Protocol"
  - "robots.txt"
tags:
  - glossary/ai
  - ai/data
section: "Data"
summary: "Automated programs that visit websites to copy their content for training or powering AI systems, and the simple text file sites use to ask them to stay away."
---

# AI Crawlers and robots.txt

## Plain View

Automated programs that visit websites to copy their content for training or powering AI systems, and the simple text file sites use to ask them to stay away. The file, robots.txt, sits at the root of a website and lists which visitors may read which pages. It is a polite request, not a lock: well-behaved crawlers follow it, others can ignore it.

## Technical View

The Robots Exclusion Protocol dates from 1994 and was standardised by the Internet Engineering Task Force ('IETF') as Request for Comments ('RFC') 9309 in September 2022, which states its rules are not access authorisation. AI developers publish user agent tokens so sites can opt out separately from search indexing. OpenAI's GPTBot and Google's Google-Extended, both from 2023, were early examples, the latter governing use in training and grounding Gemini models without affecting inclusion or ranking in Google Search, though not AI features within Search. Weaknesses are that it only works prospectively, cannot recall data already collected, relies on honest self-identification, and forces sites to track a growing list of agents.

## Related

- [[Common Crawl and Web Scraping]]: how the crawling is done
- [[Copyright and Training Data]]: the legal dispute it feeds into
- [[Data Licensing]]: the negotiated alternative to opting out
- [[Consent]]: the principle the file only partly expresses
- [[Training Corpus]]: where crawled pages end up

---

Part of [[AI Terminology Index]], section: Data.
