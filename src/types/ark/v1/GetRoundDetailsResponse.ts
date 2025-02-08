// Original file: protos/admin.proto


export interface GetRoundDetailsResponsePartial {
  'roundId'?: (string);
  'txid'?: (string);
  'forfeitedAmount'?: (string);
  'totalVtxosAmount'?: (string);
  'totalExitAmount'?: (string);
  'feesAmount'?: (string);
  'inputsVtxos'?: (string)[];
  'outputsVtxos'?: (string)[];
  'exitAddresses'?: (string)[];
}

export interface GetRoundDetailsResponse {
  'roundId': (string);
  'txid': (string);
  'forfeitedAmount': (string);
  'totalVtxosAmount': (string);
  'totalExitAmount': (string);
  'feesAmount': (string);
  'inputsVtxos': (string)[];
  'outputsVtxos': (string)[];
  'exitAddresses': (string)[];
}
