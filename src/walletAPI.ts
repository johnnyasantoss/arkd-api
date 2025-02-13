import { Deadline } from "@grpc/grpc-js";
import { promisify } from "util";
import { ArkdClientOptions } from "./clientTypes";
import { loadProto } from "./proto";
import {
  CreateRequest,
  CreateResponse,
  DeriveAddressRequest,
  DeriveAddressResponse,
  GenSeedRequest,
  GenSeedResponse,
  GetBalanceRequest,
  GetBalanceResponse,
  GetStatusRequest,
  GetStatusResponse,
  LockRequest,
  LockResponse,
  RestoreRequest,
  RestoreResponse,
  UnlockRequest,
  UnlockResponse,
  WalletInitializerServiceClient,
  WalletServiceClient,
} from "./types";
import { ProtoGrpcType } from "./types/wallet";

/**
 * API interface for arkd's wallet and wallet initializer RPC sub-servers.
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
      new proto.ark.v1.WalletService(options.socket, credentials, params),
      new proto.ark.v1.WalletInitializerService(
        options.socket,
        credentials,
        params
      )
    );
  }

  constructor(
    /**
     * The grpc client to communicate with the wallet service.
     */
    private clientWallet: WalletServiceClient,
    /**
     * The grpc client to communicate with the wallet init service.
     */
    private clientWalletInit: WalletInitializerServiceClient
  ) {}

  /**
   * Wait for the wallet service to be ready.
   */
  async waitForReady(deadline: Deadline = 30_000): Promise<void> {
    return promisify(this.clientWallet.waitForReady.bind(this.clientWallet))(
      deadline
    );
  }

  /**
   * Derives a new address from the given wallet seed and returns it.
   */
  async deriveAddress(
    req: DeriveAddressRequest = {}
  ): Promise<DeriveAddressResponse> {
    return promisify(this.clientWallet.deriveAddress.bind(this.clientWallet))(
      req
    );
  }

  /**
   * Gets the current wallet balance.
   */
  async getBalance(req: GetBalanceRequest = {}): Promise<GetBalanceResponse> {
    return promisify(this.clientWallet.getBalance.bind(this.clientWallet))(req);
  }

  /**
   * Lock the wallet.
   */
  async lock(req: LockRequest): Promise<LockResponse> {
    return promisify(this.clientWallet.lock.bind(this.clientWallet))(req);
  }

  /**
   * Generate a new seed and return
   */
  async genSeed(req: GenSeedRequest = {}): Promise<GenSeedResponse> {
    return promisify(this.clientWalletInit.genSeed.bind(this.clientWalletInit))(
      req
    );
  }

  /**
   * Create a new wallet with the given seed and password.
   */
  async create(req: CreateRequest): Promise<CreateResponse> {
    return promisify(this.clientWalletInit.create.bind(this.clientWalletInit))(
      req
    );
  }

  /**
   * Restore an existing wallet using the provided seed, password, and gap limit.
   */
  async restore(req: RestoreRequest): Promise<RestoreResponse> {
    return promisify(this.clientWalletInit.restore.bind(this.clientWalletInit))(
      req
    );
  }

  /**
   * Unlock the wallet with the given password.
   */
  async unlock(req: UnlockRequest): Promise<UnlockResponse> {
    return promisify(this.clientWalletInit.unlock.bind(this.clientWalletInit))(
      req
    );
  }

  /**
   * Get the status of the wallet, including initialization, unlocked state, and sync status.
   */
  async getStatus(req: GetStatusRequest = {}): Promise<GetStatusResponse> {
    return promisify(
      this.clientWalletInit.getStatus.bind(this.clientWalletInit)
    )(req);
  }
}
