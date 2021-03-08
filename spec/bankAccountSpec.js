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

  describe("withdrawFormat", function () {
    it("returns the withdrawn money with the correct format", function () {
      expect(account.withdrawFormat(10)).toBe("08/03/2021 || || -10 || 0");
    });
  });

  describe("printStatement", function () {
    it("returns the history of transactions", function () {
      expect(account.printStatement(10)).toBe(
        "date || credit || debit || balance\n" +
          "08/03/2021 || 10 || || 0\n" +
          "08/03/2021 || || -10 || 0"
      );
    });
  });
});
