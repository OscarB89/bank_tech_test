"use strict";

describe("Account", function () {
  let account;
  let baseTime;
  let date = new Date();

  function dateFormatter() {
    let arrDate = date.toLocaleDateString("en-AU").split("/");
    return arrDate[0] + "/" + arrDate[1] + "/" + arrDate[2];
  }

  beforeEach(function () {
    account = new Account();
    // trying to mock date but does not work
    jasmine.clock().install();
    baseTime = new Date("03/09/2021");
    jasmine.clock().mockDate(baseTime);
  });

  afterEach(function () {
    jasmine.clock().uninstall();
  });

  describe("constructor", function () {
    it("balance is set to 0 upon initialization", function () {
      expect(account._balance).toEqual(0.00);
    });

    it("depositTransactions is set to an empty string upon initialization", function () {
      expect(account._depositTransactions).toEqual("");
    });

    it("withdrawtransactions is set to an empty string upon initialization", function () {
      expect(account._withdrawTransactions).toEqual("");
    });

    it("transactions is set to an empty array upon initialization", function () {
      expect(account._transactions).toEqual([]);
    });
  });

  describe("printBalance", function () {
    it("returns the balance", function () {
      expect(account.printBalance()).toEqual('0.00');
    });
  });

  describe("dateFormatter", function () {
    it("returns the date with the correct format", function () {
      expect(account.dateFormatter()).toBe(`${dateFormatter()}`);
    });
  });

  describe("printStatement", function () {
    it("returns 50.00 if deposited 100.00 and withdraw 50.00", function () {
      account.deposit(100);
      account.withdraw(50);
      expect(account.printStatement()).toBe(
        "date || credit || debit || balance\n" +
          `${dateFormatter()} || || 50.00 || 50.00\n` +
          `${dateFormatter()} || 100.00 || || 100.00`
      );
    });

    it("returns 150.00 if deposited 100.00 and 50.00", function () {
      account.deposit(100);
      account.deposit(50);
      expect(account.printStatement()).toBe(
        "date || credit || debit || balance\n" +
          `${dateFormatter()} || 50.00 || || 150.00\n` +
          `${dateFormatter()} || 100.00 || || 100.00`
      );
    });

    it("returns -150.00 if withdraw 100.00 and 50.00", function () {
      account.withdraw(100);
      account.withdraw(50);
      expect(account.printStatement()).toBe(
        "date || credit || debit || balance\n" +
          `${dateFormatter()} || || 50.00 || -150.00\n` +
          `${dateFormatter()} || || 100.00 || -100.00`
      );
    });

    it("returns 50.00 if deposited 50.00, withdraw 100.00 and deposited 100.00", function () {
      account.deposit(100);
      account.withdraw(100);
      account.deposit(50);
      expect(account.printStatement()).toBe(
        "date || credit || debit || balance\n" +
          `${dateFormatter()} || 50.00 || || 50.00\n` +
          `${dateFormatter()} || || 100.00 || 0.00\n` +
          `${dateFormatter()} || 100.00 || || 100.00`
      );
    });

    it("returns 2500.00 if deposit of 1000.00 and 2000.00 and withdraw 500.00", function () {
      account.deposit(1000);
      account.deposit(2000);
      account.withdraw(500);
      expect(account.printStatement()).toBe(
        "date || credit || debit || balance\n" +
          `${dateFormatter()} || || 500.00 || 2500.00\n` +
          `${dateFormatter()} || 2000.00 || || 3000.00\n` +
          `${dateFormatter()} || 1000.00 || || 1000.00`
      );
    });
  });
});
