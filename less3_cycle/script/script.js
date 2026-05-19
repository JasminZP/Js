// 1
// for (let i = 1; i <= 10; i++) {
//     console.log(i);
// }

// 2

// let N = Number(prompt("Введіть число"))
// for (let i = 1; i <= N; i++) {
//     if (i % 2 == 0) {
//         console.log(i);
//     }
// }

// 3

// let N = Number(prompt("Введіть число"))
// let sum = 0;
// for (let i = 1; i <= N; i++) {
//     sum += i;
// }
// console.log(sum)

// 4

// let N = Number(prompt("Введіть число"))
//
// for (let i = N; i != 0; i--) {
//     console.log(i);
// }

// 5

// let N = Number(prompt("Введіть число"))
// for (let i = 1; i <= 10; i++) {
//     console.log(`${N} X ${i} = ` + `${N*i}`);
// }

// 6

// let pass = prompt("Пароль");
// let passcorrect = "admin123";
// while (pass != passcorrect) {
//     pass = prompt("Неправильний пароль");
// }
// alert("Пароль правильний")

// 7

// let pass = prompt("Пароль");
// let passcorrect = "admin123";
// let i = 1;
// while (pass != passcorrect) {
//     pass = prompt("Неправильний пароль, залишилось: "  + `${3-i} спроби`);
//     i++
//     if (i == 3 && pass != passcorrect) {
//         alert("Доступ заблоковано");
//         break;
//     }
// }
// if (pass == passcorrect) {
//     alert("Доступ дозволено");
// }

// 8

// for (let i = 0; i <= 20; i++) {
//     if (i % 2 === 0) {
//         continue;
//     }
//     console.log(i);
// }

// 9

// let N = Number(prompt("Введіть число"));
// let i = 0;
// while (N >= 1) {
//     i++;
//     N = N/10
// }
// console.log(i);

// 10

// let N = Number(prompt("Вгадайте число"))
// let M = Math.floor(Math.random() * 100)
//
// while (N != M) {
//     if (N > M) {
//         N = Number(prompt("Меньше"));
//     }
//     else if (N < M) {
//         N = Number(prompt("Більше"));
//     }
// }
// if (N == M) {
//     alert("Ви вгадали!")
// }