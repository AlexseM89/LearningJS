//*********************** ОСНОВЫ ФУНКЦИЙ *****************
// function sayHi() {
//     console.log("Привет!");
// }
// sayHi();

// function sayHi(name = "Guest") {
//     console.log(`Привет, ${name}!`);
// }
// sayHi();
// sayHi("Aleksei");

// function showSum(a, b) {
//     console.log(a + b);
// }
// showSum();
// showSum(2, 3);
// function showSum(a, b = 5) {
//     console.log(a + b);
// }
// showSum();
// showSum(2, 3);
// showSum(2);

//return - функция что-то возвращает

// function sum(a, b) {
//     return a + b;
// }
// // const resultSum = sum(2, 3);
// // sum(2, 3);
// // console.log(resultSum);

// console.log(typeof sum);
// let text = "Hi!";
// function sayHi() {
//     console.log(text);
// }
// sayHi();
// console.log(text);

// function sayHi() {
//     a = 10;
// }
// console.log(a);
// sayHi();
// if (true) {
//     let b = 10;
// }
// console.log(b);

// function sayHi(name = "Гость") {
//     console.log(`Привет, ${name}!`);
// }
// sayHi();
// sayHi("Aleksei");

// function stp(a, b = 1) {
//     console.log(a ** b);
// }

// stp(3);

// function numWhy(a) {
//     return a % 2 ? "Нечетное" : "четное";
// }
// console.log(numWhy(2));
// console.log(numWhy(3));

// const showSun = function (a, b) {
//     console.log(a + b);
// };
// // const copyShowSum = showSun;
// // // console.log(copyShowSum);
// // // // showSun(1, 5);
// // // copyShowSum(1, 4);
// // const callback = function(){
// //     console.log("Work callback")
// // }
// // setTimeout(showSun, 3000);
// showSun(2, 3);
// function showSun(a, b) {
//     console.log(a + b);
// }

// const doubleValue = (value) => value * 2;

// const showText = (text, num) => {
//     for (let i = 1; i <= num; i++) {
//         console.log(i, text);
//     }
// };
// showText("Gh", 3);

const bukva = (value) => {
    if (
        value === "а" ||
        value === "о" ||
        value === "у" ||
        value === "ы" ||
        value === "и" ||
        value === "э" ||
        value === "ю" ||
        value === "я"
    ) {
        console.log("true");
    } else {
        console.log("false");
    }
};
bukva("а");
bukva("v");
