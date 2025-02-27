// Original file: protos/admin.proto

import type { TxRequestInfoPartial as _ark_v1_TxRequestInfoPartial, TxRequestInfo as _ark_v1_TxRequestInfo } from '../../ark/v1/TxRequestInfo';

export interface GetTxRequestQueueResponsePartial {
  'requests'?: (_ark_v1_TxRequestInfoPartial)[];
}

export interface GetTxRequestQueueResponse {
  'requests': (_ark_v1_TxRequestInfo)[];
}
