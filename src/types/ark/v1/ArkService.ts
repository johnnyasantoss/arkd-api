// Original file: protos/service.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { DeleteNostrRecipientRequestPartial as _ark_v1_DeleteNostrRecipientRequestPartial, DeleteNostrRecipientRequest as _ark_v1_DeleteNostrRecipientRequest } from '../../ark/v1/DeleteNostrRecipientRequest';
import type { DeleteNostrRecipientResponsePartial as _ark_v1_DeleteNostrRecipientResponsePartial, DeleteNostrRecipientResponse as _ark_v1_DeleteNostrRecipientResponse } from '../../ark/v1/DeleteNostrRecipientResponse';
import type { GetBoardingAddressRequestPartial as _ark_v1_GetBoardingAddressRequestPartial, GetBoardingAddressRequest as _ark_v1_GetBoardingAddressRequest } from '../../ark/v1/GetBoardingAddressRequest';
import type { GetBoardingAddressResponsePartial as _ark_v1_GetBoardingAddressResponsePartial, GetBoardingAddressResponse as _ark_v1_GetBoardingAddressResponse } from '../../ark/v1/GetBoardingAddressResponse';
import type { GetEventStreamRequestPartial as _ark_v1_GetEventStreamRequestPartial, GetEventStreamRequest as _ark_v1_GetEventStreamRequest } from '../../ark/v1/GetEventStreamRequest';
import type { GetEventStreamResponsePartial as _ark_v1_GetEventStreamResponsePartial, GetEventStreamResponse as _ark_v1_GetEventStreamResponse } from '../../ark/v1/GetEventStreamResponse';
import type { GetInfoRequestPartial as _ark_v1_GetInfoRequestPartial, GetInfoRequest as _ark_v1_GetInfoRequest } from '../../ark/v1/GetInfoRequest';
import type { GetInfoResponsePartial as _ark_v1_GetInfoResponsePartial, GetInfoResponse as _ark_v1_GetInfoResponse } from '../../ark/v1/GetInfoResponse';
import type { GetRoundByIdRequestPartial as _ark_v1_GetRoundByIdRequestPartial, GetRoundByIdRequest as _ark_v1_GetRoundByIdRequest } from '../../ark/v1/GetRoundByIdRequest';
import type { GetRoundByIdResponsePartial as _ark_v1_GetRoundByIdResponsePartial, GetRoundByIdResponse as _ark_v1_GetRoundByIdResponse } from '../../ark/v1/GetRoundByIdResponse';
import type { GetRoundRequestPartial as _ark_v1_GetRoundRequestPartial, GetRoundRequest as _ark_v1_GetRoundRequest } from '../../ark/v1/GetRoundRequest';
import type { GetRoundResponsePartial as _ark_v1_GetRoundResponsePartial, GetRoundResponse as _ark_v1_GetRoundResponse } from '../../ark/v1/GetRoundResponse';
import type { GetTransactionsStreamRequestPartial as _ark_v1_GetTransactionsStreamRequestPartial, GetTransactionsStreamRequest as _ark_v1_GetTransactionsStreamRequest } from '../../ark/v1/GetTransactionsStreamRequest';
import type { GetTransactionsStreamResponsePartial as _ark_v1_GetTransactionsStreamResponsePartial, GetTransactionsStreamResponse as _ark_v1_GetTransactionsStreamResponse } from '../../ark/v1/GetTransactionsStreamResponse';
import type { ListVtxosRequestPartial as _ark_v1_ListVtxosRequestPartial, ListVtxosRequest as _ark_v1_ListVtxosRequest } from '../../ark/v1/ListVtxosRequest';
import type { ListVtxosResponsePartial as _ark_v1_ListVtxosResponsePartial, ListVtxosResponse as _ark_v1_ListVtxosResponse } from '../../ark/v1/ListVtxosResponse';
import type { PingRequestPartial as _ark_v1_PingRequestPartial, PingRequest as _ark_v1_PingRequest } from '../../ark/v1/PingRequest';
import type { PingResponsePartial as _ark_v1_PingResponsePartial, PingResponse as _ark_v1_PingResponse } from '../../ark/v1/PingResponse';
import type { RegisterInputsForNextRoundRequestPartial as _ark_v1_RegisterInputsForNextRoundRequestPartial, RegisterInputsForNextRoundRequest as _ark_v1_RegisterInputsForNextRoundRequest } from '../../ark/v1/RegisterInputsForNextRoundRequest';
import type { RegisterInputsForNextRoundResponsePartial as _ark_v1_RegisterInputsForNextRoundResponsePartial, RegisterInputsForNextRoundResponse as _ark_v1_RegisterInputsForNextRoundResponse } from '../../ark/v1/RegisterInputsForNextRoundResponse';
import type { RegisterOutputsForNextRoundRequestPartial as _ark_v1_RegisterOutputsForNextRoundRequestPartial, RegisterOutputsForNextRoundRequest as _ark_v1_RegisterOutputsForNextRoundRequest } from '../../ark/v1/RegisterOutputsForNextRoundRequest';
import type { RegisterOutputsForNextRoundResponsePartial as _ark_v1_RegisterOutputsForNextRoundResponsePartial, RegisterOutputsForNextRoundResponse as _ark_v1_RegisterOutputsForNextRoundResponse } from '../../ark/v1/RegisterOutputsForNextRoundResponse';
import type { SetNostrRecipientRequestPartial as _ark_v1_SetNostrRecipientRequestPartial, SetNostrRecipientRequest as _ark_v1_SetNostrRecipientRequest } from '../../ark/v1/SetNostrRecipientRequest';
import type { SetNostrRecipientResponsePartial as _ark_v1_SetNostrRecipientResponsePartial, SetNostrRecipientResponse as _ark_v1_SetNostrRecipientResponse } from '../../ark/v1/SetNostrRecipientResponse';
import type { SubmitRedeemTxRequestPartial as _ark_v1_SubmitRedeemTxRequestPartial, SubmitRedeemTxRequest as _ark_v1_SubmitRedeemTxRequest } from '../../ark/v1/SubmitRedeemTxRequest';
import type { SubmitRedeemTxResponsePartial as _ark_v1_SubmitRedeemTxResponsePartial, SubmitRedeemTxResponse as _ark_v1_SubmitRedeemTxResponse } from '../../ark/v1/SubmitRedeemTxResponse';
import type { SubmitSignedForfeitTxsRequestPartial as _ark_v1_SubmitSignedForfeitTxsRequestPartial, SubmitSignedForfeitTxsRequest as _ark_v1_SubmitSignedForfeitTxsRequest } from '../../ark/v1/SubmitSignedForfeitTxsRequest';
import type { SubmitSignedForfeitTxsResponsePartial as _ark_v1_SubmitSignedForfeitTxsResponsePartial, SubmitSignedForfeitTxsResponse as _ark_v1_SubmitSignedForfeitTxsResponse } from '../../ark/v1/SubmitSignedForfeitTxsResponse';
import type { SubmitTreeNoncesRequestPartial as _ark_v1_SubmitTreeNoncesRequestPartial, SubmitTreeNoncesRequest as _ark_v1_SubmitTreeNoncesRequest } from '../../ark/v1/SubmitTreeNoncesRequest';
import type { SubmitTreeNoncesResponsePartial as _ark_v1_SubmitTreeNoncesResponsePartial, SubmitTreeNoncesResponse as _ark_v1_SubmitTreeNoncesResponse } from '../../ark/v1/SubmitTreeNoncesResponse';
import type { SubmitTreeSignaturesRequestPartial as _ark_v1_SubmitTreeSignaturesRequestPartial, SubmitTreeSignaturesRequest as _ark_v1_SubmitTreeSignaturesRequest } from '../../ark/v1/SubmitTreeSignaturesRequest';
import type { SubmitTreeSignaturesResponsePartial as _ark_v1_SubmitTreeSignaturesResponsePartial, SubmitTreeSignaturesResponse as _ark_v1_SubmitTreeSignaturesResponse } from '../../ark/v1/SubmitTreeSignaturesResponse';

