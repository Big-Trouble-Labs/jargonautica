---
title: "BLEU and ROUGE"
aliases:
  - "BLEU"
  - "ROUGE"
tags:
  - glossary/ai
  - ai/measurement
section: "Measuring Performance"
summary: "Two long-standing scores that judge machine-written text by counting how many words and short phrases it shares with a version a person wrote."
---

# BLEU and ROUGE

## Plain View

Two long-standing scores that judge machine-written text by counting how many words and short phrases it shares with a version a person wrote. BLEU was built for translation, ROUGE for summaries. They are fast and cheap, but they reward wording rather than meaning, so a perfectly good answer phrased differently can score badly.

## Technical View

Bilingual Evaluation Understudy ('BLEU'), from Papineni and colleagues in 2002, computes modified n-gram precision against one or more references, combined geometrically with a brevity penalty. Recall-Oriented Understudy for Gisting Evaluation ('ROUGE'), from Chin-Yew Lin in 2004, emphasises recall of n-grams (ROUGE-N) or the longest common subsequence (ROUGE-L). Both correlate reasonably with human judgement at corpus level for constrained tasks, but poorly per sentence and for open-ended generation. Scores vary with tokenisation and preprocessing, so implementations need fixing for comparisons. For open-ended language model output, embedding-based metrics and model-based judging are now generally preferred, though both scores are still widely reported.

## Related

- [[Machine Translation]]: where BLEU originated
- [[Summarisation]]: where ROUGE is used
- [[Ground Truth]]: the reference text they compare against
- [[LLM as a Judge]]: an approach increasingly used alongside or instead of them
- [[Human Evaluation Protocol]]: the judgement they approximate

---

Part of [[AI Terminology Index]], section: Measuring Performance.
