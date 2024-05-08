// Original file: protos/lit-accounts.proto


export interface AccountInvoicePartial {
  'hash'?: (Buffer | Uint8Array | string);
}

export interface AccountInvoice {
  'hash': (Buffer);
}
