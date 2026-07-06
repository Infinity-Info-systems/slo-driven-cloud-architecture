# Error Budget Model

## Purpose

The error budget model turns reliability into a governance mechanism by showing how much failure is acceptable before release or operational action changes.

## Model Elements

- target availability or latency goal
- error budget allowance
- burn rate
- remaining budget
- action threshold

## Operating Rules

### Healthy State

- budget burn is within expected range
- teams can keep shipping
- monitoring continues normally

### Warning State

- burn rate is rising
- service owners review risk
- remediation work is prioritized

### Critical State

- budget is near exhausted
- release pace is reduced or paused
- incident or reliability review is triggered

## Operational Notes

- use burn rate to trigger discussion early
- tie budget status to delivery decisions
- keep the threshold understandable to non-specialists

## Example Budget View

| Service | Budget | Used | Remaining | State |
| --- | --- | --- | --- | --- |
| API Gateway | 100 units | 35 | 65 | Healthy |
| Checkout | 100 units | 72 | 28 | Warning |
| Batch Pipeline | 100 units | 91 | 9 | Critical |

## Related Practices

- use the budget to guide release decisions
- keep burn rate visible to service owners
- review threshold breaches quickly
- use post-incident learning to tune the model

## Related Artifacts

- [Error Budget Template](../templates/error-budget-template.md)
- [Incident Review Template](../templates/incident-review-template.md)
- [SLO Scorecard](../models/slo-scorecard.md)
