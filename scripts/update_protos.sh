#! /bin/bash

VERSION="v0.12.5-alpha"

curl https://raw.githubusercontent.com/lightninglabs/lightning-terminal/${VERSION}/proto/lit-accounts.proto > protos/lit-accounts.proto
curl https://raw.githubusercontent.com/lightninglabs/lightning-terminal/${VERSION}/proto/lit-autopilot.proto > protos/lit-autopilot.proto
curl https://raw.githubusercontent.com/lightninglabs/lightning-terminal/${VERSION}/proto/lit-sessions.proto > protos/lit-sessions.proto
curl https://raw.githubusercontent.com/lightninglabs/lightning-terminal/${VERSION}/proto/lit-status.proto > protos/lit-status.proto
