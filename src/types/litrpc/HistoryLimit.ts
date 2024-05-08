// Original file: protos/lit-sessions.proto

import type { Long } from '@grpc/proto-loader';

export interface HistoryLimitPartial {
  'startTime'?: (number | string | Long);
  'duration'?: (number | string | Long);
}

export interface HistoryLimit {
  'startTime': (string);
  'duration': (string);
}
