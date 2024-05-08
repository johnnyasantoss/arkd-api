// Original file: protos/lit-sessions.proto

import type { Long } from '@grpc/proto-loader';

export interface OnChainBudgetPartial {
  'absoluteAmtSats'?: (number | string | Long);
  'maxSatPerVByte'?: (number | string | Long);
}

export interface OnChainBudget {
  'absoluteAmtSats': (string);
  'maxSatPerVByte': (string);
}
