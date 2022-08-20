// Server
import server from '../index.server';

// Types
import { User, UserWithToken } from '../../types-space/types/user.type';

export class AuthService {
  static async register(email: string, password: string) {
    const response = await server.post<User>('api/auth/register', { email, password });

    return response;
  }

  static async login(email: string, password: string) {
    const response = await server.post<UserWithToken>('api/auth/login', { email, password });

    return response;
  }

  static async refresh() {
    const response = await server.get<UserWithToken>('api/auth/refresh');

    return response;
  }
}
