// Original file: protos/lit-sessions.proto

export const SessionType = {
  TYPE_MACAROON_READONLY: 'TYPE_MACAROON_READONLY',
  TYPE_MACAROON_ADMIN: 'TYPE_MACAROON_ADMIN',
  TYPE_MACAROON_CUSTOM: 'TYPE_MACAROON_CUSTOM',
  TYPE_UI_PASSWORD: 'TYPE_UI_PASSWORD',
  TYPE_AUTOPILOT: 'TYPE_AUTOPILOT',
  TYPE_MACAROON_ACCOUNT: 'TYPE_MACAROON_ACCOUNT',
} as const;

export type SessionTypePartial =
  | 'TYPE_MACAROON_READONLY'
  | 0
  | 'TYPE_MACAROON_ADMIN'
  | 1
  | 'TYPE_MACAROON_CUSTOM'
  | 2
  | 'TYPE_UI_PASSWORD'
  | 3
  | 'TYPE_AUTOPILOT'
  | 4
  | 'TYPE_MACAROON_ACCOUNT'
  | 5

export type SessionType = typeof SessionType[keyof typeof SessionType]
