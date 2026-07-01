# Risk Gates

Looping evaluates candidate actions before execution.

## Risk Gate Stages

1. Policy check: Is action allowed in current task and context?
2. Risk score: Estimate harm, reversibility, and uncertainty.
3. Approval check: Require human approval for gated verbs.
4. Final allow/block/escalate decision.

## Suggested Gate Outcomes

- Allow: Action executes and must be verified after execution.
- Block: Action is denied; planner must generate alternatives.
- Escalate: Human decision is required.
