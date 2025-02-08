import type * as grpc from '@grpc/grpc-js';
import type { MessageTypeDefinition } from '@grpc/proto-loader';

import type { WalletInitializerServiceClient as _ark_v1_WalletInitializerServiceClient, WalletInitializerServiceDefinition as _ark_v1_WalletInitializerServiceDefinition } from './ark/v1/WalletInitializerService';
import type { WalletServiceClient as _ark_v1_WalletServiceClient, WalletServiceDefinition as _ark_v1_WalletServiceDefinition } from './ark/v1/WalletService';

type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
  new(...args: ConstructorParameters<Constructor>): Subtype;
};

export interface ProtoGrpcType {
  ark: {
    v1: {
      Balance: MessageTypeDefinition
      CreateRequest: MessageTypeDefinition
      CreateResponse: MessageTypeDefinition
      DeriveAddressRequest: MessageTypeDefinition
      DeriveAddressResponse: MessageTypeDefinition
      GenSeedRequest: MessageTypeDefinition
      GenSeedResponse: MessageTypeDefinition
      GetBalanceRequest: MessageTypeDefinition
      GetBalanceResponse: MessageTypeDefinition
      GetStatusRequest: MessageTypeDefinition
      GetStatusResponse: MessageTypeDefinition
      LockRequest: MessageTypeDefinition
      LockResponse: MessageTypeDefinition
      RestoreRequest: MessageTypeDefinition
      RestoreResponse: MessageTypeDefinition
      UnlockRequest: MessageTypeDefinition
      UnlockResponse: MessageTypeDefinition
      WalletInitializerService: SubtypeConstructor<typeof grpc.Client, _ark_v1_WalletInitializerServiceClient> & { service: _ark_v1_WalletInitializerServiceDefinition }
      WalletService: SubtypeConstructor<typeof grpc.Client, _ark_v1_WalletServiceClient> & { service: _ark_v1_WalletServiceDefinition }
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

