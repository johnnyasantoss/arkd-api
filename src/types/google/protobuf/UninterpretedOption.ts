// Original file: null

import type { Long } from '@grpc/proto-loader';

export interface _google_protobuf_UninterpretedOption_NamePartPartial {
  'namePart'?: (string);
  'isExtension'?: (boolean);
}

export interface _google_protobuf_UninterpretedOption_NamePart {
  'namePart': (string);
  'isExtension': (boolean);
}

export interface UninterpretedOptionPartial {
  'name'?: (_google_protobuf_UninterpretedOption_NamePartPartial)[];
  'identifierValue'?: (string);
  'positiveIntValue'?: (number | string | Long);
  'negativeIntValue'?: (number | string | Long);
  'doubleValue'?: (number | string);
  'stringValue'?: (Buffer | Uint8Array | string);
  'aggregateValue'?: (string);
}

export interface UninterpretedOption {
  'name': (_google_protobuf_UninterpretedOption_NamePart)[];
  'identifierValue': (string);
  'positiveIntValue': (string);
  'negativeIntValue': (string);
  'doubleValue': (number);
  'stringValue': (Buffer);
  'aggregateValue': (string);
}
