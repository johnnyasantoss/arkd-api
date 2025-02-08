// Original file: null

import type { MethodDescriptorProtoPartial as _google_protobuf_MethodDescriptorProtoPartial, MethodDescriptorProto as _google_protobuf_MethodDescriptorProto } from '../../google/protobuf/MethodDescriptorProto';
import type { ServiceOptionsPartial as _google_protobuf_ServiceOptionsPartial, ServiceOptions as _google_protobuf_ServiceOptions } from '../../google/protobuf/ServiceOptions';

export interface ServiceDescriptorProtoPartial {
  'name'?: (string);
  'method'?: (_google_protobuf_MethodDescriptorProtoPartial)[];
  'options'?: (_google_protobuf_ServiceOptionsPartial | null);
}

export interface ServiceDescriptorProto {
  'name': (string);
  'method': (_google_protobuf_MethodDescriptorProto)[];
  'options': (_google_protobuf_ServiceOptions | null);
}
