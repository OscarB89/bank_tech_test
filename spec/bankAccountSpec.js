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
      expect(account.printBalance()).toEqual(0);
    });
  });

  describe("deposit", function () {
    it("returns the amount of money deposited", function () {
      let amount = 10;
      expect(account.deposit(amount)).toEqual("Deposit: 10");
    });
  });
});
