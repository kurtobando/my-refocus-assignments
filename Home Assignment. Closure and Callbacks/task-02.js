const accountName = 'Kurt';
let balance = 0;

function createBankAccount(callback, accountName, amount = 0) {
    callback(accountName, amount);
}

function getCurrentBalance(accountName) {
    console.log(`Hi ${accountName}, your current balance is ₱${balance}`);
}

function depositMoney(accountName, amount) {
    balance += amount;
    console.log(`Hi ${accountName}, you have deposited ₱${amount}`);
}

function withdrawMoney(accountName, amount) {
    if (amount > balance) {
        console.log('Insufficient funds');
        return;
    }
    balance -= amount;
    console.log(`Hi ${accountName}, you have withdrawn ₱${amount}`);
}

createBankAccount(getCurrentBalance, accountName);
createBankAccount(depositMoney, accountName, 25);
createBankAccount(getCurrentBalance, accountName);
createBankAccount(withdrawMoney, accountName, 9);
createBankAccount(getCurrentBalance, accountName);
