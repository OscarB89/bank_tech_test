# Bank tech test

Today, you'll practice doing a tech test.

For most tech tests, you'll essentially have unlimited time. This practice session is about producing the best code you can when there is a minimal time pressure.

You'll get to practice your OO design and TDD skills.

You'll work alone, and you'll also review your own code so you can practice reflecting on and improving your own work.

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
const account = new Account();
```

To deposit an amount (e.g. $500)

```
$ account.deposit(500);
```

To withdraw an amount (e.g. $250)

```
$ account.withdraw(250);
```

To check the current balance

```
$ account.printBalance();
```

To print the Account Statement

```
$ atm.printStatement();
```

### Example

<img width="829" alt="Screenshot 2021-03-09 at 16 08 03" src="https://user-images.githubusercontent.com/71934417/110501702-5a475f80-80f2-11eb-8848-dc743946e2f4.png">
