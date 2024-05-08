// Original file: protos/lit-sessions.proto

import type { Long } from '@grpc/proto-loader';

export interface ChannelPolicyBoundsPartial {
  'minBaseMsat'?: (number | string | Long);
  'maxBaseMsat'?: (number | string | Long);
  'minRatePpm'?: (number);
  'maxRatePpm'?: (number);
  'minCltvDelta'?: (number);
  'maxCltvDelta'?: (number);
  'minHtlcMsat'?: (number | string | Long);
  'maxHtlcMsat'?: (number | string | Long);
}

export interface ChannelPolicyBounds {
  'minBaseMsat': (string);
  'maxBaseMsat': (string);
  'minRatePpm': (number);
  'maxRatePpm': (number);
  'minCltvDelta': (number);
  'maxCltvDelta': (number);
  'minHtlcMsat': (string);
  'maxHtlcMsat': (string);
}
