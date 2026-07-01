export type ObservationToken = {
  kind: "dom" | "screen" | "file" | "sensor" | "api" | "human";
  name: string;
  value: unknown;
  source: string;
  confidence: number;
};

export type HumanActionToken = {
  verb:
    | "CLICK"
    | "TYPE"
    | "OPEN_APP"
    | "SELECT_RANGE"
    | "READ"
    | "WRITE"
    | "MOVE"
    | "WAIT"
    | "ASK_HUMAN"
    | "ESCALATE";
  target: string;
  args?: Record<string, unknown>;
  preconditions: string[];
  expectedOutcome: string;
  cost: number;
  risk: number;
};

export type OutcomeToken = {
  status: "SUCCESS" | "MISMATCH" | "BLOCKED" | "ESCALATED" | "FAILED";
  evidence: string[];
  nextStateHint?: string;
};

export type LoopingAgentState = {
  goal: string;
  observations: ObservationToken[];
  actionHistory: HumanActionToken[];
  outcomeHistory: OutcomeToken[];
  memoryRefs: string[];
  constraints: string[];
  urgency: number;
  uncertainty: number;
};
