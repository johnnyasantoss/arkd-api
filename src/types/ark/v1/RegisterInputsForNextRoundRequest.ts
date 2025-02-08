// Original file: protos/service.proto

import type { InputPartial as _ark_v1_InputPartial, Input as _ark_v1_Input } from '../../ark/v1/Input';

export interface RegisterInputsForNextRoundRequestPartial {
  'inputs'?: (_ark_v1_InputPartial)[];
  'ephemeralPubkey'?: (string);
  'notes'?: (string)[];
  '_ephemeralPubkey'?: "ephemeralPubkey";
}

export interface RegisterInputsForNextRoundRequest {
  'inputs': (_ark_v1_Input)[];
  'ephemeralPubkey'?: (string);
  'notes': (string)[];
  '_ephemeralPubkey': "ephemeralPubkey";
}
