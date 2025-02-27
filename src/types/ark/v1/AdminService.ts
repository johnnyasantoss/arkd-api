// Original file: protos/admin.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { CreateNoteRequestPartial as _ark_v1_CreateNoteRequestPartial, CreateNoteRequest as _ark_v1_CreateNoteRequest } from '../../ark/v1/CreateNoteRequest';
import type { CreateNoteResponsePartial as _ark_v1_CreateNoteResponsePartial, CreateNoteResponse as _ark_v1_CreateNoteResponse } from '../../ark/v1/CreateNoteResponse';
import type { DeleteTxRequestsRequestPartial as _ark_v1_DeleteTxRequestsRequestPartial, DeleteTxRequestsRequest as _ark_v1_DeleteTxRequestsRequest } from '../../ark/v1/DeleteTxRequestsRequest';
import type { DeleteTxRequestsResponsePartial as _ark_v1_DeleteTxRequestsResponsePartial, DeleteTxRequestsResponse as _ark_v1_DeleteTxRequestsResponse } from '../../ark/v1/DeleteTxRequestsResponse';
import type { GetMarketHourConfigRequestPartial as _ark_v1_GetMarketHourConfigRequestPartial, GetMarketHourConfigRequest as _ark_v1_GetMarketHourConfigRequest } from '../../ark/v1/GetMarketHourConfigRequest';
import type { GetMarketHourConfigResponsePartial as _ark_v1_GetMarketHourConfigResponsePartial, GetMarketHourConfigResponse as _ark_v1_GetMarketHourConfigResponse } from '../../ark/v1/GetMarketHourConfigResponse';
import type { GetRoundDetailsRequestPartial as _ark_v1_GetRoundDetailsRequestPartial, GetRoundDetailsRequest as _ark_v1_GetRoundDetailsRequest } from '../../ark/v1/GetRoundDetailsRequest';
import type { GetRoundDetailsResponsePartial as _ark_v1_GetRoundDetailsResponsePartial, GetRoundDetailsResponse as _ark_v1_GetRoundDetailsResponse } from '../../ark/v1/GetRoundDetailsResponse';
import type { GetRoundsRequestPartial as _ark_v1_GetRoundsRequestPartial, GetRoundsRequest as _ark_v1_GetRoundsRequest } from '../../ark/v1/GetRoundsRequest';
import type { GetRoundsResponsePartial as _ark_v1_GetRoundsResponsePartial, GetRoundsResponse as _ark_v1_GetRoundsResponse } from '../../ark/v1/GetRoundsResponse';
import type { GetScheduledSweepRequestPartial as _ark_v1_GetScheduledSweepRequestPartial, GetScheduledSweepRequest as _ark_v1_GetScheduledSweepRequest } from '../../ark/v1/GetScheduledSweepRequest';
import type { GetScheduledSweepResponsePartial as _ark_v1_GetScheduledSweepResponsePartial, GetScheduledSweepResponse as _ark_v1_GetScheduledSweepResponse } from '../../ark/v1/GetScheduledSweepResponse';
import type { GetTxRequestQueueRequestPartial as _ark_v1_GetTxRequestQueueRequestPartial, GetTxRequestQueueRequest as _ark_v1_GetTxRequestQueueRequest } from '../../ark/v1/GetTxRequestQueueRequest';
import type { GetTxRequestQueueResponsePartial as _ark_v1_GetTxRequestQueueResponsePartial, GetTxRequestQueueResponse as _ark_v1_GetTxRequestQueueResponse } from '../../ark/v1/GetTxRequestQueueResponse';
import type { UpdateMarketHourConfigRequestPartial as _ark_v1_UpdateMarketHourConfigRequestPartial, UpdateMarketHourConfigRequest as _ark_v1_UpdateMarketHourConfigRequest } from '../../ark/v1/UpdateMarketHourConfigRequest';
import type { UpdateMarketHourConfigResponsePartial as _ark_v1_UpdateMarketHourConfigResponsePartial, UpdateMarketHourConfigResponse as _ark_v1_UpdateMarketHourConfigResponse } from '../../ark/v1/UpdateMarketHourConfigResponse';
import type { WithdrawRequestPartial as _ark_v1_WithdrawRequestPartial, WithdrawRequest as _ark_v1_WithdrawRequest } from '../../ark/v1/WithdrawRequest';
import type { WithdrawResponsePartial as _ark_v1_WithdrawResponsePartial, WithdrawResponse as _ark_v1_WithdrawResponse } from '../../ark/v1/WithdrawResponse';

