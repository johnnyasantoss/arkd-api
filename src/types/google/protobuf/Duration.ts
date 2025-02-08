// Original file: null

import type { Long } from '@grpc/proto-loader';

export interface DurationPartial {
  'seconds'?: (number | string | Long);
  'nanos'?: (number);
}

export interface Duration {
  'seconds': (string);
  'nanos': (number);
}
