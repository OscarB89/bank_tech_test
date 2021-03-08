"use strict";

class Account {
  constructor() {
    this._balance = 0;
  }

  printBalance() {
    return this._balance;
  }

  deposit(amount) {
    return `Deposit: ${amount}`;
  }
}
