'use strict'

class BankTransactions {
  constructor () {
    this._transactionsHistory = [];
    this._date = new DateFormatter ();
    this._balance = new BankBalance ();
  }

  accountBalance() {
    return this._balance.printBalance();
  }

  depositTransactions(amount) {
    this._balance.deposit(amount);
    this._depositTransactions =
      `${this._date.currentDate()}` +
      ` || ` +
      `${amount.toFixed(2)}` +
      ` || || ` +
      `${this.accountBalance()}`;
    this._transactionsHistory.push(this._depositTransactions);
  }

  withdrawTransactions(amount) {
    this._withdrawTransactions =
      `${this._date.currentDate()}` +
      ` || || ` +
      `${amount.toFixed(2)}` +
      ` || ` +
      `${this._balance.printBalance()}`;
    this._transactionsHistory.push(this._withdrawTransactions);
  }
}