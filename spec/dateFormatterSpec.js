"use strict";

describe('DateFormatter', function (){
  let dateFormatter;
  let date;

beforeEach(function (){
  dateFormatter = new DateFormatter ();
  date = new Date ();
});

  function currentDate() {
    let arrDate = date.toLocaleDateString("en-AU").split("/");
    return arrDate[0] + "/" + arrDate[1] + "/" + arrDate[2];
  }

  describe("currentDate", function () {
    it("returns the date with the correct format", function () {
      expect(dateFormatter.currentDate()).toBe(`${currentDate()}`);
    });
  });
});