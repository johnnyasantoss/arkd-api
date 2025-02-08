// Original file: protos/service.proto

import type { OutpointPartial as _ark_v1_OutpointPartial, Outpoint as _ark_v1_Outpoint } from '../../ark/v1/Outpoint';
import type { VtxoPartial as _ark_v1_VtxoPartial, Vtxo as _ark_v1_Vtxo } from '../../ark/v1/Vtxo';

export interface RoundTransactionPartial {
  'txid'?: (string);
  'spentVtxos'?: (_ark_v1_OutpointPartial)[];
  'spendableVtxos'?: (_ark_v1_VtxoPartial)[];
  'claimedBoardingUtxos'?: (_ark_v1_OutpointPartial)[];
}

export interface RoundTransaction {
  'txid': (string);
  'spentVtxos': (_ark_v1_Outpoint)[];
  'spendableVtxos': (_ark_v1_Vtxo)[];
  'claimedBoardingUtxos': (_ark_v1_Outpoint)[];
}
