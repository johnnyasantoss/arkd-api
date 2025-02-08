// Original file: protos/service.proto

import type { TreePartial as _ark_v1_TreePartial, Tree as _ark_v1_Tree } from '../../ark/v1/Tree';
import type { RoundStagePartial as _ark_v1_RoundStagePartial, RoundStage as _ark_v1_RoundStage } from '../../ark/v1/RoundStage';
import type { Long } from '@grpc/proto-loader';

export interface RoundPartial {
  'id'?: (string);
  'start'?: (number | string | Long);
  'end'?: (number | string | Long);
  'roundTx'?: (string);
  'vtxoTree'?: (_ark_v1_TreePartial | null);
  'forfeitTxs'?: (string)[];
  'connectors'?: (string)[];
  'stage'?: (_ark_v1_RoundStagePartial);
}

export interface Round {
  'id': (string);
  'start': (string);
  'end': (string);
  'roundTx': (string);
  'vtxoTree': (_ark_v1_Tree | null);
  'forfeitTxs': (string)[];
  'connectors': (string)[];
  'stage': (_ark_v1_RoundStage);
}
