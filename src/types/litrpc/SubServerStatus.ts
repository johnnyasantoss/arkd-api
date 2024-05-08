// Original file: protos/lit-status.proto


export interface SubServerStatusPartial {
  'disabled'?: (boolean);
  'running'?: (boolean);
  'error'?: (string);
  'customStatus'?: (string);
}

export interface SubServerStatus {
  'disabled': (boolean);
  'running': (boolean);
  'error': (string);
  'customStatus': (string);
}
