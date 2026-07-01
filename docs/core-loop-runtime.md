# Core Looping Runtime

The Looping control loop:

1. Observe
2. Compile state
3. Plan macro option
4. Generate candidate actions
5. Apply policy and risk gate
6. Execute allowed action
7. Verify outcome
8. Write trace to memory
9. Recover, continue, or escalate

Design requirement:

- Always verify after action.
- Always write memory trace.
- Replan immediately on mismatch.
