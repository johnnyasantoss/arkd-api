# Description

Lightning Terminal gRPC client to interact with Lightning Labs `litd` daemon.

# Install

```sh
npm install @lightningpolar/litd-api
```

# Usage

```ts
import { LitClient, SessionType } from '@lightningpolar/litd-api';

(async () => {
  const client = LitClient.create({
    socket: '127.0.0.1:10029',
    macaroon: '<hex>', // ~/.lit/mainnet/lit.macaroon
    cert: '<hex>',     // ~/.lit/tls.cert
  });

  const status = await client.status.subServerStatus();
  console.log(status);

  const { sessions } = await client.sessions.listSessions();
  console.log(sessions);

  const { session } = await client.sessions.addSession({
    label: 'my session',
    sessionType: SessionType.TYPE_MACAROON_ADMIN,
    expiryTimestampSeconds: Math.floor(Date.now() / 1000) + 60 * 24 * 90, // in 90 days
    mailboxServerAddr: 'mailbox.terminal.lightning.today:443',
  });
  console.log(session?.pairingSecretMnemonic);
})();
```