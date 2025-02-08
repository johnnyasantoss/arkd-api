import { Deadline } from "@grpc/grpc-js";
import { promisify } from "util";
import { ArkdClientOptions } from "./clientTypes";
import { loadProto } from "./proto";
import {
  DeriveAddressRequest,
  DeriveAddressResponse,
  GetBalanceRequest,
  GetBalanceResponse,
  LockRequest,
  LockResponse,
  WalletServiceClient
} from "./types";
import { ProtoGrpcType } from "./types/wallet";

/**
 * API interface for arkd's wallet RPC sub-server.
 */
export class WalletAPI {
  /**
   * Create a new WalletAPI instance.
   */
  static create(options: ArkdClientOptions) {
    const { proto, credentials, params } = loadProto<ProtoGrpcType>(
      "wallet.proto",
      options
    );

    return new WalletAPI(
      new proto.ark.v1.WalletService(options.socket, credentials, params)
    );
  }

  constructor(
    /**
     * The grpc client to communicate with the daemon.
     */
    private client: WalletServiceClient
  ) {}

  /**
   * Wait for the wallet service to be ready.
   */
  async waitForReady(deadline: Deadline): Promise<void> {
    return promisify(this.client.waitForReady.bind(this.client))(deadline);
  }

  async deriveAddress(req: DeriveAddressRequest): Promise<DeriveAddressResponse> {
    return promisify(this.client.deriveAddress.bind(this.client))(req);
  }

  async getBalance(req: GetBalanceRequest): Promise<GetBalanceResponse> {
    return promisify(this.client.getBalance.bind(this.client))(req);
  }

  async lock(req: LockRequest): Promise<LockResponse> {
    return promisify(this.client.lock.bind(this.client))(req);
  }
}
