// Original file: protos/lit-autopilot.proto

import type { FeatureConfigPartial as _litrpc_FeatureConfigPartial, FeatureConfig as _litrpc_FeatureConfig } from '../litrpc/FeatureConfig';
import type { RulesMapPartial as _litrpc_RulesMapPartial, RulesMap as _litrpc_RulesMap } from '../litrpc/RulesMap';
import type { Long } from '@grpc/proto-loader';

export interface AddAutopilotSessionRequestPartial {
  'label'?: (string);
  'expiryTimestampSeconds'?: (number | string | Long);
  'mailboxServerAddr'?: (string);
  'devServer'?: (boolean);
  'features'?: ({[key: string]: _litrpc_FeatureConfigPartial});
  'sessionRules'?: (_litrpc_RulesMapPartial | null);
  'noPrivacyMapper'?: (boolean);
  'linkedGroupId'?: (Buffer | Uint8Array | string);
  'privacyFlags'?: (number | string | Long);
  'privacyFlagsSet'?: (boolean);
}

export interface AddAutopilotSessionRequest {
  'label': (string);
  'expiryTimestampSeconds': (string);
  'mailboxServerAddr': (string);
  'devServer': (boolean);
  'features': ({[key: string]: _litrpc_FeatureConfig});
  'sessionRules': (_litrpc_RulesMap | null);
  'noPrivacyMapper': (boolean);
  'linkedGroupId': (Buffer);
  'privacyFlags': (string);
  'privacyFlagsSet': (boolean);
}
