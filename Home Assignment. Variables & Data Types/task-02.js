// goalSavingsAmount = 10000 
// currentSavingsAmount = 7500

function getRemainingAmount(expected, current) {
     return expected - current;
}

function getPercentage(amount, expected) {
     return (amount / expected) * 100;
}

const goalSavingsAmount = 10000;
const currentSavingsAmount = 7500;
const remainingAmount = getRemainingAmount(goalSavingsAmount, currentSavingsAmount);
const percentage = getPercentage(remainingAmount, goalSavingsAmount);

console.log(`Thank you for your discipline and hardwork, Sam! You are now ${percentage}% away from your goal of saving ₱${goalSavingsAmount}.`)