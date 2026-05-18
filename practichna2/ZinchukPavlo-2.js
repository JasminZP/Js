let day = String(prompt("Який зараз день тижня?"))
let cost;
switch (day) {
    case 'понеділок':
    case 'вівторок':
    case 'середа':
        cost = 150;
        break;
    case 'четвер':
    case 'п’ятниця':
        cost = 200;
        break;
    case 'субота':
    case 'неділя':
        cost = 250;
        break;
    default:
        cost = 20;
}
if (cost != 20) {
    console.log(`Вартість квитка складає ${cost} грн`)
    alert(`Вартість квитка складає ${cost} грн`)
}
else {
    alert("Помилка введення дня тижня")
    console.log("Помилка введення дня тижня")
}