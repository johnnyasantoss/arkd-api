// Original file: protos/lit-accounts.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { AccountPartial as _litrpc_AccountPartial, Account as _litrpc_Account } from '../litrpc/Account';
import type { AccountInfoRequestPartial as _litrpc_AccountInfoRequestPartial, AccountInfoRequest as _litrpc_AccountInfoRequest } from '../litrpc/AccountInfoRequest';
import type { CreateAccountRequestPartial as _litrpc_CreateAccountRequestPartial, CreateAccountRequest as _litrpc_CreateAccountRequest } from '../litrpc/CreateAccountRequest';
import type { CreateAccountResponsePartial as _litrpc_CreateAccountResponsePartial, CreateAccountResponse as _litrpc_CreateAccountResponse } from '../litrpc/CreateAccountResponse';
import type { ListAccountsRequestPartial as _litrpc_ListAccountsRequestPartial, ListAccountsRequest as _litrpc_ListAccountsRequest } from '../litrpc/ListAccountsRequest';
import type { ListAccountsResponsePartial as _litrpc_ListAccountsResponsePartial, ListAccountsResponse as _litrpc_ListAccountsResponse } from '../litrpc/ListAccountsResponse';
import type { RemoveAccountRequestPartial as _litrpc_RemoveAccountRequestPartial, RemoveAccountRequest as _litrpc_RemoveAccountRequest } from '../litrpc/RemoveAccountRequest';
import type { RemoveAccountResponsePartial as _litrpc_RemoveAccountResponsePartial, RemoveAccountResponse as _litrpc_RemoveAccountResponse } from '../litrpc/RemoveAccountResponse';
import type { UpdateAccountRequestPartial as _litrpc_UpdateAccountRequestPartial, UpdateAccountRequest as _litrpc_UpdateAccountRequest } from '../litrpc/UpdateAccountRequest';

export interface AccountsClient extends grpc.Client {
  AccountInfo(argument: _litrpc_AccountInfoRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_litrpc_Account>): grpc.ClientUnaryCall;
  AccountInfo(argument: _litrpc_AccountInfoRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_litrpc_Account>): grpc.ClientUnaryCall;
  AccountInfo(argument: _litrpc_AccountInfoRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_litrpc_Account>): grpc.ClientUnaryCall;
  AccountInfo(argument: _litrpc_AccountInfoRequestPartial, callback: grpc.requestCallback<_litrpc_Account>): grpc.ClientUnaryCall;
  accountInfo(argument: _litrpc_AccountInfoRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_litrpc_Account>): grpc.ClientUnaryCall;
  accountInfo(argument: _litrpc_AccountInfoRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_litrpc_Account>): grpc.ClientUnaryCall;
  accountInfo(argument: _litrpc_AccountInfoRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_litrpc_Account>): grpc.ClientUnaryCall;
  accountInfo(argument: _litrpc_AccountInfoRequestPartial, callback: grpc.requestCallback<_litrpc_Account>): grpc.ClientUnaryCall;
  
  CreateAccount(argument: _litrpc_CreateAccountRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_litrpc_CreateAccountResponse>): grpc.ClientUnaryCall;
  CreateAccount(argument: _litrpc_CreateAccountRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_litrpc_CreateAccountResponse>): grpc.ClientUnaryCall;
  CreateAccount(argument: _litrpc_CreateAccountRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_litrpc_CreateAccountResponse>): grpc.ClientUnaryCall;
  CreateAccount(argument: _litrpc_CreateAccountRequestPartial, callback: grpc.requestCallback<_litrpc_CreateAccountResponse>): grpc.ClientUnaryCall;
  createAccount(argument: _litrpc_CreateAccountRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_litrpc_CreateAccountResponse>): grpc.ClientUnaryCall;
  createAccount(argument: _litrpc_CreateAccountRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_litrpc_CreateAccountResponse>): grpc.ClientUnaryCall;
  createAccount(argument: _litrpc_CreateAccountRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_litrpc_CreateAccountResponse>): grpc.ClientUnaryCall;
  createAccount(argument: _litrpc_CreateAccountRequestPartial, callback: grpc.requestCallback<_litrpc_CreateAccountResponse>): grpc.ClientUnaryCall;
  
  ListAccounts(argument: _litrpc_ListAccountsRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_litrpc_ListAccountsResponse>): grpc.ClientUnaryCall;
  ListAccounts(argument: _litrpc_ListAccountsRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_litrpc_ListAccountsResponse>): grpc.ClientUnaryCall;
  ListAccounts(argument: _litrpc_ListAccountsRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_litrpc_ListAccountsResponse>): grpc.ClientUnaryCall;
  ListAccounts(argument: _litrpc_ListAccountsRequestPartial, callback: grpc.requestCallback<_litrpc_ListAccountsResponse>): grpc.ClientUnaryCall;
  listAccounts(argument: _litrpc_ListAccountsRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_litrpc_ListAccountsResponse>): grpc.ClientUnaryCall;
  listAccounts(argument: _litrpc_ListAccountsRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_litrpc_ListAccountsResponse>): grpc.ClientUnaryCall;
  listAccounts(argument: _litrpc_ListAccountsRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_litrpc_ListAccountsResponse>): grpc.ClientUnaryCall;
  listAccounts(argument: _litrpc_ListAccountsRequestPartial, callback: grpc.requestCallback<_litrpc_ListAccountsResponse>): grpc.ClientUnaryCall;
  
