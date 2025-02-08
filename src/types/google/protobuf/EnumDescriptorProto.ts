// Original file: null

import type { EnumValueDescriptorProtoPartial as _google_protobuf_EnumValueDescriptorProtoPartial, EnumValueDescriptorProto as _google_protobuf_EnumValueDescriptorProto } from '../../google/protobuf/EnumValueDescriptorProto';
import type { EnumOptionsPartial as _google_protobuf_EnumOptionsPartial, EnumOptions as _google_protobuf_EnumOptions } from '../../google/protobuf/EnumOptions';

export interface EnumDescriptorProtoPartial {
  'name'?: (string);
  'value'?: (_google_protobuf_EnumValueDescriptorProtoPartial)[];
  'options'?: (_google_protobuf_EnumOptionsPartial | null);
}

export interface EnumDescriptorProto {
  'name': (string);
  'value': (_google_protobuf_EnumValueDescriptorProto)[];
  'options': (_google_protobuf_EnumOptions | null);
}
