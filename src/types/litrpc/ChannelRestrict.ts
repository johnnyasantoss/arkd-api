// Original file: protos/lit-sessions.proto

import type { Long } from '@grpc/proto-loader';

export interface ChannelRestrictPartial {
  'channelIds'?: (number | string | Long)[];
}

export interface ChannelRestrict {
  'channelIds': (string)[];
}
