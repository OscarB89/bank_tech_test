"use strict";

describe("DateFormat", function () {
  let date;
  let baseTime;

  beforeEach(function () {
    date = new DateFormat();
    // trying to mock date but does not work
    jasmine.clock().install();
    baseTime = new Date("03/09/2021");
    jasmine.clock().mockDate(baseTime);
  });

  afterEach(function () {
    jasmine.clock().uninstall();
  });

  describe("dateFormatter", function () {
    it("returns the date with the correct format", function () {
      expect(date.dateFormatter()).toBe("09/03/2021");
    });
  });
});
