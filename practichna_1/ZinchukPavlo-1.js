let amount = Number(prompt("Введіть суму оплати в доларах"));

const Dollar = 43.7;
let Commission = 0.005;

let komisia = amount * Dollar;
let Kinec = komisia - komisia * Commission;

console.log(`Після виконання проєкту, буде нараховано ${Kinec} грн з урахуванням комісії банку!`);