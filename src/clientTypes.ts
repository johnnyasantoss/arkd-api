import type { AdminAPI } from "./adminAPI";
import type { ArkServiceAPI } from "./serviceAPI";
import type { WalletAPI } from "./walletAPI";

export interface ArkdClientOptions {
  /**
   * arkd's host and port in `host:port` format.
   */
  socket: string;

  /**
   * arkd's macaroon in HEX format. Optional if NO_MACAROON was used
   */
  macaroon?: string;

  /**
   * arkd's TLS certificate in HEX format. Optional if NO_TLS was used
   */
  cert?: string;
}

/**
 * The arkd RPC APIs.
 */
export interface ArkdRpcApis {
  admin: AdminAPI;
  arkService: ArkServiceAPI;
  wallet: WalletAPI;
}
