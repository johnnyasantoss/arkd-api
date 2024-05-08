// Original file: protos/lit-autopilot.proto

import type { FeaturePartial as _litrpc_FeaturePartial, Feature as _litrpc_Feature } from '../litrpc/Feature';

export interface ListAutopilotFeaturesResponsePartial {
  'features'?: ({[key: string]: _litrpc_FeaturePartial});
}

export interface ListAutopilotFeaturesResponse {
  'features': ({[key: string]: _litrpc_Feature});
}
