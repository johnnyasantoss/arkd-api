import type * as grpc from '@grpc/grpc-js';
import type { EnumTypeDefinition, MessageTypeDefinition } from '@grpc/proto-loader';

import type { ArkServiceClient as _ark_v1_ArkServiceClient, ArkServiceDefinition as _ark_v1_ArkServiceDefinition } from './ark/v1/ArkService';

type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
  new(...args: ConstructorParameters<Constructor>): Subtype;
};

export interface ProtoGrpcType {
  ark: {
    v1: {
      ArkService: SubtypeConstructor<typeof grpc.Client, _ark_v1_ArkServiceClient> & { service: _ark_v1_ArkServiceDefinition }
      DeleteNostrRecipientRequest: MessageTypeDefinition
      DeleteNostrRecipientResponse: MessageTypeDefinition
      GetBoardingAddressRequest: MessageTypeDefinition
      GetBoardingAddressResponse: MessageTypeDefinition
      GetEventStreamRequest: MessageTypeDefinition
      GetEventStreamResponse: MessageTypeDefinition
      GetInfoRequest: MessageTypeDefinition
      GetInfoResponse: MessageTypeDefinition
      GetTransactionsStreamRequest: MessageTypeDefinition
      GetTransactionsStreamResponse: MessageTypeDefinition
      Input: MessageTypeDefinition
      MarketHour: MessageTypeDefinition
      Musig2: MessageTypeDefinition
      Node: MessageTypeDefinition
      Outpoint: MessageTypeDefinition
      Output: MessageTypeDefinition
      OwnershipProof: MessageTypeDefinition
      PingRequest: MessageTypeDefinition
      PingResponse: MessageTypeDefinition
      RedeemTransaction: MessageTypeDefinition
      RegisterInputsForNextRoundRequest: MessageTypeDefinition
      RegisterInputsForNextRoundResponse: MessageTypeDefinition
      RegisterOutputsForNextRoundRequest: MessageTypeDefinition
      RegisterOutputsForNextRoundResponse: MessageTypeDefinition
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
      SetNostrRecipientRequest: MessageTypeDefinition
      SetNostrRecipientResponse: MessageTypeDefinition
      SignedVtxoOutpoint: MessageTypeDefinition
      SubmitRedeemTxRequest: MessageTypeDefinition
      SubmitRedeemTxResponse: MessageTypeDefinition
      SubmitSignedForfeitTxsRequest: MessageTypeDefinition
      SubmitSignedForfeitTxsResponse: MessageTypeDefinition
      SubmitTreeNoncesRequest: MessageTypeDefinition
      SubmitTreeNoncesResponse: MessageTypeDefinition
      SubmitTreeSignaturesRequest: MessageTypeDefinition
      SubmitTreeSignaturesResponse: MessageTypeDefinition
      SweepableOutput: MessageTypeDefinition
      Tapscripts: MessageTypeDefinition
      Tree: MessageTypeDefinition
      TreeLevel: MessageTypeDefinition
      TxRequestInfo: MessageTypeDefinition
      Vtxo: MessageTypeDefinition
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
      UninterpretedOption: MessageTypeDefinition
    }
  }
}