export interface AdminServiceClient extends grpc.Client {
  CreateNote(argument: _ark_v1_CreateNoteRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_ark_v1_CreateNoteResponse>): grpc.ClientUnaryCall;
  CreateNote(argument: _ark_v1_CreateNoteRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_ark_v1_CreateNoteResponse>): grpc.ClientUnaryCall;
  CreateNote(argument: _ark_v1_CreateNoteRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_ark_v1_CreateNoteResponse>): grpc.ClientUnaryCall;
  CreateNote(argument: _ark_v1_CreateNoteRequestPartial, callback: grpc.requestCallback<_ark_v1_CreateNoteResponse>): grpc.ClientUnaryCall;
  createNote(argument: _ark_v1_CreateNoteRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_ark_v1_CreateNoteResponse>): grpc.ClientUnaryCall;
  createNote(argument: _ark_v1_CreateNoteRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_ark_v1_CreateNoteResponse>): grpc.ClientUnaryCall;
  createNote(argument: _ark_v1_CreateNoteRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_ark_v1_CreateNoteResponse>): grpc.ClientUnaryCall;
  createNote(argument: _ark_v1_CreateNoteRequestPartial, callback: grpc.requestCallback<_ark_v1_CreateNoteResponse>): grpc.ClientUnaryCall;
  
  DeleteTxRequests(argument: _ark_v1_DeleteTxRequestsRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_ark_v1_DeleteTxRequestsResponse>): grpc.ClientUnaryCall;
  DeleteTxRequests(argument: _ark_v1_DeleteTxRequestsRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_ark_v1_DeleteTxRequestsResponse>): grpc.ClientUnaryCall;
  DeleteTxRequests(argument: _ark_v1_DeleteTxRequestsRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_ark_v1_DeleteTxRequestsResponse>): grpc.ClientUnaryCall;
  DeleteTxRequests(argument: _ark_v1_DeleteTxRequestsRequestPartial, callback: grpc.requestCallback<_ark_v1_DeleteTxRequestsResponse>): grpc.ClientUnaryCall;
  deleteTxRequests(argument: _ark_v1_DeleteTxRequestsRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_ark_v1_DeleteTxRequestsResponse>): grpc.ClientUnaryCall;
  deleteTxRequests(argument: _ark_v1_DeleteTxRequestsRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_ark_v1_DeleteTxRequestsResponse>): grpc.ClientUnaryCall;
  deleteTxRequests(argument: _ark_v1_DeleteTxRequestsRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_ark_v1_DeleteTxRequestsResponse>): grpc.ClientUnaryCall;
  deleteTxRequests(argument: _ark_v1_DeleteTxRequestsRequestPartial, callback: grpc.requestCallback<_ark_v1_DeleteTxRequestsResponse>): grpc.ClientUnaryCall;
  
  GetMarketHourConfig(argument: _ark_v1_GetMarketHourConfigRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_ark_v1_GetMarketHourConfigResponse>): grpc.ClientUnaryCall;
  GetMarketHourConfig(argument: _ark_v1_GetMarketHourConfigRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_ark_v1_GetMarketHourConfigResponse>): grpc.ClientUnaryCall;
  GetMarketHourConfig(argument: _ark_v1_GetMarketHourConfigRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_ark_v1_GetMarketHourConfigResponse>): grpc.ClientUnaryCall;
  GetMarketHourConfig(argument: _ark_v1_GetMarketHourConfigRequestPartial, callback: grpc.requestCallback<_ark_v1_GetMarketHourConfigResponse>): grpc.ClientUnaryCall;
  getMarketHourConfig(argument: _ark_v1_GetMarketHourConfigRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_ark_v1_GetMarketHourConfigResponse>): grpc.ClientUnaryCall;
  getMarketHourConfig(argument: _ark_v1_GetMarketHourConfigRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_ark_v1_GetMarketHourConfigResponse>): grpc.ClientUnaryCall;
  getMarketHourConfig(argument: _ark_v1_GetMarketHourConfigRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_ark_v1_GetMarketHourConfigResponse>): grpc.ClientUnaryCall;
  getMarketHourConfig(argument: _ark_v1_GetMarketHourConfigRequestPartial, callback: grpc.requestCallback<_ark_v1_GetMarketHourConfigResponse>): grpc.ClientUnaryCall;
  