export interface ArkServiceClient extends grpc.Client {
  DeleteNostrRecipient(argument: _ark_v1_DeleteNostrRecipientRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_ark_v1_DeleteNostrRecipientResponse>): grpc.ClientUnaryCall;
  DeleteNostrRecipient(argument: _ark_v1_DeleteNostrRecipientRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_ark_v1_DeleteNostrRecipientResponse>): grpc.ClientUnaryCall;
  DeleteNostrRecipient(argument: _ark_v1_DeleteNostrRecipientRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_ark_v1_DeleteNostrRecipientResponse>): grpc.ClientUnaryCall;
  DeleteNostrRecipient(argument: _ark_v1_DeleteNostrRecipientRequestPartial, callback: grpc.requestCallback<_ark_v1_DeleteNostrRecipientResponse>): grpc.ClientUnaryCall;
  deleteNostrRecipient(argument: _ark_v1_DeleteNostrRecipientRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_ark_v1_DeleteNostrRecipientResponse>): grpc.ClientUnaryCall;
  deleteNostrRecipient(argument: _ark_v1_DeleteNostrRecipientRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_ark_v1_DeleteNostrRecipientResponse>): grpc.ClientUnaryCall;
  deleteNostrRecipient(argument: _ark_v1_DeleteNostrRecipientRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_ark_v1_DeleteNostrRecipientResponse>): grpc.ClientUnaryCall;
  deleteNostrRecipient(argument: _ark_v1_DeleteNostrRecipientRequestPartial, callback: grpc.requestCallback<_ark_v1_DeleteNostrRecipientResponse>): grpc.ClientUnaryCall;
  
