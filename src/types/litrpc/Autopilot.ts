// Original file: protos/lit-autopilot.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { AddAutopilotSessionRequestPartial as _litrpc_AddAutopilotSessionRequestPartial, AddAutopilotSessionRequest as _litrpc_AddAutopilotSessionRequest } from '../litrpc/AddAutopilotSessionRequest';
import type { AddAutopilotSessionResponsePartial as _litrpc_AddAutopilotSessionResponsePartial, AddAutopilotSessionResponse as _litrpc_AddAutopilotSessionResponse } from '../litrpc/AddAutopilotSessionResponse';
import type { ListAutopilotFeaturesRequestPartial as _litrpc_ListAutopilotFeaturesRequestPartial, ListAutopilotFeaturesRequest as _litrpc_ListAutopilotFeaturesRequest } from '../litrpc/ListAutopilotFeaturesRequest';
import type { ListAutopilotFeaturesResponsePartial as _litrpc_ListAutopilotFeaturesResponsePartial, ListAutopilotFeaturesResponse as _litrpc_ListAutopilotFeaturesResponse } from '../litrpc/ListAutopilotFeaturesResponse';
import type { ListAutopilotSessionsRequestPartial as _litrpc_ListAutopilotSessionsRequestPartial, ListAutopilotSessionsRequest as _litrpc_ListAutopilotSessionsRequest } from '../litrpc/ListAutopilotSessionsRequest';
import type { ListAutopilotSessionsResponsePartial as _litrpc_ListAutopilotSessionsResponsePartial, ListAutopilotSessionsResponse as _litrpc_ListAutopilotSessionsResponse } from '../litrpc/ListAutopilotSessionsResponse';
import type { RevokeAutopilotSessionRequestPartial as _litrpc_RevokeAutopilotSessionRequestPartial, RevokeAutopilotSessionRequest as _litrpc_RevokeAutopilotSessionRequest } from '../litrpc/RevokeAutopilotSessionRequest';
import type { RevokeAutopilotSessionResponsePartial as _litrpc_RevokeAutopilotSessionResponsePartial, RevokeAutopilotSessionResponse as _litrpc_RevokeAutopilotSessionResponse } from '../litrpc/RevokeAutopilotSessionResponse';

export interface AutopilotClient extends grpc.Client {
  AddAutopilotSession(argument: _litrpc_AddAutopilotSessionRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_litrpc_AddAutopilotSessionResponse>): grpc.ClientUnaryCall;
  AddAutopilotSession(argument: _litrpc_AddAutopilotSessionRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_litrpc_AddAutopilotSessionResponse>): grpc.ClientUnaryCall;
  AddAutopilotSession(argument: _litrpc_AddAutopilotSessionRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_litrpc_AddAutopilotSessionResponse>): grpc.ClientUnaryCall;
  AddAutopilotSession(argument: _litrpc_AddAutopilotSessionRequestPartial, callback: grpc.requestCallback<_litrpc_AddAutopilotSessionResponse>): grpc.ClientUnaryCall;
  addAutopilotSession(argument: _litrpc_AddAutopilotSessionRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_litrpc_AddAutopilotSessionResponse>): grpc.ClientUnaryCall;
  addAutopilotSession(argument: _litrpc_AddAutopilotSessionRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_litrpc_AddAutopilotSessionResponse>): grpc.ClientUnaryCall;
  addAutopilotSession(argument: _litrpc_AddAutopilotSessionRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_litrpc_AddAutopilotSessionResponse>): grpc.ClientUnaryCall;
  addAutopilotSession(argument: _litrpc_AddAutopilotSessionRequestPartial, callback: grpc.requestCallback<_litrpc_AddAutopilotSessionResponse>): grpc.ClientUnaryCall;
  
  ListAutopilotFeatures(argument: _litrpc_ListAutopilotFeaturesRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_litrpc_ListAutopilotFeaturesResponse>): grpc.ClientUnaryCall;
  ListAutopilotFeatures(argument: _litrpc_ListAutopilotFeaturesRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_litrpc_ListAutopilotFeaturesResponse>): grpc.ClientUnaryCall;
  ListAutopilotFeatures(argument: _litrpc_ListAutopilotFeaturesRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_litrpc_ListAutopilotFeaturesResponse>): grpc.ClientUnaryCall;
  ListAutopilotFeatures(argument: _litrpc_ListAutopilotFeaturesRequestPartial, callback: grpc.requestCallback<_litrpc_ListAutopilotFeaturesResponse>): grpc.ClientUnaryCall;
  listAutopilotFeatures(argument: _litrpc_ListAutopilotFeaturesRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_litrpc_ListAutopilotFeaturesResponse>): grpc.ClientUnaryCall;
  listAutopilotFeatures(argument: _litrpc_ListAutopilotFeaturesRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_litrpc_ListAutopilotFeaturesResponse>): grpc.ClientUnaryCall;
  listAutopilotFeatures(argument: _litrpc_ListAutopilotFeaturesRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_litrpc_ListAutopilotFeaturesResponse>): grpc.ClientUnaryCall;
  listAutopilotFeatures(argument: _litrpc_ListAutopilotFeaturesRequestPartial, callback: grpc.requestCallback<_litrpc_ListAutopilotFeaturesResponse>): grpc.ClientUnaryCall;
  
