// Original file: protos/service.proto

import type { TreePartial as _ark_v1_TreePartial, Tree as _ark_v1_Tree } from '../../ark/v1/Tree';

export interface RoundSigningEventPartial {
  'id'?: (string);
  'cosignersPubkeys'?: (string)[];
  'unsignedVtxoTree'?: (_ark_v1_TreePartial | null);
  'unsignedRoundTx'?: (string);
}

export interface RoundSigningEvent {
  'id': (string);
  'cosignersPubkeys': (string)[];
  'unsignedVtxoTree': (_ark_v1_Tree | null);
  'unsignedRoundTx': (string);
}
