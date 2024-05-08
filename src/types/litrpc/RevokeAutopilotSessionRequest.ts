// Original file: protos/lit-autopilot.proto


export interface RevokeAutopilotSessionRequestPartial {
  'localPublicKey'?: (Buffer | Uint8Array | string);
}

export interface RevokeAutopilotSessionRequest {
  'localPublicKey': (Buffer);
}
