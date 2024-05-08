// Original file: protos/lit-accounts.proto

import type { Long } from '@grpc/proto-loader';

export interface CreateAccountRequestPartial {
  'accountBalance'?: (number | string | Long);
  'expirationDate'?: (number | string | Long);
  'label'?: (string);
}

export interface CreateAccountRequest {
  'accountBalance': (string);
  'expirationDate': (string);
  'label': (string);
}
