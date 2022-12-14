// Task #1
// Develop a banking system. To do that, first, create an object named “bankAccount”
// with the following fields:
// “bankAccountID”, which is autogenerated
// “accountNumber”
// “credentials”, which is an array with a username, password, and pin
// “balance”, which is an amount of money
// “createdAt”, which is a date

const bankAccount = {
    bankAccountID: 1,
    accountNumber: 123456789,
    credentials: ['johndoe', 'PasswordRefocus', '1234'],
    balance: 0,
    createdAt: new Date(),
};

// Task #2
// Create an object which represents a user account and has the following fields:
// “bankAccount”, which is an object from task 1
// “debitCard”, which is a card number
// “firstName”
// “lastName”
// “birthDate”
// “validID”, which is an array with a type of ID passport or driver’s license and
// the ID number
// “address

const userAccount = {
    bankAccount: bankAccount,
    debitCard: 123456789,
    firstName: 'John',
    lastName: 'Doe',
    birthDate: new Date(),
    validID: ['Passport', '123456789'],
    address: '123 Main Street',
};

// Task #3
// Outside the objects, create functions that enable interaction with a user’s bank
// account:
// “getBankAccountDetails”, which checks if the username and password
// are correct and shows the bank account details
// “withdrawMoney”, which checks if the username and password are correct and
// enables getting money from the bank account using the account number
// “depositMoney”, which allows putting money in the bank account using
// the account number

function getBankAccountDetails(username, password) {
    if (
        username !== userAccount.bankAccount.credentials[0] ||
        password !== userAccount.bankAccount.credentials[1]
    ) {
        return 'Invalid username or password';
    }

    return userAccount.bankAccount;
}

function depositMoney(accountNumber, amount) {
    if (accountNumber !== userAccount.bankAccount.accountNumber) {
        return 'Invalid account number';
    }

    userAccount.bankAccount.balance += amount;
    return `${amount} has been deposited into your account`;
}

function withdrawMoney(username, password, accountNumber, amount) {
    if (
        username !== userAccount.bankAccount.credentials[0] ||
        password !== userAccount.bankAccount.credentials[1] ||
        accountNumber !== userAccount.bankAccount.accountNumber
    ) {
        return 'Invalid username, password, or account number';
    }

    if (amount > userAccount.bankAccount.balance) {
        return 'Insufficient funds';
    }

    userAccount.bankAccount.balance -= amount;
    return `${amount} has been withdrawn from your account`;
}

console.log(depositMoney(000000000, 100));
console.log(depositMoney(123456789, 100));

console.log(withdrawMoney('johndoe', 'PasswordRefocus', 123456789, 49));
console.log(withdrawMoney('johndoe', 'IncorrectPassword', 123456789, 49));

console.log(getBankAccountDetails('johndoe', 'IncorrectPassword'));
console.log(getBankAccountDetails('johndoe', 'PasswordRefocus'));