  GetBoardingAddress(argument: _ark_v1_GetBoardingAddressRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_ark_v1_GetBoardingAddressResponse>): grpc.ClientUnaryCall;
  GetBoardingAddress(argument: _ark_v1_GetBoardingAddressRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_ark_v1_GetBoardingAddressResponse>): grpc.ClientUnaryCall;
  GetBoardingAddress(argument: _ark_v1_GetBoardingAddressRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_ark_v1_GetBoardingAddressResponse>): grpc.ClientUnaryCall;
  GetBoardingAddress(argument: _ark_v1_GetBoardingAddressRequestPartial, callback: grpc.requestCallback<_ark_v1_GetBoardingAddressResponse>): grpc.ClientUnaryCall;
  getBoardingAddress(argument: _ark_v1_GetBoardingAddressRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_ark_v1_GetBoardingAddressResponse>): grpc.ClientUnaryCall;
  getBoardingAddress(argument: _ark_v1_GetBoardingAddressRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_ark_v1_GetBoardingAddressResponse>): grpc.ClientUnaryCall;
  getBoardingAddress(argument: _ark_v1_GetBoardingAddressRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_ark_v1_GetBoardingAddressResponse>): grpc.ClientUnaryCall;
  getBoardingAddress(argument: _ark_v1_GetBoardingAddressRequestPartial, callback: grpc.requestCallback<_ark_v1_GetBoardingAddressResponse>): grpc.ClientUnaryCall;
  
  GetEventStream(argument: _ark_v1_GetEventStreamRequestPartial, metadata: grpc.Metadata, options?: grpc.CallOptions): grpc.ClientReadableStream<_ark_v1_GetEventStreamResponse>;
  GetEventStream(argument: _ark_v1_GetEventStreamRequestPartial, options?: grpc.CallOptions): grpc.ClientReadableStream<_ark_v1_GetEventStreamResponse>;
  getEventStream(argument: _ark_v1_GetEventStreamRequestPartial, metadata: grpc.Metadata, options?: grpc.CallOptions): grpc.ClientReadableStream<_ark_v1_GetEventStreamResponse>;
  getEventStream(argument: _ark_v1_GetEventStreamRequestPartial, options?: grpc.CallOptions): grpc.ClientReadableStream<_ark_v1_GetEventStreamResponse>;
  
  GetInfo(argument: _ark_v1_GetInfoRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_ark_v1_GetInfoResponse>): grpc.ClientUnaryCall;
  GetInfo(argument: _ark_v1_GetInfoRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_ark_v1_GetInfoResponse>): grpc.ClientUnaryCall;
  GetInfo(argument: _ark_v1_GetInfoRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_ark_v1_GetInfoResponse>): grpc.ClientUnaryCall;
  GetInfo(argument: _ark_v1_GetInfoRequestPartial, callback: grpc.requestCallback<_ark_v1_GetInfoResponse>): grpc.ClientUnaryCall;
  getInfo(argument: _ark_v1_GetInfoRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_ark_v1_GetInfoResponse>): grpc.ClientUnaryCall;
  getInfo(argument: _ark_v1_GetInfoRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_ark_v1_GetInfoResponse>): grpc.ClientUnaryCall;
  getInfo(argument: _ark_v1_GetInfoRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_ark_v1_GetInfoResponse>): grpc.ClientUnaryCall;
  getInfo(argument: _ark_v1_GetInfoRequestPartial, callback: grpc.requestCallback<_ark_v1_GetInfoResponse>): grpc.ClientUnaryCall;
  
  GetRound(argument: _ark_v1_GetRoundRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_ark_v1_GetRoundResponse>): grpc.ClientUnaryCall;
  GetRound(argument: _ark_v1_GetRoundRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_ark_v1_GetRoundResponse>): grpc.ClientUnaryCall;
  GetRound(argument: _ark_v1_GetRoundRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_ark_v1_GetRoundResponse>): grpc.ClientUnaryCall;
  GetRound(argument: _ark_v1_GetRoundRequestPartial, callback: grpc.requestCallback<_ark_v1_GetRoundResponse>): grpc.ClientUnaryCall;
  getRound(argument: _ark_v1_GetRoundRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_ark_v1_GetRoundResponse>): grpc.ClientUnaryCall;
  getRound(argument: _ark_v1_GetRoundRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_ark_v1_GetRoundResponse>): grpc.ClientUnaryCall;
  getRound(argument: _ark_v1_GetRoundRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_ark_v1_GetRoundResponse>): grpc.ClientUnaryCall;
  getRound(argument: _ark_v1_GetRoundRequestPartial, callback: grpc.requestCallback<_ark_v1_GetRoundResponse>): grpc.ClientUnaryCall;
  
