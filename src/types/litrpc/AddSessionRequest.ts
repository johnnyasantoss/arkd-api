// Original file: protos/lit-sessions.proto

import type { SessionTypePartial as _litrpc_SessionTypePartial, SessionType as _litrpc_SessionType } from '../litrpc/SessionType';
import type { MacaroonPermissionPartial as _litrpc_MacaroonPermissionPartial, MacaroonPermission as _litrpc_MacaroonPermission } from '../litrpc/MacaroonPermission';
import type { Long } from '@grpc/proto-loader';

export interface AddSessionRequestPartial {
  'label'?: (string);
  'sessionType'?: (_litrpc_SessionTypePartial);
  'expiryTimestampSeconds'?: (number | string | Long);
  'mailboxServerAddr'?: (string);
  'devServer'?: (boolean);
  'macaroonCustomPermissions'?: (_litrpc_MacaroonPermissionPartial)[];
  'accountId'?: (string);
}

export interface AddSessionRequest {
  'label': (string);
  'sessionType': (_litrpc_SessionType);
  'expiryTimestampSeconds': (string);
  'mailboxServerAddr': (string);
  'devServer': (boolean);
  'macaroonCustomPermissions': (_litrpc_MacaroonPermission)[];
  'accountId': (string);
}
