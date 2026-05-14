let balance = Number(prompt("Введіть баланс на початок кварталу"));

const dollarRate_1 = 43.7;
const dollarRate_2 = dollarRate_1 + 1;
const dollarRate_3 = dollarRate_2 + 1;

let amount_1 = Number(prompt("Введіть заробіток за перший місяць в гривнях"));
let amount_2 = Number(prompt("Введіть заробіток за другий місяць в доларах")) * dollarRate_2;
let amount_3 = Number(prompt("Введіть заробіток за третій місяць в доларах")) * dollarRate_3;

let coworking = 3500 * 3;
let technique = 4000 * 3;
let netflix = 9.99 * dollarRate_1 + 9.99 * dollarRate_2 + 9.99 * dollarRate_3;

let totalIncome = amount_1 + amount_2 + amount_3;

const singleTax = 4500;
let esv = totalIncome * 0.05;
let totalTaxes = singleTax + esv;

let totalExpenses = coworking + technique + netflix;

balance = balance + totalIncome - totalExpenses - totalTaxes;

console.log(`В цьому кварталі Максим витратив ${totalExpenses} грн`);
console.log(`Загальний дохід Максима за квартал становить ${totalIncome} грн`);
console.log(`Загальна сума податків становить ${totalTaxes} грн`);
console.log(`Отже, наприкінці кварталу залишок на рахунку Максима становить ${balance} грн`);