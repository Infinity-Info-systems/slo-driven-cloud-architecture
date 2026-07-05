# Reliability vs Cost

## Purpose

This page explains how reliability and cost should be balanced rather than treated as opposing goals.

## Decision Rules

- improve reliability where user impact is high
- optimize cost where capacity is wasteful or overprovisioned
- use error budgets to guide when reliability work takes priority
- avoid removing safeguards that protect critical services

## Tradeoff Areas

### 1. Overprovisioning

- higher cost
- better headroom
- lower incident risk

### 2. Right-Sizing

- lower cost
- tighter margins
- possible reliability risk if overdone

### 3. Resilience Controls

- higher cost
- better recovery capability
- lower outage impact

## Example Tradeoff View

| Decision | Cost Impact | Reliability Impact |
| --- | --- | --- |
| Increase redundancy | Higher | Stronger |
| Right-size compute | Lower | Neutral to moderate risk |
| Add better monitoring | Moderate | Stronger |
| Remove a safety buffer | Lower | Higher risk |

## Recommended Practice

Use service criticality and error budget health to decide where to invest.

## Related Artifacts

- [Performance Optimization](./performance-optimization.md)
- [Executive Reporting](./executive-reporting.md)
- [SLO Scorecard](../models/slo-scorecard.md)
