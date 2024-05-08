import { promisify } from 'util';
import { LitClientOptions } from './';
import { loadProto } from './proto';
import {
  Account,
  AccountInfoRequestPartial,
  AccountsClient,
  CreateAccountRequestPartial,
  CreateAccountResponse,
  ListAccountsRequestPartial,
  ListAccountsResponse,
  RemoveAccountRequestPartial,
  RemoveAccountResponse,
  UpdateAccountRequestPartial,
} from './types';
import { ProtoGrpcType } from './types/lit-accounts';

/**
 * API interface for litd's Accounts RPC sub-server.
 */
export class AccountsApi {
  /**
   * Create a new AccountsApi instance.
   */
  static create(options: LitClientOptions) {
    const { proto, credentials, params } = loadProto<ProtoGrpcType>(
      'lit-accounts.proto',
      options
    );

    return new AccountsApi(
      new proto.litrpc.Accounts(options.socket, credentials, params)
    );
  }

  /**
   * The grpc client to communicate with the daemon.
   */
  client: AccountsClient;

  constructor(client: AccountsClient) {
    this.client = client;
  }

  /**
   * CreateAccount adds an entry to the account database. This entry represents
   * an amount of satoshis (account balance) that can be spent using off-chain
   * transactions (e.g. paying invoices).
   *
   * Macaroons can be created to be locked to an account. This makes sure that
   * the bearer of the macaroon can only spend at most that amount of satoshis
   * through the daemon that has issued the macaroon.
   *
   * Accounts only assert a maximum amount spendable. Having a certain account
   * balance does not guarantee that the node has the channel liquidity to
   * actually spend that amount.
   */
  async createAccount(
    request: CreateAccountRequestPartial = {}
  ): Promise<CreateAccountResponse> {
    return promisify(this.client.createAccount.bind(this.client))(request);
  }

  /**
   * UpdateAccount updates an existing account in the account database.
   */
  async updateAccount(
    request: UpdateAccountRequestPartial = {}
  ): Promise<Account> {
    return promisify(this.client.updateAccount.bind(this.client))(request);
  }

  /**
   * ListAccounts returns all accounts that are currently stored in the account
   * database.
   */
  async listAccounts(
    request: ListAccountsRequestPartial = {}
  ): Promise<ListAccountsResponse> {
    return promisify(this.client.listAccounts.bind(this.client))(request);
  }

  /**
   * AccountInfo returns the account with the given ID or label.
   */
  async accountInfo(request: AccountInfoRequestPartial = {}): Promise<Account> {
    return promisify(this.client.accountInfo.bind(this.client))(request);
  }

  /**
   * RemoveAccount removes the given account from the account database.
   */
  async removeAccount(
    request: RemoveAccountRequestPartial = {}
  ): Promise<RemoveAccountResponse> {
    return promisify(this.client.removeAccount.bind(this.client))(request);
  }
}
