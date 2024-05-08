import type * as grpc from '@grpc/grpc-js';
import type { EnumTypeDefinition, MessageTypeDefinition } from '@grpc/proto-loader';

import type { SessionsClient as _litrpc_SessionsClient, SessionsDefinition as _litrpc_SessionsDefinition } from './litrpc/Sessions';

type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
  new(...args: ConstructorParameters<Constructor>): Subtype;
};

export interface ProtoGrpcType {
  litrpc: {
    AddSessionRequest: MessageTypeDefinition
    AddSessionResponse: MessageTypeDefinition
    ChannelPolicyBounds: MessageTypeDefinition
    ChannelRestrict: MessageTypeDefinition
    HistoryLimit: MessageTypeDefinition
    ListSessionsRequest: MessageTypeDefinition
    ListSessionsResponse: MessageTypeDefinition
    MacaroonPermission: MessageTypeDefinition
    MacaroonRecipe: MessageTypeDefinition
    OffChainBudget: MessageTypeDefinition
    OnChainBudget: MessageTypeDefinition
    PeerRestrict: MessageTypeDefinition
    Rate: MessageTypeDefinition
    RateLimit: MessageTypeDefinition
    RevokeSessionRequest: MessageTypeDefinition
    RevokeSessionResponse: MessageTypeDefinition
    RuleValue: MessageTypeDefinition
    RulesMap: MessageTypeDefinition
    SendToSelf: MessageTypeDefinition
    Session: MessageTypeDefinition
    SessionState: EnumTypeDefinition
    SessionType: EnumTypeDefinition
    Sessions: SubtypeConstructor<typeof grpc.Client, _litrpc_SessionsClient> & { service: _litrpc_SessionsDefinition }
  }
}

