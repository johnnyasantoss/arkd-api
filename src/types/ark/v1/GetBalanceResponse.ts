// Original file: protos/wallet.proto

import type { BalancePartial as _ark_v1_BalancePartial, Balance as _ark_v1_Balance } from '../../ark/v1/Balance';

export interface GetBalanceResponsePartial {
  'mainAccount'?: (_ark_v1_BalancePartial | null);
  'connectorsAccount'?: (_ark_v1_BalancePartial | null);
}

export interface GetBalanceResponse {
  'mainAccount': (_ark_v1_Balance | null);
  'connectorsAccount': (_ark_v1_Balance | null);
}
