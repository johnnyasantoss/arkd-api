import { AccountsApi } from './accountsApi';
import { AutopilotApi } from './autopilotApi';
import { SessionsApi } from './sessionsApi';
import { StatusApi } from './statusApi';

export interface LitClientOptions {
  /**
   * litd's host and port in `host:port` format.
   */
  socket: string;

  /**
   * litd's macaroon in HEX format.
   */
  macaroon: string;

  /**
   * litd's TLS certificate in HEX format.
   */
  cert: string;
}

/**
 * The litd RPC APIs.
 */
export interface LitRpcApis {
  accounts: AccountsApi;
  autopilot: AutopilotApi;
  sessions: SessionsApi;
  status: StatusApi;
}

export class LitClient {
  /**
   * Create instances of all litd RPC APIs.
   */
  static create(options: LitClientOptions): LitRpcApis {
    return {
      accounts: AccountsApi.create(options),
      autopilot: AutopilotApi.create(options),
      sessions: SessionsApi.create(options),
      status: StatusApi.create(options),
    };
  }
}

export { AccountsApi, AutopilotApi, SessionsApi, StatusApi };
export * from './types';
