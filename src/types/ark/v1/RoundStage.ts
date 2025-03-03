// Original file: protos/types.proto

export const RoundStage = {
  ROUND_STAGE_UNSPECIFIED: 'ROUND_STAGE_UNSPECIFIED',
  ROUND_STAGE_REGISTRATION: 'ROUND_STAGE_REGISTRATION',
  ROUND_STAGE_FINALIZATION: 'ROUND_STAGE_FINALIZATION',
  ROUND_STAGE_FINALIZED: 'ROUND_STAGE_FINALIZED',
  ROUND_STAGE_FAILED: 'ROUND_STAGE_FAILED',
} as const;

export type RoundStagePartial =
  | 'ROUND_STAGE_UNSPECIFIED'
  | 0
  | 'ROUND_STAGE_REGISTRATION'
  | 1
  | 'ROUND_STAGE_FINALIZATION'
  | 2
  | 'ROUND_STAGE_FINALIZED'
  | 3
  | 'ROUND_STAGE_FAILED'
  | 4

export type RoundStage = typeof RoundStage[keyof typeof RoundStage]
