// Original file: protos/service.proto

import type { TapscriptsPartial as _ark_v1_TapscriptsPartial, Tapscripts as _ark_v1_Tapscripts } from '../../ark/v1/Tapscripts';

export interface GetBoardingAddressResponsePartial {
  'address'?: (string);
  'descriptor'?: (string);
  'tapscripts'?: (_ark_v1_TapscriptsPartial | null);
  'taprootTree'?: "descriptor"|"tapscripts";
}

export interface GetBoardingAddressResponse {
  'address': (string);
  'descriptor'?: (string);
  'tapscripts'?: (_ark_v1_Tapscripts | null);
  'taprootTree': "descriptor"|"tapscripts";
}
