// Original file: protos/lit-accounts.proto

import type { AccountPartial as _litrpc_AccountPartial, Account as _litrpc_Account } from '../litrpc/Account';

export interface ListAccountsResponsePartial {
  'accounts'?: (_litrpc_AccountPartial)[];
}

export interface ListAccountsResponse {
  'accounts': (_litrpc_Account)[];
}
