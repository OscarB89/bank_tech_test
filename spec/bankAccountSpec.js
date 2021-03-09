"use strict";

describe("Account", function () {
  let account;
  let baseTime;

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
      expect(account._balance).toEqual(0);
    });

    it("transactions is set to an empty array upon initialization", function () {
      expect(account._depositTransactions).toEqual("");
    });
  });

  describe("printBalance", function () {
    it("returns the balance", function () {
      expect(account.printBalance()).toEqual(0);
    });
  });

  // describe("deposit", function () {
  //   it("returns the amount of money deposited", function () {
  //     const DEPOSITED_AMOUNT = 10;
  //     expect(account.deposit(DEPOSITED_AMOUNT)).toEqual(10);
  //   });
  // });

  // describe("withdraw", function () {
  //   it("returns the amount of money withdrawn", function () {
  //     const WITHDRAWN_AMOUNT = 10;
  //     expect(account.withdraw(WITHDRAWN_AMOUNT)).toBe(-10);
  //   });
  // });

  describe("dateFormat", function () {
    it("returns the date with the correct format", function () {
      expect(account.dateFormat()).toBe("09/03/2021");
    });
  });

  describe("deposit", function () {
    it("returns the deposit with the correct format", function () {
      expect(account.deposit(10)).toBe("09/03/2021 || 10 || || 10");
    });
  });

  describe("withdraw", function () {
    it("returns the withdrawn money with the correct format", function () {
      expect(account.withdraw(10)).toBe("09/03/2021 || || -10 || -10");
    });
  });

  // describe("printStatement", function () {
  //   it("returns 50 if deposited 100 and withdraw 50", function () {
  //     account.deposit(100);
  //     account.withdraw(50);
  //     expect(account.printStatement()).toBe(
  //       "date || credit || debit || balance\n" +
  //         "09/03/2021 || 100 || || 100\n" +
  //         "09/03/2021 || || -50 || 50"
  //     );
  //   });

  //   it("returns 150 if deposited 100 and 50", function () {
  //     account.deposit(100);
  //     account.deposit(50);
  //     expect(account.printStatement()).toBe(
  //       "date || credit || debit || balance\n" +
  //         "09/03/2021 || 100 || || 100\n" +
  //         "09/03/2021 || 50 || || 150"
  //     );
  //   });

  //   it("returns -150 if withdraw 100 and 50", function () {
  //     account.withdraw(100);
  //     account.withdraw(50);
  //     expect(account.printStatement()).toBe(
  //       "date || credit || debit || balance\n" +
  //         "09/03/2021 || || -100 || -100\n" +
  //         "09/03/2021 || || -50 || -150"
  //     );
  //   });

  //   it("returns -150 if withdraw 100 and 50", function () {
  //     account.deposit(100);
  //     account.withdraw(100);
  //     account.deposit(50);
  //     expect(account.printStatement()).toBe(
  //       "date || credit || debit || balance\n" +
  //         "09/03/2021 || 100 || || 100\n" +
  //         "09/03/2021 || || -100 || 0\n" +
  //         "09/03/2021 || 50 || || 50"
  //     );
  //   });

  it("returns -150 if withdraw 100 and 50", function () {
    account.deposit(1000);
    account.deposit(2000);
    account.withdraw(500);
    expect(account.printStatement()).toBe(
      "date || credit || debit || balance\n" +
        "09/03/2021 || || -500 || 2500\n" +
        "09/03/2021 || 2000 || || 3000\n" +
        "09/03/2021 || 1000 || || 1000"
    );
  });
});
