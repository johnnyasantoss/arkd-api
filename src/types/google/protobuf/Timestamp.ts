// Original file: null

import type { Long } from '@grpc/proto-loader';

export interface TimestampPartial {
  'seconds'?: (number | string | Long);
  'nanos'?: (number);
}

export interface Timestamp {
  'seconds': (string);
  'nanos': (number);
}
