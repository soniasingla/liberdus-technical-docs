---
sidebar_position: 4
---

# Infrastructure & Security

Reliable infrastructure and secure operations are critical to running a Liberdus validator. This page covers hardware requirements, uptime expectations, slashing risks, and best practices for maintaining node security.

## Hardware & Infrastructure Requirements

| Component          | Minimum                               | Recommended                     |
| ------------------ | ------------------------------------- | ------------------------------- |
| CPU                | 4 cores                               | 8+ cores                        |
| Memory (RAM)       | 16 GB                                 | 32 GB                           |
| Storage            | 1 TB SSD (NVMe preferred)             | High throughput NVMe / PCIe SSD |
| Network Connection | Stable, ≥ 100 Mbps                    | Redundant dual 1 Gbps links     |
| Uptime             | 99.9% or higher                       | —                               |
| OS                 | Linux / Unix (supported distribution) | —                               |

> Meeting or exceeding these specs reduces downtime, lag, and performance penalties.

## Validator Performance & Monitoring

- Maintain redundant network links and backup power to ensure high uptime.
- Monitor node health, latency, and logs continuously.
- Automated alerts for downtime or errors help prevent accidental slashing.

## Slashing & Risk Management

- Validators can be **slashed** for:
  - Double signing or equivocation
  - Extended downtime
  - Violating protocol rules
- Protective measures exist to reduce accidental slashing.
- Repeated performance failures can lead to removal from the validator set.
- The protocol prioritizes **safety over liveness**, penalizing misbehavior even if it temporarily reduces validator availability.