  GetRoundById(argument: _ark_v1_GetRoundByIdRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_ark_v1_GetRoundByIdResponse>): grpc.ClientUnaryCall;
  GetRoundById(argument: _ark_v1_GetRoundByIdRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_ark_v1_GetRoundByIdResponse>): grpc.ClientUnaryCall;
  GetRoundById(argument: _ark_v1_GetRoundByIdRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_ark_v1_GetRoundByIdResponse>): grpc.ClientUnaryCall;
  GetRoundById(argument: _ark_v1_GetRoundByIdRequestPartial, callback: grpc.requestCallback<_ark_v1_GetRoundByIdResponse>): grpc.ClientUnaryCall;
  getRoundById(argument: _ark_v1_GetRoundByIdRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_ark_v1_GetRoundByIdResponse>): grpc.ClientUnaryCall;
  getRoundById(argument: _ark_v1_GetRoundByIdRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_ark_v1_GetRoundByIdResponse>): grpc.ClientUnaryCall;
  getRoundById(argument: _ark_v1_GetRoundByIdRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_ark_v1_GetRoundByIdResponse>): grpc.ClientUnaryCall;
  getRoundById(argument: _ark_v1_GetRoundByIdRequestPartial, callback: grpc.requestCallback<_ark_v1_GetRoundByIdResponse>): grpc.ClientUnaryCall;
  
  GetTransactionsStream(argument: _ark_v1_GetTransactionsStreamRequestPartial, metadata: grpc.Metadata, options?: grpc.CallOptions): grpc.ClientReadableStream<_ark_v1_GetTransactionsStreamResponse>;
  GetTransactionsStream(argument: _ark_v1_GetTransactionsStreamRequestPartial, options?: grpc.CallOptions): grpc.ClientReadableStream<_ark_v1_GetTransactionsStreamResponse>;
  getTransactionsStream(argument: _ark_v1_GetTransactionsStreamRequestPartial, metadata: grpc.Metadata, options?: grpc.CallOptions): grpc.ClientReadableStream<_ark_v1_GetTransactionsStreamResponse>;
  getTransactionsStream(argument: _ark_v1_GetTransactionsStreamRequestPartial, options?: grpc.CallOptions): grpc.ClientReadableStream<_ark_v1_GetTransactionsStreamResponse>;
  
  ListVtxos(argument: _ark_v1_ListVtxosRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_ark_v1_ListVtxosResponse>): grpc.ClientUnaryCall;
  ListVtxos(argument: _ark_v1_ListVtxosRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_ark_v1_ListVtxosResponse>): grpc.ClientUnaryCall;
  ListVtxos(argument: _ark_v1_ListVtxosRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_ark_v1_ListVtxosResponse>): grpc.ClientUnaryCall;
  ListVtxos(argument: _ark_v1_ListVtxosRequestPartial, callback: grpc.requestCallback<_ark_v1_ListVtxosResponse>): grpc.ClientUnaryCall;
  listVtxos(argument: _ark_v1_ListVtxosRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_ark_v1_ListVtxosResponse>): grpc.ClientUnaryCall;
  listVtxos(argument: _ark_v1_ListVtxosRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_ark_v1_ListVtxosResponse>): grpc.ClientUnaryCall;
  listVtxos(argument: _ark_v1_ListVtxosRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_ark_v1_ListVtxosResponse>): grpc.ClientUnaryCall;
  listVtxos(argument: _ark_v1_ListVtxosRequestPartial, callback: grpc.requestCallback<_ark_v1_ListVtxosResponse>): grpc.ClientUnaryCall;
  
  Ping(argument: _ark_v1_PingRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_ark_v1_PingResponse>): grpc.ClientUnaryCall;
  Ping(argument: _ark_v1_PingRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_ark_v1_PingResponse>): grpc.ClientUnaryCall;
  Ping(argument: _ark_v1_PingRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_ark_v1_PingResponse>): grpc.ClientUnaryCall;
  Ping(argument: _ark_v1_PingRequestPartial, callback: grpc.requestCallback<_ark_v1_PingResponse>): grpc.ClientUnaryCall;
  ping(argument: _ark_v1_PingRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_ark_v1_PingResponse>): grpc.ClientUnaryCall;
  ping(argument: _ark_v1_PingRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_ark_v1_PingResponse>): grpc.ClientUnaryCall;
  ping(argument: _ark_v1_PingRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_ark_v1_PingResponse>): grpc.ClientUnaryCall;
  ping(argument: _ark_v1_PingRequestPartial, callback: grpc.requestCallback<_ark_v1_PingResponse>): grpc.ClientUnaryCall;
  
