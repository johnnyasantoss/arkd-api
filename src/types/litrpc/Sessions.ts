// Original file: protos/lit-sessions.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { AddSessionRequestPartial as _litrpc_AddSessionRequestPartial, AddSessionRequest as _litrpc_AddSessionRequest } from '../litrpc/AddSessionRequest';
import type { AddSessionResponsePartial as _litrpc_AddSessionResponsePartial, AddSessionResponse as _litrpc_AddSessionResponse } from '../litrpc/AddSessionResponse';
import type { ListSessionsRequestPartial as _litrpc_ListSessionsRequestPartial, ListSessionsRequest as _litrpc_ListSessionsRequest } from '../litrpc/ListSessionsRequest';
import type { ListSessionsResponsePartial as _litrpc_ListSessionsResponsePartial, ListSessionsResponse as _litrpc_ListSessionsResponse } from '../litrpc/ListSessionsResponse';
import type { RevokeSessionRequestPartial as _litrpc_RevokeSessionRequestPartial, RevokeSessionRequest as _litrpc_RevokeSessionRequest } from '../litrpc/RevokeSessionRequest';
import type { RevokeSessionResponsePartial as _litrpc_RevokeSessionResponsePartial, RevokeSessionResponse as _litrpc_RevokeSessionResponse } from '../litrpc/RevokeSessionResponse';

export interface SessionsClient extends grpc.Client {
  AddSession(argument: _litrpc_AddSessionRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_litrpc_AddSessionResponse>): grpc.ClientUnaryCall;
  AddSession(argument: _litrpc_AddSessionRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_litrpc_AddSessionResponse>): grpc.ClientUnaryCall;
  AddSession(argument: _litrpc_AddSessionRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_litrpc_AddSessionResponse>): grpc.ClientUnaryCall;
  AddSession(argument: _litrpc_AddSessionRequestPartial, callback: grpc.requestCallback<_litrpc_AddSessionResponse>): grpc.ClientUnaryCall;
  addSession(argument: _litrpc_AddSessionRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_litrpc_AddSessionResponse>): grpc.ClientUnaryCall;
  addSession(argument: _litrpc_AddSessionRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_litrpc_AddSessionResponse>): grpc.ClientUnaryCall;
  addSession(argument: _litrpc_AddSessionRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_litrpc_AddSessionResponse>): grpc.ClientUnaryCall;
  addSession(argument: _litrpc_AddSessionRequestPartial, callback: grpc.requestCallback<_litrpc_AddSessionResponse>): grpc.ClientUnaryCall;
  
  ListSessions(argument: _litrpc_ListSessionsRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_litrpc_ListSessionsResponse>): grpc.ClientUnaryCall;
  ListSessions(argument: _litrpc_ListSessionsRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_litrpc_ListSessionsResponse>): grpc.ClientUnaryCall;
  ListSessions(argument: _litrpc_ListSessionsRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_litrpc_ListSessionsResponse>): grpc.ClientUnaryCall;
  ListSessions(argument: _litrpc_ListSessionsRequestPartial, callback: grpc.requestCallback<_litrpc_ListSessionsResponse>): grpc.ClientUnaryCall;
  listSessions(argument: _litrpc_ListSessionsRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_litrpc_ListSessionsResponse>): grpc.ClientUnaryCall;
  listSessions(argument: _litrpc_ListSessionsRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_litrpc_ListSessionsResponse>): grpc.ClientUnaryCall;
  listSessions(argument: _litrpc_ListSessionsRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_litrpc_ListSessionsResponse>): grpc.ClientUnaryCall;
  listSessions(argument: _litrpc_ListSessionsRequestPartial, callback: grpc.requestCallback<_litrpc_ListSessionsResponse>): grpc.ClientUnaryCall;
  
  RevokeSession(argument: _litrpc_RevokeSessionRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_litrpc_RevokeSessionResponse>): grpc.ClientUnaryCall;
  RevokeSession(argument: _litrpc_RevokeSessionRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_litrpc_RevokeSessionResponse>): grpc.ClientUnaryCall;
  RevokeSession(argument: _litrpc_RevokeSessionRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_litrpc_RevokeSessionResponse>): grpc.ClientUnaryCall;
  RevokeSession(argument: _litrpc_RevokeSessionRequestPartial, callback: grpc.requestCallback<_litrpc_RevokeSessionResponse>): grpc.ClientUnaryCall;
  revokeSession(argument: _litrpc_RevokeSessionRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_litrpc_RevokeSessionResponse>): grpc.ClientUnaryCall;
  revokeSession(argument: _litrpc_RevokeSessionRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_litrpc_RevokeSessionResponse>): grpc.ClientUnaryCall;
  revokeSession(argument: _litrpc_RevokeSessionRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_litrpc_RevokeSessionResponse>): grpc.ClientUnaryCall;
  revokeSession(argument: _litrpc_RevokeSessionRequestPartial, callback: grpc.requestCallback<_litrpc_RevokeSessionResponse>): grpc.ClientUnaryCall;
  
}

export interface SessionsHandlers extends grpc.UntypedServiceImplementation {
  AddSession: grpc.handleUnaryCall<_litrpc_AddSessionRequest, _litrpc_AddSessionResponsePartial>;
  
  ListSessions: grpc.handleUnaryCall<_litrpc_ListSessionsRequest, _litrpc_ListSessionsResponsePartial>;
  
  RevokeSession: grpc.handleUnaryCall<_litrpc_RevokeSessionRequest, _litrpc_RevokeSessionResponsePartial>;
  
}

export interface SessionsDefinition extends grpc.ServiceDefinition {
  AddSession: MethodDefinition<_litrpc_AddSessionRequestPartial, _litrpc_AddSessionResponsePartial, _litrpc_AddSessionRequest, _litrpc_AddSessionResponse>
  ListSessions: MethodDefinition<_litrpc_ListSessionsRequestPartial, _litrpc_ListSessionsResponsePartial, _litrpc_ListSessionsRequest, _litrpc_ListSessionsResponse>
  RevokeSession: MethodDefinition<_litrpc_RevokeSessionRequestPartial, _litrpc_RevokeSessionResponsePartial, _litrpc_RevokeSessionRequest, _litrpc_RevokeSessionResponse>
}
