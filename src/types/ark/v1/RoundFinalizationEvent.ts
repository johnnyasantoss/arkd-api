// Original file: protos/service.proto

import type { TreePartial as _ark_v1_TreePartial, Tree as _ark_v1_Tree } from '../../ark/v1/Tree';
import type { Long } from '@grpc/proto-loader';

export interface RoundFinalizationEventPartial {
  'id'?: (string);
  'roundTx'?: (string);
  'vtxoTree'?: (_ark_v1_TreePartial | null);
  'connectors'?: (string)[];
  'minRelayFeeRate'?: (number | string | Long);
}

export interface RoundFinalizationEvent {
  'id': (string);
  'roundTx': (string);
  'vtxoTree': (_ark_v1_Tree | null);
  'connectors': (string)[];
  'minRelayFeeRate': (string);
}
