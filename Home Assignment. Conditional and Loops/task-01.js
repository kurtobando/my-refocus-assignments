// > 96 = normal
// 95 = acceptable
// 93-94 = seek advice
// < 92 = seek urgent advice

function getPulseOximeterReading(oxygenLevel) {
    if (oxygenLevel >= 96) {
        return 'Normal reading';
    }

    if (oxygenLevel === 95) {
        return 'Acceptable to continue home monitoring';
    }

    if (oxygenLevel >= 93 && oxygenLevel <= 94) {
        return 'Seek advice from health professionals';
    }

    if (oxygenLevel <= 92) {
        return 'Seek urgent medical advice.';
    }
}

const oxygenLevel = 91;
const oxygenReading = getPulseOximeterReading(oxygenLevel);

console.log(`Your oxygen level is ${oxygenLevel}, and ${oxygenReading}.`);
