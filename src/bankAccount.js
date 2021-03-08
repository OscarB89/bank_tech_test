"use strict";

class Account {
  constructor() {
    this._balance = 0;
    this._transactions = [];
    this._date = new Date();
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

  dateFormat() {
    let arrDate = this._date.toLocaleDateString("en-AU").split("/");
    return arrDate[0] + "/" + arrDate[1] + "/" + arrDate[2];
  }

  depositFormat(amount) {
    return (
      `${this.dateFormat()}` +
      ` || ` +
      `${amount}` +
      ` || || ` +
      `${this._balance}`
    );
  }

  withdrawFormat(amount) {
    return (
      `${this.dateFormat()}` +
      ` || || ` +
      `${-amount}` +
      ` || ` +
      `${this._balance}`
    );
  }

  printStatement(amount) {
    return (
      "date || credit || debit || balance\n" +
      `${this.depositFormat(amount)}\n` +
      `${this.withdrawFormat(amount)}`
    );
  }
}
