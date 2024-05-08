// Original file: protos/lit-accounts.proto

import type { Long } from '@grpc/proto-loader';

export interface AccountPaymentPartial {
  'hash'?: (Buffer | Uint8Array | string);
  'state'?: (string);
  'fullAmount'?: (number | string | Long);
}

export interface AccountPayment {
  'hash': (Buffer);
  'state': (string);
  'fullAmount': (string);
}
