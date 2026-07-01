# Action Ledger

Looping stores each observe-plan-execute-verify cycle in an action ledger for auditability.

## Required Entries

1. Observation token(s)
2. Human-action token
3. Outcome token
4. Verification evidence
5. Recovery or escalation note when mismatches occur

## Data Shape

The ledger aligns with:

- `schemas/observation-token.schema.json`
- `schemas/human-action-token.schema.json`
- `schemas/outcome-token.schema.json`
- `schemas/looping-agent-state.schema.json`