  RegisterInputsForNextRound(argument: _ark_v1_RegisterInputsForNextRoundRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_ark_v1_RegisterInputsForNextRoundResponse>): grpc.ClientUnaryCall;
  RegisterInputsForNextRound(argument: _ark_v1_RegisterInputsForNextRoundRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_ark_v1_RegisterInputsForNextRoundResponse>): grpc.ClientUnaryCall;
  RegisterInputsForNextRound(argument: _ark_v1_RegisterInputsForNextRoundRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_ark_v1_RegisterInputsForNextRoundResponse>): grpc.ClientUnaryCall;
  RegisterInputsForNextRound(argument: _ark_v1_RegisterInputsForNextRoundRequestPartial, callback: grpc.requestCallback<_ark_v1_RegisterInputsForNextRoundResponse>): grpc.ClientUnaryCall;
  registerInputsForNextRound(argument: _ark_v1_RegisterInputsForNextRoundRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_ark_v1_RegisterInputsForNextRoundResponse>): grpc.ClientUnaryCall;
  registerInputsForNextRound(argument: _ark_v1_RegisterInputsForNextRoundRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_ark_v1_RegisterInputsForNextRoundResponse>): grpc.ClientUnaryCall;
  registerInputsForNextRound(argument: _ark_v1_RegisterInputsForNextRoundRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_ark_v1_RegisterInputsForNextRoundResponse>): grpc.ClientUnaryCall;
  registerInputsForNextRound(argument: _ark_v1_RegisterInputsForNextRoundRequestPartial, callback: grpc.requestCallback<_ark_v1_RegisterInputsForNextRoundResponse>): grpc.ClientUnaryCall;
  
  RegisterOutputsForNextRound(argument: _ark_v1_RegisterOutputsForNextRoundRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_ark_v1_RegisterOutputsForNextRoundResponse>): grpc.ClientUnaryCall;
  RegisterOutputsForNextRound(argument: _ark_v1_RegisterOutputsForNextRoundRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_ark_v1_RegisterOutputsForNextRoundResponse>): grpc.ClientUnaryCall;
  RegisterOutputsForNextRound(argument: _ark_v1_RegisterOutputsForNextRoundRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_ark_v1_RegisterOutputsForNextRoundResponse>): grpc.ClientUnaryCall;
  RegisterOutputsForNextRound(argument: _ark_v1_RegisterOutputsForNextRoundRequestPartial, callback: grpc.requestCallback<_ark_v1_RegisterOutputsForNextRoundResponse>): grpc.ClientUnaryCall;
  registerOutputsForNextRound(argument: _ark_v1_RegisterOutputsForNextRoundRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_ark_v1_RegisterOutputsForNextRoundResponse>): grpc.ClientUnaryCall;
  registerOutputsForNextRound(argument: _ark_v1_RegisterOutputsForNextRoundRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_ark_v1_RegisterOutputsForNextRoundResponse>): grpc.ClientUnaryCall;
  registerOutputsForNextRound(argument: _ark_v1_RegisterOutputsForNextRoundRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_ark_v1_RegisterOutputsForNextRoundResponse>): grpc.ClientUnaryCall;
  registerOutputsForNextRound(argument: _ark_v1_RegisterOutputsForNextRoundRequestPartial, callback: grpc.requestCallback<_ark_v1_RegisterOutputsForNextRoundResponse>): grpc.ClientUnaryCall;
  
  SetNostrRecipient(argument: _ark_v1_SetNostrRecipientRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_ark_v1_SetNostrRecipientResponse>): grpc.ClientUnaryCall;
  SetNostrRecipient(argument: _ark_v1_SetNostrRecipientRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_ark_v1_SetNostrRecipientResponse>): grpc.ClientUnaryCall;
  SetNostrRecipient(argument: _ark_v1_SetNostrRecipientRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_ark_v1_SetNostrRecipientResponse>): grpc.ClientUnaryCall;
  SetNostrRecipient(argument: _ark_v1_SetNostrRecipientRequestPartial, callback: grpc.requestCallback<_ark_v1_SetNostrRecipientResponse>): grpc.ClientUnaryCall;
  setNostrRecipient(argument: _ark_v1_SetNostrRecipientRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_ark_v1_SetNostrRecipientResponse>): grpc.ClientUnaryCall;
  setNostrRecipient(argument: _ark_v1_SetNostrRecipientRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_ark_v1_SetNostrRecipientResponse>): grpc.ClientUnaryCall;
  setNostrRecipient(argument: _ark_v1_SetNostrRecipientRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_ark_v1_SetNostrRecipientResponse>): grpc.ClientUnaryCall;
  setNostrRecipient(argument: _ark_v1_SetNostrRecipientRequestPartial, callback: grpc.requestCallback<_ark_v1_SetNostrRecipientResponse>): grpc.ClientUnaryCall;
  
