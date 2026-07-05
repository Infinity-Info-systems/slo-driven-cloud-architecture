# Performance Optimization

## Purpose

Performance optimization improves user experience while respecting reliability and cost constraints.

## Optimization Areas

- latency reduction
- dependency tuning
- caching
- capacity planning
- workload scheduling

## Optimization Approach

### 1. Identify Bottlenecks

- slow services
- dependency failures
- resource saturation
- expensive retry patterns

### 2. Prioritize Impact

- user-facing flows first
- high-volume services next
- low-risk improvements before deeper redesign

### 3. Validate Gains

- compare before and after metrics
- confirm error budget impact
- capture evidence

## Example Optimization Log

| Action | Metric Improved | Outcome |
| --- | --- | --- |
| Add caching | P95 latency | Improved response time |
| Tune dependency retries | Error rate | Reduced failures |
| Right-size compute | Cost | Lower spend |

## Related Artifacts

- [Reliability vs Cost](./reliability-vs-cost.md)
- [SLO Scorecard](../models/slo-scorecard.md)
- [Sample Reliability Dashboard](../dashboards/sample-reliability-dashboard.md)
