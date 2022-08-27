// Core
import accounts from '@/data/accounts/mock/accounts.mock';
import { makeAutoObservable, runInAction } from 'mobx';
// Types

// Mock

import { Account } from './account.model';

class AccountsStore {
  accounts: Account[];

  editableAccount: Account | null;

  constructor() {
    this.accounts = [] as Account[];

    this.editableAccount = null;

    makeAutoObservable(this);
  }

  fetchAccounts = async () => {
    const data: Account[] = accounts;
    this.accounts = data;
  };

  findAccount = (id: string) => {
    const account = this.accounts.find((item) => item.id === id);

    if (account) {
      runInAction(() => {
        this.editableAccount = account;
      });
    } else {
      this.editableAccount = null;
    }
  };

  createAccount = async (account: Account) => {
    const updatedData: Account[] = [...this.accounts, account];
    runInAction(() => {
      this.accounts = updatedData;
    });
  };

  updateAccount = async (account: Account) => {
    const accountForUpdateIndex = this.accounts.findIndex((predicate) => predicate.id === account.id);

    runInAction(() => {
      this.accounts[accountForUpdateIndex] = account;
    });
  };

  deleteAccount = async (id: string) => {
    const updatedData: Account[] = this.accounts.filter((account) => account.id !== id);
    runInAction(() => {
      this.accounts = updatedData;
    });
  };
}

const accountsStore = new AccountsStore();
export default accountsStore;
