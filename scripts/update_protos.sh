#! /bin/bash

TAG=$1

echo "Updating protos from arkd release tag: ${TAG}"

set -ex

function download_proto_file {
    curl -L https://raw.githubusercontent.com/ark-network/ark/${TAG}/$1 > protos/`basename $1 .proto`.proto
}

download_proto_file api-spec/protobuf/ark/v1/admin.proto
download_proto_file api-spec/protobuf/ark/v1/service.proto
download_proto_file api-spec/protobuf/ark/v1/wallet.proto

