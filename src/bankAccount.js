"use strict";

class Account {
  constructor() {
    this._balance = 0.00;
    this._transactions = [];
    this._depositTransactions = "";
    this._withdrawTransactions = "";
    this._date = new Date();
  }

  printBalance() {
    return this._balance.toFixed(2);
  }

  dateFormatter() {
    let arrDate = this._date.toLocaleDateString("en-AU").split("/");
    return arrDate[0] + "/" + arrDate[1] + "/" + arrDate[2];
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
      `${this.dateFormatter()}` +
      ` || ` +
      `${amount.toFixed(2)}` +
      ` || || ` +
      `${this._balance.toFixed(2)}`;
    this._transactions.push(this._depositTransactions);
  }

  withdrawFormat(amount) {
    this._withdrawTransactions =
      `${this.dateFormatter()}` +
      ` || || ` +
      `${amount.toFixed(2)}` +
      ` || ` +
      `${this._balance.toFixed(2)}`;
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
