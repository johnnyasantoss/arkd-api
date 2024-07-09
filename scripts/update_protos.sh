#! /bin/bash

TAG=$1

echo "Updating protos from tapd release tag: ${TAG}"

curl https://raw.githubusercontent.com/lightninglabs/lightning-terminal/${TAG}/proto/lit-accounts.proto > protos/lit-accounts.proto
curl https://raw.githubusercontent.com/lightninglabs/lightning-terminal/${TAG}/proto/lit-autopilot.proto > protos/lit-autopilot.proto
curl https://raw.githubusercontent.com/lightninglabs/lightning-terminal/${TAG}/proto/lit-sessions.proto > protos/lit-sessions.proto
curl https://raw.githubusercontent.com/lightninglabs/lightning-terminal/${TAG}/proto/lit-status.proto > protos/lit-status.proto
