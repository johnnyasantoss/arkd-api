// Original file: protos/service.proto

import type { OutputPartial as _ark_v1_OutputPartial, Output as _ark_v1_Output } from '../../ark/v1/Output';
import type { Musig2Partial as _ark_v1_Musig2Partial, Musig2 as _ark_v1_Musig2 } from '../../ark/v1/Musig2';

export interface RegisterOutputsForNextRoundRequestPartial {
  'requestId'?: (string);
  'outputs'?: (_ark_v1_OutputPartial)[];
  'musig2'?: (_ark_v1_Musig2Partial | null);
  '_musig2'?: "musig2";
}

export interface RegisterOutputsForNextRoundRequest {
  'requestId': (string);
  'outputs': (_ark_v1_Output)[];
  'musig2'?: (_ark_v1_Musig2 | null);
  '_musig2': "musig2";
}
