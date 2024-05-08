// Original file: protos/lit-sessions.proto

import type { RatePartial as _litrpc_RatePartial, Rate as _litrpc_Rate } from '../litrpc/Rate';

export interface RateLimitPartial {
  'readLimit'?: (_litrpc_RatePartial | null);
  'writeLimit'?: (_litrpc_RatePartial | null);
}

export interface RateLimit {
  'readLimit': (_litrpc_Rate | null);
  'writeLimit': (_litrpc_Rate | null);
}
