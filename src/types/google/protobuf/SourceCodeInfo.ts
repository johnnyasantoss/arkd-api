// Original file: null


export interface _google_protobuf_SourceCodeInfo_LocationPartial {
  'path'?: (number)[];
  'span'?: (number)[];
  'leadingComments'?: (string);
  'trailingComments'?: (string);
  'leadingDetachedComments'?: (string)[];
}

export interface _google_protobuf_SourceCodeInfo_Location {
  'path': (number)[];
  'span': (number)[];
  'leadingComments': (string);
  'trailingComments': (string);
  'leadingDetachedComments': (string)[];
}

export interface SourceCodeInfoPartial {
  'location'?: (_google_protobuf_SourceCodeInfo_LocationPartial)[];
}

export interface SourceCodeInfo {
  'location': (_google_protobuf_SourceCodeInfo_Location)[];
}
