// Original file: protos/admin.proto

import type { Long } from '@grpc/proto-loader';

export interface GetRoundsRequestPartial {
  'after'?: (number | string | Long);
  'before'?: (number | string | Long);
}

export interface GetRoundsRequest {
  'after': (string);
  'before': (string);
}
