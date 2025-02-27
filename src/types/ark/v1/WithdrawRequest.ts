// Original file: protos/admin.proto

import type { Long } from '@grpc/proto-loader';

export interface WithdrawRequestPartial {
  'address'?: (string);
  'amount'?: (number | string | Long);
}

export interface WithdrawRequest {
  'address': (string);
  'amount': (string);
}
