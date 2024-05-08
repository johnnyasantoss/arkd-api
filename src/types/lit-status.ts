import type * as grpc from '@grpc/grpc-js';
import type { MessageTypeDefinition } from '@grpc/proto-loader';

import type { StatusClient as _litrpc_StatusClient, StatusDefinition as _litrpc_StatusDefinition } from './litrpc/Status';

type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
  new(...args: ConstructorParameters<Constructor>): Subtype;
};

export interface ProtoGrpcType {
  litrpc: {
    Status: SubtypeConstructor<typeof grpc.Client, _litrpc_StatusClient> & { service: _litrpc_StatusDefinition }
    SubServerStatus: MessageTypeDefinition
    SubServerStatusReq: MessageTypeDefinition
    SubServerStatusResp: MessageTypeDefinition
  }
}

