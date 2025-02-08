import { promisify } from "util";
import { ArkdClientOptions } from "./clientTypes";
import { loadProto } from "./proto";
import { ProtoGrpcType } from "./types/service";
import {
  ArkServiceClient,
  DeleteNostrRecipientRequest,
  DeleteNostrRecipientResponse,
  GetBoardingAddressRequest,
  GetBoardingAddressResponse,
  GetEventStreamRequest,
  GetEventStreamResponse,
  GetInfoRequest,
  GetInfoResponse,
  GetRoundByIdRequest,
  GetRoundByIdResponse,
  GetRoundRequest,
  GetRoundResponse,
  GetTransactionsStreamRequest,
  GetTransactionsStreamResponse,
  ListVtxosRequest,
  ListVtxosResponse,
  PingRequest,
  PingResponse,
  RegisterInputsForNextRoundRequest,
  RegisterInputsForNextRoundResponse,
  RegisterOutputsForNextRoundRequest,
  RegisterOutputsForNextRoundResponse,
  SetNostrRecipientRequest,
  SetNostrRecipientResponse,
  SubmitRedeemTxRequest,
  SubmitRedeemTxResponse,
  SubmitSignedForfeitTxsRequest,
  SubmitSignedForfeitTxsResponse,
  SubmitTreeNoncesRequest,
  SubmitTreeNoncesResponse,
  SubmitTreeSignaturesRequest,
  SubmitTreeSignaturesResponse,
} from "./types";
import { Deadline } from "@grpc/grpc-js";

/**
 * API interface for arkd's service RPC sub-server.
 */
export class ArkServiceAPI {
  /**
   * Create a new ServiceAPI instance.
   */
  static create(options: ArkdClientOptions) {
    const { proto, credentials, params } = loadProto<ProtoGrpcType>(
      "service.proto",
      options
    );

    return new ArkServiceAPI(
      new proto.ark.v1.ArkService(options.socket, credentials, params)
    );
  }

  constructor(
    /**
     * The grpc client to communicate with the daemon.
     */
    private client: ArkServiceClient
  ) {}

  /**
   * Wait for the service service to be ready.
   */
  async waitForReady(deadline: Deadline): Promise<void> {
    return promisify(this.client.waitForReady.bind(this.client))(deadline);
  }

  /**
   * Get info about the Ark Node
   */
  async getInfo(req: GetInfoRequest = {}): Promise<GetInfoResponse> {
    return promisify(this.client.getInfo.bind(this.client))(req);
  }

  /**
   * Delete a nostr recipient
   */
  async deleteNostrRecipient(
    req: DeleteNostrRecipientRequest
  ): Promise<DeleteNostrRecipientResponse> {
    return promisify(this.client.deleteNostrRecipient.bind(this.client))(req);
  }

  /**
   * Get boarding address for a wallet.
   */
  async getBoardingAddress(
    req: GetBoardingAddressRequest
  ): Promise<GetBoardingAddressResponse> {
    return promisify(this.client.getBoardingAddress.bind(this.client))(req);
  }

  /**
   * Stream events from the blockchain.
   */
  async getEventStream(
    req: GetEventStreamRequest = {}
  ): Promise<GetEventStreamResponse> {
    return promisify(this.client.getEventStream.bind(this.client))(req);
  }

  /**
   * Get information about a round.
   */
  async getRound(req: GetRoundRequest): Promise<GetRoundResponse> {
    return promisify(this.client.getRound.bind(this.client))(req);
  }

  /**
   * Get information about a specific round by its ID.
   */
  async getRoundById(req: GetRoundByIdRequest): Promise<GetRoundByIdResponse> {
    return promisify(this.client.getRoundById.bind(this.client))(req);
  }

  /**
   * Stream transactions from the blockchain.
   */
  async getTransactionsStream(
    req: GetTransactionsStreamRequest = {}
  ): Promise<GetTransactionsStreamResponse> {
    return promisify(this.client.getTransactionsStream.bind(this.client))(req);
  }

  /**
   * List all vtxos in the database.
   */
  async listVtxos(req: ListVtxosRequest): Promise<ListVtxosResponse> {
    return promisify(this.client.listVtxos.bind(this.client))(req);
  }

  /**
   * Ping the server to check if it's up and running.
   */
  async ping(req: PingRequest): Promise<PingResponse> {
    return promisify(this.client.ping.bind(this.client))(req);
  }

  /**
   * Register inputs for the next round.
   */
  async registerInputsForNextRound(
    req: RegisterInputsForNextRoundRequest
  ): Promise<RegisterInputsForNextRoundResponse> {
    return promisify(this.client.registerInputsForNextRound.bind(this.client))(
      req
    );
  }

  /**
   * Register outputs for the next round.
   */
  async registerOutputsForNextRound(
    req: RegisterOutputsForNextRoundRequest
  ): Promise<RegisterOutputsForNextRoundResponse> {
    return promisify(this.client.registerOutputsForNextRound.bind(this.client))(
      req
    );
  }

  /**
   * Set a nostr recipient address for the wallet.
   */
  async setNostrRecipient(
    req: SetNostrRecipientRequest
  ): Promise<SetNostrRecipientResponse> {
    return promisify(this.client.setNostrRecipient.bind(this.client))(req);
  }

  /**
   * Submit a redeem transaction.
   */
  async submitRedeemTx(
    req: SubmitRedeemTxRequest
  ): Promise<SubmitRedeemTxResponse> {
    return promisify(this.client.submitRedeemTx.bind(this.client))(req);
  }

  /**
   * Submit signed forfeit transactions.
   */
  async submitSignedForfeitTxs(
    req: SubmitSignedForfeitTxsRequest
  ): Promise<SubmitSignedForfeitTxsResponse> {
    return promisify(this.client.submitSignedForfeitTxs.bind(this.client))(req);
  }

  /**
   * Submit nonces for the tree.
   */
  async submitTreeNonces(
    req: SubmitTreeNoncesRequest
  ): Promise<SubmitTreeNoncesResponse> {
    return promisify(this.client.submitTreeNonces.bind(this.client))(req);
  }

  /**
   * Submit signatures for the tree.
   */
  async submitTreeSignatures(
    req: SubmitTreeSignaturesRequest
  ): Promise<SubmitTreeSignaturesResponse> {
    return promisify(this.client.submitTreeSignatures.bind(this.client))(req);
  }
}
