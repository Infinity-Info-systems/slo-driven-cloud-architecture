# SLI Examples

## Purpose

This page provides practical examples of service level indicators that teams can measure and track.

## Example SLIs

### Availability

- successful requests divided by total requests

### Latency

- percentage of requests under a defined threshold
- P95 response time

### Error Rate

- failed requests divided by total requests
- dependency timeout rate

### Freshness

- age of the latest successful data update

### Throughput

- completed transactions per time window

## Example SLI Table

| Service | SLI | Threshold |
| --- | --- | --- |
| API | Success rate | > 99.9% |
| Checkout | Response time | < 300 ms P95 |
| Data Pipeline | Freshness | < 15 min lag |

## Related Artifacts

- [SLO Template](../templates/slo-template.md)
- [SLO Scorecard](./slo-scorecard.md)
