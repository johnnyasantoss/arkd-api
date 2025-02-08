// Original file: null

import type { DescriptorProtoPartial as _google_protobuf_DescriptorProtoPartial, DescriptorProto as _google_protobuf_DescriptorProto } from '../../google/protobuf/DescriptorProto';
import type { EnumDescriptorProtoPartial as _google_protobuf_EnumDescriptorProtoPartial, EnumDescriptorProto as _google_protobuf_EnumDescriptorProto } from '../../google/protobuf/EnumDescriptorProto';
import type { ServiceDescriptorProtoPartial as _google_protobuf_ServiceDescriptorProtoPartial, ServiceDescriptorProto as _google_protobuf_ServiceDescriptorProto } from '../../google/protobuf/ServiceDescriptorProto';
import type { FieldDescriptorProtoPartial as _google_protobuf_FieldDescriptorProtoPartial, FieldDescriptorProto as _google_protobuf_FieldDescriptorProto } from '../../google/protobuf/FieldDescriptorProto';
import type { FileOptionsPartial as _google_protobuf_FileOptionsPartial, FileOptions as _google_protobuf_FileOptions } from '../../google/protobuf/FileOptions';
import type { SourceCodeInfoPartial as _google_protobuf_SourceCodeInfoPartial, SourceCodeInfo as _google_protobuf_SourceCodeInfo } from '../../google/protobuf/SourceCodeInfo';

export interface FileDescriptorProtoPartial {
  'name'?: (string);
  'package'?: (string);
  'dependency'?: (string)[];
  'messageType'?: (_google_protobuf_DescriptorProtoPartial)[];
  'enumType'?: (_google_protobuf_EnumDescriptorProtoPartial)[];
  'service'?: (_google_protobuf_ServiceDescriptorProtoPartial)[];
  'extension'?: (_google_protobuf_FieldDescriptorProtoPartial)[];
  'options'?: (_google_protobuf_FileOptionsPartial | null);
  'sourceCodeInfo'?: (_google_protobuf_SourceCodeInfoPartial | null);
  'publicDependency'?: (number)[];
  'weakDependency'?: (number)[];
  'syntax'?: (string);
}

export interface FileDescriptorProto {
  'name': (string);
  'package': (string);
  'dependency': (string)[];
  'messageType': (_google_protobuf_DescriptorProto)[];
  'enumType': (_google_protobuf_EnumDescriptorProto)[];
  'service': (_google_protobuf_ServiceDescriptorProto)[];
  'extension': (_google_protobuf_FieldDescriptorProto)[];
  'options': (_google_protobuf_FileOptions | null);
  'sourceCodeInfo': (_google_protobuf_SourceCodeInfo | null);
  'publicDependency': (number)[];
  'weakDependency': (number)[];
  'syntax': (string);
}
