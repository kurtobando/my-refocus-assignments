function computeTip(totalBill) {
  return totalBill / 10;
}

const bill = 500;
const tip = computeTip(bill);

console.log(`The tip for a bill of ₱${bill} is ₱${tip}`);