  RemoveAccount(argument: _litrpc_RemoveAccountRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_litrpc_RemoveAccountResponse>): grpc.ClientUnaryCall;
  RemoveAccount(argument: _litrpc_RemoveAccountRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_litrpc_RemoveAccountResponse>): grpc.ClientUnaryCall;
  RemoveAccount(argument: _litrpc_RemoveAccountRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_litrpc_RemoveAccountResponse>): grpc.ClientUnaryCall;
  RemoveAccount(argument: _litrpc_RemoveAccountRequestPartial, callback: grpc.requestCallback<_litrpc_RemoveAccountResponse>): grpc.ClientUnaryCall;
  removeAccount(argument: _litrpc_RemoveAccountRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_litrpc_RemoveAccountResponse>): grpc.ClientUnaryCall;
  removeAccount(argument: _litrpc_RemoveAccountRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_litrpc_RemoveAccountResponse>): grpc.ClientUnaryCall;
  removeAccount(argument: _litrpc_RemoveAccountRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_litrpc_RemoveAccountResponse>): grpc.ClientUnaryCall;
  removeAccount(argument: _litrpc_RemoveAccountRequestPartial, callback: grpc.requestCallback<_litrpc_RemoveAccountResponse>): grpc.ClientUnaryCall;
  
  UpdateAccount(argument: _litrpc_UpdateAccountRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_litrpc_Account>): grpc.ClientUnaryCall;
  UpdateAccount(argument: _litrpc_UpdateAccountRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_litrpc_Account>): grpc.ClientUnaryCall;
  UpdateAccount(argument: _litrpc_UpdateAccountRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_litrpc_Account>): grpc.ClientUnaryCall;
  UpdateAccount(argument: _litrpc_UpdateAccountRequestPartial, callback: grpc.requestCallback<_litrpc_Account>): grpc.ClientUnaryCall;
  updateAccount(argument: _litrpc_UpdateAccountRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_litrpc_Account>): grpc.ClientUnaryCall;
  updateAccount(argument: _litrpc_UpdateAccountRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_litrpc_Account>): grpc.ClientUnaryCall;
  updateAccount(argument: _litrpc_UpdateAccountRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_litrpc_Account>): grpc.ClientUnaryCall;
  updateAccount(argument: _litrpc_UpdateAccountRequestPartial, callback: grpc.requestCallback<_litrpc_Account>): grpc.ClientUnaryCall;
  
}

export interface AccountsHandlers extends grpc.UntypedServiceImplementation {
  AccountInfo: grpc.handleUnaryCall<_litrpc_AccountInfoRequest, _litrpc_AccountPartial>;
  
  CreateAccount: grpc.handleUnaryCall<_litrpc_CreateAccountRequest, _litrpc_CreateAccountResponsePartial>;
  
  ListAccounts: grpc.handleUnaryCall<_litrpc_ListAccountsRequest, _litrpc_ListAccountsResponsePartial>;
  
  RemoveAccount: grpc.handleUnaryCall<_litrpc_RemoveAccountRequest, _litrpc_RemoveAccountResponsePartial>;
  
  UpdateAccount: grpc.handleUnaryCall<_litrpc_UpdateAccountRequest, _litrpc_AccountPartial>;
  
}

export interface AccountsDefinition extends grpc.ServiceDefinition {
  AccountInfo: MethodDefinition<_litrpc_AccountInfoRequestPartial, _litrpc_AccountPartial, _litrpc_AccountInfoRequest, _litrpc_Account>
  CreateAccount: MethodDefinition<_litrpc_CreateAccountRequestPartial, _litrpc_CreateAccountResponsePartial, _litrpc_CreateAccountRequest, _litrpc_CreateAccountResponse>
  ListAccounts: MethodDefinition<_litrpc_ListAccountsRequestPartial, _litrpc_ListAccountsResponsePartial, _litrpc_ListAccountsRequest, _litrpc_ListAccountsResponse>
  RemoveAccount: MethodDefinition<_litrpc_RemoveAccountRequestPartial, _litrpc_RemoveAccountResponsePartial, _litrpc_RemoveAccountRequest, _litrpc_RemoveAccountResponse>
  UpdateAccount: MethodDefinition<_litrpc_UpdateAccountRequestPartial, _litrpc_AccountPartial, _litrpc_UpdateAccountRequest, _litrpc_Account>
}
