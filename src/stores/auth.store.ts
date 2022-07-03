import { makeAutoObservable, runInAction } from 'mobx';

class AuthStore {
  token: string | null;

  isAuth: boolean;

  constructor() {
    this.token = null;

    this.isAuth = false;

    makeAutoObservable(this);
  }

  setToken(token: string) {
    runInAction(() => {
      this.token = token;
    });
  }

  setIsAuth(isAuth: boolean) {
    runInAction(() => {
      this.isAuth = isAuth;
    });
  }
}

const authStore = new AuthStore();
export default authStore;
