export interface RegistrationPayload {
  email: string;
  password: string;
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface LoginPayload extends RegistrationPayload {}
