// Original file: null

import type { FieldDescriptorProtoPartial as _google_protobuf_FieldDescriptorProtoPartial, FieldDescriptorProto as _google_protobuf_FieldDescriptorProto } from '../../google/protobuf/FieldDescriptorProto';
import type { DescriptorProtoPartial as _google_protobuf_DescriptorProtoPartial, DescriptorProto as _google_protobuf_DescriptorProto } from '../../google/protobuf/DescriptorProto';
import type { EnumDescriptorProtoPartial as _google_protobuf_EnumDescriptorProtoPartial, EnumDescriptorProto as _google_protobuf_EnumDescriptorProto } from '../../google/protobuf/EnumDescriptorProto';
import type { MessageOptionsPartial as _google_protobuf_MessageOptionsPartial, MessageOptions as _google_protobuf_MessageOptions } from '../../google/protobuf/MessageOptions';
import type { OneofDescriptorProtoPartial as _google_protobuf_OneofDescriptorProtoPartial, OneofDescriptorProto as _google_protobuf_OneofDescriptorProto } from '../../google/protobuf/OneofDescriptorProto';

export interface _google_protobuf_DescriptorProto_ExtensionRangePartial {
  'start'?: (number);
  'end'?: (number);
}

export interface _google_protobuf_DescriptorProto_ExtensionRange {
  'start': (number);
  'end': (number);
}

export interface _google_protobuf_DescriptorProto_ReservedRangePartial {
  'start'?: (number);
  'end'?: (number);
}

export interface _google_protobuf_DescriptorProto_ReservedRange {
  'start': (number);
  'end': (number);
}

export interface DescriptorProtoPartial {
  'name'?: (string);
  'field'?: (_google_protobuf_FieldDescriptorProtoPartial)[];
  'nestedType'?: (_google_protobuf_DescriptorProtoPartial)[];
  'enumType'?: (_google_protobuf_EnumDescriptorProtoPartial)[];
  'extensionRange'?: (_google_protobuf_DescriptorProto_ExtensionRangePartial)[];
  'extension'?: (_google_protobuf_FieldDescriptorProtoPartial)[];
  'options'?: (_google_protobuf_MessageOptionsPartial | null);
  'oneofDecl'?: (_google_protobuf_OneofDescriptorProtoPartial)[];
  'reservedRange'?: (_google_protobuf_DescriptorProto_ReservedRangePartial)[];
  'reservedName'?: (string)[];
}

export interface DescriptorProto {
  'name': (string);
  'field': (_google_protobuf_FieldDescriptorProto)[];
  'nestedType': (_google_protobuf_DescriptorProto)[];
  'enumType': (_google_protobuf_EnumDescriptorProto)[];
  'extensionRange': (_google_protobuf_DescriptorProto_ExtensionRange)[];
  'extension': (_google_protobuf_FieldDescriptorProto)[];
  'options': (_google_protobuf_MessageOptions | null);
  'oneofDecl': (_google_protobuf_OneofDescriptorProto)[];
  'reservedRange': (_google_protobuf_DescriptorProto_ReservedRange)[];
  'reservedName': (string)[];
}
