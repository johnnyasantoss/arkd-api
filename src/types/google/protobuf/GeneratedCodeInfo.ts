// Original file: null


export interface _google_protobuf_GeneratedCodeInfo_AnnotationPartial {
  'path'?: (number)[];
  'sourceFile'?: (string);
  'begin'?: (number);
  'end'?: (number);
}

export interface _google_protobuf_GeneratedCodeInfo_Annotation {
  'path': (number)[];
  'sourceFile': (string);
  'begin': (number);
  'end': (number);
}

export interface GeneratedCodeInfoPartial {
  'annotation'?: (_google_protobuf_GeneratedCodeInfo_AnnotationPartial)[];
}

export interface GeneratedCodeInfo {
  'annotation': (_google_protobuf_GeneratedCodeInfo_Annotation)[];
}
