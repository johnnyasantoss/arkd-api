// Original file: protos/lit-sessions.proto


export interface RevokeSessionRequestPartial {
  'localPublicKey'?: (Buffer | Uint8Array | string);
}

export interface RevokeSessionRequest {
  'localPublicKey': (Buffer);
}
