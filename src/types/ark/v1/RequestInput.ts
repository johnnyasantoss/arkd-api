// Original file: protos/types.proto

import type { Long } from '@grpc/proto-loader';

export interface RequestInputPartial {
  'txid'?: (string);
  'vout'?: (number);
  'amount'?: (number | string | Long);
}

export interface RequestInput {
  'txid': (string);
  'vout': (number);
  'amount': (string);
}