  ListAutopilotSessions(argument: _litrpc_ListAutopilotSessionsRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_litrpc_ListAutopilotSessionsResponse>): grpc.ClientUnaryCall;
  ListAutopilotSessions(argument: _litrpc_ListAutopilotSessionsRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_litrpc_ListAutopilotSessionsResponse>): grpc.ClientUnaryCall;
  ListAutopilotSessions(argument: _litrpc_ListAutopilotSessionsRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_litrpc_ListAutopilotSessionsResponse>): grpc.ClientUnaryCall;
  ListAutopilotSessions(argument: _litrpc_ListAutopilotSessionsRequestPartial, callback: grpc.requestCallback<_litrpc_ListAutopilotSessionsResponse>): grpc.ClientUnaryCall;
  listAutopilotSessions(argument: _litrpc_ListAutopilotSessionsRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_litrpc_ListAutopilotSessionsResponse>): grpc.ClientUnaryCall;
  listAutopilotSessions(argument: _litrpc_ListAutopilotSessionsRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_litrpc_ListAutopilotSessionsResponse>): grpc.ClientUnaryCall;
  listAutopilotSessions(argument: _litrpc_ListAutopilotSessionsRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_litrpc_ListAutopilotSessionsResponse>): grpc.ClientUnaryCall;
  listAutopilotSessions(argument: _litrpc_ListAutopilotSessionsRequestPartial, callback: grpc.requestCallback<_litrpc_ListAutopilotSessionsResponse>): grpc.ClientUnaryCall;
  
  RevokeAutopilotSession(argument: _litrpc_RevokeAutopilotSessionRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_litrpc_RevokeAutopilotSessionResponse>): grpc.ClientUnaryCall;
  RevokeAutopilotSession(argument: _litrpc_RevokeAutopilotSessionRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_litrpc_RevokeAutopilotSessionResponse>): grpc.ClientUnaryCall;
  RevokeAutopilotSession(argument: _litrpc_RevokeAutopilotSessionRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_litrpc_RevokeAutopilotSessionResponse>): grpc.ClientUnaryCall;
  RevokeAutopilotSession(argument: _litrpc_RevokeAutopilotSessionRequestPartial, callback: grpc.requestCallback<_litrpc_RevokeAutopilotSessionResponse>): grpc.ClientUnaryCall;
  revokeAutopilotSession(argument: _litrpc_RevokeAutopilotSessionRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_litrpc_RevokeAutopilotSessionResponse>): grpc.ClientUnaryCall;
  revokeAutopilotSession(argument: _litrpc_RevokeAutopilotSessionRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_litrpc_RevokeAutopilotSessionResponse>): grpc.ClientUnaryCall;
  revokeAutopilotSession(argument: _litrpc_RevokeAutopilotSessionRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_litrpc_RevokeAutopilotSessionResponse>): grpc.ClientUnaryCall;
  revokeAutopilotSession(argument: _litrpc_RevokeAutopilotSessionRequestPartial, callback: grpc.requestCallback<_litrpc_RevokeAutopilotSessionResponse>): grpc.ClientUnaryCall;
  
}

export interface AutopilotHandlers extends grpc.UntypedServiceImplementation {
  AddAutopilotSession: grpc.handleUnaryCall<_litrpc_AddAutopilotSessionRequest, _litrpc_AddAutopilotSessionResponsePartial>;
  
  ListAutopilotFeatures: grpc.handleUnaryCall<_litrpc_ListAutopilotFeaturesRequest, _litrpc_ListAutopilotFeaturesResponsePartial>;
  
  ListAutopilotSessions: grpc.handleUnaryCall<_litrpc_ListAutopilotSessionsRequest, _litrpc_ListAutopilotSessionsResponsePartial>;
  
  RevokeAutopilotSession: grpc.handleUnaryCall<_litrpc_RevokeAutopilotSessionRequest, _litrpc_RevokeAutopilotSessionResponsePartial>;
  
}

export interface AutopilotDefinition extends grpc.ServiceDefinition {
  AddAutopilotSession: MethodDefinition<_litrpc_AddAutopilotSessionRequestPartial, _litrpc_AddAutopilotSessionResponsePartial, _litrpc_AddAutopilotSessionRequest, _litrpc_AddAutopilotSessionResponse>
  ListAutopilotFeatures: MethodDefinition<_litrpc_ListAutopilotFeaturesRequestPartial, _litrpc_ListAutopilotFeaturesResponsePartial, _litrpc_ListAutopilotFeaturesRequest, _litrpc_ListAutopilotFeaturesResponse>
  ListAutopilotSessions: MethodDefinition<_litrpc_ListAutopilotSessionsRequestPartial, _litrpc_ListAutopilotSessionsResponsePartial, _litrpc_ListAutopilotSessionsRequest, _litrpc_ListAutopilotSessionsResponse>
  RevokeAutopilotSession: MethodDefinition<_litrpc_RevokeAutopilotSessionRequestPartial, _litrpc_RevokeAutopilotSessionResponsePartial, _litrpc_RevokeAutopilotSessionRequest, _litrpc_RevokeAutopilotSessionResponse>
}
