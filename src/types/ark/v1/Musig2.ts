// Original file: protos/service.proto


export interface Musig2Partial {
  'cosignersPublicKeys'?: (string)[];
  'signingAll'?: (boolean);
}

export interface Musig2 {
  'cosignersPublicKeys': (string)[];
  'signingAll': (boolean);
}
