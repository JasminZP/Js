let temperature = Number(prompt("Яка температура в кімнаті?"))
let sensorError = prompt("Чи є помилка датчика")

console.log(sensorError)

if (temperature < 18 && sensorError !== "true") {
    console.log("Увімкнути обігрів")
    alert("Увімкнути обігрів")
}
else if (temperature >= 18 && temperature <= 25 && sensorError !== "true") {
    console.log("Температура комфортна")
    alert("Температура комфортна")
}
else if (sensorError !== "true") {
    console.log("Увімкнути кондиціонер")
    alert("Увімкнути кондиціонер")
}
else {
    console.log("Помилка датчика температури")
    alert("Помилка датчика температури")
}