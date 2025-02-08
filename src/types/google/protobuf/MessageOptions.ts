// Original file: null

import type { UninterpretedOptionPartial as _google_protobuf_UninterpretedOptionPartial, UninterpretedOption as _google_protobuf_UninterpretedOption } from '../../google/protobuf/UninterpretedOption';

export interface MessageOptionsPartial {
  'messageSetWireFormat'?: (boolean);
  'noStandardDescriptorAccessor'?: (boolean);
  'deprecated'?: (boolean);
  'mapEntry'?: (boolean);
  'uninterpretedOption'?: (_google_protobuf_UninterpretedOptionPartial)[];
}

export interface MessageOptions {
  'messageSetWireFormat': (boolean);
  'noStandardDescriptorAccessor': (boolean);
  'deprecated': (boolean);
  'mapEntry': (boolean);
  'uninterpretedOption': (_google_protobuf_UninterpretedOption)[];
}
