let score = Number(prompt("Введіть кількість балів"));
let homeworkDone = prompt("Чи всі домашні завдання виконані?");
let finalTestPassed = prompt("Чи пройдено фінальний тест?");
let result;

if (score >= 70 && homeworkDone===true && finalTestPassed===true) {
    result = "Сертифікат успішно отримано";
} else {
    result = "Умови для отримання сертифіката не виконані";
}
console.log(result);
alert(result);