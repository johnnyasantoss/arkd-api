// Original file: protos/service.proto

import type { TimestampPartial as _google_protobuf_TimestampPartial, Timestamp as _google_protobuf_Timestamp } from '../../google/protobuf/Timestamp';
import type { DurationPartial as _google_protobuf_DurationPartial, Duration as _google_protobuf_Duration } from '../../google/protobuf/Duration';

export interface MarketHourPartial {
  'nextStartTime'?: (_google_protobuf_TimestampPartial | null);
  'nextEndTime'?: (_google_protobuf_TimestampPartial | null);
  'period'?: (_google_protobuf_DurationPartial | null);
  'roundInterval'?: (_google_protobuf_DurationPartial | null);
}

export interface MarketHour {
  'nextStartTime': (_google_protobuf_Timestamp | null);
  'nextEndTime': (_google_protobuf_Timestamp | null);
  'period': (_google_protobuf_Duration | null);
  'roundInterval': (_google_protobuf_Duration | null);
}
