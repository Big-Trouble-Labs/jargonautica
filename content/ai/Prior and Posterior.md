---
title: "Prior and Posterior"
aliases:
  - "Prior"
  - "Posterior"
tags:
  - glossary/ai
  - ai/maths
section: "Maths and Statistics"
summary: "What you believed before seeing the evidence, and what you believe after."
---

# Prior and Posterior

## Plain View

What you believed before seeing the evidence, and what you believe after. Choosing a prior is unavoidable and often uncomfortable, because it means stating your assumptions explicitly rather than pretending you had none. Everyone has priors; the Bayesian approach just makes you write them down.

## Technical View

In Bayesian inference, distributions over parameters before and after conditioning on data. Priors range from informative, encoding domain knowledge, to weakly informative or uninformative, and the choice matters most when data is scarce. Regularisation has a direct Bayesian reading: L2 penalty corresponds to a Gaussian prior on weights, L1 to a Laplace prior, which is a useful way to see that regularisation is an assumption rather than a trick.

## Related

- [[Bayes' Theorem]]: the rule that updates one into the other
- [[Regularisation and Dropout]]: regularisation as a prior on weights
- [[Aleatoric and Epistemic Uncertainty]]: what uncertainty over parameters means
- [[Base Rate Fallacy]]: the cost of neglecting the prior

---

Part of [[AI Terminology Index]], section: Maths and Statistics.
