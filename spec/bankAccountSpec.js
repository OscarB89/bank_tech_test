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

    it("transactions is set to an empty array upon initialization", function () {
      expect(account._transactions).toEqual([]);
    });
  });

  describe("printBalance", function () {
    it("returns the balance", function () {
      expect(account.printBalance()).toEqual(0);
    });
  });

  describe("deposit", function () {
    it("returns the amount of money deposited", function () {
      const DEPOSITED_AMOUNT = 10;
      expect(account.deposit(DEPOSITED_AMOUNT)).toEqual(10);
    });
  });

  describe("withdraw", function () {
    it("returns the amount of money withdrawn", function () {
      const WITHDRAWN_AMOUNT = 10;
      expect(account.withdraw(WITHDRAWN_AMOUNT)).toBe(-10);
    });
  });

  describe("dateFormat", function () {
    it("returns the date with the correct format", function () {
      expect(account.dateFormat()).toBe("08/03/2021");
    });
  });

  describe("depositFormat", function () {
    it("returns the deposit with the correct format", function () {
      expect(account.depositFormat(10)).toBe("08/03/2021 || 10 || || 0");
    });
  });
});
