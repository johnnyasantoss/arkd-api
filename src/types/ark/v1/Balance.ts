// Original file: protos/wallet.proto


export interface BalancePartial {
  'locked'?: (string);
  'available'?: (string);
}

export interface Balance {
  'locked': (string);
  'available': (string);
}
