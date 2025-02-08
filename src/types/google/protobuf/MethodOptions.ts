// Original file: null

import type { UninterpretedOptionPartial as _google_protobuf_UninterpretedOptionPartial, UninterpretedOption as _google_protobuf_UninterpretedOption } from '../../google/protobuf/UninterpretedOption';
import type { HttpRulePartial as _google_api_HttpRulePartial, HttpRule as _google_api_HttpRule } from '../../google/api/HttpRule';

export interface MethodOptionsPartial {
  'deprecated'?: (boolean);
  'uninterpretedOption'?: (_google_protobuf_UninterpretedOptionPartial)[];
  '.google.api.http'?: (_google_api_HttpRulePartial | null);
}

export interface MethodOptions {
  'deprecated': (boolean);
  'uninterpretedOption': (_google_protobuf_UninterpretedOption)[];
  '.google.api.http': (_google_api_HttpRule | null);
}
