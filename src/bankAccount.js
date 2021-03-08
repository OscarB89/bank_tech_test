"use strict";

class Account {
  constructor() {
    this._balance = 0;
    // this._transactions = [];
    this._depositTransactions = [];
    this._withdrawTransactions = [];
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
    return (this._depositTransactions =
      `${this.dateFormat()}` +
      ` || ` +
      `${amount}` +
      ` || || ` +
      `${this._balance}`);
  }

  withdraw(amount) {
    this._balance -= amount;
    return (this._withdrawTransactions =
      `${this.dateFormat()}` +
      ` || || ` +
      `${-amount}` +
      ` || ` +
      `${this._balance}`);
    // return `Withdraw: ${amount}`;
  }

  // depositFormat() {
  //   return (
  //     `${this.dateFormat()}` +
  //     ` || ` +
  //     `${(this._balance += amount)}` +
  //     ` || || ` +
  //     `${this._balance}`
  //   );
  // }

  // withdrawFormat(amount) {
  //   return (
  //     `${this.dateFormat()}` +
  //     ` || || ` +
  //     `${-amount}` +
  //     ` || ` +
  //     `${this._balance}`
  //   );
  // }

  printStatement() {
    return (
      "date || credit || debit || balance\n" +
      `${this._depositTransactions}\n` +
      `${this._withdrawTransactions}`
    );
  }
}
