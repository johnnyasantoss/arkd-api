// Original file: null

import type { UninterpretedOptionPartial as _google_protobuf_UninterpretedOptionPartial, UninterpretedOption as _google_protobuf_UninterpretedOption } from '../../google/protobuf/UninterpretedOption';

// Original file: null

export const _google_protobuf_FileOptions_OptimizeMode = {
  SPEED: 'SPEED',
  CODE_SIZE: 'CODE_SIZE',
  LITE_RUNTIME: 'LITE_RUNTIME',
} as const;

export type _google_protobuf_FileOptions_OptimizeModePartial =
  | 'SPEED'
  | 1
  | 'CODE_SIZE'
  | 2
  | 'LITE_RUNTIME'
  | 3

export type _google_protobuf_FileOptions_OptimizeMode = typeof _google_protobuf_FileOptions_OptimizeMode[keyof typeof _google_protobuf_FileOptions_OptimizeMode]

export interface FileOptionsPartial {
  'javaPackage'?: (string);
  'javaOuterClassname'?: (string);
  'optimizeFor'?: (_google_protobuf_FileOptions_OptimizeModePartial);
  'javaMultipleFiles'?: (boolean);
  'goPackage'?: (string);
  'ccGenericServices'?: (boolean);
  'javaGenericServices'?: (boolean);
  'pyGenericServices'?: (boolean);
  'javaGenerateEqualsAndHash'?: (boolean);
  'deprecated'?: (boolean);
  'javaStringCheckUtf8'?: (boolean);
  'ccEnableArenas'?: (boolean);
  'objcClassPrefix'?: (string);
  'csharpNamespace'?: (string);
  'uninterpretedOption'?: (_google_protobuf_UninterpretedOptionPartial)[];
}

export interface FileOptions {
  'javaPackage': (string);
  'javaOuterClassname': (string);
  'optimizeFor': (_google_protobuf_FileOptions_OptimizeMode);
  'javaMultipleFiles': (boolean);
  'goPackage': (string);
  'ccGenericServices': (boolean);
  'javaGenericServices': (boolean);
  'pyGenericServices': (boolean);
  'javaGenerateEqualsAndHash': (boolean);
  'deprecated': (boolean);
  'javaStringCheckUtf8': (boolean);
  'ccEnableArenas': (boolean);
  'objcClassPrefix': (string);
  'csharpNamespace': (string);
  'uninterpretedOption': (_google_protobuf_UninterpretedOption)[];
}
