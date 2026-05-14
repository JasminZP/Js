const dollarRate = 43.7;

let amount_1 = Number(prompt("Введіть заробіток за перший місяць в гривнях"));
let amount_2 = Number(prompt("Введіть заробіток за другий місяць в доларах")) * dollarRate;
let amount_3 = Number(prompt("Введіть заробіток за третій місяць в доларах")) * dollarRate;

let totalIncome = amount_1 + amount_2 + amount_3;

let singleTax = totalIncome * 0.05;
let esv = 4500;
let totalTax = singleTax + esv;

console.log(`Загальна сума доходу Максима складає ${totalIncome} грн.`);
console.log(`В кінці кварталу Максиму необхідно сплатити ${totalTax} грн.`);