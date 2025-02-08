// Original file: null

import type { UninterpretedOptionPartial as _google_protobuf_UninterpretedOptionPartial, UninterpretedOption as _google_protobuf_UninterpretedOption } from '../../google/protobuf/UninterpretedOption';

// Original file: null

export const _google_protobuf_FieldOptions_CType = {
  STRING: 'STRING',
  CORD: 'CORD',
  STRING_PIECE: 'STRING_PIECE',
} as const;

export type _google_protobuf_FieldOptions_CTypePartial =
  | 'STRING'
  | 0
  | 'CORD'
  | 1
  | 'STRING_PIECE'
  | 2

export type _google_protobuf_FieldOptions_CType = typeof _google_protobuf_FieldOptions_CType[keyof typeof _google_protobuf_FieldOptions_CType]

// Original file: null

export const _google_protobuf_FieldOptions_JSType = {
  JS_NORMAL: 'JS_NORMAL',
  JS_STRING: 'JS_STRING',
  JS_NUMBER: 'JS_NUMBER',
} as const;

export type _google_protobuf_FieldOptions_JSTypePartial =
  | 'JS_NORMAL'
  | 0
  | 'JS_STRING'
  | 1
  | 'JS_NUMBER'
  | 2

export type _google_protobuf_FieldOptions_JSType = typeof _google_protobuf_FieldOptions_JSType[keyof typeof _google_protobuf_FieldOptions_JSType]

export interface FieldOptionsPartial {
  'ctype'?: (_google_protobuf_FieldOptions_CTypePartial);
  'packed'?: (boolean);
  'deprecated'?: (boolean);
  'lazy'?: (boolean);
  'jstype'?: (_google_protobuf_FieldOptions_JSTypePartial);
  'weak'?: (boolean);
  'uninterpretedOption'?: (_google_protobuf_UninterpretedOptionPartial)[];
}

export interface FieldOptions {
  'ctype': (_google_protobuf_FieldOptions_CType);
  'packed': (boolean);
  'deprecated': (boolean);
  'lazy': (boolean);
  'jstype': (_google_protobuf_FieldOptions_JSType);
  'weak': (boolean);
  'uninterpretedOption': (_google_protobuf_UninterpretedOption)[];
}
