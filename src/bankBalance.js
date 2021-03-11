'use strict'

class BankBalance {
  constructor() {
    this._balance = 0.00;
  }
  
  printBalance() {
    return this._balance.toFixed(2);
  }

  deposit(amount) {
    this._balance += amount;
  }

  withdraw(amount) {
    this._balance -= amount;
  }

}
