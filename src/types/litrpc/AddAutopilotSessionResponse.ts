// Original file: protos/lit-autopilot.proto

import type { SessionPartial as _litrpc_SessionPartial, Session as _litrpc_Session } from '../litrpc/Session';

export interface AddAutopilotSessionResponsePartial {
  'session'?: (_litrpc_SessionPartial | null);
}

export interface AddAutopilotSessionResponse {
  'session': (_litrpc_Session | null);
}
