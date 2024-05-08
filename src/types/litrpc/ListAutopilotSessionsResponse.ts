// Original file: protos/lit-autopilot.proto

import type { SessionPartial as _litrpc_SessionPartial, Session as _litrpc_Session } from '../litrpc/Session';

export interface ListAutopilotSessionsResponsePartial {
  'sessions'?: (_litrpc_SessionPartial)[];
}

export interface ListAutopilotSessionsResponse {
  'sessions': (_litrpc_Session)[];
}
