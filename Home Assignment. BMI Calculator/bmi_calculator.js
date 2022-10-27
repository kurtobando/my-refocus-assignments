function calculateBMI(weightInKg, heightInCm) {
    let bmi = weightInKg / Math.pow(heightInCm / 100, 2);

    if (bmi < 18.5) {
        return 'Underweight';
    }

    if (bmi > 18.5 && bmi < 24.9) {
        return 'Normal weight';
    }

    if (bmi > 25 && bmi < 29.9) {
        return 'Overweight';
    }

    return 'Obese';
}

const result = calculateBMI(82, 172);

console.log(result);
