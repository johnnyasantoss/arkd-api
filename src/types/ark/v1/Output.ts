// Original file: protos/types.proto

import type { Long } from '@grpc/proto-loader';

export interface OutputPartial {
  'address'?: (string);
  'amount'?: (number | string | Long);
}

export interface Output {
  'address': (string);
  'amount': (string);
}
