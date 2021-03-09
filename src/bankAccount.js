"use strict";

class Account {
  constructor() {
    this._balance = 0;
    this._transactions = [];
    this._depositTransactions = "";
    this._withdrawTransactions = "";
    this._date = new DateFormat();
  }

  printBalance() {
    return this._balance;
  }

  deposit(amount) {
    this._balance += amount;
    this.depositFormat(amount);
  }

  withdraw(amount) {
    this._balance -= amount;
    this.withdrawFormat(amount);
  }

  depositFormat(amount) {
    this._depositTransactions =
      `${this._date.dateFormatter()}` +
      ` || ` +
      `${amount}` +
      ` || || ` +
      `${this._balance}`;
    this._transactions.push(this._depositTransactions);
  }

  withdrawFormat(amount) {
    this._withdrawTransactions =
      `${this._date.dateFormatter()}` +
      ` || || ` +
      `${amount}` +
      ` || ` +
      `${this._balance}`;
    this._transactions.push(this._withdrawTransactions);
  }

  printStatement() {
    let correctOrder = this._transactions.reverse();
    let header = "date || credit || debit || balance";
    for (let i = 0; i < correctOrder.length; i++) {
      header += "\n" + correctOrder[i];
    }
    return header;
  }
}
