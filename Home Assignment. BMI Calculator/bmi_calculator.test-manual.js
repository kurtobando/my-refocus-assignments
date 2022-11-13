const calculateBMI = require('./bmi_calculator.js');

console.log('***');
console.log('testing bmi for 82kg, 172cm, should be Overweight');
console.log('Overweight', calculateBMI(82, 172) === 'Overweight'); // true
console.log('Normal weight', calculateBMI(82, 172) === 'Normal weight'); // false
console.log('Underweight', calculateBMI(82, 172) === 'Underweight'); // false
console.log('Obese', calculateBMI(82, 172) === 'Obese'); // false

console.log('***');
console.log('testing bmi for 60kg, 172cm, should be Normal weight');
console.log('Overweight', calculateBMI(60, 172) === 'Overweight'); // false
console.log('Normal weight', calculateBMI(60, 172) === 'Normal weight'); // true
console.log('Underweight', calculateBMI(60, 172) === 'Underweight'); // false
console.log('Obese', calculateBMI(60, 172) === 'Obese'); // false

console.log('***');
console.log('testing bmi for 50kg, 172cm, should be Underweight');
console.log('Overweight', calculateBMI(50, 172) === 'Overweight'); // false
console.log('Normal weight', calculateBMI(50, 172) === 'Normal weight'); // false
console.log('Underweight', calculateBMI(50, 172) === 'Underweight'); // true
console.log('Obese', calculateBMI(50, 172) === 'Obese'); // false

console.log('***');
console.log('testing bmi for 90kg, 172cm, should be Obese');
console.log('Overweight', calculateBMI(90, 172) === 'Overweight'); // false
console.log('Normal weight', calculateBMI(90, 172) === 'Normal weight'); // false
console.log('Underweight', calculateBMI(90, 172) === 'Underweight'); // false
console.log('Obese', calculateBMI(90, 172) === 'Obese'); // true
