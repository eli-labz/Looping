# Governance

Looping is designed for reliable, supervised execution rather than uncontrolled autonomy.

## Product Reliability Metrics

Track these as first-class product metrics:

- Task completion rate
- Action success rate
- Time to useful result
- Recovery rate
- Policy violation rate

## Operating Principles

1. Every action must carry explicit preconditions and expected outcomes.
2. High-risk actions must pass risk gates and, where required, human approval.
3. Mismatch outcomes trigger recovery plans, not silent continuation.
4. All loops write an auditable action ledger.
