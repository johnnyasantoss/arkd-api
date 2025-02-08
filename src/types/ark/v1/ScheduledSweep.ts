// Original file: protos/admin.proto

import type { SweepableOutputPartial as _ark_v1_SweepableOutputPartial, SweepableOutput as _ark_v1_SweepableOutput } from '../../ark/v1/SweepableOutput';

export interface ScheduledSweepPartial {
  'roundId'?: (string);
  'outputs'?: (_ark_v1_SweepableOutputPartial)[];
}

export interface ScheduledSweep {
  'roundId': (string);
  'outputs': (_ark_v1_SweepableOutput)[];
}
