// Original file: protos/lit-accounts.proto

import type { AccountPartial as _litrpc_AccountPartial, Account as _litrpc_Account } from '../litrpc/Account';

export interface CreateAccountResponsePartial {
  'account'?: (_litrpc_AccountPartial | null);
  'macaroon'?: (Buffer | Uint8Array | string);
}

export interface CreateAccountResponse {
  'account': (_litrpc_Account | null);
  'macaroon': (Buffer);
}
