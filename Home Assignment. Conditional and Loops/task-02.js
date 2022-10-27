// 40 - 100  = Normal reading
// 101 - 109 = Acceptable to continue home monitoring.
// 110 - 119 = Seek advice from health professionals.
// > 131 = Seek urgent medical advice.

function getPulseRateReading(pulseRate) {
    if (pulseRate >= 40 && pulseRate <= 100) {
        return 'Normal reading';
    }

    if (pulseRate >= 101 && pulseRate <= 109) {
        return 'Acceptable to continue home monitoring';
    }

    if (pulseRate >= 110 && pulseRate <= 119) {
        return 'Seek advice from health professionals';
    }

    if (pulseRate >= 131) {
        return 'Seek urgent medical advice.';
    }
}

const currentPulseRate = 80;
const pulseRateReading = getPulseRateReading(currentPulseRate);

console.log(`Your pulse rate is ${currentPulseRate}, and ${pulseRateReading}.`);
