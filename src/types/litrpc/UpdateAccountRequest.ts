// Original file: protos/lit-accounts.proto

import type { Long } from '@grpc/proto-loader';

export interface UpdateAccountRequestPartial {
  'id'?: (string);
  'accountBalance'?: (number | string | Long);
  'expirationDate'?: (number | string | Long);
  'label'?: (string);
}

export interface UpdateAccountRequest {
  'id': (string);
  'accountBalance': (string);
  'expirationDate': (string);
  'label': (string);
}
