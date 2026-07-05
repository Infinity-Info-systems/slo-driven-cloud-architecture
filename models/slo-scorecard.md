# SLO Scorecard

This scorecard gives teams a practical way to measure whether a service is being operated within its reliability targets.

## Purpose

Use this scorecard to track service health, error budget usage, and the tradeoff between reliability and delivery speed.

## Scorecard Areas

### 1. Availability

- Target uptime
- Actual uptime
- Gap to target
- Trend versus prior period

### 2. Latency

- P50 response time
- P95 response time
- P99 response time
- User-impact threshold

### 3. Error Rate

- Request error percentage
- Dependency failure rate
- Retry amplification risk
- Incident correlation

### 4. Error Budget

- Budget allocated
- Budget consumed
- Burn rate
- Remaining days at current burn

### 5. Recovery Performance

- Mean time to detect
- Mean time to recover
- Recovery success rate
- Follow-up actions closed

## Operating Summary

| Area | Target | Current | Status |
| --- | --- | --- | --- |
| Availability | 99.9% | 99.86% | At Risk |
| Latency | < 300 ms P95 | 340 ms P95 | Needs Action |
| Error Rate | < 0.5% | 0.42% | Healthy |
| Error Budget | < 50% consumed | 63% consumed | At Risk |
| Recovery Performance | < 60 min MTTR | 47 min MTTR | Healthy |

## Review Rhythm

Recommended cadence:

1. Daily service review for active incidents
2. Weekly SLO review for trend tracking
3. Monthly executive reliability summary
4. Quarterly target reset and operating model review

## Recommended Actions

- tighten alert thresholds where burn rate is high
- review dependency failures driving error spikes
- reprioritize reliability work when budget burn accelerates
- report sustained target misses to executive stakeholders

## Related Artifacts

- [SLO Template](../templates/slo-template.md)
- [Error Budget Template](../templates/error-budget-template.md)
- [Incident Review Template](../templates/incident-review-template.md)
- [Reliability Dashboard](../dashboards/sample-reliability-dashboard.md)
