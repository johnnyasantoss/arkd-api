// Original file: protos/lit-autopilot.proto

import type { RuleValuesPartial as _litrpc_RuleValuesPartial, RuleValues as _litrpc_RuleValues } from '../litrpc/RuleValues';
import type { PermissionsPartial as _litrpc_PermissionsPartial, Permissions as _litrpc_Permissions } from '../litrpc/Permissions';
import type { Long } from '@grpc/proto-loader';

export interface FeaturePartial {
  'name'?: (string);
  'description'?: (string);
  'rules'?: ({[key: string]: _litrpc_RuleValuesPartial});
  'permissionsList'?: (_litrpc_PermissionsPartial)[];
  'requiresUpgrade'?: (boolean);
  'defaultConfig'?: (string);
  'privacyFlags'?: (number | string | Long);
}

export interface Feature {
  'name': (string);
  'description': (string);
  'rules': ({[key: string]: _litrpc_RuleValues});
  'permissionsList': (_litrpc_Permissions)[];
  'requiresUpgrade': (boolean);
  'defaultConfig': (string);
  'privacyFlags': (string);
}
