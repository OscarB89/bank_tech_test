'use strict'

class DateFormatter {
  constructor () {
    this._date = new Date ();
  }

  currentDate() {
    let arrDate = this._date.toLocaleDateString("en-AU").split("/");
    return arrDate[0] + "/" + arrDate[1] + "/" + arrDate[2];
  }
}