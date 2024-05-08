// Original file: protos/lit-sessions.proto

import type { RuleValuePartial as _litrpc_RuleValuePartial, RuleValue as _litrpc_RuleValue } from '../litrpc/RuleValue';

export interface RulesMapPartial {
  'rules'?: ({[key: string]: _litrpc_RuleValuePartial});
}

export interface RulesMap {
  'rules': ({[key: string]: _litrpc_RuleValue});
}
