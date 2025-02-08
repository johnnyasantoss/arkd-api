// Original file: protos/service.proto

import type { TreeLevelPartial as _ark_v1_TreeLevelPartial, TreeLevel as _ark_v1_TreeLevel } from '../../ark/v1/TreeLevel';

export interface TreePartial {
  'levels'?: (_ark_v1_TreeLevelPartial)[];
}

export interface Tree {
  'levels': (_ark_v1_TreeLevel)[];
}
