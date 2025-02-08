// Original file: protos/service.proto

import type { RoundPartial as _ark_v1_RoundPartial, Round as _ark_v1_Round } from '../../ark/v1/Round';

export interface GetRoundByIdResponsePartial {
  'round'?: (_ark_v1_RoundPartial | null);
}

export interface GetRoundByIdResponse {
  'round': (_ark_v1_Round | null);
}
