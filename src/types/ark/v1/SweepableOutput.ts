// Original file: protos/admin.proto

import type { Long } from '@grpc/proto-loader';

export interface SweepableOutputPartial {
  'txid'?: (string);
  'vout'?: (number);
  'amount'?: (string);
  'scheduledAt'?: (number | string | Long);
}

export interface SweepableOutput {
  'txid': (string);
  'vout': (number);
  'amount': (string);
  'scheduledAt': (string);
}
