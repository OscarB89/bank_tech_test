"use strict";

class Account  {
  constructor () {
    this._transaction = new BankTransactions ();
    this._date = new DateFormatter ();
    this._balance = new BankBalance ();
  }

  accountBalance() {
    return this._balance.printBalance();
  }

  depositTransactions(amount) {
    this._balance.deposit(amount);
    this._transaction.recordDeposit(amount, this.accountBalance());
  }

  withdrawTransactions(amount) {
    this._balance.withdraw(amount);
    this._transaction.recordDeposit(amount, this.accountBalance());
  }

  printStatement() {
    let correctOrder = this._transaction._allTransactions.reverse();
    let header = "date || credit || debit || balance";
    for (let i = 0; i < correctOrder.length; i++) {
      header += "\n" + correctOrder[i];
    }
    return header;
  }
}
