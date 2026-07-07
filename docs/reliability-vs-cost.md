# Reliability Vs Cost

## Purpose

This doc describes how to balance reliability investment with cost tradeoffs.

## Tradeoff Areas

- redundancy
- latency improvement
- capacity headroom
- observability depth
- automation overhead

## Decision Questions

- is the reliability gain worth the cost?
- is the current service tier appropriate?
- where can cost be reduced without harming the SLO?

## Outcomes

- deliberate tradeoff decisions
- better budget alignment
- clearer service tiering

## Decision Rule

Choose the lowest-cost option that still protects the agreed service outcome and SLO.
