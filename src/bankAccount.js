"use strict";

class Account {
  constructor() {
    this._balance = new BankBalance ();
    this._transactions = [];
    this._depositTransactions = "";
    this._withdrawTransactions = "";
    this._date = new DateFormatter();
  }

  // printBalance() {
  //   return this._balance.toFixed(2);
  // }

  depositTransactions() {
    // this._balance += amount;
    // this.depositFormat(amount);
    this._transactions.push(this._depositTransactions);
  }

  withdrawTransactions() {
    // this._balance -= amount;
    // this.withdrawFormat(amount);
    this._transactions.push(this._withdrawTransactions);
  }

  depositFormat(amount) {
    this._depositTransactions =
      `${this._date.currentDate()}` +
      ` || ` +
      `${amount.toFixed(2)}` +
      ` || || ` +
      `${this._balance.toFixed(2)}`;
    // this._transactions.push(this._depositTransactions);
  }

  withdrawFormat(amount) {
    this._withdrawTransactions =
      `${this._date.currentDate()}` +
      ` || || ` +
      `${amount.toFixed(2)}` +
      ` || ` +
      `${this._balance.toFixed(2)}`;
    // this._transactions.push(this._withdrawTransactions);
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
