// Original file: protos/wallet.proto

import type { Long } from '@grpc/proto-loader';

export interface RestoreRequestPartial {
  'seed'?: (string);
  'password'?: (string);
  'gapLimit'?: (number | string | Long);
}

export interface RestoreRequest {
  'seed': (string);
  'password': (string);
  'gapLimit': (string);
}
