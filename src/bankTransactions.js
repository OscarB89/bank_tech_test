// 'use strict'

// class BankTransactions {
//   constructor () {
//     this._transactionsHistory = [];
//     this._date = new DateFormatter ();
//     this._balance = new BankBalance ();
//   }

//   accountBalance() {
//     return this._balance.printBalance();
//   }

//   depositTransactions(amount) {
//     this._balance.deposit(amount);
//     this._depositTransactions =
//       `${this._date.currentDate()}` +
//       ` || ` +
//       `${amount.toFixed(2)}` +
//       ` || || ` +
//       `${this.accountBalance()}`;
//     this._transactionsHistory.push(this._depositTransactions);
//   }

//   withdrawTransactions(amount) {
//     this._balance.withdraw(amount);
//     this._withdrawTransactions =
//       `${this._date.currentDate()}` +
//       ` || || ` +
//       `${amount.toFixed(2)}` +
//       ` || ` +
//       `${this.accountBalance()}`;
//     this._transactionsHistory.push(this._withdrawTransactions);
//   }

//   printStatement() {
//     let correctOrder = this._transactionsHistory.reverse();
//     let header = "date || credit || debit || balance";
//     for (let i = 0; i < correctOrder.length; i++) {
//       header += "\n" + correctOrder[i];
//     }
//     return header;
//   }
// }