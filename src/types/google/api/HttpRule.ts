// Original file: node_modules/google-proto-files/google/api/http.proto

import type { CustomHttpPatternPartial as _google_api_CustomHttpPatternPartial, CustomHttpPattern as _google_api_CustomHttpPattern } from '../../google/api/CustomHttpPattern';
import type { HttpRulePartial as _google_api_HttpRulePartial, HttpRule as _google_api_HttpRule } from '../../google/api/HttpRule';

export interface HttpRulePartial {
  'selector'?: (string);
  'get'?: (string);
  'put'?: (string);
  'post'?: (string);
  'delete'?: (string);
  'patch'?: (string);
  'body'?: (string);
  'custom'?: (_google_api_CustomHttpPatternPartial | null);
  'additionalBindings'?: (_google_api_HttpRulePartial)[];
  'responseBody'?: (string);
  'pattern'?: "get"|"put"|"post"|"delete"|"patch"|"custom";
}

export interface HttpRule {
  'selector': (string);
  'get'?: (string);
  'put'?: (string);
  'post'?: (string);
  'delete'?: (string);
  'patch'?: (string);
  'body': (string);
  'custom'?: (_google_api_CustomHttpPattern | null);
  'additionalBindings': (_google_api_HttpRule)[];
  'responseBody': (string);
  'pattern': "get"|"put"|"post"|"delete"|"patch"|"custom";
}
