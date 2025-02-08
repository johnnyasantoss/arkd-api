import { ArkdClient } from "../src";

async function main() {
  const client = ArkdClient.create({
    socket: "127.0.0.1:10029",
    // macaroon: "<hex>", // from ~/.arkd/data/macaroons/admin.macaroon
    // cert: "<hex>", // from ~/.arkd/data/tls/cert.pem
  });

  // 30 secs in ms
  const deadline = 30_000;

  await Promise.all([
    client.admin.waitForReady(deadline),
    client.arkService.waitForReady(deadline),
    client.wallet.waitForReady(deadline),
  ]);

  // service is ready ...
  console.info("All services are up and running");

  console.info(await client.arkService.getInfo());
}

main().catch(console.error);
