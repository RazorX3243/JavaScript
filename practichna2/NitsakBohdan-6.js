let temperature = Number(prompt("Температура в кімнаті"));
let sensorError = prompt("Чи справний датчик?");
let result;

if (temperature < 18) {
    result = "Увімкнути обігрів";
} else if (temperature >= 18 && temperature <= 25) {
    result = "Температура комфортна";
} else if (temperature > 25) {
    result = "Увімкнути кондиціонер";
} else if (sensorError===true) {
    result = "Помилка датчика температури";
}
console.log(result);
alert(result);