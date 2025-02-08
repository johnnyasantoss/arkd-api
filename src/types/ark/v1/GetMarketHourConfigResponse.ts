// Original file: protos/admin.proto

import type { MarketHourConfigPartial as _ark_v1_MarketHourConfigPartial, MarketHourConfig as _ark_v1_MarketHourConfig } from '../../ark/v1/MarketHourConfig';

export interface GetMarketHourConfigResponsePartial {
  'config'?: (_ark_v1_MarketHourConfigPartial | null);
}

export interface GetMarketHourConfigResponse {
  'config': (_ark_v1_MarketHourConfig | null);
}
