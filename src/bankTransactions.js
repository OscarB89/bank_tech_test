'use strict'

class BankTransactions {
  constructor () {
    this._allTransactions = [];
    this._depositTransaction = "";
    this._withdrawTransaction = "";
    this._date = new DateFormatter ();
  }

  recordDeposit (amount, balance) {
      this._depositTransaction = `${this._date.currentDate()}` +
      ` || ` +
      `${amount.toFixed(2)}` +
      ` || || ` +
      `${Number(balance).toFixed(2)}`;
      this._allTransactions.push(this._depositTransaction);
  }

  recordWithdraw (amount, balance) {
      this._withdrawTransactions = `${this._date.currentDate()}` +
      ` || || ` +
      `${amount.toFixed(2)}` +
      ` || ` +
      `${Number(balance).toFixed(2)}`;
      this._allTransactions.push(this._withdrawTransactions);
  }
}