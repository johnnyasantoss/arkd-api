// Original file: protos/wallet.proto


export interface GetStatusResponsePartial {
  'initialized'?: (boolean);
  'unlocked'?: (boolean);
  'synced'?: (boolean);
}

export interface GetStatusResponse {
  'initialized': (boolean);
  'unlocked': (boolean);
  'synced': (boolean);
}
