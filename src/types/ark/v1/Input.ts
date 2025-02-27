// Original file: protos/types.proto

import type { OutpointPartial as _ark_v1_OutpointPartial, Outpoint as _ark_v1_Outpoint } from '../../ark/v1/Outpoint';
import type { TapscriptsPartial as _ark_v1_TapscriptsPartial, Tapscripts as _ark_v1_Tapscripts } from '../../ark/v1/Tapscripts';

export interface InputPartial {
  'outpoint'?: (_ark_v1_OutpointPartial | null);
  'descriptor'?: (string);
  'tapscripts'?: (_ark_v1_TapscriptsPartial | null);
  'taprootTree'?: "descriptor"|"tapscripts";
}

export interface Input {
  'outpoint': (_ark_v1_Outpoint | null);
  'descriptor'?: (string);
  'tapscripts'?: (_ark_v1_Tapscripts | null);
  'taprootTree': "descriptor"|"tapscripts";
}
