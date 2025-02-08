// Original file: protos/service.proto

import type { MarketHourPartial as _ark_v1_MarketHourPartial, MarketHour as _ark_v1_MarketHour } from '../../ark/v1/MarketHour';
import type { Long } from '@grpc/proto-loader';

export interface GetInfoResponsePartial {
  'pubkey'?: (string);
  'roundLifetime'?: (number | string | Long);
  'unilateralExitDelay'?: (number | string | Long);
  'roundInterval'?: (number | string | Long);
  'network'?: (string);
  'dust'?: (number | string | Long);
  'boardingDescriptorTemplate'?: (string);
  'vtxoDescriptorTemplates'?: (string)[];
  'forfeitAddress'?: (string);
  'marketHour'?: (_ark_v1_MarketHourPartial | null);
}

export interface GetInfoResponse {
  'pubkey': (string);
  'roundLifetime': (string);
  'unilateralExitDelay': (string);
  'roundInterval': (string);
  'network': (string);
  'dust': (string);
  'boardingDescriptorTemplate': (string);
  'vtxoDescriptorTemplates': (string)[];
  'forfeitAddress': (string);
  'marketHour': (_ark_v1_MarketHour | null);
}