  GetRoundDetails(argument: _ark_v1_GetRoundDetailsRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_ark_v1_GetRoundDetailsResponse>): grpc.ClientUnaryCall;
  GetRoundDetails(argument: _ark_v1_GetRoundDetailsRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_ark_v1_GetRoundDetailsResponse>): grpc.ClientUnaryCall;
  GetRoundDetails(argument: _ark_v1_GetRoundDetailsRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_ark_v1_GetRoundDetailsResponse>): grpc.ClientUnaryCall;
  GetRoundDetails(argument: _ark_v1_GetRoundDetailsRequestPartial, callback: grpc.requestCallback<_ark_v1_GetRoundDetailsResponse>): grpc.ClientUnaryCall;
  getRoundDetails(argument: _ark_v1_GetRoundDetailsRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_ark_v1_GetRoundDetailsResponse>): grpc.ClientUnaryCall;
  getRoundDetails(argument: _ark_v1_GetRoundDetailsRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_ark_v1_GetRoundDetailsResponse>): grpc.ClientUnaryCall;
  getRoundDetails(argument: _ark_v1_GetRoundDetailsRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_ark_v1_GetRoundDetailsResponse>): grpc.ClientUnaryCall;
  getRoundDetails(argument: _ark_v1_GetRoundDetailsRequestPartial, callback: grpc.requestCallback<_ark_v1_GetRoundDetailsResponse>): grpc.ClientUnaryCall;
  
  GetRounds(argument: _ark_v1_GetRoundsRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_ark_v1_GetRoundsResponse>): grpc.ClientUnaryCall;
  GetRounds(argument: _ark_v1_GetRoundsRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_ark_v1_GetRoundsResponse>): grpc.ClientUnaryCall;
  GetRounds(argument: _ark_v1_GetRoundsRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_ark_v1_GetRoundsResponse>): grpc.ClientUnaryCall;
  GetRounds(argument: _ark_v1_GetRoundsRequestPartial, callback: grpc.requestCallback<_ark_v1_GetRoundsResponse>): grpc.ClientUnaryCall;
  getRounds(argument: _ark_v1_GetRoundsRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_ark_v1_GetRoundsResponse>): grpc.ClientUnaryCall;
  getRounds(argument: _ark_v1_GetRoundsRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_ark_v1_GetRoundsResponse>): grpc.ClientUnaryCall;
  getRounds(argument: _ark_v1_GetRoundsRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_ark_v1_GetRoundsResponse>): grpc.ClientUnaryCall;
  getRounds(argument: _ark_v1_GetRoundsRequestPartial, callback: grpc.requestCallback<_ark_v1_GetRoundsResponse>): grpc.ClientUnaryCall;
  
  GetScheduledSweep(argument: _ark_v1_GetScheduledSweepRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_ark_v1_GetScheduledSweepResponse>): grpc.ClientUnaryCall;
  GetScheduledSweep(argument: _ark_v1_GetScheduledSweepRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_ark_v1_GetScheduledSweepResponse>): grpc.ClientUnaryCall;
  GetScheduledSweep(argument: _ark_v1_GetScheduledSweepRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_ark_v1_GetScheduledSweepResponse>): grpc.ClientUnaryCall;
  GetScheduledSweep(argument: _ark_v1_GetScheduledSweepRequestPartial, callback: grpc.requestCallback<_ark_v1_GetScheduledSweepResponse>): grpc.ClientUnaryCall;
  getScheduledSweep(argument: _ark_v1_GetScheduledSweepRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_ark_v1_GetScheduledSweepResponse>): grpc.ClientUnaryCall;
  getScheduledSweep(argument: _ark_v1_GetScheduledSweepRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_ark_v1_GetScheduledSweepResponse>): grpc.ClientUnaryCall;
  getScheduledSweep(argument: _ark_v1_GetScheduledSweepRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_ark_v1_GetScheduledSweepResponse>): grpc.ClientUnaryCall;
  getScheduledSweep(argument: _ark_v1_GetScheduledSweepRequestPartial, callback: grpc.requestCallback<_ark_v1_GetScheduledSweepResponse>): grpc.ClientUnaryCall;
  
