// Original file: protos/service.proto

import type { NodePartial as _ark_v1_NodePartial, Node as _ark_v1_Node } from '../../ark/v1/Node';

export interface TreeLevelPartial {
  'nodes'?: (_ark_v1_NodePartial)[];
}

export interface TreeLevel {
  'nodes': (_ark_v1_Node)[];
}
