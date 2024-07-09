// Original file: protos/lit-sessions.proto

import type { RateLimitPartial as _litrpc_RateLimitPartial, RateLimit as _litrpc_RateLimit } from '../litrpc/RateLimit';
import type { ChannelPolicyBoundsPartial as _litrpc_ChannelPolicyBoundsPartial, ChannelPolicyBounds as _litrpc_ChannelPolicyBounds } from '../litrpc/ChannelPolicyBounds';
import type { HistoryLimitPartial as _litrpc_HistoryLimitPartial, HistoryLimit as _litrpc_HistoryLimit } from '../litrpc/HistoryLimit';
import type { OffChainBudgetPartial as _litrpc_OffChainBudgetPartial, OffChainBudget as _litrpc_OffChainBudget } from '../litrpc/OffChainBudget';
import type { OnChainBudgetPartial as _litrpc_OnChainBudgetPartial, OnChainBudget as _litrpc_OnChainBudget } from '../litrpc/OnChainBudget';
import type { SendToSelfPartial as _litrpc_SendToSelfPartial, SendToSelf as _litrpc_SendToSelf } from '../litrpc/SendToSelf';
import type { ChannelRestrictPartial as _litrpc_ChannelRestrictPartial, ChannelRestrict as _litrpc_ChannelRestrict } from '../litrpc/ChannelRestrict';
import type { PeerRestrictPartial as _litrpc_PeerRestrictPartial, PeerRestrict as _litrpc_PeerRestrict } from '../litrpc/PeerRestrict';
import type { ChannelConstraintPartial as _litrpc_ChannelConstraintPartial, ChannelConstraint as _litrpc_ChannelConstraint } from '../litrpc/ChannelConstraint';

export interface RuleValuePartial {
  'rateLimit'?: (_litrpc_RateLimitPartial | null);
  'chanPolicyBounds'?: (_litrpc_ChannelPolicyBoundsPartial | null);
  'historyLimit'?: (_litrpc_HistoryLimitPartial | null);
  'offChainBudget'?: (_litrpc_OffChainBudgetPartial | null);
  'onChainBudget'?: (_litrpc_OnChainBudgetPartial | null);
  'sendToSelf'?: (_litrpc_SendToSelfPartial | null);
  'channelRestrict'?: (_litrpc_ChannelRestrictPartial | null);
  'peerRestrict'?: (_litrpc_PeerRestrictPartial | null);
  'channelConstraint'?: (_litrpc_ChannelConstraintPartial | null);
  'value'?: "rateLimit"|"chanPolicyBounds"|"historyLimit"|"offChainBudget"|"onChainBudget"|"sendToSelf"|"channelRestrict"|"peerRestrict"|"channelConstraint";
}

export interface RuleValue {
  'rateLimit'?: (_litrpc_RateLimit | null);
  'chanPolicyBounds'?: (_litrpc_ChannelPolicyBounds | null);
  'historyLimit'?: (_litrpc_HistoryLimit | null);
  'offChainBudget'?: (_litrpc_OffChainBudget | null);
  'onChainBudget'?: (_litrpc_OnChainBudget | null);
  'sendToSelf'?: (_litrpc_SendToSelf | null);
  'channelRestrict'?: (_litrpc_ChannelRestrict | null);
  'peerRestrict'?: (_litrpc_PeerRestrict | null);
  'channelConstraint'?: (_litrpc_ChannelConstraint | null);
  'value': "rateLimit"|"chanPolicyBounds"|"historyLimit"|"offChainBudget"|"onChainBudget"|"sendToSelf"|"channelRestrict"|"peerRestrict"|"channelConstraint";
}
