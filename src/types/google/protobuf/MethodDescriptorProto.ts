// Original file: null

import type { MethodOptionsPartial as _google_protobuf_MethodOptionsPartial, MethodOptions as _google_protobuf_MethodOptions } from '../../google/protobuf/MethodOptions';

export interface MethodDescriptorProtoPartial {
  'name'?: (string);
  'inputType'?: (string);
  'outputType'?: (string);
  'options'?: (_google_protobuf_MethodOptionsPartial | null);
  'clientStreaming'?: (boolean);
  'serverStreaming'?: (boolean);
}

export interface MethodDescriptorProto {
  'name': (string);
  'inputType': (string);
  'outputType': (string);
  'options': (_google_protobuf_MethodOptions | null);
  'clientStreaming': (boolean);
  'serverStreaming': (boolean);
}
