// Original file: protos/wallet.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { CreateRequestPartial as _ark_v1_CreateRequestPartial, CreateRequest as _ark_v1_CreateRequest } from '../../ark/v1/CreateRequest';
import type { CreateResponsePartial as _ark_v1_CreateResponsePartial, CreateResponse as _ark_v1_CreateResponse } from '../../ark/v1/CreateResponse';
import type { GenSeedRequestPartial as _ark_v1_GenSeedRequestPartial, GenSeedRequest as _ark_v1_GenSeedRequest } from '../../ark/v1/GenSeedRequest';
import type { GenSeedResponsePartial as _ark_v1_GenSeedResponsePartial, GenSeedResponse as _ark_v1_GenSeedResponse } from '../../ark/v1/GenSeedResponse';
import type { GetStatusRequestPartial as _ark_v1_GetStatusRequestPartial, GetStatusRequest as _ark_v1_GetStatusRequest } from '../../ark/v1/GetStatusRequest';
import type { GetStatusResponsePartial as _ark_v1_GetStatusResponsePartial, GetStatusResponse as _ark_v1_GetStatusResponse } from '../../ark/v1/GetStatusResponse';
import type { RestoreRequestPartial as _ark_v1_RestoreRequestPartial, RestoreRequest as _ark_v1_RestoreRequest } from '../../ark/v1/RestoreRequest';
import type { RestoreResponsePartial as _ark_v1_RestoreResponsePartial, RestoreResponse as _ark_v1_RestoreResponse } from '../../ark/v1/RestoreResponse';
import type { UnlockRequestPartial as _ark_v1_UnlockRequestPartial, UnlockRequest as _ark_v1_UnlockRequest } from '../../ark/v1/UnlockRequest';
import type { UnlockResponsePartial as _ark_v1_UnlockResponsePartial, UnlockResponse as _ark_v1_UnlockResponse } from '../../ark/v1/UnlockResponse';

export interface WalletInitializerServiceClient extends grpc.Client {
  Create(argument: _ark_v1_CreateRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_ark_v1_CreateResponse>): grpc.ClientUnaryCall;
  Create(argument: _ark_v1_CreateRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_ark_v1_CreateResponse>): grpc.ClientUnaryCall;
  Create(argument: _ark_v1_CreateRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_ark_v1_CreateResponse>): grpc.ClientUnaryCall;
  Create(argument: _ark_v1_CreateRequestPartial, callback: grpc.requestCallback<_ark_v1_CreateResponse>): grpc.ClientUnaryCall;
  create(argument: _ark_v1_CreateRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_ark_v1_CreateResponse>): grpc.ClientUnaryCall;
  create(argument: _ark_v1_CreateRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_ark_v1_CreateResponse>): grpc.ClientUnaryCall;
  create(argument: _ark_v1_CreateRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_ark_v1_CreateResponse>): grpc.ClientUnaryCall;
  create(argument: _ark_v1_CreateRequestPartial, callback: grpc.requestCallback<_ark_v1_CreateResponse>): grpc.ClientUnaryCall;
  
  GenSeed(argument: _ark_v1_GenSeedRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_ark_v1_GenSeedResponse>): grpc.ClientUnaryCall;
  GenSeed(argument: _ark_v1_GenSeedRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_ark_v1_GenSeedResponse>): grpc.ClientUnaryCall;
  GenSeed(argument: _ark_v1_GenSeedRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_ark_v1_GenSeedResponse>): grpc.ClientUnaryCall;
  GenSeed(argument: _ark_v1_GenSeedRequestPartial, callback: grpc.requestCallback<_ark_v1_GenSeedResponse>): grpc.ClientUnaryCall;
  genSeed(argument: _ark_v1_GenSeedRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_ark_v1_GenSeedResponse>): grpc.ClientUnaryCall;
  genSeed(argument: _ark_v1_GenSeedRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_ark_v1_GenSeedResponse>): grpc.ClientUnaryCall;
  genSeed(argument: _ark_v1_GenSeedRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_ark_v1_GenSeedResponse>): grpc.ClientUnaryCall;
  genSeed(argument: _ark_v1_GenSeedRequestPartial, callback: grpc.requestCallback<_ark_v1_GenSeedResponse>): grpc.ClientUnaryCall;
  
