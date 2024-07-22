class Account {
    constructor(acc_holder_name, acc_no, balance = 0) {
        this.acc_holder_name = acc_holder_name;
        this.acc_no = acc_no;
        this.balance = balance;
    }

    deposit(amount) {
        this.balance += amount;
        return `Deposited ${amount} Rupees. New balance: ${this.balance} Rupees`;
    }

    withdraw(amount) {
        if (amount <= this.balance) {
            this.balance -= amount;
            return `Withdrew ${amount} Rupees. New balance: ${this.balance} Rupees`;
        } else {
            return "Insufficient balance. Withdrawal not allowed.";
        }
    }

    check_balance() {
        return `Account balance for ${this.acc_holder_name} (Account No. ${this.acc_no}): ${this.balance} CAD`;
    }
}

// Example usage
const account1 = new Account("John Doe", "123456", 1000);
console.log(account1.deposit(500));
console.log(account1.withdraw(200));
console.log(account1.check_balance());
