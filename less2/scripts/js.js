// false
// 0
// 0n
// ""
// null
// undefined
// NaN

// if(умова){
//     [інструкція якщо істина];
//     [інструкція якщо істина];
//     [інструкція якщо істина];
// }else if{
//     [інструкція якщо істина];
//     [інструкція якщо істина];
// }else{
//     [інструкція якщо істина];
// }

// ==
// !=
// >
// <
// >=
// <=
// ===
// !==
// let a: = 3, b = "3";
// console.log(a === b);

// let a = prompt("Введіть перше число");
// let b = prompt("Введіть друге число");
// let c;
// if (a > b)c = "a > b"
// else if (a < b)c = "a < b"
// else c = "a == b"
// alert(c);

//умова switch

// let course = prompt("What is the name of your course?"), title;
//
// switch (course) {
//     case "UI/UX":
//         title = "WEB інструменти"
//         break;
//
//     case "Python":
//         title = "програмування"
//         break;
//
//     case "Frontend":
//     case "HTML":
//     case "JavaScript":
//     case "CSS":
//         title = "WEB програмування"
//         break;
//
//     default:
//
//         break;
// }
// alert(title);

// let a = "false", b = false, c = true;
//
// console.log(!a);
// console.log(!!a);
//
// console.log(a && c);

// let age = prompt("Скільки тобі років?"), info;
// if (age < 10) {
//     info = "школота"
// }else if (age >= 10 && age < 35) {
//     info = "призивний"
// }else {
//     info = "Ще є фанс"
// }
// alert(info);

let name = prompt("What is your name?"),
    greeting = `Вітаємо, ${name || "гість"}!`
alert(greeting);