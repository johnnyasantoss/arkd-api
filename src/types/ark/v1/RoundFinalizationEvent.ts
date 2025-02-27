// Original file: protos/types.proto

import type { TreePartial as _ark_v1_TreePartial, Tree as _ark_v1_Tree } from '../../ark/v1/Tree';
import type { OutpointPartial as _ark_v1_OutpointPartial, Outpoint as _ark_v1_Outpoint } from '../../ark/v1/Outpoint';
import type { Long } from '@grpc/proto-loader';

export interface RoundFinalizationEventPartial {
  'id'?: (string);
  'roundTx'?: (string);
  'vtxoTree'?: (_ark_v1_TreePartial | null);
  'connectors'?: (_ark_v1_TreePartial | null);
  'minRelayFeeRate'?: (number | string | Long);
  'connectorsIndex'?: ({[key: string]: _ark_v1_OutpointPartial});
}

export interface RoundFinalizationEvent {
  'id': (string);
  'roundTx': (string);
  'vtxoTree': (_ark_v1_Tree | null);
  'connectors': (_ark_v1_Tree | null);
  'minRelayFeeRate': (string);
  'connectorsIndex': ({[key: string]: _ark_v1_Outpoint});
}
