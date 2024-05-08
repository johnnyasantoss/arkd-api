// Original file: protos/lit-sessions.proto

import type { SessionStatePartial as _litrpc_SessionStatePartial, SessionState as _litrpc_SessionState } from '../litrpc/SessionState';
import type { SessionTypePartial as _litrpc_SessionTypePartial, SessionType as _litrpc_SessionType } from '../litrpc/SessionType';
import type { MacaroonRecipePartial as _litrpc_MacaroonRecipePartial, MacaroonRecipe as _litrpc_MacaroonRecipe } from '../litrpc/MacaroonRecipe';
import type { RulesMapPartial as _litrpc_RulesMapPartial, RulesMap as _litrpc_RulesMap } from '../litrpc/RulesMap';
import type { Long } from '@grpc/proto-loader';

export interface SessionPartial {
  'label'?: (string);
  'sessionState'?: (_litrpc_SessionStatePartial);
  'sessionType'?: (_litrpc_SessionTypePartial);
  'expiryTimestampSeconds'?: (number | string | Long);
  'mailboxServerAddr'?: (string);
  'devServer'?: (boolean);
  'pairingSecret'?: (Buffer | Uint8Array | string);
  'pairingSecretMnemonic'?: (string);
  'localPublicKey'?: (Buffer | Uint8Array | string);
  'remotePublicKey'?: (Buffer | Uint8Array | string);
  'createdAt'?: (number | string | Long);
  'macaroonRecipe'?: (_litrpc_MacaroonRecipePartial | null);
  'accountId'?: (string);
  'id'?: (Buffer | Uint8Array | string);
  'autopilotFeatureInfo'?: ({[key: string]: _litrpc_RulesMapPartial});
  'revokedAt'?: (number | string | Long);
  'groupId'?: (Buffer | Uint8Array | string);
  'featureConfigs'?: ({[key: string]: string});
}

export interface Session {
  'label': (string);
  'sessionState': (_litrpc_SessionState);
  'sessionType': (_litrpc_SessionType);
  'expiryTimestampSeconds': (string);
  'mailboxServerAddr': (string);
  'devServer': (boolean);
  'pairingSecret': (Buffer);
  'pairingSecretMnemonic': (string);
  'localPublicKey': (Buffer);
  'remotePublicKey': (Buffer);
  'createdAt': (string);
  'macaroonRecipe': (_litrpc_MacaroonRecipe | null);
  'accountId': (string);
  'id': (Buffer);
  'autopilotFeatureInfo': ({[key: string]: _litrpc_RulesMap});
  'revokedAt': (string);
  'groupId': (Buffer);
  'featureConfigs': ({[key: string]: string});
}
