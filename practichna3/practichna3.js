// Зав 1

// let a = 0;
// for (let i = 0; i < 10; i++) {
//     a += 1
//     console.log(a)
// }

// Зав 2

// let a = prompt();
// for (let i = 0; i < a; i++, i%2==0) {
//     if (i % 2 == 0) {
//         console.log(i);
//     }
// }

// Зав 3

// let a = prompt();
// let b = 0;
// for (let i = 0; i < a; i++) {
//     b = b + i;
// }
// console.log(b);

// Зав 4

// let a = prompt();
// let b = a;
// console.log(a);
// for (let i = 0; i <= b - 1; i++) {
//     a = a - 1
//     console.log(a)
// }

// Зав 5

// let a = prompt();
// for (let i = 1; i <= 10; i++) {
//     console.log(a*i)
// }

// Зав 6

// let a = prompt();
// let b = "abcd";
// while (a != b) {
//     alert("Неправильно");
//     a = prompt();
// }
// alert("Маладєц");

// Зав 7

// let b = "abcd";
// let с = 3;
// let a = prompt("Введіть пароль:");
//
// for (let i = 1; i <= с; i++) {
//     if (a === b) {
//         alert("Маладєц");
//         break;
//     }
//     if (i === с) {
//         alert("Гуляй");
//         break;
//     }
//     a = prompt(`Неправильно. Спроба №${i} вичерпана. Спробуйте ще раз:`);
// }

// Зав 8

// let a = prompt();
// for (let i = 0; i < a; i++) {
//     if (i % 2 != 1) {
//         continue;
//     }
//     console.log(i);
// }

// зав 9

// let a = Number(prompt());
// let b = 0;
// let c = 1;
// for (let i = 1; i <= 100; c *= 10) {
//     if ((a / c) >= 1) {
//         b = b + 1;
//     } else {
//         break;
//     }
// }
// console.log(b);

// Зав 10

// let a = Number(prompt());
// let b = 1488;
// for (let i = 0; a != b; i++) {
//     if (a > b) {
//         alert("Менше")
//         a = Number(prompt());
//     } else if (a < b) {
//         alert("Більше")
//         a = Number(prompt());
//     } else {
//         break;
//     }
// }
// alert("Легенда")