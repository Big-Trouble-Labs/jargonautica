---
title: "Maximum Likelihood Estimation"
aliases:
  - "MLE"
tags:
  - glossary/ai
  - ai/maths
section: "Maths and Statistics"
summary: "A method for choosing a model's settings by asking which settings would have made the data you actually saw most likely."
---

# Maximum Likelihood Estimation

## Plain View

A method for choosing a model's settings by asking which settings would have made the data you actually saw most likely. If a coin lands heads seven times out of ten, the most likely explanation is a coin that lands heads 70 per cent of the time. Training a language model to predict the next word is this same idea applied at enormous scale.

## Technical View

Chooses the parameters that maximise the likelihood of the observed data under a model, in practice by minimising the negative log-likelihood. Cross-entropy loss for classification and next-token prediction, and mean squared error under Gaussian noise, are both maximum likelihood objectives. Under regularity conditions the estimates are consistent and asymptotically efficient, but they overfit with small samples or very flexible models and give a single point estimate rather than a full distribution over parameters, with uncertainty available only through approximations such as standard errors from the Fisher information. Adding a prior gives maximum a posteriori estimation, which corresponds to regularisation; full Bayesian inference keeps the whole posterior instead.

## Related

- [[Loss Function]]: most losses are likelihoods in disguise
- [[Entropy and Information]]: cross-entropy as negative log-likelihood
- [[Prior and Posterior]]: the Bayesian alternative
- [[Probability Distribution]]: what the likelihood is computed under
- [[Overfitting]]: its main weakness with little data

---

Part of [[AI Terminology Index]], section: Maths and Statistics.
