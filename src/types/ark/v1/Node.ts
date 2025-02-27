// Original file: protos/types.proto


export interface NodePartial {
  'txid'?: (string);
  'tx'?: (string);
  'parentTxid'?: (string);
}

export interface Node {
  'txid': (string);
  'tx': (string);
  'parentTxid': (string);
}
