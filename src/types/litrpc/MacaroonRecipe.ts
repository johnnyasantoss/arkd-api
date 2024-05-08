// Original file: protos/lit-sessions.proto

import type { MacaroonPermissionPartial as _litrpc_MacaroonPermissionPartial, MacaroonPermission as _litrpc_MacaroonPermission } from '../litrpc/MacaroonPermission';

export interface MacaroonRecipePartial {
  'permissions'?: (_litrpc_MacaroonPermissionPartial)[];
  'caveats'?: (string)[];
}

export interface MacaroonRecipe {
  'permissions': (_litrpc_MacaroonPermission)[];
  'caveats': (string)[];
}
