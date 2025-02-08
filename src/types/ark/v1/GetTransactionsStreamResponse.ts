// Original file: protos/service.proto

import type { RoundTransactionPartial as _ark_v1_RoundTransactionPartial, RoundTransaction as _ark_v1_RoundTransaction } from '../../ark/v1/RoundTransaction';
import type { RedeemTransactionPartial as _ark_v1_RedeemTransactionPartial, RedeemTransaction as _ark_v1_RedeemTransaction } from '../../ark/v1/RedeemTransaction';

export interface GetTransactionsStreamResponsePartial {
  'round'?: (_ark_v1_RoundTransactionPartial | null);
  'redeem'?: (_ark_v1_RedeemTransactionPartial | null);
  'tx'?: "round"|"redeem";
}

export interface GetTransactionsStreamResponse {
  'round'?: (_ark_v1_RoundTransaction | null);
  'redeem'?: (_ark_v1_RedeemTransaction | null);
  'tx': "round"|"redeem";
}
