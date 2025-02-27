import type * as grpc from '@grpc/grpc-js';
import type { EnumTypeDefinition, MessageTypeDefinition } from '@grpc/proto-loader';

import type { AdminServiceClient as _ark_v1_AdminServiceClient, AdminServiceDefinition as _ark_v1_AdminServiceDefinition } from './ark/v1/AdminService';

type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
  new(...args: ConstructorParameters<Constructor>): Subtype;
};

export interface ProtoGrpcType {
  ark: {
    v1: {
      AdminService: SubtypeConstructor<typeof grpc.Client, _ark_v1_AdminServiceClient> & { service: _ark_v1_AdminServiceDefinition }
      CreateNoteRequest: MessageTypeDefinition
      CreateNoteResponse: MessageTypeDefinition
      DeleteTxRequestsRequest: MessageTypeDefinition
      DeleteTxRequestsResponse: MessageTypeDefinition
      GetMarketHourConfigRequest: MessageTypeDefinition
      GetMarketHourConfigResponse: MessageTypeDefinition
      GetRoundDetailsRequest: MessageTypeDefinition
      GetRoundDetailsResponse: MessageTypeDefinition
      GetRoundsRequest: MessageTypeDefinition
      GetRoundsResponse: MessageTypeDefinition
      GetScheduledSweepRequest: MessageTypeDefinition
      GetScheduledSweepResponse: MessageTypeDefinition
      GetTxRequestQueueRequest: MessageTypeDefinition
      GetTxRequestQueueResponse: MessageTypeDefinition
      Input: MessageTypeDefinition
      MarketHour: MessageTypeDefinition
      MarketHourConfig: MessageTypeDefinition
      Node: MessageTypeDefinition
      Outpoint: MessageTypeDefinition
      Output: MessageTypeDefinition
      OwnershipProof: MessageTypeDefinition
      RedeemTransaction: MessageTypeDefinition
      RequestInput: MessageTypeDefinition
      Round: MessageTypeDefinition
      RoundFailed: MessageTypeDefinition
      RoundFinalizationEvent: MessageTypeDefinition
      RoundFinalizedEvent: MessageTypeDefinition
      RoundSigningEvent: MessageTypeDefinition
      RoundSigningNoncesGeneratedEvent: MessageTypeDefinition
      RoundStage: EnumTypeDefinition
      RoundTransaction: MessageTypeDefinition
      ScheduledSweep: MessageTypeDefinition
      SignedVtxoOutpoint: MessageTypeDefinition
      SweepableOutput: MessageTypeDefinition
      Tapscripts: MessageTypeDefinition
      Tree: MessageTypeDefinition
      TreeLevel: MessageTypeDefinition
      TxRequestInfo: MessageTypeDefinition
      UpdateMarketHourConfigRequest: MessageTypeDefinition
      UpdateMarketHourConfigResponse: MessageTypeDefinition
      Vtxo: MessageTypeDefinition
      WithdrawRequest: MessageTypeDefinition
      WithdrawResponse: MessageTypeDefinition
    }
  }
  google: {
    api: {
      CustomHttpPattern: MessageTypeDefinition
      Http: MessageTypeDefinition
      HttpRule: MessageTypeDefinition
    }
    protobuf: {
      DescriptorProto: MessageTypeDefinition
      Duration: MessageTypeDefinition
      EnumDescriptorProto: MessageTypeDefinition
      EnumOptions: MessageTypeDefinition
      EnumValueDescriptorProto: MessageTypeDefinition
      EnumValueOptions: MessageTypeDefinition
      FieldDescriptorProto: MessageTypeDefinition
      FieldOptions: MessageTypeDefinition
      FileDescriptorProto: MessageTypeDefinition
      FileDescriptorSet: MessageTypeDefinition
      FileOptions: MessageTypeDefinition
      GeneratedCodeInfo: MessageTypeDefinition
      MessageOptions: MessageTypeDefinition
      MethodDescriptorProto: MessageTypeDefinition
      MethodOptions: MessageTypeDefinition
      OneofDescriptorProto: MessageTypeDefinition
      OneofOptions: MessageTypeDefinition
      ServiceDescriptorProto: MessageTypeDefinition
      ServiceOptions: MessageTypeDefinition
      SourceCodeInfo: MessageTypeDefinition
      Timestamp: MessageTypeDefinition
      UninterpretedOption: MessageTypeDefinition
    }
  }
}

