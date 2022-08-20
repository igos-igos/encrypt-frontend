export type User = {
  _id: string;
  email: string;
};

export type UserWithToken = User & {
  access_token: string;
};
