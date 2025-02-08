// Original file: protos/service.proto

import type { SignedVtxoOutpointPartial as _ark_v1_SignedVtxoOutpointPartial, SignedVtxoOutpoint as _ark_v1_SignedVtxoOutpoint } from '../../ark/v1/SignedVtxoOutpoint';

export interface SetNostrRecipientRequestPartial {
  'nostrRecipient'?: (string);
  'vtxos'?: (_ark_v1_SignedVtxoOutpointPartial)[];
}

export interface SetNostrRecipientRequest {
  'nostrRecipient': (string);
  'vtxos': (_ark_v1_SignedVtxoOutpoint)[];
}
