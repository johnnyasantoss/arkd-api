// Original file: protos/service.proto

import type { VtxoPartial as _ark_v1_VtxoPartial, Vtxo as _ark_v1_Vtxo } from '../../ark/v1/Vtxo';

export interface ListVtxosResponsePartial {
  'spendableVtxos'?: (_ark_v1_VtxoPartial)[];
  'spentVtxos'?: (_ark_v1_VtxoPartial)[];
}

export interface ListVtxosResponse {
  'spendableVtxos': (_ark_v1_Vtxo)[];
  'spentVtxos': (_ark_v1_Vtxo)[];
}
