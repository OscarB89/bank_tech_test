"use strict";

class Account {
  constructor() {
    this._balance = 0;
  }

  printBalance() {
    return `New Balance: ${this._balance}`;
  }

  deposit(amount) {
    this._balance += amount;
    return `Deposit: ${amount}`;
  }

  withdraw(amount) {
    this._balance -= amount;
    return `Withdraw: ${amount}`;
  }
}
