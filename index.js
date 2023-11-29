function BankAccount(accountNumber, name, type, balance) {
    this.accountNumber = accountNumber;
    this.name = name;
    this.type = type;
    this.balance = balance;
    this.active = true;
}

BankAccount.prototype.deposit = function (amount) {
    if (this.active) {
        this.balance += amount;
        console.log(`Deposited : ${amount}.`);
        console.log(`New Balance : ${this.balance}.`);
    } else {
        console.log("Account is not active!. Cannot deposit");
    }
}

BankAccount.prototype.withdraw = function (amount) {
    if (this.active) {
        if (this.balance >= amount) {
            this.balance -= amount;
            console.log(`withdraw : ${amount}.`);
            console.log(`New Balance : ${this.balance}.`);
        } else {
            console.log(`Low Balance!`);
        }
    } else {
        console.log("Account is not active!. Cannot deposit");
    }
}

BankAccount.prototype.checkBalance = function () {
   console.log(`Current Balance : ${this.balance}`);
}

BankAccount.prototype.isActive = function () {
    return this.active;
}

function getTotalBalance(accounts) {
    let totalBalance = 0;
    for (const account of accounts) {
      if (account.isActive()) {
        totalBalance += account.balance;
      }
    }
    return totalBalance;
}


const account1 = new BankAccount(2365412, "Sohit", "Saving", 2000);
const account2 = new BankAccount(2365414, "Aman", "Checking", 1000);


account1.deposit(200);
account2.withdraw(100);

account1.checkBalance();
account2.checkBalance();

console.log(`All active total Amount : ${getTotalBalance([account1, account2])}`)