// Original file: protos/service.proto

import type { OutpointPartial as _ark_v1_OutpointPartial, Outpoint as _ark_v1_Outpoint } from '../../ark/v1/Outpoint';
import type { Long } from '@grpc/proto-loader';

export interface VtxoPartial {
  'outpoint'?: (_ark_v1_OutpointPartial | null);
  'spent'?: (boolean);
  'roundTxid'?: (string);
  'spentBy'?: (string);
  'expireAt'?: (number | string | Long);
  'swept'?: (boolean);
  'isPending'?: (boolean);
  'redeemTx'?: (string);
  'amount'?: (number | string | Long);
  'pubkey'?: (string);
  'createdAt'?: (number | string | Long);
}

export interface Vtxo {
  'outpoint': (_ark_v1_Outpoint | null);
  'spent': (boolean);
  'roundTxid': (string);
  'spentBy': (string);
  'expireAt': (string);
  'swept': (boolean);
  'isPending': (boolean);
  'redeemTx': (string);
  'amount': (string);
  'pubkey': (string);
  'createdAt': (string);
}
