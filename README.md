# Description

Arkd gRPC client to interact with Ark Labs `arkd` daemon.

# Install

```sh
npm install @lightningpolar/arkd-api
```

# Usage

```ts
import { ArkdClient, SessionType } from "@lightningpolar/arkd-api";

// TODO: Update example

(async () => {
  const client = ArkdClients.create({
    socket: "127.0.0.1:10029",
    // TODO: Check these paths
    macaroon: "<hex>", // ~/.arkd/mainnet/lit.macaroon
    cert: "<hex>", // ~/.arkd/tls.cert
  });

  const status = await client.status.subServerStatus();
  console.log(status);

  const { sessions } = await client.sessions.listSessions();
  console.log(sessions);

  const { session } = await client.sessions.addSession({
    label: "my session",
    sessionType: SessionType.TYPE_MACAROON_ADMIN,
    expiryTimestampSeconds: Math.floor(Date.now() / 1000) + 60 * 24 * 90, // in 90 days
    mailboxServerAddr: "mailbox.terminal.lightning.today:443",
  });
  console.log(session?.pairingSecretMnemonic);
})();
```
