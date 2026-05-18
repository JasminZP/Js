let isAuthorized = prompt("Ви авторизовані? (true/false)");
let InternetSpeed = prompt("Ваша швидкість інтернету?(у Мб/с)");
let isBanned = prompt("Ваш аккаунт заблокований чи ні? (true/false)");

if (isAuthorized === 'true' && InternetSpeed >= 20 && isBanned === 'false') {
    console.log("Вам надано доступ до онлайну");
    alert("Вам надано доступ до онлайну")
}
else {
    console.log("Вам не надано доступ до онлайну")
    alert("Вам не надано доступ до онлайну")
}