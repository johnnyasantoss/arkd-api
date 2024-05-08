import { promisify } from 'util';
import { LitClientOptions } from './';
import { loadProto } from './proto';
import {
  StatusClient,
  SubServerStatusReqPartial,
  SubServerStatusResp,
} from './types';
import { ProtoGrpcType } from './types/lit-status';

/**
 * API interface for litd's Status RPC sub-server.
 */
export class StatusApi {
  /**
   * Create a new StatusApi instance.
   */
  static create(options: LitClientOptions) {
    const { proto, credentials, params } = loadProto<ProtoGrpcType>(
      'lit-status.proto',
      options
    );

    return new StatusApi(
      new proto.litrpc.Status(options.socket, credentials, params)
    );
  }

  /**
   * The grpc client to communicate with the daemon.
   */
  client: StatusClient;

  constructor(client: StatusClient) {
    this.client = client;
  }

  /**
   * SubServerStatus queries the state of various LiT sub-servers.
   */
  async subServerStatus(
    request: SubServerStatusReqPartial = {}
  ): Promise<SubServerStatusResp> {
    return promisify(this.client.subServerStatus.bind(this.client))(request);
  }
}
