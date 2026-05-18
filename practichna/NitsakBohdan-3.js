let balance = 210000;
let amount_1 = 60000;

const usd_month_1 = 43.7;
const usd_month_2 = usd_month_1 + 1;
const usd_month_3 = usd_month_2 + 1;
let amount_2 = 2600 * usd_month_2;
let amount_3 = 1700 * usd_month_3;

const netflix_usd = 9.99;
let netflix_uah_1 = netflix_usd * usd_month_1;
let netflix_uah_2 = netflix_usd * usd_month_2;
let netflix_uah_3 = netflix_usd * usd_month_3;
let total_netflix = netflix_uah_1 + netflix_uah_2 + netflix_uah_3;

let coworking_total = 3500 * 3;
let hardware_total = 4000 * 3;

let total_expenses = coworking_total + hardware_total + total_netflix;
let total_income = amount_1 + amount_2 + amount_3;
let total_taxes = 4500 + (total_income * 0.05);
balance = balance + total_income - total_expenses - total_taxes;

console.log(`В цьому кварталі Максим витратив ${total_expenses} грн`);
console.log(`Загальний дохід Максима за квартал становить ${total_income} грн`);
console.log(`Загальна сума податків становить ${total_taxes} грн`);
console.log(`Отже, наприкінці кварталу залишок на рахунку Максима становить ${balance} грн`);