"use strict";

class Account {
  constructor() {
    this._balance = 0;
    this._transactions = [];
  }

  printBalance() {
    return this._balance;
  }

  deposit(amount) {
    return (this._balance += amount);
    // return `Deposit: ${amount}`;
  }

  withdraw(amount) {
    return (this._balance -= amount);
    // return `Withdraw: ${amount}`;
  }

  printStatement() {}
}
