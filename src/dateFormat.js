"use strict";

class DateFormat {
  constructor() {
    this._date = new Date();
  }

  dateFormatter() {
    let arrDate = this._date.toLocaleDateString("en-AU").split("/");
    return arrDate[0] + "/" + arrDate[1] + "/" + arrDate[2];
  }
}
