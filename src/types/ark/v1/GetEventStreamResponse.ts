// Original file: protos/service.proto

import type { RoundFinalizationEventPartial as _ark_v1_RoundFinalizationEventPartial, RoundFinalizationEvent as _ark_v1_RoundFinalizationEvent } from '../../ark/v1/RoundFinalizationEvent';
import type { RoundFinalizedEventPartial as _ark_v1_RoundFinalizedEventPartial, RoundFinalizedEvent as _ark_v1_RoundFinalizedEvent } from '../../ark/v1/RoundFinalizedEvent';
import type { RoundFailedPartial as _ark_v1_RoundFailedPartial, RoundFailed as _ark_v1_RoundFailed } from '../../ark/v1/RoundFailed';
import type { RoundSigningEventPartial as _ark_v1_RoundSigningEventPartial, RoundSigningEvent as _ark_v1_RoundSigningEvent } from '../../ark/v1/RoundSigningEvent';
import type { RoundSigningNoncesGeneratedEventPartial as _ark_v1_RoundSigningNoncesGeneratedEventPartial, RoundSigningNoncesGeneratedEvent as _ark_v1_RoundSigningNoncesGeneratedEvent } from '../../ark/v1/RoundSigningNoncesGeneratedEvent';

export interface GetEventStreamResponsePartial {
  'roundFinalization'?: (_ark_v1_RoundFinalizationEventPartial | null);
  'roundFinalized'?: (_ark_v1_RoundFinalizedEventPartial | null);
  'roundFailed'?: (_ark_v1_RoundFailedPartial | null);
  'roundSigning'?: (_ark_v1_RoundSigningEventPartial | null);
  'roundSigningNoncesGenerated'?: (_ark_v1_RoundSigningNoncesGeneratedEventPartial | null);
  'event'?: "roundFinalization"|"roundFinalized"|"roundFailed"|"roundSigning"|"roundSigningNoncesGenerated";
}

export interface GetEventStreamResponse {
  'roundFinalization'?: (_ark_v1_RoundFinalizationEvent | null);
  'roundFinalized'?: (_ark_v1_RoundFinalizedEvent | null);
  'roundFailed'?: (_ark_v1_RoundFailed | null);
  'roundSigning'?: (_ark_v1_RoundSigningEvent | null);
  'roundSigningNoncesGenerated'?: (_ark_v1_RoundSigningNoncesGeneratedEvent | null);
  'event': "roundFinalization"|"roundFinalized"|"roundFailed"|"roundSigning"|"roundSigningNoncesGenerated";
}