  GetTxRequestQueue(argument: _ark_v1_GetTxRequestQueueRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_ark_v1_GetTxRequestQueueResponse>): grpc.ClientUnaryCall;
  GetTxRequestQueue(argument: _ark_v1_GetTxRequestQueueRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_ark_v1_GetTxRequestQueueResponse>): grpc.ClientUnaryCall;
  GetTxRequestQueue(argument: _ark_v1_GetTxRequestQueueRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_ark_v1_GetTxRequestQueueResponse>): grpc.ClientUnaryCall;
  GetTxRequestQueue(argument: _ark_v1_GetTxRequestQueueRequestPartial, callback: grpc.requestCallback<_ark_v1_GetTxRequestQueueResponse>): grpc.ClientUnaryCall;
  getTxRequestQueue(argument: _ark_v1_GetTxRequestQueueRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_ark_v1_GetTxRequestQueueResponse>): grpc.ClientUnaryCall;
  getTxRequestQueue(argument: _ark_v1_GetTxRequestQueueRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_ark_v1_GetTxRequestQueueResponse>): grpc.ClientUnaryCall;
  getTxRequestQueue(argument: _ark_v1_GetTxRequestQueueRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_ark_v1_GetTxRequestQueueResponse>): grpc.ClientUnaryCall;
  getTxRequestQueue(argument: _ark_v1_GetTxRequestQueueRequestPartial, callback: grpc.requestCallback<_ark_v1_GetTxRequestQueueResponse>): grpc.ClientUnaryCall;
  
  UpdateMarketHourConfig(argument: _ark_v1_UpdateMarketHourConfigRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_ark_v1_UpdateMarketHourConfigResponse>): grpc.ClientUnaryCall;
  UpdateMarketHourConfig(argument: _ark_v1_UpdateMarketHourConfigRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_ark_v1_UpdateMarketHourConfigResponse>): grpc.ClientUnaryCall;
  UpdateMarketHourConfig(argument: _ark_v1_UpdateMarketHourConfigRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_ark_v1_UpdateMarketHourConfigResponse>): grpc.ClientUnaryCall;
  UpdateMarketHourConfig(argument: _ark_v1_UpdateMarketHourConfigRequestPartial, callback: grpc.requestCallback<_ark_v1_UpdateMarketHourConfigResponse>): grpc.ClientUnaryCall;
  updateMarketHourConfig(argument: _ark_v1_UpdateMarketHourConfigRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_ark_v1_UpdateMarketHourConfigResponse>): grpc.ClientUnaryCall;
  updateMarketHourConfig(argument: _ark_v1_UpdateMarketHourConfigRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_ark_v1_UpdateMarketHourConfigResponse>): grpc.ClientUnaryCall;
  updateMarketHourConfig(argument: _ark_v1_UpdateMarketHourConfigRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_ark_v1_UpdateMarketHourConfigResponse>): grpc.ClientUnaryCall;
  updateMarketHourConfig(argument: _ark_v1_UpdateMarketHourConfigRequestPartial, callback: grpc.requestCallback<_ark_v1_UpdateMarketHourConfigResponse>): grpc.ClientUnaryCall;
  
  Withdraw(argument: _ark_v1_WithdrawRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_ark_v1_WithdrawResponse>): grpc.ClientUnaryCall;
  Withdraw(argument: _ark_v1_WithdrawRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_ark_v1_WithdrawResponse>): grpc.ClientUnaryCall;
  Withdraw(argument: _ark_v1_WithdrawRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_ark_v1_WithdrawResponse>): grpc.ClientUnaryCall;
  Withdraw(argument: _ark_v1_WithdrawRequestPartial, callback: grpc.requestCallback<_ark_v1_WithdrawResponse>): grpc.ClientUnaryCall;
  withdraw(argument: _ark_v1_WithdrawRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_ark_v1_WithdrawResponse>): grpc.ClientUnaryCall;
  withdraw(argument: _ark_v1_WithdrawRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_ark_v1_WithdrawResponse>): grpc.ClientUnaryCall;
  withdraw(argument: _ark_v1_WithdrawRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_ark_v1_WithdrawResponse>): grpc.ClientUnaryCall;
  withdraw(argument: _ark_v1_WithdrawRequestPartial, callback: grpc.requestCallback<_ark_v1_WithdrawResponse>): grpc.ClientUnaryCall;
  
}

