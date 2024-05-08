import type * as grpc from '@grpc/grpc-js';
import type { EnumTypeDefinition, MessageTypeDefinition } from '@grpc/proto-loader';

import type { AutopilotClient as _litrpc_AutopilotClient, AutopilotDefinition as _litrpc_AutopilotDefinition } from './litrpc/Autopilot';
import type { SessionsClient as _litrpc_SessionsClient, SessionsDefinition as _litrpc_SessionsDefinition } from './litrpc/Sessions';

type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
  new(...args: ConstructorParameters<Constructor>): Subtype;
};

export interface ProtoGrpcType {
  litrpc: {
    AddAutopilotSessionRequest: MessageTypeDefinition
    AddAutopilotSessionResponse: MessageTypeDefinition
    AddSessionRequest: MessageTypeDefinition
    AddSessionResponse: MessageTypeDefinition
    Autopilot: SubtypeConstructor<typeof grpc.Client, _litrpc_AutopilotClient> & { service: _litrpc_AutopilotDefinition }
    ChannelPolicyBounds: MessageTypeDefinition
    ChannelRestrict: MessageTypeDefinition
    Feature: MessageTypeDefinition
    FeatureConfig: MessageTypeDefinition
    HistoryLimit: MessageTypeDefinition
    ListAutopilotFeaturesRequest: MessageTypeDefinition
    ListAutopilotFeaturesResponse: MessageTypeDefinition
    ListAutopilotSessionsRequest: MessageTypeDefinition
    ListAutopilotSessionsResponse: MessageTypeDefinition
    ListSessionsRequest: MessageTypeDefinition
    ListSessionsResponse: MessageTypeDefinition
    MacaroonPermission: MessageTypeDefinition
    MacaroonRecipe: MessageTypeDefinition
    OffChainBudget: MessageTypeDefinition
    OnChainBudget: MessageTypeDefinition
    PeerRestrict: MessageTypeDefinition
    Permissions: MessageTypeDefinition
    Rate: MessageTypeDefinition
    RateLimit: MessageTypeDefinition
    RevokeAutopilotSessionRequest: MessageTypeDefinition
    RevokeAutopilotSessionResponse: MessageTypeDefinition
    RevokeSessionRequest: MessageTypeDefinition
    RevokeSessionResponse: MessageTypeDefinition
    RuleValue: MessageTypeDefinition
    RuleValues: MessageTypeDefinition
    RulesMap: MessageTypeDefinition
    SendToSelf: MessageTypeDefinition
    Session: MessageTypeDefinition
    SessionState: EnumTypeDefinition
    SessionType: EnumTypeDefinition
    Sessions: SubtypeConstructor<typeof grpc.Client, _litrpc_SessionsClient> & { service: _litrpc_SessionsDefinition }
  }
}

