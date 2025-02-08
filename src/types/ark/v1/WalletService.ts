// Original file: protos/wallet.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { DeriveAddressRequestPartial as _ark_v1_DeriveAddressRequestPartial, DeriveAddressRequest as _ark_v1_DeriveAddressRequest } from '../../ark/v1/DeriveAddressRequest';
import type { DeriveAddressResponsePartial as _ark_v1_DeriveAddressResponsePartial, DeriveAddressResponse as _ark_v1_DeriveAddressResponse } from '../../ark/v1/DeriveAddressResponse';
import type { GetBalanceRequestPartial as _ark_v1_GetBalanceRequestPartial, GetBalanceRequest as _ark_v1_GetBalanceRequest } from '../../ark/v1/GetBalanceRequest';
import type { GetBalanceResponsePartial as _ark_v1_GetBalanceResponsePartial, GetBalanceResponse as _ark_v1_GetBalanceResponse } from '../../ark/v1/GetBalanceResponse';
import type { LockRequestPartial as _ark_v1_LockRequestPartial, LockRequest as _ark_v1_LockRequest } from '../../ark/v1/LockRequest';
import type { LockResponsePartial as _ark_v1_LockResponsePartial, LockResponse as _ark_v1_LockResponse } from '../../ark/v1/LockResponse';

export interface WalletServiceClient extends grpc.Client {
  DeriveAddress(argument: _ark_v1_DeriveAddressRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_ark_v1_DeriveAddressResponse>): grpc.ClientUnaryCall;
  DeriveAddress(argument: _ark_v1_DeriveAddressRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_ark_v1_DeriveAddressResponse>): grpc.ClientUnaryCall;
  DeriveAddress(argument: _ark_v1_DeriveAddressRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_ark_v1_DeriveAddressResponse>): grpc.ClientUnaryCall;
  DeriveAddress(argument: _ark_v1_DeriveAddressRequestPartial, callback: grpc.requestCallback<_ark_v1_DeriveAddressResponse>): grpc.ClientUnaryCall;
  deriveAddress(argument: _ark_v1_DeriveAddressRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_ark_v1_DeriveAddressResponse>): grpc.ClientUnaryCall;
  deriveAddress(argument: _ark_v1_DeriveAddressRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_ark_v1_DeriveAddressResponse>): grpc.ClientUnaryCall;
  deriveAddress(argument: _ark_v1_DeriveAddressRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_ark_v1_DeriveAddressResponse>): grpc.ClientUnaryCall;
  deriveAddress(argument: _ark_v1_DeriveAddressRequestPartial, callback: grpc.requestCallback<_ark_v1_DeriveAddressResponse>): grpc.ClientUnaryCall;
  
  GetBalance(argument: _ark_v1_GetBalanceRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_ark_v1_GetBalanceResponse>): grpc.ClientUnaryCall;
  GetBalance(argument: _ark_v1_GetBalanceRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_ark_v1_GetBalanceResponse>): grpc.ClientUnaryCall;
  GetBalance(argument: _ark_v1_GetBalanceRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_ark_v1_GetBalanceResponse>): grpc.ClientUnaryCall;
  GetBalance(argument: _ark_v1_GetBalanceRequestPartial, callback: grpc.requestCallback<_ark_v1_GetBalanceResponse>): grpc.ClientUnaryCall;
  getBalance(argument: _ark_v1_GetBalanceRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_ark_v1_GetBalanceResponse>): grpc.ClientUnaryCall;
  getBalance(argument: _ark_v1_GetBalanceRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_ark_v1_GetBalanceResponse>): grpc.ClientUnaryCall;
  getBalance(argument: _ark_v1_GetBalanceRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_ark_v1_GetBalanceResponse>): grpc.ClientUnaryCall;
  getBalance(argument: _ark_v1_GetBalanceRequestPartial, callback: grpc.requestCallback<_ark_v1_GetBalanceResponse>): grpc.ClientUnaryCall;
  
  Lock(argument: _ark_v1_LockRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_ark_v1_LockResponse>): grpc.ClientUnaryCall;
  Lock(argument: _ark_v1_LockRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_ark_v1_LockResponse>): grpc.ClientUnaryCall;
  Lock(argument: _ark_v1_LockRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_ark_v1_LockResponse>): grpc.ClientUnaryCall;
  Lock(argument: _ark_v1_LockRequestPartial, callback: grpc.requestCallback<_ark_v1_LockResponse>): grpc.ClientUnaryCall;
  lock(argument: _ark_v1_LockRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_ark_v1_LockResponse>): grpc.ClientUnaryCall;
  lock(argument: _ark_v1_LockRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_ark_v1_LockResponse>): grpc.ClientUnaryCall;
  lock(argument: _ark_v1_LockRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_ark_v1_LockResponse>): grpc.ClientUnaryCall;
  lock(argument: _ark_v1_LockRequestPartial, callback: grpc.requestCallback<_ark_v1_LockResponse>): grpc.ClientUnaryCall;
  
}

export interface WalletServiceHandlers extends grpc.UntypedServiceImplementation {
  DeriveAddress: grpc.handleUnaryCall<_ark_v1_DeriveAddressRequest, _ark_v1_DeriveAddressResponsePartial>;
  
  GetBalance: grpc.handleUnaryCall<_ark_v1_GetBalanceRequest, _ark_v1_GetBalanceResponsePartial>;
  
  Lock: grpc.handleUnaryCall<_ark_v1_LockRequest, _ark_v1_LockResponsePartial>;
  
}

export interface WalletServiceDefinition extends grpc.ServiceDefinition {
  DeriveAddress: MethodDefinition<_ark_v1_DeriveAddressRequestPartial, _ark_v1_DeriveAddressResponsePartial, _ark_v1_DeriveAddressRequest, _ark_v1_DeriveAddressResponse>
  GetBalance: MethodDefinition<_ark_v1_GetBalanceRequestPartial, _ark_v1_GetBalanceResponsePartial, _ark_v1_GetBalanceRequest, _ark_v1_GetBalanceResponse>
  Lock: MethodDefinition<_ark_v1_LockRequestPartial, _ark_v1_LockResponsePartial, _ark_v1_LockRequest, _ark_v1_LockResponse>
}