export interface AdminServiceHandlers extends grpc.UntypedServiceImplementation {
  CreateNote: grpc.handleUnaryCall<_ark_v1_CreateNoteRequest, _ark_v1_CreateNoteResponsePartial>;
  
  DeleteTxRequests: grpc.handleUnaryCall<_ark_v1_DeleteTxRequestsRequest, _ark_v1_DeleteTxRequestsResponsePartial>;
  
  GetMarketHourConfig: grpc.handleUnaryCall<_ark_v1_GetMarketHourConfigRequest, _ark_v1_GetMarketHourConfigResponsePartial>;
  
  GetRoundDetails: grpc.handleUnaryCall<_ark_v1_GetRoundDetailsRequest, _ark_v1_GetRoundDetailsResponsePartial>;
  
  GetRounds: grpc.handleUnaryCall<_ark_v1_GetRoundsRequest, _ark_v1_GetRoundsResponsePartial>;
  
  GetScheduledSweep: grpc.handleUnaryCall<_ark_v1_GetScheduledSweepRequest, _ark_v1_GetScheduledSweepResponsePartial>;
  
  GetTxRequestQueue: grpc.handleUnaryCall<_ark_v1_GetTxRequestQueueRequest, _ark_v1_GetTxRequestQueueResponsePartial>;
  
  UpdateMarketHourConfig: grpc.handleUnaryCall<_ark_v1_UpdateMarketHourConfigRequest, _ark_v1_UpdateMarketHourConfigResponsePartial>;
  
  Withdraw: grpc.handleUnaryCall<_ark_v1_WithdrawRequest, _ark_v1_WithdrawResponsePartial>;
  
}

export interface AdminServiceDefinition extends grpc.ServiceDefinition {
  CreateNote: MethodDefinition<_ark_v1_CreateNoteRequestPartial, _ark_v1_CreateNoteResponsePartial, _ark_v1_CreateNoteRequest, _ark_v1_CreateNoteResponse>
  DeleteTxRequests: MethodDefinition<_ark_v1_DeleteTxRequestsRequestPartial, _ark_v1_DeleteTxRequestsResponsePartial, _ark_v1_DeleteTxRequestsRequest, _ark_v1_DeleteTxRequestsResponse>
  GetMarketHourConfig: MethodDefinition<_ark_v1_GetMarketHourConfigRequestPartial, _ark_v1_GetMarketHourConfigResponsePartial, _ark_v1_GetMarketHourConfigRequest, _ark_v1_GetMarketHourConfigResponse>
  GetRoundDetails: MethodDefinition<_ark_v1_GetRoundDetailsRequestPartial, _ark_v1_GetRoundDetailsResponsePartial, _ark_v1_GetRoundDetailsRequest, _ark_v1_GetRoundDetailsResponse>
  GetRounds: MethodDefinition<_ark_v1_GetRoundsRequestPartial, _ark_v1_GetRoundsResponsePartial, _ark_v1_GetRoundsRequest, _ark_v1_GetRoundsResponse>
  GetScheduledSweep: MethodDefinition<_ark_v1_GetScheduledSweepRequestPartial, _ark_v1_GetScheduledSweepResponsePartial, _ark_v1_GetScheduledSweepRequest, _ark_v1_GetScheduledSweepResponse>
  GetTxRequestQueue: MethodDefinition<_ark_v1_GetTxRequestQueueRequestPartial, _ark_v1_GetTxRequestQueueResponsePartial, _ark_v1_GetTxRequestQueueRequest, _ark_v1_GetTxRequestQueueResponse>
  UpdateMarketHourConfig: MethodDefinition<_ark_v1_UpdateMarketHourConfigRequestPartial, _ark_v1_UpdateMarketHourConfigResponsePartial, _ark_v1_UpdateMarketHourConfigRequest, _ark_v1_UpdateMarketHourConfigResponse>
  Withdraw: MethodDefinition<_ark_v1_WithdrawRequestPartial, _ark_v1_WithdrawResponsePartial, _ark_v1_WithdrawRequest, _ark_v1_WithdrawResponse>
}
