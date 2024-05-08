// Original file: protos/lit-sessions.proto

import type { SessionPartial as _litrpc_SessionPartial, Session as _litrpc_Session } from '../litrpc/Session';

export interface ListSessionsResponsePartial {
  'sessions'?: (_litrpc_SessionPartial)[];
}

export interface ListSessionsResponse {
  'sessions': (_litrpc_Session)[];
}
