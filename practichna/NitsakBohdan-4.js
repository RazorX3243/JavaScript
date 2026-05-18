let income_1 = 100000;
let income_2 = 200000;
let income_3 = 300000;
let income_4 = 150000;

const usd_rate = 43.7;
const eur_rate = 51.2;

let total_income = income_1 + income_2 + income_3 + income_4;

let single_tax = total_income * 0.05;
let esv_tax = 18000;

let income_after_taxes = total_income - single_tax - esv_tax;
let pz_fund = income_after_taxes * 0.10;
let children_fund = income_after_taxes * 0.05;
let business_investment = 100000;
let currency_uah = (2500 * eur_rate) + (3000 * usd_rate);

let final_balance = income_after_taxes - pz_fund - children_fund - business_investment - currency_uah;

console.log(`За рік Максим заробив — ${total_income} грн`);
console.log(`Єдиний податок 5% складає ${single_tax} грн`);
console.log(`Відрахування у фонди «Повернись живим» та «Діти Героїв» складає ${pz_fund} грн та ${children_fund} грн відповідно`);
console.log(`На валютну карту сумарно відкладено ще ${currency_uah} грн`);
console.log(`Залишок на рахунку Максима складає ${final_balance} грн`);