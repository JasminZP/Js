let income_1 = Number(prompt("Введіть дохід за перший квартал"));
let income_2 = Number(prompt("Введіть дохід за другий квартал"));
let income_3 = Number(prompt("Введіть дохід за третій квартал"));
let income_4 = Number(prompt("Введіть дохід за четвертий квартал"));

const dollarRate = 43.7;
const euroRate = 51.2;

let totalIncome = income_1 + income_2 + income_3 + income_4;

let singleTax = totalIncome * 0.05;
let esv = 18000;

let moneyAfterTaxes = totalIncome - singleTax - esv;

let ComeBackAlive = moneyAfterTaxes * 0.1;
let ChildrenHeroes = moneyAfterTaxes * 0.05;

let business = 100000;

let Dollar = 3000 * dollarRate;
let Euro = 2500 * euroRate;
let Money = Dollar + Euro;

let balance = moneyAfterTaxes - ComeBackAlive - ChildrenHeroes - business - Money;

console.log(`За рік Максим заробив — ${totalIncome} грн`);
console.log(`Єдиний податок 5% складає ${singleTax} грн`);
console.log(`Відрахування у фонди «Повернись живим» та «Діти Героїв» складає ${fundComeBackAlive} грн та ${fundChildrenHeroes} грн відповідно`);
console.log(`На валютну карту сумарно відкладено ще ${totalCurrencyMoney} грн`);
console.log(`Залишок на рахунку Максима складає ${balance} грн`);