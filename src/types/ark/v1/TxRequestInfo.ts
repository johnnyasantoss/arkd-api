// Original file: protos/types.proto

import type { OutputPartial as _ark_v1_OutputPartial, Output as _ark_v1_Output } from '../../ark/v1/Output';
import type { RequestInputPartial as _ark_v1_RequestInputPartial, RequestInput as _ark_v1_RequestInput } from '../../ark/v1/RequestInput';
import type { Long } from '@grpc/proto-loader';

export interface TxRequestInfoPartial {
  'id'?: (string);
  'createdAt'?: (number | string | Long);
  'receivers'?: (_ark_v1_OutputPartial)[];
  'inputs'?: (_ark_v1_RequestInputPartial)[];
  'boardingInputs'?: (_ark_v1_RequestInputPartial)[];
  'notes'?: (string)[];
  'signingType'?: (string);
  'cosignersPublicKeys'?: (string)[];
  'lastPing'?: (number | string | Long);
}

export interface TxRequestInfo {
  'id': (string);
  'createdAt': (string);
  'receivers': (_ark_v1_Output)[];
  'inputs': (_ark_v1_RequestInput)[];
  'boardingInputs': (_ark_v1_RequestInput)[];
  'notes': (string)[];
  'signingType': (string);
  'cosignersPublicKeys': (string)[];
  'lastPing': (string);
}
