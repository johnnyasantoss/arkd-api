// Original file: protos/lit-sessions.proto

import type { Long } from '@grpc/proto-loader';

export interface ChannelConstraintPartial {
  'minCapacitySat'?: (number | string | Long);
  'maxCapacitySat'?: (number | string | Long);
  'maxPushSat'?: (number | string | Long);
  'privateAllowed'?: (boolean);
  'publicAllowed'?: (boolean);
}

export interface ChannelConstraint {
  'minCapacitySat': (string);
  'maxCapacitySat': (string);
  'maxPushSat': (string);
  'privateAllowed': (boolean);
  'publicAllowed': (boolean);
}
