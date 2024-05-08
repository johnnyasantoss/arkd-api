import { promisify } from 'util';
import { LitClientOptions } from './';
import { loadProto } from './proto';
import {
  AddAutopilotSessionRequestPartial,
  AddAutopilotSessionResponse,
  AutopilotClient,
  ListAutopilotFeaturesRequestPartial,
  ListAutopilotFeaturesResponse,
  ListAutopilotSessionsRequestPartial,
  ListAutopilotSessionsResponse,
  RevokeAutopilotSessionRequestPartial,
  RevokeAutopilotSessionResponse,
} from './types';
import { ProtoGrpcType } from './types/lit-autopilot';

/**
 * API interface for litd's Autopilot RPC sub-server.
 */
export class AutopilotApi {
  /**
   * Create a new AutopilotApi instance.
   */
  static create(options: LitClientOptions) {
    const { proto, credentials, params } = loadProto<ProtoGrpcType>(
      'lit-autopilot.proto',
      options
    );

    return new AutopilotApi(
      new proto.litrpc.Autopilot(options.socket, credentials, params)
    );
  }

  /**
   * The grpc client to communicate with the daemon.
   */
  client: AutopilotClient;

  constructor(client: AutopilotClient) {
    this.client = client;
  }

  /**
   * ListAutopilotFeatures fetches all the features supported by the Autopilot
   * server along with the rules that we need to support in order to subscribe
   * to those features.
   */
  async listAutopilotFeatures(
    request: ListAutopilotFeaturesRequestPartial = {}
  ): Promise<ListAutopilotFeaturesResponse> {
    return promisify(this.client.listAutopilotFeatures.bind(this.client))(
      request
    );
  }

  /**
   * AddAutopilotSession creates a new LNC session and attempts to register it
   * with the Autopilot server.
   */
  async addAutopilotSession(
    request: AddAutopilotSessionRequestPartial = {}
  ): Promise<AddAutopilotSessionResponse> {
    return promisify(this.client.addAutopilotSession.bind(this.client))(
      request
    );
  }

  /**
   * ListAutopilotSessions lists all the sessions that are of type
   * TypeAutopilot.
   */
  async listAutopilotSessions(
    request: ListAutopilotSessionsRequestPartial = {}
  ): Promise<ListAutopilotSessionsResponse> {
    return promisify(this.client.listAutopilotSessions.bind(this.client))(
      request
    );
  }

  /**
   * RevokeAutopilotSession revokes an Autopilot session.
   */
  async revokeAutopilotSession(
    request: RevokeAutopilotSessionRequestPartial = {}
  ): Promise<RevokeAutopilotSessionResponse> {
    return promisify(this.client.revokeAutopilotSession.bind(this.client))(
      request
    );
  }
}
