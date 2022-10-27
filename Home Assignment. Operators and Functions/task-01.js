// formula
// celsius to kelvin = celsius + 273.15
// fahrenheit to kelvin = (fahrenheit + 459.67) * 5/9

function convertCelsiusToKelvin(tempCelsius) {
     return tempCelsius + 273.15;
}

function convertFahrenheitToKelvin(tempFahrenheit){
     return (tempFahrenheit + 459.67) * 5/9;
}

const tempCelsiusFromPagasa = 36;
const tempFahrenheitFromPagasa = 96;

console.log(`The temperature in Celsius is ${tempCelsiusFromPagasa}°C, which is equivalent to ${convertCelsiusToKelvin(tempCelsiusFromPagasa)}°K`);
console.log(`The temperature in Fahrenheit is ${tempFahrenheitFromPagasa}°F, which is equivalent to ${convertFahrenheitToKelvin(tempFahrenheitFromPagasa)}°K`);