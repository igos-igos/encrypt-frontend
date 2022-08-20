import { makeAutoObservable, runInAction } from 'mobx';
import { AuthService } from '../api/services/auth.service';
import { makePersistable } from 'mobx-persist-store';

class AuthStore {
  token: string | null;

  constructor() {
    this.token = null;

    makeAutoObservable(this);
    makePersistable(this, { name: 'auth', properties: ['token'], storage: window.localStorage });
  }

  register = async (email: string, password: string) => {
    try {
      const response = await AuthService.register(email, password);
      if (response.status === 201) {
        return true;
      }

      return false;
    } catch (error) {
      throw new Error('Something went wrong');
    }
  };

  login = async (email: string, password: string) => {
    try {
      const response = await AuthService.login(email, password);
      if (response.status === 200) {
        runInAction(() => {
          this.token = response.data.access_token;
        });
      }
    } catch (error) {
      throw new Error('Something went wrong');
    }
  };
}

const authStore = new AuthStore();
export default authStore;
