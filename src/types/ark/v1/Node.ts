// Original file: protos/service.proto


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
