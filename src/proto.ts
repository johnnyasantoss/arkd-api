import * as grpc from "@grpc/grpc-js";
import * as protoLoader from "@grpc/proto-loader";
import path from "path";
import { ArkdClientOptions } from "./clientTypes";

export const loadProto = <T>(
  protoFileName: string,
  options: ArkdClientOptions
): {
  proto: T;
  credentials: grpc.ChannelCredentials;
  params: grpc.ClientOptions;
} => {
  const callCredentials = grpc.credentials.createFromMetadataGenerator(
    (_, callback) => {
      const metadata = new grpc.Metadata();

      if (options.macaroon) metadata.add("macaroon", options.macaroon);

      return callback(null, metadata);
    }
  );

  const channelCredentials = options.cert
    ? grpc.credentials.createSsl(Buffer.from(options.cert, "hex"))
    : undefined;

  const credentials = channelCredentials
    ? grpc.credentials.combineChannelCredentials(
        channelCredentials,
        callCredentials
      )
    : grpc.credentials.createInsecure();

  const params = {
    "grpc.max_receive_message_length": -1,
    "grpc.max_send_message_length": -1,
  };

  const protoPath = path.join(__dirname, "../protos", protoFileName);
  const packageDefinition = protoLoader.loadSync(protoPath, {
    longs: String,
    enums: String,
    defaults: true,
    oneofs: true,
    includeDirs: [
      path.join(__dirname, "..", "node_modules", "google-proto-files"),
    ],
  });
  const proto = grpc.loadPackageDefinition(packageDefinition) as unknown as T;

  return { proto, credentials, params };
};
