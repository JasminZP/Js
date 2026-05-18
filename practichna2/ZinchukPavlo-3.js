let score = Number(prompt("Яка ваша кількість балів"))
let homeworkDone = prompt("Виконане домашнє завдання?")
let finalTestPassed = prompt("Пройдено тест?")

if (score >= 70 && homeworkDone === 'true' && finalTestPassed === 'true') {
    console.log("Сертифікат успішно отримано");
    alert("Сертифікат успішно отримано")
}
else {
    console.log("Умови для отримання сертифіката не виконані")
    alert("Умови для отримання сертифіката не виконані")
}