export interface RemoteUser {
  _id: string;
  email: string;
}

export interface RemoteUserWithToken extends RemoteUser {
  access_token: string;
}