  SubmitRedeemTx(argument: _ark_v1_SubmitRedeemTxRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_ark_v1_SubmitRedeemTxResponse>): grpc.ClientUnaryCall;
  SubmitRedeemTx(argument: _ark_v1_SubmitRedeemTxRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_ark_v1_SubmitRedeemTxResponse>): grpc.ClientUnaryCall;
  SubmitRedeemTx(argument: _ark_v1_SubmitRedeemTxRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_ark_v1_SubmitRedeemTxResponse>): grpc.ClientUnaryCall;
  SubmitRedeemTx(argument: _ark_v1_SubmitRedeemTxRequestPartial, callback: grpc.requestCallback<_ark_v1_SubmitRedeemTxResponse>): grpc.ClientUnaryCall;
  submitRedeemTx(argument: _ark_v1_SubmitRedeemTxRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_ark_v1_SubmitRedeemTxResponse>): grpc.ClientUnaryCall;
  submitRedeemTx(argument: _ark_v1_SubmitRedeemTxRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_ark_v1_SubmitRedeemTxResponse>): grpc.ClientUnaryCall;
  submitRedeemTx(argument: _ark_v1_SubmitRedeemTxRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_ark_v1_SubmitRedeemTxResponse>): grpc.ClientUnaryCall;
  submitRedeemTx(argument: _ark_v1_SubmitRedeemTxRequestPartial, callback: grpc.requestCallback<_ark_v1_SubmitRedeemTxResponse>): grpc.ClientUnaryCall;
  
  SubmitSignedForfeitTxs(argument: _ark_v1_SubmitSignedForfeitTxsRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_ark_v1_SubmitSignedForfeitTxsResponse>): grpc.ClientUnaryCall;
  SubmitSignedForfeitTxs(argument: _ark_v1_SubmitSignedForfeitTxsRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_ark_v1_SubmitSignedForfeitTxsResponse>): grpc.ClientUnaryCall;
  SubmitSignedForfeitTxs(argument: _ark_v1_SubmitSignedForfeitTxsRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_ark_v1_SubmitSignedForfeitTxsResponse>): grpc.ClientUnaryCall;
  SubmitSignedForfeitTxs(argument: _ark_v1_SubmitSignedForfeitTxsRequestPartial, callback: grpc.requestCallback<_ark_v1_SubmitSignedForfeitTxsResponse>): grpc.ClientUnaryCall;
  submitSignedForfeitTxs(argument: _ark_v1_SubmitSignedForfeitTxsRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_ark_v1_SubmitSignedForfeitTxsResponse>): grpc.ClientUnaryCall;
  submitSignedForfeitTxs(argument: _ark_v1_SubmitSignedForfeitTxsRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_ark_v1_SubmitSignedForfeitTxsResponse>): grpc.ClientUnaryCall;
  submitSignedForfeitTxs(argument: _ark_v1_SubmitSignedForfeitTxsRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_ark_v1_SubmitSignedForfeitTxsResponse>): grpc.ClientUnaryCall;
  submitSignedForfeitTxs(argument: _ark_v1_SubmitSignedForfeitTxsRequestPartial, callback: grpc.requestCallback<_ark_v1_SubmitSignedForfeitTxsResponse>): grpc.ClientUnaryCall;
  
  SubmitTreeNonces(argument: _ark_v1_SubmitTreeNoncesRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_ark_v1_SubmitTreeNoncesResponse>): grpc.ClientUnaryCall;
  SubmitTreeNonces(argument: _ark_v1_SubmitTreeNoncesRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_ark_v1_SubmitTreeNoncesResponse>): grpc.ClientUnaryCall;
  SubmitTreeNonces(argument: _ark_v1_SubmitTreeNoncesRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_ark_v1_SubmitTreeNoncesResponse>): grpc.ClientUnaryCall;
  SubmitTreeNonces(argument: _ark_v1_SubmitTreeNoncesRequestPartial, callback: grpc.requestCallback<_ark_v1_SubmitTreeNoncesResponse>): grpc.ClientUnaryCall;
  submitTreeNonces(argument: _ark_v1_SubmitTreeNoncesRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_ark_v1_SubmitTreeNoncesResponse>): grpc.ClientUnaryCall;
  submitTreeNonces(argument: _ark_v1_SubmitTreeNoncesRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_ark_v1_SubmitTreeNoncesResponse>): grpc.ClientUnaryCall;
  submitTreeNonces(argument: _ark_v1_SubmitTreeNoncesRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_ark_v1_SubmitTreeNoncesResponse>): grpc.ClientUnaryCall;
  submitTreeNonces(argument: _ark_v1_SubmitTreeNoncesRequestPartial, callback: grpc.requestCallback<_ark_v1_SubmitTreeNoncesResponse>): grpc.ClientUnaryCall;
  
