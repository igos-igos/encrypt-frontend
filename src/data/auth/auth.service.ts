// Transports
import { HttpClient } from '../transports';

// Models
import { RemoteUser, RemoteUserWithToken } from './models/user.model';

// Payloads
import { LoginPayload, RegistrationPayload } from './payloads/auth.payload';

export class AuthService {
  constructor(private readonly httpClient: HttpClient) {}

  public async register({ email, password }: RegistrationPayload) {
    const response = await this.httpClient?.request<RemoteUser>({
      url: 'api/auth/register',
      method: 'post',
      body: { email, password },
    });

    return response;
  }

  public async login({ email, password }: LoginPayload) {
    const response = await this.httpClient?.request<RemoteUserWithToken>({
      url: 'api/auth/login',
      method: 'post',
      body: { email, password },
    });

    return response;
  }
}
