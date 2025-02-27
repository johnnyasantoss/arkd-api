// Original file: protos/types.proto

import type { Long } from '@grpc/proto-loader';

export interface MarketHourPartial {
  'nextStartTime'?: (number | string | Long);
  'nextEndTime'?: (number | string | Long);
  'period'?: (number | string | Long);
  'roundInterval'?: (number | string | Long);
}

export interface MarketHour {
  'nextStartTime': (string);
  'nextEndTime': (string);
  'period': (string);
  'roundInterval': (string);
}
