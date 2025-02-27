// Original file: protos/types.proto

import type { OutpointPartial as _ark_v1_OutpointPartial, Outpoint as _ark_v1_Outpoint } from '../../ark/v1/Outpoint';
import type { OwnershipProofPartial as _ark_v1_OwnershipProofPartial, OwnershipProof as _ark_v1_OwnershipProof } from '../../ark/v1/OwnershipProof';

export interface SignedVtxoOutpointPartial {
  'outpoint'?: (_ark_v1_OutpointPartial | null);
  'proof'?: (_ark_v1_OwnershipProofPartial | null);
}

export interface SignedVtxoOutpoint {
  'outpoint': (_ark_v1_Outpoint | null);
  'proof': (_ark_v1_OwnershipProof | null);
}
