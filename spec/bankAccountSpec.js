'use strict'

describe("Account", function (){
  let account;

  beforeEach(function (){
    account = new Account ();
  });

  it("balance is set to 0 upon initialization", function (){
    expect(account._balance).toEqual(0);
  });
});