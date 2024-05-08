// Original file: protos/lit-accounts.proto

import type { AccountInvoicePartial as _litrpc_AccountInvoicePartial, AccountInvoice as _litrpc_AccountInvoice } from '../litrpc/AccountInvoice';
import type { AccountPaymentPartial as _litrpc_AccountPaymentPartial, AccountPayment as _litrpc_AccountPayment } from '../litrpc/AccountPayment';
import type { Long } from '@grpc/proto-loader';

export interface AccountPartial {
  'id'?: (string);
  'initialBalance'?: (number | string | Long);
  'currentBalance'?: (number | string | Long);
  'lastUpdate'?: (number | string | Long);
  'expirationDate'?: (number | string | Long);
  'invoices'?: (_litrpc_AccountInvoicePartial)[];
  'payments'?: (_litrpc_AccountPaymentPartial)[];
  'label'?: (string);
}

export interface Account {
  'id': (string);
  'initialBalance': (string);
  'currentBalance': (string);
  'lastUpdate': (string);
  'expirationDate': (string);
  'invoices': (_litrpc_AccountInvoice)[];
  'payments': (_litrpc_AccountPayment)[];
  'label': (string);
}
