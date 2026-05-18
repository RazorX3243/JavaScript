let isAuthorized = prompt("Чи авторизований користувач?");
let internetSpeed = Number(prompt("Яка швидкість інтернету"));
let isBanned = prompt("Чи заблокований акаунт?");
let result;

if (isAuthorized===true && internetSpeed >= 20 && isBanned===false) {
    result = "Доступ дозволено";
} else {
    result = "Доступ заборонено";
}
console.log(result);
alert(result);