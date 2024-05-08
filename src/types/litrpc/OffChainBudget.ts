// Original file: protos/lit-sessions.proto

import type { Long } from '@grpc/proto-loader';

export interface OffChainBudgetPartial {
  'maxAmtMsat'?: (number | string | Long);
  'maxFeesMsat'?: (number | string | Long);
}

export interface OffChainBudget {
  'maxAmtMsat': (string);
  'maxFeesMsat': (string);
}
