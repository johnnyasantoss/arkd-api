// Original file: protos/types.proto

import type { VtxoPartial as _ark_v1_VtxoPartial, Vtxo as _ark_v1_Vtxo } from '../../ark/v1/Vtxo';

export interface RedeemTransactionPartial {
  'txid'?: (string);
  'spentVtxos'?: (_ark_v1_VtxoPartial)[];
  'spendableVtxos'?: (_ark_v1_VtxoPartial)[];
}

export interface RedeemTransaction {
  'txid': (string);
  'spentVtxos': (_ark_v1_Vtxo)[];
  'spendableVtxos': (_ark_v1_Vtxo)[];
}
