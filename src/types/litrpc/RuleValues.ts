// Original file: protos/lit-autopilot.proto

import type { RuleValuePartial as _litrpc_RuleValuePartial, RuleValue as _litrpc_RuleValue } from '../litrpc/RuleValue';

export interface RuleValuesPartial {
  'known'?: (boolean);
  'defaults'?: (_litrpc_RuleValuePartial | null);
  'minValue'?: (_litrpc_RuleValuePartial | null);
  'maxValue'?: (_litrpc_RuleValuePartial | null);
}

export interface RuleValues {
  'known': (boolean);
  'defaults': (_litrpc_RuleValue | null);
  'minValue': (_litrpc_RuleValue | null);
  'maxValue': (_litrpc_RuleValue | null);
}
