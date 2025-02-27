import type * as grpc from '@grpc/grpc-js';
import type { EnumTypeDefinition, MessageTypeDefinition } from '@grpc/proto-loader';


type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
  new(...args: ConstructorParameters<Constructor>): Subtype;
};

export interface ProtoGrpcType {
  ark: {
    v1: {
      Input: MessageTypeDefinition
      MarketHour: MessageTypeDefinition
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
      Vtxo: MessageTypeDefinition
    }
  }
}

