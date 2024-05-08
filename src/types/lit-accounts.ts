import type * as grpc from '@grpc/grpc-js';
import type { MessageTypeDefinition } from '@grpc/proto-loader';

import type { AccountsClient as _litrpc_AccountsClient, AccountsDefinition as _litrpc_AccountsDefinition } from './litrpc/Accounts';

type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
  new(...args: ConstructorParameters<Constructor>): Subtype;
};

export interface ProtoGrpcType {
  litrpc: {
    Account: MessageTypeDefinition
    AccountInfoRequest: MessageTypeDefinition
    AccountInvoice: MessageTypeDefinition
    AccountPayment: MessageTypeDefinition
    Accounts: SubtypeConstructor<typeof grpc.Client, _litrpc_AccountsClient> & { service: _litrpc_AccountsDefinition }
    CreateAccountRequest: MessageTypeDefinition
    CreateAccountResponse: MessageTypeDefinition
    ListAccountsRequest: MessageTypeDefinition
    ListAccountsResponse: MessageTypeDefinition
    RemoveAccountRequest: MessageTypeDefinition
    RemoveAccountResponse: MessageTypeDefinition
    UpdateAccountRequest: MessageTypeDefinition
  }
}

