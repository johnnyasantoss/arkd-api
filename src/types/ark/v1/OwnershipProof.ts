// Original file: protos/service.proto


export interface OwnershipProofPartial {
  'controlBlock'?: (string);
  'script'?: (string);
  'signature'?: (string);
}

export interface OwnershipProof {
  'controlBlock': (string);
  'script': (string);
  'signature': (string);
}
