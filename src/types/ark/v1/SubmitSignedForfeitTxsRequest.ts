// Original file: protos/service.proto


export interface SubmitSignedForfeitTxsRequestPartial {
  'signedForfeitTxs'?: (string)[];
  'signedRoundTx'?: (string);
  '_signedRoundTx'?: "signedRoundTx";
}

export interface SubmitSignedForfeitTxsRequest {
  'signedForfeitTxs': (string)[];
  'signedRoundTx'?: (string);
  '_signedRoundTx': "signedRoundTx";
}
