function convertTemperature() {
    const temperature = parseFloat(document.getElementById('temperatureInput').value);
    const unitFrom = document.getElementById('unitFrom').value;
    const unitTo = document.getElementById('unitTo').value;
    let result;

    if (isNaN(temperature)) {
        document.getElementById('result').innerHTML = "Please enter a valid number.";
        return;
    }

    if (unitFrom === unitTo) {
        result = temperature; // No conversion needed
    } else if (unitFrom === "Celsius" && unitTo === "Fahrenheit") {
        result = (temperature * 9/5) + 32;
    } else if (unitFrom === "Celsius" && unitTo === "Kelvin") {
        result = temperature + 273.15;
    } else if (unitFrom === "Fahrenheit" && unitTo === "Celsius") {
        result = (temperature - 32) * 5/9;
    } else if (unitFrom === "Fahrenheit" && unitTo === "Kelvin") {
        result = ((temperature - 32) * 5/9) + 273.15;
    } else if (unitFrom === "Kelvin" && unitTo === "Celsius") {
        result = temperature - 273.15;
    } else if (unitFrom === "Kelvin" && unitTo === "Fahrenheit") {
        result = (temperature - 273.15) * 9/5 + 32;
    }

    document.getElementById('result').innerHTML = `Converted Temperature: ${result.toFixed(2)} ${unitTo}`;
}
