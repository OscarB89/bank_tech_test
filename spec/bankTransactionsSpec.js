'use strict'

describe("BankTransactions", function(){
  let bankTransactions;

  function currentDate() {
    let date = new Date();
    let arrDate = date.toLocaleDateString("en-AU").split("/");
    return arrDate[0] + "/" + arrDate[1] + "/" + arrDate[2];
  }

  beforeEach(function(){
    bankTransactions = new BankTransactions ();
  });

  describe("recordDeposit", function(){
    it("should format and push deposit into an array", function () {
      bankTransactions.recordDeposit(1000, 1000);
      expect(bankTransactions._allTransactions[0]).toBe(`${currentDate()} || 1000.00 || || 1000.00`)
    });

    it("should format and push withdrawal into an array", function () {
      bankTransactions.recordWithdraw(1000, -1000);
      expect(bankTransactions._allTransactions[0]).toBe(`${currentDate()} || || 1000.00 || -1000.00`)
    });
  });
});