// Original file: protos/lit-status.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { SubServerStatusReqPartial as _litrpc_SubServerStatusReqPartial, SubServerStatusReq as _litrpc_SubServerStatusReq } from '../litrpc/SubServerStatusReq';
import type { SubServerStatusRespPartial as _litrpc_SubServerStatusRespPartial, SubServerStatusResp as _litrpc_SubServerStatusResp } from '../litrpc/SubServerStatusResp';

export interface StatusClient extends grpc.Client {
  SubServerStatus(argument: _litrpc_SubServerStatusReqPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_litrpc_SubServerStatusResp>): grpc.ClientUnaryCall;
  SubServerStatus(argument: _litrpc_SubServerStatusReqPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_litrpc_SubServerStatusResp>): grpc.ClientUnaryCall;
  SubServerStatus(argument: _litrpc_SubServerStatusReqPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_litrpc_SubServerStatusResp>): grpc.ClientUnaryCall;
  SubServerStatus(argument: _litrpc_SubServerStatusReqPartial, callback: grpc.requestCallback<_litrpc_SubServerStatusResp>): grpc.ClientUnaryCall;
  subServerStatus(argument: _litrpc_SubServerStatusReqPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_litrpc_SubServerStatusResp>): grpc.ClientUnaryCall;
  subServerStatus(argument: _litrpc_SubServerStatusReqPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_litrpc_SubServerStatusResp>): grpc.ClientUnaryCall;
  subServerStatus(argument: _litrpc_SubServerStatusReqPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_litrpc_SubServerStatusResp>): grpc.ClientUnaryCall;
  subServerStatus(argument: _litrpc_SubServerStatusReqPartial, callback: grpc.requestCallback<_litrpc_SubServerStatusResp>): grpc.ClientUnaryCall;
  
}

export interface StatusHandlers extends grpc.UntypedServiceImplementation {
  SubServerStatus: grpc.handleUnaryCall<_litrpc_SubServerStatusReq, _litrpc_SubServerStatusRespPartial>;
  
}

export interface StatusDefinition extends grpc.ServiceDefinition {
  SubServerStatus: MethodDefinition<_litrpc_SubServerStatusReqPartial, _litrpc_SubServerStatusRespPartial, _litrpc_SubServerStatusReq, _litrpc_SubServerStatusResp>
}
