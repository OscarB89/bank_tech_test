"use strict";

class Account {
  constructor() {
    this._balance = 0;
    this._transactions = [];
    this._depositTransactions = "";
    this._withdrawTransactions = "";
    this._date = new Date();
  }

  printBalance() {
    return this._balance;
  }

  dateFormat() {
    let arrDate = this._date.toLocaleDateString("en-AU").split("/");
    return arrDate[0] + "/" + arrDate[1] + "/" + arrDate[2];
  }

  deposit(amount) {
    this._balance += amount;
    this._depositTransactions =
      `${this.dateFormat()}` +
      ` || ` +
      `${amount}` +
      ` || || ` +
      `${this._balance}`;
    this._transactions.push(this._depositTransactions);
    return this._depositTransactions;
  }

  withdraw(amount) {
    this._balance -= amount;
    this._withdrawTransactions =
      `${this.dateFormat()}` +
      ` || || ` +
      `${-amount}` +
      ` || ` +
      `${this._balance}`;
    this._transactions.push(this._withdrawTransactions);
    return this._withdrawTransactions;
    // return `Withdraw: ${amount}`;
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
