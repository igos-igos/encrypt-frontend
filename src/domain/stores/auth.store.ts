// Core
import { makeAutoObservable, runInAction } from 'mobx';
import { makePersistable } from 'mobx-persist-store';

// Infra
import { AxiosHttpClient } from '@/infra/http';

// Services
import { AuthService } from '@/data/auth/auth.service';

class AuthStore {
  token: string | null;

  constructor(private readonly authService: AuthService) {
    this.token = null;

    makeAutoObservable(this);
    makePersistable(this, { name: 'auth', properties: ['token'], storage: window.localStorage });
  }

  register = async (email: string, password: string) => {
    try {
      const response = await this.authService.register({ email, password });
      if (response.statusCode === 201) {
        return true;
      }

      return false;
    } catch (error) {
      throw new Error('Something went wrong');
    }
  };

  login = async (email: string, password: string) => {
    try {
      const response = await this.authService.login({ email, password });

      if (response.statusCode === 200) {
        runInAction(() => {
          this.token = response.body!.access_token;
        });
      }
    } catch (error) {
      throw new Error('Something went wrong');
    }
  };
}

const authStore = new AuthStore(new AuthService(new AxiosHttpClient()));
export default authStore;
