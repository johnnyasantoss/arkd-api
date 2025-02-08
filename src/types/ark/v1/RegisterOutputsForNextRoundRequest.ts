// Original file: protos/service.proto

import type { OutputPartial as _ark_v1_OutputPartial, Output as _ark_v1_Output } from '../../ark/v1/Output';

export interface RegisterOutputsForNextRoundRequestPartial {
  'requestId'?: (string);
  'outputs'?: (_ark_v1_OutputPartial)[];
}

export interface RegisterOutputsForNextRoundRequest {
  'requestId': (string);
  'outputs': (_ark_v1_Output)[];
}
