// Original file: protos/lit-status.proto

import type { SubServerStatusPartial as _litrpc_SubServerStatusPartial, SubServerStatus as _litrpc_SubServerStatus } from '../litrpc/SubServerStatus';

export interface SubServerStatusRespPartial {
  'subServers'?: ({[key: string]: _litrpc_SubServerStatusPartial});
}

export interface SubServerStatusResp {
  'subServers': ({[key: string]: _litrpc_SubServerStatus});
}
