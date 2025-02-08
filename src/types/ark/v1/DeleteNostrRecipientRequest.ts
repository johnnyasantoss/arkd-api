// Original file: protos/service.proto

import type { SignedVtxoOutpointPartial as _ark_v1_SignedVtxoOutpointPartial, SignedVtxoOutpoint as _ark_v1_SignedVtxoOutpoint } from '../../ark/v1/SignedVtxoOutpoint';

export interface DeleteNostrRecipientRequestPartial {
  'vtxos'?: (_ark_v1_SignedVtxoOutpointPartial)[];
}

export interface DeleteNostrRecipientRequest {
  'vtxos': (_ark_v1_SignedVtxoOutpoint)[];
}
