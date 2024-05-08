// Original file: protos/lit-sessions.proto

import type { SessionPartial as _litrpc_SessionPartial, Session as _litrpc_Session } from '../litrpc/Session';

export interface AddSessionResponsePartial {
  'session'?: (_litrpc_SessionPartial | null);
}

export interface AddSessionResponse {
  'session': (_litrpc_Session | null);
}
