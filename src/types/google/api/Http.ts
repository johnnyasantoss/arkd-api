// Original file: node_modules/google-proto-files/google/api/http.proto

import type { HttpRulePartial as _google_api_HttpRulePartial, HttpRule as _google_api_HttpRule } from '../../google/api/HttpRule';

export interface HttpPartial {
  'rules'?: (_google_api_HttpRulePartial)[];
  'fullyDecodeReservedExpansion'?: (boolean);
}

export interface Http {
  'rules': (_google_api_HttpRule)[];
  'fullyDecodeReservedExpansion': (boolean);
}