  SubmitTreeSignatures(argument: _ark_v1_SubmitTreeSignaturesRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_ark_v1_SubmitTreeSignaturesResponse>): grpc.ClientUnaryCall;
  SubmitTreeSignatures(argument: _ark_v1_SubmitTreeSignaturesRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_ark_v1_SubmitTreeSignaturesResponse>): grpc.ClientUnaryCall;
  SubmitTreeSignatures(argument: _ark_v1_SubmitTreeSignaturesRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_ark_v1_SubmitTreeSignaturesResponse>): grpc.ClientUnaryCall;
  SubmitTreeSignatures(argument: _ark_v1_SubmitTreeSignaturesRequestPartial, callback: grpc.requestCallback<_ark_v1_SubmitTreeSignaturesResponse>): grpc.ClientUnaryCall;
  submitTreeSignatures(argument: _ark_v1_SubmitTreeSignaturesRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_ark_v1_SubmitTreeSignaturesResponse>): grpc.ClientUnaryCall;
  submitTreeSignatures(argument: _ark_v1_SubmitTreeSignaturesRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_ark_v1_SubmitTreeSignaturesResponse>): grpc.ClientUnaryCall;
  submitTreeSignatures(argument: _ark_v1_SubmitTreeSignaturesRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_ark_v1_SubmitTreeSignaturesResponse>): grpc.ClientUnaryCall;
  submitTreeSignatures(argument: _ark_v1_SubmitTreeSignaturesRequestPartial, callback: grpc.requestCallback<_ark_v1_SubmitTreeSignaturesResponse>): grpc.ClientUnaryCall;
  
}

export interface ArkServiceHandlers extends grpc.UntypedServiceImplementation {
  DeleteNostrRecipient: grpc.handleUnaryCall<_ark_v1_DeleteNostrRecipientRequest, _ark_v1_DeleteNostrRecipientResponsePartial>;
  
  GetBoardingAddress: grpc.handleUnaryCall<_ark_v1_GetBoardingAddressRequest, _ark_v1_GetBoardingAddressResponsePartial>;
  
  GetEventStream: grpc.handleServerStreamingCall<_ark_v1_GetEventStreamRequest, _ark_v1_GetEventStreamResponsePartial>;
  
  GetInfo: grpc.handleUnaryCall<_ark_v1_GetInfoRequest, _ark_v1_GetInfoResponsePartial>;
  
  GetRound: grpc.handleUnaryCall<_ark_v1_GetRoundRequest, _ark_v1_GetRoundResponsePartial>;
  
  GetRoundById: grpc.handleUnaryCall<_ark_v1_GetRoundByIdRequest, _ark_v1_GetRoundByIdResponsePartial>;
  
  GetTransactionsStream: grpc.handleServerStreamingCall<_ark_v1_GetTransactionsStreamRequest, _ark_v1_GetTransactionsStreamResponsePartial>;
  
  ListVtxos: grpc.handleUnaryCall<_ark_v1_ListVtxosRequest, _ark_v1_ListVtxosResponsePartial>;
  
  Ping: grpc.handleUnaryCall<_ark_v1_PingRequest, _ark_v1_PingResponsePartial>;
  
  RegisterInputsForNextRound: grpc.handleUnaryCall<_ark_v1_RegisterInputsForNextRoundRequest, _ark_v1_RegisterInputsForNextRoundResponsePartial>;
  
  RegisterOutputsForNextRound: grpc.handleUnaryCall<_ark_v1_RegisterOutputsForNextRoundRequest, _ark_v1_RegisterOutputsForNextRoundResponsePartial>;
  
  SetNostrRecipient: grpc.handleUnaryCall<_ark_v1_SetNostrRecipientRequest, _ark_v1_SetNostrRecipientResponsePartial>;
  
  SubmitRedeemTx: grpc.handleUnaryCall<_ark_v1_SubmitRedeemTxRequest, _ark_v1_SubmitRedeemTxResponsePartial>;
  
  SubmitSignedForfeitTxs: grpc.handleUnaryCall<_ark_v1_SubmitSignedForfeitTxsRequest, _ark_v1_SubmitSignedForfeitTxsResponsePartial>;
  