  GetStatus(argument: _ark_v1_GetStatusRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_ark_v1_GetStatusResponse>): grpc.ClientUnaryCall;
  GetStatus(argument: _ark_v1_GetStatusRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_ark_v1_GetStatusResponse>): grpc.ClientUnaryCall;
  GetStatus(argument: _ark_v1_GetStatusRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_ark_v1_GetStatusResponse>): grpc.ClientUnaryCall;
  GetStatus(argument: _ark_v1_GetStatusRequestPartial, callback: grpc.requestCallback<_ark_v1_GetStatusResponse>): grpc.ClientUnaryCall;
  getStatus(argument: _ark_v1_GetStatusRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_ark_v1_GetStatusResponse>): grpc.ClientUnaryCall;
  getStatus(argument: _ark_v1_GetStatusRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_ark_v1_GetStatusResponse>): grpc.ClientUnaryCall;
  getStatus(argument: _ark_v1_GetStatusRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_ark_v1_GetStatusResponse>): grpc.ClientUnaryCall;
  getStatus(argument: _ark_v1_GetStatusRequestPartial, callback: grpc.requestCallback<_ark_v1_GetStatusResponse>): grpc.ClientUnaryCall;
  
  Restore(argument: _ark_v1_RestoreRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_ark_v1_RestoreResponse>): grpc.ClientUnaryCall;
  Restore(argument: _ark_v1_RestoreRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_ark_v1_RestoreResponse>): grpc.ClientUnaryCall;
  Restore(argument: _ark_v1_RestoreRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_ark_v1_RestoreResponse>): grpc.ClientUnaryCall;
  Restore(argument: _ark_v1_RestoreRequestPartial, callback: grpc.requestCallback<_ark_v1_RestoreResponse>): grpc.ClientUnaryCall;
  restore(argument: _ark_v1_RestoreRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_ark_v1_RestoreResponse>): grpc.ClientUnaryCall;
  restore(argument: _ark_v1_RestoreRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_ark_v1_RestoreResponse>): grpc.ClientUnaryCall;
  restore(argument: _ark_v1_RestoreRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_ark_v1_RestoreResponse>): grpc.ClientUnaryCall;
  restore(argument: _ark_v1_RestoreRequestPartial, callback: grpc.requestCallback<_ark_v1_RestoreResponse>): grpc.ClientUnaryCall;
  
  Unlock(argument: _ark_v1_UnlockRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_ark_v1_UnlockResponse>): grpc.ClientUnaryCall;
  Unlock(argument: _ark_v1_UnlockRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_ark_v1_UnlockResponse>): grpc.ClientUnaryCall;
  Unlock(argument: _ark_v1_UnlockRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_ark_v1_UnlockResponse>): grpc.ClientUnaryCall;
  Unlock(argument: _ark_v1_UnlockRequestPartial, callback: grpc.requestCallback<_ark_v1_UnlockResponse>): grpc.ClientUnaryCall;
  unlock(argument: _ark_v1_UnlockRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_ark_v1_UnlockResponse>): grpc.ClientUnaryCall;
  unlock(argument: _ark_v1_UnlockRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_ark_v1_UnlockResponse>): grpc.ClientUnaryCall;
  unlock(argument: _ark_v1_UnlockRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_ark_v1_UnlockResponse>): grpc.ClientUnaryCall;
  unlock(argument: _ark_v1_UnlockRequestPartial, callback: grpc.requestCallback<_ark_v1_UnlockResponse>): grpc.ClientUnaryCall;
  
}

export interface WalletInitializerServiceHandlers extends grpc.UntypedServiceImplementation {
  Create: grpc.handleUnaryCall<_ark_v1_CreateRequest, _ark_v1_CreateResponsePartial>;
  
  GenSeed: grpc.handleUnaryCall<_ark_v1_GenSeedRequest, _ark_v1_GenSeedResponsePartial>;
  
  GetStatus: grpc.handleUnaryCall<_ark_v1_GetStatusRequest, _ark_v1_GetStatusResponsePartial>;
  
  Restore: grpc.handleUnaryCall<_ark_v1_RestoreRequest, _ark_v1_RestoreResponsePartial>;
  
  Unlock: grpc.handleUnaryCall<_ark_v1_UnlockRequest, _ark_v1_UnlockResponsePartial>;
  
}

export interface WalletInitializerServiceDefinition extends grpc.ServiceDefinition {
  Create: MethodDefinition<_ark_v1_CreateRequestPartial, _ark_v1_CreateResponsePartial, _ark_v1_CreateRequest, _ark_v1_CreateResponse>
  GenSeed: MethodDefinition<_ark_v1_GenSeedRequestPartial, _ark_v1_GenSeedResponsePartial, _ark_v1_GenSeedRequest, _ark_v1_GenSeedResponse>
  GetStatus: MethodDefinition<_ark_v1_GetStatusRequestPartial, _ark_v1_GetStatusResponsePartial, _ark_v1_GetStatusRequest, _ark_v1_GetStatusResponse>
  Restore: MethodDefinition<_ark_v1_RestoreRequestPartial, _ark_v1_RestoreResponsePartial, _ark_v1_RestoreRequest, _ark_v1_RestoreResponse>
  Unlock: MethodDefinition<_ark_v1_UnlockRequestPartial, _ark_v1_UnlockResponsePartial, _ark_v1_UnlockRequest, _ark_v1_UnlockResponse>
}
