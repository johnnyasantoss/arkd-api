import { promisify } from 'util';
import { LitClientOptions } from './';
import { loadProto } from './proto';
import {
  AddSessionRequestPartial,
  AddSessionResponse,
  ListSessionsRequestPartial,
  ListSessionsResponse,
  RevokeSessionRequestPartial,
  RevokeSessionResponse,
  SessionsClient,
} from './types';
import { ProtoGrpcType } from './types/lit-autopilot';

/**
 * API interface for litd's Sessions RPC sub-server.
 */
export class SessionsApi {
  /**
   * Create a new SessionsApi instance.
   */
  static create(options: LitClientOptions) {
    const { proto, credentials, params } = loadProto<ProtoGrpcType>(
      'lit-sessions.proto',
      options
    );

    return new SessionsApi(
      new proto.litrpc.Sessions(options.socket, credentials, params)
    );
  }

  /**
   * The grpc client to communicate with the daemon.
   */
  client: SessionsClient;

  constructor(client: SessionsClient) {
    this.client = client;
  }

  /**
   * AddSession adds and starts a new LNC session.
   */
  async addSession(
    request: AddSessionRequestPartial = {}
  ): Promise<AddSessionResponse> {
    return promisify(this.client.addSession.bind(this.client))(request);
  }

  /**
   * ListSessions returns all sessions known to the session store.
   */
  async listSessions(
    request: ListSessionsRequestPartial = {}
  ): Promise<ListSessionsResponse> {
    return promisify(this.client.listSessions.bind(this.client))(request);
  }

  /**
   * RevokeSession revokes a single session and also stops it if it is currently
   * active.
   */
  async revokeSession(
    request: RevokeSessionRequestPartial = {}
  ): Promise<RevokeSessionResponse> {
    return promisify(this.client.revokeSession.bind(this.client))(request);
  }
}
