// Original file: protos/lit-sessions.proto

export const SessionState = {
  STATE_CREATED: 'STATE_CREATED',
  STATE_IN_USE: 'STATE_IN_USE',
  STATE_REVOKED: 'STATE_REVOKED',
  STATE_EXPIRED: 'STATE_EXPIRED',
} as const;

export type SessionStatePartial =
  | 'STATE_CREATED'
  | 0
  | 'STATE_IN_USE'
  | 1
  | 'STATE_REVOKED'
  | 2
  | 'STATE_EXPIRED'
  | 3

export type SessionState = typeof SessionState[keyof typeof SessionState]
