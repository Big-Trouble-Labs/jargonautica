---
title: "Energy and Water Use"
aliases:
  - "Carbon Footprint"
tags:
  - glossary/ai
  - ai/hardware
section: "Hardware, Compute and Training Mechanics"
summary: "The physical resource cost of building and running these systems."
---

# Energy and Water Use

## Plain View

The physical resource cost of building and running these systems. Training a frontier model consumes a great deal of electricity, and the data centres that host them use water for cooling, sometimes in places where water is already short. Individual queries are small, but the total across billions of them is not, and demand growth is now a live consideration in national energy planning.

## Technical View

Reported training figures usually cover only the final run and exclude experimentation, data preparation and the embodied carbon of the hardware, so published numbers understate the total. Inference dominates lifetime energy for any widely used model. Fair comparison needs power usage effectiveness, the carbon intensity of the local grid and water usage effectiveness together, and these are rarely disclosed as a set. Efficiency per unit of capability has improved rapidly while absolute consumption has risen anyway, which is a familiar rebound pattern.

## Related

- [[Compute]]: the thing being consumed
- [[Data Centre and Interconnect]]: where consumption happens
- [[Inference]]: which dominates lifetime energy
- [[Training]]: the visible but smaller share
- [[Quantisation]]: efficiency work with a direct energy effect

---

Part of [[AI Terminology Index]], section: Hardware, Compute and Training Mechanics.
