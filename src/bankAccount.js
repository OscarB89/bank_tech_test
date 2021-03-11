"use strict";

class Account {
  constructor() {
    // this._balance = new BankBalance ();
    this._transactions = new BankTransactions ();
    // this._date = new DateFormatter();
  }

  // printBalance() {
  //   return this._balance.toFixed(2);
  // }

  // deposit(amount) {
    // this._balance += amount;
    // this.depositFormat(amount);
    // this._transactions.push(this._depositTransactions);
  // }

  // withdraw(amount) {
    // this._balance -= amount;
    // this.withdrawFormat(amount);
    // this._transactions.push(this._withdrawTransactions);
  // }

  depositFormat(amount) {
    this._depositTransactions =
      `${this._date.currentDate()}` +
      ` || ` +
      `${amount.toFixed(2)}` +
      ` || || ` +
      `${this._balance.printBalance()}`;
    this._transactions.push(this._depositTransactions);
  }

  withdrawFormat(amount) {
    this._withdrawTransactions =
      `${this._date.currentDate()}` +
      ` || || ` +
      `${amount.toFixed(2)}` +
      ` || ` +
      `${this._balance.toFixed(2)}`;
    this._transactions.push(this._withdrawTransactions);
  }

  printStatement() {
    let correctOrder = this._transactions._transactionsHistory.reverse();
    let header = "date || credit || debit || balance";
    for (let i = 0; i < correctOrder.length; i++) {
      header += "\n" + correctOrder[i];
    }
    return header;
  }
}
