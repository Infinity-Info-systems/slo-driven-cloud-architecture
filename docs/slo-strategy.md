# SLO Strategy

## Purpose

The SLO strategy defines how teams set service targets that are meaningful, measurable, and tied to user impact.

## Strategy Principles

- measure outcomes, not just infrastructure
- tie targets to user experience
- keep SLOs few and focused
- review targets with service owners
- connect SLOs to action thresholds
- make targets measurable from existing telemetry where possible

## SLO Design Flow

### 1. Identify Critical User Journeys

- login
- checkout
- API request flow
- background job completion

### 2. Choose Meaningful SLIs

- latency
- availability
- error rate
- throughput
- freshness

### 3. Set Targets

- define the objective
- define the measurement window
- define the alert threshold
- define the owner

### 4. Validate The Target

- test against historical data
- confirm the threshold is realistic
- ensure the target supports service goals

## Operational Notes

- keep targets limited to the most important services
- avoid SLO sprawl
- revisit targets after major changes

## Example SLO Set

| Service | SLO | Window |
| --- | --- | --- |
| API Gateway | 99.9% successful requests | 30 days |
| Checkout | P95 latency under 300 ms | 30 days |
| Batch Pipeline | 99% completed on time | 7 days |

## Related Artifacts

- [SLO Template](../templates/slo-template.md)
- [SLO Scorecard](../models/slo-scorecard.md)
- [SLI Examples](../models/sli-examples.md)

## Strategy Rule

If an SLO does not change behavior or improve decision-making, it is probably not useful enough.
