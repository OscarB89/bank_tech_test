# Bank tech test

Provides the business logic for a basic banking app and following the principles of test driven development. I used Jasmine for running tests, and Istanbul for analysing coverage. I have ensured 100% test coverage for this project.

## Specification

### Requirements

- You should be able to interact with your code via a REPL like IRB or the JavaScript console. (You don't need to implement a command line interface that takes input from STDIN.)
- Deposits, withdrawal.
- Account statement (date, amount, balance) printing.
- Data can be kept in memory (it doesn't need to be stored to a database or anything).

### Acceptance criteria

**Given** a client makes a deposit of 1000 on 10-01-2012  
**And** a deposit of 2000 on 13-01-2012  
**And** a withdrawal of 500 on 14-01-2012  
**When** she prints her bank statement  
**Then** she would see

```
date || credit || debit || balance
14/01/2012 || || 500.00 || 2500.00
13/01/2012 || 2000.00 || || 3000.00
10/01/2012 || 1000.00 || || 1000.00
```

## Approach

I started the process by writing user stories based on the given brief and wrote a class diagram from these user stories. I then used TDD to get the functions of the class diagram built.

## Structure

### Class diagram

XXXX

## User stories

```
As a client,
So that I can save my money,
I'd like to be able to deposit funds in my account.
```

```
As a client,
So that I can access my money,
I'd like to be able to withdraw funds from my account.
```

```
As a client,
So that I know how much money I have,
I want to be able to see my current balance.
```

```
As a client,
So that I can view my transactions history,
I want to be able to see when I made each transaction.
```

```
As a client,
So that I can view my transactions history,
I'd like to be able to view my bank statement.
```

## How to use this app

Clone the current repository

```
$ git clone https://github.com/OscarB89/bank_tech_test.git
```

Go to the root directory of your cloned local repo and run

```
$ open SpecRunner.html
```

Once the console is opened, create an instance of the Account Class

```
account = new Account();
```

To deposit an amount (e.g. 500)

```
$ account.deposit(500);
```

To withdraw an amount (e.g. 250)

```
$ account.withdraw(250);
```

To check the current balance

```
$ account.printBalance();
```

To print the Account Statement

```
$ account.printStatement();
```

### Example

<img width="829" alt="Screenshot 2021-03-09 at 16 08 03" src="https://user-images.githubusercontent.com/71934417/110501702-5a475f80-80f2-11eb-8848-dc743946e2f4.png">

## Dependencies

For Karma (from the root of the folder)

```
npm install karma --save-dev
```

```
npm install karma-jasmine karma-chrome-launcher jasmine-core --save-dev
```

For eslint (from the root of the folder)

```
npm install eslint --save-dev
```

```
npx eslint --init
```

## Unit tests

From the root folder, open SpecRunner.html to access Jasmine tests

```
open SpecRunner.html
```

<img width="520" alt="Screenshot 2021-03-09 at 20 31 32" src="https://user-images.githubusercontent.com/71934417/110533980-78bf5200-8116-11eb-888f-cc8fae248246.png">

## Test coverage

Start karma to get the coverage summary from the root folder

```
karma start
```

<img width="634" alt="Screenshot 2021-03-09 at 18 07 34" src="https://user-images.githubusercontent.com/71934417/110527946-7efe0000-810f-11eb-973a-cd42a1ac3c76.png">

Alternatively, index.html in the coverage folder provides the same summary

```
open coverage/html/index.html
```

<img width="1436" alt="Screenshot 2021-03-09 at 20 12 55" src="https://user-images.githubusercontent.com/71934417/110531762-e158ff80-8113-11eb-952d-d1aac896d171.png">

## Extensions to be implemented

I need to seperate the larger Account class into two as well as follow the SRP
