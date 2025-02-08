// Original file: protos/admin.proto

import type { ScheduledSweepPartial as _ark_v1_ScheduledSweepPartial, ScheduledSweep as _ark_v1_ScheduledSweep } from '../../ark/v1/ScheduledSweep';

export interface GetScheduledSweepResponsePartial {
  'sweeps'?: (_ark_v1_ScheduledSweepPartial)[];
}

export interface GetScheduledSweepResponse {
  'sweeps': (_ark_v1_ScheduledSweep)[];
}