  SubmitTreeNonces: grpc.handleUnaryCall<_ark_v1_SubmitTreeNoncesRequest, _ark_v1_SubmitTreeNoncesResponsePartial>;
  
  SubmitTreeSignatures: grpc.handleUnaryCall<_ark_v1_SubmitTreeSignaturesRequest, _ark_v1_SubmitTreeSignaturesResponsePartial>;
  
}

export interface ArkServiceDefinition extends grpc.ServiceDefinition {
  DeleteNostrRecipient: MethodDefinition<_ark_v1_DeleteNostrRecipientRequestPartial, _ark_v1_DeleteNostrRecipientResponsePartial, _ark_v1_DeleteNostrRecipientRequest, _ark_v1_DeleteNostrRecipientResponse>
  GetBoardingAddress: MethodDefinition<_ark_v1_GetBoardingAddressRequestPartial, _ark_v1_GetBoardingAddressResponsePartial, _ark_v1_GetBoardingAddressRequest, _ark_v1_GetBoardingAddressResponse>
  GetEventStream: MethodDefinition<_ark_v1_GetEventStreamRequestPartial, _ark_v1_GetEventStreamResponsePartial, _ark_v1_GetEventStreamRequest, _ark_v1_GetEventStreamResponse>
  GetInfo: MethodDefinition<_ark_v1_GetInfoRequestPartial, _ark_v1_GetInfoResponsePartial, _ark_v1_GetInfoRequest, _ark_v1_GetInfoResponse>
  GetRound: MethodDefinition<_ark_v1_GetRoundRequestPartial, _ark_v1_GetRoundResponsePartial, _ark_v1_GetRoundRequest, _ark_v1_GetRoundResponse>
  GetRoundById: MethodDefinition<_ark_v1_GetRoundByIdRequestPartial, _ark_v1_GetRoundByIdResponsePartial, _ark_v1_GetRoundByIdRequest, _ark_v1_GetRoundByIdResponse>
  GetTransactionsStream: MethodDefinition<_ark_v1_GetTransactionsStreamRequestPartial, _ark_v1_GetTransactionsStreamResponsePartial, _ark_v1_GetTransactionsStreamRequest, _ark_v1_GetTransactionsStreamResponse>
  ListVtxos: MethodDefinition<_ark_v1_ListVtxosRequestPartial, _ark_v1_ListVtxosResponsePartial, _ark_v1_ListVtxosRequest, _ark_v1_ListVtxosResponse>
  Ping: MethodDefinition<_ark_v1_PingRequestPartial, _ark_v1_PingResponsePartial, _ark_v1_PingRequest, _ark_v1_PingResponse>
  RegisterInputsForNextRound: MethodDefinition<_ark_v1_RegisterInputsForNextRoundRequestPartial, _ark_v1_RegisterInputsForNextRoundResponsePartial, _ark_v1_RegisterInputsForNextRoundRequest, _ark_v1_RegisterInputsForNextRoundResponse>
  RegisterOutputsForNextRound: MethodDefinition<_ark_v1_RegisterOutputsForNextRoundRequestPartial, _ark_v1_RegisterOutputsForNextRoundResponsePartial, _ark_v1_RegisterOutputsForNextRoundRequest, _ark_v1_RegisterOutputsForNextRoundResponse>
  SetNostrRecipient: MethodDefinition<_ark_v1_SetNostrRecipientRequestPartial, _ark_v1_SetNostrRecipientResponsePartial, _ark_v1_SetNostrRecipientRequest, _ark_v1_SetNostrRecipientResponse>
  SubmitRedeemTx: MethodDefinition<_ark_v1_SubmitRedeemTxRequestPartial, _ark_v1_SubmitRedeemTxResponsePartial, _ark_v1_SubmitRedeemTxRequest, _ark_v1_SubmitRedeemTxResponse>
  SubmitSignedForfeitTxs: MethodDefinition<_ark_v1_SubmitSignedForfeitTxsRequestPartial, _ark_v1_SubmitSignedForfeitTxsResponsePartial, _ark_v1_SubmitSignedForfeitTxsRequest, _ark_v1_SubmitSignedForfeitTxsResponse>
  SubmitTreeNonces: MethodDefinition<_ark_v1_SubmitTreeNoncesRequestPartial, _ark_v1_SubmitTreeNoncesResponsePartial, _ark_v1_SubmitTreeNoncesRequest, _ark_v1_SubmitTreeNoncesResponse>
  SubmitTreeSignatures: MethodDefinition<_ark_v1_SubmitTreeSignaturesRequestPartial, _ark_v1_SubmitTreeSignaturesResponsePartial, _ark_v1_SubmitTreeSignaturesRequest, _ark_v1_SubmitTreeSignaturesResponse>
}
