import { AdminAPI } from "./adminAPI";
import { ArkdClientOptions, ArkdRpcApis } from "./clientTypes";
import { ArkServiceAPI } from "./serviceAPI";
import { WalletAPI } from "./walletAPI";

export class ArkdClient implements ArkdRpcApis {
  /**
   * Create instances of all arkd RPC APIs.
   */
  static create(options: ArkdClientOptions) {
    return new ArkdClient(
      AdminAPI.create(options),
      ArkServiceAPI.create(options),
      WalletAPI.create(options)
    );
  }

  constructor(
    public admin: AdminAPI,
    public arkService: ArkServiceAPI,
    public wallet: WalletAPI
  ) {}
}
