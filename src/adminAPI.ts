import { Deadline } from "@grpc/grpc-js";
import { promisify } from "util";
import { ArkdClientOptions } from "./clientTypes";
import { loadProto } from "./proto";
import {
  AdminServiceClient,
  CreateNoteRequest,
  CreateNoteResponse,
  DeleteTxRequestsRequest,
  DeleteTxRequestsResponse,
  GetMarketHourConfigRequest,
  GetMarketHourConfigResponse,
  GetRoundDetailsRequest,
  GetRoundDetailsResponse,
  GetRoundsRequest,
  GetRoundsResponse,
  GetScheduledSweepRequest,
  GetScheduledSweepResponse,
  GetTxRequestQueueRequest,
  GetTxRequestQueueResponse,
  UpdateMarketHourConfigRequest,
  UpdateMarketHourConfigResponse,
  WithdrawRequest,
  WithdrawResponse,
} from "./types";
import { ProtoGrpcType } from "./types/admin";

/**
 * API interface for arkd's admin RPC sub-server.
 */
export class AdminAPI {
  /**
   * Create a new AdminAPI instance.
   */
  static create(options: ArkdClientOptions) {
    const { proto, credentials, params } = loadProto<ProtoGrpcType>(
      "admin.proto",
      options
    );

    return new AdminAPI(
      new proto.ark.v1.AdminService(options.socket, credentials, params)
    );
  }

  constructor(
    /**
     * The grpc client to communicate with the daemon.
     */
    private client: AdminServiceClient
  ) {}

  /**
   * Wait for the service service to be ready.
   */
  async waitForReady(deadline: Deadline): Promise<void> {
    return promisify(this.client.waitForReady.bind(this.client))(deadline);
  }

  /**
   * Creates a new note.
   */
  async createNote(req: CreateNoteRequest): Promise<CreateNoteResponse> {
    return promisify(this.client.createNote.bind(this.client))(req);
  }

  /**
   * Retrieves the market hour configuration.
   */
  async getMarketHourConfig(
    req: GetMarketHourConfigRequest = {}
  ): Promise<GetMarketHourConfigResponse> {
    return promisify(this.client.getMarketHourConfig.bind(this.client))(req);
  }

  /**
   * Retrieves details of a specific round.
   */
  async getRoundDetails(
    req: GetRoundDetailsRequest
  ): Promise<GetRoundDetailsResponse> {
    return promisify(this.client.getRoundDetails.bind(this.client))(req);
  }

  /**
   * Retrieves a list of rounds.
   */
  async getRounds(req: GetRoundsRequest): Promise<GetRoundsResponse> {
    return promisify(this.client.getRounds.bind(this.client))(req);
  }

  /**
   * Retrieves scheduled sweeps.
   */
  async getScheduledSweep(
    req: GetScheduledSweepRequest = {}
  ): Promise<GetScheduledSweepResponse> {
    return promisify(this.client.getScheduledSweep.bind(this.client))(req);
  }

  /**
   * Updates the market hour configuration.
   */
  async updateMarketHourConfig(
    req: UpdateMarketHourConfigRequest
  ): Promise<UpdateMarketHourConfigResponse> {
    return promisify(this.client.updateMarketHourConfig.bind(this.client))(req);
  }

  /**
   * Deletes transaction requests in bulk
   */
  async deleteTxRequests(
    req: DeleteTxRequestsRequest
  ): Promise<DeleteTxRequestsResponse> {
    return promisify(this.client.deleteTxRequests.bind(this.client))(req);
  }

  /**
   * Get transaction requests in bulk
   */
  async getTxRequestQueue(
    req: GetTxRequestQueueRequest
  ): Promise<GetTxRequestQueueResponse> {
    return promisify(this.client.getTxRequestQueue.bind(this.client))(req);
  }

  /**
   * Withdraw from Ark
   */
  async withdraw(req: WithdrawRequest): Promise<WithdrawResponse> {
    return promisify(this.client.withdraw.bind(this.client))(req);
  }
}
