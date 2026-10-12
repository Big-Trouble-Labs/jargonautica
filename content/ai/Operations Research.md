---
title: "Operations Research"
aliases:
  - "Operational Research"
tags:
  - glossary/ai
  - ai/adjacent
section: "Adjacent Fields"
summary: "The use of mathematics to make better decisions about complicated operations: how to schedule staff, route delivery vans, stock warehouses or share out scarce resources."
---

# Operations Research

## Plain View

The use of mathematics to make better decisions about complicated operations: how to schedule staff, route delivery vans, stock warehouses or share out scarce resources. It grew up in Britain just before and during the Second World War, applied to radar and convoy problems, and is now everyday business practice. Where machine learning finds patterns, it finds the best plan under given rules.

## Technical View

Core tools are linear and integer programming, network flows, queueing theory, simulation, dynamic programming and stochastic optimisation, solved by mature commercial and open source solvers. It overlaps heavily with machine learning: forecasts from learned models feed optimisation, learned heuristics speed up solvers, and reinforcement learning tackles sequential decisions framed as Markov decision processes. The usual division is that operations research proves optimality or bounds under an explicit model, while machine learning handles messy prediction without such guarantees, and the strongest systems combine both.

## Related

- [[Search and Optimisation]]: its core toolkit
- [[Simulation]]: a standard method for complex operations
- [[Reinforcement Learning]]: the learning approach to sequential decisions
- [[Heuristic]]: the fast alternative to exact solutions
- [[Time Series Forecasting]]: the predictions it plans around
- [[Game Theory]]: decisions against an opponent

---

Part of [[AI Terminology Index]], section: Adjacent Fields.
