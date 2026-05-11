// false
// 0
// 0n
// ""
// null
// undefined
// NaN

// if (x == 1) {
//
// }
// else if {
//
// }
// else {
//
// }

// ==
// !=
// >
// <
// >=
// <=
// ===
// !==
// let a = 3, b = "3";
//     console.log(a == b);

// let a = prompt("Who is Pavlo");
// let b = prompt("What is Pavlo");
// let c;
// if (a > b) {
//     c = "a > b"
// }
// else if (a < b) {
//     c = "a < b"
// }
// else {
//     c = "a == b"
// }
// alert(c);

// let a = prompt("Who is Pavlo");
// let b = prompt("What is Pavlo");
// let c;
//
// if (a > b)c = "a > b";
// else if (a > c)c = "a > c";
// else c = "a == b";
// alert(c);


let course = prompt("What is the name of your course?"), title;

switch (course) {
    case 'figma':
        title = 'web rozrobka';
        break;
    case 'Python':
        title = 'programming';
        break;
    case 'frontend':
        title = 'web programming';
        break;
    default:
        title = 'churka';
        break;
}
alert(title);

// let a = 'false', b = false, c = true;
// console.log(!a);
// console.log(!!a);
//
// console.log(a && c);
// console.log(a || b);

// let age = prompt("Ckik tobi let"), info;
// if (age < 18) {
//     info = 'Cigan'
// }
// else if (age >= 18 && age < 35) {
//     info = 'Prizivniy'
// }
// else {
//     info = 'She e chance'
// }
// alert(info);

// let name = prompt("who are youoyoyouoyoyuoytuoyuoyuoyuoyuo"),
//     greeting = `Vitaemo, ${name || 'Gist'}`;
// alert(greeting);