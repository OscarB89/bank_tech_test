'use strict'

describe("BankBalance", function(){
  let bankBalance;

  beforeEach(function(){
    bankBalance = new BankBalance ();
  });

  describe("constructor", function(){
    it("balance is set to 0 upon initialization", function () {
      expect(bankBalance._balance).toEqual(0.00);
    });
  });

  describe("printBalance", function () {
    it("returns the balance", function () {
      expect(bankBalance.printBalance()).toEqual('0.00');
    });
  });

  describe("deposit", function () {
    it("increses the balance", function () {
      bankBalance.deposit(100.00);
      expect(bankBalance.printBalance()).toEqual('100.00');
    });
  });

  describe("withdraw", function () {
    it("reduces the balance", function () {
      bankBalance.withdraw(100.00);
      expect(bankBalance.printBalance()).toEqual('-100.00');
    });
  });
});
