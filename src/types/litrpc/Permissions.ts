// Original file: protos/lit-autopilot.proto

import type { MacaroonPermissionPartial as _litrpc_MacaroonPermissionPartial, MacaroonPermission as _litrpc_MacaroonPermission } from '../litrpc/MacaroonPermission';

export interface PermissionsPartial {
  'method'?: (string);
  'operations'?: (_litrpc_MacaroonPermissionPartial)[];
}

export interface Permissions {
  'method': (string);
  'operations': (_litrpc_MacaroonPermission)[];
}
