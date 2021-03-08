"use strict";

describe("Account", function () {
  let account;

  beforeEach(function () {
    account = new Account();
  });

  describe("constructor", function () {
    it("balance is set to 0 upon initialization", function () {
      expect(account._balance).toEqual(0);
    });
  });

  describe("printBalance", function () {
    it("returns the balance", function () {
      expect(account.printBalance()).toEqual("New Balance: 0");
    });
  });

  describe("deposit", function () {
    it("returns the amount of money deposited", function () {
      const DEPOSITED_AMOUNT = 10;
      expect(account.deposit(DEPOSITED_AMOUNT)).toEqual("Deposit: 10");
    });
  });

  describe("withdraw", function () {
    it("returns the amount of money withdrawn", function () {
      const WITHDRAWN_AMOUNT = 10;
      expect(account.withdraw(WITHDRAWN_AMOUNT)).toEqual("Withdraw: 10");
    });
  });
});
