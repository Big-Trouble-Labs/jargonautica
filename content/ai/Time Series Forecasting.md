---
title: "Time Series Forecasting"
tags:
  - glossary/ai
  - ai/classical-ml
section: "Classical Machine Learning"
summary: "Predicting what comes next when order matters and yesterday influences today."
---

# Time Series Forecasting

## Plain View

Predicting what comes next when order matters and yesterday influences today. Demand, traffic, energy load, sales. The trap is that ordinary validation methods shuffle the data, which lets the model see the future, producing wonderful test scores and terrible forecasts.

## Technical View

Classical methods include ARIMA and exponential smoothing with explicit trend and seasonality; gradient boosting on lag features is a strong modern baseline; neural approaches include temporal convolutions and transformer variants. Validation must respect chronology through rolling-origin evaluation. Distinguish point forecasts from prediction intervals, and remember that simple seasonal-naive baselines beat sophisticated methods more often than published results suggest.

## Related

- [[Data Leakage]]: shuffling the data lets the model see the future
- [[Training, Validation and Test Sets]]: splits must respect chronology
- [[Time Series Foundation Model]]: the pre-trained approach
- [[Random Forest and Gradient Boosting]]: a very strong practical baseline
- [[Drift]]: the reason forecasts decay

---

Part of [[AI Terminology Index]], section: Classical Machine Learning.
