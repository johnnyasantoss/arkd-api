// Original file: protos/types.proto


export interface OutpointPartial {
  'txid'?: (string);
  'vout'?: (number);
}

export interface Outpoint {
  'txid': (string);
  'vout': (number);
}
