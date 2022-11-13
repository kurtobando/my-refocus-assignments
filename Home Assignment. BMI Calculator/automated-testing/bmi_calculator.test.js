const calculateBMI = require('../bmi_calculator');

test('[82kg, 172cm] should be Overweight', () => {
     expect(calculateBMI(82, 172)).toBe('Overweight');
});

test('[82kg, 172cm] should NOT be Normal weight', () => {
    expect(calculateBMI(82, 172)).not.toBe('Normal weight');
});

test('[82kg, 172cm] should NOT be Underweight', () => {
    expect(calculateBMI(82, 172)).not.toBe('Underweight');
});

test('[82kg, 172cm] should NOT be Obese', () => {
    expect(calculateBMI(82, 172)).not.toBe('Obese');
});

test('[60kg, 172cm] should NOT be Overweight', () => {
    expect(calculateBMI(60, 172)).not.toBe('Overweight');
});

test('[60kg, 172cm] should be Normal weight', () => {
    expect(calculateBMI(60, 172)).toBe('Normal weight');
});

test('[60kg, 172cm] should NOT be Underweight', () => {
    expect(calculateBMI(60, 172)).not.toBe('Underweight');
});

test('[60kg, 172cm] should NOT be Obese', () => {
    expect(calculateBMI(60, 172)).not.toBe('Obese');
});

test('[50kg, 172cm] should NOT be Overweight', () => {
    expect(calculateBMI(50, 172)).not.toBe('Overweight');
});

test('[50kg, 172cm] should NOT be Normal weight', () => {
    expect(calculateBMI(50, 172)).not.toBe('Normal weight');
});

test('[50kg, 172cm] should be Underweight', () => {
    expect(calculateBMI(50, 172)).toBe('Underweight');
});

test('[50kg, 172cm] should NOT be Obese', () => {
    expect(calculateBMI(50, 172)).not.toBe('Obese');
});

test('[90kg, 172cm] should NOT be Overweight', () => {
    expect(calculateBMI(90, 172)).not.toBe('Overweight');
});

test('[90kg, 172cm] should NOT be Normal weight', () => {
    expect(calculateBMI(90, 172)).not.toBe('Normal weight');
});

test('[90kg, 172cm] should NOT be Underweight', () => {
    expect(calculateBMI(90, 172)).not.toBe('Underweight');
});

test('[90kg, 172cm] should be Obese', () => {
    expect(calculateBMI(90, 172)).toBe('Obese');
});