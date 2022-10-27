// create bank account
// can check balance
// can deposit money
// can withdraw money

function createBankAccount(name) {
    let balance = 0;

    function getCurrentBalance() {
        console.log(`Hi ${name}, your current balance is ₱${balance}`);
    }

    function depositMoney(amount) {
        balance += amount;
        console.log(`Hi ${name}, you have deposited ₱${amount}`);
    }

    function withdrawMoney(amount) {
        if (amount > balance) {
            console.log(`Hi ${name}, you have insufficient funds`);
            return;
        }
        balance -= amount;
        console.log(`Hi ${name}, you have withdrawn ₱${amount}`);
    }

    return {
        getCurrentBalance,
        depositMoney,
        withdrawMoney,
    };
}

const account = createBankAccount('Kurt');

account.getCurrentBalance();
account.withdrawMoney(100);
account.depositMoney(100);
account.getCurrentBalance();
account.withdrawMoney(49);
account.getCurrentBalance();
