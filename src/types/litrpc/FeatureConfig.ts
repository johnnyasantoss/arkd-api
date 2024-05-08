// Original file: protos/lit-autopilot.proto

import type { RulesMapPartial as _litrpc_RulesMapPartial, RulesMap as _litrpc_RulesMap } from '../litrpc/RulesMap';

export interface FeatureConfigPartial {
  'rules'?: (_litrpc_RulesMapPartial | null);
  'config'?: (Buffer | Uint8Array | string);
}

export interface FeatureConfig {
  'rules': (_litrpc_RulesMap | null);
  'config': (Buffer);
}
